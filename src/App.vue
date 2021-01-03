<template>
  <v-app>
    <v-app-bar app color="green" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h2 class="titulo">
          Petshop Da Fabi em VUE = )
          <i class="fas fa-paw"></i>
          <i class="fas fa-crow"></i>
          <i class="fas fa-fish"></i>
          <i class="fas fa-kiwi-bird"></i>
          <i class="fas fa-turtle"></i>
          <i class="fas fa-dog"></i>
          <i class="fas fa-rabbit"></i>
          <i class="fas fa-squirrel"></i>
        </h2>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/ecommerce" class="">Loja</router-link>
      <router-link to="/petshop" class="">Petshop</router-link>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.titulo {
  width: 800px;
}

.fa,
.fas {
  margin-right: 5px;
}
</style>
