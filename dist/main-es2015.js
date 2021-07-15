(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_home_404_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home/404/404.component */ "./src/app/modules/home/404/404.component.ts");





const routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-authentication-authentication-module */ "modules-authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./modules/authentication/authentication.module */ "./src/app/modules/authentication/authentication.module.ts")).then(m => m.AuthenticationModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts")).then(m => m.HomeModule)
    },
    { path: '**', component: _modules_home_404_404_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/alert/alert.component */ "./src/app/shared/alert/alert.component.ts");




class AppComponent {
    constructor() {
        this.title = 'BTCBot';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "alert-wrapper", "alert-z-container"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _shared_http_resources_api_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/http-resources/api.interceptor */ "./src/app/shared/http-resources/api.interceptor.ts");
/* harmony import */ var _shared_http_resources_error_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/http-resources/error.interceptor */ "./src/app/shared/http-resources/error.interceptor.ts");
/* harmony import */ var _shared_http_resources_token_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/http-resources/token.interceptor */ "./src/app/shared/http-resources/token.interceptor.ts");
/* harmony import */ var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/alert/alert.service */ "./src/app/shared/alert/alert.service.ts");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _core_services_action_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/services/action.service */ "./src/app/core/services/action.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "./node_modules/@angular-slider/ngx-slider/__ivy_ngcc__/fesm2015/angular-slider-ngx-slider.js");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_http_resources_api_interceptor__WEBPACK_IMPORTED_MODULE_6__["APIInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_http_resources_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_http_resources_token_interceptor__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptor"], multi: true },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"] },
        _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
        _core_services_action_service__WEBPACK_IMPORTED_MODULE_11__["ActionService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
            _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_14__["NgxSliderModule"]
        ],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
        _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_14__["NgxSliderModule"]], exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                    _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_14__["NgxSliderModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_http_resources_api_interceptor__WEBPACK_IMPORTED_MODULE_6__["APIInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_http_resources_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_http_resources_token_interceptor__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptor"], multi: true },
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"] },
                    _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                    _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
                    _core_services_action_service__WEBPACK_IMPORTED_MODULE_11__["ActionService"],
                ],
                exports: [
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/services/action.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/action.service.ts ***!
  \*************************************************/
/*! exports provided: ActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionService", function() { return ActionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/alert/alert.service */ "./src/app/shared/alert/alert.service.ts");





