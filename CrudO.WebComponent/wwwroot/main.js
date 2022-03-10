"use strict";
(self["webpackChunkClientApp"] = self["webpackChunkClientApp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);



const routes = [
// { path: '', pathMatch: 'full', redirectTo: '/main' },
// {
//   path: 'main',
//   component: AppComponent
// },
// {
//   path: "form",
//   loadChildren: () => import('./form-generator/form-generator.module').then(m => m.FormGeneratorModule),
//   component: FormComponent
// },
// {
//   path:"test",
//   component:TestComponent
// }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/alert/alert.component */ 8141);
/* harmony import */ var _form_generator_components_form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-generator/components/form/form.component */ 1305);
/* harmony import */ var _form_generator_components_select_from_catalog_select_from_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-generator/components/select-from-catalog/select-from-catalog.component */ 9595);
/* harmony import */ var _menu_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/components/menu/menu.component */ 4658);
/* harmony import */ var _menu_models_bread_crumb_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/models/bread-crumb-item */ 8355);
/* harmony import */ var _models_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/item */ 6521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/http-client.service */ 6139);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/modal.service */ 9853);
/* harmony import */ var _menu_components_bread_crumb_bread_crumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/components/bread-crumb/bread-crumb.component */ 103);
/* harmony import */ var _paged_list_components_paged_list_paged_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paged-list/components/paged-list/paged-list.component */ 4759);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _paged_list_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./paged-list/components/pagination/pagination.component */ 2790);


















