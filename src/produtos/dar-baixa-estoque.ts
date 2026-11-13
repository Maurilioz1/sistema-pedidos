import type { Produto } from "../models/produto";

export function darBaixaEstoque(produto: Produto, quantidade: number): void {
    if (!Number.isSafeInteger(quantidade) || quantidade <= 0) {
        throw new Error("A quantidade deve ser um número inteiro positivo.");
    }

    if (quantidade > produto.estoque) {
        throw new Error(`Estoque insuficiente para ${produto.nome}.`);
    }

    produto.estoque -= quantidade;
}