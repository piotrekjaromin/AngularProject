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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_app_component__ = __webpack_require__("../../../../../src/app/components/main/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_leftMenu_leftMenu_component__ = __webpack_require__("../../../../../src/app/components/leftMenu/leftMenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_productsContent_listOfProducts_component__ = __webpack_require__("../../../../../src/app/components/productsContent/listOfProducts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_topNav_topNav_component__ = __webpack_require__("../../../../../src/app/components/topNav/topNav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_endForm_endForm_component__ = __webpack_require__("../../../../../src/app/components/endForm/endForm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_registration_registration_component__ = __webpack_require__("../../../../../src/app/components/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_logout_logout_component__ = __webpack_require__("../../../../../src/app/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_order_order_component__ = __webpack_require__("../../../../../src/app/components/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
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
            __WEBPACK_IMPORTED_MODULE_2__components_main_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_leftMenu_leftMenu_component__["a" /* LeftMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_productsContent_listOfProducts_component__["a" /* ListOfProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_topNav_topNav_component__["a" /* TopNavComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_endForm_endForm_component__["a" /* EndFormComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_order_order_component__["a" /* OrderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_8__services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_18__services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_19__services_view_service__["a" /* ViewService */], __WEBPACK_IMPORTED_MODULE_20__services_socket_service__["a" /* SocketService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__components_main_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n\n.table {\n  table-layout: fixed;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Your products card</h1>\n\n\n<table class=\"table\">\n  <thead>\n  <tr>\n    <th>Product</th>\n    <th>Price</th>\n    <th>Value</th>\n    <th>Quantity</th>\n    <th></th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let product of productFromCart\">\n    <td>{{product.product.name}}</td>\n    <td>{{(product.product.price).toFixed(2)}}</td>\n    <td>{{(product.number * product.product.price).toFixed(2)}}</td>\n    <td>\n      <button class=\"btn btn-xs\" (click)=\"changeQuantity(product.product, -1, product.number)\">-</button>\n      <button class=\"btn btn-light btn-xs\" disabled>{{product.number}}</button>\n      <button class=\"btn btn-xs\" (click)=\"changeQuantity(product.product, 1, product.number)\">+</button>\n    </td>\n    <td><button class=\"btn\" (click)=\"removeProduct(product.product)\">Remove</button></td>\n  </tr>\n  </tbody>\n\n</table>\n\n<button class=\"btn\" (click)=\"changeView('dashboard')\">Continue shopping</button>\n<button class=\"btn\" (click)=\"changeView('endform')\">Finalize</button>\n"

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
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



var CartComponent = (function () {
    function CartComponent(cartService, viewService) {
        this.cartService = cartService;
        this.viewService = viewService;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.cartProduct.subscribe(function (products) { return _this.productFromCart = products; });
    };
    CartComponent.prototype.removeProduct = function (product) {
        this.cartService.removeProductFromCard(product);
    };
    CartComponent.prototype.changeQuantity = function (product, action, productNumber) {
        if (action > 0) {
            this.cartService.addProductToCart(product);
        }
        else if (action < 0 && productNumber > 0) {
            this.cartService.removeOneProductFromCard(product);
        }
    };
    CartComponent.prototype.changeView = function (viewValue) {
        this.viewService.setView(viewValue);
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cart',
        template: __webpack_require__("../../../../../src/app/components/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cart/cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_view_service__["a" /* ViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_view_service__["a" /* ViewService */]) === "function" && _b || Object])
], CartComponent);

var _a, _b;
//# sourceMappingURL=cart.component.js.map

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

/***/ "../../../../../src/app/components/endForm/endForm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  position: absolute;\n  margin-left: 2%;\n  margin-right: 2%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/endForm/endForm.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"! isSuccess\">\n  <h1>Recipient</h1>\n  <div class=\"form-group\">\n    <label for=\"nameAndSurname\">Name and surname</label>\n    <input type=\"email\" class=\"form-control\" id=\"nameAndSurname\" aria-describedby=\"emailHelp\"\n           placeholder=\"Name and surname\" required=\"required\" (keyup)=\"insertFullname($event)\">\n  </div>\n  <h1>Address</h1>\n  <div class=\"form-group\">\n    <label for=\"address\">Address</label>\n    <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Address\" required=\"required\" (keyup)=\"insertAddress($event)\">\n  </div>\n  <button class=\"btn\" (click)=\"saveOrder()\">Finish order</button>\n</form>\n\n<div class=\"alert alert-success\" *ngIf=\"isSuccess\">\n  <strong>Success!</strong>\n</div>\n<button class=\"btn\" (click)=\"changeView('dashboard')\" *ngIf=\"isSuccess\">Go to dashboard</button>\n"

