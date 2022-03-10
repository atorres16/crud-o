

import { Form } from "./form";
import { Menu } from "../menu/models/menu";
import { Data } from "../paged-list/models/data";
import { NavRoutes } from "./nav-routes";

export class FormsContext {
  id: any;
  parentId: any;
  title?:string;
  description?:string;

  menu?: Menu;
  form?:Form;
  data?:Data;
  navRoutes?:NavRoutes;
}
