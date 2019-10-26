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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar color=\"purple\" height=\"10px\" progress=10></ng2-slim-loading-bar>\n\n<nav class=\"navbar navbar-expand-sm\" bg-light>\n  <div class=\"container-fluid\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a routerLink=\"funcionario/create\" class=\"nav-link\" routerLinkActive=\"active\">Adicionar Funcionario</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"funcionario\" class=\"nav-link\" routerLinkActive=\"active\">Funcionários</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/funcionario-add/funcionario-add.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/funcionario-add/funcionario-add.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"funcionarioForm\">\n      <div class=\"col-md-6 col-md-offset-3\">\n\n        <!-- INÍCIO BLOCO: Nome do Funcionário -->\n        <div class=\"form-group\">\n          <label>Nome</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"nomeFuncionario\" #nomeFuncionario>\n        </div>\n        <div *ngIf=\"funcionarioForm.controls['nomeFuncionario'].invalid\n              && (funcionarioForm.controls['nomeFuncionario'].dirty\n              || funcionarioForm.controls['nomeFuncionario'].touched)\"\n              class=\"alert alert-danger\">\n          <div *ngIf=\"funcionarioForm.controls['nomeFuncionario'].errors.required\">\n            O campo 'Nome' é obrigatório.\n          </div>\n        </div>\n        <!-- FIM BLOCO: Nome do Funcionário -->\n\n        <!-- INÍCIO BLOCO: Cargo/Profissão -->\n        <div class=\"form-group\">\n          <label>Cargo</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"cargo\" #cargo>\n        </div>\n        <div *ngIf=\"funcionarioForm.controls['cargo'].invalid\n              && (funcionarioForm.controls['cargo'].dirty\n              || funcionarioForm.controls['cargo'].touched)\"\n              class=\"alert alert-danger\">\n          <div *ngIf=\"funcionarioForm.controls['cargo'].errors.required\">\n            O campo 'Cargo' é obrigatório.\n          </div>\n        </div>\n        <!-- FIM BLOCO: Cargo/Profissão -->\n\n        <!-- INÍCIO BLOCO: Nome do Número Identificador -->\n        <div class=\"form-group\">\n          <label>Número Identificador</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"numeroIdentificador\" #numeroIdentificador>\n        </div>\n        <div *ngIf=\"funcionarioForm.controls['numeroIdentificador'].invalid\n              && (funcionarioForm.controls['numeroIdentificador'].dirty\n              || funcionarioForm.controls['numeroIdentificador'].touched)\"\n              class=\"alert alert-danger\">\n          <div *ngIf=\"funcionarioForm.controls['numeroIdentificador'].errors.required\">\n            O campo 'Número Identificador' é obrigatório.\n          </div>\n        </div>\n        <!-- FIM BLOCO: Número Identificador -->\n\n        <div class=\"form-group\">\n          <button (click)=\"adicionarFuncionario(nomeFuncionario.value, cargo.value, numeroIdentificador.value)\"\n            class=\"btn btn-primary\"\n            [disabled]=\"funcionarioForm.pristine || funcionarioForm.invalid\">\n            <fa name=\"plus\"></fa> Funcionário\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/funcionario-edit/funcionario-edit.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/funcionario-edit/funcionario-edit.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"funcionarioForm\" novalidate>\n\n      <div class=\"form-group\">\n        <label>Nome do Funcionário</label>\n        <input type=\"text\" class=\"form-control\"\n          formControlName=\"nomeFuncionario\"\n          #nomeFuncionario\n          [(ngModel)]=\"funcionario.nomeFuncionario\"/>\n      </div>\n      <div *ngIf=\"funcionarioForm.controls['nomeFuncionario'].invalid && (funcionarioForm.controls['nomeFuncionario'].dirty || funcionarioForm.controls['nomeFuncionario'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"funcionarioForm.controls['nomeFuncionario'].errors.required\">\n          Campo Obrigatório.\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Cargo</label>\n        <input type=\"text\" class=\"form-control\"\n          formControlName=\"cargo\"\n          #cargo\n          [(ngModel)]=\"funcionario.cargo\"/>\n      </div>\n      <div *ngIf=\"funcionarioForm.controls['cargo'].invalid && (funcionarioForm.controls['cargo'].dirty || funcionarioForm.controls['cargo'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"funcionarioForm.controls['cargo'].errors.required\">\n          Campo Obrigatório.\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Número Identificador</label>\n        <input type=\"text\" class=\"form-control\"\n          formControlName=\"numeroIdentificador\"\n          #numeroIdentificador\n          [(ngModel)]=\"funcionario.numeroIdentificador\"/>\n      </div>\n      <div *ngIf=\"funcionarioForm.controls['numeroIdentificador'].invalid && (funcionarioForm.controls['numeroIdentificador'].dirty || funcionarioForm.controls['numeroIdentificador'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"funcionarioForm.controls['numeroIdentificador'].errors.required\">\n          Campo Obrigatório.\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <button (click)=\"atualizarFuncionario(nomeFuncionario.value, cargo.value, numeroIdentificador.value)\" type=\"submit\" class=\"btn btn-primary\"\n          [disabled]=\"funcionarioForm.invalid\"><fa name=\"edit\"></fa> Atualizar\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/funcionario-get/funcionario-get.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/funcionario-get/funcionario-get.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <td ><b>Nome do Funcionário</b></td>\n      <td align=\"center\"><b>Cargo</b></td>\n      <td align=\"center\"><b>Número Identificador</b></td>\n      <td colspan=\"2\" align=\"center\"><b>Ações</b></td>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let funcionario of funcionarios\">\n      <td>{{ funcionario.nomeFuncionario }}</td>\n      <td align=\"center\">{{ funcionario.cargo }}</td>\n      <td align=\"center\">{{ funcionario.numeroIdentificador }}</td>\n      <td align=\"center\"><a [routerLink]=\"['/funcionario', funcionario._id]\" class=\"btn btn-success\"> <fa name=\"edit\"></fa> Editar</a></td>\n      <td align=\"center\"><button (click)=\"excluirFuncionario(funcionario._id)\" class=\"btn btn-danger\"> <fa name=\"trash\"></fa> Excluir</button></td>\n    </tr>\n  </tbody>\n</table>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _funcionario_add_funcionario_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funcionario-add/funcionario-add.component */ "./src/app/funcionario-add/funcionario-add.component.ts");
/* harmony import */ var _funcionario_edit_funcionario_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./funcionario-edit/funcionario-edit.component */ "./src/app/funcionario-edit/funcionario-edit.component.ts");
/* harmony import */ var _funcionario_get_funcionario_get_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./funcionario-get/funcionario-get.component */ "./src/app/funcionario-get/funcionario-get.component.ts");






