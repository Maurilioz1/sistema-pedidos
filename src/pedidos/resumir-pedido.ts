import type { Pedido, ResumoPedido } from "../models/pedido";

export function resumirPedido(pedido: Pedido): ResumoPedido {
    return {
        id: pedido.id,
        quantidadeItens: pedido.itens.length,
        status: pedido.status,
    };
}