function AppComponent_app_pagination_22_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-pagination", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("pageClicked", function AppComponent_app_pagination_22_Template_app_pagination_pageClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r1.pageClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx_r0.currentControl !== (ctx_r0.FormsContext == null ? null : ctx_r0.FormsContext.data))("totalPages", ctx_r0.FormsContext == null ? null : ctx_r0.FormsContext.data == null ? null : ctx_r0.FormsContext.data.totalPages);
} }
class AppComponent {
    constructor(httpClientService, router, ngZone, modalService) {
        this.httpClientService = httpClientService;
        this.router = router;
        this.ngZone = ngZone;
        this.modalService = modalService;
        this.serverUrl = window.location.protocol + '//' + window.location.host;
        this.formsApiPath = "/api";
        this.getRootDataContext = () => {
            this.httpClientService.get(this.serverUrl + this.formsApiPath + "/Forms/GetRootDataContext")
                .subscribe((c) => {
                this.FormsContext = c;
                this.addToBreadCrumb(c.title);
            }, this.ShowError);
        };
        /*****************************************MENU*******************************************/
        //When they click a menu item, we request dataitems to show them on the page body
        this.menuItemClicked = (e) => {
            if (e.title === "Properties") {
                this.EditDataItem(e);
            }
            else {
                var apiPath = e.navRoutes.apiGetDataPath;
                this.httpClientService.post(this.serverUrl + apiPath, e)
                    .subscribe((x) => {
                    this.FormsContext.data = x;
                    this.currentControl = x;
                }, this.ShowError);
            }
            //}
        };
        /**************************************PAGE**********************************************/
        this.AddNewDataItem = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if ((_c = (_b = (_a = this.MenuComponent) === null || _a === void 0 ? void 0 : _a.selectedMenuItem) === null || _b === void 0 ? void 0 : _b.navRoutes) === null || _c === void 0 ? void 0 : _c.apiSelectFromCatalogPath) {
                this.getCatalogPage(1);
            }
            else if ((_f = (_e = (_d = this.MenuComponent) === null || _d === void 0 ? void 0 : _d.selectedMenuItem) === null || _e === void 0 ? void 0 : _e.navRoutes) === null || _f === void 0 ? void 0 : _f.apiGetFormPath) {
                //get form for this model
                var blankFormApiPath = (_j = (_h = (_g = this.MenuComponent) === null || _g === void 0 ? void 0 : _g.selectedMenuItem) === null || _h === void 0 ? void 0 : _h.navRoutes) === null || _j === void 0 ? void 0 : _j.apiGetFormPath;
                this.httpClientService.post(this.serverUrl + blankFormApiPath, (_k = this.MenuComponent) === null || _k === void 0 ? void 0 : _k.selectedMenuItem)
                    .subscribe((i) => {
                    var _a;
                    this.FormsContext.form = i;
                    this.FormComponent.Start(i);
                    this.currentControl = (_a = this.FormsContext) === null || _a === void 0 ? void 0 : _a.form;
                }, this.ShowError);
            }
        };
        this.selectFromCatalogPageClicked = (page) => {
            this.getCatalogPage(page);
        };
        this.OnCatalogSearch = (keyword) => {
            this.getCatalogPage(1, keyword);
        };
        this.getCatalogPage = (page, searchTerm) => {
            var _a, _b, _c, _d;
            var selectFromCatalogPath = ((_c = (_b = (_a = this.MenuComponent) === null || _a === void 0 ? void 0 : _a.selectedMenuItem) === null || _b === void 0 ? void 0 : _b.navRoutes) === null || _c === void 0 ? void 0 : _c.apiSelectFromCatalogPath) + "/" + page.toString();
            if (searchTerm) {
                selectFromCatalogPath += "/" + searchTerm;
            }
            this.httpClientService.post(this.serverUrl + selectFromCatalogPath, (_d = this.MenuComponent) === null || _d === void 0 ? void 0 : _d.selectedMenuItem)
                .subscribe((d) => {
                //show select from catalog
                this.CatalogData = d;
                this.currentControl = this.CatalogData;
            }, this.ShowError);
        };
        this.OpenDataItem = (dataItem) => {
            var _a;
            var apiPath = (_a = dataItem.navRoutes) === null || _a === void 0 ? void 0 : _a.apiGetFormsContextPath;
            console.log("dataItem");
            console.log(dataItem);
            this.httpClientService.post(this.serverUrl + apiPath, dataItem)
                .subscribe((c) => {
                var _a, _b;
                this.FormsContext = c;
                this.addToBreadCrumb(this.FormsContext.title);
                var item = new _models_item__WEBPACK_IMPORTED_MODULE_5__.Item();
                item.title = "Properties";
                item.id = dataItem.id;
                item.type = dataItem.type;
                item.parentId = dataItem.parentId;
                item.navRoutes = c.navRoutes;
                console.log("item properties");
                console.log(item);
                (_b = (_a = this.FormsContext.menu) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.unshift(item);
            }, this.ShowError);
        };
        this.EditDataItem = (dataItem) => {
            var _a;
            if (!dataItem.navRoutes || !dataItem.navRoutes.apiGetFormPath) {
                this.AlertComponent.alert("No path to get form supplied", "danger");
                return;
            }
            var editFormApi = (_a = dataItem.navRoutes) === null || _a === void 0 ? void 0 : _a.apiGetFormPath;
            this.httpClientService.post(this.serverUrl + editFormApi, dataItem)
                .subscribe((i) => {
                this.FormsContext.form = i;
                this.FormComponent.Start(i);
                this.currentControl = i;
            }, this.ShowError);
        };
        this.OnSelectFromCatalogOk = (dataItem) => {
            var _a, _b, _c;
            var item = dataItem[0];
            var apiPath = (_c = (_b = (_a = this.MenuComponent) === null || _a === void 0 ? void 0 : _a.selectedMenuItem) === null || _b === void 0 ? void 0 : _b.navRoutes) === null || _c === void 0 ? void 0 : _c.apiSelectedFromCatalogPath;
            this.httpClientService.post(this.serverUrl + apiPath, item)
                .subscribe((dbItem) => {
                var _a, _b, _c, _d;
                this.AlertComponent.alert("Item Added Ok", "success");
                this.currentControl = (_a = this.FormsContext) === null || _a === void 0 ? void 0 : _a.data;
                (_d = (_c = (_b = this.FormsContext) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.items) === null || _d === void 0 ? void 0 : _d.push(dbItem);
            }, this.ShowError);
        };
        /********************************************FORM*******************************************/
        this.SaveClicked = (form) => {
            var _a, _b;
            var apiPath = (_b = (_a = this.FormComponent.Form) === null || _a === void 0 ? void 0 : _a.navRoutes) === null || _b === void 0 ? void 0 : _b.apiUpsertPath;
            if (apiPath != null) {
                this.httpClientService.post(this.serverUrl + apiPath, form)
                    .subscribe((x) => {
                    this.ngZone.run(() => {
                        this.FormComponent.alert("Cambios Guardados Correctamente", "success");
                    });
                }, this.ShowError);
            }
        };
        this.breadCrumbItemClicked = (bcu) => {
            var found = false;
            this.ngZone.run(() => {
                this.FormsContext = bcu.object;
                this.currentControl = undefined;
                this.MenuComponent.selectedMenuItem = undefined;
            });
        };
        this.addToBreadCrumb = (title) => {
            var bci = new _menu_models_bread_crumb_item__WEBPACK_IMPORTED_MODULE_4__.BreadCrumbItem();
            bci.object = this.FormsContext;
            bci.title = title;
            this.ngZone.run(() => {
                var _a;
                (_a = this.BreadCrumbItems) === null || _a === void 0 ? void 0 : _a.push(bci);
            });
        };
        this.pageClicked = (page) => {
            var _a, _b, _c;
            if (this.FormsContext && this.FormsContext.data) {
                this.FormsContext.data.currentPage = page;
                var menuItem = this.MenuComponent.selectedMenuItem;
                var apiPath = ((_c = (_b = (_a = this.MenuComponent) === null || _a === void 0 ? void 0 : _a.selectedMenuItem) === null || _b === void 0 ? void 0 : _b.navRoutes) === null || _c === void 0 ? void 0 : _c.apiGetDataPath) + "/" + page.toString();
                this.httpClientService.post(this.serverUrl + apiPath, menuItem)
                    .subscribe((x) => {
                    this.FormsContext.data = x;
                    this.currentControl = x;
                }, this.ShowError);
            }
        };
        this.DeleteClicked = (form) => {
            var _a;
            if (this.FormsContext) {
                var apiPath = (_a = this.FormsContext.navRoutes) === null || _a === void 0 ? void 0 : _a.apiDeletePath;
                var item = new _models_item__WEBPACK_IMPORTED_MODULE_5__.Item();
                item.id = this.FormsContext.id;
                item.type = form.type;
                this.httpClientService.post(this.serverUrl + apiPath, item)
                    .subscribe((x) => {
                    this.FormComponent.alert("Elemento Eliminado Correctamente", "success");
                }, (err) => { this.ShowError; });
            }
        };
        this.ShowError = (err) => {
            console.log("Error:");
            console.log(err);
            if (err.error && err.error.text) {
                this.AlertComponent.alert(err.error.text, "danger");
            }
            else if (err.error) {
                this.AlertComponent.alert(err.error, "danger");
            }
            else if (err) {
                this.AlertComponent.alert(err, "danger");
            }
            else {
                this.AlertComponent.alert("Ha ocurrido un error", "danger");
            }
        };
        this.BreadCrumbItems = [];
    }
    ngOnInit() {
        this.httpClientService.get(this.serverUrl + this.formsApiPath + "/Forms/GetCurrentUser")
            .subscribe((u) => {
            this.currentUser = u.value;
            this.getRootDataContext();
        }, this.ShowError);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_http_client_service__WEBPACK_IMPORTED_MODULE_6__.HttpClientService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_7__.ModalService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_form_generator_components_form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_menu_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_form_generator_components_select_from_catalog_select_from_catalog_component__WEBPACK_IMPORTED_MODULE_2__.SelectFromCatalogComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.FormComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.MenuComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.AlertComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.SelectFromCatalogComponent = _t.first);
    } }, decls: 23, vars: 10, consts: [["id", "wrapper", 1, "d-flex"], ["id", "sidebar-wrapper", 1, "border-end", "bg-white"], [1, "sidebar-heading", "border-bottom", "bg-light"], [3, "menu", "itemClicked"], ["id", "page-content-wrapper"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "border-bottom"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [3, "breadCrumbItems", "breadCrumbItemClicked"], [1, "navbar-nav", "ms-auto", "mt-2", "mt-lg-0"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "container"], [3, "hidden", "Data", "onPageClicked", "OnSearch", "OnOk"], [3, "hidden", "data", "AddNewDataItem", "OpenDataItem", "EditDataItem"], [3, "hidden", "SaveClicked", "DeleteClicked"], ["class", "pagination", 3, "hidden", "totalPages", "pageClicked", 4, "ngIf"], [1, "pagination", 3, "hidden", "totalPages", "pageClicked"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "app-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("itemClicked", function AppComponent_Template_app_menu_itemClicked_4_listener($event) { return ctx.menuItemClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "app-bread-crumb", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("breadCrumbItemClicked", function AppComponent_Template_app_bread_crumb_breadCrumbItemClicked_11_listener($event) { return ctx.breadCrumbItemClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "app-select-from-catalog", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onPageClicked", function AppComponent_Template_app_select_from_catalog_onPageClicked_17_listener($event) { return ctx.selectFromCatalogPageClicked($event); })("OnSearch", function AppComponent_Template_app_select_from_catalog_OnSearch_17_listener($event) { return ctx.OnCatalogSearch($event); })("OnOk", function AppComponent_Template_app_select_from_catalog_OnOk_17_listener($event) { return ctx.OnSelectFromCatalogOk($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "app-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "app-paged-list", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("AddNewDataItem", function AppComponent_Template_app_paged_list_AddNewDataItem_19_listener() { return ctx.AddNewDataItem(); })("OpenDataItem", function AppComponent_Template_app_paged_list_OpenDataItem_19_listener($event) { return ctx.OpenDataItem($event); })("EditDataItem", function AppComponent_Template_app_paged_list_EditDataItem_19_listener($event) { return ctx.EditDataItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "app-form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("SaveClicked", function AppComponent_Template_app_form_SaveClicked_20_listener($event) { return ctx.SaveClicked($event); })("DeleteClicked", function AppComponent_Template_app_form_DeleteClicked_20_listener($event) { return ctx.DeleteClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, AppComponent_app_pagination_22_Template, 1, 2, "app-pagination", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.FormsContext == null ? null : ctx.FormsContext.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("menu", ctx.FormsContext == null ? null : ctx.FormsContext.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("breadCrumbItems", ctx.BreadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", !ctx.CatalogData || ctx.currentControl !== ctx.CatalogData)("Data", ctx.CatalogData);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx.currentControl !== (ctx.FormsContext == null ? null : ctx.FormsContext.data))("data", ctx.FormsContext == null ? null : ctx.FormsContext.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx.currentControl !== (ctx.FormsContext == null ? null : ctx.FormsContext.form));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.FormsContext && ctx.FormsContext.data && ctx.FormsContext.data.totalPages);
    } }, directives: [_menu_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent, _menu_components_bread_crumb_bread_crumb_component__WEBPACK_IMPORTED_MODULE_8__.BreadCrumbComponent, _form_generator_components_select_from_catalog_select_from_catalog_component__WEBPACK_IMPORTED_MODULE_2__.SelectFromCatalogComponent, _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, _paged_list_components_paged_list_paged_list_component__WEBPACK_IMPORTED_MODULE_9__.PagedListComponent, _form_generator_components_form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _paged_list_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__.PaginationComponent], styles: [".container[_ngcontent-%COMP%] {\r\n    padding: 1em;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.flex-item[_ngcontent-%COMP%] {\r\n    align-self: flex-end;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%] {\r\n    bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW0ge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIHtcclxuICAgIGJvdHRvbTogMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _form_generator_form_generator_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-generator/form-generator.module */ 4650);
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/http-client.service */ 6139);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.module */ 8462);
/* harmony import */ var _paged_list_paged_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paged-list/paged-list.module */ 6749);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/alert/alert.component */ 8141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__.HttpClientService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot([]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _form_generator_form_generator_module__WEBPACK_IMPORTED_MODULE_1__.FormGeneratorModule,
            _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__.MenuModule,
            _paged_list_paged_list_module__WEBPACK_IMPORTED_MODULE_5__.PagedListModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.AlertComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _form_generator_form_generator_module__WEBPACK_IMPORTED_MODULE_1__.FormGeneratorModule,
        _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__.MenuModule,
        _paged_list_paged_list_module__WEBPACK_IMPORTED_MODULE_5__.PagedListModule] }); })();


/***/ }),

