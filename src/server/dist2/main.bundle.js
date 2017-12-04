webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_app_component__ = __webpack_require__("../../../../../src/app/components/main/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_topNav_topNav_component__ = __webpack_require__("../../../../../src/app/components/topNav/topNav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_productsContent_listOfProducts_component__ = __webpack_require__("../../../../../src/app/components/productsContent/listOfProducts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_leftMenu_leftMenu_component__ = __webpack_require__("../../../../../src/app/components/leftMenu/leftMenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_order_order_component__ = __webpack_require__("../../../../../src/app/components/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_logout_logout_component__ = __webpack_require__("../../../../../src/app/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components_main_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_topNav_topNav_component__["a" /* TopNavComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_productsContent_listOfProducts_component__["a" /* ListOfProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_leftMenu_leftMenu_component__["a" /* LeftMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_order_order_component__["a" /* OrderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_logout_logout_component__["a" /* LogoutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_12__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_14__services_view_service__["a" /* ViewService */], __WEBPACK_IMPORTED_MODULE_16__services_socket_service__["a" /* SocketService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__components_main_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2\">\n    <left-menu\n      (selectedCategories)=\"changeSelectedCategory($event)\"\n      (priceFromEmiter)=\"getPriceFrom($event)\"\n      (priceToEmiter)=\"getPriceTo($event)\"\n      (nameEmiter)=\"getName($event)\"\n    ></left-menu>\n  </div>\n  <div class=\"col-sm-10\">\n    <list-of-products\n    [numberOfPages]=\"numberOfPages\"\n    [currentPage]=\"currentPage\"\n    [products] = \"products\"\n    [numberOfPages] = \"numberOfPages\"\n    (currentPageEmiter)=\"pagination($event)\">\n    </list-of-products>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(productService) {
        this.productService = productService;
        this.selectedCategories = [];
        this.products = [];
        this.currentPage = 1;
    }
    DashboardComponent.prototype.getName = function (name) {
        this.productName = name;
        console.log(this.productName);
        this.getNumberOfPages(this.selectedCategories, this.priceFrom, this.priceTo, this.productName);
        this.getProducts(this.selectedCategories, 1, this.priceFrom, this.priceTo, this.productName);
    };
    DashboardComponent.prototype.getPriceFrom = function (price) {
        this.priceFrom = price;
        this.getNumberOfPages(this.selectedCategories, this.priceFrom, this.priceTo, this.productName);
        this.getProducts(this.selectedCategories, 1, this.priceFrom, this.priceTo, this.productName);
    };
    DashboardComponent.prototype.getPriceTo = function (price) {
        this.priceTo = price;
        this.getNumberOfPages(this.selectedCategories, this.priceFrom, this.priceTo, this.productName);
        this.getProducts(this.selectedCategories, 1, this.priceFrom, this.priceTo, this.productName);
    };
    DashboardComponent.prototype.changeSelectedCategory = function (categories) {
        this.selectedCategories = categories;
        this.getNumberOfPages(categories, this.priceFrom, this.priceTo, this.productName);
        this.getProducts(this.selectedCategories, 1, this.priceFrom, this.priceTo, this.productName);
        this.currentPage = 1;
    };
    DashboardComponent.prototype.pagination = function (page) {
        this.currentPage = this.currentPage + page;
        if (this.currentPage > this.numberOfPages) {
            this.currentPage = this.numberOfPages;
        }
        if (this.currentPage < 1) {
            this.currentPage = 1;
        }
        this.getProducts(this.selectedCategories, this.currentPage, this.priceFrom, this.priceTo, this.productName);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.priceFrom = -1;
        this.priceTo = 9999999;
        this.productName = ' ';
        this.productService.getCategories().subscribe(function (data) {
            _this.selectedCategories = data;
            _this.getProducts(data, 1, _this.priceFrom, _this.priceTo, ' ');
            _this.getNumberOfPages(data, _this.priceFrom, _this.priceTo, ' ');
        });
    };
    DashboardComponent.prototype.getNumberOfPages = function (categories, priceFrom, priceTo, productName) {
        var _this = this;
        this.productService.getProductsNumber(categories, priceFrom, priceTo, productName)
            .subscribe(function (numberOfPages) { return _this.numberOfPages = numberOfPages['_body']; });
    };
    DashboardComponent.prototype.getProducts = function (categories, currentPage, priceFrom, priceTo, productName) {
        var _this = this;
        this.productService.getProducts(categories, currentPage, priceFrom, priceTo, productName).subscribe(function (products) {
            return _this.products = products;
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styleUrls: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/leftMenu/leftMenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/leftMenu/leftMenu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"categories list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let category of categories\" [class.selected]=\"selected.indexOf(category) > -1\"\n      (click)=\"onSelect(category)\">\n    {{category}}\n  </li>\n</ul>\n<br>\n\nprice:\n<div class=\"form-group row\">\n  <div class=\"col-lg-6\">\n    <input type=\"number\" class=\"form-control\" placeholder=\"from\" [(ngModel)]=\"priceFrom\" (blur)=\"onBlurFrom()\">\n  </div>\n  <div class=\"col-lg-6\">\n    <input type=\"number\" class=\"form-control\" placeholder=\"to\" [(ngModel)]=\"priceTo\" (blur)=\"onBlurTo()\">\n  </div>\n</div>\n\nname\n<div class=\"form-group row\">\n  <div class=\"col-lg-12\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"from\" [(ngModel)]=\"name\" (change)=\"onBlurName()\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/leftMenu/leftMenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeftMenuComponent = (function () {
    function LeftMenuComponent(productService) {
        this.productService = productService;
        this.selected = [];
        this.selectedCategories = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.priceFromEmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.priceToEmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.nameEmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    LeftMenuComponent.prototype.onSelect = function (category) {
        var index = this.selected.indexOf(category);
        if (index > -1) {
            this.selected.splice(index, 1);
        }
        else {
            this.selected.push(category);
        }
        (this.selected.length === 0) ?
            this.selectedCategories.emit(this.categories) :
            this.selectedCategories.emit(this.selected);
    };
    LeftMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getCategories().subscribe(function (data) { return _this.categories = data; });
    };
    LeftMenuComponent.prototype.onBlurFrom = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNumber"])(this.priceFrom)) {
            this.priceFromEmiter.emit(this.priceFrom);
        }
        else {
            this.priceFromEmiter.emit(-1);
        }
    };
    LeftMenuComponent.prototype.onBlurTo = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNumber"])(this.priceTo)) {
            this.priceToEmiter.emit(this.priceTo);
        }
        else {
            this.priceToEmiter.emit(99999999);
        }
    };
    LeftMenuComponent.prototype.onBlurName = function () {
        if (this.name === '') {
            this.nameEmiter.emit(' ');
        }
        else {
            this.nameEmiter.emit(this.name);
        }
    };
    return LeftMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], LeftMenuComponent.prototype, "selectedCategories", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], LeftMenuComponent.prototype, "priceFromEmiter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], LeftMenuComponent.prototype, "priceToEmiter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], LeftMenuComponent.prototype, "nameEmiter", void 0);
LeftMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'left-menu',
        template: __webpack_require__("../../../../../src/app/components/leftMenu/leftMenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/leftMenu/leftMenu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], LeftMenuComponent);

var _a;
//# sourceMappingURL=leftMenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"status != 'success'\">\n  <h1>Username</h1>\n  <div class=\"form-group\">\n    <label for=\"nameAndSurname\">Username</label>\n    <input type=\"email\" class=\"form-control\" id=\"nameAndSurname\" aria-describedby=\"emailHelp\"\n           placeholder=\"Username\" required=\"required\" (keyup)=\"insertUsername($event)\" >\n  </div>\n  <h1>Password</h1>\n  <div class=\"form-group\">\n    <label for=\"address\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"address\" placeholder=\"password\" required=\"required\" (keyup)=\"insertPassword($event)\">\n  </div>\n  <button class=\"btn\" (click)=\"login()\">Login</button>\n</form>\n\n<div class=\"alert alert-success\" *ngIf=\"isSuccess\">\n  <strong>Success!</strong>\n</div>\n<button class=\"btn\" routerLink=\"/dashboard\" *ngIf=\"isSuccess\">Go to dashboard</button>\n\n<div class=\"alert alert-danger\" *ngIf=\"status === 'failure'\">\n  <strong>Wrong login or password.</strong>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_user__ = __webpack_require__("../../../../../src/app/data/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(userService, orderService, viewService) {
        this.userService = userService;
        this.orderService = orderService;
        this.viewService = viewService;
    }
    LoginComponent.prototype.insertUsername = function (event) {
        this.username = event.target.value;
    };
    LoginComponent.prototype.insertPassword = function (event) {
        this.password = event.target.value;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.username);
        console.log(__WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__["Md5"].hashStr(this.password).toString());
        console.log(this.password);
        this.userService.login(new __WEBPACK_IMPORTED_MODULE_4__data_user__["a" /* User */](this.username, __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__["Md5"].hashStr(this.password).toString(), '')).subscribe(function (p) {
            if (p.status === 200) {
                _this.status = 'success';
                sessionStorage.setItem('token', p.text());
                _this.viewService.setView('buttons');
            }
            else {
                _this.status = 'failure';
            }
        });
    };
    LoginComponent.prototype.getOrders = function () {
        this.orderService.getOrders();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_view_service__["a" /* ViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_view_service__["a" /* ViewService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" *ngIf=\"status === 'success'\">\n  <strong>Success!</strong>\n</div>\n<button class=\"btn\" (click)=\"changeView('login')\" *ngIf=\"status === 'success'\">Login</button>\n<button class=\"btn\" (click)=\"logout()\" *ngIf=\"status !== 'success'\">Logout</button>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(userService, viewService) {
        this.userService = userService;
        this.viewService = viewService;
        this.status = '';
    }
    LogoutComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout(sessionStorage.getItem('token'))
            .subscribe(function (p) {
            console.log(p);
            if (p.status === 200) {
                _this.status = 'success';
                sessionStorage.setItem('token', '');
                sessionStorage.setItem('login', '');
            }
            else {
                _this.status = 'failure';
            }
        });
    };
    LogoutComponent.prototype.changeView = function (viewValue) {
        this.viewService.setView(viewValue);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'logout',
        template: __webpack_require__("../../../../../src/app/components/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_view_service__["a" /* ViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_view_service__["a" /* ViewService */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#top_bar {\n  background: #696969;\n  color: white;\n}\ntop-nav {\n  width: 100%;\n}\nnav {\n  margin-bottom: 1%;\n}\n\ncart {\n  position: absolute;\n  width: 98%;\n  margin-left: 1%;\n  margin-right: 1%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar bg-dark text-light\" >\n  <top-nav></top-nav>\n</nav>\n<login *ngIf=\"view =='login'\"></login>\n<dashboard *ngIf=\"view =='dashboard'\"></dashboard>\n<order *ngIf=\"view =='order'\"></order>\n\n<div *ngIf=\"view== 'buttons'\">\n  <button class=\"btn\" (click)=\"changeView('dashboard')\">products</button>\n  <button class=\"btn\" (click)=\"changeView('order')\">orders</button>\n</div>\n\n<logout *ngIf=\"view == 'logout'\"></logout>\n"

/***/ }),

/***/ "../../../../../src/app/components/main/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(viewService) {
        this.viewService = viewService;
        this.title = 'app';
        this.view = 'buttons';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewService.view.subscribe(function (view) {
            return _this.view = view;
        });
    };
    AppComponent.prototype.changeView = function (view) {
        this.viewService.setView(view);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/main/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_view_service__["a" /* ViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_view_service__["a" /* ViewService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p.product-name {\n  font-weight: bolder;\n}\n.card {\n  margin-bottom: 10px;\n}\n.add-to-cart {\n  position: absolute;\n  right: 3%;\n  top: 30%;\n  width: auto;\n}\n#pagination {\n  position: absolute;\n  right: 3%;\n}\n.approve {\n  position: absolute;\n  right: 12%;\n  top: 30%;\n  width: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2\">\n    <ul class=\"categories list-group\">\n      <li class=\"list-group-item\" (click)=\"onSelect('accepted')\">Accepted</li>\n      <li class=\"list-group-item\" (click)=\"onSelect('notAccepted')\">Not accepted</li>\n    </ul>\n  </div>\n  <div class=\"col-sm-10\">\n    <div class=\"card\" *ngFor=\"let order of orders\">\n      <div class=\"card-body\">\n        <p class=\"product-name\">{{order.fullName}}</p>\n        <p class=\"product-description\">{{order.price.toFixed(2)}}</p>\n\n      </div>\n      <button type=\"button\" class=\"btn btn-secondary approve\" data-toggle=\"modal\" data-target=\"#myModal\"\n              (click)=\"approve(order)\" *ngIf=\"! order.isRealised\"> Approve\n      </button>\n\n      <button type=\"button\"class=\"btn btn-secondary add-to-cart\" data-toggle=\"modal\" data-target=\"#myModal\"\n              (click)=\"selectOrder(order)\">Details</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-2\">\n  </div>\n\n  <div class=\"col-sm-10\">\n    <div class=\"card\" *ngIf=\"selectedOrder.fullName !== ''\">\n\n      <h4 class=\"card-header\">Order details. Total {{selectedOrder.price.toFixed(2)}} zł</h4>\n      <div class=\"card-block\">\n\n        <div *ngFor=\"let product of selectedOrder.products\">\n        <h5 class=\"card-title\"> {{product.product.name}}</h5>\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">\n              <b>description:</b> {{product.product.description}}\n            </li>\n            <li class=\"list-group-item\">\n              <b>category:</b> {{product.product.category}}\n            </li>\n            <li class=\"list-group-item\">\n              <b>price:</b> {{product.product.price.toFixed(2)}}\n            </li>\n            <li class=\"list-group-item\">\n              <b>quantity:</b> {{product.number}}\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <!--<div class=\"col-sm-10\">-->\n    <!--<div *ngIf=\"selectedOrder.fullName !== ''\">-->\n    <!--<div class=\"row\"></div>-->\n    <!--<div class=\"col-sm-10\">-->\n    <!--<div class=\"card\" *ngFor=\"let product of selectedOrder.products\">-->\n    <!--<div class=\"card-body\">-->\n    <!--<p class=\"product-name\">{{product.product.name}}</p>-->\n    <!--<p class=\"product-description\">{{product.number}}</p>-->\n    <!--</div>-->\n    <!--<button class=\"btn btn-secondary add-to-cart\">{{product.product.price}}</button>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--</div>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_order__ = __webpack_require__("../../../../../src/app/data/order.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderComponent = (function () {
    function OrderComponent(orderService) {
        this.orderService = orderService;
        this.orders = [];
        this.selectedOrder = new __WEBPACK_IMPORTED_MODULE_2__data_order__["a" /* Order */]('', '', 0, [], false);
    }
    OrderComponent.prototype.onSelect = function (type) {
        var _this = this;
        this.selectedOrder = new __WEBPACK_IMPORTED_MODULE_2__data_order__["a" /* Order */]('', '', 0, [], false);
        if (type === 'accepted') {
            this.orderService.getRealizedOrders(sessionStorage.getItem('token')).subscribe(function (order) {
                _this.orders = order;
            });
        }
        else if (type === 'notAccepted') {
            this.orderService.getNotRealizedOrders(sessionStorage.getItem('token')).subscribe(function (order) {
                _this.orders = order;
            });
        }
    };
    OrderComponent.prototype.approve = function (order) {
        var _this = this;
        this.orderService.approveOrder(sessionStorage.getItem('token'), order)
            .subscribe(function (x) { return _this.onSelect('notAccepted'); });
    };
    OrderComponent.prototype.selectOrder = function (order) {
        this.selectedOrder = order;
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'order',
        template: __webpack_require__("../../../../../src/app/components/order/order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/order/order.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === "function" && _a || Object])
], OrderComponent);

