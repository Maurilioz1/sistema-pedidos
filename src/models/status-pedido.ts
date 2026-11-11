export enum StatusPedidoEnum {
    Pendente = "pendente",
    Pago = "pago",
    Enviado = "enviado",
    Cancelado = "cancelado",
}

export type StatusPedido = `${StatusPedidoEnum}`;