/***/ 8141:
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class AlertComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.alert = (message, type) => {
            this.ngZone.run(() => {
                let element = document.getElementById('liveAlertPlaceholder');
                var wrapper = document.createElement('div');
                wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
                if (element) {
                    element.append(wrapper);
                }
                console.log(element);
            });
        };
    }
    ngOnInit() {
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], decls: 1, vars: 0, consts: [["id", "liveAlertPlaceholder"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3085:
/*!********************************************************************************************!*\
  !*** ./src/app/form-generator/components/check-box-control/check-box-control.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckBoxControlComponent": () => (/* binding */ CheckBoxControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8346);


class CheckBoxControlComponent {
    constructor() { }
    ngOnInit() {
    }
}
CheckBoxControlComponent.ɵfac = function CheckBoxControlComponent_Factory(t) { return new (t || CheckBoxControlComponent)(); };
CheckBoxControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckBoxControlComponent, selectors: [["app-check-box-control"]], inputs: { Form: "Form", Field: "Field", FormGroup: "FormGroup" }, decls: 6, vars: 5, consts: [[1, "row", "mb-3", 3, "formGroup"], [1, "col-sm-10", "offset-sm-2"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "id", "formControlName"], [1, "form-check-label", 3, "for"]], template: function CheckBoxControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.FormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "check-box-", ctx.Field.key, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "check-box-", ctx.Field.key, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Field.title, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1ib3gtY29udHJvbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1305:
/*!******************************************************************!*\
  !*** ./src/app/form-generator/components/form/form.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponent": () => (/* binding */ FormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/forms.service */ 9484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _directives_ng_var_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/ng-var-directive */ 6228);
