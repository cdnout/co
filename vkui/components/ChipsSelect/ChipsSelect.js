import _typeof from "@babel/runtime/helpers/typeof";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/objectSpread2";
var _excluded = ["option"],
    _excluded2 = ["style", "onFocus", "onKeyDown", "className", "fetching", "renderOption", "emptyText", "getRef", "getRootRef", "disabled", "placeholder", "tabIndex", "getOptionValue", "getOptionLabel", "showSelected", "getNewOptionData", "renderChip", "popupDirection", "creatable", "filterFn", "inputValue", "creatableText", "sizeY", "closeAfterSelect", "onChangeStart", "after", "options"];
import { createScopedElement } from "../../lib/jsxRuntime";
import * as React from "react";
import { DropdownIcon } from "../DropdownIcon/DropdownIcon";
import { classNames } from "../../lib/classNames";
import { ChipsInput, chipsInputDefaultProps } from "../ChipsInput/ChipsInput";
import { CustomSelectOption } from "../CustomSelectOption/CustomSelectOption";
import { useChipsSelect } from "./useChipsSelect";
import { withAdaptivity } from "../../hoc/withAdaptivity";
import { noop } from "../../lib/utils";
import { useDOM } from "../../lib/dom";
import { Caption } from "../Typography/Caption/Caption";
import { prefixClass } from "../../lib/prefixClass";
import { useExternRef } from "../../hooks/useExternRef";
import { useGlobalEventListener } from "../../hooks/useGlobalEventListener";
import { defaultFilterFn } from "../../lib/select";
import { CustomSelectDropdown } from "../CustomSelectDropdown/CustomSelectDropdown";
var FOCUS_ACTION_NEXT = "next";
var FOCUS_ACTION_PREV = "prev";

var chipsSelectDefaultProps = _objectSpread(_objectSpread({}, chipsInputDefaultProps), {}, {
  emptyText: "Ничего не найдено",
  creatableText: "Создать значение",
  onChangeStart: noop,
  creatable: false,
  fetching: false,
  showSelected: true,
  closeAfterSelect: true,
  options: [],
  filterFn: defaultFilterFn,
  renderOption: function renderOption(_ref) {
    var option = _ref.option,
        restProps = _objectWithoutProperties(_ref, _excluded);

    return createScopedElement(CustomSelectOption, restProps);
  }
});

