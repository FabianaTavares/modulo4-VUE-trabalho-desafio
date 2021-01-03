<template>
  <div style="margin-top: 100px">
    <v-container fluid class="grey lighten-5 mb-6">
      <v-btn text @click="voltar">Voltar para loja</v-btn>
      <v-row dense>
        <v-col
          v-for="(produto, index) in detalhesProdutos"
          :key="index"
          cols="12"
          sm="12"
        >
          <v-card class="pa-2" outlined tile>
            <v-img
              height="250"
              :src="produto.foto"
              class="white--text align-end"
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
              <div>{{ produto.descricao }}</div>
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
      detalhesProdutos: [],
      erro: null,
    };
  },
  async created() {
    this.detalhesProdutos = await this.buscarProdutoPorId();
    console.log(this.detalhesProdutos);
  },
  methods: {
    async buscarProdutoPorId() {
      const { data } = await axios.get(`http://localhost:3000/produtos`, {
        params: {
          id: this.$route.params.id,
        },
      });
      console.log(data);
      return data;
    },

    /*  comprar: function (nome, preco) {
      alert("Nome: " + nome + " Preço: " + preco);
    }, */

    voltar() {
      this.$router.push("/ecommerce");
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
</style>