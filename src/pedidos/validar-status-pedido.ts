import { StatusPedidoEnum, type StatusPedido } from "../models/status-pedido";

export function validarStatusPedido(valor: unknown): valor is StatusPedido {
    return Object.values(StatusPedidoEnum).some((status) => status === valor);
}