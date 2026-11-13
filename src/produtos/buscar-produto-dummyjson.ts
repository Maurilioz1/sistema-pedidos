import type { Produto } from "../models/produto";

export async function buscarProdutoDummyJson(id: number): Promise<Produto> {
    const url = new URL(`https://dummyjson.com/products/${id}`);
    url.searchParams.set("select", "id,title,price,stock");

    const resposta = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!resposta.ok) {
        throw new Error(`DummyJSON respondeu com HTTP ${resposta.status}.`);
    }

    const dados: unknown = await resposta.json();

    if (
        typeof dados !== "object" ||
        dados === null ||
        !("id" in dados) ||
        dados.id !== id ||
        !("title" in dados) ||
        typeof dados.title !== "string" ||
        dados.title.trim() === "" ||
        !("price" in dados) ||
        typeof dados.price !== "number" ||
        !Number.isFinite(dados.price) ||
        dados.price < 0 ||
        !("stock" in dados) ||
        typeof dados.stock !== "number" ||
        !Number.isInteger(dados.stock) ||
        dados.stock < 0
    ) {
        throw new Error("A DummyJSON retornou um produto em formato inesperado.");
    }

    return {
        id,
        nome: dados.title,
        preco: dados.price,
        estoque: dados.stock,
    };
}