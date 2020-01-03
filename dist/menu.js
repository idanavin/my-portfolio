/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/scripts/menu.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/scripts/menu.js":
/*!*********************************!*\
  !*** ./src/app/scripts/menu.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_menu_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/menu.html */ "./src/pages/menu.html");
/* harmony import */ var _pages_menu_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages_menu_html__WEBPACK_IMPORTED_MODULE_0__);

console.log(_pages_menu_html__WEBPACK_IMPORTED_MODULE_0___default.a);

$(".links").load(_pages_menu_html__WEBPACK_IMPORTED_MODULE_0___default.a, function () {

    var $menu = $('.Menu-list'),
        $item = $('.Menu-list-item'),
        w = $(window).width(), //window width
        h = $(window).height(), //window height
        w1 = $(".links").width(),
        h1 = $(".links").height();

    $('.links').on('mousemove', function (e) {
        var offsetX = 0.5 - e.pageX / w1, //cursor position X
            offsetY = 0.5 - e.pageY / h1, //cursor position Y
            dy = e.pageY - h1 / 2, //@h/2 = center of poster
            dx = e.pageX - w1 / 2, //@w/2 = center of poster
            theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
            angle = theta * 180 / Math.PI - 90, //convert rad in degrees
            offsetPoster = $menu.data('offset'),
            transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

        //get angle between 0-360
        if (angle < 0) {
            angle = angle + 360;
        }

        //poster transform
        $menu.css('transform', transformPoster);

        //parallax for each layer
        $item.each(function () {
            var $this = $(this),
                offsetLayer = $this.data('offset') || 0,
                transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

            $this.css('transform', transformLayer);
        });
    }).on('mouseleave', function () {
        $menu.css('transform', 'translate3d(0)');
    });
});

/***/ }),