var _a;
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/productsContent/listOfProducts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p.product-name {\n  font-weight: bolder;\n}\n.card {\n  margin-bottom: 10px;\n}\n.add-to-cart {\n  position: absolute;\n  right: 3%;\n  top: 30%;\n}\n#pagination {\n  position: absolute;\n  right: 3%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/productsContent/listOfProducts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngFor=\"let product of products\">\n  <div class=\"card-body\">\n    <p class=\"product-name\">{{product.name}}</p>\n    <p class=\"product-description\">{{product.description}}</p>\n\n  </div>\n  <button class=\"btn btn-secondary add-to-cart\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"selectProduct(product)\">Edit</button>\n</div>\n\n<div class=\"btn-group\" id=\"pagination\">\n  <button class=\"btn\" (click)=\"changePage(-1)\"><</button>\n  <button class=\"btn btn-light\" disabled>{{currentPage}} / {{numberOfPages}}</button>\n  <button class=\"btn\" (click)=\"changePage(1)\">></button>\n</div>\n<button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"addProduct()\"></button>\n\n<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Edit product {{currentProduct.name}}</h4>\n      </div>\n      <div class=\"modal-body\">\n\n        name:\n        <div class=\"form-group row\">\n          <div class=\"col-lg-12\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{currentProduct.name}}\" [(ngModel)]=\"currentProduct.name\">\n          </div>\n        </div>\n\n        description:\n        <div class=\"form-group row\">\n          <div class=\"col-lg-12\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{currentProduct.description}}\" [(ngModel)]=\"currentProduct.description\">\n          </div>\n        </div>\n\n        price:\n        <div class=\"form-group row\">\n          <div class=\"col-lg-12\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{currentProduct.price}}\" [(ngModel)]=\"currentProduct.price\">\n          </div>\n        </div>\n\n        category:\n        <div class=\"form-group row\">\n          <div class=\"col-lg-12\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{currentProduct.category}}\" [(ngModel)]=\"currentProduct.category\">\n          </div>\n        </div>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" *ngIf=\"currentProduct._id !== ''\" (click)=\"editProduct()\">Edit</button>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" *ngIf=\"currentProduct._id === ''\" (click)=\"editProduct()\">Create</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/productsContent/listOfProducts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListOfProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_product__ = __webpack_require__("../../../../../src/app/data/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListOfProductsComponent = (function () {
    function ListOfProductsComponent(productService, socketService) {
        this.productService = productService;
        this.socketService = socketService;
        this.currentPage = 1;
        this.currentPageEmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.currentProduct = new __WEBPACK_IMPORTED_MODULE_1__data_product__["a" /* Product */]('', '', '', 0, '');
    }
    ListOfProductsComponent.prototype.selectProduct = function (product) {
        this.currentProduct = product;
    };
    ListOfProductsComponent.prototype.addProduct = function () {
        this.currentProduct = new __WEBPACK_IMPORTED_MODULE_1__data_product__["a" /* Product */]('', '', '', 0, '');
    };
    ListOfProductsComponent.prototype.changePage = function (page) {
        this.currentPageEmiter.emit(page);
    };
    ListOfProductsComponent.prototype.editProduct = function () {
        if (this.currentProduct._id === '') {
            this.productService.addProduct(this.currentProduct).subscribe();
            this.socketService.sendMessage('Added new product: ' + this.currentProduct.name);
        }
        else {
            this.productService.editProduct(this.currentProduct).subscribe();
            this.socketService.sendMessage("Edited product: " + this.currentProduct.name);
        }
    };
    return ListOfProductsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_product__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_product__["a" /* Product */]) === "function" && _a || Object)
], ListOfProductsComponent.prototype, "products", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ListOfProductsComponent.prototype, "currentPage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ListOfProductsComponent.prototype, "numberOfPages", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ListOfProductsComponent.prototype, "currentPageEmiter", void 0);
ListOfProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'list-of-products',
        template: __webpack_require__("../../../../../src/app/components/productsContent/listOfProducts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/productsContent/listOfProducts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_socket_service__["a" /* SocketService */]) === "function" && _c || Object])
], ListOfProductsComponent);