var routes = [
    { path: 'funcionario/create', component: _funcionario_add_funcionario_add_component__WEBPACK_IMPORTED_MODULE_3__["FuncionarioAddComponent"] },
    { path: 'funcionario/:id', component: _funcionario_edit_funcionario_edit_component__WEBPACK_IMPORTED_MODULE_4__["FuncionarioEditComponent"] },
    { path: 'funcionario', component: _funcionario_get_funcionario_get_component__WEBPACK_IMPORTED_MODULE_5__["FuncionarioGetComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(loadingBar, router) {
        var _this = this;
        this.loadingBar = loadingBar;
        this.router = router;
        this.title = 'front';
        this.router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    /**
     * Método responsável por tratar os eventos do 'SlimLoadingBar'
     */
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
            this.loadingBar.start();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            this.loadingBar.complete();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
            this.loadingBar.stop();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
            this.loadingBar.stop();
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__["SlimLoadingBarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__["SlimLoadingBarService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _funcionario_add_funcionario_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./funcionario-add/funcionario-add.component */ "./src/app/funcionario-add/funcionario-add.component.ts");
/* harmony import */ var _funcionario_get_funcionario_get_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./funcionario-get/funcionario-get.component */ "./src/app/funcionario-get/funcionario-get.component.ts");
/* harmony import */ var _funcionario_edit_funcionario_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./funcionario-edit/funcionario-edit.component */ "./src/app/funcionario-edit/funcionario-edit.component.ts");
/* harmony import */ var _funcionario_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./funcionario.service */ "./src/app/funcionario.service.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _funcionario_add_funcionario_add_component__WEBPACK_IMPORTED_MODULE_9__["FuncionarioAddComponent"],
                _funcionario_get_funcionario_get_component__WEBPACK_IMPORTED_MODULE_10__["FuncionarioGetComponent"],
                _funcionario_edit_funcionario_edit_component__WEBPACK_IMPORTED_MODULE_11__["FuncionarioEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_funcionario_service__WEBPACK_IMPORTED_MODULE_12__["FuncionarioService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/funcionario-add/funcionario-add.component.css":
/*!***************************************************************!*\
  !*** ./src/app/funcionario-add/funcionario-add.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmNpb25hcmlvLWFkZC9mdW5jaW9uYXJpby1hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/funcionario-add/funcionario-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/funcionario-add/funcionario-add.component.ts ***!
  \**************************************************************/
/*! exports provided: FuncionarioAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncionarioAddComponent", function() { return FuncionarioAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _funcionario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../funcionario.service */ "./src/app/funcionario.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var FuncionarioAddComponent = /** @class */ (function () {
    function FuncionarioAddComponent(formBuilder, funcionarioService) {
        this.formBuilder = formBuilder;
        this.funcionarioService = funcionarioService;
        this.createForm();
    }
    FuncionarioAddComponent.prototype.createForm = function () {
        this.funcionarioForm = this.formBuilder.group({
            nomeFuncionario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cargo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            numeroIdentificador: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    FuncionarioAddComponent.prototype.adicionarFuncionario = function (nomeFuncionario, cargo, numeroIdentificador) {
        this.funcionarioService.adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Funcionário criado(a) com Sucesso!',
            type: 'success',
            showConfirmButton: true,
            timer: 1500
        });
        this.funcionarioForm.reset();
    };
    FuncionarioAddComponent.prototype.ngOnInit = function () {
    };
    FuncionarioAddComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _funcionario_service__WEBPACK_IMPORTED_MODULE_3__["FuncionarioService"] }
    ]; };
    FuncionarioAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-funcionario-add',
            template: __webpack_require__(/*! raw-loader!./funcionario-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/funcionario-add/funcionario-add.component.html"),
            styles: [__webpack_require__(/*! ./funcionario-add.component.css */ "./src/app/funcionario-add/funcionario-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _funcionario_service__WEBPACK_IMPORTED_MODULE_3__["FuncionarioService"]])
    ], FuncionarioAddComponent);
    return FuncionarioAddComponent;
}());



