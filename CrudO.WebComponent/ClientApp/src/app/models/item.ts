import { NavRoutes } from "./nav-routes";


export class Item {
  id?: object;
  parentId?: object;

  key?: string;
  title?: string;
  description?: string;
  required?: boolean;
  inputType?: string;
  readOnly?: string;
  hidden?: boolean;

  type?: string;
  useAsDataItemLabel?: boolean;
  isPrimaryKey?: boolean;
  isNavigationCollection?: boolean;
  ignoreForUpsert?: boolean;
  value: any;

  navRoutes?:NavRoutes;
}