var _a, _b, _c;
//# sourceMappingURL=listOfProducts.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/topNav/topNav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#go-to-cart {\n  position: absolute;\n  right: 3%;\n  height: 25px;\n  line-height: 10%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/topNav/topNav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\" (click)=\"changeView('buttons')\">\n    Sport shop Admin\n  </div>\n  <div class=\"col-sm-8\" id=\"cart-details\">\n\n    <button class=\"btn btn-sm\" id=\"go-to-cart\" (click)=\"changeView('logout')\">logout</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/topNav/topNav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopNavComponent = (function () {
    function TopNavComponent(viewService) {
        this.viewService = viewService;
    }
    TopNavComponent.prototype.changeView = function (view) {
        this.viewService.setView(view);
    };
    return TopNavComponent;
}());
TopNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'top-nav',
        template: __webpack_require__("../../../../../src/app/components/topNav/topNav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/topNav/topNav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_view_service__["a" /* ViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_view_service__["a" /* ViewService */]) === "function" && _a || Object])
], TopNavComponent);

var _a;
//# sourceMappingURL=topNav.component.js.map

/***/ }),

/***/ "../../../../../src/app/data/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order(fullName, address, price, products, isRealised) {
        this.fullName = fullName;
        this.address = address;
        this.price = price;
        this.products = products;
        this.isRealised = isRealised;
    }
    return Order;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ "../../../../../src/app/data/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(_id, name, description, price, category) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/data/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(login, password, role) {
        this.login = login;
        this.password = password;
        this.role = role;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = (function () {
    // getProductHttp = 'http://localhost:2403/users/login';
    function OrderService(http) {
        this.http = http;
        this.getProductHttp = 'http://localhost:5000/orders';
    }
    OrderService.prototype.getOrders = function () {
        return this.http.get(this.getProductHttp);
    };
    OrderService.prototype.getRealizedOrders = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'token': token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.getProductHttp + '/realized', options).map(function (response) { return response.json(); });
    };
    OrderService.prototype.getNotRealizedOrders = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'token': token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.getProductHttp + '/notrealized', options).map(function (response) { return response.json(); });
    };
    OrderService.prototype.approveOrder = function (token, order) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'token': token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.getProductHttp + '/approve', order, options);
    };
    return OrderService;
}());
OrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], OrderService);

