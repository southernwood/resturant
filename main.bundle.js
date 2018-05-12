webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*, *:before, *:after {\n  box-sizing: inherit;\n}\n.main{\n  width: 100%;\n  position: absolute;\n  margin-top: -20px;\n  background: url(" + __webpack_require__("../../../../../src/assets/img/snitch.jpg") + ") no-repeat fixed;\n  background-size: cover;\n}\n.paper{\n  max-width: 700px;\n  margin: 10px auto;\n  position: relative;\n  background-color: #fafafa;\n  border: 1px solid #fafafa;\n  box-shadow: 0 0 5px rgba(250,197,7,0.5),  inset 0 0 50px rgba(250,197,7,0.1);\n}\nh1 {\n  margin-top: 0;\n}\np{\n  font-size: 1.2em;\n}\n.button-header{\n  max-width: 700px;\n  margin: 0px auto 0;\n  text-align: right;\n  padding: 5px;\n}\n.button-header img{\n  -webkit-filter: brightness(75%);\n          filter: brightness(75%);\n  cursor: pointer;\n}\n.button-header img:hover{\n  -webkit-filter: brightness(95%);\n          filter: brightness(95%);\n}\n.button-header img:active{\n  -webkit-filter: brightness(100%);\n          filter: brightness(100%);\n}\n\n.info-form{\n  margin:auto;\n  max-width: 700px;\n  padding: 10px 20px;\n  text-align: justify;\n}\n\n.site-wrap {\n  max-width: 700px;\n  margin: 0px auto;\n  padding:10px 30px;\n  text-align: justify;\n}\ninput, textarea{\n  width: 400px;\n  font-family: 'Abril Fatface', cursive;\n  box-sizing: border-box;\n  background: transparent;\n  border: none;\n  color: rgba(147,147,147,0.75);\n  border-bottom: 1px dashed black;\n  animation: border-color 5s infinite ease-in;\n  -webkit-animation: border-color 5s infinite ease-in-out;\n  padding: 0;\n}\ninput{\n  height: 100%;\n}\ninput:focus,textarea:focus{\n  color: black;\n}\n\ninput[disabled]{\n  border: hidden;\n  color: rgba(0, 0, 0, 0.8);\n}\n\nh1 input{\n  font-family: 'Sedgwick Ave Display', cursive;\n  font-size: 50px;\n\n}\ntextarea[disabled]{\n  border: transparent;\n  font-family: 'Abril Fatface', cursive;\n  color: rgba(0, 0, 0, 0.8);\n  cursor: default;\n}\n@-webkit-keyframes border-color {\n  0% {border-bottom-color: black}\n  25% {border-bottom-color: gray}\n  50%{border-bottom-color: gainsboro}\n  75%{border-bottom-color: gray}\n  100%{border-bottom-color: black}\n}\n\n/* Standard syntax */\n@keyframes border-color {\n  0% {border-bottom-color: black}\n  25% {border-bottom-color: gray}\n  50%{border-bottom-color: gainsboro}\n  75%{border-bottom-color: gray}\n  100%{border-bottom-color: black}\n}\n\n.align-left {\n  float:left;\n  margin-right:20px;\n}\n\n.align-right {\n  float:right;\n  margin-left:20px;\n}\n\n.slide-in {\n  opacity:0;\n  transition:all 1s;\n}\n\n.align-left.slide-in {\n  -webkit-transform:translateX(-30%) scale(0.95);\n          transform:translateX(-30%) scale(0.95);\n}\n.align-right.slide-in {\n  -webkit-transform:translateX(30%) scale(0.95);\n          transform:translateX(30%) scale(0.95);\n}\n\n.slide-in.active {\n  opacity:1;\n  -webkit-transform:translateX(0%) scale(1);\n          transform:translateX(0%) scale(1);\n}\n.loading{\n  position: absolute;\n  top: 150px;\n  left: 150px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"paper\">\n    <div class=\"button-header\" >\n      <div [style.visibility]=\"!this.authenticated? 'hidden':'visible'\">\n      <span class=\"icon\" href=\"\"  (click)=\"onEdit()\" *ngIf=\"!editMode\">\n        <img src=\"../../assets/icons/icons8-Edit%20File-64.png\" title=\"Edit\" width=\"32\" height=\"32\">\n      </span>\n        <span class=\"icon\" (click)=\"onSave()\" *ngIf=\"editMode\">\n        <img src=\"../../assets/icons/icons8-Save%20as-64.png\" title=\"Edit\" width=\"32\" height=\"32\">\n      </span>\n      </div>\n    </div>\n    <div class=\"info-form\">\n      <img src=\"../../assets/img/about/4a02ced7b43781f1eed88212236027eeda33dda7_hq.jpg\" alt=\"front\"\n           width=\"200\"  class=\"align-right\">\n      <div class=\"info-form-header\" [style.visibility]=\"loading? 'hidden':'visible'\">\n        <h1>\n          <input type=\"text\"\n                 [(ngModel)]=\"restaurant.name\"\n                 name=\"name\"\n                 [value]=\"restaurant.name\"\n                 [disabled]=\"!editMode\">\n        </h1>\n        <h3>\n          <input type=\"text\"\n                 [(ngModel)]=\"restaurant.owners\"\n                 name=\"owners\"\n                 [value]=\"restaurant.owners\"\n                 [disabled]=\"!editMode\">\n        </h3>\n        <h3>\n          <input type=\"tel\"\n                 [value]=\"restaurant.telephone\"\n                 [(ngModel)]=\"restaurant.telephone\"\n                 name=\"telephone\"\n                 [disabled]=\"!editMode\">\n        </h3>\n        <h3>\n      <textarea  [value]=\"restaurant.locations\"\n                 [(ngModel)]=\"restaurant.locations\"\n                 name=\"locations\"\n                 [disabled] =\"!editMode\">\n\n      </textarea>\n        </h3>\n      </div>\n      <div class=\"loading\" *ngIf=\"loading\">\n        <app-loading></app-loading>\n      </div>\n    </div>\n    <div class=\"site-wrap\">\n\n\n      <p>Consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asmagni, ut, dignissimos.</p>\n\n      <p>Lorem ipsum cupiditate, corporis a qui libero ipsum is quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.</p>\n      <p>Adipisicing elit. Tempore tempora rerum..</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dom nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dnissimos.</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dossimos.</p>\n      <img class=\"align-left slide-in\" src=\"../../assets/img/about/5055de8203e79c212feb5f75221de4c8.jpg\" width=\"400\" >\n\n\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt facilis et iste corrupti omnis tenetur est. Iste ut est dicta dolor itaque adipisci, dolorum minima, veritatis earum provident error molestias. Ratione magnne. Culpa, dolorum reprehenderit harum ab voluptas fuga, nisi eligendi natus maiores illum quas quos et aperiam aut doloremque optio maxime fugiat doloribus. Eum dolorum expedita quam, nesciunt</p>\n\n      <img src=\"../../assets/img/about/harry-potter-cafe-food.jpg\" width=\"400\" class=\"align-right slide-in\">\n\n      <p> at provident praesentium atque quas rerum optio dignissimos repudiandae ullam illum quibusdam. Vel ad error quibusdam, illo ex totam placeat. Quos excepturi fuga, molestiae ea quisquam minus, ratione dicta consectetur officia omnabo velit optio esse aperiam similique, voluptatem cum, maiores ipsa tempore. Reiciendis sed culpa atque inventore, nam ullam enim expedita consectetur id velit iusto alias vitae explicabo nemo neque odio reprehenderit soluta sint eaque. Aperiam, qui ut tenetur, voluptate doloremque officiis dicta quaerat voluptatem rerum natus magni. Eum amet autem dolor ullam.</p>\n\n      <img src=\"../../assets/img/about/grilled-chicken-quinoa-salad.jpg\" width=\"300\" class=\"align-left slide-in\">\n\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet\n        <img src=\"../../assets/img/about/39a47492912_ginal.jpg\" width=\"200\" class=\"align-right slide-in\">\n        temporibus doloremque possimus facilis. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimomque culpa reiciendis tempore excepturi. Enim nostrum fugit itaque vel corporis ullam sed tenetur ipsa qui rem quam error sint, libero. Laboriosam rem, ratione. Autem blanditiis</p>\n\n\n      <p>laborum neque repudiandae quam, cumque, voluptate veritatis itaque, placeat veniam ad nisi. Expedita, laborum reprehenderit ratione soluta velit natus, odit mollitia. Corporis rerum minima fugiat in nostrum. Assumenda natus cupiditate hic quidem ex, quas, amet ipsum esse dolore facilis beatae maxime qui inventore, iste? Maiores di. Voluptatem eum error voluptas porro officiis, amet! Molestias, fugit, ut! Tempore non magnam, amet, facere ducimus accusantium eos veritatis neque.</p>\n\n      <img src=\"../../assets/img/about/img22019_03012017014058.jpeg\" width=\"400\" class=\"align-right slide-in\">\n\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia veem. Delectus impedit quidem laborum, fugit vel neque quo, ipsam, quasi aspernatur quas odio nihil? Veniam amet reiciendis blanditiis quis reprehenderit repudiandae neque, ab ducimus, odit excepturi voluptate saepe ipsam. Voluptatem eum error voluptas porro officiis, amet! Molestias, fugit, ut! Tempore non magnam, amet, facere ducimus accusantium eos veritatis neque.</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia repellendus quia facilis iusto dignissimos nam? Tenetur fugit quos autem nihil, perspiciatis expe saepe ipsam. Voluptatem eum error voluptas porro officiis, amet! Molestias, fugit, ut! Tempore non magnam, amet, facere ducimus accusantium eos veritatis neque.</p>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restaurant_model__ = __webpack_require__("../../../../../src/app/about/restaurant.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_af__ = __webpack_require__("../../../../../src/app/shared/af.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutComponent = (function () {
    function AboutComponent(elementRef, af, authService) {
        this.elementRef = elementRef;
        this.af = af;
        this.authService = authService;
        this.editMode = false;
        this.authenticated = false;
        this.loading = true;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sliderImages = this.elementRef.nativeElement.querySelectorAll('.slide-in');
        this.restaurant = new __WEBPACK_IMPORTED_MODULE_1__restaurant_model__["a" /* RestaurantModel */];
        this.restaurant.name = 'Magical House';
        this.restaurant.owners = 'Ellie';
        this.restaurant.telephone = '3142343412';
        this.restaurant.locations = "Platform 9¾, King's Cross Station";
        this.authenticated = this.authService.isAuthenticated();
        this.af.getUserInfo().subscribe(function (data) {
            _this.restaurant = data.json();
            _this.loading = false;
        });
    };
    AboutComponent.prototype.onWindowScroll = function () {
        this.checkSlide();
    };
    AboutComponent.prototype.onEdit = function () {
        this.editMode = true;
    };
    AboutComponent.prototype.onSave = function () {
        this.editMode = false;
        if (this.authenticated) {
            this.af.storeUserInfo(this.restaurant);
        }
    };
    AboutComponent.prototype.checkSlide = function () {
        this.sliderImages.forEach(function (sliderImage) {
            // half way through the image
            var slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
            // bottom of the image
            var imageBottom = sliderImage.offsetTop + sliderImage.height;
            var isHalfShown = slideInAt > sliderImage.offsetTop;
            var isNotScrolledPast = window.scrollY < imageBottom;
            if (isHalfShown && isNotScrolledPast) {
                sliderImage.classList.add('active');
            }
            else {
                sliderImage.classList.remove('active');
            }
        });
    };
    return AboutComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AboutComponent.prototype, "onWindowScroll", null);
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_af__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_af__["a" /* AF */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], AboutComponent);

var _a, _b, _c;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/about/restaurant.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantModel; });
var RestaurantModel = (function () {
    function RestaurantModel() {
    }
    return RestaurantModel;
}());