/* harmony import */ var _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-text/input-text.component */ 4495);
/* harmony import */ var _check_box_control_check_box_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../check-box-control/check-box-control.component */ 3085);








function FormComponent_form_0_span_4_span_1_ng_container_1_span_1_app_input_text_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-input-text", 15);
} if (rf & 2) {
    const Field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).ngVar;
    const field_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Form", ctx_r9.Form)("Field", field_r4)("FormGroup", Field_r7);
} }
function FormComponent_form_0_span_4_span_1_ng_container_1_span_1_app_input_text_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-input-text", 15);
} if (rf & 2) {
    const Field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).ngVar;
    const field_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Form", ctx_r10.Form)("Field", field_r4)("FormGroup", Field_r7);
} }
function FormComponent_form_0_span_4_span_1_ng_container_1_span_1_app_check_box_control_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-check-box-control", 15);
} if (rf & 2) {
    const Field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).ngVar;
    const field_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Form", ctx_r11.Form)("Field", field_r4)("FormGroup", Field_r7);
} }
function FormComponent_form_0_span_4_span_1_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "fieldset", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FormComponent_form_0_span_4_span_1_ng_container_1_span_1_app_input_text_3_Template, 1, 3, "app-input-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FormComponent_form_0_span_4_span_1_ng_container_1_span_1_app_input_text_4_Template, 1, 3, "app-input-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FormComponent_form_0_span_4_span_1_ng_container_1_span_1_app_check_box_control_5_Template, 1, 3, "app-check-box-control", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngVar;
    const field_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", Field_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", field_r4.readOnly)("hidden", field_r4.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", field_r4.inputType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "checkbox");
} }
function FormComponent_form_0_span_4_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FormComponent_form_0_span_4_span_1_ng_container_1_span_1_Template, 6, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const field_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !field_r4.isPrimaryKey);
} }
function FormComponent_form_0_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FormComponent_form_0_span_4_span_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const Fields_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngVar", Fields_r2.controls[i_r5]);
} }
function FormComponent_form_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FormComponent_form_0_span_4_span_1_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formArrayName", "properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.Form.properties);
} }
function FormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function FormComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FormComponent_form_0_span_4_Template, 2, 2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FormComponent_form_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.Delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.FormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.FormGroup.controls["title"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngVar", ctx_r0.FormGroup.controls["properties"]);
} }
class FormComponent {
    constructor(formsService, ngZone) {
        this.formsService = formsService;
        this.ngZone = ngZone;
        this.SaveClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.DeleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onSubmit = () => {
            var _a;
            if (this.FormGroup != null) {
                var payLoad = (_a = this.FormGroup) === null || _a === void 0 ? void 0 : _a.getRawValue();
                this.SaveClicked.emit(payLoad);
            }
        };
        this.Delete = () => {
            var _a;
            var payLoad = (_a = this.FormGroup) === null || _a === void 0 ? void 0 : _a.getRawValue();
            this.DeleteClicked.emit(payLoad);
        };
        this.alert = (message, type) => {
            this.ngZone.run(() => {
                let element = document.getElementById('liveAlertPlaceholder');
                var wrapper = document.createElement('div');
                wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
                if (element) {
                    element.append(wrapper);
                }
                console.log(element);
            });
        };
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
    }
    Start(form) {
        this.Form = form;
        var formGroup = this.formsService.GetFormGroup(this.Form);
        this.FormGroup = formGroup;
        console.log("fg");
        console.log(this.FormGroup);
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_forms_service__WEBPACK_IMPORTED_MODULE_0__.FormsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone)); };
FormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], outputs: { SaveClicked: "SaveClicked", DeleteClicked: "DeleteClicked" }, decls: 1, vars: 1, consts: [[3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [3, "formArrayName", 4, "ngVar"], ["id", "liveAlertPlaceholder"], [1, "flex-container"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [3, "formArrayName"], [4, "ngFor", "ngForOf"], [4, "ngVar"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [3, "disabled", "hidden"], [3, "ngSwitch"], [3, "Form", "Field", "FormGroup", 4, "ngSwitchCase"], [3, "Form", "Field", "FormGroup"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FormComponent_form_0_Template, 11, 3, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.FormGroup && ctx.Form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _directives_ng_var_directive__WEBPACK_IMPORTED_MODULE_1__.VarDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_2__.InputTextComponent, _check_box_control_check_box_control_component__WEBPACK_IMPORTED_MODULE_3__.CheckBoxControlComponent], styles: [".flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn0iXX0= */"] });


/***/ }),

