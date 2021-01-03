<template>
  <div>
    <v-form v-on:submit.prevent="cadastrarCliente">
      <h4>Cadastro de Cliente</h4>
      <v-spacer></v-spacer>
      <v-text-field label="Nome completo" v-model="cliente.nome"></v-text-field>
      <v-spacer></v-spacer>
      <v-select label="Raça do cliente" v-model="cliente.raca" :items="racas" item-text="nome"></v-select>
      <v-spacer></v-spacer>
      <v-text-field label="Idade" type="number" v-model="cliente.idade" :error="cliente.idade > 30 || cliente.idade < 0" error-message="Wow! Tem certeza que é um cachorro?"></v-text-field>
      <v-spacer></v-spacer>
      <v-select label="Serviço" v-model="cliente.servico" :items="servicos">
        <template v-slot:selection="data">
          {{ data.item.nome }}
        </template>
        <template v-slot:item="data">
          {{ data.item.nome }} ({{ data.item.preco | grana }})
        </template>
      </v-select>
      <v-spacer></v-spacer>
      <v-textarea v-if="cliente.servico && cliente.servico.tipo === 'consulta'" label="Sintomas" v-model="cliente.servico.observacoes" rows="3"></v-textarea>
      <v-spacer></v-spacer>
      <v-btn :disabled="cadastroInvalido" color="success" @click="cadastrarCliente">Cadastrar Cliente</v-btn>
      <v-spacer></v-spacer>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios';
import Cachorro from '@/models/cachorro'

export default {
  data() {
    return {
      cliente: new Cachorro(),
      racas: [],
      servicos: []
    }
  },
  async created() {
    try {
      this.racas = await this.buscarRacas();
      this.servicos = await this.buscarServicos();
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    cadastroInvalido() {
      return this.cliente.nome.length === 0 ||
        this.cliente.idade.length === 0 ||
        this.cliente.idade <= 0 ||
        this.cliente.raca.length === 0 ||
        this.cliente.servico.tipo.length === 0;
    }
  },
  methods: {
    async buscarRacas() {
      const { data } = await axios.get('http://localhost:3000/racas');
      return data;
    },
    async buscarServicos() {
      const { data } = await axios.get('http://localhost:3000/servicos');
      return data;
    },
    cadastrarCliente() {
      this.$emit('novo-cadastro', this.cliente);
      this.cliente = new Cachorro();
    }
  }
}
</script>

<style></style>