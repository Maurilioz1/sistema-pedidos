import type { ItemPedido } from "../models/item-pedido";

export class GerenciadorItensPedido {
    private itens: ItemPedido[] = [];

    public contarItens(): number {
        return this.itens.length;
    }

    public adicionarItens(...novosItens: ItemPedido[]): void {
        this.itens.push(...novosItens);
    }

    public static criarComItens(...itens: ItemPedido[]): GerenciadorItensPedido {
        const gerenciador = new GerenciadorItensPedido();

        gerenciador.adicionarItens(...itens);

        return gerenciador;
    }
}