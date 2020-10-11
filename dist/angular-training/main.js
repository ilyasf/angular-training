(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ilyasfasikhov/projects/epam/anf_trenning/angular-training/src/main.ts */"zUnb");


/***/ }),

/***/ "2g5w":
/*!********************************************************************************!*\
  !*** ./src/app/courses-page/course-items/course-item/course-item.component.ts ***!
  \********************************************************************************/
/*! exports provided: CourseItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseItemComponent", function() { return CourseItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CourseItemComponent {
    constructor() {
        this.onDeleteCourse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    handleEdit(id) {
        console.log(`Edit course ${id}`);
    }
    handleDelete(id) {
        this.onDeleteCourse.emit(id);
    }
}
CourseItemComponent.ɵfac = function CourseItemComponent_Factory(t) { return new (t || CourseItemComponent)(); };
CourseItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseItemComponent, selectors: [["app-course-item"]], inputs: { item: "item" }, outputs: { onDeleteCourse: "onDeleteCourse" }, decls: 29, vars: 4, consts: [[1, "course-card"], [1, "course-card-data"], [1, "course-title"], [1, "course-description"], [1, "course-card-actions"], [1, "course-data"], [1, "course-duration"], [1, "material-icons"], [1, "course-duration-time"], [1, "course-created-at"], [1, "course-created-at-date"], [1, "course-actions"], [1, "course-actions-button", 3, "click"]], template: function CourseItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "calendar_today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseItemComponent_Template_button_click_19_listener() { return ctx.handleEdit(ctx.item.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseItemComponent_Template_button_click_24_listener() { return ctx.handleDelete(ctx.item.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.createdAt);
    } }, styles: [".course-card[_ngcontent-%COMP%] {\n  display: flex;\n  background: #fff;\n  padding: 25px;\n  margin: 25px 0;\n  box-shadow: 0 1px 2px 0 rgba(29, 30, 38, 0.1), 0 2px 10px 0 rgba(29, 30, 38, 0.15);\n  border-radius: 6px;\n}\n.course-card-data[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.course-card-actions[_ngcontent-%COMP%] {\n  width: 209px;\n  min-width: 209px;\n}\n.course-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 12px;\n}\n.course-data[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.course-duration[_ngcontent-%COMP%] {\n  padding-right: 12px;\n  color: #858997;\n  font-size: 12px;\n}\n.course-duration[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.course-duration-time[_ngcontent-%COMP%] {\n  padding-left: 4px;\n}\n.course-created-at[_ngcontent-%COMP%] {\n  color: #858997;\n  font-size: 12px;\n}\n.course-created-at[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.course-created-at-date[_ngcontent-%COMP%] {\n  padding-left: 4px;\n}\n.course-actions[_ngcontent-%COMP%] {\n  padding-left: 36px;\n}\n.course-actions-button[_ngcontent-%COMP%] {\n  background: #2C9ECD;\n  color: #fff;\n  height: 24px;\n  border-radius: 3px;\n  border: 1px solid #2C9ECD;\n  cursor: pointer;\n  font-size: 12px;\n}\n.course-actions-button[_ngcontent-%COMP%]:last-child {\n  margin-left: 12px;\n}\n.course-actions-button[_ngcontent-%COMP%]:hover {\n  background: #2C99CC;\n}\n.course-actions-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  padding-left: 4px;\n}\n.course-actions-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  font-size: 12px;\n  padding-bottom: 2px;\n}\n.course-description[_ngcontent-%COMP%] {\n  line-height: 18px;\n  letter-spacing: 0;\n  color: #474A59;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy1wYWdlL2NvdXJzZS1pdGVtcy9jb3Vyc2UtaXRlbS9jb3Vyc2UtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0ZBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUFKO0FBSUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUlBO0VBQ0UsbUJBQUE7QUFERjtBQUlBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURGO0FBR0U7RUFDRSxzQkFBQTtBQURKO0FBSUU7RUFDRSxpQkFBQTtBQUZKO0FBTUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUhGO0FBS0U7RUFDRSxzQkFBQTtBQUhKO0FBTUU7RUFDRSxpQkFBQTtBQUpKO0FBUUE7RUFDRSxrQkFBQTtBQUxGO0FBT0U7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBTEo7QUFPSTtFQUNFLGlCQUFBO0FBTE47QUFRSTtFQUNFLG1CQUFBO0FBTk47QUFTSTtFQUNFLGlCQUFBO0FBUE47QUFVSTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBUk47QUFhQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVZGIiwiZmlsZSI6InNyYy9hcHAvY291cnNlcy1wYWdlL2NvdXJzZS1pdGVtcy9jb3Vyc2UtaXRlbS9jb3Vyc2UtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3Vyc2UtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIG1hcmdpbjogMjVweCAwO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDI5LDMwLDM4LDAuMTApLCAwIDJweCAxMHB4IDAgcmdiYSgyOSwzMCwzOCwwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICYtZGF0YSB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuICAmLWFjdGlvbnMge1xuICAgIHdpZHRoOiAyMDlweDtcbiAgICBtaW4td2lkdGg6IDIwOXB4O1xuICB9XG59XG5cbi5jb3Vyc2UtdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5jb3Vyc2UtZGF0YSB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5jb3Vyc2UtZHVyYXRpb24ge1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICBjb2xvcjogIzg1ODk5NztcbiAgZm9udC1zaXplOiAxMnB4O1xuXG4gIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gICYtdGltZSB7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIH1cbn1cblxuLmNvdXJzZS1jcmVhdGVkLWF0IHtcbiAgY29sb3I6ICM4NTg5OTc7XG4gIGZvbnQtc2l6ZTogMTJweDtcblxuICAubWF0ZXJpYWwtaWNvbnMge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAmLWRhdGUge1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICB9XG59XG5cbi5jb3Vyc2UtYWN0aW9ucyB7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcblxuICAmLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzJDOUVDRDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyQzlFQ0Q7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyQzk5Q0M7XG4gICAgfVxuXG4gICAgc3BhbjpsYXN0LWNoaWxke1xuICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgfVxuXG4gICAgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgIH1cbiAgfVxufVxuXG4uY291cnNlLWRlc2NyaXB0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ3NEE1OTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course-item',
                templateUrl: './course-item.component.html',
                styleUrls: ['./course-item.component.scss']
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onDeleteCourse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CkJV":
/*!************************************************************!*\
  !*** ./src/app/core-components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "main-footer"], [1, "footer-text", "ssp-regular"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copyright \u00A9 Videocourses. All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-footer[_ngcontent-%COMP%] {\n  background: #303240;\n  height: 60px;\n  width: 100%;\n}\n\n.footer-text[_ngcontent-%COMP%] {\n  line-height: 24px;\n  letter-spacing: 0;\n  color: #FFFFFF;\n  font-size: 12px;\n  text-transform: none;\n  float: right;\n  margin-right: 55px;\n  margin-top: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9jb3JlLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMzMDMyNDA7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6ICAxMDAlO1xufVxuLmZvb3Rlci10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDU1cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Dh+a":
/*!***********************************************************************!*\
  !*** ./src/app/courses-page/course-footer/course-footer.component.ts ***!
  \***********************************************************************/
