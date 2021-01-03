<template>
  <div style="margin-top: 100px">
    <h2>Lista de Produtos</h2>

    <v-container fluid class="grey lighten-5 mb-6">
      <v-row dense>
        <v-col
          v-for="(produto, index) in produtos"
          :key="index"
          cols="12"
          sm="4"
        >
          <v-card class="pa-2" outlined tile>
            <v-img
              height="250"
              :src="produto.foto"
              class="white--text align-end cursor"
              @click="verDetalhes(produto)"
            ></v-img>

            <v-card-title>{{ produto.nome }}</v-card-title>

            <v-card-text>
              <div class="my-4 subtitle-1 text-lg-right">
                <div v-if="!produto.desconto">
                  {{ produto.preco | formatPreco }}
                </div>
                <div v-else>
                  <span class="taxado">{{ produto.preco | formatPreco }}</span>
                  {{ produto.desconto | formatPreco }}
                </div>
              </div>
              <div class="desc-linha">{{ produto.descricao }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn block color="primary" @click="adiciona(produto)">
                Comprar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import baseProduto from "@/views/produtos/baseProduto";

export default {
  extends: baseProduto,
  data() {
    return {
      produtos: [],
    };
  },
  async created() {
    this.produtos = await this.buscarProdutos();
  },
  methods: {
    async buscarProdutos() {
      const { data } = await axios.get("http://localhost:3000/produtos");
      return data;
    },

    /*  comprar: function (produto) {
      alert("Produto: " + produto);
    }, */

    verDetalhes(produto) {
      this.$router.push(`/ecommerce/${produto.id}`);
    },
  },
  filters: {
    formatPreco: (value) => {
      if (typeof value !== "number") {
        return value;
      }

      value = value.toFixed(2);
      return `R$ ${value}`;
    },
  },
};
</script>

<style>
.desc-linha {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.taxado {
  text-decoration: line-through;
}

.cursor {
  cursor: pointer;
}
</style>