//# sourceMappingURL=restaurant.model.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_list_booking_list_component__ = __webpack_require__("../../../../../src/app/booking-list/booking-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booking_list_booking_show_booking_show_component__ = __webpack_require__("../../../../../src/app/booking-list/booking-show/booking-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__booking_list_booking_new_booking_new_component__ = __webpack_require__("../../../../../src/app/booking-list/booking-new/booking-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_list_table_list_component__ = __webpack_require__("../../../../../src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__booking_list_booking_index_booking_index_component__ = __webpack_require__("../../../../../src/app/booking-list/booking-index/booking-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', redirectTo: '/bookings/new', pathMatch: 'full' },
    { path: 'bookings', component: __WEBPACK_IMPORTED_MODULE_2__booking_list_booking_list_component__["a" /* BookingListComponent */], children: [
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_4__booking_list_booking_new_booking_new_component__["a" /* BookingNewComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__booking_list_booking_index_booking_index_component__["a" /* BookingIndexComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_auth_guard_service__["a" /* AuthGuardService */]] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__booking_list_booking_show_booking_show_component__["a" /* BookingShowComponent */] },
            { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_4__booking_list_booking_new_booking_new_component__["a" /* BookingNewComponent */] }
        ] },
    { path: 'tables', component: __WEBPACK_IMPORTED_MODULE_5__table_list_table_list_component__["a" /* TableListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_7__contacts_contacts_component__["a" /* ContactsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_8__auth_login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_9__auth_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_12__main_main_component__["a" /* MainComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing-module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n  background: gray;\n}\n.container{\n  width: 50%;\n  margin-left: 25%;\n  position: absolute;\n  z-index: 12;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header xmlns=\"\"></app-header>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"]({
            apiKey: "AIzaSyDQkDR3HVhW1W5pIVyvMPKx8PwwsnsSzcA",
            authDomain: "restaurant-1defc.firebaseapp.com",
            databaseURL: "https://restaurant-1defc.firebaseio.com",
            projectId: "restaurant-1defc",
            storageBucket: "restaurant-1defc.appspot.com",
            messagingSenderId: "817836867484"
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng_pick_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_af__ = __webpack_require__("../../../../../src/app/shared/af.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__booking_list_booking_service__ = __webpack_require__("../../../../../src/app/booking-list/booking-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__table_list_table_service__ = __webpack_require__("../../../../../src/app/table-list/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contacts_contact_service__ = __webpack_require__("../../../../../src/app/contacts/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__booking_list_booking_list_component__ = __webpack_require__("../../../../../src/app/booking-list/booking-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__booking_list_booking_show_booking_show_component__ = __webpack_require__("../../../../../src/app/booking-list/booking-show/booking-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__booking_list_booking_new_booking_new_component__ = __webpack_require__("../../../../../src/app/booking-list/booking-new/booking-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__table_list_table_list_component__ = __webpack_require__("../../../../../src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__booking_list_booking_index_booking_index_component__ = __webpack_require__("../../../../../src/app/booking-list/booking-index/booking-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__table_list_table_item_table_item_component__ = __webpack_require__("../../../../../src/app/table-list/table-item/table-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_modal_modal_component__ = __webpack_require__("../../../../../src/app/shared/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__contacts_contact_item_contact_item_component__ = __webpack_require__("../../../../../src/app/contacts/contact-item/contact-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__auth_login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_pipes_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__booking_list_booking_show_menu_menu_component__ = __webpack_require__("../../../../../src/app/booking-list/booking-show/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_loading_loading_component__ = __webpack_require__("../../../../../src/app/shared/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var firebaseConfig = {
    apiKey: "AIzaSyDQkDR3HVhW1W5pIVyvMPKx8PwwsnsSzcA",
    authDomain: "restaurant-1defc.firebaseapp.com",
    databaseURL: "https://restaurant-1defc.firebaseio.com",
    projectId: "restaurant-1defc",
    storageBucket: "restaurant-1defc.appspot.com",
    messagingSenderId: "817836867484"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_19__booking_list_booking_list_component__["a" /* BookingListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__booking_list_booking_show_booking_show_component__["a" /* BookingShowComponent */],
            __WEBPACK_IMPORTED_MODULE_21__booking_list_booking_new_booking_new_component__["a" /* BookingNewComponent */],
            __WEBPACK_IMPORTED_MODULE_22__table_list_table_list_component__["a" /* TableListComponent */],
            __WEBPACK_IMPORTED_MODULE_23__booking_list_booking_index_booking_index_component__["a" /* BookingIndexComponent */],
            __WEBPACK_IMPORTED_MODULE_24__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_31__shared_pipes_pipe__["a" /* TelephonePipe */],
            __WEBPACK_IMPORTED_MODULE_31__shared_pipes_pipe__["b" /* CapitalizePipe */],
            __WEBPACK_IMPORTED_MODULE_31__shared_pipes_pipe__["c" /* RomanizePipe */],
            __WEBPACK_IMPORTED_MODULE_25__table_list_table_item_table_item_component__["a" /* TableItemComponent */],
            __WEBPACK_IMPORTED_MODULE_26__shared_modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_27__contacts_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__contacts_contact_item_contact_item_component__["a" /* ContactItemComponent */],
            __WEBPACK_IMPORTED_MODULE_31__shared_pipes_pipe__["d" /* FilterListPipe */],
            __WEBPACK_IMPORTED_MODULE_31__shared_pipes_pipe__["e" /* SearchNamePipe */],
            __WEBPACK_IMPORTED_MODULE_31__shared_pipes_pipe__["f" /* SortByTimePipe */],
            __WEBPACK_IMPORTED_MODULE_29__auth_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_30__auth_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_32__shared_dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_33__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_34__booking_list_booking_show_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_35__shared_loading_loading_component__["a" /* LoadingComponent */],
            __WEBPACK_IMPORTED_MODULE_36__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_31__shared_pipes_pipe__["g" /* SortByNamePipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng_pick_datetime__["DateTimePickerModule"],
            __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__["FlashMessagesModule"],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__shared_af__["a" /* AF */], __WEBPACK_IMPORTED_MODULE_13__booking_list_booking_service__["a" /* BookingService */], __WEBPACK_IMPORTED_MODULE_14__table_list_table_service__["a" /* TableService */], __WEBPACK_IMPORTED_MODULE_15__contacts_contact_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_16__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__auth_auth_guard_service__["a" /* AuthGuardService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/main']);
            return false;
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router, flashMessageService) {
        this.router = router;
        this.flashMessageService = flashMessageService;
    }
    AuthService.prototype.signupUser = function (email, password) {
        console.log("try to sign up a new user");
        return __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (res) {
            _this.router.navigate(['/bookings']);
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.getToken().then(function (token) {
                _this.token = token;
            });
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signOut();
        this.flashMessageService.show("Log out", { cssClass: 'alert alert-success', timeout: 1000 });
        this.token = null;
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.getToken().then(function (token) {
            _this.token = token;
        });
        return this.token;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  padding-top: 5%;\n  margin: auto;\n}\n.main{\n  height: 100vh;\n  width: 100%;\n  background: url(" + __webpack_require__("../../../../../src/assets/img/greethall.jpg") + ") no-repeat;\n  background-size: cover;\n  margin-top: -35px;\n  z-index: -1;\n}\n.sign-form{\n  width: 500px;\n  height: 500px;\n  background: url(" + __webpack_require__("../../../../../src/assets/img/67v58PICcQU_1024.png") + ") no-repeat;\n  opacity: 0.9;\n  background-size: 500px;\n  padding: 5% 10%;\n  font-family: 'Abril Fatface', cursive;\n  color: rgb(92, 39, 12);\n}\n\n.sign-form img{\n  position: absolute;\n  right: 140px;\n  bottom:160px;\n  z-index: 10;\n}\n\nbutton {\n  margin: 0px 0;\n  line-height: 34px;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline:none !important;\n  width:100%;\n}\n\nbutton:active {\n\n  outline:none;\n}\n\nbutton.ribbon {\n\n  outline:none;\n  outline-color: transparent;\n}\nbutton.ribbon:before, button.ribbon:after {\n  top: 5px;\n  z-index: -10;\n}\nbutton.ribbon:before {\n  border-color: #53dab6 #53dab6 #53dab6 transparent;\n  left: -25px;\n  border-width: 17px;\n}\nbutton.ribbon:after {\n  border-color: #53dab6 transparent #53dab6 #53dab6;\n  right: -25px;\n  border-width: 17px;\n}\n\nbutton:before, button:after {\n  content: '';\n  position: absolute;\n  height: 0;\n  width: 0;\n  border-style: solid;\n  border-width: 0;\n  outline:none;\n}\n\nbutton.btn-default:before {\n  border-color: #757575 #757575 #757575 transparent;\n}\nbutton.btn-default:after {\n  border-color: #757575 transparent #757575 #757575;\n}\n\n\n\nbutton.btn-primary:before {\n  border-color: #2e6da4 #2e6da4 #2e6da4 transparent;\n}\nbutton.btn-primary:after {\n  border-color: #2e6da4 transparent #2e6da4 #2e6da4;\n}\n\n\nbutton.btn-success:before {\n  border-color: #398439 #398439 #398439 transparent;\n}\nbutton.btn-success:after {\n  border-color: #398439 transparent #398439 #398439;\n}\n\n\nbutton.btn-info:before {\n  border-color: #269abc #269abc #269abc transparent;\n}\nbutton.btn-info:after {\n  border-color: #269abc transparent #269abc #269abc;\n}\n\n\nbutton.btn-warning:before {\n  border-color: #d58512 #d58512 #d58512 transparent;\n}\nbutton.btn-warning:after {\n  border-color: #d58512 transparent #d58512 #d58512;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-10 col-md-8 col-md-offset-3 col-sm-offset-1\">\n        <div *ngIf=\"errorTip\" class=\"alert alert-danger\">\n          {{errorTip}}\n        </div>\n      </div>\n    </div>\n    <div class=\"sign-form col-xs-12 col-sm-10 col-md-8 col-md-offset-3 col-sm-offset-1\">\n      <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" *ngIf=\"!successTip\">\n\n        <h1>Welcome Back</h1>\n        <div class=\"form-group\">\n          <img width=\"80\" src='../../../assets/img/Hogwarts_Logo.png' alt=\"logo\">\n          <label for=\"email\">Mail</label>\n          <input type=\"email\" class=\"form-control\"\n                 ngModel\n                 name=\"email\"\n                 id=\"email\" required email>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\"\n                 ngModel\n                 name=\"password\"\n                 id=\"password\" required\n          >\n        </div>\n        <button class=\"btn btn-warning ribbon\">\n          Login\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(authService, flashMessageService) {
        this.authService = authService;
        this.flashMessageService = flashMessageService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.authService.signinUser(form.value.email, form.value.password).catch(function (error) {
            _this.errorTip = error.message;
        }).then(function () { return _this.flashMessageService.show("Successfully login", { cssClass: 'alert alert-success', timeout: 1000 }); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\npadding-top: 5%;\n  margin: auto;\n}\n.main{\n  height: 100vh;\n  width: 100%;\n  background: url(" + __webpack_require__("../../../../../src/assets/img/greethall.jpg") + ") no-repeat;\n  background-size: cover;\n  margin-top: -35px;\n  z-index: -1;\n}\n.sign-form img{\n  position: absolute;\n  right: 140px;\n  bottom:160px;\n  z-index: 10;\n}\n.sign-form{\n  width: 500px;\n  height: 500px;\n  background: url(" + __webpack_require__("../../../../../src/assets/img/67v58PICcQU_1024.png") + ") no-repeat;\n  opacity: 0.9;\n  background-size: 500px;\n  padding:5% 10%;\n  font-family: 'Abril Fatface', cursive;\n  color: rgb(92, 39, 12);\n}\nbutton {\n  margin: 0px 0;\n  line-height: 34px;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline:none !important;\n  width:100%;\n}\n\nbutton:active {\n\n  outline:none;\n}\n\nbutton.ribbon {\n\n  outline:none;\n  outline-color: transparent;\n}\nbutton.ribbon:before, button.ribbon:after {\n  top: 5px;\n  z-index: -10;\n}\nbutton.ribbon:before {\n  border-color: #53dab6 #53dab6 #53dab6 transparent;\n  left: -25px;\n  border-width: 17px;\n}\nbutton.ribbon:after {\n  border-color: #53dab6 transparent #53dab6 #53dab6;\n  right: -25px;\n  border-width: 17px;\n}\n\nbutton:before, button:after {\n  content: '';\n  position: absolute;\n  height: 0;\n  width: 0;\n  border-style: solid;\n  border-width: 0;\n  outline:none;\n}\n\nbutton.btn-default:before {\n  border-color: #757575 #757575 #757575 transparent;\n}\nbutton.btn-default:after {\n  border-color: #757575 transparent #757575 #757575;\n}\n\n\n\nbutton.btn-primary:before {\n  border-color: #2e6da4 #2e6da4 #2e6da4 transparent;\n}\nbutton.btn-primary:after {\n  border-color: #2e6da4 transparent #2e6da4 #2e6da4;\n}\n\n\nbutton.btn-success:before {\n  border-color: #398439 #398439 #398439 transparent;\n}\nbutton.btn-success:after {\n  border-color: #398439 transparent #398439 #398439;\n}\n\n\nbutton.btn-info:before {\n  border-color: #269abc #269abc #269abc transparent;\n}\nbutton.btn-info:after {\n  border-color: #269abc transparent #269abc #269abc;\n}\n\n\nbutton.btn-warning:before {\n  border-color: #d58512 #d58512 #d58512 transparent;\n}\nbutton.btn-warning:after {\n  border-color: #d58512 transparent #d58512 #d58512;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-10 col-md-5 col-md-offset-3 col-sm-offset-1\">\n          <div *ngIf=\"errorTip\" class=\"alert alert-danger\">\n            {{errorTip}}\n          </div>\n          <div *ngIf=\"successTip\" class=\"alert alert-success\">\n            {{successTip}}\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"!successTip\" class=\"sign-form col-xs-12 col-sm-10 col-md-5 col-md-offset-3 col-sm-offset-1\">\n\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" *ngIf=\"!successTip\">\n          <div class=\"form-group\">\n            <img width=\"70\" src='../../../assets/img/Hogwarts_Logo.png' alt=\"logo\">\n            <label for=\"email\">Mail</label>\n            <input type=\"email\" class=\"form-control\"\n                   ngModel\n                   name=\"email\"\n                   id=\"email\" required email>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\"\n                   ngModel\n                   name=\"password\"\n                   id=\"password\" required\n            >\n          </div>\n          <div class=\"form-group\">\n            <label for=\"confirm\">Confirm Password</label>\n            <input type=\"password\" class=\"form-control\"\n                   ngModel\n                   name=\"confirm\"\n                   id=\"confirm\"\n                   required>\n          </div>\n          <button class=\"btn btn-warning ribbon\">\n            Sign Up\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.successTip = "";
    };
    SignupComponent.prototype.onSubmit = function (f) {
        var _this = this;
        console.log(f.value);
        var email = f.value.email;
        var password = f.value.password;
        var confirm = f.value.confirm;
        if (password !== confirm) {
            this.errorTip = "password does not match";
            return;
        }
        this.authService.signupUser(email, password).then(function (res) {
            _this.successTip = "successfully create a new account, please login in";
            _this.errorTip = "";
            _this.flashMessagesService.show("successfully create a new account, please login in", { cssClass: 'alert alert-success' });
            _this.router.navigate(['/login']);
        }).catch(function (error) {
            _this.errorTip = error.message;
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/auth/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-index/booking-index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".conformation{\n  width: 200px;\n  background-color: rgb(94, 56, 37);\n  border: rgb(48, 33, 23);\n  color: white;\n}\n.conformation:hover{\n  background-color: rgb(217,192,163);\n}\n.fa-pencil{\n  color: rgba(51,122,183,0.96) !important;\n}\n.fa-trash-o{\n  color: rgba(233,0,88,0.96)  !important;\n}\ntable td{\n  vertical-align:middle;\n}\n\n.btn-group .btn {\n  transition: background-color .3s ease;\n}\n\n.panel-table .panel-body {\n  padding: 0;\n}\n\n.table > thead > tr > th {\n  border-bottom: none;\n}\n\n.panel-footer, .panel-table .panel-body .table-bordered {\n  border-style: none;\n  margin: 0;\n}\n\n.panel-table .panel-body .table-bordered > thead > tr > th:first-of-type {\n  text-align: center;\n  width: 50px;\n}\n\n.panel-table .panel-body .table-bordered > thead > tr > th.col-tools {\n  text-align: center;\n  width: 120px;\n}\n\n.panel-table .panel-body .table-bordered > thead > tr > th:last-of-type,\n.panel-table .panel-body .table-bordered > tbody > tr > td:last-of-type {\n  border-right: 0;\n}\n\n.panel-table .panel-body .table-bordered > thead > tr > th:first-of-type,\n.panel-table .panel-body .table-bordered > tbody > tr > td:first-of-type {\n  border-left: 0;\n}\n\n.panel-table .panel-body .table-bordered > tbody > tr:first-of-type > td {\n  border-bottom: 0;\n}\n\n.panel-table .panel-body .table-bordered > thead > tr:first-of-type > th {\n  border-top: 0;\n}\n\n.search-form .form-group {\n  transition: all 0.35s, border-radius 0s;\n  width: 32px;\n  height: 32px;\n  background-color: #fff;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\n  border-radius: 25px;\n  border: 1px solid #ccc;\n}\n.search-form .form-group input.form-control {\n  padding-right: 20px;\n  border: 0 none;\n  background: transparent;\n  box-shadow: none;\n  display:block;\n}\n.search-form .form-group input.form-control::-webkit-input-placeholder {\n  display: none;\n}\n.search-form .form-group input.form-control:-moz-placeholder {\n  /* Firefox 18- */\n  display: none;\n}\n.search-form .form-group input.form-control::-moz-placeholder {\n  /* Firefox 19+ */\n  display: none;\n}\n.search-form .form-group input.form-control:-ms-input-placeholder {\n  display: none;\n}\n.search-form .form-group:hover,\n.search-form .form-group.hover {\n  width: 100%;\n  border-radius: 4px 25px 25px 4px;\n}\n.search-form .form-group span.form-control-feedback {\n  position: absolute;\n  top: -1px;\n  right: -2px;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  color: rgb(94, 56, 37);\n  left: initial;\n  font-size: 14px;\n}\n\n.pagination-lg /deep/.ngx-pagination .current {\n  background: rgb(94, 56, 37);\n}\n.confirm{\n  width: 400px;\n  height: 250px;\n  font-family: 'Abril Fatface', cursive;\n}\n.confirm button{\n  margin-left: 20px;\n}\n.btn-group input[type='radio']:checked+label{\n  background-color: rgb(217,192,163);\n  color: white;\n  border: black;\n}\n.btn-group input[type=radio]{\n  display: none;\n}\n.btn-group label:first-of-type{\n  border-radius: 5px 0 0 5px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-index/booking-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"panel panel-table\">\n  <div class=\"panel-heading\">\n    <div class=\"row\">\n      <div class=\"col col-md-3\">\n        <form action=\"\" class=\"search-form\">\n          <div class=\"form-group has-feedback\">\n            <label for=\"search\" class=\"sr-only\">Search</label>\n            <input type=\"text\" class=\"form-control\"\n                   name=\"search\"\n                   id=\"search\"\n                   [value]=\"searchWord\"\n                   [(ngModel)]=\"searchWord\"\n                   placeholder=\"search\">\n            <span class=\"glyphicon glyphicon-search form-control-feedback\"></span>\n          </div>\n        </form>\n      </div>\n      <div class=\"col col-md-3 text-center\">\n      </div>\n      <div class=\"col col-md-6 text-right\">\n        <div class=\"pull-right\">\n          <div class=\"btn-group\">\n            <input type=\"radio\" name=\"options\"\n                   id=\"option1\"\n                   value=\"today\"\n                   (change)=\"onChange('today')\">\n            <label class=\"btn btn-default btn-filter\" for=\"option1\">today\n            </label>\n            <input type=\"radio\"\n                   name=\"options\"\n                   id=\"option2\"\n                   value=\"unfinished\"\n                   (change)=\"onChange('unfinished')\"\n            >\n            <label class=\"btn btn-default btn-filter\" for=\"option2\" >unfinished\n            </label>\n            <input type=\"radio\"\n                   name=\"options\"\n                   id=\"option3\"\n                   value=\"all\"\n                   (change)=\"onChange('all')\"\n            >\n            <label class=\"btn btn-default btn-filter\" for=\"option3\">View All\n            </label>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"panel-body\">\n    <table class=\"table table-hover\">\n      <tr>\n        <th>Name</th>\n        <th>Time</th>\n        <th>Telephone</th>\n        <th class=\"text-center\">Party (people)</th>\n        <th class=\"text-center\">Table Id</th>\n        <th class=\"text-center\">Confirmation Code</th>\n        <th class=\"text-center\">Action</th>\n      </tr>\n      <tr\n        *ngFor=\"let booking of bookings\n        | filterList: option\n        | searchName: searchWord\n        | sortByTime\n        |paginate: { itemsPerPage: 10, currentPage: p }\">\n        <td>{{booking.name | capitalize}}</td>\n        <td>{{booking.startTime | date:'medium'}}</td>\n        <td>{{booking.telephone|telephone }}</td>\n        <td class=\"text-center\">{{booking.size}}</td>\n        <td class=\"text-center\">{{booking.tableId}}</td>\n        <td class=\"text-center\"> <a [routerLink]=\"['/bookings', booking.key]\" class=\"btn btn-default conformation\">{{booking.key.substring(2)}}</a></td>\n        <td class=\"text-center\">\n          <span class=\"btn btn-default\" href=\"\"  (click)=\"onEdit(booking.key)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span>\n          <span class=\"btn btn-default\" href=\"\" (click)=\"onShowDialog(booking)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span>\n        </td>\n      </tr>\n    </table>\n    <div class=\"text-right\">\n      <pagination-controls class=\"pagination-lg\" (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>\n</div>\n<div class=\"confirm\">\n  <app-modal [(visible)] = 'showDialog' [width]=\"400\" [height]=\"300\">\n    <div *ngIf=\"this.selectedBooking\">\n      <h1 style=\"color: #d9534f\">Remove Reservation</h1>\n      <hr>\n      <h4>Are you sure you want to delete</h4>\n      <div class=\"text-center\">\n        <p>{{this.selectedBooking.name}}</p>\n        <p>{{this.selectedBooking.time}}</p>\n        <p>{{this.selectedBooking.key}}</p>\n      </div>\n      <div class=\"col-12-xs text-center\">\n        <button class=\"btn btn-danger btn-md\"\n                (click)=\"onDelete(this.selectedBooking.key)\">\n          Delete\n        </button>\n        <button class=\"btn btn-default btn-md\" (click)=\"showDialog=false\">Cancel</button>\n      </div>\n    </div>\n  </app-modal>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-index/booking-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_service__ = __webpack_require__("../../../../../src/app/booking-list/booking-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingIndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingIndexComponent = (function () {
    function BookingIndexComponent(bookingService, router, route) {
        this.bookingService = bookingService;
        this.router = router;
        this.route = route;
        this.option = 'unfinished';
        this.p = 1;
        this.showDialog = false;
    }
    BookingIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookingService.getALLBookings().subscribe(function (data) {
            _this.bookings = data;
        });
    };
    BookingIndexComponent.prototype.onDelete = function (key) {
        console.log("try to delete a booking");
        this.bookingService.cancelBookingByKey(key);
        this.showDialog = false;
        this.selectedBooking = null;
    };
    BookingIndexComponent.prototype.onEdit = function (key) {
        console.log("try to edit a booking");
        this.router.navigate([key + '/edit'], { relativeTo: this.route });
    };
    BookingIndexComponent.prototype.onChange = function (change) {
        this.option = change;
    };
    BookingIndexComponent.prototype.onShowDialog = function (booking) {
        this.showDialog = true;
        this.selectedBooking = booking;
    };
    BookingIndexComponent.prototype.ngOnDestroy = function () {
    };
    return BookingIndexComponent;
}());
BookingIndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-booking-index',
        template: __webpack_require__("../../../../../src/app/booking-list/booking-index/booking-index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/booking-list/booking-index/booking-index.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], BookingIndexComponent);

var _a, _b, _c;
//# sourceMappingURL=booking-index.component.js.map

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-list.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookingListComponent = (function () {
    function BookingListComponent() {
    }
    BookingListComponent.prototype.ngOnInit = function () {
    };
    return BookingListComponent;
}());
BookingListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-booking-list',
        template: __webpack_require__("../../../../../src/app/booking-list/booking-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/booking-list/booking-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BookingListComponent);

//# sourceMappingURL=booking-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingModel; });
var BookingModel = (function () {
    function BookingModel() {
    }
    return BookingModel;
}());

//# sourceMappingURL=booking-model.js.map

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-new/booking-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span{\n  color: red;\n}\n.main{\n  width: 100%;\n  height: 100vh;\n  background: url(" + __webpack_require__("../../../../../src/assets/img/greethall.jpg") + ") no-repeat;\n  background-size: cover;\n  margin-top: -35px;\n  z-index: -1;\n}\n.alert li{\n  display: inline;\n}\n.alert ul{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.book-form{\n  display: block;\n  font-family: 'Abril Fatface', cursive;\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  padding: 20px;\n  width: 80%;\n  margin: 20px auto;\n  border: black;\n  background: rgba(0, 0, 0, 0.6);\n  color: white;\n}\n.book-form-footer{\n  text-align: center;\n}\n.book-form-footer button{\n  margin-right: 50px;\n  margin-left: 50px;\n  width: 100px;\n}\n.title{\n  text-align: center;\n  padding-top:80px;\n}\n.title img{\n  width: 35%;\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  opacity: 0.8;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-new/booking-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"main\">\n    <div class=\"title\">\n      <img src=\"../../../assets/img/1457048859937.jpg\" alt=\"title\">\n    </div>\n    <div class=\"book-form panel panel-default\">\n      <form class=\"form-horizontal\" [formGroup]=\"bookingForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\" *ngIf=\"timeSlots && infoTips\">\n          <div class=\"col-lg-12 alert alert-warning\">\n            <h5>{{infoTips}}</h5>\n            <ul>\n              <li *ngFor=\"let time of timeSlots\">\n                {{time.startTime | date: 'shortTime'}} - {{time.endTime | date: 'shortTime'}}\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <div class=\"form-group\"\n               [ngClass]=\"{'has-error':!bookingForm.controls['name'].valid\n    &&bookingForm.controls['name'].touched}\">\n            <label for=\"name\" class=\"control-label col-lg-3\">Name</label>\n            <div class=\"col-lg-9\">\n              <input  type=\"text\"\n                      class=\"form-control\"\n                      id=\"name\"\n                      formControlName=\"name\"\n                      placeholder=\"Emma Watson\"/>\n            </div>\n          </div>\n          <div  class=\"form-group\"\n                [ngClass]=\"{'has-error':!bookingForm.controls['time'].valid\n         &&bookingForm.controls['time'].touched}\">\n            <label for=\"time\" class=\"control-label col-lg-3\">When</label>\n            <div class=\"col-lg-9\">\n              <input type=\"datetime-local\"\n                     class=\"form-control\"\n                     id=\"time\"\n                     formControlName=\"time\"/>\n            </div>\n          </div>\n\n          <div *ngIf=\"bookingForm.controls['time'].errors &&\n        bookingForm.controls['time'].errors.validateTime\"\n               class=\"alert alert-danger\">\n            {{bookingForm.controls['time'].errors.validateTime.error}}\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <div class=\"form-group\"\n               [ngClass]=\"{'has-error':!bookingForm.controls['size'].valid\n         &&bookingForm.controls['size'].touched}\">\n            <label for=\"size\" class=\"control-label col-lg-3\">How many</label>\n            <div class=\"col-lg-9\">\n              <input type=\"number\"\n                     class=\"form-control\"\n                     id=\"size\"\n                     formControlName=\"size\"\n                     placeholder=\"2\"/>\n            </div>\n          </div>\n          <div class=\"form-group\"\n               [ngClass]=\"{'has-error':!bookingForm.controls['telephone'].valid\n         &&bookingForm.controls['telephone'].touched}\">\n            <label for=\"telephone\" class=\"control-label col-lg-3\">Telephone</label>\n            <div class=\"col-lg-9\">\n              <input type=\"tel\"\n                     class=\"form-control\"\n                     id=\"telephone\"\n                     formControlName=\"telephone\"\n                     placeholder=\"Telephone\"/>\n            </div>\n          </div>\n          <div *ngIf=\"bookingForm.controls['telephone'].errors &&\n      bookingForm.controls['telephone'].touched\"\n               class=\"alert alert-danger\">\n            please input a valid telephone number\n          </div>\n        </div>\n\n        <div class=\"book-form-footer\">\n          <span *ngIf=\"!editMode\">\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookingForm.valid\">\n              Booking\n            </button>\n            <button class=\"btn btn-danger\" (click)=\"onCancel()\">\n            Cancel\n            </button>\n          </span>\n          <span *ngIf=\"editMode\">\n            <button type=\"submit\" class=\"btn btn-warning\" [disabled]=\"!bookingForm.valid\">\n              Update\n            </button>\n            <button class=\"btn btn-danger\" (click)=\"onCancel()\">\n              Cancel\n            </button>\n          </span>\n        </div>\n      </form>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-new/booking-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booking_service__ = __webpack_require__("../../../../../src/app/booking-list/booking-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_af__ = __webpack_require__("../../../../../src/app/shared/af.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__time_validator__ = __webpack_require__("../../../../../src/app/booking-list/time-validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utilities__ = __webpack_require__("../../../../../src/app/shared/utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BookingNewComponent = (function () {
    function BookingNewComponent(bookingService, af, route, router, location) {
        this.bookingService = bookingService;
        this.af = af;
        this.route = route;
        this.router = router;
        this.location = location;
        this.editMode = false;
    }
    BookingNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    BookingNewComponent.prototype.ngOnDestroy = function () { };
    BookingNewComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.editMode) {
            var newBooking = this.bookingService.updateBookingByTimeAndId(this.oldBooking.startTime, this.oldBooking.tableId, this.bookingForm.value);
            if (newBooking) {
                this.af.bookings.update(this.id, newBooking).then(function (data) {
                    // console.log("update your reservation");
                    // console.log(data);
                    _this.router.navigate(['../../', _this.id], { relativeTo: _this.route, queryParams: { type: 'update' } });
                });
            }
            else {
                this.infoTips = "Sorry for the inconvenience, we're full at that time. You may pick the time in the following ranges or cancel your reservation";
                this.bookingService.quickBookById(this.oldBooking, this.oldBooking.tableId);
                this.findAvailableTimeSlots();
            }
        }
        else {
            // console.log("booking-new: try to add a booking");
            var booking_1 = this.bookingService.addABooking(this.bookingForm.value);
            if (booking_1) {
                this.af.bookings.push(booking_1).then(function (data) {
                    //  console.log("successfully store the data on the firebase");
                    //  console.log("the key is "+ data.key);
                    booking_1.key = data.key;
                    _this.router.navigate(['../', booking_1.key], { relativeTo: _this.route, queryParams: { type: 'new' } });
                });
            }
            else {
                this.infoTips = "Sorry for the inconvenience, we're full at that time. You may pick the time in the following ranges or choose another date.";
                this.findAvailableTimeSlots();
            }
        }
    };
    BookingNewComponent.prototype.onCancel = function () {
        this.location.back();
    };
    BookingNewComponent.prototype.initForm = function () {
        var _this = this;
        var name = '';
        var startTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__shared_utilities__["a" /* dateFormat */])(new Date(Date.now() + 1000 * 3600 * 0.5)).substring(0, 16);
        console.log(startTime);
        var endTime = '';
        var size = '';
        var telephone = '';
        this.bookingForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'time': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](startTime, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__time_validator__["a" /* validateTime */]]),
            'size': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](size, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(1)]),
            'telephone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](telephone, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$")]),
        });
        if (this.editMode) {
            this.bookingService.getAbooking(this.id).subscribe(function (data) {
                _this.oldBooking = data;
                _this.bookingForm.patchValue(data);
            });
        }
    };
    BookingNewComponent.prototype.findAvailableTimeSlots = function () {
        this.timeSlots = null;
        if (this.bookingForm.controls['time'].valid && this.bookingForm.controls['size'].valid) {
            var size = this.bookingForm.controls['size'].value;
            var date = new Date(this.bookingForm.controls['time'].value);
            this.timeSlots = this.bookingService.findAvailabeTimeSlots(size, date);
        }
    };
    return BookingNewComponent;
}());
BookingNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-booking-new',
        template: __webpack_require__("../../../../../src/app/booking-list/booking-new/booking-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/booking-list/booking-new/booking-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__booking_service__["a" /* BookingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__booking_service__["a" /* BookingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_af__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_af__["a" /* AF */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_common__["Location"]) === "function" && _e || Object])
], BookingNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=booking-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_list_table_service__ = __webpack_require__("../../../../../src/app/table-list/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_af__ = __webpack_require__("../../../../../src/app/shared/af.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookingService = (function () {
    function BookingService(af, tableService, flashMessageService) {
        this.af = af;
        this.tableService = tableService;
        this.flashMessageService = flashMessageService;
    }
    ;
    BookingService.prototype.addABooking = function (booking) {
        booking.startTime = (new Date(booking.time)).getTime();
        booking.endTime = booking.startTime + 2 * 3600 * 1000;
        var tableId = this.tableService.bookATable(booking);
        if (tableId) {
            booking.tableId = tableId;
            this.af.storeTablesOnDB();
            return booking;
        }
        else {
            // this.flashMessageService.show("Sorry we can't find a table for you, please try another time",{cssClass: 'alert alert-danger', timeout: 5000});
            // console.log("booking-service: can't find a table for you, please try another time");
            return null;
        }
    };
    BookingService.prototype.findAvailabeTimeSlots = function (size, date) {
        return this.tableService.findAvailableTimeSlots(size, date).filter(function (slot) {
            return slot.endTime - slot.startTime > 2 * 3600 * 1000;
        });
    };
    BookingService.prototype.getAbooking = function (key) {
        return this.af.queryBooking(key);
    };
    BookingService.prototype.getALLBookings = function () {
        return this.af.queryAllBooking();
    };
    BookingService.prototype.cancelBookingByKey = function (code) {
        var _this = this;
        var key = code;
        var booking = this.af.queryBooking(key).subscribe(function (data) {
            if (data.$value !== null) {
                var time = data.startTime;
                var id = data.tableId;
                _this.tableService.cancelTheTableByIdAndTime(time, id);
                _this.af.bookings.remove(key).then(function (res) {
                    _this.flashMessageService.show("successfully delete the reservation", { cssClass: 'alert alert-info', timeout: 3000 });
                    console.log("bookingService: successfully delete the reservation");
                    _this.af.storeTablesOnDB();
                });
            }
        }, function (error) {
            _this.flashMessageService.show("Serve Down!! please try later", { cssClass: 'alert alert-danger', timeout: 3000 });
        });
    };
    BookingService.prototype.updateBookingByTimeAndId = function (time, id, newBooking) {
        this.tableService.cancelTheTableByIdAndTime(time, id);
        return this.addABooking(newBooking);
    };
    BookingService.prototype.quickBookById = function (booking, tableId) {
        booking.startTime = (new Date(booking.time)).getTime();
        booking.endTime = booking.startTime + 2 * 3600 * 1000;
        this.tableService.bookTableByTableId(booking, tableId);
        booking.tableId = tableId;
        this.af.storeTablesOnDB();
        return booking;
    };
    return BookingService;
}());
BookingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_af__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_af__["a" /* AF */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__table_list_table_service__["a" /* TableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__table_list_table_service__["a" /* TableService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], BookingService);

var _a, _b, _c;
//# sourceMappingURL=booking-service.js.map

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-show/booking-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".detail{\n  background: url(" + __webpack_require__("../../../../../src/assets/img/papper.jpg") + ") no-repeat;\n  background-size: cover;\n  color: black;\n  width: 500px;\n  height: 500px;\n  margin-top: 20px;\n  margin-left: 5%;\n}\n.description{\n  margin-top: -40px;\n  left: 20px;\n  font-style: italic;\n  font-size: 1.2em;\n  -webkit-transform: rotateX(50deg) rotateY(3deg);\n  -moz-transform: rotateX(50deg) rotateY(3deg);\n  -o-transform: rotateX(50deg) rotateY(3deg);\n}\n.description h1{\n  text-align: center;\n  padding-left: 80px;\n  color: rgb(92, 39, 12);\n  font-family: 'Cookie', cursive;\n  text-shadow: 1px 1px 2px black;\n}\n\n#bottom{\n  text-align: justify;\n  margin-top: 130px;\n  margin-left: -80px;\n}\n#edit, #delete{\n  color: rgb(92, 39, 12);\n  margin-right: 20px;\n  text-decoration: underline;\n  cursor: pointer;\n  font-style: italic;\n  font-size: 25px;\n  -webkit-transform: rotateX(50deg) rotateY(6deg);\n  -moz-transform: rotateX(50deg) rotateY(6deg);\n  -o-transform: rotateX(50deg) rotateY(6deg);\n}\n#cancel{\n  color: rgb(92, 39, 12);\n  text-decoration: underline;\n  cursor: pointer;\n  font-style: italic;\n  font-size: 25px;\n}\n\n.description p:first-of-type{\n  margin-left: 70px;\n}\n.description p:nth-of-type(2){\n  margin-left: 50px;\n}\n.description p:nth-of-type(3){\n  margin-left: 50px;\n}\n.description p:nth-of-type(5){\n  margin-left: 40px;\n}\n.description p:nth-of-type(7){\n  margin-left: 25px;\n}\n\n#edit:hover{\n  color: orange;\n}\n#delete:hover{\n  color: red;\n}\n#cancel:hover{\n  color: dodgerblue;\n}\n\n.description p:nth-of-type(odd){\n  font-family: 'Abril Fatface', cursive;\n  color: rgb(92, 39, 12);\n  font-size: 1.2em;\n  padding-left: 20%;\n}\n.description p:nth-of-type(even){\n  font-family: 'Cookie', cursive;\n  font-size: 1.5em;\n  text-align: center;\n}\n\nul{\n  list-style-type: none;\n}\n\n.success{\n  margin-top: 60px;\n  text-align: center;\n}\n.success h1{\n  font-family: 'Cookie', cursive;\n}\n.box:before{\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  right: -40px;\n  bottom: -40px;\n  content: \" \";\n  z-index: 3;\n  background-color: white;\n  border-radius: 50%;\n  box-shadow: -3px -3px 6px rgba(0, 0, 0, 0.2), -1px -1px rgba(255, 255, 255, 0.4);\n}\n.box:after{\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  left: -40px;\n  top: -40px;\n  content: \" \";\n  z-index: 3;\n  background-color: white;\n  border-radius: 50%;\n  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2), 1px 1px rgba(255, 255, 255, 0.4);\n}\n.box {\n  background:#fff;\n  transition:all 0.2s ease;\n  box-sizing: border-box;\n  border-radius: 5px;\n  border: 2px solid saddlebrown;\n  background-clip: padding-box;\n  padding:0 20px 20px 20px;\n  min-height:340px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  transition-property: all;\n  transition-duration: 0.5s;\n}\n\n.box:hover {\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n}\n.box:hover:before{\n  box-shadow: -4px -4px 8px rgba(0, 0, 0, 0.1), -1px -1px rgba(255, 255, 255, 0.3);\n  right: -41px;\n  bottom: -41px;\n\n}\n.box:hover:after{\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), 1px 1px rgba(0, 0, 0, 0.3);\n  left: -41px;\n  top: -41px;\n}\n.box span.box-title {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 300;\n  text-transform: uppercase;\n}\n\n.box .box-content {\n  padding: 16px;\n  border-radius: 0 0 2px 2px;\n  background-clip: padding-box;\n  box-sizing: border-box;\n}\n.box .box-content p {\n  color:#515c66;\n  text-transform:none;\n}\n\n.book:hover > .hardcover_front {\n  -webkit-transform: rotateY(-145deg) translateZ(0);\n          transform: rotateY(-145deg) translateZ(0);\n  z-index: 0;\n}\n\n.book:hover > .page li:nth-child(1) {\n  -webkit-transform: rotateY(-30deg);\n          transform: rotateY(-30deg);\n  transition-duration: 1.5s;\n}\n\n.book:hover > .page li:nth-child(2) {\n  -webkit-transform: rotateY(-35deg);\n          transform: rotateY(-35deg);\n  transition-duration: 1.8s;\n}\n\n.book:hover > .page li:nth-child(3) {\n  -webkit-transform: rotateY(-118deg);\n          transform: rotateY(-118deg);\n  transition-duration: 1.6s;\n}\n\n.book:hover > .page li:nth-child(4) {\n  -webkit-transform: rotateY(-130deg);\n          transform: rotateY(-130deg);\n  transition-duration: 1.4s;\n}\n\n.book:hover > .page li:nth-child(5) {\n  -webkit-transform: rotateY(-140deg);\n          transform: rotateY(-140deg);\n  transition-duration: 1.2s;\n}\n.menu{\n  margin: 60px 60px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-show/booking-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"success box col-lg-4 col-md-5 col-sm-12\" *ngIf=\"successMode\">\n      <div class=\"box-content\">\n        <h1>Congratulations!</h1>\n        <br>\n        <p>you have successfully reserve a table</p>\n        <p>your confirmation code is</p>\n        <h4 class=\"btn btn-success tooltip-bottom\"\n            data-tooltip=\"Copy to Click\"\n            (click)=\"copyTextToClipboard(key.substring(2))\">\n          {{this.key.substring(2)}}\n        </h4>\n        <hr>\n        <h1>Bon appétit</h1>\n      </div>\n    </div>\n\n    <div class=\"success  box col-lg-4 col-md-5 col-sm-12\" *ngIf=\"updateMode\">\n      <div class=\"box-content\">\n        <h2>Congratulations!</h2>\n        <br>\n        <h3>you have successfully</h3>\n          <h2>UPDATE </h2>\n        <h3>your reservation</h3>\n      </div>\n    </div>\n\n    <div class=\"detail col-lg-4 col-md-5 col-sm-12\" *ngIf=\"booking\">\n      <!--<img src=\"../../../assets/img/header.jpg\" id=\"header\">-->\n      <div class=\"description\">\n        <h1>{{booking.name}}</h1>\n        <p>Reserve time: </p>\n        <p>{{booking.startTime | date:'medium'}}</p>\n        <p>Table Id:</p>\n        <p>{{booking.tableId | number: '3.0'}}</p>\n        <p>Telephone:</p>\n        <p>{{booking.telephone}}</p>\n        <p>Confirmation Code:</p>\n        <p>{{key.substring(2)}}</p>\n        <p id=\"bottom\" class=\"center-block\">\n          <a id=\"edit\" (click)=\"onEdit()\">edit</a>\n          <a id=\"delete\" (click)=\"onShowDialog()\">delete</a>\n          <a id=\"cancel\" (click)=\"onCancel()\">Cancel</a>\n        </p>\n      </div>\n      <!--<img src=\"../../../assets/img/footer.jpg\" id=\"footer\">-->\n    </div>\n    <div class=\"menu col col-lg-4 col-md-6 col-xs-12\" *ngIf=\"booking&&!successMode&&!updateMode\">\n      <app-menu></app-menu>\n    </div>\n\n    <div *ngIf=\"!booking && searchMode\" class=\"failed\">\n      <h3><i class=\"fa fa-frown-o\" aria-hidden=\"true\"></i> Oops! </h3>\n      we can't find reservation for <span>{{this.key.substring(2)}}</span>, please confirm your code\n    </div>\n  </div>\n</div>\n\n<div class=\"confirm\">\n  <app-modal [(visible)] = 'showDialog' [width]=\"400\" [height]=\"300\">\n    <div *ngIf=\"booking\">\n      <h1 style=\"color: #d9534f\">Remove Reservation</h1>\n      <hr>\n      <h4>Do you want to delete your reservation?</h4>\n      <div class=\"text-center\">\n        <p>{{booking.name}}</p>\n        <p>{{booking.time | date:'medium'}}</p>\n        <p>{{key.substring(2)}}</p>\n      </div>\n      <div class=\"col-12-xs text-center col-md\">\n        <button class=\"btn btn-danger btn-md\"\n                (click)=\"onDelete(this.key)\">\n          Delete\n        </button>\n        <button class=\"btn btn-default btn-md\" (click)=\"showDialog=false\">Cancel</button>\n      </div>\n    </div>\n  </app-modal>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-show/booking-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_service__ = __webpack_require__("../../../../../src/app/booking-list/booking-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookingShowComponent = (function () {
    function BookingShowComponent(route, router, bookingService, location) {
        this.route = route;
        this.router = router;
        this.bookingService = bookingService;
        this.location = location;
        this.successMode = false;
        this.searchMode = true;
        this.updateMode = false;
        this.showDialog = false;
    }
    BookingShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.key = params['id'];
            _this.bookingService.getAbooking(_this.key).subscribe(function (data) {
                if (data.$value !== null) {
                    _this.booking = data;
                }
                else {
                    console.log("sorry, can't find your reservation, please ");
                }
            }, function (error) {
                console.log("server down, please try again later");
            });
        });
        this.route.queryParams.subscribe(function (queryParams) {
            if (queryParams['type'] === "new") {
                _this.successMode = true;
                _this.searchMode = false;
                _this.updateMode = false;
            }
            else if (queryParams['type'] === 'search') {
                _this.searchMode = true;
                _this.successMode = false;
                _this.updateMode = false;
            }
            else if (queryParams['type'] === 'update') {
                _this.updateMode = true;
                _this.searchMode = false;
                _this.successMode = false;
            }
        });
        window.scrollTo(0, 0);
    };
    BookingShowComponent.prototype.copyTextToClipboard = function (text) {
        var textArea = document.createElement("textarea");
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = '0';
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
        }
        catch (err) {
            console.log('Oops, unable to copy');
        }
        document.body.removeChild(textArea);
    };
    BookingShowComponent.prototype.onDelete = function (key) {
        this.bookingService.cancelBookingByKey(key);
        this.showDialog = false;
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    BookingShowComponent.prototype.onEdit = function (key) {
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    BookingShowComponent.prototype.onShowDialog = function () {
        this.showDialog = true;
    };
    BookingShowComponent.prototype.onCancel = function () {
        this.location.back();
    };
    return BookingShowComponent;
}());
BookingShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-booking-show',
        template: __webpack_require__("../../../../../src/app/booking-list/booking-show/booking-show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/booking-list/booking-show/booking-show.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__booking_service__["a" /* BookingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _d || Object])
], BookingShowComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=booking-show.component.js.map

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-show/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tp-wrapper {\n  -webkit-perspective: 800px;\n          perspective: 800px;\n}\n\n.tp-box {\n  position: relative;\n  width: 470px;\n  padding: 5px;\n  height: 365px;\n  margin: 3rem auto;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n}\n.tp-box__side {\n  width: 100%;\n  height: 100%;\n  box-sizing: content-box;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  color: #fff;\n  text-align: center;\n  line-height: 100px;\n  font-size: 24px;\n  font-weight: 700;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: solid 3px black;\n  outline: solid 8px black;\n  outline-offset: 3px;\n  padding: 5px;\n}\n.tp-box__front {\n}\n.tp-box__back {\n  -webkit-transform: rotateY(179.9deg);\n          transform: rotateY(179.9deg);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-show/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tp-wrapper\">\n  <div class=\"tp-box\" (click)=\"toggleFlip()\" [@flipState]=\"flip\">\n    <div class=\"tp-box__side tp-box__front\">\n      <img src=\"../../../../assets/img/menu-front.jpg\" width=\"470\" alt=\"menu-front\">\n    </div>\n    <div class=\"tp-box__side tp-box__back\">\n      <img src=\"../../../../assets/img/menu-back.jpg\" width=\"470\" alt=\"menu-back\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/booking-list/booking-show/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
        this.flip = 'inactive';
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.toggleFlip = function () {
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/booking-list/booking-show/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/booking-list/booking-show/menu/menu.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('flipState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'rotateY(179.9deg)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    transform: 'rotateY(0)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/booking-list/time-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateTime;
function validateTime(time) {
    var t = (new Date(time.value));
    if (t.getTime() < Date.now()) {
        return {
            validateTime: {
                error: "You must pick a future time."
            }
        };
    }
    else {
        if (t.getHours() < 11 || t.getHours() > 22) {
            return {
                validateTime: {
                    error: "Sorry, we only server from 11:00 AM to 11:00 PM."
                }
            };
        }
    }
    return null;
}
//# sourceMappingURL=time-validator.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contact-item/contact-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".border{\n  width: 540px;\n  font-size: 0;\n  position: absolute;\n  left: -25px;\n  z-index: 10;\n}\n.pricingTable{\n  text-align: center;\n  background: #fcfcfc;\n  padding-top: 5px;\n  transition: all 0.5s ease-in-out 0s;\n}\n.pricingTable > .pricingTable-header{\n  color:#fff;\n  background: rgb(191,179,155);\n  cursor: pointer;\n  height: 190px;\n  position: relative;\n  top: 80px;\n  transition: all 0.5s ease 0s;\n}\n.pricingTable > .pricingTable-header:after{\n  content: \"\";\n  border-bottom: 40px solid #fcfcfc;\n  border-left: 263px solid transparent;\n  position: absolute;\n  right:0px;\n  bottom: 0px;\n}\n.pricingTable:hover .pricingTable-header{\n  height: 230px;\n  top: 100px;\n  transition: all 0.5s ease 0s;\n}\n.pricingTable-header > .heading{\n  display: block;\n  padding: 20px 0;\n}\n.heading > h3{\n  margin: 0;\n\n}\n.pricingTable-header > .price-value{\n  font-family: 'Cookie', cursive;\n  font-size: 60px;\n  line-height: 60px;\n  position: relative;\n  top:70px;\n}\n.pricingTable-header > .price-value > .mo{\n  font-size: 20px;\n  font-family: 'Abril Fatface', cursive;\n  display: block;\n}\n.pricingTable > .pricingContent{\n  font-family: 'Abril Fatface', cursive;\n  text-align: center;\n  color:rgb(92, 39, 12)\n}\n.pricingTable > .pricingContent > ul{\n  list-style: none;\n  padding-top: 100px;\n}\n.pricingTable > .pricingContent > ul > li{\n  padding: 15px 0;\n  border-bottom: 1px solid #fff;\n}\n.pricingTable > .pricingContent > ul > li:last-child{\n  border: 0px none;\n}\n.pricingTable-sign-up{\n  padding: 30px 0;\n}\n\n@media screen and (max-width: 1200px){\n  .pricingTable > .pricingTable-header:after{\n    border-left: 215px solid transparent;\n  }\n}\n@media screen and (max-width: 990px){\n  .pricingTable{\n    margin-bottom: 20px;\n  }\n  .pricingTable > .pricingTable-header:after{\n    border-left: 349px solid transparent;\n  }\n}\n@media screen and (max-width: 480px){\n  .pricingTable{\n    overflow: hidden;\n  }\n  .pricingTable > .pricingTable-header:after {\n    border-left: 459px solid rgba(0, 0, 0, 0);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contact-item/contact-item.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"border\">\n  <img src=\"../../../assets/img/border.png\" height=\"175\"/>\n  <img src=\"../../../assets/img/border.png\" height=\"175\"/>\n  <img src=\"../../../assets/img/border.png\" height=\"175\"/>\n</div>\n\n<div class=\"pricingTable\">\n  <div class=\"pricingTable-header\">\n    <span class=\"price-value\">\n      {{contact.name}}\n      <span class=\"mo\">\n        {{contact.telephone|telephone}}\n      </span>\n    </span>\n  </div>\n  <div class=\"pricingContent\">\n    <ul>\n      <li *ngFor=\"let booking of contact.bookings | sortByTime\">\n        {{booking.time|date: 'medium'}} ----- {{booking.size}} people\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contacts/contact-item/contact-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_model__ = __webpack_require__("../../../../../src/app/contacts/contact.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactItemComponent = (function () {
    function ContactItemComponent() {
    }
    ContactItemComponent.prototype.ngOnInit = function () {
    };
    return ContactItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact_model__["a" /* ContactModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact_model__["a" /* ContactModel */]) === "function" && _a || Object)
], ContactItemComponent.prototype, "contact", void 0);
ContactItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact-item',
        template: __webpack_require__("../../../../../src/app/contacts/contact-item/contact-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contacts/contact-item/contact-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactItemComponent);

var _a;
//# sourceMappingURL=contact-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contact.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModel; });
var ContactModel = (function () {
    function ContactModel(name, telephone) {
        this.name = name;
        this.telephone = telephone;
        this.bookings = [];
    }
    return ContactModel;
}());

//# sourceMappingURL=contact.model.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_model__ = __webpack_require__("../../../../../src/app/contacts/contact.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_list_booking_service__ = __webpack_require__("../../../../../src/app/booking-list/booking-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = (function () {
    function ContactService(bookingService) {
        var _this = this;
        this.bookingService = bookingService;
        this.contacts = new Map();
        this.bookingService.getALLBookings().subscribe(function (data) {
            _this.bookingLists = data;
            _this.bookingLists.map(function (booking) {
                if (_this.contacts.has(booking.telephone)) {
                    _this.contacts.get(booking.telephone).bookings.push(booking);
                }
                else {
                    var contact = new __WEBPACK_IMPORTED_MODULE_1__contact_model__["a" /* ContactModel */](booking.name, booking.telephone);
                    contact.bookings.push(booking);
                    _this.contacts.set(booking.telephone, contact);
                }
            });
        });
    }
    ContactService.prototype.getContacts = function () {
        return new Map(this.contacts);
    };
    return ContactService;
}());
ContactService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__booking_list_booking_service__["a" /* BookingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__booking_list_booking_service__["a" /* BookingService */]) === "function" && _a || Object])
], ContactService);

