import { Injectable } from "@angular/core";
import { Cart } from "../../models/cart";
import { ProdutoDTO } from "../../models/produto.dto";
import { StorageService } from "../storage.service";

@Injectable()
export class CartService {

    constructor(public storage: StorageService) {
    }

    createOrClearCart() : Cart { //metodo vai  me retornar um cart
        let cart: Cart = {items: []}; //carrinho vazio
        this.storage.setCart(cart);
        return cart;
    }

    getCart() : Cart {
        let cart: Cart = this.storage.getCart();
        if (cart == null) {
            cart = this.createOrClearCart();
        }
        return cart;
    }

    addProduto(produto: ProdutoDTO) : Cart {
        let cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == produto.id);
        if (position == -1) {//significa que esse produto ainda não existe
            cart.items.push({quantidade: 1, produto: produto});
        }
        this.storage.setCart(cart);//atualizar carrinho no localstorage
        return cart;
    }
}