/***/ }),

/***/ "./src/app/funcionario-edit/funcionario-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/funcionario-edit/funcionario-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmNpb25hcmlvLWVkaXQvZnVuY2lvbmFyaW8tZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/funcionario-edit/funcionario-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/funcionario-edit/funcionario-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: FuncionarioEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncionarioEditComponent", function() { return FuncionarioEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _funcionario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../funcionario.service */ "./src/app/funcionario.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var FuncionarioEditComponent = /** @class */ (function () {
    function FuncionarioEditComponent(route, router, funcionarioService, formBuilder) {
        this.route = route;
        this.router = router;
        this.funcionarioService = funcionarioService;
        this.formBuilder = formBuilder;
        this.funcionario = {};
        this.createForm();
    }
    FuncionarioEditComponent.prototype.createForm = function () {
        this.funcionarioForm = this.formBuilder.group({
            nomeFuncionario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cargo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            numeroIdentificador: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    FuncionarioEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.funcionarioService.editFuncionario(params.id).subscribe(function (res) {
                _this.funcionario = res;
            });
        });
    };
    /**
     * Método responsável por atualizar o 'Funcionario'
     */
    FuncionarioEditComponent.prototype.atualizarFuncionario = function (nomeFuncionario, cargo, numeroIdentificador, id) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.funcionarioService.atualizarFuncionario(nomeFuncionario, cargo, numeroIdentificador, params.id);
            // ==> Depois que clicar no botão 'Atualizar' redirecionar para a lista de Funcionarios
            _this.router.navigate(['funcionario']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Funcionário atualizado(a) com Sucesso!',
                type: 'success',
                showConfirmButton: true,
                timer: 1500
            });
        });
    };
    FuncionarioEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _funcionario_service__WEBPACK_IMPORTED_MODULE_4__["FuncionarioService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    FuncionarioEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-funcionario-edit',
            template: __webpack_require__(/*! raw-loader!./funcionario-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/funcionario-edit/funcionario-edit.component.html"),
            styles: [__webpack_require__(/*! ./funcionario-edit.component.css */ "./src/app/funcionario-edit/funcionario-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _funcionario_service__WEBPACK_IMPORTED_MODULE_4__["FuncionarioService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FuncionarioEditComponent);
    return FuncionarioEditComponent;
}());



/***/ }),

/***/ "./src/app/funcionario-get/funcionario-get.component.css":
/*!***************************************************************!*\
  !*** ./src/app/funcionario-get/funcionario-get.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmNpb25hcmlvLWdldC9mdW5jaW9uYXJpby1nZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/funcionario-get/funcionario-get.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/funcionario-get/funcionario-get.component.ts ***!
  \**************************************************************/
