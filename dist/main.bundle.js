webpackJsonp([1,4],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".input {\n  border-radius: 0;\n  outline: none;\n}\n.input:hover {\n  border: 1px solid #9b59b6;\n}\n.btn {\n  border: none;\n  border-radius: 0;\n  background-color: #9b59b6;\n}\n.btn:hover {\n  background-color: #8e44ad;\n}\n\n.user {\n  border: 1px solid #9b59b6;\n  cursor: pointer;\n  padding: 1em;\n  margin: 1em;\n}\n\n.user:hover {\n  box-shadow: 1px 2px 3px #ccc;\n}\n\n.box {\n  border: 1px solid #9b59b6;\n  padding: 2em;\n}\n\n.box > .details {\n  margin-top: 1em;\n  font-family: monospace;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports = "<app-search-users></app-search-users>\n"

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-12\">\n      <h2>Find developers in your city</h2>\n      <a href=\"https://applyhead.com\" target=\"_blank\">Made using Angular 4 ( ApplyHead.Com )</a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 col-md-offset-3\">\n      <div class=\"form-inline\">\n        <input placeholder=\"Location Name\" class=\"form-control input-lg input\" #place (keyup.enter)=\"search(place.value, language.value); place.value=''; language.value='';\" />\n        <input placeholder=\"Language e.g. Java\" class=\"form-control input-lg input\" #language (keyup.enter)=\"search(place.value, language.value); place.value=''; language.value='';\" />\n        <button class=\"btn btn-primary btn-lg\" (click)=\"search(place.value, language.value); place.value=''; language.value='';\">Search</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <p class=\"text-center\" style=\"padding: 1em; color:red;\" *ngIf=\"error_text\">{{ error_text }}</p>\n    <div [ngClass]=\"{'col-md-9': selected, 'col-md-12': !selected}\">\n      <div class=\"user col-md-2 text-center\" *ngFor=\"let user of results\" (click)=\"getDetails(user.login)\">\n        <div class=\"img_container\">\n          <img src=\"{{user.avatar_url}}\" class=\"img-circle\" width=\"100\" height=\"100\">\n        </div>\n        <div class=\"details_container\">\n          <a href=\"{{user.html_url}}\" target=\"_blank\" class=\"login_name\">{{ user.login }}</a>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"results.length && selected\" class=\"col-md-3\">\n\n      <div class=\"box text-center\">\n        <img src=\"{{selectedUser.avatar_url}}\" class=\"img-responsive img-circle\">\n        <div class=\"details\">\n          <div *ngIf=\"selectedUser.name\"><a href=\"{{ selectedUser.html_url }}\" target=\"_blank\"><h3>{{ selectedUser.name }} </h3></a></div>\n          <hr>\n          <div *ngIf=\"selectedUser.email\">Email: {{ selectedUser.email }}</div>\n          <hr>\n          <div *ngIf=\"selectedUser.location\">Location: {{ selectedUser.location }}</div>\n          <hr>\n          <div *ngIf=\"selectedUser.bio\">Bio: {{ selectedUser.bio }}</div>\n          <hr>\n          <div *ngIf=\"selectedUser.updated_at\">Last Seen: {{ selectedUser.updated_at | date }}</div>\n          <hr>\n          <div *ngIf=\"selectedUser.public_repos\">Repos: {{ selectedUser.public_repos }}</div>\n          <hr>\n          <div *ngIf=\"selectedUser.public_gists\">Gists: {{ selectedUser.public_gists }}</div>\n          <hr>\n          <div *ngIf=\"selectedUser.followers\">Followers: {{ selectedUser.followers }}</div>\n          <hr>\n          <div *ngIf=\"selectedUser.created_at\">Joined github: {{ selectedUser.created_at | date }}</div>\n          <hr>\n          <button class=\"btn btn-sm btn-warning\" (click)=\"selected = !selected\">Back</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerachUsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SerachUsersService = (function () {
    function SerachUsersService(http) {
        this.http = http;
        this.searchUsersEndPoint = "https://api.github.com/search/users?q=";
        this.getUserDetailsEndPoint = "https://api.github.com/users/";
    }
    SerachUsersService.prototype.getUsersByPlaceAndLanguage = function (place, language) {
        var url;
        if (place && !language) {
            url = this.searchUsersEndPoint + "location:" + place;
        }
        else if (!place && language) {
            url = this.searchUsersEndPoint + "language:" + language;
        }
        else {
            url = this.searchUsersEndPoint + "location:" + place + "+language:" + language;
        }
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SerachUsersService.prototype.getDetailsByUserName = function (username) {
        if (username) {
            var url = "" + this.getUserDetailsEndPoint + username;
            return this.http.get(url)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
    };
    SerachUsersService.prototype.extractData = function (res) {
        var body = res.json();
        return body.items || {};
    };
    SerachUsersService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return SerachUsersService;
}());
SerachUsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SerachUsersService);

var _a;
//# sourceMappingURL=serach-users.service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 72;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__(82);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(139),
        styles: [__webpack_require__(136)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_users_search_users_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__serach_users_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__search_users_search_users_component__["a" /* SearchUsersComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__serach_users_service__["a" /* SerachUsersService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serach_users_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchUsersComponent = (function () {
    function SearchUsersComponent(serachService) {
        this.serachService = serachService;
        this.results = [];
        this.selected = false;
        this.error_text = "";
    }
    SearchUsersComponent.prototype.ngOnInit = function () { };
    SearchUsersComponent.prototype.search = function (place, language) {
        var _this = this;
        this.selected = false;
        this.error_text = "";
        if (place || language) {
            this.place = place;
            this.language = language;
            this.serachService.getUsersByPlaceAndLanguage(place, language).subscribe(function (users) {
                _this.results = users;
            }, function (error) {
                _this.results = [];
                _this.error_text = "Sorry! No Users found. Try again";
                console.error(error);
            });
        }
    };
    SearchUsersComponent.prototype.getDetails = function (username) {
        var _this = this;
        this.serachService.getDetailsByUserName(username).subscribe(function (userDatils) {
            _this.selectedUser = userDatils;
            _this.selected = true;
        }, function (error) {
            _this.selected = false;
            console.error(error);
        });
    };
    return SearchUsersComponent;
}());
SearchUsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-search-users',
        template: __webpack_require__(140),
        styles: [__webpack_require__(137)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__serach_users_service__["a" /* SerachUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__serach_users_service__["a" /* SerachUsersService */]) === "function" && _a || Object])
], SearchUsersComponent);

var _a;
//# sourceMappingURL=search-users.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true
};
//# sourceMappingURL=environment.prod.js.map

/***/ })

},[167]);
//# sourceMappingURL=main.bundle.js.map