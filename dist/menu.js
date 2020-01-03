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

/***/ "./src/app/pages/menu.html":
/*!*********************************!*\
  !*** ./src/app/pages/menu.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Menu\">\r\n    <ul class=\"Menu-list\" data-offset=\"10\">\r\n        <li class=\"Menu-list-item\" data-offset=\"20\" onclick>\r\n            Home\r\n            <span class=\"Mask\"><span>Home</span></span>\r\n            <span class=\"Mask\"><span>Home</span></span>\r\n        </li>\r\n        <li class=\"Menu-list-item\" data-offset=\"16\" onclick>\r\n            About\r\n            <span class=\"Mask\"><span>About</span></span>\r\n            <span class=\"Mask\"><span>About</span></span>\r\n        </li>\r\n        <li class=\"Menu-list-item\" data-offset=\"12\" onclick>\r\n            Work\r\n            <span class=\"Mask\"><span>Work</span></span>\r\n            <span class=\"Mask\"><span>Work</span></span>\r\n        </li>\r\n        <li class=\"Menu-list-item\" data-offset=\"8\" onclick>\r\n            Contact\r\n            <span class=\"Mask\"><span>Contact</span></span>\r\n            <span class=\"Mask\"><span>Contact</span></span>\r\n        </li>\r\n    </ul>\r\n</div>";

/***/ }),

/***/ "./src/app/scripts/menu.js":
/*!*********************************!*\
  !*** ./src/app/scripts/menu.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// import menuPage from '../pages/menu.html'

const menuPage = __webpack_require__(/*! ../pages/menu.html */ "./src/app/pages/menu.html");

$(".links").html(menuPage);
var $menu = $('.Menu-list'),
    $item = $('.Menu-list-item'),
    w = $(window).width(), //window width
    h = $(window).height(), //window height
    w1 = $(".links").width(),
    h1 = $(".links").height();