/*! exports provided: FuncionarioGetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncionarioGetComponent", function() { return FuncionarioGetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _funcionario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../funcionario.service */ "./src/app/funcionario.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var FuncionarioGetComponent = /** @class */ (function () {
    function FuncionarioGetComponent(funcionarioService) {
        this.funcionarioService = funcionarioService;
    }
    FuncionarioGetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.funcionarioService
            .getFuncionarios()
            .subscribe(function (data) {
            _this.funcionarios = data;
        });
    };
    /**
     * Método responsável por excluir um 'Funcionario' pelo 'Id'
     */
    FuncionarioGetComponent.prototype.excluirFuncionario = function (id) {
        var _this = this;
        this.funcionarioService.excluirFuncionario(id).subscribe(function (res) {
            var index = _this.funcionarios.indexOf(id);
            _this.funcionarios.splice(index, 1);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Você tem certeza que deseja excluir o(a) Funcionário?',
                text: 'Atenção! Este Funcionário será Excluído(a)!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim. Exclua!'
            }).then(function (result) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Excluído(a)!', 'Funcionário foi excluído(a).', 'success');
                }
            });
        });
    };
    FuncionarioGetComponent.ctorParameters = function () { return [
        { type: _funcionario_service__WEBPACK_IMPORTED_MODULE_2__["FuncionarioService"] }
    ]; };
    FuncionarioGetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-funcionario-get',
            template: __webpack_require__(/*! raw-loader!./funcionario-get.component.html */ "./node_modules/raw-loader/index.js!./src/app/funcionario-get/funcionario-get.component.html"),
            styles: [__webpack_require__(/*! ./funcionario-get.component.css */ "./src/app/funcionario-get/funcionario-get.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_funcionario_service__WEBPACK_IMPORTED_MODULE_2__["FuncionarioService"]])
    ], FuncionarioGetComponent);
    return FuncionarioGetComponent;
}());



/***/ }),

/***/ "./src/app/funcionario.service.ts":
/*!****************************************!*\
  !*** ./src/app/funcionario.service.ts ***!
  \****************************************/
/*! exports provided: FuncionarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncionarioService", function() { return FuncionarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FuncionarioService = /** @class */ (function () {
    function FuncionarioService(http) {
        this.http = http;
        // ==> Uri da api (Back-End)
        this.uri = 'http://localhost:7071/api';
    }
    /**
     * Método responsável por criar um novo 'Funcionario'
     */
    FuncionarioService.prototype.adicionarFuncionario = function (nomeFuncionario, cargo, numeroIdentificador) {
        var funcionario = {
            nomeFuncionario: nomeFuncionario,
            cargo: cargo,
            numeroIdentificador: numeroIdentificador
        };
        console.log(funcionario);
        // ==> (POST - Url no Back-End): http://localhost:8000/api/funcionario
        this
            .http
            .post(this.uri + "/funcionarios", funcionario)
            .subscribe(function (res) { return console.log('Feito'); });
    };
    /**
     * Método responsável por selecionar todos os 'Funcionarios'
     */
    FuncionarioService.prototype.getFuncionarios = function () {
        // ==> (GET - Url no Back-End): http://localhost:8000/api/funcionarios
        return this
            .http
            .get(this.uri + "/funcionarios");
    };
    /**
     * Método responsável por atualizar o 'Funcionario' pelo 'Id':
     */
    FuncionarioService.prototype.editFuncionario = function (id) {
        // ==> (GET by Id- Url no Back-End): (GET): localhost:8000/api/funcionario/:id
        return this
            .http
            .get(this.uri + "/funcionarios/" + id);
    };
    FuncionarioService.prototype.atualizarFuncionario = function (nomeFuncionario, cargo, numeroIdentificador, id) {
        var funcionario = {
            nomeFuncionario: nomeFuncionario,
            cargo: cargo,
            numeroIdentificador: numeroIdentificador
        };
        // ==> (PUT by Id - Url no Back-End): (UPDATE): localhost:8000/api/funcionario/:id
        this
            .http
            .put(this.uri + "/funcionarios/" + id, funcionario)
            .subscribe(function (res) { return console.log('Done!'); });
    };
    /**
     * Método responsável por excluir um 'Funcionario' pelo 'Id':
     */
    FuncionarioService.prototype.excluirFuncionario = function (id) {
        // ==> (DELETE by Id - Url no Back-End): (DELETE): localhost:8000/api/funcionario/:id
        return this
            .http
            .delete(this.uri + "/funcionarios/" + id);
    };
    FuncionarioService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FuncionarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FuncionarioService);
    return FuncionarioService;
}());



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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Luis Angel\Desktop\web\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map