var _a;
//# sourceMappingURL=contact.service.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".single {\n  padding: 30px 15px;\n  margin-top: 40px;\n  background: #fcfcfc;\n  border: 1px solid #f0f0f0;\n}\n.single h3.side-title {\n  margin: 0;\n  margin-bottom: 10px;\n  padding: 0;\n  font-family: 'Abril Fatface', cursive;\n  font-size: 40px;\n  color: #333;\n  text-transform: uppercase;\n}\n.single h3.side-title:after {\n  content: '';\n  width: 60px;\n  height: 1px;\n  background: rgb(92, 39, 12);\n  display: block;\n  margin-top: 6px;\n}\n\n.single ul {\n  margin-bottom: 0;\n}\n.single li a {\n  color: #666;\n  font-size: 14px;\n  text-transform: uppercase;\n  border-bottom: 1px solid #f0f0f0;\n  line-height: 40px;\n  display: block;\n  text-decoration: none;\n  cursor: pointer;\n  transition: font 0.3s ease\n}\n.single li a:hover {\n  color: rgb(92, 39, 12);\n  font-size: 1.3em;\n}\n.single li:last-child a {\n  border-bottom: 0;\n}\nimg{\n  position: relative;\n  top:-10px;\n  opacity: 0.7;\n}\n.search-form .form-group {\n  transition: all 0.35s, border-radius 0s;\n  width: 32px;\n  height: 32px;\n  margin-left: 15px;\n  background-color: #fff;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\n  border-radius: 25px;\n  border: 1px solid #ccc;\n}\n.search-form .form-group input.form-control {\n  padding-right: 20px;\n  border: 0 none;\n  background: transparent;\n  box-shadow: none;\n  display:block;\n}\n.search-form .form-group input.form-control::-webkit-input-placeholder {\n  display: none;\n}\n.search-form .form-group input.form-control:-moz-placeholder {\n  /* Firefox 18- */\n  display: none;\n}\n.search-form .form-group input.form-control::-moz-placeholder {\n  /* Firefox 19+ */\n  display: none;\n}\n.search-form .form-group input.form-control:-ms-input-placeholder {\n  display: none;\n}\n.search-form .form-group:hover,\n.search-form .form-group.hover {\n  width: 90%;\n  border-radius: 4px 25px 25px 4px;\n}\n.search-form .form-group span.form-control-feedback {\n  position: absolute;\n  top: -1px;\n  right: -2px;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  color: rgb(94, 56, 37);\n  left: initial;\n  font-size: 14px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <!-- Category -->\n      <div class=\"single category\">\n        <h3 class=\"side-title\">Contacts <img class=\"pull-right\" width=\"60\" src=\"../../assets/img/Hogwarts_Logo.png\" alt=\"logo\"></h3>\n        <div class=\"row\">\n          <form action=\"\" class=\"search-form\">\n            <div class=\"form-group has-feedback\">\n              <label for=\"search\" class=\"sr-only\">Search</label>\n              <input type=\"text\" class=\"form-control\"\n                     name=\"search\"\n                     id=\"search\"\n                     [value]=\"searchWord\"\n                     [(ngModel)]=\"searchWord\"\n                     placeholder=\"search\">\n              <span class=\"glyphicon glyphicon-search form-control-feedback\"></span>\n            </div>\n          </form>\n        </div>\n        <ul class=\"list-unstyled\">\n          <li *ngFor=\"let contact of contactList |searchName: searchWord |sortByName\">\n            <a class=\"item\" (click)=\"onSelected(contact)\">\n              {{contact.name}}\n              <span class=\"pull-right\">\n                ({{contact.bookings.length}})\n              </span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-md-5 col-md-offset-1 col-sm-10 text-center\" *ngIf=\"selectedContact\">\n      <app-contact-item [contact]=\"selectedContact\"></app-contact-item>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_model__ = __webpack_require__("../../../../../src/app/contacts/contact.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_list_booking_service__ = __webpack_require__("../../../../../src/app/booking-list/booking-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsComponent = (function () {
    function ContactsComponent(bookingService) {
        this.bookingService = bookingService;
        this.contacts = new Map();
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookingService.getALLBookings().subscribe(function (data) {
            _this.bookingLists = data;
            _this.bookingLists.map(function (booking) {
                if (_this.contacts.has(booking.telephone)) {
                    _this.contacts.get(booking.telephone).bookings.push(booking);
                }
                else {
                    var contact = new __WEBPACK_IMPORTED_MODULE_1__contact_model__["a" /* ContactModel */](booking.name, booking.telephone);
                    contact.bookings.push(booking);
                    _this.contacts.set(booking.telephone, contact);
                }
            });
            _this.contactList = Array.from(_this.contacts.values());
        });
    };
    ContactsComponent.prototype.onSelected = function (contact) {
        if (this.selectedContact === contact) {
            this.selectedContact = null;
        }
        else {
            this.selectedContact = contact;
        }
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contacts',
        template: __webpack_require__("../../../../../src/app/contacts/contacts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contacts/contacts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__booking_list_booking_service__["a" /* BookingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__booking_list_booking_service__["a" /* BookingService */]) === "function" && _a || Object])
], ContactsComponent);