/***/ 4495:
/*!******************************************************************************!*\
  !*** ./src/app/form-generator/components/input-text/input-text.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputTextComponent": () => (/* binding */ InputTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8346);


class InputTextComponent {
    constructor() { }
    ngOnInit() {
    }
}
InputTextComponent.ɵfac = function InputTextComponent_Factory(t) { return new (t || InputTextComponent)(); };
InputTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputTextComponent, selectors: [["app-input-text"]], inputs: { Form: "Form", Field: "Field", FormGroup: "FormGroup" }, decls: 7, vars: 8, consts: [[1, "row", "mb-3", 3, "formGroup"], [1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", 1, "form-control", "form-control-sm", 3, "formControlName", "placeholder"], [1, "form-text"]], template: function InputTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.FormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.Field.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Field.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.Field.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx.Field.inputType)("aria-label", ctx.Field.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Field.description);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC10ZXh0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9595:
/*!************************************************************************************************!*\
  !*** ./src/app/form-generator/components/select-from-catalog/select-from-catalog.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectFromCatalogComponent": () => (/* binding */ SelectFromCatalogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/modal.service */ 9853);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _paged_list_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../paged-list/components/pagination/pagination.component */ 2790);






function SelectFromCatalogComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", dataItem_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", dataItem_r2.title, " ");
} }
function SelectFromCatalogComponent_app_pagination_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-pagination", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageClicked", function SelectFromCatalogComponent_app_pagination_10_Template_app_pagination_pageClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.pageClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("totalPages", ctx_r1.Data == null ? null : ctx_r1.Data.totalPages);
} }
class SelectFromCatalogComponent {
    constructor(modalservice) {
        this.modalservice = modalservice;
        this.onPageClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.OnSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.OnOk = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        // Show = (data: Data) => {
        //   this.Data = data;
        //   this.Modal.modal("show");
        //   return new Promise<boolean>((res, rej) => {
        //     this.Modal.on("hidden.bs.modal", (e: any) => {
        //       this.Modal.modal("hide");
        //       this.Response = true;
        //       res(this.Response);
        //     });
        //   });
        // }
        this.pageClicked = (evt) => {
            this.onPageClicked.emit(evt);
        };
        this.Search = () => {
            this.OnSearch.emit(this.SearchWord);
        };
        this.Ok = () => {
            if (this.SelectedDataItem) {
                this.OnOk.emit(this.SelectedDataItem);
            }
        };
        this.modalservice.SelectFromCatalog = this;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // $(() => {
        //   this.Modal = $("#selectFromCatalogComponent");
        // });
    }
}
SelectFromCatalogComponent.ɵfac = function SelectFromCatalogComponent_Factory(t) { return new (t || SelectFromCatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService)); };
SelectFromCatalogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SelectFromCatalogComponent, selectors: [["app-select-from-catalog"]], inputs: { Data: "Data" }, outputs: { onPageClicked: "onPageClicked", OnSearch: "OnSearch", OnOk: "OnOk" }, decls: 16, vars: 4, consts: [[1, "modal-header"], [1, "modal-title"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Search...", "aria-label", "search", "aria-describedby", "search", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "search", 1, "btn", "btn-outline-secondary", 3, "click"], ["multiple", "", "aria-label", "multiple select example", 1, "form-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "pagination", 3, "totalPages", "pageClicked", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "value"], [1, "pagination", 3, "totalPages", "pageClicked"]], template: function SelectFromCatalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Select from catalog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SelectFromCatalogComponent_Template_input_ngModelChange_4_listener($event) { return ctx.SearchWord = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectFromCatalogComponent_Template_button_click_5_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SelectFromCatalogComponent_Template_select_ngModelChange_7_listener($event) { return ctx.SelectedDataItem = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SelectFromCatalogComponent_option_8_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SelectFromCatalogComponent_app_pagination_10_Template, 1, 1, "app-pagination", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectFromCatalogComponent_Template_button_click_14_listener() { return ctx.Ok(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.SearchWord);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.SelectedDataItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.Data == null ? null : ctx.Data.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Data && ctx.Data.totalPages);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectMultipleControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _paged_list_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__.PaginationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtZnJvbS1jYXRhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6228:
/*!***************************************************************!*\
  !*** ./src/app/form-generator/directives/ng-var-directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VarDirective": () => (/* binding */ VarDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class VarDirective {
    constructor(vcRef, templateRef) {
        this.vcRef = vcRef;
        this.templateRef = templateRef;
        this.context = {};
    }
    set ngVar(context) {
        this.context.$implicit = this.context.ngVar = context;
        this.updateView();
    }
    updateView() {
        this.vcRef.clear();
        this.vcRef.createEmbeddedView(this.templateRef, this.context);
    }
}
VarDirective.ɵfac = function VarDirective_Factory(t) { return new (t || VarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
VarDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: VarDirective, selectors: [["", "ngVar", ""]], inputs: { ngVar: "ngVar" } });


/***/ }),

