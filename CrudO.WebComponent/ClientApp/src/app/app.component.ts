import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AlertComponent } from './components/alert/alert.component';
import { FormComponent } from './form-generator/components/form/form.component';
import { SelectFromCatalogComponent } from './form-generator/components/select-from-catalog/select-from-catalog.component';
import { Form } from './models/form';
import { MenuComponent } from './menu/components/menu/menu.component';
import { BreadCrumbItem } from './menu/models/bread-crumb-item';
import { FormsContext } from './models/forms-context';

import { Item } from './models/item';
import { Data } from './paged-list/models/data';


import { HttpClientService } from './services/http-client.service';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(FormComponent) FormComponent!: FormComponent;
  @ViewChild(MenuComponent) MenuComponent!: MenuComponent;
  @ViewChild(AlertComponent) AlertComponent!: AlertComponent;
  @ViewChild(SelectFromCatalogComponent) SelectFromCatalogComponent!: SelectFromCatalogComponent;

  BreadCrumbItems!: BreadCrumbItem[];


  FormsContext?: FormsContext;
  currentUser?: string;

  CatalogData?: Data;


  serverUrl = window.location.protocol + '//' + window.location.host;
  formsApiPath = "/api";
  currentControl: any;

  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    private ngZone: NgZone,
    private modalService: ModalService
  ) {
    this.BreadCrumbItems = [];
  }

  ngOnInit(): void {

    this.httpClientService.get(this.serverUrl + this.formsApiPath + "/Forms/GetCurrentUser")
      .subscribe((u: any) => {

        this.currentUser = u.value;
        this.getRootDataContext();
      }, this.ShowError);
  }



  getRootDataContext = () => {


    this.httpClientService.get(this.serverUrl + this.formsApiPath + "/Forms/GetRootDataContext")
      .subscribe((c: FormsContext) => {
        this.FormsContext = c;
        this.addToBreadCrumb(c.title!);
      }, this.ShowError);
  }


  /*****************************************MENU*******************************************/

  //When they click a menu item, we request dataitems to show them on the page body
  menuItemClicked = (e: Item) => {

    if (e.title === "Properties") {
      this.EditDataItem(e);
    }
    else {
      var apiPath = e.navRoutes!.apiGetDataPath;
      this.httpClientService.post(this.serverUrl + apiPath, e)
        .subscribe((x: Data) => {
          this.FormsContext!.data = x;
          this.currentControl = x;

        }, this.ShowError);
    }

    //}

  }
  /**************************************PAGE**********************************************/

  AddNewDataItem = () => {
    if (this.MenuComponent?.selectedMenuItem?.navRoutes?.apiSelectFromCatalogPath) {
      this.getCatalogPage(1);
    }
    else if (this.MenuComponent?.selectedMenuItem?.navRoutes?.apiGetFormPath) {
      //get form for this model
      var blankFormApiPath = this.MenuComponent?.selectedMenuItem?.navRoutes?.apiGetFormPath;
      this.httpClientService.post(this.serverUrl + blankFormApiPath, this.MenuComponent?.selectedMenuItem)
        .subscribe((i: Form) => {
          this.FormsContext!.form = i;
          this.FormComponent.Start(i);
          this.currentControl = this.FormsContext?.form;

        }, this.ShowError);
    }
  }

  selectFromCatalogPageClicked = (page: any) => {
    this.getCatalogPage(page as number);
  }
  OnCatalogSearch = (keyword: string) => {
    this.getCatalogPage(1, keyword);
  }

  getCatalogPage = (page: number, searchTerm?: string) => {
    var selectFromCatalogPath = this.MenuComponent?.selectedMenuItem?.navRoutes?.apiSelectFromCatalogPath + "/" + page.toString();
    if (searchTerm) {
      selectFromCatalogPath += "/" + searchTerm;
    }
    this.httpClientService.post(this.serverUrl + selectFromCatalogPath, this.MenuComponent?.selectedMenuItem)
      .subscribe((d: Data) => {
        //show select from catalog
        this.CatalogData = d;
        this.currentControl = this.CatalogData;

      }, this.ShowError);
  }

  OpenDataItem = (dataItem: Item) => {

    var apiPath = dataItem.navRoutes?.apiGetFormsContextPath;
    console.log("dataItem");
    console.log(dataItem);
    this.httpClientService.post(this.serverUrl + apiPath, dataItem)
      .subscribe((c: FormsContext) => {
        this.FormsContext = c;
        this.addToBreadCrumb(this.FormsContext.title!);
        var item: Item = new Item();
        item.title = "Properties";
        item.id = dataItem.id;
        item.type = dataItem.type;
        item.parentId = dataItem.parentId;
        item.navRoutes = c.navRoutes;
        console.log("item properties");
        console.log(item);
        this.FormsContext.menu?.items?.unshift(item);

      }, this.ShowError);
  }



  EditDataItem = (dataItem: Item) => {

    if (!dataItem.navRoutes || !dataItem.navRoutes.apiGetFormPath) {
      this.AlertComponent.alert("No path to get form supplied", "danger");
      return;
    }
    var editFormApi = dataItem.navRoutes?.apiGetFormPath;
    this.httpClientService.post(this.serverUrl + editFormApi, dataItem)
      .subscribe((i: Form) => {
        this.FormsContext!.form = i;
        this.FormComponent.Start(i);
        this.currentControl = i;

      }, this.ShowError);
  }

  OnSelectFromCatalogOk = (dataItem: any) => {
    var item = dataItem[0];
    var apiPath = this.MenuComponent?.selectedMenuItem?.navRoutes?.apiSelectedFromCatalogPath;
    this.httpClientService.post(this.serverUrl + apiPath, item)
      .subscribe(
        (dbItem: any) => {
          this.AlertComponent.alert("Item Added Ok", "success");
          this.currentControl = this.FormsContext?.data;
          this.FormsContext?.data?.items?.push(dbItem);
        }, this.ShowError)
  }

  /********************************************FORM*******************************************/



  SaveClicked = (form: Form) => {

    var apiPath = this.FormComponent.Form?.navRoutes?.apiUpsertPath;

    if (apiPath != null) {
      this.httpClientService.post(this.serverUrl + apiPath, form)
        .subscribe((x: number) => {
          this.ngZone.run(() => {
            this.FormComponent.alert("Cambios Guardados Correctamente", "success");
          });

        }, this.ShowError);
    }
  }


  breadCrumbItemClicked = (bcu: BreadCrumbItem) => {
    var found = false;


    this.ngZone.run(() => {

      this.FormsContext = bcu.object;
      this.currentControl = undefined;
      this.MenuComponent!.selectedMenuItem = undefined;

    });


  }

  addToBreadCrumb = (title: string) => {

    var bci = new BreadCrumbItem();
    bci.object = this.FormsContext;
    bci.title = title;
    this.ngZone.run(() => {
      this.BreadCrumbItems?.push(bci);
    });
  }


  pageClicked = (page: number) => {
    if (this.FormsContext && this.FormsContext.data) {
      this.FormsContext.data.currentPage = page;
      var menuItem = this.MenuComponent!.selectedMenuItem;
      var apiPath = this.MenuComponent?.selectedMenuItem?.navRoutes?.apiGetDataPath + "/" + page.toString();
      this.httpClientService.post(this.serverUrl + apiPath, menuItem)
        .subscribe((x: Data) => {

          this.FormsContext!.data = x;
          this.currentControl = x;

        }, this.ShowError);
    }
  }

  DeleteClicked = (form: Form) => {
    if (this.FormsContext) {
      var apiPath = this.FormsContext.navRoutes?.apiDeletePath;
      var item: Item = new Item();
      item.id = this.FormsContext.id;
      item.type = form.type;
      this.httpClientService.post(this.serverUrl + apiPath, item)
        .subscribe((x: Data) => {

          this.FormComponent.alert("Elemento Eliminado Correctamente", "success");
        }, (err: any) => { this.ShowError });
    }
  }

  ShowError = (err: any) => {
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
  }




}