var _a;
//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar{\n  z-index: 10;\n}\ninput{\n  background: rgb(88, 96, 105);\n  border: none;\n  border-radius: 3px 0 0 3px;\n  color: white;\n}\n.logo img{\n  position: absolute;\n}\ninput::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: darkgray;\n}\ninput::-moz-placeholder { /* Firefox 19+ */\n  color: ghostwhite;\n}\ninput:-ms-input-placeholder { /* IE 10+ */\n  color: ghostwhite;\n}\ninput:-moz-placeholder { /* Firefox 18- */\n  color: ghostwhite;\n}\n\nbutton[type=submit] {\n  background: rgb(88, 96, 105);\n  border-radius: 0 3px 3px 0;\n  color: darkgray;\n  margin-left: -2px;\n}\nbutton[type=submit]:focus,:hover{\n  color: white;\n}\n\n\n\n.bs-dark .dropdown-menu {\n  min-width: 200px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  background-color: #000;\n  border: 1px solid rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, .15);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n\n.bs-dark .dropdown-menu .divider {\n  border: 1px solid rgba(0, 0, 0, 0.8);\n}\n.bs-dark .dropdown-menu > li > a {\n  padding: 6px 20px;\n  color: rgba(255,255,255,0.80);\n}\n.bs-dark .dropdown-menu > li > a:hover,\n.bs-dark .dropdown-menu > li > a:focus {\n  color: rgb(255,255,255);\n  text-decoration: none;\n  background-color: transparent;\n}\n.bs-dark .dropdown-menu > .active > a,\n.bs-dark .dropdown-menu > .active > a:hover,\n.bs-dark .dropdown-menu > .active > a:focus {\n  color: rgb(255,255,255);\n  text-decoration: none;\n  background-color: transparent;\n  outline: 0;\n}\n/*.navbar:after{*/\n   /*content: \"\";*/\n   /*width: 100px;*/\n   /*height: 100px;*/\n   /*left: 45%;*/\n   /*top:-10px;*/\n   /*position: absolute;*/\n   /*background-color: rgb(34,34,34);*/\n   /*border-radius: 50%;*/\n   /*z-index: 12;*/\n /*}*/\n\n.navbar:after{\n  content: \"\";\n  width: 100px;\n  height: 100px;\n  left: 45%;\n  top:-10px;\n  position: absolute;\n  background-color: rgb(34,34,34);\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  z-index: 3;\n}\n.logo{\n  width: 70px;\n  position: absolute;\n  left: 43.8%;\n  top: 10px;\n  z-index: 14;\n  opacity: 0.9;\n  cursor: pointer;\n}\nimg[alt=Logo]:hover{\n  -webkit-filter: brightness(90%);\n          filter: brightness(90%);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n       <a routerLink=\"/\" style=\"cursor: pointer;\" class=\"navbar-brand\">Magic Café</a>\n    </div>\n\n    <form class=\"navbar-form navbar-right search-scope\" role=\"search\">\n      <div class=\"form-group search\">\n        <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"key\" style=\"width: 200px\" placeholder=\"Search your reservation\">\n        <button type=\"submit\" (click)='onSubmit()' class=\"btn\"><i class=\"fa fa-search\"></i>\n        </button>\n      </div>\n    </form>\n    <div class=\"collapse navbar-collapse bs-dark\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a href=\"#\" routerLink=\"/about\">About us</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <ng-template [ngIf]=\"!authService.isAuthenticated()\">\n          <li><a routerLink=\"/signup\">Owner Register</a></li>\n          <li><a routerLink=\"/login\">Login</a></li>\n        </ng-template>\n        <ng-template [ngIf]=\"authService.isAuthenticated()\" >\n          <li class=\"dropdown\" appDropdown>\n            <a style=\"cursor: pointer;\" class=\"dropdown-toggle\" role=\"button\">Manage <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li routerLinkActive=\"active\"><a href=\"#\" routerLink=\"/bookings\">Booking List</a></li>\n              <li routerLinkActive=\"active\"><a href=\"#\" routerLink=\"/tables\">Tables</a></li>\n              <li routerLinkActive=\"active\"><a href=\"#\" routerLink=\"/contacts\">Contacts</a></li>\n            </ul>\n          </li>\n          <li><a style=\"cursor: pointer;\" (click)=\"onLogOut()\" >Log Out</a></li>\n        </ng-template>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"logo\">\n  <a routerLink=\"/main\">\n    <img  class=\"logo\" src=\"../../assets/img/Hogwarts_Logo1.png\" alt=\"Logo\">\n  </a>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onSubmit = function () {
        this.router.navigate(['../bookings', "-K" + this.key], { relativeTo: this.route, queryParams: { type: 'search' } });
    };
    HeaderComponent.prototype.onLogOut = function () {
        this.authService.logout();
        this.router.navigate(['']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\n  margin-top: 0;\n}\n.header .block h1{\n  color: white;\n  font-size: 6em;\n  height: auto;\n  font-weight: bolder;\n  text-align: center;\n  position: relative;\n  overflow: visible;\n  padding: 5px;\n  top: 80px;\n  z-index: 10;\n  opacity: 1;\n  font-family: 'Great Vibes', cursive;\n  background: #f7ff00;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #db36a4, #f7ff00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.header .block h3{\n  text-align: center;\n  color: white;\n  z-index:10;\n  position: relative;\n  top: 90px;\n  font-family: 'Great Vibes', cursive;\n  font-weight: bolder;\n  background: #f7ff00;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #db36a4, #f7ff00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.header .block{\n  width: 100%;\n  position: relative;\n  background-color: rgb(34,34,34);\n  z-index: 3;\n  opacity: 1;\n  top: -70px;\n  left: 0;\n  height: 300px;\n  transition: all 2s;\n  overflow: hidden;\n  opacity: 0.6;\n}\n/*.header .block:hover{*/\n  /*height: 0px;*/\n/*}*/\n/*.header .block:hover:after{*/\n  /*top: -10px;*/\n/*}*/\n.header .block img{\n  width: 100%;\n\n}\n.header .block-after{\n  content: \"\";\n  color: white;\n  width: 100px;\n  height: 100px;\n  position: relative;\n  top: -120px;\n  left: 45%;\n  opacity: 0.8;\n  background-color: black;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  z-index: 0;\n  transition: all 1.8s;\n  overflow: visible;\n}\n.header .block-after img{\n  width: 65px;\n  margin-top: 45px;\n  margin-left: 45px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  z-index: 60;\n  -webkit-filter: brightness(80%);\n          filter: brightness(80%);\n  cursor: pointer;\n}\n\n.header .block-after img:hover{\n  -webkit-filter: brightness(100%);\n          filter: brightness(100%);\n  -webkit-transform: scale(1.1, 1.1) rotate(-45deg);\n          transform: scale(1.1, 1.1) rotate(-45deg);\n\n}\n.carousel-caption{\n  top:220px;\n}\n\n.main{\n  width: 100%;\n  position: absolute;\n  z-index: -10;\n  margin-top: -15px;\n  background-size: cover;\n  background-color: rgb(34,34,34);\n}\n.main img{\n  position: fixed;\n  width: 400px;\n\n}\n#myCarousel{\n  width: 80%;\n  margin: auto;\n  overflow: hidden;\n}\n.carousel-inner .item{\n  width: 100%;\n  height: 700px;\n  box-sizing: border-box;\n  border: solid 10px white !important;\n\n}\n.carousel-inner img{\n  width: 100%;\n  height: 100%;\n}\nfooter{\n  width: 100%;\n  line-height: 30px;\n  text-align: center;\n  position: absolute;\n  background-color: black;\n  color: snow;\n}\n\n\n\n/* ==============================================================================================\nNick Mkrtchyan\nhttps://www.facebook.com/sonick.pk\nhttp://www.Mkrtchyan.zz.mu\n================================================================================================= */\n\n@keyframes move-twink-back {\n  from {background-position:0 0;}\n  to {background-position:-10000px 5000px;}\n}\n@-webkit-keyframes move-twink-back {\n  from {background-position:0 0;}\n  to {background-position:-10000px 5000px;}\n}\n\n@keyframes move-clouds-back {\n  from {background-position:0 0;}\n  to {background-position:10000px 0;}\n}\n@-webkit-keyframes move-clouds-back {\n  from {background-position:0 0;}\n  to {background-position:10000px 0;}\n}\n\n.stars, .twinkling, .clouds {\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  width:100%;\n  height:100%;\n  display:block;\n}\n\n.stars {\n  background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;\n  z-index:0;\n}\n\n.twinkling{\n  background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;\n  z-index:1;\n  -webkit-animation:move-twink-back 200s linear infinite;\n  animation:move-twink-back 200s linear infinite;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img src=\"../../assets/img/photo-culinaire-pexels.jpg\" alt=\"Chania\">\n        <div class=\"carousel-caption\">\n          <h3>RESERVATION IS NOW POSSIBLE!</h3>\n          <p>We hear you and we will be taking reservations at 11:AM to 11:PM. </p>\n        </div>\n      </div>\n\n      <div class=\"item\">\n        <img src=\"../../assets/img/photo2.jpg\" alt=\"Chicago\">\n        <div class=\"carousel-caption\">\n          <h3>CLOSED DOOR EVENTS</h3>\n          <p>Book the entire place for exclusive use because something is worth celebrating! Be it birthdays, baby showers or company events, this is the place to be! We customize the menu for every event to meet your needs and budget to celebrate this joyous occasion together.</p>\n        </div>\n      </div>\n\n      <div class=\"item\">\n        <img src=\"../../assets/img/photo3.jpg\" alt=\"New York\">\n        <div class=\"carousel-caption\">\n          <h3>PRIVATE SPACE EVENT</h3>\n          <p>Don’t need an entire café for your awesome party? No worries! You can also book a private corner to cater to the needs of your guests!</p>\n            <p>Contact us for more details at <span style=\"text-decoration: underline; color: lightcyan\">ellie.1010@gmail.com</span></p>\n        </div>\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <footer>\n    This website's content is Copyright © Ellie Wang. | Website Designed and Maintained By Ellie Wang\n  </footer>\n</div>\n\n\n<div class=\"header\">\n  <div class=\"block\" [@flipState]=\"flip\">\n    <div class=\"stars\"></div>\n    <div class=\"twinkling\"></div>\n    <h1>Magic Café</h1>\n    <h3>Harry Potter inspired Restaurant <sup>&reg;</sup></h3>\n  </div>\n\n  <div class=\"block-after\">\n    <a href=\"#\" routerLink=\"/bookings/new\">\n      <img  src=\"../../assets/icons/icons8-Restaurant-100.png\"\n            alt=\"start\" title=\"Reserve a Party\"\n      ></a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.onWindowScroll = function () {
        if (window.scrollY > 30) {
            this.flip = 'inactive';
        }
        else if (window.scrollY > 10) {
            this.flip = 'middle';
        }
        else {
            this.flip = 'active';
        }
    };
    return MainComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MainComponent.prototype, "onWindowScroll", null);
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('flipState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    height: '300px'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('middle', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    height: '100px'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    height: '100px'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => middle', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('3s ease-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('middle=>active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('3s ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => middle', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('3s ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('middle => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('3s ease-in'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/af.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_list_table_service__ = __webpack_require__("../../../../../src/app/table-list/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AF; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TABLE_URL = 'https://restaurant-1defc.firebaseio.com/tables.json';
var USERS_URL = 'https://restaurant-1defc.firebaseio.com/users.json';
var AF = (function () {
    function AF(db, tableService, http, authService) {
        this.db = db;
        this.tableService = tableService;
        this.http = http;
        this.authService = authService;
        this.bookings = this.db.list('/bookings');
        this.getTablesFromDB();
    }
    AF.prototype.queryBooking = function (key) {
        return this.db.object('/bookings/' + key);
    };
    AF.prototype.storeTablesOnDB = function () {
        console.log("af serve: try to store tables on serves");
        this.http.put(TABLE_URL, JSON.stringify(this.tableService.getTables())).subscribe();
    };
    AF.prototype.getTablesFromDB = function () {
        var _this = this;
        this.http.get(TABLE_URL).map(function (res) {
            var tables = res.json();
            for (var _i = 0, tables_1 = tables; _i < tables_1.length; _i++) {
                var table = tables_1[_i];
                if (!table['bookinglist']) {
                    table['bookinglist'] = [];
                }
            }
            return tables;
        }).subscribe(function (tables) {
            console.log("successfully query the tables from DB");
            _this.tableService.setTables(tables);
        });
    };
    ;
    AF.prototype.queryAllBooking = function () {
        return this.bookings.map(function (res) {
            var bookings = [];
            res.map(function (data) {
                data.key = data.$key;
                bookings.push(data);
            });
            return bookings;
        });
    };
    AF.prototype.getUserInfo = function () {
        return this.http.get(USERS_URL);
    };
    AF.prototype.storeUserInfo = function (info) {
        var token = this.authService.getToken();
        this.http.put(USERS_URL + "?auth=" + token, JSON.stringify(info)).subscribe(function (res) {
        });
    };
    return AF;
}());
AF = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__table_list_table_service__["a" /* TableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__table_list_table_service__["a" /* TableService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], AF);

var _a, _b, _c, _d;
//# sourceMappingURL=af.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    return DropdownDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appDropdown]'
    })
], DropdownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/loading/loading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#loader {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n#loader {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n#loader .dot {\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 87.5px;\n}\n#loader .dot::before {\n  border-radius: 100%;\n  content: \"\";\n  height: 87.5px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  width: 87.5px;\n}\n#loader .dot:nth-child(7n+1) {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n#loader .dot:nth-child(7n+1)::before {\n  -webkit-animation: 0.8s linear 0.1s normal none infinite running load;\n          animation: 0.8s linear 0.1s normal none infinite running load;\n  background: lightyellow none repeat scroll 0 0;\n}\n#loader .dot:nth-child(7n+2) {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n#loader .dot:nth-child(7n+2)::before {\n  -webkit-animation: 0.8s linear 0.2s normal none infinite running load;\n          animation: 0.8s linear 0.2s normal none infinite running load;\n  background: rgba(250,250,11,0.75) none repeat scroll 0 0;\n}\n#loader .dot:nth-child(7n+3) {\n  -webkit-transform: rotate(135deg);\n          transform: rotate(135deg);\n}\n#loader .dot:nth-child(7n+3)::before {\n  -webkit-animation: 0.8s linear 0.3s normal none infinite running load;\n          animation: 0.8s linear 0.3s normal none infinite running load;\n  background: rgba(250,232,47,0.75) none repeat scroll 0 0;\n}\n#loader .dot:nth-child(7n+4) {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n#loader .dot:nth-child(7n+4)::before {\n  -webkit-animation: 0.8s linear 0.4s normal none infinite running load;\n          animation: 0.8s linear 0.4s normal none infinite running load;\n  background: rgba(250,209,34,0.75) none repeat scroll 0 0;\n}\n#loader .dot:nth-child(7n+5) {\n  -webkit-transform: rotate(225deg);\n          transform: rotate(225deg);\n}\n#loader .dot:nth-child(7n+5)::before {\n  -webkit-animation: 0.8s linear 0.5s normal none infinite running load;\n          animation: 0.8s linear 0.5s normal none infinite running load;\n  background:  yellow none repeat scroll 0 0;\n}\n#loader .dot:nth-child(7n+6) {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n#loader .dot:nth-child(7n+6)::before {\n  -webkit-animation: 0.8s linear 0.6s normal none infinite running load;\n          animation: 0.8s linear 0.6s normal none infinite running load;\n  background: rgba(250,210,0,0.75) none repeat scroll 0 0;\n}\n#loader .dot:nth-child(7n+7) {\n  -webkit-transform: rotate(315deg);\n          transform: rotate(315deg);\n}\n#loader .dot:nth-child(7n+7)::before {\n  -webkit-animation: 0.8s linear 0.7s normal none infinite running load;\n          animation: 0.8s linear 0.7s normal none infinite running load;\n  background: rgba(250,228,0,0.75) none repeat scroll 0 0;\n}\n#loader .dot:nth-child(7n+8) {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n}\n#loader .dot:nth-child(7n+8)::before {\n  -webkit-animation: 0.8s linear 0.8s normal none infinite running load;\n          animation: 0.8s linear 0.8s normal none infinite running load;\n  background: lemonchiffon none repeat scroll 0 0;\n}\n#loader .lading {\n  bottom: -40px;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  width: 180px;\n}\n@-webkit-keyframes load {\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes load {\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"loader\">\n  <div class=\"dot\"></div>\n  <div class=\"dot\"></div>\n  <div class=\"dot\"></div>\n  <div class=\"dot\"></div>\n  <div class=\"dot\"></div>\n  <div class=\"dot\"></div>\n  <div class=\"dot\"></div>\n  <div class=\"dot\"></div>\n  <div class=\"lading\"></div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    return LoadingComponent;
}());
LoadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loading',
        template: __webpack_require__("../../../../../src/app/shared/loading/loading.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/loading/loading.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoadingComponent);

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modal/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n}\n\n.dialog {\n  z-index: 1000;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 20px;\n  border-radius: 15px;\n  margin: auto;\n  background-color: #fff;\n  padding: 25px;\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n\n@media (min-width: 768px) {\n  .dialog {\n    top: 40px;\n  }\n}\n\n.dialog__close-btn {\n  border: 0;\n  background: none;\n  color: #2d2d2d;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-size: 22px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialog\"\n     [style.width]=\"width+'px'\"\n     [style.height]=\"height+'px'\">\n  <ng-content>\n  </ng-content>\n  <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"dialog__close-btn\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i></button>\n</div>\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
    function ModalComponent() {
        this.closable = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ModalComponent.prototype.ngOnInit = function () { };
    ModalComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    ModalComponent.prototype.onSubmit = function () {
        console.log("hello");
    };
    return ModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ModalComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ModalComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "closable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ModalComponent.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ModalComponent.prototype, "visibleChange", void 0);
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__("../../../../../src/app/shared/modal/modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/modal/modal.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('dialog', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale3d(.1, .1, .1)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* animate */])(100)
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* animate */])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);

var _a;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelephonePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CapitalizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RomanizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FilterListPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SearchNamePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SortByTimePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SortByNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TelephonePipe = (function () {
    function TelephonePipe() {
    }
    TelephonePipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        if (value.length === 10) {
            return "(" + value.substring(0, 3) + ") " + value.substring(3, 6) + '-' + value.substring(6);
        }
        return value[0] + "(" + value.substring(1, 3) + ") " + value.substring(4, 7) + '-' + value.substring(7);
    };
    return TelephonePipe;
}());
TelephonePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'telephone' })
], TelephonePipe);

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        return value.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'capitalize' })
], CapitalizePipe);

