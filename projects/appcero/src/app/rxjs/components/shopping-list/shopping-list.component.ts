import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingService } from '../../services/shopping.service';
import { Product } from '../../types/product.type';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnDestroy{

  shoppingList: Product[] = [];
  suscription: Subscription = new Subscription()

  constructor(private shoppingService: ShoppingService){}

  /**
   * next => atributo obligatoroio de cualquier observer. es la fncionalidad que recibe 
   * del observable al emitir nuevos valores
   * error => la funcionalidad opcional que gestiona las notificaciones de error
   * completed => la funcionalidad opcional que gestiona la eecucion completada
   */

  ngOnInit(): void{
    //opcion validad pero no recomendada
    // this.suscription = this.shoppingService.getAllProducts().subscribe(
    //   (list: Product[]) =>{
    //     this.shoppingList = list
    //   }
    // ),
    // ((error: any)=> console.error(`Ha ocurrido un error al obtener la lista: ${error}`))
    // (()=> console.info(`Obtener lista de productos completadas`))

    //opcion recomendada
    this.suscription = this.shoppingService.getAllProducts().subscribe(
      {
        next: (list: Product[])=> {
          this.shoppingList = list
        },
        error: (error:any )=>{
          console.error(`Ha ocurrido un error al obtener la lista: ${error}`)
        },
        complete: ()=> console.info(`Obtener lista de productos completadas`)
      }
    )}

    
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
}
