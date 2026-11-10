import type { Produto } from "./models/produto";
import type { Pedido, PedidoComObservacao } from "./models/pedido";
import { GerenciadorItensPedido } from "./pedidos/gerenciador-itens-pedido";
import { resumirPedido } from "./pedidos/resumir-pedido";
import { consultarDisponibilidade } from "./produtos/consultar-disponibilidade";

const produto: Produto = {
    id: 1,
    nome: "Teclado",
    preco: 150,
    disponivel: true,
};

const pedido: Pedido = {
    id: 1,
    itens: [
        {
            produto,
            quantidade: 2,
        },
    ],
    status: "pendente",
};

const gerenciadorItens = GerenciadorItensPedido.criarComItens(...pedido.itens);

const resumo = resumirPedido(pedido);

const [idPedido, quantidadeItensResumo, statusPedido] = resumo;

const pedidoComObservacao: PedidoComObservacao = {
    ...pedido,
    observacao: "Entregar na portaria.",
};

const produtoDisponivel = consultarDisponibilidade(produto);

console.log("=== Produto ===");
console.log(`Nome: ${produto.nome}`);
console.log(`Disponível para venda: ${produtoDisponivel ? "Sim" : "Não"}`);

console.log("\n=== Pedido ===");
console.log(`Identificador: ${idPedido}`);
console.log(`Quantidade de entradas na lista de itens: ${quantidadeItensResumo}`);
console.log(`Status: ${statusPedido}`);
console.log(`Observação: ${pedidoComObservacao.observacao}`);

console.log("\n=== Gerenciamento de itens ===");
console.log(`Quantidade de entradas gerenciadas: ${gerenciadorItens.contarItens()}`);