var ChipsSelectComponent = function ChipsSelectComponent(props) {
  var propsWithDefault = _objectSpread(_objectSpread({}, chipsSelectDefaultProps), props);

  var style = propsWithDefault.style,
      onFocus = propsWithDefault.onFocus,
      onKeyDown = propsWithDefault.onKeyDown,
      className = propsWithDefault.className,
      fetching = propsWithDefault.fetching,
      renderOption = propsWithDefault.renderOption,
      emptyText = propsWithDefault.emptyText,
      getRef = propsWithDefault.getRef,
      getRootRef = propsWithDefault.getRootRef,
      disabled = propsWithDefault.disabled,
      placeholder = propsWithDefault.placeholder,
      tabIndex = propsWithDefault.tabIndex,
      getOptionValue = propsWithDefault.getOptionValue,
      getOptionLabel = propsWithDefault.getOptionLabel,
      showSelected = propsWithDefault.showSelected,
      getNewOptionData = propsWithDefault.getNewOptionData,
      renderChip = propsWithDefault.renderChip,
      popupDirection = propsWithDefault.popupDirection,
      creatable = propsWithDefault.creatable,
      filterFn = propsWithDefault.filterFn,
      inputValue = propsWithDefault.inputValue,
      creatableText = propsWithDefault.creatableText,
      sizeY = propsWithDefault.sizeY,
      closeAfterSelect = propsWithDefault.closeAfterSelect,
      onChangeStart = propsWithDefault.onChangeStart,
      after = propsWithDefault.after,
      options = propsWithDefault.options,
      restProps = _objectWithoutProperties(propsWithDefault, _excluded2);

  var _useDOM = useDOM(),
      document = _useDOM.document;

  var _React$useState = React.useState(undefined),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      popperPlacement = _React$useState2[0],
      setPopperPlacement = _React$useState2[1];

  var scrollBoxRef = React.useRef(null);
  var rootRef = useExternRef(getRef);

  var _useChipsSelect = useChipsSelect(propsWithDefault),
      fieldValue = _useChipsSelect.fieldValue,
      _useChipsSelect$selec = _useChipsSelect.selectedOptions,
      selectedOptions = _useChipsSelect$selec === void 0 ? [] : _useChipsSelect$selec,
      opened = _useChipsSelect.opened,
      setOpened = _useChipsSelect.setOpened,
      addOptionFromInput = _useChipsSelect.addOptionFromInput,
      filteredOptions = _useChipsSelect.filteredOptions,
      addOption = _useChipsSelect.addOption,
      handleInputChange = _useChipsSelect.handleInputChange,
      clearInput = _useChipsSelect.clearInput,
      focusedOption = _useChipsSelect.focusedOption,
      setFocusedOption = _useChipsSelect.setFocusedOption,
      focusedOptionIndex = _useChipsSelect.focusedOptionIndex,
      setFocusedOptionIndex = _useChipsSelect.setFocusedOptionIndex;

  var showCreatable = Boolean(creatable && creatableText && !filteredOptions.length && fieldValue);

  var handleFocus = function handleFocus(e) {
    setOpened(true);
    setFocusedOptionIndex(0);
    onFocus(e);
  };

  var handleClickOutside = function handleClickOutside(e) {
    var rootNode = rootRef.current;

    if (rootNode && e.target !== rootNode && !rootNode.contains(e.target)) {
      setOpened(false);
    }
  };

  var chipsSelectOptions = React.useRef([]).current;

  var scrollToElement = function scrollToElement(index) {
    var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var dropdown = scrollBoxRef.current;
    var item = chipsSelectOptions[index];

    if (!item || !dropdown) {
      return;
    }

    var dropdownHeight = dropdown.offsetHeight;
    var scrollTop = dropdown.scrollTop;
    var itemTop = item.offsetTop;
    var itemHeight = item.offsetHeight;

    if (center) {
      dropdown.scrollTop = itemTop - dropdownHeight / 2 + itemHeight / 2;
    } else if (itemTop + itemHeight > dropdownHeight + scrollTop) {
      dropdown.scrollTop = itemTop - dropdownHeight + itemHeight;
    } else if (itemTop < scrollTop) {
      dropdown.scrollTop = itemTop;
    }
  };

  var focusOptionByIndex = function focusOptionByIndex(index, oldIndex) {
    var length = filteredOptions.length;

    if (index < 0) {
      index = length - 1;
    } else if (index >= length) {
      index = 0;
    }

    if (index === oldIndex) {
      return;
    }

    scrollToElement(index);
    setFocusedOptionIndex(index);
  };

  var focusOption = function focusOption(nextIndex, type) {
    var index = typeof nextIndex !== "number" ? -1 : nextIndex;

    if (type === FOCUS_ACTION_NEXT) {
      index = index + 1;
    } else if (type === FOCUS_ACTION_PREV) {
      index = index - 1;
    }

    if (focusedOptionIndex != null) {
      focusOptionByIndex(index, focusedOptionIndex);
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    onKeyDown(e);

    if (e.key === "ArrowUp" && !e.defaultPrevented) {
      e.preventDefault();

      if (!opened) {
        setOpened(true);
        setFocusedOptionIndex(0);
      } else {
        focusOption(focusedOptionIndex, FOCUS_ACTION_PREV);
      }
    }

    if (e.key === "ArrowDown" && !e.defaultPrevented) {
      e.preventDefault();

      if (!opened) {
        setOpened(true);
        setFocusedOptionIndex(0);
      } else {
        focusOption(focusedOptionIndex, FOCUS_ACTION_NEXT);
      }
    }

    if (e.key === "Enter" && !e.defaultPrevented && opened && focusedOptionIndex != null) {
      var _option = filteredOptions[focusedOptionIndex];

      if (_option) {
        onChangeStart(e, _option);

        if (!e.defaultPrevented) {
          addOption(_option);
          setFocusedOptionIndex(null);
          clearInput();
          closeAfterSelect && setOpened(false);
          e.preventDefault();
        }
      } else if (!creatable) {
        e.preventDefault();
      }
    }

    if (["Escape", "Tab"].includes(e.key) && !e.defaultPrevented && opened) {
      setOpened(false);
    }
  };

  React.useEffect(function () {
    if (focusedOptionIndex != null && filteredOptions[focusedOptionIndex]) {
      setFocusedOption(filteredOptions[focusedOptionIndex]);
    } else if (focusedOptionIndex === null || focusedOptionIndex === 0) {
      setFocusedOption(null);
    }
  }, [focusedOptionIndex, filteredOptions, setFocusedOption]);
  React.useEffect(function () {
    var index = focusedOption ? filteredOptions.findIndex(function (_ref2) {
      var value = _ref2.value;
      return value === focusedOption.value;
    }) : -1;

    if (index === -1 && !!filteredOptions.length && !showCreatable && closeAfterSelect) {
      setFocusedOption(filteredOptions[0]);
    }
  }, [filteredOptions, focusedOption, showCreatable, closeAfterSelect, setFocusedOption]);
  useGlobalEventListener(document, "click", handleClickOutside);

  var renderChipWrapper = function renderChipWrapper(renderChipProps) {
    if (renderChipProps === undefined) {
      return null;
    }

    var onRemoveWrapper = function onRemoveWrapper(e, value) {
      var _renderChipProps$onRe;

      e === null || e === void 0 ? void 0 : e.preventDefault();
      e === null || e === void 0 ? void 0 : e.stopPropagation();
      (_renderChipProps$onRe = renderChipProps.onRemove) === null || _renderChipProps$onRe === void 0 ? void 0 : _renderChipProps$onRe.call(renderChipProps, e, value);
    };

    return renderChip(_objectSpread(_objectSpread({}, renderChipProps), {}, {
      onRemove: onRemoveWrapper
    }));
  };

  var isPopperDirectionTop = popperPlacement === null || popperPlacement === void 0 ? void 0 : popperPlacement.includes("top");
  var onPlacementChange = React.useCallback(function (placement) {
    setPopperPlacement(placement);
  }, [setPopperPlacement]);
  var onDropdownMouseLeave = React.useCallback(function () {
    setFocusedOptionIndex(null);
  }, [setFocusedOptionIndex]);
  return createScopedElement("div", {
    vkuiClass: classNames("ChipsSelect", "ChipsSelect--sizeY-".concat(sizeY)),
    ref: rootRef,
    style: style,
    className: className
  }, createScopedElement(ChipsInput, _extends({}, restProps, {
    tabIndex: tabIndex,
    value: selectedOptions,
    inputValue: fieldValue,
    getNewOptionData: getNewOptionData,
    getOptionLabel: getOptionLabel,
    getOptionValue: getOptionValue,
    renderChip: renderChipWrapper,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    placeholder: placeholder,
    vkuiClass: classNames(opened && "ChipsSelect__open", isPopperDirectionTop && "ChipsSelect__open--popupDirectionTop"),
    getRef: getRef,
    disabled: disabled,
    onInputChange: handleInputChange,
    after: createScopedElement(DropdownIcon, null)
  })), opened && createScopedElement(CustomSelectDropdown, {
    targetRef: rootRef,
    placement: popupDirection,
    scrollBoxRef: scrollBoxRef,
    onPlacementChange: onPlacementChange,
    onMouseLeave: onDropdownMouseLeave,
    fetching: fetching,
    vkuiClass: "ChipsSelect__options"
  }, showCreatable && createScopedElement(CustomSelectOption, {
    hovered: focusedOptionIndex === 0,
    onMouseDown: addOptionFromInput,
    onMouseEnter: function onMouseEnter() {
      return setFocusedOptionIndex(0);
    }
  }, creatableText), !(filteredOptions !== null && filteredOptions !== void 0 && filteredOptions.length) && !showCreatable && emptyText ? createScopedElement(Caption, {
    vkuiClass: "ChipsSelect__empty"
  }, emptyText) : filteredOptions.map(function (option, index) {
    var label = getOptionLabel(option);
    var hovered = focusedOption && getOptionValue(option) === getOptionValue(focusedOption);
    var selected = selectedOptions.find(function (selectedOption) {
      return getOptionValue(selectedOption) === getOptionValue(option);
    });
    var value = getOptionValue(option);
    return createScopedElement(React.Fragment, {
      key: "".concat(_typeof(value), "-").concat(value)
    }, renderOption({
      className: prefixClass("ChipsSelect__option"),
      option: option,
      hovered: Boolean(hovered),
      children: label,
      selected: !!selected,
      getRootRef: function getRootRef(e) {
        if (e) {
          return chipsSelectOptions[index] = e;
        }

        return undefined;
      },
      onMouseDown: function onMouseDown(e) {
        onChangeStart === null || onChangeStart === void 0 ? void 0 : onChangeStart(e, option);

        if (!e.defaultPrevented) {
          closeAfterSelect && setOpened(false);
          addOption(option);
          clearInput();
        }
      },
      onMouseEnter: function onMouseEnter() {
        return setFocusedOptionIndex(index);
      }
    }));
  })));
};

export var ChipsSelect = withAdaptivity(ChipsSelectComponent, {
  sizeY: true
});
//# sourceMappingURL=ChipsSelect.js.map