import { argv } from "node:process";

import type { Produto } from "./models/produto";
import type { Pedido, PedidoComObservacao } from "./models/pedido";
import type { ElementoArray } from "./types/elemento-array";
import type { SomenteLeitura } from "./types/somente-leitura";

import { StatusPedidoEnum } from "./models/status-pedido";
import { obterPropriedade } from "./utils/obter-propriedade";
import { resumirPedido } from "./pedidos/resumir-pedido";
import { validarStatusPedido } from "./pedidos/validar-status-pedido";
import { descreverStatusPedido } from "./pedidos/descrever-status-pedido";
import { GerenciadorItensPedido } from "./pedidos/gerenciador-itens-pedido";
import { consultarDisponibilidade } from "./produtos/consultar-disponibilidade";

const produto: Produto = {
    id: 1,
    nome: "Teclado",
    preco: 150,
    disponivel: true,
};

const produtoParaConsulta: SomenteLeitura<typeof produto> = {
    ...produto,
};

const nomeProduto = obterPropriedade(produto, "nome");
const precoProduto = obterPropriedade(produto, "preco");
const produtoDisponivel = consultarDisponibilidade(produto);

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

const pedidoComObservacao: PedidoComObservacao = {
    ...pedido,
    observacao: "Entregar na portaria.",
};

const gerenciadorItens = GerenciadorItensPedido.criarComItens(...pedido.itens);

const resumo = resumirPedido(pedido);
const [idPedido, quantidadeItensResumo, statusPedido] = resumo;

const statusRecebido = argv[2] ?? "pago";

const statusPermitidos = Object.values(StatusPedidoEnum);

type StatusPermitido = ElementoArray<typeof statusPermitidos>;

const statusExemplo: StatusPermitido = StatusPedidoEnum.Pago;

console.log("=== Produto ===");
console.log(`Identificador: ${produto.id}`);
console.log(`Nome: ${nomeProduto}`);
console.log(`Preço: R$ ${precoProduto.toFixed(2)}`);
console.log(`Disponível para venda: ${produtoDisponivel ? "Sim" : "Não"}`);

console.log("\n=== Pedido ===");
console.log(`Identificador: ${idPedido}`);
console.log(`Quantidade de entradas na lista de itens: ${quantidadeItensResumo}`);
console.log(`Status: ${descreverStatusPedido(statusPedido)}`);
console.log(`Observação: ${pedidoComObservacao.observacao}`);

console.log("\n=== Gerenciamento de itens ===");
console.log(`Quantidade de entradas gerenciadas: ${gerenciadorItens.contarItens()}`);

console.log("\n=== Validação de status recebido ===");

if (validarStatusPedido(statusRecebido)) {
    console.log(`Status recebido: ${statusRecebido}`);
    console.log(`Descrição: ${descreverStatusPedido(statusRecebido)}`);
} else {
    console.log("Resultado: status inválido para um pedido.");
}

console.log("\n=== Produto para consulta — somente leitura ===");
console.log(`Nome: ${produtoParaConsulta.nome}`);

console.log("\n=== Status permitidos ===");
console.log(`Valores: ${statusPermitidos.join(", ")}`);
console.log(`Exemplo válido: ${statusExemplo}`);