# Sistema de Pedidos

Módulo de pedidos desenvolvido em TypeScript como projeto acadêmico do MBA em Engenharia de Front-End com IA.

O projeto tem foco na modelagem de dados, segurança de tipos e organização do código. Os exemplos são executados pelo terminal.

## Etapas concluídas

- Etapa 1: Fundamentos e Modelagem Inicial.
- Etapa 2: Estruturação de Contratos e Organização.

## Tecnologias

- Node.js
- TypeScript
- tsx
- npm

## Como executar

Instale as dependências:

```bash
npm ci
```

Execute em modo de desenvolvimento:

```bash
npm run dev
```

O programa reinicia ao salvar alterações. Para encerrar, pressione Ctrl + C.

## Outros comandos

| Comando | Finalidade |
| --- | --- |
| `npm run check` | Verificar os tipos sem gerar arquivos. |
| `npm run build` | Verificar os tipos e gerar JavaScript em `dist`. |
| `npm start` | Executar o JavaScript compilado. |

Antes de usar `npm start`, execute `npm run build`.

## Organização

| Caminho | Responsabilidade |
| --- | --- |
| `src/models/` | Interfaces e tipos dos dados. |
| `src/produtos/` | Operações relacionadas a produtos. |
| `src/pedidos/` | Operações e gerenciamento de itens de pedidos. |
| `src/index.ts` | Exemplos de uso e saída no terminal. |

## Escopo atual

O módulo demonstra interfaces, uniões, interseções, tipagem de funções, arrays, tuplas, spread/rest e uma classe com encapsulamento e método estático.

A disponibilidade do produto é definida manualmente. Controle de estoque, persistência e interface visual não foram implementados.