/***/ "./src/pages/menu.html":
/*!*****************************!*\
  !*** ./src/pages/menu.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Menu\">\r\n    <ul class=\"Menu-list\" data-offset=\"10\">\r\n        <li class=\"Menu-list-item\" data-offset=\"20\" onclick>\r\n            Home\r\n            <span class=\"Mask\"><span>Home</span></span>\r\n            <span class=\"Mask\"><span>Home</span></span>\r\n        </li>\r\n        <li class=\"Menu-list-item\" data-offset=\"16\" onclick>\r\n            About\r\n            <span class=\"Mask\"><span>About</span></span>\r\n            <span class=\"Mask\"><span>About</span></span>\r\n        </li>\r\n        <li class=\"Menu-list-item\" data-offset=\"12\" onclick>\r\n            Work\r\n            <span class=\"Mask\"><span>Work</span></span>\r\n            <span class=\"Mask\"><span>Work</span></span>\r\n        </li>\r\n        <li class=\"Menu-list-item\" data-offset=\"8\" onclick>\r\n            Contact\r\n            <span class=\"Mask\"><span>Contact</span></span>\r\n            <span class=\"Mask\"><span>Contact</span></span>\r\n        </li>\r\n    </ul>\r\n</div>";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zY3JpcHRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL21lbnUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUE0QztBQUM1QyxZQUFZLHVEQUFROztBQUVwQixpQkFBaUIsdURBQVE7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0xBQXNMOztBQUV0TDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLENBQUMsRTs7Ozs7Ozs7Ozs7QUN6Q0QseWdDIiwiZmlsZSI6Im1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAvc2NyaXB0cy9tZW51LmpzXCIpO1xuIiwiaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4uLy4uL3BhZ2VzL21lbnUuaHRtbCdcclxuY29uc29sZS5sb2cobWVudVBhZ2UpO1xyXG5cclxuJChcIi5saW5rc1wiKS5sb2FkKG1lbnVQYWdlLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyICRtZW51ID0gJCgnLk1lbnUtbGlzdCcpLFxyXG4gICAgICAgICRpdGVtID0gJCgnLk1lbnUtbGlzdC1pdGVtJyksXHJcbiAgICAgICAgdyA9ICQod2luZG93KS53aWR0aCgpLCAvL3dpbmRvdyB3aWR0aFxyXG4gICAgICAgIGggPSAkKHdpbmRvdykuaGVpZ2h0KCksIC8vd2luZG93IGhlaWdodFxyXG4gICAgICAgIHcxID0gJChcIi5saW5rc1wiKS53aWR0aCgpLFxyXG4gICAgICAgIGgxID0gJChcIi5saW5rc1wiKS5oZWlnaHQoKTtcclxuXHJcbiAgICAkKCcubGlua3MnKS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgb2Zmc2V0WCA9IDAuNSAtIGUucGFnZVggLyB3MSwgLy9jdXJzb3IgcG9zaXRpb24gWFxyXG4gICAgICAgICAgICBvZmZzZXRZID0gMC41IC0gZS5wYWdlWSAvIGgxLCAvL2N1cnNvciBwb3NpdGlvbiBZXHJcbiAgICAgICAgICAgIGR5ID0gZS5wYWdlWSAtIGgxIC8gMiwgLy9AaC8yID0gY2VudGVyIG9mIHBvc3RlclxyXG4gICAgICAgICAgICBkeCA9IGUucGFnZVggLSB3MSAvIDIsIC8vQHcvMiA9IGNlbnRlciBvZiBwb3N0ZXJcclxuICAgICAgICAgICAgdGhldGEgPSBNYXRoLmF0YW4yKGR5LCBkeCksIC8vYW5nbGUgYmV0d2VlbiBjdXJzb3IgYW5kIGNlbnRlciBvZiBwb3N0ZXIgaW4gUkFEXHJcbiAgICAgICAgICAgIGFuZ2xlID0gdGhldGEgKiAxODAgLyBNYXRoLlBJIC0gOTAsIC8vY29udmVydCByYWQgaW4gZGVncmVlc1xyXG4gICAgICAgICAgICBvZmZzZXRQb3N0ZXIgPSAkbWVudS5kYXRhKCdvZmZzZXQnKSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtUG9zdGVyID0gJ3RyYW5zbGF0ZTNkKDAsICcgKyAtb2Zmc2V0WCAqIG9mZnNldFBvc3RlciArICdweCwgMCkgcm90YXRlWCgnICsgKC1vZmZzZXRZICogb2Zmc2V0UG9zdGVyKSArICdkZWcpIHJvdGF0ZVkoJyArIChvZmZzZXRYICogKG9mZnNldFBvc3RlciAqIDIpKSArICdkZWcpJzsgLy9wb3N0ZXIgdHJhbnNmb3JtXHJcblxyXG4gICAgICAgIC8vZ2V0IGFuZ2xlIGJldHdlZW4gMC0zNjBcclxuICAgICAgICBpZiAoYW5nbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIGFuZ2xlID0gYW5nbGUgKyAzNjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3Bvc3RlciB0cmFuc2Zvcm1cclxuICAgICAgICAkbWVudS5jc3MoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybVBvc3Rlcik7XHJcblxyXG4gICAgICAgIC8vcGFyYWxsYXggZm9yIGVhY2ggbGF5ZXJcclxuICAgICAgICAkaXRlbS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIG9mZnNldExheWVyID0gJHRoaXMuZGF0YSgnb2Zmc2V0JykgfHwgMCxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUxheWVyID0gJ3RyYW5zbGF0ZTNkKCcgKyBvZmZzZXRYICogb2Zmc2V0TGF5ZXIgKyAncHgsICcgKyBvZmZzZXRZICogb2Zmc2V0TGF5ZXIgKyAncHgsIDIwcHgpJztcclxuXHJcbiAgICAgICAgICAgICR0aGlzLmNzcygndHJhbnNmb3JtJywgdHJhbnNmb3JtTGF5ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoMCknKTtcclxuICAgIH0pO1xyXG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiTWVudVxcXCI+XFxyXFxuICAgIDx1bCBjbGFzcz1cXFwiTWVudS1saXN0XFxcIiBkYXRhLW9mZnNldD1cXFwiMTBcXFwiPlxcclxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJNZW51LWxpc3QtaXRlbVxcXCIgZGF0YS1vZmZzZXQ9XFxcIjIwXFxcIiBvbmNsaWNrPlxcclxcbiAgICAgICAgICAgIEhvbWVcXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiTWFza1xcXCI+PHNwYW4+SG9tZTwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIk1hc2tcXFwiPjxzcGFuPkhvbWU8L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiTWVudS1saXN0LWl0ZW1cXFwiIGRhdGEtb2Zmc2V0PVxcXCIxNlxcXCIgb25jbGljaz5cXHJcXG4gICAgICAgICAgICBBYm91dFxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJNYXNrXFxcIj48c3Bhbj5BYm91dDwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIk1hc2tcXFwiPjxzcGFuPkFib3V0PC9zcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGkgY2xhc3M9XFxcIk1lbnUtbGlzdC1pdGVtXFxcIiBkYXRhLW9mZnNldD1cXFwiMTJcXFwiIG9uY2xpY2s+XFxyXFxuICAgICAgICAgICAgV29ya1xcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJNYXNrXFxcIj48c3Bhbj5Xb3JrPC9zcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiTWFza1xcXCI+PHNwYW4+V29yazwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJNZW51LWxpc3QtaXRlbVxcXCIgZGF0YS1vZmZzZXQ9XFxcIjhcXFwiIG9uY2xpY2s+XFxyXFxuICAgICAgICAgICAgQ29udGFjdFxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJNYXNrXFxcIj48c3Bhbj5Db250YWN0PC9zcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiTWFza1xcXCI+PHNwYW4+Q29udGFjdDwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlwiOyJdLCJzb3VyY2VSb290IjoiIn0=