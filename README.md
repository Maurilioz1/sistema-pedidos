# Sistema de Pedidos

Módulo de pedidos desenvolvido em TypeScript como projeto acadêmico do MBA em Engenharia de Front-End com IA.

O projeto tem foco na modelagem de dados, segurança de tipos e organização do código. Os exemplos são executados pelo terminal.

## Etapas concluídas

- Etapa 1: Fundamentos e Modelagem Inicial.
- Etapa 2: Estruturação de Contratos e Organização.
- Etapa 3: Abstração e Reuso com Tipos.
- Etapa 4: Configuração e Ambiente.
- Etapa 5: Evolução e Refatoração.

## Tecnologias

- Node.js 24
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

Antes de usar `npm start`, execute `npm run build`. Para testar um status recebido pelo terminal:

```bash
npm start -- cancelado
npm start -- invalido
```

Sem argumento, o bloco de validação usa `pago`. O argumento não altera o status do pedido de exemplo.

## Depuração no VS Code

Com o Node 24 instalado pelo nvm, execute `npm run build`, marque um ponto de parada em `src/index.ts` e pressione **F5** na configuração **Depurar Sistema de Pedidos**. O perfil passa `cancelado` como argumento e usa os source maps para pausar no TypeScript original. Recompile após editar o código antes de iniciar outra sessão.

## Organização

| Caminho | Responsabilidade |
| --- | --- |
| `src/models/` | Interfaces e tipos do domínio. |
| `src/produtos/` | Operações relacionadas a produtos. |
| `src/pedidos/` | Operações, validação de status e gerenciamento de itens. |
| `src/types/` | Tipos genéricos reutilizáveis. |
| `src/utils/` | Funções genéricas auxiliares. |
| `src/index.ts` | Exemplos de uso, leitura de argumento e saída no terminal. |
| `.vscode/launch.json` | Perfil de depuração do build no VS Code. |

## Recursos implementados

### Modelagem e contratos

- Interfaces de produto, item e pedido.
- União de literais para os status permitidos.
- Interseção para pedidos com observação.
- Resumo do pedido com propriedades nomeadas: `id`, `quantidadeItens` e `status`.
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
- Mapped type `SomenteLeitura<T>`.
- Tipo condicional `ElementoArray<T>`, utilizando `infer`.
- Ausência de `any` no código implementado.

### Configuração e ambiente

- Compilação estrita para ES2022 e CommonJS.
- Declarações de tipos do Node 24 com `@types/node`.
- Entrada pelo terminal com `node:process` e valor padrão com `??`.
- Enum de strings como fonte dos status, com união derivada por tipo literal de template.
- Source maps no build e depuração do TypeScript original no VS Code.

### Evolução e refatoração

- `resumirPedido` passou a retornar um objeto com propriedades nomeadas. O consumo deixou de depender da ordem dos elementos da tupla.
- A migração de JavaScript não se aplicou: o código-fonte já estava em TypeScript, e o JavaScript em `dist` é gerado pelo compilador.

## Validação

O projeto foi verificado com `npm run check` e executado com `npm run dev`.

Também foram realizados testes temporários de compilação para conferir:

- Rejeição de propriedades inexistentes.
- Bloqueio de alterações em propriedades somente leitura.
- Rejeição de valores fora da união de status.
- Detecção de casos não tratados no switch de status.

Esses testes foram feitos manualmente. Na etapa 4, também conferi a execução do build e a pausa do depurador em `src/index.ts` com o argumento `cancelado`. Não há uma suíte de testes automatizados.

Na etapa 5, `npm run check`, `npm run build` e `npm start -- cancelado` passaram. Um teste manual com ID `42`, uma entrada com duas unidades e status `pendente` confirmou que o resumo preserva o ID e conta entradas na lista, sem somar unidades.

## Limites atuais

A disponibilidade do produto é definida manualmente. Controle de estoque, persistência e interface visual não foram implementados.

Os tipos não substituem validações durante a execução. A validação de entrada implementada contempla os valores de status.

O tipo `SomenteLeitura<T>` oferece proteção superficial durante a verificação do TypeScript; ele não congela objetos em tempo de execução.