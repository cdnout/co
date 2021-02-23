import { LayoutConfig } from './config/config';
import { ResolvedLayoutConfig } from './config/resolved-config';
import { LayoutManager } from './layout-manager';
import { getQueryStringParam } from './utils/utils';
/** @public */
export class GoldenLayout extends LayoutManager {
    /** @internal */
    constructor(configOrOptionalContainer, container) {
        super(GoldenLayout.createConfig(configOrOptionalContainer, container));
        /** @internal */
        this._subWindowsCreated = false;
        /** @internal */
        this._creationTimeoutPassed = false;
        if (this.isSubWindow) {
            document.body.style.visibility = 'hidden';
        }
        if (this.layoutConfig.root === undefined) {
            this.init();
        }
    }
    /**
     * Creates the actual layout. Must be called after all initial components
     * are registered. Recurses through the configuration and sets up
     * the item tree.
     *
     * If called before the document is ready it adds itself as a listener
     * to the document.ready event
     * @deprecated LayoutConfig should not be loaded in {@link (LayoutManager:class)} constructor, but rather in a
     * {@link (LayoutManager:class).loadLayout} call.  If LayoutConfig is not specified in {@link (LayoutManager:class)} constructor,
     * then init() will be automatically called internally and should not be called externally.
     */
    init() {
        /**
         * Create the popout windows straight away. If popouts are blocked
         * an error is thrown on the same 'thread' rather than a timeout and can
         * be caught. This also prevents any further initilisation from taking place.
         */
        if (this._subWindowsCreated === false) {
            this.createSubWindows();
            this._subWindowsCreated = true;
        }
        /**
         * If the document isn't ready yet, wait for it.
         */
        if (document.readyState === 'loading' || document.body === null) {
            document.addEventListener('DOMContentLoaded', () => this.init(), { passive: true });
            return;
        }
        /**
         * If this is a subwindow, wait a few milliseconds for the original
         * page's js calls to be executed, then replace the bodies content
         * with GoldenLayout
         */
        if (this.isSubWindow === true && this._creationTimeoutPassed === false) {
            setTimeout(() => this.init(), 7);
            this._creationTimeoutPassed = true;
            return;
        }
        if (this.isSubWindow === true) {
            this.adjustToWindowMode();
        }
        super.init();
    }
    /**
     * Creates Subwindows (if there are any). Throws an error
     * if popouts are blocked.
     * @internal
     */
    createSubWindows() {
        for (let i = 0; i < this.layoutConfig.openPopouts.length; i++) {
            const popoutConfig = this.layoutConfig.openPopouts[i];
            this.createPopoutFromPopoutLayoutConfig(popoutConfig);
        }
    }
    /**
     * This is executed when GoldenLayout detects that it is run
     * within a previously opened popout window.
     * @internal
     */
    adjustToWindowMode() {
        const popInButtonElement = document.createElement('div');
        popInButtonElement.classList.add("lm_popin" /* Popin */);
        popInButtonElement.setAttribute('title', this.layoutConfig.header.dock);
        const iconElement = document.createElement('div');
        iconElement.classList.add("lm_icon" /* Icon */);
        const bgElement = document.createElement('div');
        bgElement.classList.add("lm_bg" /* Bg */);
        popInButtonElement.appendChild(iconElement);
        popInButtonElement.appendChild(bgElement);
        popInButtonElement.click = () => this.emit('popIn');
        const headElement = document.head;
        const appendNodeLists = new Array(4);
        appendNodeLists[0] = document.querySelectorAll('body link');
        appendNodeLists[1] = document.querySelectorAll('body style');
        appendNodeLists[2] = document.querySelectorAll('template');
        appendNodeLists[3] = document.querySelectorAll('.gl_keep');
        for (let listIdx = 0; listIdx < appendNodeLists.length; listIdx++) {
            const appendNodeList = appendNodeLists[listIdx];
            for (let nodeIdx = 0; nodeIdx < appendNodeList.length; nodeIdx++) {
                const node = appendNodeList[nodeIdx];
                headElement.appendChild(node);
            }
        }
        const bodyElement = document.body;
        bodyElement.innerHTML = '';
        bodyElement.style.visibility = 'visible';
        bodyElement.appendChild(popInButtonElement);
        /*
        * This seems a bit pointless, but actually causes a reflow/re-evaluation getting around
        * slickgrid's "Cannot find stylesheet." bug in chrome
        */
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const x = document.body.offsetHeight;
        /*
        * Expose this instance on the window object
        * to allow the opening window to interact with
        * it
        */
        window.__glInstance = this;
    }
}
/** @public */
(function (GoldenLayout) {
    /** @internal */
    function createConfig(configOrOptionalContainer, containerElement) {
        const windowConfigKey = getQueryStringParam('gl-window');
        const isSubWindow = windowConfigKey !== null;
        let config;
        if (windowConfigKey !== null) {
            const windowConfigStr = localStorage.getItem(windowConfigKey);
            if (windowConfigStr === null) {
                throw new Error('Null gl-window Config');
            }
            localStorage.removeItem(windowConfigKey);
            const minifiedWindowConfig = JSON.parse(windowConfigStr);
            config = ResolvedLayoutConfig.unminifyConfig(minifiedWindowConfig);
        }
        else {
            if (configOrOptionalContainer === undefined) {
                config = undefined;
            }
            else {
                if (configOrOptionalContainer instanceof HTMLElement) {
                    config = undefined;
                    containerElement = configOrOptionalContainer;
                }
                else {
                    if (LayoutConfig.isResolved(configOrOptionalContainer)) {
                        config = configOrOptionalContainer;
                    }
                    else {
                        config = LayoutConfig.resolve(configOrOptionalContainer);
                    }
                }
            }
        }
        return {
            layoutConfig: config,
            isSubWindow,
            containerElement,
        };
    }
    GoldenLayout.createConfig = createConfig;
})(GoldenLayout || (GoldenLayout = {}));
//# sourceMappingURL=golden-layout.js.map