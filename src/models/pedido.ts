import type { ItemPedido } from "./item-pedido";
import type { StatusPedido } from "./status-pedido";

export interface Pedido {
    id: number;
    itens: ItemPedido[];
    status: StatusPedido;
}

export interface ResumoPedido {
    id: number;
    quantidadeItens: number;
    status: StatusPedido;
}

export type PedidoComObservacao = Pedido & {
    observacao: string;
};