/*! exports provided: CourseFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseFooterComponent", function() { return CourseFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CourseFooterComponent {
    constructor() { }
    ngOnInit() {
    }
    handleLoadMore() {
        console.log('Load more');
    }
}
CourseFooterComponent.ɵfac = function CourseFooterComponent_Factory(t) { return new (t || CourseFooterComponent)(); };
CourseFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseFooterComponent, selectors: [["app-course-footer"]], decls: 3, vars: 0, consts: [[1, "courses-footer"], [1, "load-more", 3, "click"]], template: function CourseFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseFooterComponent_Template_button_click_1_listener() { return ctx.handleLoadMore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Load More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".courses-footer[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 12px 25px;\n  margin: 25px 0;\n  box-shadow: 0 1px 2px 0 rgba(29, 30, 38, 0.1), 0 2px 10px 0 rgba(29, 30, 38, 0.15);\n  border-radius: 6px;\n  text-align: center;\n}\n.courses-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  line-height: 24px;\n  letter-spacing: 0;\n  color: #5681EE;\n  font-size: 12px;\n  text-decoration: underline;\n  background: #fff;\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n.courses-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #5681AA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy1wYWdlL2NvdXJzZS1mb290ZXIvY291cnNlLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0ZBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDSjtBQUNJO0VBQ0UsY0FBQTtBQUNOIiwiZmlsZSI6InNyYy9hcHAvY291cnNlcy1wYWdlL2NvdXJzZS1mb290ZXIvY291cnNlLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3Vyc2VzLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEycHggMjVweDtcbiAgbWFyZ2luOiAyNXB4IDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMjksMzAsMzgsMC4xMCksIDAgMnB4IDEwcHggMCByZ2JhKDI5LDMwLDM4LDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBidXR0b24ge1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGNvbG9yOiAjNTY4MUVFO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICM1NjgxQUE7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course-footer',
                templateUrl: './course-footer.component.html',
                styleUrls: ['./course-footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JcHK":
/*!*************************************************************************!*\
  !*** ./src/app/courses-page/course-toolbar/course-toolbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: CourseToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseToolbarComponent", function() { return CourseToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CourseToolbarComponent {
    constructor() { }
    ngOnInit() {
    }
    handleAddNewCourse() {
        console.log('Add new course!');
    }
}
CourseToolbarComponent.ɵfac = function CourseToolbarComponent_Factory(t) { return new (t || CourseToolbarComponent)(); };
CourseToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseToolbarComponent, selectors: [["app-course-toolbar"]], decls: 6, vars: 0, consts: [[1, "course-toolbar"], [1, "course-toolbar-add"], [1, "material-icons", "course-toolbar-add-icon"], [1, "course-toolbar-add-text", 3, "click"]], template: function CourseToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseToolbarComponent_Template_span_click_4_listener() { return ctx.handleAddNewCourse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".course-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.course-toolbar-add[_ngcontent-%COMP%] {\n  background: #2C9ECD;\n  color: #fff;\n  height: 36px;\n  border-radius: 3px;\n  border: 1px solid #2C9ECD;\n  cursor: pointer;\n}\n.course-toolbar-add[_ngcontent-%COMP%]:hover {\n  background: #2C99CC;\n}\n.course-toolbar-add-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  font-size: 24px;\n}\n.course-toolbar-add-text[_ngcontent-%COMP%] {\n  line-height: 24px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy1wYWdlL2NvdXJzZS10b29sYmFyL2NvdXJzZS10b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFBRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQUk7RUFDRSxtQkFBQTtBQUVOO0FBQ0k7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUFDTjtBQUVJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBQU4iLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2VzLXBhZ2UvY291cnNlLXRvb2xiYXIvY291cnNlLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291cnNlLXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAmLWFkZCB7XG4gICAgYmFja2dyb3VuZDogIzJDOUVDRDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyQzlFQ0Q7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMkM5OUNDO1xuICAgIH1cblxuICAgICYtaWNvbiB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cblxuICAgICYtdGV4dCB7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course-toolbar',
                templateUrl: './course-toolbar.component.html',
                styleUrls: ['./course-toolbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-components/header/header.component */ "iIK3");
