# Descrição Trabalho e Desafio de Vue - PetShop

Bootcamp FrontEnd - IGTI 2020

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Observação

Apesar de o curso fornecer o codigo fonte original aos alunos, procurei deixar o meu codigo, exibindo assim erros e acertos, coisas a melhorar, acho que transparência é um ponto importantíssimo para o profissional.

## Ambiente de Desenvolvimento

### Frontend & Backend

1. npm install para instalar as dependencias do projeto.
2. instalar o json-server para simular o backend

```
npm install -g json-server
```

2. para rodar o json server:

```
json-server --watch db.json
```

## Ambiente de Produção

Para visualizar o projeto rodando, basta acessar o [link do desafio!](https://fabi-igti-angular-desafio-2.web.app/)
OBS: Ainda estou estudando como o firebase pode ler o json backend, é um desafio novo.

## Docker Hub

Imagem disponível no docker hub (fase de aprendizado) [link do desafio no dockerhub!](https://hub.docker.com/r/fabianatavares/angular-despesas)

## Objetivos do Trabalho Prático

Exercitar os seguintes conceitos trabalhados no Módulo:

- Criar um projeto em Vue;
- Utilizar componentes, lifecycle hooks e diretivas;
- Aprofundar vue-router;
- Utilizar componentes do Vuetify para estilo do projeto.

## Enunciado

Criar um E-commerce utilizando Vue.

## Atividades

Os alunos deverão desempenhar as seguintes atividades:

1. Criar duas páginas: lista de produtos e detalhes do produto.
2. A partir da chamada a API /produtos (a ser fornecida), listar todos os produtos do
   petshop;
   a. . Não se esqueça de instalar a biblioteca do axios (e importá-la no
   componente)!

```
npm install axios
```

3. Cada produto deve estar em card, exibindo as seguintes informações:
   a. Foto (sem margens);
   b. Título do produto;
   c. Preço com duas casas decimais (caso possua valor com desconto, exibir o
   preço com: text-decoration: line-through;)

```
text-decoration: line-through;
```

e mostrar o valor com desconto ao lado). Mais ou menos assim: R$ 29,00 R$
19,00;
d. Descrição (somente uma linha) – utilize as seguintes classes:

```
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

e. Botão comprar (ao clicar, mostrar – por enquanto – somente um alerta do
browser com o nome do produto e preço).

4. Os produtos devem estar dispostos em 3 por linha para dispositivos médios ou
   maiores (md – notebook ou monitores), 2 colunas para pequenos (sm – tablets) e 1
   por linha para menores (xs – celulares). Lembre-se de definir o “col” dos
   componentes de grid do Vuetify antes de atribuir a quantidade de colunas que eles
   ocupam.
5. Ao clicar na foto do produto (somente na foto), deve-se abrir a página com os
   detalhes daquele item. Esta página é semelhante ao card na página de lista de
   produtos; no entanto, agora deve-se mostrar sua descrição completa. Lembre-se de
   utilizar os parâmetros da rota para selecionar o produto.
   a. Importante! Ao acessar a página de detalhes do produto e munidos do id do
   item em questão, chame novamente a API para resgatar os dados do produto,
   ou passe a lista de produtos como parâmetro para a view;

6. Adicione um botão para voltar para a lista de produtos com o label “Voltar para loja”,
   acima do card do item na página de detalhes do produto.
7. É recomendado, mas não obrigatório, criar a loja junto ao petshop desenvolvido
   durante as aulas para utilizar mais funcionalidades do vue-router.
8. Fiquem a vontade para explorar as propriedades dos componentes do Vuetify.
   Mudem as cores da barra superior, do botão, do fundo de tela, e por aí vai.
9. Não é preciso desenvolver o carrinho de compras no trabalho prático. Ele fará parte
   do desafio!

## Resultado esperado

### Lista de produtos:

![alt text](https://github.com/FabianaTavares/Modulo1-Javascript-Desafio/blob/master/src\assets\imgs\imagem_resultado_esperado.PNG)

### Detalhes do Produto:

![alt text](https://github.com/FabianaTavares/Modulo1-Javascript-Desafio/blob/master/src/assets/imgs/imagem_resultado_esperado_detalhes.PNG)

## Objetivos do Desafio

Exercitar os seguintes conceitos trabalhados no Módulo:

- Conceitos mais avançados do Vue.

## Enunciado

A partir do e-commerce criado no trabalho prático, implementar o carrinho de compras.

## Atividades

Os alunos deverão desempenhar as seguintes atividades:

1. Criar o carrinho de compras do ecommerce;
   a. O carrinho deve estar posicionado no topo a direita da página.
2. Ao clicar no botão comprar (tanto na lista de produtos quanto na página de detalhes
   do produto), o produto deve, então, ser listado no carrinho;
   a. Um alerta verde também deve ser exibido, indicando sucesso ao adicionar o
   produto no carrinho.
3. A lista (v-menu) de produtos do carrinho deve estar escondida a princípio, e somente
   exibida ao se clicar no ícone (que deve estar sempre a mostra).
4. O ícone deve possuir um badge mostrando o número de produtos inseridos no
   carrinho.
5. Deve-se exibir um produto por linha, composto de foto, título e preço (valor com
   desconto se aplicável), além do ícone para remover o produto a direita (ver abaixo).
6. A lista de itens do carrinho deve exibir o valor total da compra:
   a. Caso o produto possua um desconto, este deve ser o valor considerado na
   soma, e não o preço.
7. Cada produto da lista deve possuir um ícone “x” a sua direita, que ao clicar irá
   remover o produto da lista, atualizar o badge de número de produtos e o total da
   compra.
8. Importante! A função de clique no botão é a mesma para a página lista de produto e
   detalhes do produto, portanto deve ser declarada somente uma vez, para
   reutilizarmos código.
9. Todas as informações sobre rotas, sobre como rodar o servidor da API e sobre o
   estilo do petshop podem ser encontradas no guia do trabalho prático
