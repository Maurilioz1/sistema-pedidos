# Sistema de Pedidos

Módulo de pedidos desenvolvido em TypeScript como projeto acadêmico do MBA em Engenharia de Front-End com IA.

O projeto tem foco na modelagem de dados, na segurança de tipos e na organização do código. Os exemplos são executados pelo terminal.

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

Na raiz do projeto, instale as dependências:

```bash
npm ci
```

Execute em modo de desenvolvimento:

```bash
npm run dev
```

O programa reinicia ao salvar alterações. Para encerrar, pressione **Ctrl + C**.

A execução com `tsx` não verifica os tipos. Use `npm run check` para essa verificação.

## Outros comandos

| Comando | Finalidade |
| --- | --- |
| `npm run check` | Verificar os tipos sem gerar arquivos. |
| `npm run build` | Verificar os tipos e gerar JavaScript e source maps em `dist`. |
| `npm start` | Executar o JavaScript compilado com suporte a source maps. |

Antes de usar `npm start`, execute `npm run build`. Para testar a validação de um status recebido pelo terminal:

```bash
npm start -- cancelado
npm start -- invalido
```

Sem um argumento de status, o bloco de validação usa `pago`. O argumento não altera o status do pedido de exemplo.

## Catálogo de exemplo

Para buscar um produto fictício da DummyJSON e usá-lo no pedido de exemplo:

```bash
npm run build
npm start -- cancelado --catalogo
```

Sem `--catalogo`, o exemplo usa um produto local e funciona sem conexão. No modo catálogo, a DummyJSON fornece o ID, o nome, o preço e o estoque inicial. O preço é exibido sem presumir a moeda, e falhas na consulta são informadas no terminal.

Nos dois modos, o exemplo aplica a baixa dos itens do pedido em memória e exibe o estoque antes e depois. A disponibilidade é calculada após a baixa: o produto está disponível para venda quando resta pelo menos uma unidade.

## Depuração no VS Code

Com o Node 24 instalado pelo nvm, execute `npm run build` e marque um ponto de parada em `src/index.ts`. Selecione a configuração **Depurar Sistema de Pedidos** e pressione **F5**.

O perfil passa `cancelado` como argumento e usa os source maps para pausar no TypeScript original enquanto o Node executa o JavaScript compilado. Recompile após editar o código antes de iniciar outra sessão.

## Organização

| Caminho | Responsabilidade |
| --- | --- |
| `src/models/` | Interfaces e tipos do domínio. |
| `src/produtos/` | Consulta à DummyJSON, cálculo de disponibilidade e baixa de estoque por produto. |
| `src/pedidos/` | Resumo de pedidos, validação de status, gerenciamento de itens e coordenação da baixa de estoque. |
| `src/types/` | Tipos genéricos reutilizáveis. |
| `src/utils/` | Funções genéricas auxiliares. |
| `src/index.ts` | Exemplo de uso, leitura de argumentos e saída no terminal. |
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
- Função genérica `obterPropriedade`, com `keyof` e acesso indexado.
- Uso de `typeof` para obter tipos a partir de variáveis.
- Mapped type `SomenteLeitura<T>`.
- Tipo condicional `ElementoArray<T>`, com `infer`.
- Ausência de `any` explícito no código implementado.

### Configuração e ambiente

- Compilação estrita para ES2022 e CommonJS.
- Declarações de tipos do Node 24 com `@types/node`.
- Entrada pelo terminal com `node:process` e valor padrão com `??`.
- Enum de strings como fonte dos status, com união derivada por tipo literal de template.
- Source maps no build e depuração do TypeScript original no VS Code.

### Evolução e refatoração

- `resumirPedido` passou a retornar um objeto com propriedades nomeadas. O consumo deixou de depender da ordem dos elementos da tupla.
- A migração de JavaScript para TypeScript não se aplicou: o código-fonte já estava em TypeScript, e o JavaScript em `dist` é gerado pelo compilador.

### Disponibilidade e estoque

- A disponibilidade é calculada com base no estoque atual do produto.
- A baixa exige uma quantidade inteira segura e positiva, além de estoque suficiente.
- As baixas são simuladas antes de atualizar os produtos. Se algum item for rejeitado durante a simulação, nenhum estoque é alterado.

## Validação

O projeto foi verificado com `npm run check` e `npm run build`. O exemplo foi executado com `npm run dev` e `npm start`. Também foi confirmada a pausa do depurador em `src/index.ts` com o argumento `cancelado`.

As verificações de tipos foram exercitadas manualmente para confirmar:

- Rejeição de propriedades inexistentes.
- Bloqueio de alterações em propriedades somente leitura.
- Rejeição de valores fora da união de status.
- Detecção de casos não tratados no `switch` de status.

O sistema também valida em tempo de execução o status recebido pelo terminal, os campos `id`, `title`, `price` e `stock` da DummyJSON e a quantidade solicitada na baixa de estoque.

Dois testes manuais verificaram o comportamento do módulo:

- Um pedido de ID `42`, com uma entrada contendo duas unidades e status `pendente`, confirmou que o resumo preserva o ID e conta **entradas na lista**, sem somar as unidades.
- Um pedido com dois produtos foi rejeitado por falta de estoque no segundo item. A conferência confirmou que o estoque dos dois produtos permaneceu intacto.

Não há uma suíte de testes automatizados.

## Limites atuais

O estoque é mantido em memória. As baixas valem apenas durante a execução atual. Ao reiniciar, o programa usa novamente o estoque inicial do produto local ou consulta a DummyJSON para obter o estoque inicial do produto externo.

O projeto é demonstrado pelo terminal. O tipo `SomenteLeitura<T>` oferece proteção superficial durante a verificação do TypeScript e não congela objetos em tempo de execução.