/* harmony import */ var _courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses-page/courses-page.component */ "V8nd");
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-components/footer/footer.component */ "CkJV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor() {
        this.title = 'angular-training';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[1, "main"], [1, "app-content"], [1, "header"], [1, "content"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-courses-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
    } }, directives: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_2__["CoursesPageComponent"], _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.app-content[_ngcontent-%COMP%] {\n  background: #F5F6FA;\n  height: 100vh;\n  max-width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uYXBwLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjRjVGNkZBO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGVudCB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "V8nd":
/*!********************************************************!*\
  !*** ./src/app/courses-page/courses-page.component.ts ***!
  \********************************************************/
/*! exports provided: CoursesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPageComponent", function() { return CoursesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _course_header_course_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-header/course-header.component */ "s8gM");
/* harmony import */ var _course_filter_course_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-filter/course-filter.component */ "Z8GH");
/* harmony import */ var _course_toolbar_course_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-toolbar/course-toolbar.component */ "JcHK");
/* harmony import */ var _course_items_course_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-items/course-items.component */ "xcPe");
/* harmony import */ var _course_footer_course_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-footer/course-footer.component */ "Dh+a");







class CoursesPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
CoursesPageComponent.ɵfac = function CoursesPageComponent_Factory(t) { return new (t || CoursesPageComponent)(); };
CoursesPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesPageComponent, selectors: [["app-courses-page"]], decls: 7, vars: 0, consts: [[1, "courses-page"], [1, "courses-wrapper"]], template: function CoursesPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-course-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-course-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-course-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-course-items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-course-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_course_header_course_header_component__WEBPACK_IMPORTED_MODULE_1__["CourseHeaderComponent"], _course_filter_course_filter_component__WEBPACK_IMPORTED_MODULE_2__["CourseFilterComponent"], _course_toolbar_course_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["CourseToolbarComponent"], _course_items_course_items_component__WEBPACK_IMPORTED_MODULE_4__["CourseItemsComponent"], _course_footer_course_footer_component__WEBPACK_IMPORTED_MODULE_5__["CourseFooterComponent"]], styles: [".courses-wrapper[_ngcontent-%COMP%] {\n  padding: 16px 55px 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy1wYWdlL2NvdXJzZXMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2VzLXBhZ2UvY291cnNlcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXJzZXMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDE2cHggNTVweCA1NXB4XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-courses-page',
                templateUrl: './courses-page.component.html',
                styleUrls: ['./courses-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Z8GH":
/*!***********************************************************************!*\
  !*** ./src/app/courses-page/course-filter/course-filter.component.ts ***!
  \***********************************************************************/
/*! exports provided: CourseFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseFilterComponent", function() { return CourseFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class CourseFilterComponent {
    constructor() {
        this.searchText = '';
    }
    ngOnInit() {
        this.searchText = '';
    }
    handleSearch() {
        console.log(`Search value is: ${this.searchText}`);
    }
}
CourseFilterComponent.ɵfac = function CourseFilterComponent_Factory(t) { return new (t || CourseFilterComponent)(); };
CourseFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseFilterComponent, selectors: [["app-course-filter"]], decls: 6, vars: 1, consts: [[1, "course-filter"], [1, "course-filter-input"], ["placeholder", "Type to search", 3, "ngModel", "ngModelChange"], [1, "course-filter-button"], [1, "ssp-semi-bold", 3, "click"]], template: function CourseFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CourseFilterComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseFilterComponent_Template_button_click_4_listener() { return ctx.handleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".course-filter[_ngcontent-%COMP%] {\n  display: flex;\n}\n.course-filter-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  height: 18px;\n  width: 216px;\n  padding: 9px 12px;\n  border: 1px solid #CED0DB;\n}\n.course-filter-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(123, 123, 123, 0.6);\n}\n.course-filter-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: 1px solid rgba(123, 123, 123, 0.6);\n}\n.course-filter-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.course-filter-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 3px;\n  background: #67A300;\n  padding: 8px 16px;\n  border: 1px solid #67A300;\n  color: #fff;\n}\n.course-filter-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #66A260;\n  border: 1px solid #66A260;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy1wYWdlL2NvdXJzZS1maWx0ZXIvY291cnNlLWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUNJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUNOO0FBQU07RUFDRSwrQkFBQTtBQUVSO0FBQU07RUFDRSwwQ0FBQTtBQUVSO0FBR0U7RUFDRSxpQkFBQTtBQURKO0FBR0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBRE47QUFFTTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMtcGFnZS9jb3Vyc2UtZmlsdGVyL2NvdXJzZS1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291cnNlLWZpbHRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gICYtaW5wdXR7XG4gICAgaW5wdXQge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIHdpZHRoOiAyMTZweDtcbiAgICAgIHBhZGRpbmc6IDlweCAxMnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NFRDBEQjtcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMTIzLCAxMjMsIDEyMywgMC42KTtcbiAgICAgIH1cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyMywgMTIzLCAxMjMsIDAuNik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJhY2tncm91bmQ6ICM2N0EzMDA7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2N0EzMDA7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNjZBMjYwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjZBMjYwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course-filter',
                templateUrl: './course-filter.component.html',
                styleUrls: ['./course-filter.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./courses-page/courses-page.component */ "V8nd");
/* harmony import */ var _core_components_core_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core-components/core-components.module */ "fPTn");
/* harmony import */ var _courses_page_course_header_course_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./courses-page/course-header/course-header.component */ "s8gM");
/* harmony import */ var _courses_page_course_filter_course_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./courses-page/course-filter/course-filter.component */ "Z8GH");
/* harmony import */ var _courses_page_course_items_course_items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./courses-page/course-items/course-items.component */ "xcPe");
/* harmony import */ var _courses_page_course_items_course_item_course_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./courses-page/course-items/course-item/course-item.component */ "2g5w");
/* harmony import */ var _courses_page_course_toolbar_course_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./courses-page/course-toolbar/course-toolbar.component */ "JcHK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _courses_page_course_footer_course_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./courses-page/course-footer/course-footer.component */ "Dh+a");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
















