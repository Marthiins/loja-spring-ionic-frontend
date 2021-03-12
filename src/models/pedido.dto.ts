import { RefDTO } from "./ref.dto";
import { PagamentoDTO } from "./pagamento.dto";
import { ItemPedidoDTO } from "./item-pedido.dto";

export interface PedidoDTO {
    cliente: RefDTO; //"cliente" : {"id" : 1}
    enderecoDeEntrega: RefDTO; //"enderecoDeEntrega" : {"id" : 1},
    pagamento: PagamentoDTO;//"pagamento"
    itens: ItemPedidoDTO[];//"itens" Lista de itens: [ "quantidade" : 2 "produto" : {"id" : 3
  }