var _a;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.getProductHttp = 'http://localhost:5000/products';
    }
    ProductService.prototype.getProducts = function (categories, page, priceFrom, priceTo, productName) {
        return this.http
            .get(this.getProductHttp +
            '/name/' + productName +
            '/categories/' + categories +
            '/page/' + page +
            '/pricefrom/' + priceFrom +
            '/priceTo/' + priceTo)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.getCategories = function () {
        return this.http.get(this.getProductHttp + '/categories').map(function (response) { return response.json(); });
    };
    ProductService.prototype.getProductsNumber = function (categories, priceFrom, priceTo, productName) {
        return this.http
            .get(this.getProductHttp +
            '/name/' + productName +
            '/categories/' + categories +
            '/pricefrom/' + priceFrom +
            '/priceTo/' + priceTo +
            '/quantity')
            .map(function (response) { return response; });
    };
    ProductService.prototype.editProduct = function (product) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */](headers);
        console.log(product);
        return this.http
            .put(this.getProductHttp + '/' + product._id, product, options);
    };
    ProductService.prototype.addProduct = function (product) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */](headers);
        console.log(product);
        return this.http
            .post(this.getProductHttp, product, options);
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SocketService = (function () {
    function SocketService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.itemsUrl = 'http://localhost:8080/api/products';
        this.promoUrl = 'http://localhost:8080/api/products/promo';
        this.promoDeleteUrl = 'http://localhost:8080/api/products/promo_del';
        this.categoriesUrl = 'http://localhost:8080/api/categories';
        this.connection = this.getMessage().subscribe();
    }
    SocketService.prototype.getMessage = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__('http://localhost:5000');
            _this.socket.on('message', function (message) {
                observer.next(message.data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.sendMessage = function (message) {
        console.log('sending message... ' + message);
        this.socket.emit('editProduct', message);
    };
    SocketService.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], SocketService);

var _a, _b;
//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    // getProductHttp = 'http://localhost:2403/users/login';
    function UserService(http) {
        this.http = http;
        this.getProductHttp = 'http://localhost:5000/users';
    }
    UserService.prototype.login = function (user) {
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */](headers);
        return this.http.post(this.getProductHttp + '/login/admin', user, options);
    };
    UserService.prototype.logout = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'token': token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.getProductHttp + '/logout', null, options);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/view.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ViewService = (function () {
    function ViewService() {
        this.viewSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('login');
        this.view = this.viewSource.asObservable();
    }
    ViewService.prototype.setView = function (view) {
        this.viewSource.next(view);
    };
    return ViewService;
}());
ViewService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ViewService);

//# sourceMappingURL=view.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map