class ActionService {
    constructor(http, alertService) {
        this.http = http;
        this.alertService = alertService;
    }
    getAllPairs() {
        return this.http.get('api/btcprice/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => {
            return resp;
        }));
    }
    getSpecificPairs(pair) {
        return this.http.get('api/btcprice/' + pair).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => {
            return resp;
        }));
    }
    setStrategy(payload) {
        return this.http.post('api/strategy/' + payload.name, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return data;
        }));
    }
    setStrategies(payload) {
        return this.http.post('api/strategies', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return data;
        }));
    }
    getActiveStrategy() {
        return this.http.get('api/strategy/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return data;
        }));
    }
    stopStrategy(orderId, pair) {
        return this.http.get('api/binance/cancelorder/single/' + orderId + '/' + pair).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return data;
        }));
    }
    deleteFromDb(name) {
        return this.http.delete('api/strategy/' + name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return data;
        }));
    }
    updateStrategy(name, payload) {
        return this.http.post('api/strategy/' + name, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return data;
        }));
    }
    getBtcBalance() {
        return this.http.get('api/binance/balance').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            this.balanceBtc = data.btc_balance;
            return this.balanceBtc;
        }));
    }
    getCurrentStatus(orderId, pair) {
        return this.http.get('api/binance/orderstatus/' + orderId + '/' + pair).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return JSON.parse(data.success);
        }));
    }
    updatePassword(name, pw) {
        const payload = {
            username: name,
            password: pw,
            role: 'admin'
        };
        return this.http.post('api/users/' + name, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            this.alertService.addMessage('success', 'Password cambiata correttamente');
            return data;
        }));
    }
    checkStrategy(name) {
        return this.http.get('api/strategy/' + name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return data;
        }));
    }
    set balanceBtc(value) {
        this._btcBalance = value;
    }
    get balanceBtc() {
        return this._btcBalance;
    }
}
ActionService.ɵfac = function ActionService_Factory(t) { return new (t || ActionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
ActionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActionService, factory: ActionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class AuthService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this._user = '';
    }
    login(username, password) {
        return this.http.get('api/login/' + username + '/' + password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => {
            this.token = resp.token;
            this.user = resp.user;
            this.role = resp.role;
            this.isLogged = '1';
            return resp;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        this.token = '';
        this.user = '';
        this.role = '';
        this.isLogged = '0';
        localStorage.clear();
        this.router.navigate(['auth/login']).then();
    }
    get token() {
        return this._token || localStorage.getItem('token');
    }
    set token(value) {
        localStorage.setItem('token', value);
        this._token = value;
    }
    set user(value) {
        localStorage.setItem('user', value);
        this._user = value;
    }
    get user() {
        return localStorage.getItem('user');
    }
    set isLogged(value) {
        localStorage.setItem('isLogged', value);
        this._isLogged = value;
    }
    get isLogged() {
        return localStorage.getItem('isLogged');
    }
    set role(value) {
        localStorage.setItem('role', value);
        this._user = value;
    }
    get role() {
        return this._user || localStorage.getItem('role');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/404/404.component.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/home/404/404.component.ts ***!
  \***************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["dashboard-component"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS80MDQvNDA0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dashboard-component',
                templateUrl: './404.component.html',
                styleUrls: ['./404.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/dashboard/dashboard.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/home/dashboard/dashboard.component.ts ***!
  \***************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_services_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/action.service */ "./src/app/core/services/action.service.ts");
/* harmony import */ var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/alert/alert.service */ "./src/app/shared/alert/alert.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/modal/modal.component */ "./src/app/shared/modal/modal.component.ts");









const _c0 = ["detailsModal"];
const _c1 = ["stopModal"];
const _c2 = ["cancelModal"];
const _c3 = ["transactionsModal"];
function DashboardComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Inizializza le tue stategie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_5_tr_75_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 65);
} }
function DashboardComponent_div_5_tr_75_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 66);
} }
function DashboardComponent_div_5_tr_75_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 67);
} }
function DashboardComponent_div_5_tr_75_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 68);
} }
function DashboardComponent_div_5_tr_75_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_5_tr_75_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_5_tr_75_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function (a0, a1) { return { "btn-dark": a0, "btn-success": a1 }; };
function DashboardComponent_div_5_tr_75_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_tr_75_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const $index_r12 = ctx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.openDetails($index_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DashboardComponent_div_5_tr_75_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const str_r11 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.updateSelectStatus($event, str_r11.order_id, str_r11.name, str_r11.status); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_5_tr_75_img_5_Template, 1, 0, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_5_tr_75_img_6_Template, 1, 0, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_5_tr_75_img_7_Template, 1, 0, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_div_5_tr_75_img_8_Template, 1, 0, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_tr_75_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.openStopModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DashboardComponent_div_5_tr_75_span_32_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DashboardComponent_div_5_tr_75_span_33_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_tr_75_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.openCancelModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DashboardComponent_div_5_tr_75_span_39_Template, 2, 0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const str_r11 = ctx.$implicit;
    const $index_r12 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "select" + $index_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", str_r11.order_id)("name", str_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r11.current_status == "BUY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r11.current_status != "BUY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r11.status == "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r11.status != "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r11.coin_pair);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r11.transactions[0] && str_r11.transactions[0].cumulative_quantity ? str_r11.transactions[0].cumulative_quantity : str_r11.capital);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.calculateSelledCapital(str_r11.capital, str_r11.sell_price, str_r11.current_capital, str_r11.buy_price, str_r11.current_status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.calculateDelta(str_r11.transactions[0] && str_r11.transactions[0].cumulative_quantity ? str_r11.transactions[0].cumulative_quantity : str_r11.capital, ctx_r2.calculateSelledCapital(str_r11.capital, str_r11.sell_price, str_r11.current_capital, str_r11.buy_price, str_r11.current_status), false), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.calculateCurrentCapital(str_r11.current_capital, str_r11.coin_pair));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.calculateDelta(str_r11.transactions[0] && str_r11.transactions[0].cumulative_quantity ? str_r11.transactions[0].cumulative_quantity : str_r11.capital, ctx_r2.calculateCurrentCapital(str_r11.current_capital, str_r11.coin_pair), false), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r11.buy_price.toFixed(8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](str_r11.sell_price.toFixed(8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](29, 22, str_r11.date, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c4, str_r11.status == "ACTIVE", str_r11.status != "ACTIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r11.status == "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r11.status != "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.calculateTransactions(str_r11.status, str_r11.transactions, str_r11.transactions.length), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", str_r11.current_status === "SELL" && str_r11.status === "STOP");
} }
function DashboardComponent_div_5_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.checkMobileData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.checkMobileData.coin_pair);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.checkMobileData.capital);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.checkMobileData.capital);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.checkMobileData.buy_price.toFixed(8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.checkMobileData.sell_price.toFixed(8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.checkMobileData.date);
} }
function DashboardComponent_div_5_h2_89_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stai fermando");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_5_h2_89_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stai riavviando");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_5_h2_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_5_h2_89_span_1_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_5_h2_89_span_2_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.stopData.status === "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.stopData.status !== "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.stopData.name, "");
} }
function DashboardComponent_div_5_h2_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Stai cancellando la strategia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.stopData.name, "");
} }
function DashboardComponent_div_5_div_116_tr_22_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_div_116_tr_22_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const tr_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r35.getSpecificStatus(tr_r30.order_id, ctx_r35.stopData.coin_pair); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "STATO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_5_div_116_tr_22_button_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_5_div_116_tr_22_button_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_5_div_116_tr_22_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_div_116_tr_22_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r40.openStopModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_5_div_116_tr_22_button_12_span_1_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_5_div_116_tr_22_button_12_span_2_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c4, ctx_r33.stopData.status == "ACTIVE", ctx_r33.stopData.status != "ACTIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.stopData.status == "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.stopData.status != "ACTIVE");
} }
function DashboardComponent_div_5_div_116_tr_22_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_div_116_tr_22_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r42.openCancelModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_5_div_116_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_5_div_116_tr_22_button_10_Template, 2, 0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_div_5_div_116_tr_22_button_12_Template, 3, 6, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardComponent_div_5_div_116_tr_22_button_14_Template, 2, 0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tr_r30 = ctx.$implicit;
    const lst_r31 = ctx.last;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tr_r30.order_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tr_r30.type_transaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.parseDate(tr_r30.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tr_r30.quantity ? tr_r30.quantity : "fake");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lst_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lst_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lst_r31);
} }
function DashboardComponent_div_5_div_116_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_div_116_tr_23_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r44.deleteFromDb(ctx_r44.stopData.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CANCELLA STRATEGIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_5_div_116_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Strategia: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Id dell' Ordine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quantit\u00E0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Stato Ordine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pausa Ordine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ferma Ordine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DashboardComponent_div_5_div_116_tr_22_Template, 15, 7, "tr", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DashboardComponent_div_5_div_116_tr_23_Template, 8, 0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_div_116_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.closeTransaction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CHIUDI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.stopData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.stopData.transactions.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.stopData.transactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.stopData.transactions.length === 0);
} }
const _c5 = function (a0) { return { "opacity": a0 }; };
function DashboardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_5_div_1_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Stato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Scambio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "BTC iniziali");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "BTC alla vendita");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u25B2 % vendita");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "BTC correnti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "% correnti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Prezzo di compera");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Prezzo di vendita");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "PAUSA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "CHIUDI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cicli eseguiti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.selectAll = $event; })("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.manageAll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.searchState = $event; })("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.filterResult(ctx_r52.searchState, "state"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.searchState = $event; })("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.filterResult(ctx_r54.searchState, "state"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.searchState = $event; })("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.filterResult(ctx_r56.searchState, "state"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.searchName = $event; })("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.filterResult(ctx_r58.searchName, "name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.searchFilter = $event; })("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.filterResult(ctx_r60.searchFilter, "pairs"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_68_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.searchDate = $event; })("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.filterResult(ctx_r62.searchDate, "date"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_5_Template_input_ngModelChange_74_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.executedTransaction = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, DashboardComponent_div_5_tr_75_Template, 40, 28, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "modal", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Dettagli: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, DashboardComponent_div_5_div_81_Template, 15, 7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "modal", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "STOP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, DashboardComponent_div_5_h2_89_Template, 4, 3, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Conferma !!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_Template_button_click_92_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.closeStop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "CHIUDI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_Template_button_click_94_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.updateStrategy(ctx_r65.stopData.name, ctx_r65.stopData.status); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " CONTINUA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "modal", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "CANCEL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, DashboardComponent_div_5_h2_103_Template, 4, 1, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Conferma !!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_Template_button_click_106_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.closeCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "CHIUDI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_5_Template_button_click_108_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.cancelStrategy(ctx_r67.stopData.order_id, ctx_r67.stopData.coin_pair, ctx_r67.stopData.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " CONTINUA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "modal", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "TRANSAZIONI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, DashboardComponent_div_5_div_116_Template, 26, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.selectedCoin.length && ctx_r0.user === "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c5, ctx_r0.searchState == "all" ? "1" : "0.5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c5, ctx_r0.searchState == "buy" ? "1" : "0.5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c5, ctx_r0.searchState == "sell" ? "1" : "0.5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.calculateCapital("initial"))("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.calculateCapital("selled"))("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.calculateDelta(ctx_r0.btcInitialTotal, ctx_r0.btcSelledTotal, true) + "%")("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.calculateCapital("current"))("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.calculateDelta(ctx_r0.btcInitialTotal, ctx_r0.btcCurrentTotal, true) + "%")("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r0.searchDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.executedTransaction)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.activeStrategies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.checkMobileData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stopData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stopData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stopData);
} }
class DashboardComponent {
    constructor(actionService, alertService, cdFref, authService) {
        this.actionService = actionService;
        this.alertService = alertService;
        this.cdFref = cdFref;
        this.authService = authService;
        this.searchState = 'all';
        this.details = false;
        this.selectAll = false;
        this.executedTransaction = 0;
        this.selectedBox = [{ order: 0, nm: '0', st: '0' }];
        this.loaded = false;
        this.selecteFilter = [];
        this.selectedCoin = [];
        this.minSlide = 0;
        this.maxSlide = 3;
        this.currentPrices = [];
        this.loadActiveStrategy();
        // this.specificPair(this.selectedCoin);
        this.user = this.authService.user;
        // console.log(this.user)
        // this.selectedCoin = [
        //   {name: 'CKBBTC', price: 0.00000038, volume: 12},
        //   {name: 'ARPABTC', price: 0.00000088, volume: 18},
        //   {name: 'POABTC', price: 0.00000070, volume: 19},
        //   {name: 'COSBTC', price: 0.00000035, volume: 25},
        //   {name: 'XVGBTC', price: 0.00000070, volume: 50},
        // ];
    }
    ngOnInit() {
        this.reloadStuff = setInterval(() => {
            this.reload();
        }, 20000);
    }
    ngAfterContentChecked() {
        this.calculateTotalTransactions();
        this.cdFref.detectChanges();
    }
    ngOnDestroy() {
        clearInterval(this.reloadStuff);
    }
    reload() {
        this.resetFilter();
        this.loadActiveStrategy();
        this.executedTransaction = 0;
        this.calculateTotalTransactions();
    }
    manageAll(event) {
        if (event === true) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, (o) => {
                this.selectedBox.push({ order: o.orderId, nm: o.name, st: o.status });
            });
            $('.check-dash').prop('checked', true);
        }
        else {
            this.selectedBox = [{ order: 0, nm: '0', st: '0' }];
            $('.check-dash').prop('checked', false);
        }
    }
    manageSlider(action) {
        if (action) {
            if (this.maxSlide < this.selectedCoin.length - 1) {
                this.minSlide++;
                this.maxSlide++;
            }
        }
        else {
            if (this.minSlide > 0) {
                this.minSlide--;
                this.maxSlide--;
            }
        }
    }
    updateSelectStatus(event, orderId, name, status) {
        if (event.target.checked === true) {
            this.selectedBox.push({ order: orderId, nm: name, st: status });
        }
        else {
            this.selectedBox = lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.selectedBox, (n) => {
                return n.order !== orderId;
            });
        }
    }
    getFloor(value) {
        return Math.floor(value);
    }
    specificPair(pairs) {
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](pairs, (p) => {
            this.actionService.getSpecificPairs(p.coin_pair).subscribe((resp) => {
                resp.name = p.coin_pair;
                this.currentPrices.push(resp);
            }, (error) => {
            });
        });
    }
    calculateCurrentCapital(currentCapital, pair) {
        let selectedPairPrice;
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.currentPrices, (cp) => {
            if (cp.name === pair) {
                selectedPairPrice = cp.price;
            }
        });
        return (currentCapital * selectedPairPrice).toFixed(8);
    }
    calculateDelta(p1, p2, total) {
        const partial = (p2 - p1) / p1;
        return (partial * 100).toFixed(2);
    }
    calculateSelledCapital(capital, sellPrice, currentCapital, buyPrice, status) {
        const parseSellPrice = sellPrice.toFixed(8);
        const parseBuyPrice = buyPrice.toFixed(8);
        const ccS = parseFloat((currentCapital * parseSellPrice).toFixed(8));
        const ccB = parseFloat((currentCapital * parseBuyPrice).toFixed(8));
        switch (status) {
            case 'BUY':
                if (Math.floor(ccB) === 0) {
                    return capital;
                }
                return ccB;
                break;
            case 'SELL':
                return ccS;
                break;
            default:
                return capital;
        }
    }
    calculateTransactions(status, transactions, length) {
        const lastTransaction = transactions[length - 1];
        const type = lastTransaction && lastTransaction.type_transaction ? lastTransaction.type_transaction : 'BUY';
        let result = length % 2 === 0 ? length / 2 : this.getFloor(length / 2);
        if (length >= 3) {
            if (type === 'SELL' && status === 'ACTIVE') {
                result = result - 1;
            }
        }
        else {
            if (type === 'SELL' && status === 'ACTIVE') {
                result = result - 1;
            }
        }
        return result;
    }
    calculateTotalTransactions() {
        let partial = 0;
        lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, (str) => {
            const lastTransaction = str.transactions[str.transactions.length - 1];
            const type = lastTransaction && lastTransaction.type_transaction ? lastTransaction.type_transaction : 'BUY';
            let result = str.transactions.length % 2 === 0 ? str.transactions.length / 2 : this.getFloor(str.transactions.length / 2);
            if (str.transactions.length >= 3) {
                if (type === 'SELL' && str.status === 'ACTIVE') {
                    result = result - 1;
                }
            }
            else {
                if (type === 'SELL' && str.status === 'ACTIVE') {
                    result = result - 1;
                }
            }
            partial += result;
        });
        this.executedTransaction = partial;
        this.loaded = true;
    }
    getCeil(value) {
        return Math.ceil(value);
    }
    closeStop() {
        this.stopModal.dismiss();
    }
    closeCancel() {
        this.cancelModal.dismiss();
    }
    closeTransaction() {
        this.transactionsModal.dismiss();
    }
    openConfirmModal(id) {
        this.checkMobileData = this.activeStrategies[id];
        this.detailsModal.show('modal-lg');
    }
    openStopModal() {
        this.closeTransaction();
        this.stopModal.show('modal-lg');
    }
    openCancelModal() {
        this.closeTransaction();
        this.cancelModal.show('modal-lg');
    }
    fromCoinToBTC(amount, value) {
        return amount * value;
    }
    loadActiveStrategy() {
        this.actionService.getActiveStrategy().subscribe((resp) => {
            this.clonedStrategy = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](resp);
            this.activeStrategies = lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](this.clonedStrategy, 'name', 'asc');
            if (this.stopData === undefined) {
                this.stopData = resp[0];
            }
            this.selectedCoin = [];
            this.selectedCoin = lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"](this.activeStrategies, (e) => {
                return e.coin_pair;
            });
            this.specificPair(this.selectedCoin);
            // console.log(this.selectedCoin)
            this.checkMobileData = resp[0];
            this.strNumber = this.clonedStrategy.length;
            lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.selecteFilter, (sf) => {
                if (sf.name !== 'all' && sf.name !== '') {
                    this.filterResult(sf.name, sf.type);
                }
            });
        });
    }
    getSpecificStatus(orderId, pair) {
        this.actionService.getCurrentStatus(orderId, pair).subscribe((resp) => {
            if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](resp)) {
                this.alertService.addMessage('info', 'Stato dell ordine chiuso bilancio insufficente');
            }
            else {
                const state = resp.status === 'NEW' ? 'APERTO' : 'CHIUSO';
                this.alertService.addMessage('info', 'Stato dell ordine: ' + state);
            }
            return resp;
        });
    }
    deleteFromDb(name) {
        this.actionService.deleteFromDb(name).subscribe(() => {
            this.closeCancel();
            this.loadActiveStrategy();
            this.actionService.getBtcBalance().subscribe();
            this.calculateTotalTransactions();
            this.alertService.addMessage('success', 'Ordine cancellato con successo');
        });
    }
    cancelStrategy(orderId, pair, name) {
        if (orderId !== undefined) {
            this.actionService.stopStrategy(orderId, pair).subscribe((resp) => {
                this.actionService.deleteFromDb(name).subscribe(() => {
                    this.closeCancel();
                    this.loadActiveStrategy();
                    this.actionService.getBtcBalance().subscribe();
                    this.calculateTotalTransactions();
                    this.alertService.addMessage('success', 'Ordine cancellato con successo');
                });
            });
        }
        else {
            this.closeCancel();
            this.alertService.addMessage('danger', 'Ordine nn ancora aperto riprova fra poco');
        }
    }
    updateStrategy(name, status) {
        const payload = {
            status: status === 'ACTIVE' ? 'STOP' : 'ACTIVE',
        };
        this.actionService.updateStrategy(name, payload).subscribe((resp) => {
            this.closeStop();
            this.loadActiveStrategy();
            this.calculateTotalTransactions();
        });
    }
    filterResult(name, type) {
        this.loaded = false;
        let data;
        if (type === 'pairs') {
            this.searchName = '';
            this.searchDate = '';
            this.searchState = 'all';
            if (this.searchFilter !== undefined) {
                data = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.clonedStrategy, (o) => {
                    return o.coin_pair.includes(name.toUpperCase());
                });
            }
            else {
                data = this.clonedStrategy;
            }
        }
        else if (type === 'name') {
            this.searchFilter = '';
            this.searchDate = '';
            this.searchState = 'all';
            if (this.searchName !== undefined) {
                data = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.clonedStrategy, (o) => {
                    return o.name.includes(name.toUpperCase());
                });
            }
            else {
                data = this.clonedStrategy;
            }
        }
        else if (type === 'date') {
            this.searchFilter = '';
            this.searchName = '';
            this.searchState = 'all';
            if (this.searchDate !== undefined) {
                data = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.clonedStrategy, (o) => {
                    return o.date.includes(name);
                });
            }
            else {
                data = this.clonedStrategy;
            }
        }
        else if (type === 'state') {
            this.searchFilter = '';
            this.searchName = '';
            this.searchDate = '';
            const nameUp = name.toUpperCase();
            if (this.searchState !== undefined && name !== 'all') {
                data = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](this.clonedStrategy, (o) => {
                    return o.current_status === nameUp;
                });
            }
            else {
                data = this.clonedStrategy;
            }
        }
        this.activeStrategies = lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"](data, 'name', 'asc');
        this.loaded = true;
    }
    openDetails(data) {
        // $('.showD').click(() => {
        this.stopData = this.activeStrategies[data];
        this.transactionsModal.show('modal-lg');
        // });
    }
    calculateCapital(type) {
        let startCapital = 0;
        let currentCapital = 0;
        let realCurrentCapital = 0;
        switch (type) {
            case 'initial':
                lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, (str) => {
                    if (str.transactions[0] && str.transactions[0].cumulative_quantity) {
                        startCapital += str.transactions[0].cumulative_quantity;
                    }
                    else {
                        startCapital += str.capital;
                    }
                });
                this.btcInitialTotal = startCapital.toFixed(8);
                return startCapital.toFixed(8);
            case 'selled':
                lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, (str) => {
                    currentCapital += this.calculateSelledCapital(str.capital, str.sell_price, str.current_capital, str.buy_price, str.current_status);
                });
                this.btcSelledTotal = currentCapital.toFixed(8);
                return currentCapital.toFixed(8);
            case 'current':
                lodash__WEBPACK_IMPORTED_MODULE_1__["forEach"](this.activeStrategies, (str) => {
                    realCurrentCapital += parseFloat(this.calculateCurrentCapital(str.current_capital, str.coin_pair));
                });
                this.btcCurrentTotal = realCurrentCapital.toFixed(8);
                return realCurrentCapital.toFixed(8);
        }
    }
    parseDate(date) {
        const data = new Date(date);
        // tslint:disable-next-line:max-line-length
        return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + ' - ' + (data.getHours() < 10 ? '0' + data.getHours() : data.getHours()) + ':' + (data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes());
    }
    resetFilter() {
        const result = [];
        this.searchFilter = lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.searchFilter) ? '' : this.searchFilter;
        result.push({ name: this.searchFilter, type: 'pairs' });
        this.searchState = this.searchState === 'all' ? 'all' : this.searchState;
        result.push({ name: this.searchState, type: 'state' });
        this.searchName = lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](this.searchName) ? '' : this.searchName;
        result.push({ name: this.searchName, type: 'name' });
        // this.searchDate = _.isEmpty(this.searchDate) ? '' : this.searchDate;
        this.selecteFilter = result;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["dashboard-component"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.detailsModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stopModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cancelModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.transactionsModal = _t.first);
    } }, decls: 6, vars: 2, consts: [[1, "sub-header"], [1, "h1"], [1, "float-right", 2, "font-size", "16px"], ["class", "mt-3", 4, "ngIf"], [1, "mt-3"], ["class", "text-center", 4, "ngIf"], ["id", "dash-table", 1, "table-responsive"], [1, "text-center"], [1, "d-none"], [1, "hidden-column"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Totale BTC alla fine di tutte le vendite", 1, "hidden-column"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Differenza % tra BTC iniziali e BTC vendita", 1, "hidden-column"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Totale BTC al valore attuale di mercato", 1, "hidden-column"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Differenza % tra BTC iniziali e BTC correnti", 1, "hidden-column"], ["type", "checkbox", "id", "selectAll", 3, "ngModel", "ngModelChange"], ["for", "all", "data-toggle", "tooltip", "data-placement", "top", "title", "Tutti gli ordini", 1, "mr-1", "label-custom"], ["id", "all", "type", "radio", "value", "all", 1, "radio-dash", "all", 3, "ngModel", "ngModelChange"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "dollar-sign", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 288 512", 1, "svg-inline--fa", "fa-dollar-sign", "fa-w-9", 3, "ngStyle"], ["fill", "blue", "d", "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"], ["for", "buy", "data-toggle", "tooltip", "data-placement", "top", "title", "Ordini in acquisto", 1, "mr-1", "label-custom"], ["id", "buy", "type", "radio", "value", "buy", 1, "radio-dash", "buy", 3, "ngModel", "ngModelChange"], ["fill", "green", "d", "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"], ["for", "sell", "data-toggle", "tooltip", "data-placement", "top", "title", "Ordini in vendita", 1, "label-custom"], ["id", "sell", "type", "radio", "value", "sell", 1, "radio-dash", "sell", 3, "ngModel", "ngModelChange"], ["fill", "red", "d", "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"], ["type", "text", "id", "filter-name", 1, "w-100", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "filter-pair", 1, "filter-dash", 3, "ngModel", "ngModelChange"], ["type", "text", 1, "filter-dash", "tot", 3, "value", "disabled"], ["type", "text", 1, "filter-dash", "tot", "text-center", 3, "value", "disabled"], ["type", "text", 1, "filter-dash", 3, "disabled"], ["type", "text", "id", "filter-date", 1, "filter-dash", 3, "disabled", "ngModel", "ngModelChange"], ["type", "text", 1, "filter-dash", "min", 3, "disabled"], ["type", "text", 1, "filter-dash", "text-center", 3, "ngModel", "disabled", "ngModelChange"], ["style", "cursor: pointer", 3, "click", 4, "ngFor", "ngForOf"], ["id", "edit-modal"], ["detailsModal", ""], [1, "app-modal-header"], ["class", "app-modal-body", 4, "ngIf"], ["id", "stop-modal"], ["stopModal", ""], [1, "app-modal-body"], [4, "ngIf"], [1, "btn", "btn-danger", "float-left", 3, "click"], [1, "btn", "start-btn", "float-right", 3, "click"], ["id", "cancel-modal"], ["cancelModal", ""], [1, "btn", "btn-danger", 3, "click"], ["id", "transaction-modal"], ["transactionsModal", ""], [2, "cursor", "pointer", 3, "click"], ["type", "checkbox", 1, "check-dash", 3, "value", "name", "id", "change"], [1, "text-center", "showD"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Visualizza ordini"], ["src", "assets/icons/dollar-sign-solid.svg", "alt", "buy", "width", "18", 4, "ngIf"], ["src", "assets/icons/dollar-sign.svg", "alt", "sell", "width", "18", 4, "ngIf"], ["class", "status-icon play", "src", "assets/icons/play-circle-solid.svg", "alt", "play", "width", "18", 4, "ngIf"], ["class", "status-icon pause", "src", "assets/icons/pause-circle-solid.svg", "alt", "pause", "width", "18", 4, "ngIf"], [1, "showD"], [1, "hidden-column", "showD"], [1, "hidden-column", "showD", "text-center"], [1, "showD", "d-none"], [1, "btn", 3, "ngClass", "click"], ["alt", "stop", "src", "assets/icons/stop-circle-solid.svg", "width", "20"], [1, "nTransactions", "text-center", "showD"], ["data-toggle", "tooltip", "data-placement", "top", "title", "A transazione conclusa", 4, "ngIf"], ["src", "assets/icons/dollar-sign-solid.svg", "alt", "buy", "width", "18"], ["src", "assets/icons/dollar-sign.svg", "alt", "sell", "width", "18"], ["src", "assets/icons/play-circle-solid.svg", "alt", "play", "width", "18", 1, "status-icon", "play"], ["src", "assets/icons/pause-circle-solid.svg", "alt", "pause", "width", "18", 1, "status-icon", "pause"], ["width", "20", "alt", "pause", "src", "assets/icons/pause-circle-solid.svg"], ["width", "20", "alt", "play", "src", "assets/icons/play-circle-solid.svg"], ["data-toggle", "tooltip", "data-placement", "top", "title", "A transazione conclusa"], [1, "table-responsive-lg"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-danger", "mt-3", "w-100", 3, "click"], ["class", "btn btn-dark w-100", 3, "click", 4, "ngIf"], ["class", "btn w-100", 3, "ngClass", "click", 4, "ngIf"], ["class", "btn btn-danger w-100", 3, "click", 4, "ngIf"], [1, "btn", "btn-dark", "w-100", 3, "click"], [1, "btn", "w-100", 3, "ngClass", "click"], [1, "btn", "btn-danger", "w-100", 3, "click"], ["colspan", "3"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Riepilogo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_5_Template, 117, 39, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Strategie attive: ", ctx.strNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".arrow[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: relative;\n  background-color: orange;\n  border-radius: 16px;\n  padding: 5px;\n  border: 1px solid white;\n  width: 34px;\n  cursor: pointer;\n  text-align: center;\n}\n.arrow.left[_ngcontent-%COMP%] {\n  float: left;\n  top: 50px;\n  margin-right: -25px;\n}\n.arrow.right[_ngcontent-%COMP%] {\n  float: right;\n  top: -92px;\n  right: -2px;\n}\n.coin-card[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  border-radius: 16px;\n  background-color: #183153;\n  opacity: 0.8;\n  color: white;\n  padding: 10px 20px;\n}\ntable[_ngcontent-%COMP%] {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n.dot[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: inherit;\n}\n.dot.run[_ngcontent-%COMP%] {\n  background-color: green;\n}\n.dot.stop[_ngcontent-%COMP%] {\n  background-color: red;\n}\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\ntd[_ngcontent-%COMP%]   .label-custom[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .label-custom[_ngcontent-%COMP%] {\n  width: 10px;\n  padding-top: 6px;\n  margin-top: -25px;\n  height: 10px;\n}\ntd[_ngcontent-%COMP%]   .filter-dash[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .filter-dash[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\ntd[_ngcontent-%COMP%]   .filter-dash.min[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .filter-dash.min[_ngcontent-%COMP%] {\n  max-width: 48px;\n}\ntd[_ngcontent-%COMP%]   .filter-dash.tot[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .filter-dash.tot[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\ntd[_ngcontent-%COMP%]   .radio-dash[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .radio-dash[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\ntd[_ngcontent-%COMP%]   .radio-dash.buy[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .radio-dash.buy[_ngcontent-%COMP%] {\n  color: green;\n}\ntd[_ngcontent-%COMP%]   .radio-dash.sell[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .radio-dash.sell[_ngcontent-%COMP%] {\n  color: red;\n}\ntd[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  border-radius: 16px;\n}\ntd[_ngcontent-%COMP%]   .status-icon.play[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .status-icon.play[_ngcontent-%COMP%] {\n  background-color: green;\n}\ntd[_ngcontent-%COMP%]   .status-icon.pause[_ngcontent-%COMP%], th[_ngcontent-%COMP%]   .status-icon.pause[_ngcontent-%COMP%] {\n  background-color: black;\n}\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #dddddd;\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  opacity: 0;\n}\ninput[type=radio][_ngcontent-%COMP%]    + path[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: -24px;\n}\ninput[_ngcontent-%COMP%]    + svg[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ninput[class=all][_ngcontent-%COMP%]:hover    + svg[_ngcontent-%COMP%], input[class=all][_ngcontent-%COMP%]:checked    + svg[_ngcontent-%COMP%], input[class=all][_ngcontent-%COMP%]:focus    + svg[_ngcontent-%COMP%] {\n  fill: #006dd9;\n}\n@media screen and (max-width: 600px) {\n  .hidden-column[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .filter-dash[_ngcontent-%COMP%] {\n    max-width: 60px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2hvbWUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDRUo7QURBRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0VKO0FERUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDRUY7QURJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDRkY7QURHRTtFQUNFLHVCQUFBO0FDREo7QURHRTtFQUNFLHFCQUFBO0FDREo7QURJQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDREY7QURFRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUU7RUFDRSxlQUFBO0FDQUo7QURDTTtFQUNFLGVBQUE7QUNDUjtBRENJO0VBQ0UsZ0JBQUE7QUNDTjtBREVFO0VBQ0UsaUJBQUE7QUNBSjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FEQ0k7RUFDRSxVQUFBO0FDQ047QURHRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNESjtBREVJO0VBQ0UsdUJBQUE7QUNBTjtBREVJO0VBQ0UsdUJBQUE7QUNBTjtBRE1BO0VBQ0UseUJBQUE7QUNIRjtBREtBO0VBRUksVUFBQTtBQ0hKO0FET0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNKRjtBRE9BO0VBQ0UsZUFBQTtBQ0pGO0FET0E7OztFQUdFLGFBQUE7QUNKRjtBRE1BO0VBSUU7SUFDRSx3QkFBQTtFQ05GOztFRFFBO0lBQ0UsMEJBQUE7RUNMRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJyb3d7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDM0cHg7XG4gIGN1cnNvcjpwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICYubGVmdHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0b3A6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjVweDtcbiAgfVxuICAmLnJpZ2h0e1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0b3A6IC05MnB4O1xuICAgIHJpZ2h0OiAtMnB4O1xuICB9XG59XG5cbi5jb2luLWNhcmR7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzMTUzO1xuICBvcGFjaXR5OiAwLjg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxudGFibGUge1xuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5oaWRkZW4tY29sdW1ue1xuICAgLy9kaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLmRvdCB7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcbiAgJi5ydW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIH1cbiAgJi5zdG9we1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxufVxudGQsIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xuICAubGFiZWwtY3VzdG9te1xuICAgIHdpZHRoOjEwcHg7XG4gICAgcGFkZGluZy10b3A6IDZweDtcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gIH1cbiAgLmZpbHRlci1kYXNoe1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICAgICYubWlue1xuICAgICAgICBtYXgtd2lkdGg6NDhweDtcbiAgICAgIH1cbiAgICAmLnRvdHtcbiAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgfVxuICB9XG4gIC5yYWRpby1kYXNoe1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICYuYnV5e1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICAmLnNlbGx7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgfVxuXG4gIC5zdGF0dXMtaWNvbntcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgJi5wbGF5e1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgfVxuICAgICYucGF1c2V7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cblxufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAvL2Rpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSArIHBhdGgge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogLTI0cHg7XG59XG5cbmlucHV0ICsgc3ZnIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFtjbGFzcz1cImFsbFwiXTpob3ZlciArIHN2ZyxcbmlucHV0W2NsYXNzPVwiYWxsXCJdOmNoZWNrZWQgKyBzdmcsXG5pbnB1dFtjbGFzcz1cImFsbFwiXTpmb2N1cyArIHN2ZyB7XG4gIGZpbGw6IHJnYigwLCAxMDksIDIxNyk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudGFibGUge1xuXG4gIH1cbiAgLmhpZGRlbi1jb2x1bW57XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5maWx0ZXItZGFzaHtcbiAgICBtYXgtd2lkdGg6IDYwcHggIWltcG9ydGFudDtcbiAgfVxufVxuIiwiLmFycm93IHtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICB3aWR0aDogMzRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXJyb3cubGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB0b3A6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogLTI1cHg7XG59XG4uYXJyb3cucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHRvcDogLTkycHg7XG4gIHJpZ2h0OiAtMnB4O1xufVxuXG4uY29pbi1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODMxNTM7XG4gIG9wYWNpdHk6IDAuODtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbnRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kb3Qge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XG59XG4uZG90LnJ1biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLmRvdC5zdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG50ZCwgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA4cHg7XG59XG50ZCAubGFiZWwtY3VzdG9tLCB0aCAubGFiZWwtY3VzdG9tIHtcbiAgd2lkdGg6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIG1hcmdpbi10b3A6IC0yNXB4O1xuICBoZWlnaHQ6IDEwcHg7XG59XG50ZCAuZmlsdGVyLWRhc2gsIHRoIC5maWx0ZXItZGFzaCB7XG4gIG1heC13aWR0aDogODBweDtcbn1cbnRkIC5maWx0ZXItZGFzaC5taW4sIHRoIC5maWx0ZXItZGFzaC5taW4ge1xuICBtYXgtd2lkdGg6IDQ4cHg7XG59XG50ZCAuZmlsdGVyLWRhc2gudG90LCB0aCAuZmlsdGVyLWRhc2gudG90IHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cbnRkIC5yYWRpby1kYXNoLCB0aCAucmFkaW8tZGFzaCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxudGQgLnJhZGlvLWRhc2guYnV5LCB0aCAucmFkaW8tZGFzaC5idXkge1xuICBjb2xvcjogZ3JlZW47XG59XG50ZCAucmFkaW8tZGFzaC5zZWxsLCB0aCAucmFkaW8tZGFzaC5zZWxsIHtcbiAgY29sb3I6IHJlZDtcbn1cbnRkIC5zdGF0dXMtaWNvbiwgdGggLnN0YXR1cy1pY29uIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbnRkIC5zdGF0dXMtaWNvbi5wbGF5LCB0aCAuc3RhdHVzLWljb24ucGxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxudGQgLnN0YXR1cy1pY29uLnBhdXNlLCB0aCAuc3RhdHVzLWljb24ucGF1c2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBvcGFjaXR5OiAwO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSArIHBhdGgge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogLTI0cHg7XG59XG5cbmlucHV0ICsgc3ZnIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFtjbGFzcz1hbGxdOmhvdmVyICsgc3ZnLFxuaW5wdXRbY2xhc3M9YWxsXTpjaGVja2VkICsgc3ZnLFxuaW5wdXRbY2xhc3M9YWxsXTpmb2N1cyArIHN2ZyB7XG4gIGZpbGw6ICMwMDZkZDk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oaWRkZW4tY29sdW1uIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmlsdGVyLWRhc2gge1xuICAgIG1heC13aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dashboard-component',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss'],
            }]
    }], function () { return [{ type: _core_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"] }, { type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, { detailsModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['detailsModal']
        }], stopModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stopModal']
        }], cancelModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cancelModal']
        }], transactionsModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['transactionsModal']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/action.service */ "./src/app/core/services/action.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function () { return ["settings"]; };