/***/ }),

/***/ "../../../../../src/app/components/endForm/endForm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_order__ = __webpack_require__("../../../../../src/app/data/order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EndFormComponent = (function () {
    function EndFormComponent(cartService, viewService) {
        this.cartService = cartService;
        this.viewService = viewService;
        this.fullName = '';
        this.address = '';
        this.isSuccess = false;
    }
    EndFormComponent.prototype.ngOnInit = function () {
        // this.userService.
    };
    EndFormComponent.prototype.saveOrder = function () {
        var _this = this;
        var login = (sessionStorage.getItem('login') === null) ? '' : sessionStorage.getItem('login');
        this.cartService.saveOrder(new __WEBPACK_IMPORTED_MODULE_2__data_order__["a" /* Order */](this.fullName, this.address, JSON.parse(sessionStorage.getItem('cartPrice')), JSON.parse(sessionStorage.getItem('shopCart')), false, login)).subscribe(function (p) {
            if (p.ok) {
                _this.isSuccess = true;
                sessionStorage.removeItem('shopCart');
                sessionStorage.removeItem('cartNumber');
                sessionStorage.removeItem('cartPrice');
                _this.cartService.reloadData();
            }
        });
    };
    EndFormComponent.prototype.insertFullname = function (event) {
        this.fullName = event.target.value;
    };
    EndFormComponent.prototype.insertAddress = function (event) {
        this.address = event.target.value;
    };
    EndFormComponent.prototype.changeView = function (viewValue) {
        this.viewService.setView(viewValue);
    };
    return EndFormComponent;
}());
EndFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'end-form',
        template: __webpack_require__("../../../../../src/app/components/endForm/endForm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/endForm/endForm.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_view_service__["a" /* ViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_view_service__["a" /* ViewService */]) === "function" && _b || Object])
], EndFormComponent);

var _a, _b;
//# sourceMappingURL=endForm.component.js.map

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

