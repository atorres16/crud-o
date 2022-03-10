import { Item } from "src/app/models/item";
import { NavRoutes } from "./nav-routes";

export class Form {

  title?: string;
  description?: string;
  properties?: Item[];
  id: any;
  ParentId: any;
  type: any;
  navRoutes?:NavRoutes;
}