function HomeComponent_li_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Opzioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["dashboard"]; };
const _c2 = function () { return ["strategies"]; };
// import {ActivatedRoute, Route, Router} from "@angular/router";
class HomeComponent {
    constructor(authService, actionService, router) {
        this.authService = authService;
        this.actionService = actionService;
        this.router = router;
        this.getBalance();
        this.updatedAt = new Date();
        this.user = this.authService.user;
    }
    ngOnInit() {
        this.updateBalance = setInterval(() => {
            this.getBalance();
            this.updatedAt = new Date();
        }, 20000);
    }
    ngOnDestroy() {
        clearInterval(this.updateBalance);
    }
    getBalance() {
        this.actionService.getBtcBalance().subscribe();
    }
    parseDate(date) {
        const data = new Date(date);
        // tslint:disable-next-line:max-line-length
        return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + ' - ' + (data.getHours() < 10 ? '0' + data.getHours() : data.getHours()) + ':' + (data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()) + ':' + (data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds());
    }
    balanceWoFees(bal, tax) {
        return (bal - tax).toFixed(8);
    }
    calculateFees(value) {
        const tax = value - ((value / 100) * 0.1);
        return (value - tax).toFixed(8);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["travel-component"]], decls: 63, vars: 16, consts: [[1, "site-wrapper"], [1, "navbar-crypto"], [1, "navbar", "navbar-expand-md"], ["href", "#", 1, "navbar-brand"], [1, "text-capitalize"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["alt", "", "width", "24", "src", "assets/icons/bars-solid.svg"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse", "mobile-menu", 2, "justify-content", "flex-end"], [1, "pr-3", "balance", 2, "color", "#f2f2f2"], [1, "d-sm-block", "d-md-none"], [1, "nav", "flex-column"], [1, "nav-item"], ["data-target", ".navbar-collapse.show", "data-toggle", "collapse", 1, "nav-link", "mobile", 3, "routerLink"], ["width", "22", "src", "assets/icons/tachometer-alt-solid.svg"], ["width", "22", "src", "assets/icons/tasks-solid.svg"], ["width", "22", "src", "assets/icons/folder-open-solid.svg"], [1, "btn", "btn-lg", 3, "click"], ["src", "../../../assets/icons/sign-out-alt-solid.svg", "width", "24", "alt", "logout"], ["role", "main", 1, "main-content", "container-fluid"], [1, "row"], [1, "d-none", "d-sm-block", "col-sm-2", "side-menu"], [1, "profile-img"], ["src", "assets/bitcoin-brands.svg"], [1, "nav-link", 3, "routerLink"], ["alt", "riepilogo", "width", "22", "src", "assets/icons/tachometer-alt-solid.svg"], [1, "d-none", "d-sm-none", "d-lg-block"], ["alt", "strategie", "width", "22", "src", "assets/icons/tasks-solid.svg"], ["class", "nav-item", 4, "ngIf"], [1, "col-sm-10", "panel-side"], ["alt", "opzioni", "width", "22", "src", "assets/icons/folder-open-solid.svg"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ciao ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ULTIMO AGGIORNAMENTO:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "BILANCIO:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "BILANCIO SENZA TASSE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "TASSE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Riepilogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Strategie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Opzioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_41_listener() { return ctx.authService.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "main", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Riepilogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Strategie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, HomeComponent_li_60_Template, 5, 2, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.user, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.parseDate(ctx.updatedAt), " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.actionService.balanceBtc, " BTC | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.balanceWoFees(ctx.actionService.balanceBtc, ctx.calculateFees(ctx.actionService.balanceBtc)), " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.calculateFees(ctx.actionService.balanceBtc), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.role == "admin");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".site-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.site-wrapper[_ngcontent-%COMP%]   .alert-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 70px;\n  right: 15px;\n  max-width: 400px;\n  z-index: 1052;\n}\n.site-wrapper[_ngcontent-%COMP%]   .alert-wrapper[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%] {\n  z-index: 1;\n  background-color: #F49419;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.site-wrapper[_ngcontent-%COMP%]   .navbar-crypto[_ngcontent-%COMP%]   .mobile-menu[_ngcontent-%COMP%] {\n  background: #F49419;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  background-color: #f2f2f2;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #183153;\n  opacity: 0.8;\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding-top: 56px;\n  z-index: 0;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  text-align: center;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 155px;\n  border: 1px solid white;\n  border-radius: 60%;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.site-wrapper[_ngcontent-%COMP%]   main.main-content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n  vertical-align: text-top;\n}\n.site-wrapper[_ngcontent-%COMP%]   .panel-side[_ngcontent-%COMP%] {\n  margin-left: 16.666667%;\n}\n.site-wrapper[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  color: white;\n  min-height: 60px;\n}\n.site-wrapper[_ngcontent-%COMP%]   .start-btn[_ngcontent-%COMP%] {\n  background-color: #183153;\n  opacity: 0.8;\n}\n@media screen and (max-width: 512px) {\n  .site-wrapper[_ngcontent-%COMP%]   .panel-side[_ngcontent-%COMP%] {\n    margin-left: 0%;\n  }\n\n  .mobile-menu[_ngcontent-%COMP%] {\n    background: #183153 !important;\n    margin-left: -16px;\n    margin-bottom: -8px;\n    margin-right: -16px;\n    opacity: 0.8;\n  }\n  .mobile-menu[_ngcontent-%COMP%]   .balance[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFZRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDVkY7QURIRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0tKO0FESkk7RUFDRSxrQkFBQTtBQ01OO0FEQ0U7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUNDSjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FEQ0k7RUFDRSxtQkFBQTtBQ0NOO0FER0U7RUFDRSxPQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDREo7QURFSTtFQUVFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNETjtBREVNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ1E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDVjtBREVNO0VBRUUsZ0JBQUE7QUNEUjtBRElVO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNGWjtBRFFFO0VBQ0UsdUJBQUE7QUNOSjtBRFNFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDUEo7QURVRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ1JKO0FEY0E7RUFFRztJQUNFLGVBQUE7RUNaSDs7RURlQTtJQUNFLDhCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtFQ1pGO0VEYUU7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0VDWEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpdGUtd3JhcHBlcntcbiAgLmFsZXJ0LXdyYXBwZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNzBweDtcbiAgICByaWdodDogMTVweDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIHotaW5kZXg6MTA1MjtcbiAgICAuYWxlcnR7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuICB9XG5cbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAubmF2YmFyLWNyeXB0b3tcbiAgICB6LWluZGV4OjE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0OTQxOTtcblxuICAgIGF7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5tb2JpbGUtbWVudXtcbiAgICAgIGJhY2tncm91bmQ6ICNGNDk0MTk7XG5cbiAgICB9XG4gIH1cbiAgbWFpbi5tYWluLWNvbnRlbnR7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIC5zaWRlLW1lbnV7XG4gICAgICAvL21hcmdpbi10b3A6MjBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODMxNTM7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcGFkZGluZy10b3A6IDU2cHg7XG4gICAgICB6LWluZGV4OjA7XG4gICAgICAucHJvZmlsZS1pbWd7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaW1ne1xuICAgICAgICAgIG1heC13aWR0aDogMTU1cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNjAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubmF2e1xuXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgIC5uYXYtbGlua3tcblxuICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnBhbmVsLXNpZGV7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NyU7XG4gIH1cblxuICBmb290ZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIH1cblxuICAuc3RhcnQtYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODMxNTM7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTJweCkge1xuIC5zaXRlLXdyYXBwZXJ7XG4gICAucGFuZWwtc2lkZSB7XG4gICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgIH1cbiB9XG4gIC5tb2JpbGUtbWVudXtcbiAgICBiYWNrZ3JvdW5kOiAjMTgzMTUzICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgLmJhbGFuY2V7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5zaXRlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2l0ZS13cmFwcGVyIC5hbGVydC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDcwcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB6LWluZGV4OiAxMDUyO1xufVxuLnNpdGUtd3JhcHBlciAuYWxlcnQtd3JhcHBlciAuYWxlcnQge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4uc2l0ZS13cmFwcGVyIC5uYXZiYXItY3J5cHRvIHtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0OTQxOTtcbn1cbi5zaXRlLXdyYXBwZXIgLm5hdmJhci1jcnlwdG8gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zaXRlLXdyYXBwZXIgLm5hdmJhci1jcnlwdG8gLm1vYmlsZS1tZW51IHtcbiAgYmFja2dyb3VuZDogI0Y0OTQxOTtcbn1cbi5zaXRlLXdyYXBwZXIgbWFpbi5tYWluLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cbi5zaXRlLXdyYXBwZXIgbWFpbi5tYWluLWNvbnRlbnQgLnNpZGUtbWVudSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MzE1MztcbiAgb3BhY2l0eTogMC44O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZy10b3A6IDU2cHg7XG4gIHotaW5kZXg6IDA7XG59XG4uc2l0ZS13cmFwcGVyIG1haW4ubWFpbi1jb250ZW50IC5zaWRlLW1lbnUgLnByb2ZpbGUtaW1nIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNpdGUtd3JhcHBlciBtYWluLm1haW4tY29udGVudCAuc2lkZS1tZW51IC5wcm9maWxlLWltZyBpbWcge1xuICBtYXgtd2lkdGg6IDE1NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNjAlO1xufVxuLnNpdGUtd3JhcHBlciBtYWluLm1haW4tY29udGVudCAuc2lkZS1tZW51IC5uYXYge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLnNpdGUtd3JhcHBlciBtYWluLm1haW4tY29udGVudCAuc2lkZS1tZW51IC5uYXYgLm5hdi1saW5rIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xufVxuLnNpdGUtd3JhcHBlciAucGFuZWwtc2lkZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjclO1xufVxuLnNpdGUtd3JhcHBlciBmb290ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG59XG4uc2l0ZS13cmFwcGVyIC5zdGFydC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzMTUzO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxMnB4KSB7XG4gIC5zaXRlLXdyYXBwZXIgLnBhbmVsLXNpZGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuXG4gIC5tb2JpbGUtbWVudSB7XG4gICAgYmFja2dyb3VuZDogIzE4MzE1MyAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIC5tb2JpbGUtbWVudSAuYmFsYW5jZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'travel-component',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _core_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/home.guard.ts":
/*!********************************************!*\
  !*** ./src/app/modules/home/home.guard.ts ***!
  \********************************************/
/*! exports provided: HomeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGuard", function() { return HomeGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HomeGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.token) {
            return true;
        }
        else {
            return this.router.createUrlTree(['auth']);
        }
    }
}
HomeGuard.ɵfac = function HomeGuard_Factory(t) { return new (t || HomeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeGuard, factory: HomeGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.routing */ "./src/app/modules/home/home.routing.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/home/dashboard/dashboard.component.ts");
/* harmony import */ var _404_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./404/404.component */ "./src/app/modules/home/404/404.component.ts");
/* harmony import */ var _home_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.guard */ "./src/app/modules/home/home.guard.ts");
/* harmony import */ var _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indicators/indicators.component */ "./src/app/modules/home/indicators/indicators.component.ts");
/* harmony import */ var _strategies_strategies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./strategies/strategies.component */ "./src/app/modules/home/strategies/strategies.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/modules/home/settings/settings.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/modal/modal.component */ "./src/app/shared/modal/modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/alert/alert.component */ "./src/app/shared/alert/alert.component.ts");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "./node_modules/@angular-slider/ngx-slider/__ivy_ngcc__/fesm2015/angular-slider-ngx-slider.js");















