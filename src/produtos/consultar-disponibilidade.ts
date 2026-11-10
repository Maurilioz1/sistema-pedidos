import type { Produto } from "../models/produto";

type ConsultaDisponibilidade = (produto: Produto) => boolean;

export const consultarDisponibilidade: ConsultaDisponibilidade = (produto) => {
    return produto.disponivel;
};