const routes = [
    {
        path: '', component: _courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_4__["CoursesPageComponent"]
    }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(routes),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _core_components_core_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_4__["CoursesPageComponent"],
        _courses_page_course_header_course_header_component__WEBPACK_IMPORTED_MODULE_6__["CourseHeaderComponent"],
        _courses_page_course_filter_course_filter_component__WEBPACK_IMPORTED_MODULE_7__["CourseFilterComponent"],
        _courses_page_course_items_course_items_component__WEBPACK_IMPORTED_MODULE_8__["CourseItemsComponent"],
        _courses_page_course_items_course_item_course_item_component__WEBPACK_IMPORTED_MODULE_9__["CourseItemComponent"],
        _courses_page_course_toolbar_course_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["CourseToolbarComponent"],
        _courses_page_course_footer_course_footer_component__WEBPACK_IMPORTED_MODULE_12__["CourseFooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _core_components_core_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_4__["CoursesPageComponent"],
                    _courses_page_course_header_course_header_component__WEBPACK_IMPORTED_MODULE_6__["CourseHeaderComponent"],
                    _courses_page_course_filter_course_filter_component__WEBPACK_IMPORTED_MODULE_7__["CourseFilterComponent"],
                    _courses_page_course_items_course_items_component__WEBPACK_IMPORTED_MODULE_8__["CourseItemsComponent"],
                    _courses_page_course_items_course_item_course_item_component__WEBPACK_IMPORTED_MODULE_9__["CourseItemComponent"],
                    _courses_page_course_toolbar_course_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["CourseToolbarComponent"],
                    _courses_page_course_footer_course_footer_component__WEBPACK_IMPORTED_MODULE_12__["CourseFooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(routes),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _core_components_core_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreComponentsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fPTn":
/*!***********************************************************!*\
  !*** ./src/app/core-components/core-components.module.ts ***!
  \***********************************************************/
/*! exports provided: CoreComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreComponentsModule", function() { return CoreComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "CkJV");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "iIK3");
/* harmony import */ var _fake_logo_fake_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fake-logo/fake-logo.component */ "vD7G");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "pFXk");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "zYVI");