// import {Ng5SliderModule} from 'ng5-slider';
// import {BrowserModule} from "@angular/platform-browser";
// import {HttpClientModule} from "@angular/common/http";
class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, providers: [_home_guard__WEBPACK_IMPORTED_MODULE_5__["HomeGuard"]], imports: [[
            _home_routing__WEBPACK_IMPORTED_MODULE_1__["AuthenticationRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_13__["NgxSliderModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_6__["IndicatorsComponent"],
        _strategies_strategies_component__WEBPACK_IMPORTED_MODULE_7__["StrategiesComponent"],
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
        _404_404_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
        _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
        _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"]], imports: [_home_routing__WEBPACK_IMPORTED_MODULE_1__["AuthenticationRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_13__["NgxSliderModule"]], exports: [_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
        _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _home_routing__WEBPACK_IMPORTED_MODULE_1__["AuthenticationRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_13__["NgxSliderModule"],
                ],
                providers: [_home_guard__WEBPACK_IMPORTED_MODULE_5__["HomeGuard"]],
                declarations: [
                    _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                    _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_6__["IndicatorsComponent"],
                    _strategies_strategies_component__WEBPACK_IMPORTED_MODULE_7__["StrategiesComponent"],
                    _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
                    _404_404_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
                    _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
                    _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                ],
                exports: [
                    _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
                    _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/home/home.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/home/home.routing.ts ***!
  \**********************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/home/dashboard/dashboard.component.ts");
/* harmony import */ var _home_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.guard */ "./src/app/modules/home/home.guard.ts");
/* harmony import */ var _strategies_strategies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./strategies/strategies.component */ "./src/app/modules/home/strategies/strategies.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/modules/home/settings/settings.component.ts");









const routes = [
    {
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_home_guard__WEBPACK_IMPORTED_MODULE_4__["HomeGuard"]],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            }
            // ,
            // {
            //   path: 'indicators',
            //   component: IndicatorsComponent
            // }
            ,
            {
                path: 'strategies',
                component: _strategies_strategies_component__WEBPACK_IMPORTED_MODULE_5__["StrategiesComponent"]
            },
            {
                path: 'settings',
                component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"]
            }
        ],
    }
];
class AuthenticationRoutingModule {
}
AuthenticationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthenticationRoutingModule });
AuthenticationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AuthenticationRoutingModule_Factory(t) { return new (t || AuthenticationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthenticationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/home/indicators/indicators.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/indicators/indicators.component.ts ***!
  \*****************************************************************/
/*! exports provided: IndicatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorsComponent", function() { return IndicatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IndicatorsComponent {
    constructor() { }
}
IndicatorsComponent.ɵfac = function IndicatorsComponent_Factory(t) { return new (t || IndicatorsComponent)(); };
IndicatorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndicatorsComponent, selectors: [["indicators-component"]], decls: 2, vars: 0, consts: [[1, "sub-header"]], template: function IndicatorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Indicators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9pbmRpY2F0b3JzL2luZGljYXRvcnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndicatorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'indicators-component',
                templateUrl: './indicators.component.html',
                styleUrls: ['./indicators.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/settings/settings.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/settings/settings.component.ts ***!
  \*************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/action.service */ "./src/app/core/services/action.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class SettingsComponent {
    constructor(authService, actionService) {
        this.authService = authService;
        this.actionService = actionService;
        this.newPw = '';
        this.confirmPw = '';
    }
    ngOnInit() {
    }
    update(name, pw) {
        this.actionService.updatePassword(name, pw).subscribe();
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["settings-component"]], decls: 28, vars: 6, consts: [[1, "sub-header"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "home-tab", "data-toggle", "tab", "href", "#user", "role", "tab", "aria-controls", "user", "aria-selected", "true", 1, "nav-link", "active"], ["id", "myTabContent", 1, "tab-content"], ["id", "user", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-9", "mb-4"], ["type", "text", 3, "disabled", "readOnly", "ngModel"], ["type", "password", 3, "ngModel", "ngModelChange"], [1, "col-sm-9"], [1, "btn", "start-btn", 3, "disabled", "click"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Opzioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Utente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Profilo utente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nome utente:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nuova password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_19_listener($event) { return ctx.newPw = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Conferma nuova password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_23_listener($event) { return ctx.confirmPw = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_26_listener() { return ctx.update(ctx.authService.user, ctx.newPw); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "PROCEDI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("readOnly", true)("ngModel", ctx.authService.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPw);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPw);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.newPw !== ctx.confirmPw || ctx.newPw === "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".tab-pane[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2hvbWUvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItcGFuZSB7XG4gIHBhZGRpbmc6MnJlbSAwO1xufVxuXG4ubmF2LWxpbmsge1xuICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMywzLDM3LDAuMSkgMTAwJSk7XG59XG4ubmF2LWxpbmsuYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6I2ZmZjtcbn1cblxuXG4iLCIudGFiLXBhbmUge1xuICBwYWRkaW5nOiAycmVtIDA7XG59XG5cbi5uYXYtbGluay5hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'settings-component',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss'],
            }]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _core_services_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/strategies/strategies.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/strategies/strategies.component.ts ***!
  \*****************************************************************/
/*! exports provided: StrategiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategiesComponent", function() { return StrategiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/alert/alert.service */ "./src/app/shared/alert/alert.service.ts");
/* harmony import */ var _core_services_action_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/action.service */ "./src/app/core/services/action.service.ts");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "./node_modules/@angular-slider/ngx-slider/__ivy_ngcc__/fesm2015/angular-slider-ngx-slider.js");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/modal/modal.component */ "./src/app/shared/modal/modal.component.ts");











