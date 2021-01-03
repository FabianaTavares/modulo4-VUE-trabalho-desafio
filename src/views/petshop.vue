<template>
  <div class="home">
    <h1>Bem vindo ao Petshop</h1>
    <v-row>
      <v-col xs="12" sm="12" md="6" cols="12">
        <v-card class="pa-4">
          <cadastroPet @novo-cadastro="novoCliente"></cadastroPet>
        </v-card>
      </v-col>
      <v-col xs="12" sm="12" md="6" cols="12">
        <v-card class="pa-4 mb-4">
          <consultaVeterinario
            :clientes="clientesVeterinario"
            @realizado="finalizarConsulta"
          ></consultaVeterinario>
        </v-card>
        <v-card class="pa-4">
          <banho :clientes="clientesBanho" @realizado="finalizarBanho"></banho>
        </v-card>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-card class="pa-2">
      <servicoDia :clientes="clientesAtendidos"></servicoDia>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import Cachorro from "@/models/cachorro";

import cadastroPet from "@/components/cadastroPet";
import consultaVeterinario from "@/components/consultaVeterinario";
import banho from "@/components/banho";
import servicoDia from "@/components/servicoDia";

export default {
  name: "Home",
  components: {
    cadastroPet,
    consultaVeterinario,
    banho,
    servicoDia,
  },
  data() {
    return {
      clientesBanho: [],
      clientesVeterinario: [],
      clientesAtendidos: [],
    };
  },
  created() {
    const { data } = axios.get("http://localhost:3000/clientes");
    if (!data) {
      return;
    }

    this.clientesBanho = data.filter(
      (cliente) => cliente.servico.nome === "banho"
    );
    this.clientesVeterinario = data.filter(
      (cliente) => cliente.servico.nome === "consulta"
    );
  },
  filters: {
    grana: (value) => {
      if (typeof value !== "number") {
        return value;
      }

      value = value.toFixed(2);
      return `R$ ${value}`;
    },
  },
  methods: {
    novoCliente(cliente) {
      cliente.servico.tipo === "banho"
        ? this.clientesBanho.push(cliente)
        : this.clientesVeterinario.push(cliente);
    },
    finalizarBanho(cliente, index) {
      this.clientesAtendidos.push(cliente);

      // Nem todas as operações são rastreadas pelo Vue,
      // neste caso temos que "forçar" que a lista seja re-renderizada,
      // uma vez que operações filter e splice (metodos comuns para remover itens de um array)ao contrário do push não notificam o observador
      this.$delete(
        this.clientesBanho,
        this.clientesBanho.findIndex(
          (clienteBanho) => clienteBanho.nome === cliente.nome
        )
      );
    },
    finalizarConsulta(cliente) {
      this.clientesAtendidos.push(cliente);
      this.$delete(
        this.clientesVeterinario,
        this.clientesVeterinario.findIndex(
          (clienteVeterinario) => clienteVeterinario.nome === cliente.nome
        )
      );
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/main";
</style>
