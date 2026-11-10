import type { Pedido, ResumoPedido } from "../models/pedido";

export function resumirPedido(pedido: Pedido): ResumoPedido {
    return [
        pedido.id,
        pedido.itens.length,
        pedido.status,
    ];
}