const resetTransform = function() {
    $menu.css('transform', 'translate3d(0, 0, 0) rotate(0deg)');
    $item.css('transform', 'translate3d(0, 0, 0) rotate(0deg)');
}
// console.log($('.links').html('<div>Hi<div>'));
resetTransform();
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
    resetTransform();
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9tZW51Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zY3JpcHRzL21lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHlnQzs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxxREFBb0I7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrTEFBa0w7O0FBRWxMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSxDQUFDIiwiZmlsZSI6Im1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAvc2NyaXB0cy9tZW51LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIk1lbnVcXFwiPlxcclxcbiAgICA8dWwgY2xhc3M9XFxcIk1lbnUtbGlzdFxcXCIgZGF0YS1vZmZzZXQ9XFxcIjEwXFxcIj5cXHJcXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiTWVudS1saXN0LWl0ZW1cXFwiIGRhdGEtb2Zmc2V0PVxcXCIyMFxcXCIgb25jbGljaz5cXHJcXG4gICAgICAgICAgICBIb21lXFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIk1hc2tcXFwiPjxzcGFuPkhvbWU8L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJNYXNrXFxcIj48c3Bhbj5Ib21lPC9zcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGkgY2xhc3M9XFxcIk1lbnUtbGlzdC1pdGVtXFxcIiBkYXRhLW9mZnNldD1cXFwiMTZcXFwiIG9uY2xpY2s+XFxyXFxuICAgICAgICAgICAgQWJvdXRcXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiTWFza1xcXCI+PHNwYW4+QWJvdXQ8L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJNYXNrXFxcIj48c3Bhbj5BYm91dDwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJNZW51LWxpc3QtaXRlbVxcXCIgZGF0YS1vZmZzZXQ9XFxcIjEyXFxcIiBvbmNsaWNrPlxcclxcbiAgICAgICAgICAgIFdvcmtcXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiTWFza1xcXCI+PHNwYW4+V29yazwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIk1hc2tcXFwiPjxzcGFuPldvcms8L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiTWVudS1saXN0LWl0ZW1cXFwiIGRhdGEtb2Zmc2V0PVxcXCI4XFxcIiBvbmNsaWNrPlxcclxcbiAgICAgICAgICAgIENvbnRhY3RcXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiTWFza1xcXCI+PHNwYW4+Q29udGFjdDwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIk1hc2tcXFwiPjxzcGFuPkNvbnRhY3Q8L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cIjsiLCIvLyBpbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi4vcGFnZXMvbWVudS5odG1sJ1xyXG5cclxuY29uc3QgbWVudVBhZ2UgPSByZXF1aXJlKCcuLi9wYWdlcy9tZW51Lmh0bWwnKTtcclxuXHJcbiQoXCIubGlua3NcIikuaHRtbChtZW51UGFnZSk7XHJcbnZhciAkbWVudSA9ICQoJy5NZW51LWxpc3QnKSxcclxuICAgICRpdGVtID0gJCgnLk1lbnUtbGlzdC1pdGVtJyksXHJcbiAgICB3ID0gJCh3aW5kb3cpLndpZHRoKCksIC8vd2luZG93IHdpZHRoXHJcbiAgICBoID0gJCh3aW5kb3cpLmhlaWdodCgpLCAvL3dpbmRvdyBoZWlnaHRcclxuICAgIHcxID0gJChcIi5saW5rc1wiKS53aWR0aCgpLFxyXG4gICAgaDEgPSAkKFwiLmxpbmtzXCIpLmhlaWdodCgpO1xyXG5cclxuY29uc3QgcmVzZXRUcmFuc2Zvcm0gPSBmdW5jdGlvbigpIHtcclxuICAgICRtZW51LmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZSgwZGVnKScpO1xyXG4gICAgJGl0ZW0uY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlKDBkZWcpJyk7XHJcbn1cclxuLy8gY29uc29sZS5sb2coJCgnLmxpbmtzJykuaHRtbCgnPGRpdj5IaTxkaXY+JykpO1xyXG5yZXNldFRyYW5zZm9ybSgpO1xyXG4kKCcubGlua3MnKS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBvZmZzZXRYID0gMC41IC0gZS5wYWdlWCAvIHcxLCAvL2N1cnNvciBwb3NpdGlvbiBYXHJcbiAgICAgICAgb2Zmc2V0WSA9IDAuNSAtIGUucGFnZVkgLyBoMSwgLy9jdXJzb3IgcG9zaXRpb24gWVxyXG4gICAgICAgIGR5ID0gZS5wYWdlWSAtIGgxIC8gMiwgLy9AaC8yID0gY2VudGVyIG9mIHBvc3RlclxyXG4gICAgICAgIGR4ID0gZS5wYWdlWCAtIHcxIC8gMiwgLy9Ady8yID0gY2VudGVyIG9mIHBvc3RlclxyXG4gICAgICAgIHRoZXRhID0gTWF0aC5hdGFuMihkeSwgZHgpLCAvL2FuZ2xlIGJldHdlZW4gY3Vyc29yIGFuZCBjZW50ZXIgb2YgcG9zdGVyIGluIFJBRFxyXG4gICAgICAgIGFuZ2xlID0gdGhldGEgKiAxODAgLyBNYXRoLlBJIC0gOTAsIC8vY29udmVydCByYWQgaW4gZGVncmVlc1xyXG4gICAgICAgIG9mZnNldFBvc3RlciA9ICRtZW51LmRhdGEoJ29mZnNldCcpLFxyXG4gICAgICAgIHRyYW5zZm9ybVBvc3RlciA9ICd0cmFuc2xhdGUzZCgwLCAnICsgLW9mZnNldFggKiBvZmZzZXRQb3N0ZXIgKyAncHgsIDApIHJvdGF0ZVgoJyArICgtb2Zmc2V0WSAqIG9mZnNldFBvc3RlcikgKyAnZGVnKSByb3RhdGVZKCcgKyAob2Zmc2V0WCAqIChvZmZzZXRQb3N0ZXIgKiAyKSkgKyAnZGVnKSc7IC8vcG9zdGVyIHRyYW5zZm9ybVxyXG5cclxuICAgIC8vZ2V0IGFuZ2xlIGJldHdlZW4gMC0zNjBcclxuICAgIGlmIChhbmdsZSA8IDApIHtcclxuICAgICAgICBhbmdsZSA9IGFuZ2xlICsgMzYwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcG9zdGVyIHRyYW5zZm9ybVxyXG4gICAgJG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm1Qb3N0ZXIpO1xyXG5cclxuICAgIC8vcGFyYWxsYXggZm9yIGVhY2ggbGF5ZXJcclxuICAgICRpdGVtLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG9mZnNldExheWVyID0gJHRoaXMuZGF0YSgnb2Zmc2V0JykgfHwgMCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtTGF5ZXIgPSAndHJhbnNsYXRlM2QoJyArIG9mZnNldFggKiBvZmZzZXRMYXllciArICdweCwgJyArIG9mZnNldFkgKiBvZmZzZXRMYXllciArICdweCwgMjBweCknO1xyXG5cclxuICAgICAgICAkdGhpcy5jc3MoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybUxheWVyKTtcclxuICAgIH0pO1xyXG59KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJlc2V0VHJhbnNmb3JtKCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9