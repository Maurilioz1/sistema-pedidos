import type { StatusPedido } from "../models/status-pedido";

export function validarStatusPedido(valor: unknown): valor is StatusPedido {
    return (
        valor === "pendente" ||
        valor === "pago" ||
        valor === "enviado" ||
        valor === "cancelado"
    );
}