function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/
  /*! exports provided: AboutComponent */
  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../services/location.service */"./src/app/services/location.service.ts");
    var _c0 = ["map_box"];
    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(geoservice) {
        _classCallCheck(this, AboutComponent);
        this.geoservice = geoservice;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
          phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)]),
          date_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, []),
          guest_count: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
      }
      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.geoservice.config(this.map_box.nativeElement, [32.750679004275874, -117.23809058250849]);
        }
      }, {
        key: "submitClientInquire",
        value: function submitClientInquire(e) {
          console.log(e);
        }
      }]);
      return AboutComponent;
    }();
    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"]));
    };
    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      viewQuery: function AboutComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }
        if (rf & 2) {
          var _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map_box = _t.first);
        }
      },
      decls: 133,
      vars: 0,
      consts: [[1, "relative", "max-w-screen-xl", "mx-auto", "p-4", "lg:p-0"], [1, "relative", "lg:mx-auto", "lg:w-3/4"], [1, "relative", "flex", "flex-col", "lg:flex-row"], [1, "text-white", "absolute", "top-50", "left-25", "transform", "-translate-y-full", "z-10", "md:text-gray-900", "md:left-0", "md:top-0", "md:text-center", "md:translate-x-full", "md:translate-y-0", "lg:-translate-x-1/2"], [1, "text-5xl", "font-bold", "md:block", "md:text-6xl", "md:transform", "md:scale-150", "lg:my-4"], [1, "relative", "z-0"], ["viewBox", "0 0 90 90", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "top-0", "left-0", "w-full", "h-full", "text-yellow-500"], ["id", "sw-gradient", "x1", "0", "x2", "1", "y1", "1", "y2", "0"], ["id", "stop1", "stop-color", "rgba(248, 117, 55, 1)", "offset", "0%"], ["id", "stop2", "stop-color", "rgba(251, 168, 31, 1)", "offset", "100%"], ["fill", "currentColor", "d", "M20.2,-24.2C27.5,-17.9,35.7,-12.8,37,-6.4C38.3,0.1,32.8,7.9,27.6,15.1C22.5,22.3,17.7,28.9,11.7,30.4C5.6,31.9,-1.7,28.3,-10.3,26.1C-18.9,23.9,-28.8,23.1,-35,17.6C-41.2,12.2,-43.7,2,-40.9,-6.1C-38.1,-14.2,-30.1,-20.3,-22.4,-26.6C-14.7,-32.8,-7.4,-39.4,-0.5,-38.8C6.4,-38.2,12.8,-30.6,20.2,-24.2Z", "width", "100%", "height", "100%", "transform", "translate(50 50)", "stroke-width", "0", 2, "transition", "all 0.3s ease 0s"], ["src", "assets/images/bluebird-provisions-lRAWcT7uwhY-unsplash-transformed.png", 1, "relative", "lg:mx-auto", "lg:w-3/4"], [1, "text-white", "absolute", "right-25", "bottom-50", "transform", "translate-y-full", "z-10", "md:text-gray-900", "md:right-0", "md:bottom-0", "md:text-center", "md:-translate-x-full", "md:translate-y-0", "lg:translate-x-1/2"], [1, "text-5xl", "font-bold", "md:block", "md:text-6xl", "md:transform", "md:scale-150", "md:my-4"], [1, "relative", "text-center", "lg:mx-auto", "lg:w-1/2"], [1, "text-gray-700", "pt-8"], [1, "relative", "bg-yellow-500", "rounded-lg", "shadow-lg", "my-32", "px-8", "py-8", "md:w-3/4", "md:mx-auto", "md:max-w-xl", "lg:w-auto", "lg:px-12", "lg:py-8", 3, "ngSubmit"], [1, "relative"], [1, "relative", "my-4"], [1, "text-sm", "text-gray-700"], [1, "w-full", "relative", "mt-1", "rounded-md", "shadow-sm"], [1, "pointer-events-none", "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-4", "h-4"], ["fill-rule", "evenodd", "d", "M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z", "clip-rule", "evenodd"], ["type", "text", "formControlName", "name", "placeholder", "Type your email", 1, "input-yellow-600", "focus:area-yellow"], [1, "text-xs", "text-red-600"], [1, "relative", "lg:pr-8", "lg:w-3/5"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-4", "h-4"], ["stroke-linecap", "round", "d", "M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"], ["type", "text", "formControlName", "email", "placeholder", "i.e. johnsmith@gmail.com", 1, "input-yellow-600", "focus:area-yellow"], [1, "relative", "lg:w-2/5"], ["fill-rule", "evenodd", "d", "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z", "clip-rule", "evenodd"], ["type", "text", "formControlName", "phone_number", "placeholder", "i.e. 888 - 123 - 4567", 1, "input-yellow-600", "focus:area-yellow"], [1, "realtive", "lg:pr-8", "lg:w-3/5"], ["d", "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"], ["fill-rule", "evenodd", "d", "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z", "clip-rule", "evenodd"], ["type", "text", "formControlName", "date_time", "placeholder", "i.e. May 7", 1, "input-yellow-600", "focus-outline-none", "focus:border-indigo-500"], [1, "realtive", "lg:w-2/5"], ["d", "M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"], ["type", "text", "formControlName", "guest_count", "placeholder", "i.e. 4", 1, "input-yellow-600", "focus:area-yellow"], [1, "realtive"], ["type", "text", "rows", "6", "formControlName", "notes", "placeholder", "", 1, "area-yellow-600", "focus:area-yellow"], [1, "relative", "mt-12"], [1, "button-gray-900", "hover:bg-gray-800"], [1, "relative", "my-16"], [1, "flex", "flex-col", "xl:flex-row", "xl:mx-auto", "xl:container"], [1, "relative", "aspect-square", "rounded-lg", "overflow-hidden", "md:aspect-9/16", "md:mx-auto", "md:w-3/4", "lg:w-1/2", "xl:aspect-square"], [1, "absolute", "block", "top-0", "left-0", "w-full", "h-full", "overflow-hidden"], ["map_box", ""], [1, "relative", "flex", "flex-col", "justify-center", "items-center", "md:mx-auto", "md:w-3/4", "lg:w-1/2"], [1, "relative", "w-full", "text-lg", "text-gray-800", "text-left", "font-bold", "px-4", "pt-12", "md:text-4xl", "xl:pl-16"], [1, "relative", "px-4", "py-12", "xl:pt-12", "lx:px-16"], [1, "relative", "flex", "items-top", "flex-row"], [1, "relative", "opacity-75"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-6", "h-6", "mt-1"], ["fill-rule", "evenodd", "d", "M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z", "clip-rule", "evenodd"], [1, "relative", "ml-4"], [1, "text-base", "text-gray-900", "md:text-xl"], [1, "relative", "mt-2"], [1, "text-sm", "text-gray-700", "md:text-base"], [1, "relative", "flex", "flex-row", "items-center", "mt-8"], ["d", "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"], ["d", "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "O");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "U");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "R");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "defs");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "linearGradient", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "stop", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "stop", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "S");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "T");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "O");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "R");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Y");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " When George Katakalidis open his first Daphnes restaurant in San Diego back in 1991, Aggie worked along with him and continued to open many more. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " After 25 years of successfully having assistted to materialized many other restaurant concepts, Aggie parted ways with George and decided to open his own restaurant, Kebab Grill in La Jolla, San Diego. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AboutComponent_Template_form_ngSubmit_34_listener($event) {
            return ctx.submitClientInquire($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Your name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "* Required");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Your email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "svg", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Your phone number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "svg", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "* Required");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Date & Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "svg", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Guest count");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "svg", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Notes");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "textarea", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Send");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "map", 47, 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h3", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Visit us");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "svg", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h5", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "4545 La Jolla Village Dr.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h5", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "La Jolla, CA 92122");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "(Inside the UTC mall. West off the I-805, east off the I-5)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "svg", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h5", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "kebabgrillutc@gmail.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "svg", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h5", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "(858) 643 - 9337");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".char-gray-900[_ngcontent-%COMP%] {\n  display: block;\n  --text-opacity: 1;\n  color: #1a202c;\n  color: rgba(26, 32, 44, var(--text-opacity));\n  font-size: 4rem;\n  font-weight: 700;\n  --transform-translate-x: 0;\n  --transform-translate-y: 0;\n  --transform-rotate: 0;\n  --transform-skew-x: 0;\n  --transform-skew-y: 0;\n  --transform-scale-x: 1;\n  --transform-scale-y: 1;\n  transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));\n  --transform-scale-x: 1.5;\n  --transform-scale-y: 1.5;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.button-gray-900[_ngcontent-%COMP%] {\n  --bg-opacity: 1;\n  background-color: #1a202c;\n  background-color: rgba(26, 32, 44, var(--bg-opacity));\n  --text-opacity: 1;\n  color: #fff;\n  color: rgba(255, 255, 255, var(--text-opacity));\n  font-size: 1rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  border-radius: 0.375rem;\n  width: 8rem;\n}\n\n\n\n@media (min-width: 640px) {\n  .sm\\[_ngcontent-%COMP%]:char-gray-900 {\n    display: block;\n    --text-opacity: 1;\n    color: #1a202c;\n    color: rgba(26, 32, 44, var(--text-opacity));\n    font-size: 4rem;\n    font-weight: 700;\n    --transform-translate-x: 0;\n    --transform-translate-y: 0;\n    --transform-rotate: 0;\n    --transform-skew-x: 0;\n    --transform-skew-y: 0;\n    --transform-scale-x: 1;\n    --transform-scale-y: 1;\n    transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));\n    --transform-scale-x: 1.5;\n    --transform-scale-y: 1.5;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  .sm\\[_ngcontent-%COMP%]:button-gray-900 {\n    --bg-opacity: 1;\n    background-color: #1a202c;\n    background-color: rgba(26, 32, 44, var(--bg-opacity));\n    --text-opacity: 1;\n    color: #fff;\n    color: rgba(255, 255, 255, var(--text-opacity));\n    font-size: 1rem;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-radius: 0.375rem;\n    width: 8rem;\n  }\n\n  \n}\n\n@media (min-width: 768px) {\n  .md\\[_ngcontent-%COMP%]:char-gray-900 {\n    display: block;\n    --text-opacity: 1;\n    color: #1a202c;\n    color: rgba(26, 32, 44, var(--text-opacity));\n    font-size: 4rem;\n    font-weight: 700;\n    --transform-translate-x: 0;\n    --transform-translate-y: 0;\n    --transform-rotate: 0;\n    --transform-skew-x: 0;\n    --transform-skew-y: 0;\n    --transform-scale-x: 1;\n    --transform-scale-y: 1;\n    transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));\n    --transform-scale-x: 1.5;\n    --transform-scale-y: 1.5;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  .md\\[_ngcontent-%COMP%]:button-gray-900 {\n    --bg-opacity: 1;\n    background-color: #1a202c;\n    background-color: rgba(26, 32, 44, var(--bg-opacity));\n    --text-opacity: 1;\n    color: #fff;\n    color: rgba(255, 255, 255, var(--text-opacity));\n    font-size: 1rem;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-radius: 0.375rem;\n    width: 8rem;\n  }\n\n  \n}\n\n@media (min-width: 1024px) {\n  .lg\\[_ngcontent-%COMP%]:char-gray-900 {\n    display: block;\n    --text-opacity: 1;\n    color: #1a202c;\n    color: rgba(26, 32, 44, var(--text-opacity));\n    font-size: 4rem;\n    font-weight: 700;\n    --transform-translate-x: 0;\n    --transform-translate-y: 0;\n    --transform-rotate: 0;\n    --transform-skew-x: 0;\n    --transform-skew-y: 0;\n    --transform-scale-x: 1;\n    --transform-scale-y: 1;\n    transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));\n    --transform-scale-x: 1.5;\n    --transform-scale-y: 1.5;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  .lg\\[_ngcontent-%COMP%]:button-gray-900 {\n    --bg-opacity: 1;\n    background-color: #1a202c;\n    background-color: rgba(26, 32, 44, var(--bg-opacity));\n    --text-opacity: 1;\n    color: #fff;\n    color: rgba(255, 255, 255, var(--text-opacity));\n    font-size: 1rem;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-radius: 0.375rem;\n    width: 8rem;\n  }\n\n  \n}\n\n@media (min-width: 1280px) {\n  .xl\\[_ngcontent-%COMP%]:char-gray-900 {\n    display: block;\n    --text-opacity: 1;\n    color: #1a202c;\n    color: rgba(26, 32, 44, var(--text-opacity));\n    font-size: 4rem;\n    font-weight: 700;\n    --transform-translate-x: 0;\n    --transform-translate-y: 0;\n    --transform-rotate: 0;\n    --transform-skew-x: 0;\n    --transform-skew-y: 0;\n    --transform-scale-x: 1;\n    --transform-scale-y: 1;\n    transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));\n    --transform-scale-x: 1.5;\n    --transform-scale-y: 1.5;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  .xl\\[_ngcontent-%COMP%]:button-gray-900 {\n    --bg-opacity: 1;\n    background-color: #1a202c;\n    background-color: rgba(26, 32, 44, var(--bg-opacity));\n    --text-opacity: 1;\n    color: #fff;\n    color: rgba(255, 255, 255, var(--text-opacity));\n    font-size: 1rem;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-radius: 0.375rem;\n    width: 8rem;\n  }\n\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXEFuZ3VsYXJXb3Jrc3BhY2VcXHByb2plY3RzXFxLZWJhYkdyaWxsL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0UEFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxREFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLCtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7Ozs7Ozs7Ozs7Ozs7Ozs7S0FBQTs7QUFrQkE7RUFDRTtJQUNFLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSw0Q0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLDBCQUFBO0lBQ0EsMEJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxzQkFBQTtJQUNBLHNCQUFBO0lBQ0EsNFBBQUE7SUFDQSx3QkFBQTtJQUNBLHdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQ0FGOztFREdBO0lBQ0UsZUFBQTtJQUNBLHlCQUFBO0lBQ0EscURBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSwrQ0FBQTtJQUNBLGVBQUE7SUFDQSxvQkFBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsV0FBQTtFQ0FGOztFREdBOzs7Ozs7Ozs7Ozs7Ozs7O0tBQUE7QUNnQkY7O0FER0E7RUFDRTtJQUNFLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSw0Q0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLDBCQUFBO0lBQ0EsMEJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxzQkFBQTtJQUNBLHNCQUFBO0lBQ0EsNFBBQUE7SUFDQSx3QkFBQTtJQUNBLHdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQ0RGOztFRElBO0lBQ0UsZUFBQTtJQUNBLHlCQUFBO0lBQ0EscURBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSwrQ0FBQTtJQUNBLGVBQUE7SUFDQSxvQkFBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsV0FBQTtFQ0RGOztFRElBOzs7Ozs7Ozs7Ozs7Ozs7O0tBQUE7QUNlRjs7QURJQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLDRDQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsMEJBQUE7SUFDQSwwQkFBQTtJQUNBLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0Esc0JBQUE7SUFDQSw0UEFBQTtJQUNBLHdCQUFBO0lBQ0Esd0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDRkY7O0VES0E7SUFDRSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxxREFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLCtDQUFBO0lBQ0EsZUFBQTtJQUNBLG9CQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0VDRkY7O0VES0E7Ozs7Ozs7Ozs7Ozs7Ozs7S0FBQTtBQ2NGOztBREtBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0EsNENBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSwwQkFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxzQkFBQTtJQUNBLDRQQUFBO0lBQ0Esd0JBQUE7SUFDQSx3QkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUNIRjs7RURNQTtJQUNFLGVBQUE7SUFDQSx5QkFBQTtJQUNBLHFEQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsK0NBQUE7SUFDQSxlQUFBO0lBQ0Esb0JBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7RUNIRjs7RURNQTs7Ozs7Ozs7Ozs7Ozs7OztLQUFBO0FDYUYiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFyLWdyYXktOTAwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogIzFhMjAyYztcbiAgY29sb3I6IHJnYmEoMjYsIDMyLCA0NCwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXg6IDA7XG4gIC0tdHJhbnNmb3JtLXRyYW5zbGF0ZS15OiAwO1xuICAtLXRyYW5zZm9ybS1yb3RhdGU6IDA7XG4gIC0tdHJhbnNmb3JtLXNrZXcteDogMDtcbiAgLS10cmFuc2Zvcm0tc2tldy15OiAwO1xuICAtLXRyYW5zZm9ybS1zY2FsZS14OiAxO1xuICAtLXRyYW5zZm9ybS1zY2FsZS15OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tdHJhbnNmb3JtLXRyYW5zbGF0ZS14KSkgdHJhbnNsYXRlWSh2YXIoLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHJhbnNmb3JtLXJvdGF0ZSkpIHNrZXdYKHZhcigtLXRyYW5zZm9ybS1za2V3LXgpKSBza2V3WSh2YXIoLS10cmFuc2Zvcm0tc2tldy15KSkgc2NhbGVYKHZhcigtLXRyYW5zZm9ybS1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXRyYW5zZm9ybS1zY2FsZS15KSk7XG4gIC0tdHJhbnNmb3JtLXNjYWxlLXg6IDEuNTtcbiAgLS10cmFuc2Zvcm0tc2NhbGUteTogMS41O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uYnV0dG9uLWdyYXktOTAwIHtcbiAgLS1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyMDJjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAzMiwgNDQsIHZhcigtLWJnLW9wYWNpdHkpKTtcbiAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiAjZmZmO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10ZXh0LW9wYWNpdHkpKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgd2lkdGg6IDhyZW07XG59XG5cbi8qXHJcbiAgICAuY2hhci1wb3MtbGVmdCxcclxuICAgIC5jaGFyLXBvcy1yaWdodCB7XHJcbiAgICAgICAgQGFwcGx5IGFic29sdXRlIHRleHQtY2VudGVyIHRyYW5zZm9ybSB6LTIwIC10cmFuc2xhdGUteC0xLzI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXItcG9zLWxlZnQge1xyXG4gICAgICAgIEBhcHBseSBsZWZ0LTI1IHRvcC0yNTtcclxuICAgIH1cclxuICAgIC5jaGFyLXBvcy1yaWdodCB7XHJcbiAgICAgICAgQGFwcGx5IGxlZnQtNzUgdG9wLTI1O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGFyLXBvcy1ub25lIHtcclxuICAgICAgICBAYXBwbHkgcmVsYXRpdmUgdGV4dC1jZW50ZXI7XHJcbiAgICB9XHJcbiAgICAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgLnNtXFw6Y2hhci1ncmF5LTkwMCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6ICMxYTIwMmM7XG4gICAgY29sb3I6IHJnYmEoMjYsIDMyLCA0NCwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXg6IDA7XG4gICAgLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXk6IDA7XG4gICAgLS10cmFuc2Zvcm0tcm90YXRlOiAwO1xuICAgIC0tdHJhbnNmb3JtLXNrZXcteDogMDtcbiAgICAtLXRyYW5zZm9ybS1za2V3LXk6IDA7XG4gICAgLS10cmFuc2Zvcm0tc2NhbGUteDogMTtcbiAgICAtLXRyYW5zZm9ybS1zY2FsZS15OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXgpKSB0cmFuc2xhdGVZKHZhcigtLXRyYW5zZm9ybS10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10cmFuc2Zvcm0tcm90YXRlKSkgc2tld1godmFyKC0tdHJhbnNmb3JtLXNrZXcteCkpIHNrZXdZKHZhcigtLXRyYW5zZm9ybS1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHJhbnNmb3JtLXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHJhbnNmb3JtLXNjYWxlLXkpKTtcbiAgICAtLXRyYW5zZm9ybS1zY2FsZS14OiAxLjU7XG4gICAgLS10cmFuc2Zvcm0tc2NhbGUteTogMS41O1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5zbVxcOmJ1dHRvbi1ncmF5LTkwMCB7XG4gICAgLS1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTIwMmM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMzIsIDQ0LCB2YXIoLS1iZy1vcGFjaXR5KSk7XG4gICAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gICAgd2lkdGg6IDhyZW07XG4gIH1cblxuICAvKlxyXG4gICAgLmNoYXItcG9zLWxlZnQsXHJcbiAgICAuY2hhci1wb3MtcmlnaHQge1xyXG4gICAgICAgIEBhcHBseSBhYnNvbHV0ZSB0ZXh0LWNlbnRlciB0cmFuc2Zvcm0gei0yMCAtdHJhbnNsYXRlLXgtMS8yO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGFyLXBvcy1sZWZ0IHtcclxuICAgICAgICBAYXBwbHkgbGVmdC0yNSB0b3AtMjU7XHJcbiAgICB9XHJcbiAgICAuY2hhci1wb3MtcmlnaHQge1xyXG4gICAgICAgIEBhcHBseSBsZWZ0LTc1IHRvcC0yNTtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhci1wb3Mtbm9uZSB7XHJcbiAgICAgICAgQGFwcGx5IHJlbGF0aXZlIHRleHQtY2VudGVyO1xyXG4gICAgfVxyXG4gICAgKi9cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tZFxcOmNoYXItZ3JheS05MDAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC0tdGV4dC1vcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAjMWEyMDJjO1xuICAgIGNvbG9yOiByZ2JhKDI2LCAzMiwgNDQsIHZhcigtLXRleHQtb3BhY2l0eSkpO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIC0tdHJhbnNmb3JtLXRyYW5zbGF0ZS14OiAwO1xuICAgIC0tdHJhbnNmb3JtLXRyYW5zbGF0ZS15OiAwO1xuICAgIC0tdHJhbnNmb3JtLXJvdGF0ZTogMDtcbiAgICAtLXRyYW5zZm9ybS1za2V3LXg6IDA7XG4gICAgLS10cmFuc2Zvcm0tc2tldy15OiAwO1xuICAgIC0tdHJhbnNmb3JtLXNjYWxlLXg6IDE7XG4gICAgLS10cmFuc2Zvcm0tc2NhbGUteTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tdHJhbnNmb3JtLXRyYW5zbGF0ZS14KSkgdHJhbnNsYXRlWSh2YXIoLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHJhbnNmb3JtLXJvdGF0ZSkpIHNrZXdYKHZhcigtLXRyYW5zZm9ybS1za2V3LXgpKSBza2V3WSh2YXIoLS10cmFuc2Zvcm0tc2tldy15KSkgc2NhbGVYKHZhcigtLXRyYW5zZm9ybS1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXRyYW5zZm9ybS1zY2FsZS15KSk7XG4gICAgLS10cmFuc2Zvcm0tc2NhbGUteDogMS41O1xuICAgIC0tdHJhbnNmb3JtLXNjYWxlLXk6IDEuNTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cblxuICAubWRcXDpidXR0b24tZ3JheS05MDAge1xuICAgIC0tYmctb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyMDJjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDMyLCA0NCwgdmFyKC0tYmctb3BhY2l0eSkpO1xuICAgIC0tdGV4dC1vcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXRleHQtb3BhY2l0eSkpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICAgIHdpZHRoOiA4cmVtO1xuICB9XG5cbiAgLypcclxuICAgIC5jaGFyLXBvcy1sZWZ0LFxyXG4gICAgLmNoYXItcG9zLXJpZ2h0IHtcclxuICAgICAgICBAYXBwbHkgYWJzb2x1dGUgdGV4dC1jZW50ZXIgdHJhbnNmb3JtIHotMjAgLXRyYW5zbGF0ZS14LTEvMjtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhci1wb3MtbGVmdCB7XHJcbiAgICAgICAgQGFwcGx5IGxlZnQtMjUgdG9wLTI1O1xyXG4gICAgfVxyXG4gICAgLmNoYXItcG9zLXJpZ2h0IHtcclxuICAgICAgICBAYXBwbHkgbGVmdC03NSB0b3AtMjU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXItcG9zLW5vbmUge1xyXG4gICAgICAgIEBhcHBseSByZWxhdGl2ZSB0ZXh0LWNlbnRlcjtcclxuICAgIH1cclxuICAgICovXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmxnXFw6Y2hhci1ncmF5LTkwMCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6ICMxYTIwMmM7XG4gICAgY29sb3I6IHJnYmEoMjYsIDMyLCA0NCwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXg6IDA7XG4gICAgLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXk6IDA7XG4gICAgLS10cmFuc2Zvcm0tcm90YXRlOiAwO1xuICAgIC0tdHJhbnNmb3JtLXNrZXcteDogMDtcbiAgICAtLXRyYW5zZm9ybS1za2V3LXk6IDA7XG4gICAgLS10cmFuc2Zvcm0tc2NhbGUteDogMTtcbiAgICAtLXRyYW5zZm9ybS1zY2FsZS15OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXgpKSB0cmFuc2xhdGVZKHZhcigtLXRyYW5zZm9ybS10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10cmFuc2Zvcm0tcm90YXRlKSkgc2tld1godmFyKC0tdHJhbnNmb3JtLXNrZXcteCkpIHNrZXdZKHZhcigtLXRyYW5zZm9ybS1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHJhbnNmb3JtLXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHJhbnNmb3JtLXNjYWxlLXkpKTtcbiAgICAtLXRyYW5zZm9ybS1zY2FsZS14OiAxLjU7XG4gICAgLS10cmFuc2Zvcm0tc2NhbGUteTogMS41O1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5sZ1xcOmJ1dHRvbi1ncmF5LTkwMCB7XG4gICAgLS1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTIwMmM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMzIsIDQ0LCB2YXIoLS1iZy1vcGFjaXR5KSk7XG4gICAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gICAgd2lkdGg6IDhyZW07XG4gIH1cblxuICAvKlxyXG4gICAgLmNoYXItcG9zLWxlZnQsXHJcbiAgICAuY2hhci1wb3MtcmlnaHQge1xyXG4gICAgICAgIEBhcHBseSBhYnNvbHV0ZSB0ZXh0LWNlbnRlciB0cmFuc2Zvcm0gei0yMCAtdHJhbnNsYXRlLXgtMS8yO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGFyLXBvcy1sZWZ0IHtcclxuICAgICAgICBAYXBwbHkgbGVmdC0yNSB0b3AtMjU7XHJcbiAgICB9XHJcbiAgICAuY2hhci1wb3MtcmlnaHQge1xyXG4gICAgICAgIEBhcHBseSBsZWZ0LTc1IHRvcC0yNTtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhci1wb3Mtbm9uZSB7XHJcbiAgICAgICAgQGFwcGx5IHJlbGF0aXZlIHRleHQtY2VudGVyO1xyXG4gICAgfVxyXG4gICAgKi9cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAueGxcXDpjaGFyLWdyYXktOTAwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAtLXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogIzFhMjAyYztcbiAgICBjb2xvcjogcmdiYSgyNiwgMzIsIDQ0LCB2YXIoLS10ZXh0LW9wYWNpdHkpKTtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAtLXRyYW5zZm9ybS10cmFuc2xhdGUteDogMDtcbiAgICAtLXRyYW5zZm9ybS10cmFuc2xhdGUteTogMDtcbiAgICAtLXRyYW5zZm9ybS1yb3RhdGU6IDA7XG4gICAgLS10cmFuc2Zvcm0tc2tldy14OiAwO1xuICAgIC0tdHJhbnNmb3JtLXNrZXcteTogMDtcbiAgICAtLXRyYW5zZm9ybS1zY2FsZS14OiAxO1xuICAgIC0tdHJhbnNmb3JtLXNjYWxlLXk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXRyYW5zZm9ybS10cmFuc2xhdGUteCkpIHRyYW5zbGF0ZVkodmFyKC0tdHJhbnNmb3JtLXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXRyYW5zZm9ybS1yb3RhdGUpKSBza2V3WCh2YXIoLS10cmFuc2Zvcm0tc2tldy14KSkgc2tld1kodmFyKC0tdHJhbnNmb3JtLXNrZXcteSkpIHNjYWxlWCh2YXIoLS10cmFuc2Zvcm0tc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10cmFuc2Zvcm0tc2NhbGUteSkpO1xuICAgIC0tdHJhbnNmb3JtLXNjYWxlLXg6IDEuNTtcbiAgICAtLXRyYW5zZm9ybS1zY2FsZS15OiAxLjU7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLnhsXFw6YnV0dG9uLWdyYXktOTAwIHtcbiAgICAtLWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjAyYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAzMiwgNDQsIHZhcigtLWJnLW9wYWNpdHkpKTtcbiAgICAtLXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10ZXh0LW9wYWNpdHkpKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgICB3aWR0aDogOHJlbTtcbiAgfVxuXG4gIC8qXHJcbiAgICAuY2hhci1wb3MtbGVmdCxcclxuICAgIC5jaGFyLXBvcy1yaWdodCB7XHJcbiAgICAgICAgQGFwcGx5IGFic29sdXRlIHRleHQtY2VudGVyIHRyYW5zZm9ybSB6LTIwIC10cmFuc2xhdGUteC0xLzI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXItcG9zLWxlZnQge1xyXG4gICAgICAgIEBhcHBseSBsZWZ0LTI1IHRvcC0yNTtcclxuICAgIH1cclxuICAgIC5jaGFyLXBvcy1yaWdodCB7XHJcbiAgICAgICAgQGFwcGx5IGxlZnQtNzUgdG9wLTI1O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGFyLXBvcy1ub25lIHtcclxuICAgICAgICBAYXBwbHkgcmVsYXRpdmUgdGV4dC1jZW50ZXI7XHJcbiAgICB9XHJcbiAgICAqL1xufVxyXG4iLCIuY2hhci1ncmF5LTkwMCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6ICMxYTIwMmM7XG4gIGNvbG9yOiByZ2JhKDI2LCAzMiwgNDQsIHZhcigtLXRleHQtb3BhY2l0eSkpO1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIC0tdHJhbnNmb3JtLXRyYW5zbGF0ZS14OiAwO1xuICAtLXRyYW5zZm9ybS10cmFuc2xhdGUteTogMDtcbiAgLS10cmFuc2Zvcm0tcm90YXRlOiAwO1xuICAtLXRyYW5zZm9ybS1za2V3LXg6IDA7XG4gIC0tdHJhbnNmb3JtLXNrZXcteTogMDtcbiAgLS10cmFuc2Zvcm0tc2NhbGUteDogMTtcbiAgLS10cmFuc2Zvcm0tc2NhbGUteTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXRyYW5zZm9ybS10cmFuc2xhdGUteCkpIHRyYW5zbGF0ZVkodmFyKC0tdHJhbnNmb3JtLXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXRyYW5zZm9ybS1yb3RhdGUpKSBza2V3WCh2YXIoLS10cmFuc2Zvcm0tc2tldy14KSkgc2tld1kodmFyKC0tdHJhbnNmb3JtLXNrZXcteSkpIHNjYWxlWCh2YXIoLS10cmFuc2Zvcm0tc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10cmFuc2Zvcm0tc2NhbGUteSkpO1xuICAtLXRyYW5zZm9ybS1zY2FsZS14OiAxLjU7XG4gIC0tdHJhbnNmb3JtLXNjYWxlLXk6IDEuNTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmJ1dHRvbi1ncmF5LTkwMCB7XG4gIC0tYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjAyYztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMzIsIDQ0LCB2YXIoLS1iZy1vcGFjaXR5KSk7XG4gIC0tdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIHdpZHRoOiA4cmVtO1xufVxuXG4vKlxuICAgIC5jaGFyLXBvcy1sZWZ0LFxuICAgIC5jaGFyLXBvcy1yaWdodCB7XG4gICAgICAgIEBhcHBseSBhYnNvbHV0ZSB0ZXh0LWNlbnRlciB0cmFuc2Zvcm0gei0yMCAtdHJhbnNsYXRlLXgtMS8yO1xuICAgIH1cblxuICAgIC5jaGFyLXBvcy1sZWZ0IHtcbiAgICAgICAgQGFwcGx5IGxlZnQtMjUgdG9wLTI1O1xuICAgIH1cbiAgICAuY2hhci1wb3MtcmlnaHQge1xuICAgICAgICBAYXBwbHkgbGVmdC03NSB0b3AtMjU7XG4gICAgfVxuXG4gICAgLmNoYXItcG9zLW5vbmUge1xuICAgICAgICBAYXBwbHkgcmVsYXRpdmUgdGV4dC1jZW50ZXI7XG4gICAgfVxuICAgICovXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgLnNtXFw6Y2hhci1ncmF5LTkwMCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6ICMxYTIwMmM7XG4gICAgY29sb3I6IHJnYmEoMjYsIDMyLCA0NCwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXg6IDA7XG4gICAgLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXk6IDA7XG4gICAgLS10cmFuc2Zvcm0tcm90YXRlOiAwO1xuICAgIC0tdHJhbnNmb3JtLXNrZXcteDogMDtcbiAgICAtLXRyYW5zZm9ybS1za2V3LXk6IDA7XG4gICAgLS10cmFuc2Zvcm0tc2NhbGUteDogMTtcbiAgICAtLXRyYW5zZm9ybS1zY2FsZS15OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXgpKSB0cmFuc2xhdGVZKHZhcigtLXRyYW5zZm9ybS10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10cmFuc2Zvcm0tcm90YXRlKSkgc2tld1godmFyKC0tdHJhbnNmb3JtLXNrZXcteCkpIHNrZXdZKHZhcigtLXRyYW5zZm9ybS1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHJhbnNmb3JtLXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHJhbnNmb3JtLXNjYWxlLXkpKTtcbiAgICAtLXRyYW5zZm9ybS1zY2FsZS14OiAxLjU7XG4gICAgLS10cmFuc2Zvcm0tc2NhbGUteTogMS41O1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5zbVxcOmJ1dHRvbi1ncmF5LTkwMCB7XG4gICAgLS1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTIwMmM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMzIsIDQ0LCB2YXIoLS1iZy1vcGFjaXR5KSk7XG4gICAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gICAgd2lkdGg6IDhyZW07XG4gIH1cblxuICAvKlxuICAgIC5jaGFyLXBvcy1sZWZ0LFxuICAgIC5jaGFyLXBvcy1yaWdodCB7XG4gICAgICAgIEBhcHBseSBhYnNvbHV0ZSB0ZXh0LWNlbnRlciB0cmFuc2Zvcm0gei0yMCAtdHJhbnNsYXRlLXgtMS8yO1xuICAgIH1cblxuICAgIC5jaGFyLXBvcy1sZWZ0IHtcbiAgICAgICAgQGFwcGx5IGxlZnQtMjUgdG9wLTI1O1xuICAgIH1cbiAgICAuY2hhci1wb3MtcmlnaHQge1xuICAgICAgICBAYXBwbHkgbGVmdC03NSB0b3AtMjU7XG4gICAgfVxuXG4gICAgLmNoYXItcG9zLW5vbmUge1xuICAgICAgICBAYXBwbHkgcmVsYXRpdmUgdGV4dC1jZW50ZXI7XG4gICAgfVxuICAgICovXG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1kXFw6Y2hhci1ncmF5LTkwMCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6ICMxYTIwMmM7XG4gICAgY29sb3I6IHJnYmEoMjYsIDMyLCA0NCwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXg6IDA7XG4gICAgLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXk6IDA7XG4gICAgLS10cmFuc2Zvcm0tcm90YXRlOiAwO1xuICAgIC0tdHJhbnNmb3JtLXNrZXcteDogMDtcbiAgICAtLXRyYW5zZm9ybS1za2V3LXk6IDA7XG4gICAgLS10cmFuc2Zvcm0tc2NhbGUteDogMTtcbiAgICAtLXRyYW5zZm9ybS1zY2FsZS15OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXgpKSB0cmFuc2xhdGVZKHZhcigtLXRyYW5zZm9ybS10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10cmFuc2Zvcm0tcm90YXRlKSkgc2tld1godmFyKC0tdHJhbnNmb3JtLXNrZXcteCkpIHNrZXdZKHZhcigtLXRyYW5zZm9ybS1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHJhbnNmb3JtLXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHJhbnNmb3JtLXNjYWxlLXkpKTtcbiAgICAtLXRyYW5zZm9ybS1zY2FsZS14OiAxLjU7XG4gICAgLS10cmFuc2Zvcm0tc2NhbGUteTogMS41O1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5tZFxcOmJ1dHRvbi1ncmF5LTkwMCB7XG4gICAgLS1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTIwMmM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMzIsIDQ0LCB2YXIoLS1iZy1vcGFjaXR5KSk7XG4gICAgLS10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdGV4dC1vcGFjaXR5KSk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gICAgd2lkdGg6IDhyZW07XG4gIH1cblxuICAvKlxuICAgIC5jaGFyLXBvcy1sZWZ0LFxuICAgIC5jaGFyLXBvcy1yaWdodCB7XG4gICAgICAgIEBhcHBseSBhYnNvbHV0ZSB0ZXh0LWNlbnRlciB0cmFuc2Zvcm0gei0yMCAtdHJhbnNsYXRlLXgtMS8yO1xuICAgIH1cblxuICAgIC5jaGFyLXBvcy1sZWZ0IHtcbiAgICAgICAgQGFwcGx5IGxlZnQtMjUgdG9wLTI1O1xuICAgIH1cbiAgICAuY2hhci1wb3MtcmlnaHQge1xuICAgICAgICBAYXBwbHkgbGVmdC03NSB0b3AtMjU7XG4gICAgfVxuXG4gICAgLmNoYXItcG9zLW5vbmUge1xuICAgICAgICBAYXBwbHkgcmVsYXRpdmUgdGV4dC1jZW50ZXI7XG4gICAgfVxuICAgICovXG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5sZ1xcOmNoYXItZ3JheS05MDAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC0tdGV4dC1vcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAjMWEyMDJjO1xuICAgIGNvbG9yOiByZ2JhKDI2LCAzMiwgNDQsIHZhcigtLXRleHQtb3BhY2l0eSkpO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIC0tdHJhbnNmb3JtLXRyYW5zbGF0ZS14OiAwO1xuICAgIC0tdHJhbnNmb3JtLXRyYW5zbGF0ZS15OiAwO1xuICAgIC0tdHJhbnNmb3JtLXJvdGF0ZTogMDtcbiAgICAtLXRyYW5zZm9ybS1za2V3LXg6IDA7XG4gICAgLS10cmFuc2Zvcm0tc2tldy15OiAwO1xuICAgIC0tdHJhbnNmb3JtLXNjYWxlLXg6IDE7XG4gICAgLS10cmFuc2Zvcm0tc2NhbGUteTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tdHJhbnNmb3JtLXRyYW5zbGF0ZS14KSkgdHJhbnNsYXRlWSh2YXIoLS10cmFuc2Zvcm0tdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHJhbnNmb3JtLXJvdGF0ZSkpIHNrZXdYKHZhcigtLXRyYW5zZm9ybS1za2V3LXgpKSBza2V3WSh2YXIoLS10cmFuc2Zvcm0tc2tldy15KSkgc2NhbGVYKHZhcigtLXRyYW5zZm9ybS1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXRyYW5zZm9ybS1zY2FsZS15KSk7XG4gICAgLS10cmFuc2Zvcm0tc2NhbGUteDogMS41O1xuICAgIC0tdHJhbnNmb3JtLXNjYWxlLXk6IDEuNTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cblxuICAubGdcXDpidXR0b24tZ3JheS05MDAge1xuICAgIC0tYmctb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyMDJjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDMyLCA0NCwgdmFyKC0tYmctb3BhY2l0eSkpO1xuICAgIC0tdGV4dC1vcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXRleHQtb3BhY2l0eSkpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICAgIHdpZHRoOiA4cmVtO1xuICB9XG5cbiAgLypcbiAgICAuY2hhci1wb3MtbGVmdCxcbiAgICAuY2hhci1wb3MtcmlnaHQge1xuICAgICAgICBAYXBwbHkgYWJzb2x1dGUgdGV4dC1jZW50ZXIgdHJhbnNmb3JtIHotMjAgLXRyYW5zbGF0ZS14LTEvMjtcbiAgICB9XG5cbiAgICAuY2hhci1wb3MtbGVmdCB7XG4gICAgICAgIEBhcHBseSBsZWZ0LTI1IHRvcC0yNTtcbiAgICB9XG4gICAgLmNoYXItcG9zLXJpZ2h0IHtcbiAgICAgICAgQGFwcGx5IGxlZnQtNzUgdG9wLTI1O1xuICAgIH1cblxuICAgIC5jaGFyLXBvcy1ub25lIHtcbiAgICAgICAgQGFwcGx5IHJlbGF0aXZlIHRleHQtY2VudGVyO1xuICAgIH1cbiAgICAqL1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAueGxcXDpjaGFyLWdyYXktOTAwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAtLXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogIzFhMjAyYztcbiAgICBjb2xvcjogcmdiYSgyNiwgMzIsIDQ0LCB2YXIoLS10ZXh0LW9wYWNpdHkpKTtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAtLXRyYW5zZm9ybS10cmFuc2xhdGUteDogMDtcbiAgICAtLXRyYW5zZm9ybS10cmFuc2xhdGUteTogMDtcbiAgICAtLXRyYW5zZm9ybS1yb3RhdGU6IDA7XG4gICAgLS10cmFuc2Zvcm0tc2tldy14OiAwO1xuICAgIC0tdHJhbnNmb3JtLXNrZXcteTogMDtcbiAgICAtLXRyYW5zZm9ybS1zY2FsZS14OiAxO1xuICAgIC0tdHJhbnNmb3JtLXNjYWxlLXk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXRyYW5zZm9ybS10cmFuc2xhdGUteCkpIHRyYW5zbGF0ZVkodmFyKC0tdHJhbnNmb3JtLXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXRyYW5zZm9ybS1yb3RhdGUpKSBza2V3WCh2YXIoLS10cmFuc2Zvcm0tc2tldy14KSkgc2tld1kodmFyKC0tdHJhbnNmb3JtLXNrZXcteSkpIHNjYWxlWCh2YXIoLS10cmFuc2Zvcm0tc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10cmFuc2Zvcm0tc2NhbGUteSkpO1xuICAgIC0tdHJhbnNmb3JtLXNjYWxlLXg6IDEuNTtcbiAgICAtLXRyYW5zZm9ybS1zY2FsZS15OiAxLjU7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLnhsXFw6YnV0dG9uLWdyYXktOTAwIHtcbiAgICAtLWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjAyYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAzMiwgNDQsIHZhcigtLWJnLW9wYWNpdHkpKTtcbiAgICAtLXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10ZXh0LW9wYWNpdHkpKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgICB3aWR0aDogOHJlbTtcbiAgfVxuXG4gIC8qXG4gICAgLmNoYXItcG9zLWxlZnQsXG4gICAgLmNoYXItcG9zLXJpZ2h0IHtcbiAgICAgICAgQGFwcGx5IGFic29sdXRlIHRleHQtY2VudGVyIHRyYW5zZm9ybSB6LTIwIC10cmFuc2xhdGUteC0xLzI7XG4gICAgfVxuXG4gICAgLmNoYXItcG9zLWxlZnQge1xuICAgICAgICBAYXBwbHkgbGVmdC0yNSB0b3AtMjU7XG4gICAgfVxuICAgIC5jaGFyLXBvcy1yaWdodCB7XG4gICAgICAgIEBhcHBseSBsZWZ0LTc1IHRvcC0yNTtcbiAgICB9XG5cbiAgICAuY2hhci1wb3Mtbm9uZSB7XG4gICAgICAgIEBhcHBseSByZWxhdGl2ZSB0ZXh0LWNlbnRlcjtcbiAgICB9XG4gICAgKi9cbn0iXX0= */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [{
          type: _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"]
        }];
      }, {
        map_box: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['map_box', {
            "static": true,
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      });
    })();

    /***/
  },

  /***/"./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./about/about.component */"./src/app/about/about.component.ts");
    /* harmony import */
    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./home/home.component */"./src/app/home/home.component.ts");
    /* harmony import */
    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./menu/menu.component */"./src/app/menu/menu.component.ts");
    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'menu',
      component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }, {
      path: '**',
      redirectTo: 'home'
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });
    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            scrollPositionRestoration: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./components/navigation/navigation.component */"./src/app/components/navigation/navigation.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./components/footer/footer.component */"./src/app/components/footer/footer.component.ts");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'KebabGrill';
    });
    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "mx-auto", "overflow-hidden"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "site-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "site-footer");
        }
      },
      directives: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();

    /***/
  },

  /***/"./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/platform-browser */"../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./components/footer/footer.component */"./src/app/components/footer/footer.component.ts");
    /* harmony import */
    var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./components/navigation/navigation.component */"./src/app/components/navigation/navigation.component.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./home/home.component */"./src/app/home/home.component.ts");
    /* harmony import */
    var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./about/about.component */"./src/app/about/about.component.ts");
    /* harmony import */
    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./menu/menu.component */"./src/app/menu/menu.component.ts");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });
    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();

    /***/
  },

  /***/"./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/
  /*! exports provided: FooterComponent */
  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }
      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return FooterComponent;
    }();
    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["site-footer"]],
      decls: 44,
      vars: 0,
      consts: [[1, "relative", "bg-yellow-500"], [1, "relative", "flex", "flex-col", "px-8", "py-16", "border-t-2", "md:p-16", "lg:items-center", "lg:flex-row", "lg:container", "lg:mx-auto"], [1, "absolute", "inset-0", "bg-yellow-500", "bg-clip-1", "lg:transform", "lg:scale-x-75"], [1, "relative", "my-8", "lg:w-1/2"], [1, "w-full", "relative", "mt-1", "rounded-md", "shadow-sm", "lg:w-3/4"], [1, "pointer-events-none", "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3"], [1, "font-bold", "text-gray-700", "text-lg"], ["type", "text", "formControlName", "price", "placeholder", "Type your email", 1, "input-yellow-600", "focus:area-yellow"], [1, "relative", "text-gray-600", "text-sm", "border-t-2", "border-b-2", "lg:w-1/4", "lg:border-t-0", "lg:border-r-2", "lg:border-b-0", "lg:border-l-2"], [1, "mx-8", "my-6"], ["routerLink", "/", 1, "font-semibold", "hover:underline"], ["routerLink", "/menu", 1, "font-semibold", "hover:underline"], ["routerLink", "/about", 1, "font-semibold", "hover:underline"], [1, "relative", "flex", "flex-row", "my-8", "lg:flex-col", "lg:w-1/4"], [1, "mx-8", "my-4"], [1, "text-gray-600"], ["fill", "currentColor", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "w-4", "h-4"], ["fill-rule", "evenodd", "d", "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", "clip-rule", "evenodd"], [1, "sr-only"], ["d", "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"], ["fill-rule", "evenodd", "d", "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", "clip-rule", "evenodd"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "@");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HOME");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "MENU");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ABOUT");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Facebook page");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Twitter page");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Instagram page");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "svg", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "GitHub account");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'site-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();

    /***/
  },

  /***/"./src/app/components/navigation/navigation.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.ts ***!
    \***************************************************************/
  /*! exports provided: NavigationComponent */
  /***/
  function srcAppComponentsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var projects_KebabGrill_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! projects/KebabGrill/src/environments/environment */"./src/environments/environment.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */"../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    function NavigationComponent_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Open menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }
    function NavigationComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Close menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }
    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent(router) {
        _classCallCheck(this, NavigationComponent);
        this.router = router;
        // @HostListener('document:scroll', [ '$event' ])
        //     public onDocumentScroll(e: Event) {
        //         console.log(e);
        //     }
        this.env = projects_KebabGrill_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
      }
      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              _this.mobileMenuDropdown = false;
            }
          });
        }
      }, {
        key: "toggleMobileMenuVisibility",
        value: function toggleMobileMenuVisibility(event) {
          this.mobileMenuDropdown = !this.mobileMenuDropdown;
        }
      }]);
      return NavigationComponent;
    }();
    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };
    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["site-navigation"]],
      decls: 30,
      vars: 8,
      consts: [[1, "bg-yellow-500", "p-6", "lg:relative", "lg:overflow-hidden"], [1, "flex", "items-center", "justify-between", "flex-wrap", "lg:relative", "z-0"], ["routerLink", "/", 1, "flex", "items-center", "flex-shrink-0", "text-gray-800", "mr-6", "z-30"], [1, "font-semibold", "text-2xl", "text-script", "tracking-tight", "lg:block"], [1, "block", "lg:hidden", "z-30"], [1, "flex", "items-center", "px-3", "py-2", "border", "rounded", "text-white", "border-white", "hover:bg-yellow-600", 3, "click"], [4, "ngIf"], [1, "w-full", "h-full", "flex-grow", "fixed", "top-0", "left-0", "bg-yellow-500", "px-8", "py-16", "z-20", "lg:px-0", "lg:py-0", "lg:relative", "lg:flex", "lg:items-center", "lg:w-auto"], [1, "text-base", "mt-16", "lg:flex", "lg:flex-grow", "lg:justify-center", "lg:mx-16", "lg:mt-0"], ["routerLink", "/home", "routerLinkActive", "bg-yellow-400", 1, "block", "px-4", "py-2", "rounded-lg", "tracking-widest", "text-gray-800", "font-semibold", "lg:inline-block", "lg:mx-4"], ["routerLink", "/menu", "routerLinkActive", "bg-yellow-400", 1, "block", "px-4", "py-2", "rounded-lg", "tracking-widest", "text-gray-800", "font-semibold", "lg:inline-block", "lg:mx-4"], ["routerLink", "/about", "routerLinkActive", "bg-yellow-400", 1, "block", "px-4", "py-2", "rounded-lg", "tracking-widest", "text-gray-800", "font-semibold", "lg:inline-block", "lg:mx-4"], ["method", "post", "action", "https://www.paypal.com/cgi-bin/webscr", 1, "opacity-0", "mt-8", "lg:m-0"], [1, "inline-block", "text-sm", "px-4", "py-2", "leading-none", "border", "rounded", "text-white", "border-white", "hover:border-transparent", "hover:text-brand-blue", "hover:bg-white", "mt-4", "lg:mt-0"], ["type", "hidden", "name", "cmd", "value", "_donations"], ["type", "hidden", "name", "business", "value", "webmaster@becafoundation.org"], ["type", "hidden", "name", "amount", 3, "value"], ["type", "hidden", "name", "lc", "value", "US"], ["type", "hidden", "name", "item_name", "value", "BECA Foundation"], ["type", "hidden", "name", "currency_code", "value", "USD"], ["type", "hidden", "name", "bn", "value", "PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest"], [1, "absolute", "top-0", "left-0", "w-full", "h-full", "bg-yellow-500", "hidden", "items-center", "justify-center", "z-10", "lg:flex", "lg:transform", "lg:transition-all", "lg:duration-500", "lg:-translate-y-full"], [1, "text-gray-700", "text-4xl", "text-script", "tracking-widest"], [1, "sr-only"], ["viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg", 1, "fill-current", "h-3", "w-3"], ["d", "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", "aria-hidden", "true", 1, "h-3", "w-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_6_listener($event) {
            return ctx.toggleMobileMenuVisibility($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavigationComponent_span_7_Template, 7, 0, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavigationComponent_span_8_Template, 5, 0, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Menu ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " About ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Donate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Kebab Grill");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.env.site.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobileMenuDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileMenuDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.mobileMenuDropdown)("block", ctx.mobileMenuDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'site-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();

    /***/
  },

  /***/"./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/
  /*! exports provided: HomeComponent */
  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }
      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return HomeComponent;
    }();
    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 116,
      vars: 0,
      consts: [[1, "bg-yellow-500", "overflow-hidden"], [1, "relative", "max-w-screen-xl", "mx-auto"], [1, "relative", "mx-6", "bg-white", "bg-opacity-25", "rounded-lg", "lg:mx-16"], [1, "relative"], [1, "aspect-square", "mx-auto", "w-full"], ["viewBox", "0 0 96 96", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "inset-0", "text-yellow-500"], ["id", "sw-gradient", "x1", "0", "x2", "1", "y1", "1", "y2", "0"], ["id", "stop1", "stop-color", "rgba(248, 117, 55, 1)", "offset", "0%"], ["id", "stop2", "stop-color", "rgba(251, 168, 31, 1)", "offset", "100%"], ["fill", "currentColor", "d", "M20.9,-34.5C28,-32,35.5,-28.4,40.3,-22.5C45,-16.5,47.1,-8.3,46.4,-0.4C45.7,7.5,42.2,14.9,38,21.8C33.8,28.7,28.8,35,22.4,38.7C15.9,42.3,8,43.2,0.7,41.9C-6.5,40.6,-13,37.2,-18.7,33.1C-24.3,29,-29.2,24.4,-34.2,18.7C-39.2,13.1,-44.3,6.6,-44.1,0.1C-44,-6.4,-38.6,-12.8,-33.7,-18.6C-28.9,-24.5,-24.6,-29.9,-19.1,-33.3C-13.6,-36.7,-6.8,-38.1,0,-38.1C6.9,-38.2,13.7,-36.9,20.9,-34.5Z", "width", "100%", "height", "100%", "transform", "translate(45 45)", "stroke-width", "0", 2, "transition", "all 0.3s ease 0s"], ["src", "assets/images/ralph-ravi-kayden-J5eOPeFqcuY-unsplash-transformed.png", "alt", "", 1, "absolute", "inset-0"], [1, "absolute", "top-100", "left-50", "transform", "-translate-x-1/2", "-translate-y-1/2", "flex", "flex-row", "lg:flex-col", "lg:top-50"], [1, "flex", "justify-center", "font-bold", "text-gray-800", "text-4xl", "lg:text-gray-300", "lg:text-10xl"], [1, "mx-0", "lg:mx-8"], [1, "flex", "flex-col", "rounded-3xl", "my-32", "lg:container", "lg:mx-auto"], [1, "relative", "flex", "flex-col", "md:p-8"], [1, "relative", "flex", "flex-col", "items-center", "lg:mx-4", "lg:flex-row"], [1, "relative", "w-full", "lg:w-1/2"], ["src", "assets/images/calum-lewis-vA1L1jRTM70-unsplash.jpg", "alt", "", 1, "relative", "bg-clip-1"], [1, "relative", "w-full", "rounded-3xl", "text-left", "px-4", "py-8", "md:w-3/4", "lg:w-1/2", "lg:p-16"], [1, "text-lg", "text-gray-800", "font-bold", "uppercase", "lg:text-xl"], [1, "text-xs", "text-gray-700", "font-normal", "lg:text-sm"], [1, "block", "w-10", "h-1", "my-6", "mr-auto", "bg-gray-700"], [1, "text-sm", "text-gray-700", "mt-4", "md:text-base"], [1, "relative", "flex", "flex-col", "items-center", "my-16", "lg:my-32", "lg:mx-4", "lg:flex-row-reverse"], ["src", "assets/images/chinh-le-duc-vuDXJ60mJOA-unsplash.jpg", "alt", "", 1, "relative", "bg-clip-2"], [1, "relative", "w-full", "rounded-3xl", "text-right", "px-4", "py-8", "md:w-3/4", "lg:w-1/2", "lg:p-16"], [1, "block", "w-10", "h-1", "my-6", "ml-auto", "bg-gray-700"], ["src", "assets/images/jonathan-borba-uB7q7aipU2o-unsplash.jpg", "alt", "", 1, "relative", "bg-clip-1"], [1, "relative", "text-center", "-mb-32", "md:-mb-64", "lg:mb-0"], [1, "text-3xl", "text-gray-700", "font-semibold", "-mb-", "transform", "scale-x-125", "scale-y-150", "text-script", "lg:text-5xl", "-lg:mb-2"], [1, "text-3xl", "text-yellow-600", "font-bold", "-mt-4", "transform", "scale-150", "tracking-widest", "uppercase", "lg:text-6xl", "-lg:mt-2"], [1, "relative", "flex", "flex-col", "lg:flex-row-reverse", "my-16"], ["src", "assets/images/rodion-kutsaiev-EPwuZxdketc-unsplash-transformed.png", "alt", "", 1, "relative", "w-full", "ml-8", "lg:ml-2", "lg:transform", "lg:scale-125", "xl:ml-64", "xl:scale-150"], [1, "space-y-16", "my-16"], [1, "relative", "lg:flex", "lg:items-center"], [1, "relative", "md:w-2/3", "md:ml-8", "md:mr-auto"], [1, "mb-2", "text-gray-900"], [1, "inline", "text-3xl", "align-middle", "text-gray-800", "font-bold", "md:tracking-widest", "md:text-4xl"], [1, "inline", "text-xs", "align-middle", "text-gray-700"], [1, "text-xs", "text-gray-700", "lg:text-base"], [1, "relative", "md:w-2/3", "ml-auto"], [1, "inline", "text-xs", "align-middle", "text-gray-500"], [1, "realtive"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "defs");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "linearGradient", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "stop", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "stop", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "F");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "o");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "o");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "d");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "l");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "o");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "s");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "o");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "h");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "y");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ingredients");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "We select the best ingredients");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " We believe that a good meal starts with selecting the best ingredients and most fresh vegetables. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Ingredients");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "We select the best ingredients");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " We take pride in bringing to you our dishes, and look forward to exeperince those flavors that set us aside from other. That's why we believe in cooking from scratch. We believe that's the only way to ensure quality and a dish that we can feel proud of. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Ingredients");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "We select the best ingredients");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " We take pride in bringing to you our dishes, and look forward to exeperince those flavors that set us aside from other. That's why we believe in cooking from scratch. We believe that's the only way to ensure quality and a dish that we can feel proud of. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Let's do your next");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h1", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Catering");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h3", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Impression");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " / first impressions last forever");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " One of the biggest advantages of hiring a catering service for corporate events is that you build a welcoming environment for your clients. The impression you leave in clients will reflect on your business pursues. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Variety");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Plan your your event in a way that make every go \"wow!\". Make every one of your guests feel part of it by having options. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h3", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Professionalism");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Not only the food choice is important, but also equally important is the food presentation. Having a catering ensures your guests perceive a sense of professionalism in your business and class. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Hassle-Free");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " In house cooking itself can be stressful. From planning a menu, purchasing the ingredients and cooking process to the clean up and everything else related. Catering makes these nuisances more organized and convenient. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();

    /***/
  },

  /***/"./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/
  /*! exports provided: MenuComponent */
  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      }
      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return MenuComponent;
    }();
    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)();
    };
    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 266,
      vars: 0,
      consts: [[1, "relative", "max-w-screen-xl", "mx-auto", "overflow-hidden", "p-8", "md:p-0"], [1, "relative", "text-center", "my-16", "lg:my-32"], [1, "relative"], [1, "text-4xl", "text-yellow-500", "font-bold", "lg:text-6xl", "lg:transform", "lg:scale-125", "xl:scale-150"], ["src", "assets/images/pinar-kucuk-N2N7svpSFxk-unsplash.jpg", "alt", "", 1, "bg-clip-2", "mx-auto", "md:w-1/2"], [1, "relative", "pt-16", "pb-12", "mx-auto", "lg:max-w-lg"], [1, "text-xs", "text-gray-600", "md:text-base"], [1, "relative", "flex", "flex-col", "lg:flex-row", "lg:flex-wrap"], [1, "relative", "px-2", "py-12", "md:p-12", "mx-auto", "lg:max-w-3xl"], [1, "text-xl", "text-gray-800", "font-bold"], [1, "block", "w-8", "h-1", "mx-auto", "bg-red-500"], [1, "text-sm", "text-gray-700", "my-8", "md:text-base"], ["src", "assets/images/creative-headline-F10nTHkCiW8-unsplash.jpg", "alt", "", 1, "bg-clip-2", "mx-auto", "md:w-1/2"], [1, "text-sm", "text-gray-600", "md:text-base"], [1, "relative", "flex", "flex-col", "md:flex-row", "md:flex-wrap"], [1, "relative", "px-2", "py-12", "border-b-2", "md:border-b-0", "md:p-12", "md:w-1/2", "xl:w-1/3"], [1, "relative", "mx-auto", "lg:max-w-sm"], [1, "text-base", "text-green-700", "font-semibold", "m-4"], ["src", "assets/images/tai-s-captures-JiRSy0GfqPA-unsplash.jpg", "alt", "", 1, "bg-clip-2", "mx-auto", "md:w-1/2"], [1, "flex", "flex-row", "justify-center", "space-x-4"], [1, "w-10", "h-10", "rounded-md", "border"], ["src", "assets/images/taylor-kiser-EvoIiaIVRzU-unsplash.jpg", "alt", "", 1, "bg-clip-2", "mx-auto", "md:w-1/2"], [1, "text-6xl", "text-yellow-500", "font-bold", "lg:transform", "lg:scale-125", "xl:scale-150"], ["src", "assets/images/lottie-griffiths-jdd83kAUg3w-unsplash.jpg", "alt", "", 1, "bg-clip-2", "mx-auto", "md:w-1/2"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Greek Sandwich Combos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " According to archeological historians, the pita likely originated within communities located west of the Mediterranean Sea. Farmers and desert dwellers alike appear to have enjoyed some form of pita bread. It was known to be carried by traders who traveled across the Arabian and Sahara desert. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Greek Sandwich");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Mixed greens, tomatoes, cucumbers, red onions, crumbled feta cheese, and tsatziki on your selection of traitional pita bread, or flour tortilla wrap, or greek bun. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "All Day Specials");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " In the 20th century, the taco came to the United States first, in part because many of the first Mexican immigrants hailed from central Mexico, where corn tortillas were used. But in the 1950s, the burrito began making its way northward, too. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Hummus & Falafel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Garbanzo bean spread, garlic seasoned accompanied with three chickpeas falafels garnish with homemade tahini. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "$8.25");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Avgolemono Soup & Salad");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Classic egg, lemon and rice soup paired with traditional greek salad with mixed greens, tomatoes, cucumbers, red onions, kalamata olives, crumbled feta cheese with red vinegar and olive oil dressing. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "$8.25");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Chicken Kabob Plate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " One large grilled skewer of lemon marinated chicken breast, grilled with green bell peppers, red onions, salt and pepper, topped with homemade lemon citrus sauce. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "$8.25");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Steak Kabob Plate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " One large skewer of grilled top sirloin, grilled with green bell peppers, red onions, salt and pepper topped with homemade lemon citrus sauce. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "$8.25");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Spanakopita & Dolmas");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Golden-crisp egg roll shell stuffed with a mixture of feta, cheese, ricotta cheese, finely chopped onions, and fresh garlic accompanied by two homemade seasoned stuffed rice tomatoes and onions topped with our homemade lemon citrus sauce. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "$8.25");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "1\u20444 Lemon Chicken");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Dark meat, oven baked chicken marinated in salt, pepper, Greek oregano topped with our homemade lemon citrus sauce ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "$8.25");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Soft Gyro Green Tacos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Two soft corn tortilla gyros tacos with tomatoes, cucumbers, red oninons, red cabbage and spicy tzatsiki sauce. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "$8.25");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Zesty Pita");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Lightly fried pita bread spread with spicy feta cheese stuffed with your selection of gyros, chicken or falafel. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "$8.25");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Lentil Soup & Salad");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Classic lentil bean, carrot and onion soup paired with traditional greek salad with mixed greens, tomatoes, cucumbers, red onions, kalamata olives, crumbled feta cheese with red vinegar and olive oil dressing. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "$8.25");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "section", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Gyro Plates");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " This type of sandwich has been known, and sold on the streets, by the people of Greece, the Middle East, and Turkey for hundreds of years. Greek historians believe that the dish originated during Alexander The Great's time, when his soldiers used their long knives to skewer meat and kept turning the meat over fires. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Vegetarian Plate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " A selection of homemade chickpeas bean falafel, garbanzo garlic hummus, golden-crisp egg roll spanakopita and rice stuffed dolmas accompanied with a side of classic greek salad with our red vinegar and olive oil dressing. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "ul", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "li", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "li", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "li", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "$10.50");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Chicken Kebab Plate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Two large grilled skewers of lemon marinated chicken breast in our homemade lemon citrus sauce accompanied by your selection of two side dishes. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "$10.50");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Steak Kebab Plate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Two large grilled skewers of marinated top sirloin steak topped with homemade lemon citrus sauce, accompanied by your selection of two side dishes. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "$10.50");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Chicken Steak Plate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Two large grilled skewers, one of lemon marinated chicken breast and one skewer of grilled marinated top sirloin, topped with our homemade lemon citrus sauce, accompanied by your selection of two side dishes. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "$10.50");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Gyro Plate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " 5oz of braised gyros meat strips with your selection of two side dishes. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "$10.50");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Gyro Chicken Plate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " 3oz of braised gyros meat strips and one large grilled skewer of lemon marinated chicken breast topped with lemon citrus sauce and your selection of two side dishes. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "$10.50");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Gyro Shrimp Plate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " 3oz of braised gyros meat strips and lightly breaded shrimp topped with homemade lemon citrus sauce and your selection of two side dishes. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "$10.50");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Gyro Steak Plate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " 3oz of braised gyros meat strips and one large skewer of grilled marinated top sirloin topped with lemon citrus sauce and your selection of two side dishes. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "$10.50");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Calamari Plate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Marinated strips of calamari steak cooked to your choice, saute\xE9 or lightly breaded, topped with lemon citrus sauce accompanied by your selection of two side dishes. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "$11.99");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Grilled Salmon Plate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " Grilled crispy salt and pepper seasoned salmon topped with our delicious homemade lemon citrus sauce and your selection of two side dishes. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "$11.99");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Shrimp Plate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " Ten pieces of shrimp cooked to your choice saute\xE9 or lightly breaded topped with homemade lemon citrus sauce and your selection of two side dishes. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "$11.99");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "section", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Salads");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " The Greek salad\u2019s origin is debatable, but one thing we can be sure of is that it\u2019s not a part of the country\u2019s long-established traditional cuisine. We know this because, incredibly, the tomato did not become popular in Greece until the end of the 19th, beginning of the 20th century. This is hard to believe, considering how fast it\u2019s made itself a home here in Greece. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Classic Greek Salad");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " Classic greek salad with mixed greens, tomatoes, cucumbers, red onions, kalamata olives, crumbled feta cheese, red vinegar and olive oil dressing. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "section", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h1", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Desserts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " In the Greek variation of this dessert, they make 33 layers of phyllo which refers to the 33 precious years of Jesus Christ. At any Turkish household, you may spot making them this dish with 33 layers in it on any holy occasion. There is also preparation for this dish with 40 layers in Greece. The taste of the dessert becomes, even more, better with extra layers. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Baklava");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, " Layered pastry dessert made of filo pastry, filled with chopped nuts, and sweetened with syrup or honey. It was one of the most popular sweet pastries of Ottoman cuisine. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();

    /***/
  },

  /***/"./src/app/services/location.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/location.service.ts ***!
    \**********************************************/
  /*! exports provided: LocationService */
  /***/
  function srcAppServicesLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LocationService", function () {
      return LocationService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! leaflet */"../../node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */
    var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
    // import { HttpClient, HttpEvent } from '@angular/common/http';

    // import { Observable } from 'rxjs';
    var LocationService = /*#__PURE__*/function () {
      function LocationService() {
        _classCallCheck(this, LocationService);
        this.nominatim = 'https://nominatim.openstreetmap.org/search?q=:q&format=json&polygon=1&addressdetails=1';
      }
      /*
      search(address: string): Observable<HttpEvent<KeyValueSet[]>> {
          const url = this.nominatim.replace(':q', encodeURI(address));
          
          return this.http.get<{[key: string]: any}[]>(url, { observe: 'events' });
      }
      */
      /**
       *
       * @param element
       * @param coords
       */
      _createClass(LocationService, [{
        key: "config",
        value: function config(element, coords) {
          this.map = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"](element, {
            zoom: 16,
            center: coords,
            scrollWheelZoom: false
          });
          this.tiles = this.getMapTiles();
          this.tiles.addTo(this.map);
          this.marker = this.getMapMarker(coords);
          this.marker.addTo(this.map);
          this.circle = this.getMapCircle(coords);
          this.circle.addTo(this.map);
        }
        /**
         *
         * @returns
         */
      }, {
        key: "getMapTiles",
        value: function getMapTiles() {
          // 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          // https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png
          return leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
            attribution: "&copy; <a href=\"https://stadiamaps.com/\">Stadia Maps</a>, &copy; \n            <a href=\"https://openmaptiles.org/\">OpenMapTiles</a> &copy; \n            <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors",
            maxZoom: 16,
            minZoom: 3
          });
        }
        /**
         *
         * @param coords
         * @returns
         */
      }, {
        key: "getMapMarker",
        value: function getMapMarker(coords) {
          var icon = new leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
            iconUrl: 'marker-icon.png',
            iconSize: [26, 36],
            iconAnchor: [2, 2],
            popupAnchor: [0, -2]
          });
          return leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"](coords, {
            icon: icon
          });
        }
        /**
         *
         * @param coords
         * @returns
         */
      }, {
        key: "getMapCircle",
        value: function getMapCircle(coords) {
          return leaflet__WEBPACK_IMPORTED_MODULE_1__["circle"](coords, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.25,
            radius: 200
          });
        }
        /**
         *
         * @param lat
         * @param lon
         */
      }, {
        key: "setLocationView",
        value: function setLocationView(lat, lon) {
          var coords = leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"](lat, lon);
          this.map.panTo(coords);
          this.circle.setLatLng(coords);
          this.marker.setLatLng(coords);
        }
      }]);
      return LocationService;
    }();
    LocationService.ɵfac = function LocationService_Factory(t) {
      return new (t || LocationService)();
    };
    LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocationService,
      factory: LocationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    /***/
  },

  /***/"./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.
    var environment = {
      production: false,
      site: {
        name: 'Kebab Grill'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/platform-browser */"../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! D:\AngularWorkspace\projects\KebabGrill\src\main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map