<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        オーダーフォーム
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <Menu/>
    </v-content>
  </v-app>
</template>

<script>
import Menu from './views/Menu.vue';

export default {
  name: 'App',

  components: {
    Menu,
  },

  data: () => ({
    //
  }),
};
</script>