class CoreComponentsModule {
}
CoreComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreComponentsModule });
CoreComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreComponentsModule_Factory(t) { return new (t || CoreComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreComponentsModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _fake_logo_fake_logo_component__WEBPACK_IMPORTED_MODULE_4__["FakeLogoComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _fake_logo_fake_logo_component__WEBPACK_IMPORTED_MODULE_4__["FakeLogoComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"]],
                exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "iIK3":
/*!************************************************************!*\
  !*** ./src/app/core-components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fake_logo_fake_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fake-logo/fake-logo.component */ "vD7G");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, consts: [[1, "main-header"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-fake-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_fake_logo_fake_logo_component__WEBPACK_IMPORTED_MODULE_1__["FakeLogoComponent"]], styles: [".main-header[_ngcontent-%COMP%] {\n  background: #303240;\n  height: 60px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS1jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlLWNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMzMDMyNDA7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6ICAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pFXk":
/*!**********************************************************************!*\
  !*** ./src/app/core-components/breadcrumbs/breadcrumbs.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BreadcrumbsComponent {
    constructor() { }
    ngOnInit() {
    }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(); };
BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbsComponent, selectors: [["app-breadcrumbs"]], decls: 2, vars: 0, template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "breadcrumbs works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUtY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumbs',
                templateUrl: './breadcrumbs.component.html',
                styleUrls: ['./breadcrumbs.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "s8gM":
/*!***********************************************************************!*\
  !*** ./src/app/courses-page/course-header/course-header.component.ts ***!
  \***********************************************************************/
/*! exports provided: CourseHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseHeaderComponent", function() { return CourseHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CourseHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
CourseHeaderComponent.ɵfac = function CourseHeaderComponent_Factory(t) { return new (t || CourseHeaderComponent)(); };
CourseHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseHeaderComponent, selectors: [["app-course-header"]], decls: 3, vars: 0, consts: [[1, "course-header"], [1, "course-header-title", "ssp-bold"]], template: function CourseHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".course-header[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 64px;\n  line-height: 64px;\n  padding-left: 55px;\n}\n.course-header-title[_ngcontent-%COMP%] {\n  line-height: 24px;\n  letter-spacing: 0;\n  color: #464A5A;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy1wYWdlL2NvdXJzZS1oZWFkZXIvY291cnNlLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2VzLXBhZ2UvY291cnNlLWhlYWRlci9jb3Vyc2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXJzZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XG4gICYtdGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGNvbG9yOiAjNDY0QTVBO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course-header',
                templateUrl: './course-header.component.html',
                styleUrls: ['./course-header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vD7G":
/*!******************************************************************!*\
  !*** ./src/app/core-components/fake-logo/fake-logo.component.ts ***!
  \******************************************************************/
/*! exports provided: FakeLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeLogoComponent", function() { return FakeLogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FakeLogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
FakeLogoComponent.ɵfac = function FakeLogoComponent_Factory(t) { return new (t || FakeLogoComponent)(); };
FakeLogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FakeLogoComponent, selectors: [["app-fake-logo"]], decls: 4, vars: 0, consts: [[1, "logo-container"], [1, "app-logo"], [1, "header-text", "ssp-bold"]], template: function FakeLogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "video course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.app-logo[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background-image: url('logo.jpg');\n  background-position: center;\n  background-size: 90%;\n  background-repeat: no-repeat;\n  margin-left: 35px;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 18px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS1jb21wb25lbnRzL2Zha2UtbG9nby9mYWtlLWxvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9jb3JlLWNvbXBvbmVudHMvZmFrZS1sb2dvL2Zha2UtbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cbi5hcHAtbG9nbyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9sb2dvLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDkwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG4uaGVhZGVyLXRleHQge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeLogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fake-logo',
                templateUrl: './fake-logo.component.html',
                styleUrls: ['./fake-logo.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xcPe":
/*!*********************************************************************!*\
  !*** ./src/app/courses-page/course-items/course-items.component.ts ***!
  \*********************************************************************/
/*! exports provided: CourseItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseItemsComponent", function() { return CourseItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _course_item_course_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-item/course-item.component */ "2g5w");




function CourseItemsComponent_app_course_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-course-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDeleteCourse", function CourseItemsComponent_app_course_item_1_Template_app_course_item_onDeleteCourse_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onDeleteCourse($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", course_r1);
} }
class CourseItemsComponent {
    constructor() {
        this.courses = [];
    }
    ngOnInit() {
        this.courses = [
            { id: 'course-1', duration: 68, createdAt: '08/28/2020', title: 'Video Course 1. Name tag', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper enim maximus lorem cursus, sed dignissim dolor elementum. Pellentesque iaculis justo est, id tincidunt elit vestibulum nec. Nullam laoreet eu lorem ut viverra. Sed eget rutrum metus. Donec sed quam vel nisi faucibus porta ut ut lorem. Proin vestibulum mauris nec turpis placerat eleifend. Quisque consectetur dignissim libero ut ullamcorper.' },
            { id: 'course-2', duration: 78, createdAt: '10/28/2020', title: 'Video Course 2. Name tag', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper enim maximus lorem cursus, sed dignissim dolor elementum. Pellentesque iaculis justo est, id tincidunt elit vestibulum nec. Nullam laoreet eu lorem ut viverra. Sed eget rutrum metus. Donec sed quam vel nisi faucibus porta ut ut lorem. Proin vestibulum mauris nec turpis placerat eleifend. Quisque consectetur dignissim libero ut ullamcorper.' },
            { id: 'course-3', duration: 98, createdAt: '11/28/2020', title: 'Video Course 3. Name tag', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper enim maximus lorem cursus, sed dignissim dolor elementum. Pellentesque iaculis justo est, id tincidunt elit vestibulum nec. Nullam laoreet eu lorem ut viverra. Sed eget rutrum metus. Donec sed quam vel nisi faucibus porta ut ut lorem. Proin vestibulum mauris nec turpis placerat eleifend. Quisque consectetur dignissim libero ut ullamcorper.' },
            { id: 'course-4', duration: 58, createdAt: '07/28/2020', title: 'Video Course 4. Name tag', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper enim maximus lorem cursus, sed dignissim dolor elementum. Pellentesque iaculis justo est, id tincidunt elit vestibulum nec. Nullam laoreet eu lorem ut viverra. Sed eget rutrum metus. Donec sed quam vel nisi faucibus porta ut ut lorem. Proin vestibulum mauris nec turpis placerat eleifend. Quisque consectetur dignissim libero ut ullamcorper.' },
        ];
    }
    onDeleteCourse(courseId) {
        console.log('onDelete in parent ', courseId);
        this.courses = this.courses.filter(item => item.id !== courseId);
    }
}
CourseItemsComponent.ɵfac = function CourseItemsComponent_Factory(t) { return new (t || CourseItemsComponent)(); };
CourseItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseItemsComponent, selectors: [["app-course-items"]], decls: 2, vars: 1, consts: [[1, "courses-wrapper"], [3, "item", "onDeleteCourse", 4, "ngFor", "ngForOf"], [3, "item", "onDeleteCourse"]], template: function CourseItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CourseItemsComponent_app_course_item_1_Template, 1, 1, "app-course-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _course_item_course_item_component__WEBPACK_IMPORTED_MODULE_2__["CourseItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMtcGFnZS9jb3Vyc2UtaXRlbXMvY291cnNlLWl0ZW1zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseItemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course-items',
                templateUrl: './course-items.component.html',
                styleUrls: ['./course-items.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zYVI":
/*!********************************************************************!*\
  !*** ./src/app/core-components/search-bar/search-bar.component.ts ***!
  \********************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], decls: 2, vars: 0, template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "search-bar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUtY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-bar',
                templateUrl: './search-bar.component.html',
                styleUrls: ['./search-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map