/***/ 4650:
/*!*********************************************************!*\
  !*** ./src/app/form-generator/form-generator.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormGeneratorModule": () => (/* binding */ FormGeneratorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form/form.component */ 1305);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _directives_ng_var_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/ng-var-directive */ 6228);
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/forms.service */ 9484);
/* harmony import */ var _components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/input-text/input-text.component */ 4495);
/* harmony import */ var _components_check_box_control_check_box_control_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/check-box-control/check-box-control.component */ 3085);
/* harmony import */ var _components_select_from_catalog_select_from_catalog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/select-from-catalog/select-from-catalog.component */ 9595);
/* harmony import */ var _paged_list_paged_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../paged-list/paged-list.module */ 6749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);










class FormGeneratorModule {
}
FormGeneratorModule.ɵfac = function FormGeneratorModule_Factory(t) { return new (t || FormGeneratorModule)(); };
FormGeneratorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: FormGeneratorModule });
FormGeneratorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        _services_forms_service__WEBPACK_IMPORTED_MODULE_2__.FormsService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _paged_list_paged_list_module__WEBPACK_IMPORTED_MODULE_6__.PagedListModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](FormGeneratorModule, { declarations: [_components_form_form_component__WEBPACK_IMPORTED_MODULE_0__.FormComponent,
        _directives_ng_var_directive__WEBPACK_IMPORTED_MODULE_1__.VarDirective,
        _components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_3__.InputTextComponent,
        _components_check_box_control_check_box_control_component__WEBPACK_IMPORTED_MODULE_4__.CheckBoxControlComponent,
        _components_select_from_catalog_select_from_catalog_component__WEBPACK_IMPORTED_MODULE_5__.SelectFromCatalogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _paged_list_paged_list_module__WEBPACK_IMPORTED_MODULE_6__.PagedListModule], exports: [_components_form_form_component__WEBPACK_IMPORTED_MODULE_0__.FormComponent,
        _components_select_from_catalog_select_from_catalog_component__WEBPACK_IMPORTED_MODULE_5__.SelectFromCatalogComponent] }); })();


/***/ }),

/***/ 9484:
/*!**********************************************************!*\
  !*** ./src/app/form-generator/services/forms.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsService": () => (/* binding */ FormsService)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);



