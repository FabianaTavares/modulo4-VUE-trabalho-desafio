<template>
  <div>
    <transition>
      <v-alert type="success" v-if="mostrarMensagem"
        >Produto adicionado ao carrinho</v-alert
      >
    </transition>
    <div class="carrinho">
      <carrinhoCompras :produtos="compras" @remover="remove"></carrinhoCompras>
    </div>
    <router-view @comprar="adiciona"></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import carrinhoCompras from "@/components/carrinhoCompras";

export default {
  components: {
    carrinhoCompras,
  },
  data() {
    return {
      compras: [],
      mostrarMensagem: false,
    };
  },
  methods: {
    adiciona(produto) {
      console.log(produto);
      this.compras.push(produto);

      this.mostrarMensagem = true;
      const self = this;
      setTimeout(() => (self.mostrarMensagem = false), 3000);
    },
    remove(produto) {
      Vue.delete(
        this.compras,
        this.compras.findIndex((compra) => compra.nome === produto.nome)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.carrinho {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>