var RomanizePipe = (function () {
    function RomanizePipe() {
    }
    RomanizePipe.prototype.transform = function (value, args) {
        if (!value)
            return false;
        var digits = String(value).split(""), key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], roman = "", i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
    };
    return RomanizePipe;
}());
RomanizePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'roman' })
], RomanizePipe);

var FilterListPipe = (function () {
    function FilterListPipe() {
    }
    FilterListPipe.prototype.transform = function (bookings, arg) {
        if (!bookings)
            return;
        if (arg === 'all') {
            return bookings;
        }
        var time = new Date();
        if (arg === 'today') {
            return bookings.filter(function (booking) {
                return new Date(booking.startTime).getDate() === time.getDate() && new Date(booking.endTime) >= time;
            });
        }
        return bookings.filter(function (booking) {
            return booking.endTime > time.getTime();
        });
    };
    return FilterListPipe;
}());
FilterListPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'filterList' })
], FilterListPipe);

var SearchNamePipe = (function () {
    function SearchNamePipe() {
    }
    SearchNamePipe.prototype.transform = function (items, arg) {
        if (!items || !arg)
            return items;
        return items.filter(function (item) {
            return item.name.toUpperCase().indexOf(arg.toUpperCase()) !== -1;
        });
    };
    return SearchNamePipe;
}());
SearchNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'searchName' })
], SearchNamePipe);