module.exports = "<div class=\"alert alert-success\" *ngIf=\"status === 'success'\">\n  <strong>Success!</strong>\n</div>\n<button class=\"btn\" (click)=\"changeView('dashboard')\" *ngIf=\"status === 'success'\">Go to dashboard</button>\n\n\n<form *ngIf=\"status !== 'success'\">\n  <div class=\"form-group\">\n    <label for=\"login\">Login</label>\n    <input type=\"email\" class=\"form-control\" id=\"login\" name=\"login\" aria-describedby=\"emailHelp\"\n            required=\"required\" [(ngModel)]=\"login\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" required=\"required\" [(ngModel)]=\"password\">\n  </div>\n  <button class=\"btn\" (click)=\"sendLogin()\">Login</button>\n</form>\n\n<div class=\"alert alert-danger\" *ngIf=\"status === 'failure'\">\n  <strong>Wrong login or password.</strong>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_user__ = __webpack_require__("../../../../../src/app/data/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
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
    function LoginComponent(userService, viewService) {
        this.userService = userService;
        this.viewService = viewService;
        this.status = '';
    }
    LoginComponent.prototype.sendLogin = function () {
        var _this = this;
        this.userService.login(new __WEBPACK_IMPORTED_MODULE_3__data_user__["a" /* User */](this.login, __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__["Md5"].hashStr(this.password).toString(), '', '', ''))
            .subscribe(function (p) {
            if (p.status === 200) {
                _this.status = 'success';
                sessionStorage.setItem('token', p.text());
                sessionStorage.setItem('login', _this.login);
                _this.userService.loggerUserSource.next(_this.login);
            }
            else {
                _this.status = 'failure';
            }
        });
    };
    LoginComponent.prototype.changeView = function (viewValue) {
        this.viewService.setView(viewValue);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_view_service__["a" /* ViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_view_service__["a" /* ViewService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
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

module.exports = "<div class=\"alert alert-success\" *ngIf=\"status === 'success'\">\n  <strong>Success!</strong>\n</div>\n<button class=\"btn\" (click)=\"changeView('dashboard')\" *ngIf=\"status === 'success'\">Go to dashboard</button>\n<button class=\"btn\" (click)=\"logout()\" *ngIf=\"status !== 'success'\">Logout</button>\n\n"

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
                _this.userService.loggerUserSource.next('');
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

module.exports = "<nav class=\"navbar bg-dark text-light\">\n  <top-nav></top-nav>\n</nav>\n\n<dashboard *ngIf=\"view === 'dashboard'\"></dashboard>\n<cart *ngIf=\"view === 'cart'\"></cart>\n<login *ngIf=\"view === 'login'\"></login>\n<registration *ngIf=\"view === 'registration'\"></registration>\n<order *ngIf=\"view === 'order'\"></order>\n<logout *ngIf=\"view === 'logout'\"></logout>\n<end-form *ngIf=\"view === 'endform'\"></end-form>\n\n<div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"changedMessage !== ''\">\n  {{changedMessage}}\n  <button type=\"button\" class=\"btn\" (click)=\"closeMessage()\">Ok</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/main/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
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
    function AppComponent(viewService, cartService, userService, socketService) {
        this.viewService = viewService;
        this.cartService = cartService;
        this.userService = userService;
        this.socketService = socketService;
        this.view = 'dashboard';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewService.view.subscribe(function (view) { return _this.view = view; });
        this.cartService.reloadData();
        this.userService.reloadData();
        this.connection = this.socketService.getMessage().subscribe(function (message) {
            _this.changedMessage = message.toString();
        });
    };
    AppComponent.prototype.closeMessage = function () {
        this.changedMessage = '';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/main/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_view_service__["a" /* ViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_view_service__["a" /* ViewService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p.product-name {\n  font-weight: bolder;\n}\n.card {\n  margin-bottom: 10px;\n}\n.add-to-cart {\n  position: absolute;\n  right: 3%;\n  top: 30%;\n  width: auto;\n}\n#pagination {\n  position: absolute;\n  right: 3%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2\">\n    <ul class=\"categories list-group\">\n      <li class=\"list-group-item\" (click)=\"onSelect('accepted')\">Accepted</li>\n      <li class=\"list-group-item\" (click)=\"onSelect('notAccepted')\">Not accepted</li>\n    </ul>\n  </div>\n  <div class=\"col-sm-10\">\n    <div class=\"card\" *ngFor=\"let order of orders\">\n      <div class=\"card-body\">\n        <p class=\"product-name\">{{order.fullName}}</p>\n        <p class=\"product-description\">{{order.price.toFixed(2)}}</p>\n\n      </div>\n      <button class=\"btn btn-secondary add-to-cart\" data-toggle=\"modal\" data-target=\"#myModal\"\n              (click)=\"selectOrder(order)\">details\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-2\">\n  </div>\n\n  <div class=\"col-sm-10\">\n    <div class=\"card\" *ngIf=\"selectedOrder.fullName !== ''\">\n\n      <h4 class=\"card-header\">Order details. Total {{selectedOrder.price.toFixed(2)}} zł</h4>\n      <div class=\"card-block\">\n\n        <div *ngFor=\"let product of selectedOrder.products\">\n        <h5 class=\"card-title\"> {{product.product.name}}</h5>\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">\n              <b>description:</b> {{product.product.description}}\n            </li>\n            <li class=\"list-group-item\">\n              <b>category:</b> {{product.product.category}}\n            </li>\n            <li class=\"list-group-item\">\n              <b>price:</b> {{product.product.price.toFixed(2)}}\n            </li>\n            <li class=\"list-group-item\">\n              <b>quantity:</b> {{product.number}}\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <!--<div class=\"col-sm-10\">-->\n    <!--<div *ngIf=\"selectedOrder.fullName !== ''\">-->\n    <!--<div class=\"row\"></div>-->\n    <!--<div class=\"col-sm-10\">-->\n    <!--<div class=\"card\" *ngFor=\"let product of selectedOrder.products\">-->\n    <!--<div class=\"card-body\">-->\n    <!--<p class=\"product-name\">{{product.product.name}}</p>-->\n    <!--<p class=\"product-description\">{{product.number}}</p>-->\n    <!--</div>-->\n    <!--<button class=\"btn btn-secondary add-to-cart\">{{product.product.price}}</button>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--</div>-->\n  </div>\n</div>\n"

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
        this.selectedOrder = new __WEBPACK_IMPORTED_MODULE_2__data_order__["a" /* Order */]('', '', 0, [], false, '');
    }
    OrderComponent.prototype.onSelect = function (type) {
        var _this = this;
        console.log(type);
        this.selectedOrder = new __WEBPACK_IMPORTED_MODULE_2__data_order__["a" /* Order */]('', '', 0, [], false, '');
        if (type === 'accepted') {
            this.orderService.getRealizedOrders(sessionStorage.getItem('login')).subscribe(function (order) {
                _this.orders = order;
            });
        }
        else if (type === 'notAccepted') {
            this.orderService.getNotRealizedOrders(sessionStorage.getItem('login')).subscribe(function (order) {
                _this.orders = order;
            });
        }
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

module.exports = "<div class=\"card\" *ngFor=\"let product of products\">\n  <div class=\"card-body\">\n    <p class=\"product-name\">{{product.name}}</p>\n    <p class=\"product-description\">{{product.description}}</p>\n\n  </div>\n  <button class=\"btn btn-secondary add-to-cart\" (click)=\"addToCart(product)\">{{product.price.toFixed(2)}} zł</button>\n</div>\n\n<div class=\"btn-group\" id=\"pagination\">\n  <button class=\"btn\" (click)=\"changePage(-1)\"><</button>\n  <button class=\"btn btn-light\" disabled>{{currentPage}} / {{numberOfPages}}</button>\n  <button class=\"btn\" (click)=\"changePage(1)\">></button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/productsContent/listOfProducts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListOfProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_product__ = __webpack_require__("../../../../../src/app/data/product.ts");
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
    function ListOfProductsComponent(cartService) {
        this.cartService = cartService;
        this.currentPage = 1;
        this.currentPageEmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ListOfProductsComponent.prototype.changePage = function (page) {
        this.currentPageEmiter.emit(page);
    };
    ListOfProductsComponent.prototype.addToCart = function (product) {
        this.cartService.addProductToCart(product);
    };
    return ListOfProductsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_product__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_product__["a" /* Product */]) === "function" && _a || Object)
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]) === "function" && _b || Object])
], ListOfProductsComponent);

