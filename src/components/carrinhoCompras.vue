<template>
  <div class="posicao-icone">
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn fab dark small color="blue" v-bind="attrs" v-on="on">
          <v-icon>fa-shopping-cart</v-icon>
        </v-btn>
        <v-badge :content="addItens" :value="addItens" color="green" overlap>
        </v-badge>
      </template>
      <v-list>
        <v-list-item
          v-for="(produto, index) in produtos"
          :key="index"
          class="clicavel"
          @click="removerProduto(produto)"
        >
          <v-list-item-avatar
            ><v-img :src="produto.foto"></v-img
          ></v-list-item-avatar>
          <v-list-item-title
            >{{ produto.nome }} ({{
              produto.desconto !== undefined
                ? produto.desconto
                : produto.preco | grana
            }})</v-list-item-title
          >
          <v-list-item-action
            ><v-icon color="red">fa fa-times</v-icon></v-list-item-action
          >
        </v-list-item>
        <hr />
        <v-list-item>
          <v-row>
            <v-col md="4"><b>Total</b></v-col>
            <v-col md="8" class="d-flex justify-end">{{
              totalCompras | grana
            }}</v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: ["produtos"],
  computed: {
    addItens() {
      return this.produtos.length;
    },
    totalCompras() {
      return this.produtos.reduce(
        (total, produto) =>
          total + (produto.desconto ? produto.desconto : produto.preco),
        0
      );
    },
  },
  methods: {
    removerProduto(produto) {
      this.$emit("remover", produto);
    },
  },
  /* data() {
    return {
      addItens: 0,
      show: false,
    };
  }, */
};
</script>

<style>
.posicao-icone {
  margin-top: 120px;
  margin-right: 20px;
}
</style>