var SortByTimePipe = (function () {
    function SortByTimePipe() {
    }
    SortByTimePipe.prototype.transform = function (items) {
        if (!items)
            return items;
        return items.sort(function (a, b) { return a.startTime - b.startTime; });
    };
    return SortByTimePipe;
}());
SortByTimePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'sortByTime' })
], SortByTimePipe);

var SortByNamePipe = (function () {
    function SortByNamePipe() {
    }
    SortByNamePipe.prototype.transform = function (items) {
        if (!items)
            return items;
        return items.sort(function (a, b) {
            return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
        });
    };
    return SortByNamePipe;
}());
SortByNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'sortByName' })
], SortByNamePipe);

//# sourceMappingURL=pipes.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/utilities.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export copyTextToClipboard */
/* harmony export (immutable) */ __webpack_exports__["a"] = dateFormat;
function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
    }
    catch (err) {
        console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
}
function dateFormat(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var n = date.getTimezoneOffset() / 60;
    var offset = "";
    if (n > 0) {
        offset = "-";
    }
    else {
        offset = "+";
        n = (-1) * n;
    }
    if (n < 9) {
        offset += "0" + n;
    }
    else {
        offset += n;
    }
    var result = yyyy + '-' + mm + '-' + dd + "T" + hour + ":" + minutes + ":" + seconds + offset + ":00";
    return result;
}
//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ "../../../../../src/app/table-list/table-item/logo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.b218cf0ed2d281fd8cd1.png";

