import { Item } from "src/app/models/item";

export class Data{
  title?:string;
  items?:Item[];
  currentPage:number=1;
  pageSize!:number;
  totalPages!:number;
  totalItems!:number;
}
