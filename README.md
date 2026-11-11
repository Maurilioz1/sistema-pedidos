# Sistema de Pedidos

Módulo de pedidos desenvolvido em TypeScript como projeto acadêmico do MBA em Engenharia de Front-End com IA.

O projeto tem foco na modelagem de dados, segurança de tipos e organização do código. Os exemplos são executados pelo terminal.

## Etapas concluídas

- Etapa 1: Fundamentos e Modelagem Inicial.
- Etapa 2: Estruturação de Contratos e Organização.
- Etapa 3: Abstração e Reuso com Tipos.

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

A execução com `tsx` não verifica os tipos. Utilize `npm run check` para essa verificação.

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
| `src/models/` | Interfaces e tipos do domínio. |
| `src/produtos/` | Operações relacionadas a produtos. |
| `src/pedidos/` | Operações, validação de status e gerenciamento de itens. |
| `src/types/` | Tipos genéricos reutilizáveis. |
| `src/utils/` | Funções genéricas auxiliares. |
| `src/index.ts` | Exemplos de uso e saída no terminal. |

## Recursos implementados

### Modelagem e contratos

- Interfaces de produto, item e pedido.
- União de literais para os status permitidos.
- Interseção para pedidos com observação.
- Tupla para o resumo do pedido.
- Contrato de função para consultar disponibilidade.

### Organização e gerenciamento de itens

- Classe com lista privada e métodos públicos.
- Método estático para criar um gerenciador com itens.
- Uso de arrays, spread e rest.

### Abstração e reuso com tipos

- Validação de valores `unknown` com predicado de tipo.
- Tratamento exaustivo de status com `never`.
- Função genérica `obterPropriedade`, utilizando `keyof` e acesso indexado.
- Uso de `typeof` para obter tipos a partir de variáveis.
- Asserção `as const` para preservar os literais de uma tupla.
- Mapped type `SomenteLeitura<T>`.
- Tipo condicional `ElementoArray<T>`, utilizando `infer`.
- Ausência de `any` no código implementado.

## Validação

O projeto foi verificado com `npm run check` e executado com `npm run dev`.

Também foram realizados testes temporários de compilação para conferir:

- Rejeição de propriedades inexistentes.
- Bloqueio de alterações em propriedades somente leitura.
- Rejeição de valores fora da união de status.
- Detecção de casos não tratados no switch de status.

Esses testes foram feitos manualmente. Não há uma suíte de testes automatizados.

## Limites atuais

A disponibilidade do produto é definida manualmente. Controle de estoque, persistência e interface visual não foram implementados.

Os tipos não substituem validações durante a execução. A validação de entrada implementada contempla os valores de status.

O tipo `SomenteLeitura<T>` oferece proteção superficial durante a verificação do TypeScript; ele não congela objetos em tempo de execução.