class FormsService {
    constructor(fb) {
        this.fb = fb;
        this.GetFormGroup = (form) => {
            console.log("form al momento de crear el form group");
            console.log(form);
            let _formGroup = this.fb.group({
                title: [form.title, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
                type: [form.type, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
                properties: this.GetFieldFormArray(form)
                //  navRoutes: this.GetNavRoutesFormGroup(form.navRoutes!)
            });
            return _formGroup;
        };
        this.GetFieldFormArray = (form) => {
            let fields = this.fb.array([]);
            if (form.properties) {
                for (const field of form.properties) {
                    let fg = this.GetField(field);
                    fields.push(fg);
                }
            }
            return fields;
        };
        this.GetField = (field) => {
            var _a, _b;
            let group = this.fb.group({
                key: [field.key, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
                value: [field.value, field.required === true ? _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required : null],
                label: [field.title],
                type: [field.type],
                isPrimaryKey: [field.isPrimaryKey],
                inputType: [field.inputType],
                description: [field.description],
                readOnly: [field.readOnly],
                hidden: [field.hidden],
                ignoreForUpsert: [field.ignoreForUpsert],
                apiGetFormPath: [(_a = field.navRoutes) === null || _a === void 0 ? void 0 : _a.apiGetFormPath],
                apiUpsertPath: [(_b = field.navRoutes) === null || _b === void 0 ? void 0 : _b.apiUpsertPath]
            });
            return group;
        };
    }
}
FormsService.ɵfac = function FormsService_Factory(t) { return new (t || FormsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
FormsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FormsService, factory: FormsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 103:
/*!**********************************************************************!*\
  !*** ./src/app/menu/components/bread-crumb/bread-crumb.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadCrumbComponent": () => (/* binding */ BreadCrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);



function BreadCrumbComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BreadCrumbComponent_ng_container_2_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.itemClicked(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
} }
class BreadCrumbComponent {
    constructor() {
        this.breadCrumbItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.itemClicked = (item) => {
            var found = false;
            var arr = this.breadCrumbItems;
            for (var i of this.breadCrumbItems) {
                if (found) {
                    arr === null || arr === void 0 ? void 0 : arr.splice(arr.indexOf(i), 1);
                }
                if (i === item) {
                    found = true;
                }
            }
            this.breadCrumbItems = arr;
            this.breadCrumbItemClicked.emit(item);
        };
        this.breadCrumbItems = [];
    }
    ngOnInit() {
    }
}
BreadCrumbComponent.ɵfac = function BreadCrumbComponent_Factory(t) { return new (t || BreadCrumbComponent)(); };
BreadCrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadCrumbComponent, selectors: [["app-bread-crumb"]], inputs: { breadCrumbItems: "breadCrumbItems" }, outputs: { breadCrumbItemClicked: "breadCrumbItemClicked" }, decls: 3, vars: 1, consts: [["aria-label", "breadcrumb", 2, "--bs-breadcrumb-divider", ">"], [1, "breadcrumb"], [4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], ["href", "#", 3, "click"]], template: function BreadCrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadCrumbComponent_ng_container_2_Template, 4, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadCrumbItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZC1jcnVtYi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 4658:
/*!********************************************************!*\
  !*** ./src/app/menu/components/menu/menu.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_http_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/http-client.service */ 6139);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);





const _c0 = function () { return []; };
const _c1 = function (a0) { return { active: a0 }; };
function MenuComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_ng_container_1_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.menuItemClicked(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, ctx_r0.selectedMenuItem === item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
} }
class MenuComponent {
    constructor(httpClientService) {
        this.httpClientService = httpClientService;
        this.itemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.menuItemClicked = (item) => {
            this.selectedMenuItem = item;
            this.itemClicked.emit(item);
        };
        this.breadCrumbItemClick = (bcu) => {
        };
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_client_service__WEBPACK_IMPORTED_MODULE_0__.HttpClientService)); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], inputs: { menu: "menu" }, outputs: { itemClicked: "itemClicked" }, decls: 2, vars: 1, consts: [[1, "list-group", "list-group-flush"], [4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", "list-group-item-light", "p-3", 3, "routerLink", "ngClass", "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_ng_container_1_Template, 3, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menu == null ? null : ctx.menu.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: [".container[_ngcontent-%COMP%] {\r\n    margin-top: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoibWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn0iXX0= */"] });


/***/ }),

/***/ 1093:
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuRoutingModule": () => (/* binding */ MenuRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);



const routes = [];
class MenuRoutingModule {
}
MenuRoutingModule.ɵfac = function MenuRoutingModule_Factory(t) { return new (t || MenuRoutingModule)(); };
MenuRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuRoutingModule });
MenuRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 8462:
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuModule": () => (/* binding */ MenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-routing.module */ 1093);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu/menu.component */ 4658);
/* harmony import */ var _components_bread_crumb_bread_crumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/bread-crumb/bread-crumb.component */ 103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);





class MenuModule {
}
MenuModule.ɵfac = function MenuModule_Factory(t) { return new (t || MenuModule)(); };
MenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent,
        _components_bread_crumb_bread_crumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadCrumbComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuRoutingModule], exports: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent,
        _components_bread_crumb_bread_crumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadCrumbComponent] }); })();


/***/ }),

/***/ 8355:
/*!*************************************************!*\
  !*** ./src/app/menu/models/bread-crumb-item.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadCrumbItem": () => (/* binding */ BreadCrumbItem)
/* harmony export */ });
class BreadCrumbItem {
}


/***/ }),

/***/ 6521:
/*!********************************!*\
  !*** ./src/app/models/item.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item)
/* harmony export */ });
class Item {
}


/***/ }),

/***/ 4759:
/*!**************************************************************************!*\
  !*** ./src/app/paged-list/components/paged-list/paged-list.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagedListComponent": () => (/* binding */ PagedListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);




