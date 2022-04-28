/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import Platform from '../../../exports/Platform';
import * as React from 'react';
import VirtualizedSectionList from '../VirtualizedSectionList';

/**
 * A performant interface for rendering sectioned lists, supporting the most handy features:
 *
 *  - Fully cross-platform.
 *  - Configurable viewability callbacks.
 *  - List header support.
 *  - List footer support.
 *  - Item separator support.
 *  - Section header support.
 *  - Section separator support.
 *  - Heterogeneous data and item rendering support.
 *  - Pull to Refresh.
 *  - Scroll loading.
 *
 * If you don't need section support and want a simpler interface, use
 * [`<FlatList>`](https://reactnative.dev/docs/flatlist).
 *
 * Simple Examples:
 *
 *     <SectionList
 *       renderItem={({item}) => <ListItem title={item} />}
 *       renderSectionHeader={({section}) => <Header title={section.title} />}
 *       sections={[ // homogeneous rendering between sections
 *         {data: [...], title: ...},
 *         {data: [...], title: ...},
 *         {data: [...], title: ...},
 *       ]}
 *     />
 *
 *     <SectionList
 *       sections={[ // heterogeneous rendering between sections
 *         {data: [...], renderItem: ...},
 *         {data: [...], renderItem: ...},
 *         {data: [...], renderItem: ...},
 *       ]}
 *     />
 *
 * This is a convenience wrapper around [`<VirtualizedList>`](docs/virtualizedlist),
 * and thus inherits its props (as well as those of `ScrollView`) that aren't explicitly listed
 * here, along with the following caveats:
 *
 * - Internal state is not preserved when content scrolls out of the render window. Make sure all
 *   your data is captured in the item data or external stores like Flux, Redux, or Relay.
 * - This is a `PureComponent` which means that it will not re-render if `props` remain shallow-
 *   equal. Make sure that everything your `renderItem` function depends on is passed as a prop
 *   (e.g. `extraData`) that is not `===` after updates, otherwise your UI may not update on
 *   changes. This includes the `data` prop and parent component state.
 * - In order to constrain memory and enable smooth scrolling, content is rendered asynchronously
 *   offscreen. This means it's possible to scroll faster than the fill rate and momentarily see
 *   blank content. This is a tradeoff that can be adjusted to suit the needs of each application,
 *   and we are working on improving it behind the scenes.
 * - By default, the list looks for a `key` prop on each item and uses that for the React key.
 *   Alternatively, you can provide a custom `keyExtractor` prop.
 *
 */
var SectionList = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(SectionList, _React$PureComponent);

  function SectionList() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _this._captureRef = function (ref) {
      _this._wrapperListRef = ref;
    };

    return _this;
  }

  var _proto = SectionList.prototype;

  /**
   * Scrolls to the item at the specified `sectionIndex` and `itemIndex` (within the section)
   * positioned in the viewable area such that `viewPosition` 0 places it at the top (and may be
   * covered by a sticky header), 1 at the bottom, and 0.5 centered in the middle. `viewOffset` is a
   * fixed number of pixels to offset the final target position, e.g. to compensate for sticky
   * headers.
   *
   * Note: cannot scroll to locations outside the render window without specifying the
   * `getItemLayout` prop.
   */
  _proto.scrollToLocation = function scrollToLocation(params) {
    if (this._wrapperListRef != null) {
      this._wrapperListRef.scrollToLocation(params);
    }
  }
  /**
   * Tells the list an interaction has occurred, which should trigger viewability calculations, e.g.
   * if `waitForInteractions` is true and the user has not scrolled. This is typically called by
   * taps on items or by navigation actions.
   */
  ;

  _proto.recordInteraction = function recordInteraction() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();

    listRef && listRef.recordInteraction();
  }
  /**
   * Displays the scroll indicators momentarily.
   *
   * @platform ios
   */
  ;

  _proto.flashScrollIndicators = function flashScrollIndicators() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();

    listRef && listRef.flashScrollIndicators();
  }
  /**
   * Provides a handle to the underlying scroll responder.
   */
  ;

  _proto.getScrollResponder = function getScrollResponder() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();

    if (listRef) {
      return listRef.getScrollResponder();
    }
  };

  _proto.getScrollableNode = function getScrollableNode() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();

    if (listRef) {
      return listRef.getScrollableNode();
    }
  };

  _proto.setNativeProps = function setNativeProps(props) {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();

    if (listRef) {
      listRef.setNativeProps(props);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _stickySectionHeadersEnabled = _this$props.stickySectionHeadersEnabled,
        restProps = _objectWithoutPropertiesLoose(_this$props, ["stickySectionHeadersEnabled"]);

    var stickySectionHeadersEnabled = _stickySectionHeadersEnabled !== null && _stickySectionHeadersEnabled !== void 0 ? _stickySectionHeadersEnabled : Platform.OS === 'ios';
    return /*#__PURE__*/React.createElement(VirtualizedSectionList, _extends({}, restProps, {
      stickySectionHeadersEnabled: stickySectionHeadersEnabled,
      ref: this._captureRef,
      getItemCount: function getItemCount(items) {
        return items.length;
      },
      getItem: function getItem(items, index) {
        return items[index];
      }
    }));
  };

  return SectionList;
}(React.PureComponent);

export { SectionList as default };