import type { Pedido } from "../models/pedido";
import type { Produto } from "../models/produto";
import { darBaixaEstoque } from "../produtos/dar-baixa-estoque";

export function baixarEstoquePedido(pedido: Pedido): void {
    const simulacoes = new Map<Produto, Produto>();

    for (const { produto, quantidade } of pedido.itens) {
        const copia = simulacoes.get(produto) ?? { ...produto };

        darBaixaEstoque(copia, quantidade);
        simulacoes.set(produto, copia);
    }

    for (const [produto, copia] of simulacoes) {
        produto.estoque = copia.estoque;
    }
}