const _c0 = function () { return []; };
function PagedListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagedListComponent_div_7_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const dataItem_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openDataItem(dataItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataItem_r1.title, "");
} }
class PagedListComponent {
    constructor() {
        this.AddNewDataItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.OpenDataItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.EditDataItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.DeleteDataItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.Add = () => {
            this.AddNewDataItem.emit();
        };
        //When they open a dataitem we re-populate the menu
        this.openDataItem = (dataItem) => {
            this.OpenDataItem.emit(dataItem);
        };
        //When they edit an item, we show the edit form
        this.editDataItem = (dataItem) => {
            this.EditDataItem.emit(dataItem);
        };
        this.deleteDataItem = (dataItem) => {
            this.DeleteDataItem.emit(dataItem);
        };
    }
    ngOnInit() {
    }
}
PagedListComponent.ɵfac = function PagedListComponent_Factory(t) { return new (t || PagedListComponent)(); };
PagedListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagedListComponent, selectors: [["app-paged-list"]], inputs: { data: "data" }, outputs: { AddNewDataItem: "AddNewDataItem", OpenDataItem: "OpenDataItem", EditDataItem: "EditDataItem", DeleteDataItem: "DeleteDataItem" }, decls: 8, vars: 2, consts: [[1, "row"], [1, "header"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngFor", "ngForOf"], [1, "flex-container"], [3, "routerLink", "click"], [1, "bi", "bi-caret-right-fill"]], template: function PagedListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagedListComponent_Template_button_click_4_listener() { return ctx.Add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PagedListComponent_div_7_Template, 5, 3, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VkLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJwYWdlZC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59Il19 */"] });


/***/ }),

/***/ 2790:
/*!**************************************************************************!*\
  !*** ./src/app/paged-list/components/pagination/pagination.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);



const _c0 = function (a0) { return { active: a0 }; };
function PaginationComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_ng_container_5_Template_li_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const page_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.clickPage(page_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, page_r1 === ctx_r0.currentPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r1);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
class PaginationComponent {
    constructor() {
        this.pageClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.clickNext = () => {
            if (this.currentPage == this.totalPages) {
                return;
            }
            this.currentPage++;
            this.pageClicked.emit(this.currentPage);
        };
        this.clickPrevious = () => {
            if (this.currentPage === 1) {
                return;
            }
            this.currentPage--;
            this.pageClicked.emit(this.currentPage);
        };
        this.clickPage = (page) => {
            this.currentPage = page;
            this.pageClicked.emit(this.currentPage);
        };
        this.pages = [];
    }
    get totalPages() {
        return this._totalPages;
    }
    //https://stackoverflow.com/q/46081339/3596441
    set totalPages(value) {
        var _a, _b;
        this._totalPages = value;
        (_a = this.pages) === null || _a === void 0 ? void 0 : _a.splice(0, this.pages.length);
        //set pages
        for (var i = 0; i < this.totalPages; i++) {
            (_b = this.pages) === null || _b === void 0 ? void 0 : _b.push(i + 1);
        }
        this.currentPage = 1;
    }
    ngOnInit() {
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { totalPages: "totalPages" }, outputs: { pageClicked: "pageClicked" }, decls: 9, vars: 7, consts: [["aria-label", "Page navigation example"], [1, "pagination", "justify-content-center"], [1, "page-item", 3, "ngClass"], ["href", "#", 1, "page-link", 3, "click"], [4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", 1, "page-link"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_3_listener() { return ctx.clickPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_ng_container_5_Template, 4, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_7_listener() { return ctx.clickNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.currentPage === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.currentPage === ctx.totalPages));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6749:
/*!*************************************************!*\
  !*** ./src/app/paged-list/paged-list.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagedListModule": () => (/* binding */ PagedListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _components_paged_list_paged_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/paged-list/paged-list.component */ 4759);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pagination/pagination.component */ 2790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);





class PagedListModule {
}
PagedListModule.ɵfac = function PagedListModule_Factory(t) { return new (t || PagedListModule)(); };
PagedListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PagedListModule });
PagedListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PagedListModule, { declarations: [_components_paged_list_paged_list_component__WEBPACK_IMPORTED_MODULE_0__.PagedListComponent,
        _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__.PaginationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_components_paged_list_paged_list_component__WEBPACK_IMPORTED_MODULE_0__.PagedListComponent,
        _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__.PaginationComponent] }); })();


/***/ }),

/***/ 6139:
/*!*************************************************!*\
  !*** ./src/app/services/http-client.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpClientService": () => (/* binding */ HttpClientService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);




class HttpClientService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.get = (url) => {
            // const httpOptions = { withCredentials: true };
            // return this.http.get(url, httpOptions);
            return this.http.get(url);
        };
        this.post = (url, body) => {
            // const httpOptions = { withCredentials: true };
            // return this.http.post(url, body, httpOptions);
            return this.http.post(url, body);
        };
        this.Prefix = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiHref;
    }
}
HttpClientService.ɵfac = function HttpClientService_Factory(t) { return new (t || HttpClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
HttpClientService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpClientService, factory: HttpClientService.ɵfac });


/***/ }),

/***/ 9853:
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class ModalService {
    constructor() {
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseApiHref: "",
    serverUrl: "/" //cms root
    //serverUrl: "http://localhost:54792/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map