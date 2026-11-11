import type { StatusPedido } from "../models/status-pedido";

export function descreverStatusPedido(status: StatusPedido): string {
    switch (status) {
        case "pendente":
            return "Aguardando pagamento";
        case "pago":
            return "Pagamento confirmado";
        case "enviado":
            return "Pedido enviado";
        case "cancelado":
            return "Pedido cancelado";
        default: {
            const statusNaoTratado: never = status;

            throw new Error(`Status não tratado: ${statusNaoTratado}`);
        }
    }
}