webpackHotUpdate("static/development/pages/calendar.js",{

/***/ "./components/Calendar/Calendar.js":
/*!*****************************************!*\
  !*** ./components/Calendar/Calendar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CalendarPage; });
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_DayContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/DayContainer */ "./components/common/DayContainer.js");
var _jsxFileName = "/Users/jakeacosta/Desktop/projects/reunion/components/Calendar/Calendar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var activities = [[{
  time: '9:00am',
  activity: 'Breakfast'
}, {
  time: '1:00pm',
  activity: 'Meet at park for BBQ and volleyball'
}, {
  time: '7:00pm',
  activity: 'Movie night'
}], [{
  time: '9:00am',
  activity: 'Breakfast'
}, {
  time: '12:00pm',
  activity: 'Go Kart Races!'
}, {
  time: '5:00pm',
  activity: 'BBQ'
}], [{
  time: '10:00am',
  activity: 'Beach Day'
}, {
  time: '6:00pm',
  activity: 'Dinner Dance'
}]];
function CalendarPage() {
  var _this = this;

  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0__["default"], {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, activities.map(function (activity) {
    return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0__["default"], {
      my: 1,
      width: "80%",
      key: activities.indexOf(activity),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, __jsx(_common_DayContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activity: activity,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }));
  }));
}

/***/ })

})
//# sourceMappingURL=calendar.js.288f3d8827c0c2c94c72.hot-update.js.map