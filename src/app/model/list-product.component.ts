import { Component, OnInit } from "@angular/core";
import { IndexService } from "../index.service";
import { Product } from "./product.model";

@Component({
    selector: 'app-list-product',
    templateUrl: './list-product.component.html',
    styleUrls: []
  })
  export class ListProductComponent implements OnInit {
    datas:Product[]=[];
  
    constructor(private productService: IndexService) { }
  
    ngOnInit(): void {
      this.getAll();
    }
  
    getAll(){
      this.productService.getAll().subscribe((res:any)=>{
        this.datas = res
      })
    }
  }