const _c0 = ["confirmModal"];
function StrategiesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function StrategiesComponent_div_16_Template_input_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.checkIfExist(ctx_r15.formValue.strategy_name.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r17.name);
} }
function StrategiesComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " compera");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prezzo vendita:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Direzione:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Crescente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Decrescente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Numero ordini:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-slider", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r9.options);
} }
function StrategiesComponent_p_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Prezzo di vendita: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r11.formValue.strategy_sell_price.value, "1.1-8"), " BTC ");
} }
function StrategiesComponent_span_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "per strategia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StrategiesComponent_p_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ordine: ", ctx_r13.formValue.strategy_direction.value === "up" ? "Crescente" : "Decrescente", "");
} }
function StrategiesComponent_p_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("N\u00B0 Ordini: ", ctx_r14.formValue.strategy_size.value, "");
} }
class StrategiesComponent {
    constructor(fb, alert, actionService, alertService, datePipe) {
        this.fb = fb;
        this.alert = alert;
        this.actionService = actionService;
        this.alertService = alertService;
        this.datePipe = datePipe;
        this.pairs = [];
        this.strategyType = 'single';
        this.strLength = 0;
        this.activeList = [
            { pair: 'BNBBTC' },
            { pair: 'NULSBTC' },
            { pair: 'NEOBTC' },
            { pair: 'LINKBTC' },
            { pair: 'IOTABTC' },
            { pair: 'ETCBTC' },
            { pair: 'KNCBTC' },
            { pair: 'WTCBTC' },
            { pair: 'SNGLSBTC' },
            { pair: 'GASBTC' },
            { pair: 'SNMBTC' },
            { pair: 'BQXBTC' },
            { pair: 'QTUMBTC' },
            { pair: 'LTCBTC' },
            { pair: 'ETHBTC' },
            { pair: 'ZRXBTC' },
            { pair: 'OMGBTC' },
            { pair: '1INCHBTC' },
            { pair: 'AAVEBTC' },
            { pair: 'ACMBTC' },
            { pair: 'ADABTC' },
            { pair: 'ADXBTC' },
            { pair: 'AERGOBTC' },
            { pair: 'AIONBTC' },
            { pair: 'AKROBTC' },
            { pair: 'ALGOBTC' },
            { pair: 'ALICEBTC' },
            { pair: 'ALPHABTC' },
            { pair: 'AMBBTC' },
            { pair: 'ANKRBTC' },
            { pair: 'APPCBTC' },
            { pair: 'ARBTC' },
            { pair: 'ARDRBTC' },
            { pair: 'ARKBTC' },
            { pair: 'ARPABTC' },
            { pair: 'ASRBTC' },
            { pair: 'ASTBTC' },
            { pair: 'ATABTC' },
            { pair: 'ATMBTC' },
            { pair: 'ATOMBTC' },
            { pair: 'AUCTIONBTC' },
            { pair: 'AUDIOBTC' },
            { pair: 'AUTOBTC' },
            { pair: 'AVABTC' },
            { pair: 'AVAXBTC' },
            { pair: 'AXSBTC' },
            { pair: 'BADGERBTC' },
            { pair: 'BAKEBTC' },
            { pair: 'BANDBTC' },
            { pair: 'BARBTC' },
            { pair: 'BATBTC' },
            { pair: 'BCDBTC' },
            { pair: 'BCHBTC' },
            { pair: 'BEAMBTC' },
            { pair: 'BELBTC' },
            { pair: 'BLZBTC' },
            { pair: 'BNTBTC' },
            { pair: 'BRDBTC' },
            { pair: 'BTCSTBTC' },
            { pair: 'BTGBTC' },
            { pair: 'BTSBTC' },
            { pair: 'BZRXBTC' },
            { pair: 'CAKEBTC' },
            { pair: 'CDTBTC' },
            { pair: 'CELOBTC' },
            { pair: 'CELRBTC' },
            { pair: 'CFXBTC' },
            { pair: 'CHRBTC' },
            { pair: 'CHZBTC' },
            { pair: 'CKBBTC' },
            { pair: 'CNDBTC' },
            { pair: 'COMPBTC' },
            { pair: 'COSBTC' },
            { pair: 'COTIBTC' },
            { pair: 'CRVBTC' },
            { pair: 'CTKBTC' },
            { pair: 'CTSIBTC' },
            { pair: 'CTXCBTC' },
            { pair: 'CVCBTC' },
            { pair: 'DASHBTC' },
            { pair: 'DATABTC' },
            { pair: 'DCRBTC' },
            { pair: 'DEGOBTC' },
            { pair: 'DIABTC' },
            { pair: 'DLTBTC' },
            { pair: 'DNTBTC' },
            { pair: 'DOCKBTC' },
            { pair: 'DODOBTC' },
            { pair: 'DOGEBTC' },
            { pair: 'DOTBTC' },
            { pair: 'DREPBTC' },
            { pair: 'DUSKBTC' },
            { pair: 'EGLDBTC' },
            { pair: 'ELFBTC' },
            { pair: 'ENJBTC' },
            { pair: 'EOSBTC' },
            { pair: 'EPSBTC' },
            { pair: 'EVXBTC' },
            { pair: 'EZBTC' },
            { pair: 'FETBTC' },
            { pair: 'FILBTC' },
            { pair: 'FIOBTC' },
            { pair: 'FIROBTC' },
            { pair: 'FISBTC' },
            { pair: 'FLMBTC' },
            { pair: 'FORBTC' },
            { pair: 'FORTHBTC' },
            { pair: 'FRONTBTC' },
            { pair: 'FTMBTC' },
            { pair: 'FTTBTC' },
            { pair: 'FUNBTC' },
            { pair: 'FXSBTC' },
            { pair: 'GLMBTC' },
            { pair: 'GOBTC' },
            { pair: 'GRSBTC' },
            { pair: 'GRTBTC' },
            { pair: 'GTCBTC' },
            { pair: 'GTOBTC' },
            { pair: 'GVTBTC' },
            { pair: 'GXSBTC' },
            { pair: 'HARDBTC' },
            { pair: 'HBARBTC' },
            { pair: 'HIVEBTC' },
            { pair: 'HNTBTC' },
            { pair: 'ICPBTC' },
            { pair: 'ICXBTC' },
            { pair: 'IDEXBTC' },
            { pair: 'INJBTC' },
            { pair: 'IOSTBTC' },
            { pair: 'IOTXBTC' },
            { pair: 'IRISBTC' },
            { pair: 'JSTBTC' },
            { pair: 'JUVBTC' },
            { pair: 'KAVABTC' },
            { pair: 'KEEPBTC' },
            { pair: 'KLAYBTC' },
            { pair: 'KMDBTC' },
            { pair: 'LINABTC' },
            { pair: 'LITBTC' },
            { pair: 'LOOMBTC' },
            { pair: 'LPTBTC' },
            { pair: 'LRCBTC' },
            { pair: 'LSKBTC' },
            { pair: 'LTOBTC' },
            { pair: 'LUNABTC' },
            { pair: 'MANABTC' },
            { pair: 'MATICBTC' },
            { pair: 'MDABTC' },
            { pair: 'MDTBTC' },
            { pair: 'MDXBTC' },
            { pair: 'MIRBTC' },
            { pair: 'MITHBTC' },
            { pair: 'MKRBTC' },
            { pair: 'MTHBTC' },
            { pair: 'MTLBTC' },
            { pair: 'NANOBTC' },
            { pair: 'NASBTC' },
            { pair: 'NAVBTC' },
            { pair: 'NBSBTC' },
            { pair: 'NEARBTC' },
            { pair: 'NEBLBTC' },
            { pair: 'NKNBTC' },
            { pair: 'NMRBTC' },
            { pair: 'NUBTC' },
            { pair: 'NXSBTC' },
            { pair: 'OAXBTC' },
            { pair: 'OCEANBTC' },
            { pair: 'OGBTC' },
            { pair: 'OGNBTC' },
            { pair: 'OMBTC' },
            { pair: 'ONEBTC' },
            { pair: 'ONGBTC' },
            { pair: 'ONTBTC' },
            { pair: 'ORNBTC' },
            { pair: 'OXTBTC' },
            { pair: 'PAXGBTC' },
            { pair: 'PERLBTC' },
            { pair: 'PERPBTC' },
            { pair: 'PHABTC' },
            { pair: 'PHBBTC' },
            { pair: 'PIVXBTC' },
            { pair: 'PNTBTC' },
            { pair: 'POABTC' },
            { pair: 'POLSBTC' },
            { pair: 'POLYBTC' },
            { pair: 'PONDBTC' },
            { pair: 'POWRBTC' },
            { pair: 'PPTBTC' },
            { pair: 'PSGBTC' },
            { pair: 'QKCBTC' },
            { pair: 'QLCBTC' },
            { pair: 'QSPBTC' },
            { pair: 'RAMPBTC' },
            { pair: 'RCNBTC' },
            { pair: 'RDNBTC' },
            { pair: 'REEFBTC' },
            { pair: 'RENBTC' },
            { pair: 'RENBTCBTC' },
            { pair: 'REPBTC' },
            { pair: 'REQBTC' },
            { pair: 'RIFBTC' },
            { pair: 'RLCBTC' },
            { pair: 'ROSEBTC' },
            { pair: 'RSRBTC' },
            { pair: 'RUNEBTC' },
            { pair: 'RVNBTC' },
            { pair: 'SANDBTC' },
            { pair: 'SCBTC' },
            { pair: 'SCRTBTC' },
            { pair: 'SFPBTC' },
            { pair: 'SKLBTC' },
            { pair: 'SKYBTC' },
            { pair: 'SNTBTC' },
            { pair: 'SNXBTC' },
            { pair: 'SOLBTC' },
            { pair: 'SRMBTC' },
            { pair: 'STEEMBTC' },
            { pair: 'STMXBTC' },
            { pair: 'STORJBTC' },
            { pair: 'STPTBTC' },
            { pair: 'STRAXBTC' },
            { pair: 'STXBTC' },
            { pair: 'SUPERBTC' },
            { pair: 'SUSDBTC' },
            { pair: 'SUSHIBTC' },
            { pair: 'SXPBTC' },
            { pair: 'SYSBTC' },
            { pair: 'TCTBTC' },
            { pair: 'TFUELBTC' },
            { pair: 'THETABTC' },
            { pair: 'TKOBTC' },
            { pair: 'TLMBTC' },
            { pair: 'TOMOBTC' },
            { pair: 'TORNBTC' },
            { pair: 'TRBBTC' },
            { pair: 'TROYBTC' },
            { pair: 'TRUBTC' },
            { pair: 'TRXBTC' },
            { pair: 'TVKBTC' },
            { pair: 'TWTBTC' },
            { pair: 'UMABTC' },
            { pair: 'UNFIBTC' },
            { pair: 'UNIBTC' },
            { pair: 'UTKBTC' },
            { pair: 'VETBTC' },
            { pair: 'VIABTC' },
            { pair: 'VIBBTC' },
            { pair: 'VIDTBTC' },
            { pair: 'VITEBTC' },
            { pair: 'WABIBTC' },
            { pair: 'WANBTC' },
            { pair: 'WAVESBTC' },
            { pair: 'WBTCBTC' },
            { pair: 'WINGBTC' },
            { pair: 'WNXMBTC' },
            { pair: 'WPRBTC' },
            { pair: 'WRXBTC' },
            { pair: 'XEMBTC' },
            { pair: 'XLMBTC' },
            { pair: 'XMRBTC' },
            { pair: 'XRPBTC' },
            { pair: 'XTZBTC' },
            { pair: 'XVGBTC' },
            { pair: 'XVSBTC' },
            { pair: 'YFIBTC' },
            { pair: 'YFIIBTC' },
            { pair: 'YOYOBTC' },
            { pair: 'ZECBTC' },
            { pair: 'ZENBTC' },
            { pair: 'ZILBTC' },
            { pair: 'DGBBTC' },
            { pair: 'BALBTC' },
            { pair: 'ANTBTC' },
            { pair: 'KSMBTC' },
            { pair: 'AGIXBTC' }
        ];
        this.strategiesForm = this.fb.group({
            strategy_name: [''],
            strategy_pairs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            strategy_capital: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            strategy_buy_price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            strategy_sell_price: [''],
            strategy_pairs_size: [''],
            strategy_direction: [''],
            strategy_size: [''],
        });
        this.options = {
            floor: 2,
            ceil: 50,
            step: 1
        };
        this.optionsStr = {
            floor: 0,
            ceil: 200,
            step: 1
        };
        this.manageValidators(this.strategyType);
    }
    ngOnInit() {
        this.loadPairs();
    }
    manageValidators(str) {
        if (str === 'single') {
            this.strategiesForm.reset();
            this.formValue.strategy_name.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.formValue.strategy_sell_price.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.formValue.strategy_direction.clearValidators();
            this.formValue.strategy_size.clearValidators();
            this.updateFormStatus();
        }
        else {
            this.isStrPresent = false;
            this.strategiesForm.reset();
            lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](this.formValue, (s) => {
                if (s.name !== 'strategy_pairs_size') {
                    s.setValue('');
                }
            });
            this.formValue.strategy_name.clearValidators();
            this.formValue.strategy_sell_price.clearValidators();
            this.formValue.strategy_direction.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.formValue.strategy_size.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.updateFormStatus();
        }
    }
    updateFormStatus() {
        this.formValue.strategy_name.updateValueAndValidity();
        this.formValue.strategy_sell_price.updateValueAndValidity();
        this.formValue.strategy_direction.updateValueAndValidity();
        this.formValue.strategy_size.updateValueAndValidity();
    }
    checkIfExist(name) {
        if (name !== '' && this.strategyType === 'single') {
            this.actionService.checkStrategy(name).subscribe((resp) => {
                if (lodash__WEBPACK_IMPORTED_MODULE_3__["isString"](resp.success)) {
                    this.isStrPresent = false;
                }
                else {
                    this.isStrPresent = true;
                    this.alertService.addMessage('danger', 'Nome strategia presente');
                }
                return this.isStrPresent;
            }, (error) => {
            });
        }
    }
    loadPairs() {
        this.actionService.getAllPairs().subscribe((resp) => {
            if (this.formValue.strategy_pairs_size.value === 0) {
                let result;
                result = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](resp, (o) => {
                    return o.price <= 0.000002;
                });
                this.pairs = [];
                lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](this.activeList, (o) => {
                    lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](result, (p) => {
                        if (o.pair === p.name) {
                            this.pairs.push(p);
                        }
                    });
                });
                this.formValue.strategy_pairs_size.setValue(200);
                this.strLength = this.pairs.length;
            }
            else {
                const value = this.formValue.strategy_pairs_size.value < 100 ? this.formValue.strategy_pairs_size.value < 10 ? '0.0000000' + this.formValue.strategy_pairs_size.value.toString() : '0.000000' + this.formValue.strategy_pairs_size.value.toString() : '0.00000' + this.formValue.strategy_pairs_size.value.toString();
                let result2;
                result2 = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](resp, (o) => {
                    return o.price <= parseFloat(value);
                });
                this.pairs = [];
                lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](this.activeList, (o) => {
                    lodash__WEBPACK_IMPORTED_MODULE_3__["forEach"](result2, (p) => {
                        if (o.pair === p.name) {
                            this.pairs.push(p);
                        }
                    });
                });
                // console.log(this.pairs, this.pairs.length)
                this.strLength = this.pairs.length;
            }
        }, (error) => {
        });
    }
    loadPrices() {
        const pairs = this.formValue.strategy_pairs.value;
        if (pairs) {
            const price = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.pairs, { name: pairs });
            this.currentPrice = price.price;
            const formattedPrice = Math.floor(price.price.toFixed(8));
            this.formValue.strategy_buy_price.setValue(price.price.toFixed(8));
            this.formValue.strategy_sell_price.setValue(price.price.toFixed(8));
        }
    }
    initializeStrategy() {
        const quantity = this.formValue.strategy_capital.value / parseFloat(this.formValue.strategy_buy_price.value);
        const date = new Date();
        const payload = {
            name: this.formValue.strategy_name.value,
            coin_pair: this.formValue.strategy_pairs.value,
            capital: this.formValue.strategy_capital.value,
            quantity: Math.floor(parseFloat(quantity.toFixed(3))),
            current_capital: this.formValue.strategy_capital.value,
            current_status: 'BUY',
            buy_price: parseFloat(this.formValue.strategy_buy_price.value),
            sell_price: parseFloat(this.formValue.strategy_sell_price.value),
            date: this.datePipe.transform(date, 'yyyy-MM-dd'),
            status: 'ACTIVE',
        };
        // console.log(payload);
        this.actionService.setStrategy(payload).subscribe((resp) => {
            if (resp) {
                this.close();
                this.actionService.getBtcBalance().subscribe();
                this.alertService.addMessage('success', 'Strategia inizializzata con successo');
            }
        }, (error) => {
            this.close();
        });
    }
    initializeStrategies() {
        const quantity = this.formValue.strategy_capital.value / parseFloat(this.formValue.strategy_buy_price.value);
        const payload = {
            coin_pair: this.formValue.strategy_pairs.value,
            capital: this.formValue.strategy_capital.value,
            quantity: Math.round(parseFloat(quantity.toFixed(3))),
            price: parseFloat(this.formValue.strategy_buy_price.value),
            n_strategy: this.formValue.strategy_size.value,
            order: this.formValue.strategy_direction.value
        };
        // console.log(payload);
        this.actionService.setStrategies(payload).subscribe((resp) => {
            if (resp) {
                this.close();
                this.actionService.getBtcBalance().subscribe();
                this.alertService.addMessage('success', resp.success);
            }
        }, (error) => {
            this.close();
            this.alertService.addMessage('danger', error.error);
        });
    }
    editStrategy() {
        this.openConfirmModal();
    }
    openConfirmModal() {
        this.confirmModal.show('modal-lg');
    }
    close() {
        this.confirmModal.dismiss();
    }
    addFees(value) {
        // console.log(value);
        const taxed = value + ((value / 100) * 0.1);
        // console.log('value taxed', taxed);
        this.formValue.strategy_capital_taxed.setValue(taxed);
    }
    get formValue() {
        return this.strategiesForm.controls;
    }
}
StrategiesComponent.ɵfac = function StrategiesComponent_Factory(t) { return new (t || StrategiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_action_service__WEBPACK_IMPORTED_MODULE_5__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"])); };
StrategiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StrategiesComponent, selectors: [["strategies-component"]], viewQuery: function StrategiesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confirmModal = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])], decls: 80, vars: 27, consts: [[1, "sub-header"], [1, "row"], [1, "col-sm-2"], ["for", "single-order"], ["value", "single", "type", "radio", "id", "single-order", 3, "ngModel", "ngModelChange"], [1, "col-sm-3"], ["for", "multiple-order"], ["type", "radio", "value", "multi", "id", "multiple-order", 3, "ngModel", "ngModelChange"], [1, "col-sm-7"], [1, "strategies-container"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["class", "col-sm-3 form-group", 4, "ngIf"], ["class", "col-sm-9 form-group", 4, "ngIf"], [1, "col-sm-3", "form-group"], ["for", "size_pairs"], [1, "col-sm-9", "form-group", "custom-slider"], ["formControlName", "strategy_pairs_size", "id", "size_pairs", 3, "options", "ngModelChange"], ["for", "select-pairs"], [1, "col-sm-9", "form-group"], ["formControlName", "strategy_pairs", "id", "select-pairs", 1, "form-control", 3, "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "buy-price"], ["formControlName", "strategy_capital", "type", "number", "id", "capital", 1, "form-control", "inputStr"], [4, "ngIf"], ["formControlName", "strategy_buy_price", "type", "number", "id", "buy-price", 1, "form-control", "inputStr"], ["class", "col-sm-9 form-group custom-slider", 4, "ngIf"], [1, "btn", "start-btn", "float-right", 3, "disabled"], ["confirmModal", ""], [1, "app-modal-header"], [1, "app-modal-body", "text-center"], [1, "btn", "btn-danger", "float-left", 3, "click"], [1, "btn", "start-btn", "float-right", 3, "click"], ["for", "strategy-name"], ["formControlName", "strategy_name", "type", "text", "id", "strategy-name", 1, "form-control", 3, "blur"], [3, "value"], ["for", "sell-price"], ["formControlName", "strategy_sell_price", "type", "number", "id", "sell-price", 1, "form-control", "inputStr"], ["for", "direction"], ["formControlName", "strategy_direction", "type", "number", "id", "direction", 1, "form-control", "inputStr"], ["value", "up"], ["value", "down"], ["formControlName", "strategy_size", 3, "options"]], template: function StrategiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Strategie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StrategiesComponent_Template_input_ngModelChange_5_listener($event) { return ctx.strategyType = $event; })("ngModelChange", function StrategiesComponent_Template_input_ngModelChange_5_listener() { return ctx.manageValidators(ctx.strategyType); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Ordine singolo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StrategiesComponent_Template_input_ngModelChange_9_listener($event) { return ctx.strategyType = $event; })("ngModelChange", function StrategiesComponent_Template_input_ngModelChange_9_listener() { return ctx.manageValidators(ctx.strategyType); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ordine multiplo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StrategiesComponent_Template_form_ngSubmit_13_listener() { return ctx.openConfirmModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StrategiesComponent_div_15_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, StrategiesComponent_div_16_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Satoshi max:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngx-slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StrategiesComponent_Template_ngx_slider_ngModelChange_21_listener() { return ctx.loadPairs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Seleziona scambio: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StrategiesComponent_Template_select_ngModelChange_28_listener() { return ctx.loadPrices(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, StrategiesComponent_option_30_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Capitale BTC:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "(tasse escluse)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Prezzo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, StrategiesComponent_span_41_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, StrategiesComponent_div_45_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, StrategiesComponent_div_46_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, StrategiesComponent_div_47_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, StrategiesComponent_div_48_Template, 6, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, StrategiesComponent_div_49_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, StrategiesComponent_div_50_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "AVVIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "modal", null, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Conferma azione");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, StrategiesComponent_p_68_Template, 3, 4, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, StrategiesComponent_span_71_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, StrategiesComponent_p_72_Template, 2, 1, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, StrategiesComponent_p_73_Template, 2, 1, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "CONFERMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StrategiesComponent_Template_button_click_76_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "DECLINA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StrategiesComponent_Template_button_click_78_listener() { return ctx.strategyType === "single" ? ctx.initializeStrategy() : ctx.initializeStrategies(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "CONFERMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.strategyType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.strategyType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.strategiesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.optionsStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(N\u00B0 ", ctx.strLength, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pairs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.strategiesForm.invalid || ctx.isStrPresent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Stai inizializzando \"", ctx.strategyType === "single" ? ctx.formValue.strategy_name.value : "un ordine Multiplo", "\" con i seguenti settaggi:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Scambio: ", ctx.formValue.strategy_pairs.value, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Prezzo di compera: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](67, 24, ctx.formValue.strategy_buy_price.value, "1.1-8"), " BTC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Capitale: ", ctx.formValue.strategy_capital.value, " BTC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.strategyType === "multi");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".strategies-container[_ngcontent-%COMP%] {\n  max-width: 60%;\n  margin-top: 35px;\n  \n  \n}\n.strategies-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .strategies-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.strategies-container[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.custom-slider[_ngcontent-%COMP%]   .ngx-slider.ngx-slider-pointer[_ngcontent-%COMP%] {\n  width: 22px !important;\n  height: 22px !important;\n  background-color: #183153 !important;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzaS9Eb2N1bWVudGkvcHJvamVjdC9jcnlwdG9EYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2hvbWUvc3RyYXRlZ2llcy9zdHJhdGVnaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvc3RyYXRlZ2llcy9zdHJhdGVnaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUUsY0FBQTtFQUNBLGdCQUFBO0VBR0EsZ0NBQUE7RUFRQSxZQUFBO0FDVkY7QURHRTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUNESjtBRE1FO0VBQ0UsMEJBQUE7QUNKSjtBRGFJO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQ1ZOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL3N0cmF0ZWdpZXMvc3RyYXRlZ2llcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnN0cmF0ZWdpZXMtY29udGFpbmVyIHtcblxuICBtYXgtd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXRvcDogMzVweDtcblxuXG4gIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xuICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuXG4gIC8qIEZpcmVmb3ggKi9cbiAgaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgfVxuXG5cblxuXG59XG4uY3VzdG9tLXNsaWRlcntcbiAgLm5neC1zbGlkZXJ7XG4gICAgJi5uZ3gtc2xpZGVyLXBvaW50ZXJ7XG4gICAgICB3aWR0aDogMjJweCAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzMTUzICFpbXBvcnRhbnQ7XG4gICAgICBvcGFjaXR5OjAuODtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG4iLCIuc3RyYXRlZ2llcy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG4gIC8qIEZpcmVmb3ggKi9cbn1cbi5zdHJhdGVnaWVzLWNvbnRhaW5lciBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbi5zdHJhdGVnaWVzLWNvbnRhaW5lciBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuLnN0cmF0ZWdpZXMtY29udGFpbmVyIGlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4uY3VzdG9tLXNsaWRlciAubmd4LXNsaWRlci5uZ3gtc2xpZGVyLXBvaW50ZXIge1xuICB3aWR0aDogMjJweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MzE1MyAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StrategiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'strategies-component',
                templateUrl: './strategies.component.html',
                styleUrls: ['./strategies.component.scss'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: _core_services_action_service__WEBPACK_IMPORTED_MODULE_5__["ActionService"] }, { type: _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }]; }, { confirmModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['confirmModal']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/alert/alert.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/shared/alert/alert.service.ts");



const _c0 = ["alertContainer"];
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.close = (currentAlert) => {
            $(currentAlert).alert('close');
        };
    }
    ngOnInit() {
        this.alertService.getMessage().subscribe(alert => {
            const currentAlert = $(`<div class="alert alert-${alert.type} alert-dismissible fade" role="alert">${alert.message}<button type="button" class="close" data-dismiss="alert" ><span aria-hidden="true">&times;</span></button></div>`);
            $(this.el.nativeElement).append(currentAlert);
            setTimeout(() => {
                currentAlert.addClass('show');
            });
            setTimeout(() => {
                $(currentAlert).alert('close');
            }, 15000);
        });
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], viewQuery: function AlertComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, decls: 2, vars: 0, consts: [["id", "alert_container", 1, "container"], ["alertContainer", ""]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alert',
                templateUrl: 'alert.component.html'
            }]
    }], function () { return [{ type: _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['alertContainer']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/alert/alert.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/alert/alert.service.ts ***!
  \***********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    addMessage(type, message) {
        this.subject.next({ type, message });
    }
    getMessage() {
        return this.subject.asObservable();
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/http-resources/api.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/http-resources/api.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: APIInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIInterceptor", function() { return APIInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





class APIInterceptor {
    constructor(_sanitazer) {
        this._sanitazer = _sanitazer;
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
    }
    intercept(req, next) {
        const escapeHtml = (unsafe) => {
            return unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
        };
        let apiReq = req.clone({ url: this.api + req.url });
        if (lodash__WEBPACK_IMPORTED_MODULE_2__["isString"](apiReq)) {
            // @ts-ignore
            apiReq = this._sanitazer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, escapeHtml(apiReq));
        }
        return next.handle(apiReq);
    }
}
APIInterceptor.ɵfac = function APIInterceptor_Factory(t) { return new (t || APIInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
APIInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: APIInterceptor, factory: APIInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](APIInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/http-resources/error.interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/http-resources/error.interceptor.ts ***!
  \************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alert/alert.service */ "./src/app/shared/alert/alert.service.ts");






class ErrorInterceptor {
    constructor(authService, alert) {
        this.authService = authService;
        this.alert = alert;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authService.logout();
            }
            const error = err.error;
            this.alert.addMessage('danger', error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/http-resources/token.interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/http-resources/token.interceptor.ts ***!
  \************************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TokenInterceptor {
    constructor() {
    }
    intercept(req, next) {
        const token = localStorage.getItem('token');
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(req);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/modal/modal.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modal/modal.component.ts ***!
  \*************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["myModal"];
const _c1 = [[["", 8, "app-modal-header"]], [["", 8, "app-modal-body"]], [["", 8, "app-modal-footer"]]];
const _c2 = [".app-modal-header", ".app-modal-body", ".app-modal-footer"];
// const $ = require('jquery');
class ModalComponent {
    constructor() {
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    show(optClass) {
        // open modal using jQuery
        ($(this.myModal.nativeElement)).children().addClass(optClass ? optClass : '').end().modal({
            backdrop: 'static',
            keyboard: false
        });
    }
    isVisible() {
        return ($(this.myModal.nativeElement)).hasClass('show');
    }
    dismiss() {
        // close modal using jQuery
        ($(this.myModal.nativeElement)).modal('hide');
        this.closed.emit();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myModal = _t.first);
    } }, outputs: { closed: "closed" }, ngContentSelectors: _c2, decls: 13, vars: 0, consts: [["id", "myModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", 1, "modal", "fade"], ["myModal", ""], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_6_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](12, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'modal',
                templateUrl: 'modal.component.html',
            }]
    }], function () { return []; }, { myModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myModal']
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: false,
    local: true,
    // api: 'http://127.0.0.1:3000/'
    // api: 'http://ec2-15-160-2-188.eu-south-1.compute.amazonaws.com:3000/' --Andrea
    api: 'http://ec2-35-152-50-80.eu-south-1.compute.amazonaws.com:3000/'
    // api: 'http://ec2-35-152-99-6.eu-south-1.compute.amazonaws.com:3000/' -- Leo
    // api: 'http://ec2-15-161-232-210.eu-south-1.compute.amazonaws.com:3000/' -- Misi86
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/isi/Documenti/project/cryptoDashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map