/***/ }),

/***/ "../../../../../src/app/table-list/table-item/table-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item{\n  background: url(" + __webpack_require__("../../../../../src/app/table-list/table-item/logo.png") + ") no-repeat center;\n  background-size: 250px;\n  width: 250px;\n  height: 200px;\n  border: 5px dotted transparent;\n  margin-top: 30px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n  border-radius: 5px;\n}\n.item:hover{\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n}\n#table-id{\n  text-align: center;\n  color: rgb(207, 135, 53);\n  margin-top: 17%;\n  font-size: larger;\n  font-family: 'Abril Fatface', cursive;\n}\n#table-name{\n  font-family: 'Cookie', cursive;\n  cursor: pointer;\n  font-size: 2.3em;\n  padding-top: 5px;\n  text-align: center;\n}\n#table-name:hover{\n  color: rgb(207, 135, 53);\n}\nh1, h2{\n  font-family: 'Abril Fatface', cursive;\n  margin-bottom: 30px;\n}\n.item-reserved {\n  color: rgb(207, 135, 53);\n}\n#table-banner{\n  /*background: rgb(207, 135, 53);*/\n  background-color: rgb(92, 39, 12);\n  cursor: pointer;\n  opacity: 0.7;\n  color: white;\n  font-size: 50px;\n  font-family: 'Lato', cursive;\n  text-align: center;\n  line-height: 100%;\n  vertical-align: middle;\n  position: absolute;\n  -webkit-transform: rotate(-10deg);\n  -moz-transform: rotate(-10deg);\n  -o-transform: rotate(-10deg);\n  top: 45%;\n  left:-5px;\n  height: 25%;\n  width: 280px;\n  border-radius: 5px;\n}\n#time-table{\n  background-color: rgb(92, 39, 12);\n  opacity: 0.9;\n  width: 250px;\n  height: 200px;\n  position: absolute;\n  top: 30px;\n  color: white;\n  text-align: center;\n  vertical-align: middle;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  border-radius: 5px;\n}\n#time-table ul li{\n  list-style-type: none;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table-list/table-item/table-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"item\" [ngClass]=\"{'item-reserved' : reserved}\">\n<div id=\"table-id\">\n  {{table.id | roman}}\n</div>\n  <div id=\"table-name\"\n       (click)=\"showDialog = !showDialog\"\n       (mousemove)=\"onOver()\"\n       (mouseleave)=\"onLeave()\"\n  >\n    {{name}}\n  </div>\n  <div *ngIf=\"reserved && !showTable\" id=\"table-banner\" (mousemove)=\"showTable = true\">\n    reserved\n  </div>\n</div>\n\n<div id=\"time-table\" *ngIf=\"showTable\" (mouseleave)=\"showTable=false\">\n  <ul>\n    <li *ngFor=\"let booking of reserveList\">\n      ☕ {{booking.startTime |date:'shortTime' }} - {{booking.endTime | date:'shortTime'}}<br>\n      {{booking.name}}\n    </li>\n  </ul>\n</div>\n\n<app-modal [(visible)]=\"showDialog\" [width]=\"750\" [height]=\"200\" >\n  <div *ngIf=\"showForm\">\n    <h1>Quick reservation for table {{table.id}}</h1>\n    <form class=\"form-inline\" (ngSubmit)=\"onSubmit()\">\n      <label class=\"sr-only\" for=\"username\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\"\n             name =\"username\"\n             placeholder=\"Harry Potter\"\n             [value]=\"username\"\n             [(ngModel)] = 'username'\n      >\n      <label class=\"sr-only\" for=\"telephone\">telephone</label>\n      <div class=\"input-group\">\n        <input type=\"tel\"\n               class=\"form-control\"\n               id=\"telephone\"\n               name=\"telephone\"\n               placeholder=\"telephone\"\n               [value]=\"telephone\"\n               [(ngModel)]  = \"telephone\"\n        >\n      </div>\n      <div class=\"input-group\">\n        <input type=\"datetime-local\"\n               class=\"form-control\"\n               id=\"time\"\n               name=\"time\"\n               [value]=\"reserveTime\"\n               [(ngModel)] = \"reserveTime\"\n               [disabled]=\"true\"\n        >\n      </div>\n      <button type=\"submit\"\n              class=\"btn btn-primary\"\n              [disabled]=\"!username || !telephone\">\n        Submit\n      </button>\n    </form>\n  </div>\n  <div *ngIf=\"key\" class=\"successful text-center\">\n    <h2>Book table {{this.table.id}} in {{this.name}} area for {{this.username}}</h2>\n    <a  class=\"btn btn-success\" [routerLink]=\"['/bookings', key]\">\n      {{key.substring(2)}}\n    </a>\n  </div>\n\n</app-modal>\n"