var _a, _b;
//# sourceMappingURL=listOfProducts.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" *ngIf=\"status === 'success'\">\n  <strong>Success!</strong>\n</div>\n\n<button class=\"btn\" (click)=\"changeView('dashboard')\" *ngIf=\"status === 'success'\">Go to dashboard</button>\n\n\n<form *ngIf=\"status !== 'success'\">\n  <h1>Registration</h1>\n  <div class=\"form-group\">\n    <label for=\"login\">Login</label>\n    <input type=\"email\" class=\"form-control\" id=\"login\" name=\"login\" required=\"required\" [(ngModel)]=\"user.login\" >\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"text\" class=\"form-control\" id=\"password\" name=\"password\" required=\"required\" [(ngModel)]=\"user.password\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" required=\"required\" [(ngModel)]=\"user.name\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"surname\">Surname</label>\n    <input type=\"text\" class=\"form-control\" id=\"surname\" name=\"surname\" required=\"required\" [(ngModel)]=\"user.surname\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"address\">Address</label>\n    <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" required=\"required\" [(ngModel)]=\"user.address\">\n  </div>\n\n  <button class=\"btn\" (click)=\"register()\">Register</button>\n</form>\n\n<div class=\"alert alert-danger\" *ngIf=\"status === 'failure'\">\n  <strong>Login already exists.</strong>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__ = __webpack_require__("../../../../ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_user__ = __webpack_require__("../../../../../src/app/data/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = (function () {
    function RegistrationComponent(userService, viewService) {
        this.userService = userService;
        this.viewService = viewService;
        this.status = '';
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_3__data_user__["a" /* User */]('', '', '', '', '');
    };
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        var tmp = this.user.password;
        this.user.password = __WEBPACK_IMPORTED_MODULE_1_ts_md5_dist_md5__["Md5"].hashStr(this.user.password).toString();
        this.userService.registration(this.user)
            .subscribe(function (p) {
            console.log(p.status);
            if (p.status === 200) {
                _this.status = 'success';
                sessionStorage.setItem('token', p.text());
            }
            else {
                _this.status = 'failure';
                _this.user.password = tmp;
            }
        });
    };
    RegistrationComponent.prototype.changeView = function (viewValue) {
        this.viewService.setView(viewValue);
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'registration',
        template: __webpack_require__("../../../../../src/app/components/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/registration/registration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_view_service__["a" /* ViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_view_service__["a" /* ViewService */]) === "function" && _b || Object])
], RegistrationComponent);

