(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~80c68398"],{"2eee":function(t,e,o){"use strict";e.__esModule=!0,e.default=void 0;var n=i(o("91b6")),r=o("0a8d");function i(t){return t&&t.__esModule?t:{default:t}}var l={BTooltip:n.default},s={install:(0,r.installFactory)({directives:l})};e.default=s},5764:function(t,e,o){"use strict";e.__esModule=!0,e.default=void 0;var n=a(o("f0bd")),r=a(o("daa8")),i=o("4565"),l=o("24e2"),s=a(o("93e0"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){c(t,e,o[e])})}return t}function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function f(t){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}var d="__BV_PopOver__",v={focus:!0,hover:!0,click:!0,blur:!0},h=function(t){var e={};"string"===typeof t.value?e.content=t.value:"function"===typeof t.value?e.content=t.value:"object"===f(t.value)&&(e=u({},e,t.value)),t.arg&&(e.container="#".concat(t.arg)),(0,l.keys)(t.modifiers).forEach(function(t){if(/^html$/.test(t))e.html=!0;else if(/^nofade$/.test(t))e.animation=!1;else if(/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/.test(t))e.placement=t;else if(/^(window|viewport)$/.test(t))e.boundary=t;else if(/^d\d+$/.test(t)){var o=parseInt(t.slice(1),10)||0;o&&(e.delay=o)}else if(/^o-?\d+$/.test(t)){var n=parseInt(t.slice(1),10)||0;n&&(e.offset=n)}});var o={},n="string"===typeof e.trigger?e.trigger.trim().split(/\s+/):[];return n.forEach(function(t){v[t]&&(o[t]=!0)}),(0,l.keys)(v).forEach(function(e){t.modifiers[e]&&(o[e]=!0)}),e.trigger=(0,l.keys)(o).join(" "),"blur"===e.trigger&&(e.trigger="focus"),e.trigger||delete e.trigger,e},g=function(t,e,o){if(i.inBrowser)if(n.default){var l=h(e);t[d]?t[d].updateConfig(l):t[d]=new r.default(t,l,o.context.$root)}else(0,s.default)("v-b-popover: Popper.js is required for PopOvers to work")},p=function(t){t[d]&&(t[d].destroy(),t[d]=null,delete t[d])},b={bind:function(t,e,o){g(t,e,o)},inserted:function(t,e,o){g(t,e,o)},update:function(t,e,o){e.value!==e.oldValue&&g(t,e,o)},componentUpdated:function(t,e,o){e.value!==e.oldValue&&g(t,e,o)},unbind:function(t){p(t)}};e.default=b},"75a9":function(t,e,o){"use strict";e.__esModule=!0,e.default=void 0;var n=l(o("d57a")),r=o("4565"),i=o("24e2");function l(t){return t&&t.__esModule?t:{default:t}}function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}var a="__BV_ScrollSpy__",u=function(t){var e={};return t.arg&&(e.element="#".concat(t.arg)),(0,i.keys)(t.modifiers).forEach(function(t){/^\d+$/.test(t)?e.offset=parseInt(t,10):/^(auto|position|offset)$/.test(t)&&(e.method=t)}),"string"===typeof t.value?e.element=t.value:"number"===typeof t.value?e.offset=Math.round(t.value):"object"===s(t.value)&&(0,i.keys)(t.value).filter(function(t){return Boolean(n.default.DefaultType[t])}).forEach(function(o){e[o]=t.value[o]}),e},c=function(t,e,o){if(r.inBrowser){var i=u(e);t[a]?t[a].updateConfig(i,o.context.$root):t[a]=new n.default(t,i,o.context.$root)}},f=function(t){t[a]&&(t[a].dispose(),t[a]=null,delete t[a])},d={bind:function(t,e,o){c(t,e,o)},inserted:function(t,e,o){c(t,e,o)},update:function(t,e,o){e.value!==e.oldValue&&c(t,e,o)},componentUpdated:function(t,e,o){e.value!==e.oldValue&&c(t,e,o)},unbind:function(t){f(t)}};e.default=d},8090:function(t,e,o){"use strict";e.__esModule=!0,e.default=void 0;var n=i(o("75a9")),r=o("0a8d");function i(t){return t&&t.__esModule?t:{default:t}}var l={BScrollspy:n.default},s={install:(0,r.installFactory)({directives:l})};e.default=s},"91b6":function(t,e,o){"use strict";e.__esModule=!0,e.default=void 0;var n=a(o("f0bd")),r=a(o("16ae")),i=o("4565"),l=o("24e2"),s=a(o("93e0"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){c(t,e,o[e])})}return t}function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function f(t){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}var d="__BV_ToolTip__",v={focus:!0,hover:!0,click:!0,blur:!0},h=function(t){var e={};"string"===typeof t.value?e.title=t.value:"function"===typeof t.value?e.title=t.value:"object"===f(t.value)&&(e=u({},e,t.value)),t.arg&&(e.container="#".concat(t.arg)),(0,l.keys)(t.modifiers).forEach(function(t){if(/^html$/.test(t))e.html=!0;else if(/^nofade$/.test(t))e.animation=!1;else if(/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/.test(t))e.placement=t;else if(/^(window|viewport)$/.test(t))e.boundary=t;else if(/^d\d+$/.test(t)){var o=parseInt(t.slice(1),10)||0;o&&(e.delay=o)}else if(/^o-?\d+$/.test(t)){var n=parseInt(t.slice(1),10)||0;n&&(e.offset=n)}});var o={},n="string"===typeof e.trigger?e.trigger.trim().split(/\s+/):[];return n.forEach(function(t){v[t]&&(o[t]=!0)}),(0,l.keys)(v).forEach(function(e){t.modifiers[e]&&(o[e]=!0)}),e.trigger=(0,l.keys)(o).join(" "),"blur"===e.trigger&&(e.trigger="focus"),e.trigger||delete e.trigger,e},g=function(t,e,o){if(i.inBrowser)if(n.default){var l=h(e);t[d]?t[d].updateConfig(l):t[d]=new r.default(t,l,o.context.$root)}else(0,s.default)("v-b-tooltip: Popper.js is required for ToolTips to work")},p=function(t){t[d]&&(t[d].destroy(),t[d]=null,delete t[d])},b={bind:function(t,e,o){g(t,e,o)},inserted:function(t,e,o){g(t,e,o)},update:function(t,e,o){e.value!==e.oldValue&&g(t,e,o)},componentUpdated:function(t,e,o){e.value!==e.oldValue&&g(t,e,o)},unbind:function(t){p(t)}};e.default=b},"9f7b":function(t,e,o){"use strict";e.__esModule=!0,e.default=void 0;var n=s(o("7b38")),r=s(o("ae0d")),i=o("0a8d"),l=o("eb60");function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,o):{};n.get||n.set?Object.defineProperty(e,o,n):e[o]=t[o]}return e.default=t,e}var a=function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.installed||(t.installed=!0,(0,l.setConfig)(o),(0,i.registerPlugins)(e,n),(0,i.registerPlugins)(e,r))};a.installed=!1;var u={install:a,setConfig:l.setConfig};(0,i.vueUse)(u);var c=u;e.default=c},a596:function(t,e,o){"use strict";e.__esModule=!0,e.default=void 0;var n=o("1611"),r=o("4565"),i=o("f347"),l={click:!0},s="__BV_toggle__",a="__BV_toggle_STATE__",u="__BV_toggle_CONTROLS__",c="__BV_toggle_TARGETS__",f="bv::toggle::collapse",d="bv::collapse::state",v="bv::collapse::sync::state",h=function(t,e){t[e]=null,delete t[e]},g=function(t,e,o){r.inBrowser&&(!0===t[a]?((0,n.addClass)(t,"collapsed"),(0,n.setAttr)(t,"aria-expanded","true")):!1===t[a]&&((0,n.removeClass)(t,"collapsed"),(0,n.setAttr)(t,"aria-expanded","false")),(0,n.setAttr)(t,"aria-controls",t[u]))},p={bind:function(t,e,o){var h=(0,i.bindTargets)(o,e,l,function(t){var e=t.targets,o=t.vnode;e.forEach(function(t){o.context.$root.$emit(f,t)})});r.inBrowser&&o.context&&h.length>0&&(t[c]=h,t[u]=h.join(" "),t[a]=!1,(0,n.setAttr)(t,"aria-controls",t[u]),(0,n.setAttr)(t,"aria-expanded","false"),"BUTTON"!==t.tagName&&(0,n.setAttr)(t,"role","button"),t[s]=function(e,o){var r=t[c]||[];-1!==r.indexOf(e)&&((0,n.setAttr)(t,"aria-expanded",o?"true":"false"),t[a]=o,o?(0,n.removeClass)(t,"collapsed"):(0,n.addClass)(t,"collapsed"))},o.context.$root.$on(d,t[s]),o.context.$root.$on(v,t[s]))},componentUpdated:g,updated:g,unbind:function(t,e,o){(0,i.unbindTargets)(o,e,l),t[s]&&(o.context.$root.$off(d,t[s]),o.context.$root.$off(v,t[s])),h(t,s),h(t,a),h(t,u),h(t,c),(0,n.removeClass)(t,"collapsed"),(0,n.removeAttr)(t,"aria-expanded"),(0,n.removeAttr)(t,"aria-controls"),(0,n.removeAttr)(t,"role")}};e.default=p},ae0d:function(t,e,o){"use strict";e.__esModule=!0;var n=a(o("d4a9"));e.Toggle=n.default;var r=a(o("be8c"));e.Modal=r.default;var i=a(o("8090"));e.Scrollspy=i.default;var l=a(o("2eee"));e.Tooltip=l.default;var s=a(o("d670"));function a(t){return t&&t.__esModule?t:{default:t}}e.Popover=s.default},be8c:function(t,e,o){"use strict";e.__esModule=!0,e.default=void 0;var n=i(o("f429")),r=o("0a8d");function i(t){return t&&t.__esModule?t:{default:t}}var l={BModal:n.default},s={install:(0,r.installFactory)({directives:l})};e.default=s},d4a9:function(t,e,o){"use strict";e.__esModule=!0,e.default=void 0;var n=i(o("a596")),r=o("0a8d");function i(t){return t&&t.__esModule?t:{default:t}}var l={BToggle:n.default},s={install:(0,r.installFactory)({directives:l})};e.default=s},d57a:function(t,e,o){"use strict";e.__esModule=!0,e.default=void 0;var n=l(o("bf9c")),r=l(o("93e0")),i=o("1611");function l(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){a(t,e,o[e])})}return t}function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,o){return e&&c(t.prototype,e),o&&c(t,o),t}var d="v-b-scrollspy",v="bv::scrollspy::activate",h={element:"body",offset:10,method:"auto",throttle:75},g={element:"(string|element|component)",offset:"number",method:"string",throttle:"number"},p={DROPDOWN_ITEM:"dropdown-item",ACTIVE:"active"},b={ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown, .dropup",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},y={OFFSET:"offset",POSITION:"position"},m=/^.*(#[^#]+)$/,_=["webkitTransitionEnd","transitionend","otransitionend","oTransitionEnd"],$={passive:!0,capture:!1};function O(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function T(t,e,o){for(var n in o)if(Object.prototype.hasOwnProperty.call(o,n)){var l=o[n],s=e[n],a=s&&(0,i.isElement)(s)?"element":O(s);a=s&&s._isVue?"component":a,new RegExp(l).test(a)||(0,r.default)("".concat(t,': Option "').concat(n,'" provided type "').concat(a,'" but expected type "').concat(l,'"'))}}var S=function(){function t(e,o,n){u(this,t),this.$el=e,this.$scroller=null,this.$selector=[b.NAV_LINKS,b.LIST_ITEMS,b.DROPDOWN_ITEMS].join(","),this.$offsets=[],this.$targets=[],this.$activeTarget=null,this.$scrollHeight=0,this.$resizeTimeout=null,this.$obs_scroller=null,this.$obs_targets=null,this.$root=n||null,this.$config=null,this.updateConfig(o)}return f(t,[{key:"updateConfig",value:function(t,e){this.$scroller&&(this.unlisten(),this.$scroller=null);var o=s({},this.constructor.Default,t);if(e&&(this.$root=e),T(this.constructor.Name,o,this.constructor.DefaultType),this.$config=o,this.$root){var n=this;this.$root.$nextTick(function(){n.listen()})}else this.listen()}},{key:"dispose",value:function(){this.unlisten(),clearTimeout(this.$resizeTimeout),this.$resizeTimeout=null,this.$el=null,this.$config=null,this.$scroller=null,this.$selector=null,this.$offsets=null,this.$targets=null,this.$activeTarget=null,this.$scrollHeight=null}},{key:"listen",value:function(){var t=this,e=this.getScroller();e&&"BODY"!==e.tagName&&(0,i.eventOn)(e,"scroll",this,$),(0,i.eventOn)(window,"scroll",this,$),(0,i.eventOn)(window,"resize",this,$),(0,i.eventOn)(window,"orientationchange",this,$),_.forEach(function(e){(0,i.eventOn)(window,e,t,$)}),this.setObservers(!0),this.handleEvent("refresh")}},{key:"unlisten",value:function(){var t=this,e=this.getScroller();this.setObservers(!1),e&&"BODY"!==e.tagName&&(0,i.eventOff)(e,"scroll",this,$),(0,i.eventOff)(window,"scroll",this,$),(0,i.eventOff)(window,"resize",this,$),(0,i.eventOff)(window,"orientationchange",this,$),_.forEach(function(e){(0,i.eventOff)(window,e,t,$)})}},{key:"setObservers",value:function(t){var e=this;this.$obs_scroller&&(this.$obs_scroller.disconnect(),this.$obs_scroller=null),this.$obs_targets&&(this.$obs_targets.disconnect(),this.$obs_targets=null),t&&(this.$obs_targets=(0,n.default)(this.$el,function(){e.handleEvent("mutation")},{subtree:!0,childList:!0,attributes:!0,attributeFilter:["href"]}),this.$obs_scroller=(0,n.default)(this.getScroller(),function(){e.handleEvent("mutation")},{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["id","style","class"]}))}},{key:"handleEvent",value:function(t){var e="string"===typeof t?t:t.type,o=this;function n(){o.$resizeTimeout||(o.$resizeTimeout=setTimeout(function(){o.refresh(),o.process(),o.$resizeTimeout=null},o.$config.throttle))}"scroll"===e?(this.$obs_scroller||this.listen(),this.process()):/(resize|orientationchange|mutation|refresh)/.test(e)&&n()}},{key:"refresh",value:function(){var t=this,e=this.getScroller();if(e){var o=e!==e.window?y.POSITION:y.OFFSET,n="auto"===this.$config.method?o:this.$config.method,r=n===y.POSITION?i.position:i.offset,l=n===y.POSITION?this.getScrollTop():0;return this.$offsets=[],this.$targets=[],this.$scrollHeight=this.getScrollHeight(),(0,i.selectAll)(this.$selector,this.$el).map(function(t){return(0,i.getAttr)(t,"href")}).filter(function(t){return t&&m.test(t||"")}).map(function(t){var o=t.replace(m,"$1").trim();if(!o)return null;var n=(0,i.select)(o,e);return n&&(0,i.isVisible)(n)?{offset:parseInt(r(n).top,10)+l,target:o}:null}).filter(Boolean).sort(function(t,e){return t.offset-e.offset}).reduce(function(e,o){return e[o.target]||(t.$offsets.push(o.offset),t.$targets.push(o.target),e[o.target]=!0),e},{}),this}}},{key:"process",value:function(){var t=this.getScrollTop()+this.$config.offset,e=this.getScrollHeight(),o=this.$config.offset+e-this.getOffsetHeight();if(this.$scrollHeight!==e&&this.refresh(),t>=o){var n=this.$targets[this.$targets.length-1];this.$activeTarget!==n&&this.activate(n)}else{if(this.$activeTarget&&t<this.$offsets[0]&&this.$offsets[0]>0)return this.$activeTarget=null,void this.clear();for(var r=this.$offsets.length;r--;){var i=this.$activeTarget!==this.$targets[r]&&t>=this.$offsets[r]&&("undefined"===typeof this.$offsets[r+1]||t<this.$offsets[r+1]);i&&this.activate(this.$targets[r])}}}},{key:"getScroller",value:function(){if(this.$scroller)return this.$scroller;var t=this.$config.element;return t?((0,i.isElement)(t.$el)?t=t.$el:"string"===typeof t&&(t=(0,i.select)(t)),t?(this.$scroller="BODY"===t.tagName?window:t,this.$scroller):null):null}},{key:"getScrollTop",value:function(){var t=this.getScroller();return t===window?t.pageYOffset:t.scrollTop}},{key:"getScrollHeight",value:function(){return this.getScroller().scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}},{key:"getOffsetHeight",value:function(){var t=this.getScroller();return t===window?window.innerHeight:(0,i.getBCR)(t).height}},{key:"activate",value:function(t){var e=this;this.$activeTarget=t,this.clear();var o=(0,i.selectAll)(this.$selector.split(",").map(function(e){return"".concat(e,'[href$="').concat(t,'"]')}).join(","),this.$el);o.forEach(function(t){if((0,i.hasClass)(t,p.DROPDOWN_ITEM)){var o=(0,i.closest)(b.DROPDOWN,t);o&&e.setActiveState((0,i.select)(b.DROPDOWN_TOGGLE,o),!0),e.setActiveState(t,!0)}else{e.setActiveState(t,!0),(0,i.matches)(t.parentElement,b.NAV_ITEMS)&&e.setActiveState(t.parentElement,!0);var n=t;while(n){n=(0,i.closest)(b.NAV_LIST_GROUP,n);var r=n?n.previousElementSibling:null;r&&(0,i.matches)(r,"".concat(b.NAV_LINKS,", ").concat(b.LIST_ITEMS))&&e.setActiveState(r,!0),r&&(0,i.matches)(r,b.NAV_ITEMS)&&(e.setActiveState((0,i.select)(b.NAV_LINKS,r),!0),e.setActiveState(r,!0))}}}),o&&o.length>0&&this.$root&&this.$root.$emit(v,t,o)}},{key:"clear",value:function(){var t=this;(0,i.selectAll)("".concat(this.$selector,", ").concat(b.NAV_ITEMS),this.$el).filter(function(t){return(0,i.hasClass)(t,p.ACTIVE)}).forEach(function(e){return t.setActiveState(e,!1)})}},{key:"setActiveState",value:function(t,e){t&&(e?(0,i.addClass)(t,p.ACTIVE):(0,i.removeClass)(t,p.ACTIVE))}}],[{key:"Name",get:function(){return d}},{key:"Default",get:function(){return h}},{key:"DefaultType",get:function(){return g}}]),t}(),w=S;e.default=w},d670:function(t,e,o){"use strict";e.__esModule=!0,e.default=void 0;var n=i(o("5764")),r=o("0a8d");function i(t){return t&&t.__esModule?t:{default:t}}var l={BPopover:n.default},s={install:(0,r.installFactory)({directives:l})};e.default=s},f429:function(t,e,o){"use strict";e.__esModule=!0,e.default=void 0;var n=o("1611"),r=o("f347"),i={click:!0},l="bv::show::modal",s=function(t,e,o){"BUTTON"!==t.tagName&&(0,n.setAttr)(t,"role","button")},a={bind:function(t,e,o){(0,r.bindTargets)(o,e,i,function(t){var e=t.targets,o=t.vnode;e.forEach(function(t){o.context.$root.$emit(l,t,o.elm)})}),s(t,e,o)},updated:s,componentUpdated:s,unbind:function(t,e,o){(0,r.unbindTargets)(o,e,i),"BUTTON"!==t.tagName&&(0,n.removeAttr)(t,"role","button")}};e.default=a}}]);
//# sourceMappingURL=chunk-vendors~80c68398.0611a764.js.map