/***/ }),

/***/ "../../../../../src/app/table-list/table-item/table-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_model__ = __webpack_require__("../../../../../src/app/table-list/table-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_list_booking_model__ = __webpack_require__("../../../../../src/app/booking-list/booking-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_utilities__ = __webpack_require__("../../../../../src/app/shared/utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_service__ = __webpack_require__("../../../../../src/app/table-list/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__booking_list_booking_service__ = __webpack_require__("../../../../../src/app/booking-list/booking-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_af__ = __webpack_require__("../../../../../src/app/shared/af.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TableItemComponent = (function () {
    function TableItemComponent(tableService, af, bookingService) {
        this.tableService = tableService;
        this.af = af;
        this.bookingService = bookingService;
        this.reserved = false;
        this.showDialog = false;
        this.showForm = true;
        this.showTable = false;
    }
    TableItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        switch (this.table.size) {
            case 2:
                this.name = 'Gryffindo';
                break;
            case 4:
                this.name = 'Hufflepuff';
                break;
            case 6:
                this.name = 'Ravenclaw';
                break;
            case 8:
                this.name = 'Slytherin';
                break;
            default: this.name = 'Great Hall';
        }
        this.subscription = this.timeChange.subscribe(function (time) {
            _this.filterList(time);
            _this.reserveTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__shared_utilities__["a" /* dateFormat */])(new Date(time)).substring(0, 16);
        });
        this.reserveTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__shared_utilities__["a" /* dateFormat */])(new Date(this.defaultTime)).substring(0, 16);
        this.filterList(this.defaultTime);
    };
    TableItemComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TableItemComponent.prototype.onOver = function () {
        this.name = this.table.size + " people";
    };
    TableItemComponent.prototype.onLeave = function () {
        switch (this.table.size) {
            case 2:
                this.name = 'Gryffindo';
                break;
            case 4:
                this.name = 'Hufflepuff';
                break;
            case 6:
                this.name = 'Ravenclaw';
                break;
            case 8:
                this.name = 'Slytherin';
                break;
            default: this.name = 'Great Hall';
        }
    };
    TableItemComponent.prototype.onSubmit = function () {
        var _this = this;
        var booking = new __WEBPACK_IMPORTED_MODULE_2__booking_list_booking_model__["a" /* BookingModel */]();
        booking.time = this.reserveTime;
        booking.name = this.username;
        booking.telephone = this.telephone;
        booking.size = this.table.size;
        this.af.bookings.push(this.bookingService.quickBookById(booking, this.table.id)).then(function (data) {
            console.log(data.key);
            _this.showForm = false;
            _this.key = data.key;
            _this.filterList(_this.defaultTime);
        });
    };
    TableItemComponent.prototype.filterList = function (time) {
        this.reserveList = this.table.bookinglist.filter(function (booking) {
            if (!booking)
                return;
            return new Date(booking.startTime).getDate() === time.getDate() && new Date(booking.endTime) >= time;
        });
        this.reserved = !(this.reserveList.length === 0);
    };
    return TableItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__table_model__["b" /* TableModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__table_model__["b" /* TableModel */]) === "function" && _a || Object)
], TableItemComponent.prototype, "table", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]) === "function" && _b || Object)
], TableItemComponent.prototype, "timeChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TableItemComponent.prototype, "defaultTime", void 0);
TableItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table-item',
        template: __webpack_require__("../../../../../src/app/table-list/table-item/table-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/table-list/table-item/table-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__table_service__["a" /* TableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__table_service__["a" /* TableService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_af__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_af__["a" /* AF */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__booking_list_booking_service__["a" /* BookingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__booking_list_booking_service__["a" /* BookingService */]) === "function" && _e || Object])
], TableItemComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=table-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#time{\n  width: 250px;\n  height: 40px;\n  height: 2.5rem;\n  padding: 0 16px;\n  padding: 0 1rem;\n  border-radius: 2rem;\n  border: 1px solid #d7dad7;\n  cursor: pointer;\n}\n#icon{\n  margin-left: -25px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"container\">\n    <form class=\"form-inline\">\n      <label for=\"time\">Choose the time </label>\n      <input class=\"picker-input form-control\"\n             id=\"time\" name=\"time\"\n             class=\"picker-input\"\n             [value]=\"momentVariable|date:'medium'\"\n             [(ngModel)]=\"momentVariable\"\n             dateTimePicker\n             [mode]=\"'dropdown'\"\n             (onChange)=\"onChange()\">\n      <i class=\"fa fa-calendar\" id=\"icon\" aria-hidden=\"true\"></i>\n    </form>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div *ngFor=\"let table of tables\" class=\"col-lg-3 col-sm-6 col-md-4\">\n          <app-table-item [table]=\"table\" [timeChange]=\"timeChange\" [defaultTime]=\"momentVariable\">\n          </app-table-item>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_service__ = __webpack_require__("../../../../../src/app/table-list/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_af__ = __webpack_require__("../../../../../src/app/shared/af.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableListComponent = (function () {
    function TableListComponent(tableService, af) {
        this.tableService = tableService;
        this.af = af;
        this.momentVariable = new Date();
        this.timeChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    TableListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.tableService.tablesChanged.subscribe(function (tables) {
            _this.tables = tables;
        });
        this.tables = this.tableService.getTables();
    };
    TableListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TableListComponent.prototype.onChange = function () {
        this.timeChange.next(this.momentVariable);
    };
    TableListComponent.prototype.goTo = function (location) {
        window.location.hash = location;
    };
    return TableListComponent;
}());
TableListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table-list',
        template: __webpack_require__("../../../../../src/app/table-list/table-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/table-list/table-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__table_service__["a" /* TableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__table_service__["a" /* TableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_af__["a" /* AF */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_af__["a" /* AF */]) === "function" && _b || Object])
], TableListComponent);

var _a, _b;
//# sourceMappingURL=table-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/table-list/table-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TableModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interval; });
var TableModel = (function () {
    function TableModel(size, id) {
        this.id = id;
        this.size = size;
        this.bookinglist = [];
    }
    return TableModel;
}());

var Interval = (function () {
    function Interval(startTime, endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }
    return Interval;
}());

//# sourceMappingURL=table-model.js.map

/***/ }),

/***/ "../../../../../src/app/table-list/table.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_model__ = __webpack_require__("../../../../../src/app/table-list/table-model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableService = (function () {
    function TableService() {
        this.tablesChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.tables = [];
        // for(let i = 1; i < 6; ++i){
        //   this.tables.push(new TableModel(2, i));
        // }
        // for(let i = 6; i < 16; ++i){
        //   this.tables.push(new TableModel(4, i));
        // }
        // for(let i = 16; i < 22; ++i){
        //   this.tables.push(new TableModel(6, i));
        // }
        // for(let i = 22; i < 29; ++i){
        //   this.tables.push(new TableModel(8, i));
        // }
        // for(let i = 29; i <= 30; ++i){
        //   this.tables.push(new TableModel(99, i));
        // }
    }
    TableService.prototype.getTables = function () {
        return this.tables.slice();
    };
    TableService.prototype.setTables = function (tables) {
        this.tables = tables;
        this.tablesChanged.next(this.tables.slice());
    };
    TableService.prototype.bookATable = function (booking) {
        var table = this.findATable(booking.size, booking.startTime, booking.endTime);
        if (table) {
            console.log("Table service: find a table for this reservation: " + table.id);
            this.bookTableByTableId(booking, table.id);
            return table.id;
        }
        else {
            console.log("cannot find an available table");
            return false;
        }
    };
    TableService.prototype.findATable = function (size, startTime, endTime) {
        var table = this.tables.find(function (table) {
            if (table.size < size) {
                return false;
            }
            else {
                return table.bookinglist.every(function (timeTable) {
                    return timeTable.startTime > endTime || timeTable.endTime < startTime;
                });
            }
        });
        return table;
    };
    TableService.prototype.findAvailableTime = function (table, date) {
        var day = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
        var hours = 3600 * 1000;
        var open = Math.max(day + 11 * hours, Date.now());
        var close = day + 23 * hours;
        var availableTime = [];
        table.bookinglist.map(function (booking) {
            if (booking.startTime > close || booking.endTime < open)
                return;
            availableTime.push(new __WEBPACK_IMPORTED_MODULE_2__table_model__["a" /* Interval */](open, Math.max(open, booking.startTime - 2 * hours)));
            open = booking.endTime;
        });
        availableTime.push(new __WEBPACK_IMPORTED_MODULE_2__table_model__["a" /* Interval */](open, close));
        // console.log('table: ', table.id);
        // console.log(availableTime);
        return availableTime;
    };
    TableService.prototype.mergeInterval = function (availableTimelist) {
        if (availableTimelist.length === 0)
            return availableTimelist;
        availableTimelist.sort(function (a, b) {
            return a.startTime - b.startTime;
        });
        var res = [];
        availableTimelist.map(function (availableTime) {
            if (res.length === 0 || availableTime.startTime > res[res.length - 1].endTime) {
                res.push(availableTime);
            }
            else {
                res[res.length - 1].endTime = Math.max(availableTime.endTime, res[res.length - 1].endTime);
            }
        });
        return res;
    };
    TableService.prototype.findAvailableTimeSlots = function (size, date) {
        var _this = this;
        var availableTimeList = [];
        this.tables.filter(function (table) { return table.size >= size; }).map(function (table) {
            availableTimeList = availableTimeList.concat(_this.findAvailableTime(table, date));
        });
        // console.log(availableTimeList);
        availableTimeList = this.mergeInterval(availableTimeList);
        // console.log(availableTimeList);
        return availableTimeList;
    };
    TableService.prototype.bookTableByTableId = function (booking, tableId) {
        var idx = 0;
        var table = this.tables[tableId - 1];
        while (idx < table.bookinglist.length && table.bookinglist[idx] && table.bookinglist[idx].endTime < booking.startTime) {
            idx++;
        }
        table.bookinglist.splice(idx, 0, booking);
        this.tablesChanged.next(this.tables.slice());
    };
    TableService.prototype.cancelTheTableByIdAndTime = function (time, id) {
        var index = this.tables[id - 1].bookinglist.findIndex(function (e) {
            return e.startTime === time;
        });
        if (index === -1)
            return;
        this.tables[id - 1].bookinglist.splice(index, 1);
        this.tablesChanged.next(this.tables.slice());
    };
    return TableService;
}());
TableService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TableService);

//# sourceMappingURL=table.service.js.map

/***/ }),

/***/ "../../../../../src/assets/img/67v58PICcQU_1024.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "67v58PICcQU_1024.449422d6bb8727e1c83b.png";

/***/ }),

/***/ "../../../../../src/assets/img/greethall.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "greethall.7c3eee5cdf74f53c8354.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/papper.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "papper.20285a2244b48c83645d.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/snitch.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "snitch.75e5b2e47d2c4c881d30.jpg";

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map