var _a, _b;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/topNav/topNav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#go-to-cart {\n  position: absolute;\n  right: 3%;\n  height: 25px;\n  line-height: 15%;\n}\n\n#login-registration {\n  position: absolute;\n  right: 3%;\n  height: 25px;\n  line-height: 15%;\n}\n.dropdown {\n  display: inline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/topNav/topNav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\">\n    Sport shop\n    <div class=\"dropdown show\">\n\n      <button class=\"btn btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" *ngIf=\"loggedUser === ''\">User\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n        <a class=\"dropdown-item\" (click)=\"changeView('login')\">Login</a>\n        <a class=\"dropdown-item\" (click)=\"changeView('registration')\">Registration</a>\n      </div>\n      </button>\n\n    <button class=\"btn btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" *ngIf=\"loggedUser !== ''\">{{loggedUser}}\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n        <a class=\"dropdown-item\" (click)=\"changeView('order')\">Orders</a>\n        <a class=\"dropdown-item\" (click)=\"changeView('logout')\">Logout</a>\n      </div>\n    </button>\n\n  </div>\n  </div>\n\n  <div class=\"col-sm-8\" id=\"cart-details\">\n    Cart: {{numberOfProduct}} product(s), {{price.toFixed(2)}} zł\n\n      <button class=\"btn btn-sm\" id=\"go-to-cart\" (click)=\"changeView('cart')\">Cart</button>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/topNav/topNav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
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
    function TopNavComponent(cartService, userService, viewService) {
        this.cartService = cartService;
        this.userService = userService;
        this.viewService = viewService;
        this.numberOfProduct = 0;
        this.price = 0;
        this.loggedUser = '';
    }
    TopNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.numberOfProduct.subscribe(function (number) { return _this.numberOfProduct = number; });
        this.cartService.cartPrice.subscribe(function (price) { return _this.price = price; });
        this.userService.loggedUser.subscribe(function (user) { return _this.loggedUser = user; });
    };
    TopNavComponent.prototype.changeView = function (viewValue) {
        this.viewService.setView(viewValue);
    };
    return TopNavComponent;
}());
TopNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'top-nav',
        template: __webpack_require__("../../../../../src/app/components/topNav/topNav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/topNav/topNav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_view_service__["a" /* ViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_view_service__["a" /* ViewService */]) === "function" && _c || Object])
], TopNavComponent);

var _a, _b, _c;
//# sourceMappingURL=topNav.component.js.map

/***/ }),

/***/ "../../../../../src/app/data/cartProduct.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProduct; });
var CartProduct = (function () {
    function CartProduct(product, number) {
        this.product = product;
        this.number = number;
    }
    return CartProduct;
}());

//# sourceMappingURL=cartProduct.js.map

/***/ }),

/***/ "../../../../../src/app/data/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order(fullName, address, price, products, isRealised, login) {
        this.fullName = fullName;
        this.address = address;
        this.price = price;
        this.products = products;
        this.isRealised = isRealised;
        this.login = login;
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
    function User(login, password, name, surname, address) {
        this.login = login;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.address = address;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_cartProduct__ = __webpack_require__("../../../../../src/app/data/cartProduct.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartService = (function () {
    function CartService(http) {
        this.http = http;
        this.saveOrderHttp = 'http://localhost:5000/orders';
        this.cartPriceSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](0);
        this.cartPrice = this.cartPriceSource.asObservable();
        this.cartProductSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.cartProduct = this.cartProductSource.asObservable();
        this.numberOfProductSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](0);
        this.numberOfProduct = this.numberOfProductSource.asObservable();
    }
    CartService.prototype.saveOrder = function (order) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */](headers);
        return this.http
            .post(this.saveOrderHttp, order, options);
    };
    CartService.prototype.addProductToCart = function (product) {
        var shopCart = JSON.parse(sessionStorage.getItem('shopCart'));
        var founded = false;
        shopCart = (shopCart === null) ? [] : shopCart;
        for (var i in shopCart) {
            if (shopCart[i].product._id === product._id) {
                shopCart[i].number++;
                founded = true;
            }
        }
        if (!founded) {
            shopCart.push(new __WEBPACK_IMPORTED_MODULE_3__data_cartProduct__["a" /* CartProduct */](product, 1));
        }
        this.setData(shopCart, product.price);
    };
    CartService.prototype.removeProductFromCard = function (product) {
        var shopCart = JSON.parse(sessionStorage.getItem('shopCart'));
        for (var i in shopCart) {
            if (shopCart[i].product._id === product._id) {
                var shopCartNumber = shopCart[i].number;
                shopCart.splice(parseInt(i, 10), 1);
                this.setData(shopCart, -product.price * shopCartNumber);
                break;
            }
        }
    };
    CartService.prototype.removeOneProductFromCard = function (product) {
        var shopCart = JSON.parse(sessionStorage.getItem('shopCart'));
        for (var i in shopCart) {
            if (shopCart[i].product._id === product._id) {
                shopCart[i] = new __WEBPACK_IMPORTED_MODULE_3__data_cartProduct__["a" /* CartProduct */](product, shopCart[i].number - 1);
                this.setData(shopCart, -product.price);
                break;
            }
        }
    };
    CartService.prototype.setData = function (shopCart, productPrice) {
        var cartPrice = sessionStorage.getItem('cartPrice');
        var cartProductNumber = 0;
        cartPrice = (cartPrice === null) ? '0' : cartPrice;
        shopCart.forEach(function (p) { return cartProductNumber += p.number; });
        sessionStorage.setItem('cartPrice', (parseFloat(cartPrice) + productPrice).toFixed(2));
        sessionStorage.setItem('cartNumber', cartProductNumber.toFixed(2));
        sessionStorage.setItem('shopCart', JSON.stringify(shopCart));
        this.cartPriceSource.next((parseFloat(cartPrice) + productPrice));
        this.numberOfProductSource.next(cartProductNumber);
        this.cartProductSource.next(shopCart);
    };
    CartService.prototype.reloadData = function () {
        var cartPrice = sessionStorage.getItem('cartPrice');
        var cartProductNumber = sessionStorage.getItem('cartNumber');
        var shopCart = sessionStorage.getItem('shopCart');
        cartPrice = (cartPrice === null) ? '0' : cartPrice;
        cartProductNumber = (cartProductNumber === null) ? '0' : cartProductNumber;
        shopCart = (shopCart === null) ? '[]' : shopCart;
        this.cartPriceSource.next((parseFloat(cartPrice)));
        this.numberOfProductSource.next(parseFloat(cartProductNumber));
        this.cartProductSource.next(JSON.parse(shopCart));
    };
    return CartService;
}());
CartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CartService);

var _a;
//# sourceMappingURL=cart.service.js.map

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
    OrderService.prototype.getRealizedOrders = function (login) {
        return this.http.get(this.getProductHttp + '/realized/users/' + login).map(function (response) { return response.json(); });
        ;
    };
    OrderService.prototype.getNotRealizedOrders = function (login) {
        return this.http.get(this.getProductHttp + '/notrealized/users/' + login).map(function (response) { return response.json(); });
        ;
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
        this.connection = this.getMessage().subscribe();
    }
    SocketService.prototype.getMessage = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__('http://localhost:5000');
            _this.socket.on('editProduct', function (message) {
                console.log(message);
                observer.next(message.data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
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
        this.loggerUserSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.loggedUser = this.loggerUserSource.asObservable();
    }
    UserService.prototype.login = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */](headers);
        return this.http.post(this.getProductHttp + '/login', user, options);
    };
    UserService.prototype.registration = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */](headers);
        return this.http.post(this.getProductHttp, user, options);
    };
    UserService.prototype.logout = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'token': token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.getProductHttp + '/logout', null, options);
    };
    UserService.prototype.reloadData = function () {
        var login = sessionStorage.getItem('login');
        if (login !== null && login !== '') {
            this.loggerUserSource.next(sessionStorage.getItem('login'));
        }
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
        this.viewSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('dashboard');
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