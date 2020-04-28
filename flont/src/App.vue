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
      <router-view></router-view>
    </v-content>

    <v-footer app2 color="primary" dark>
      <div class="d-flex align-center">
        <p>商品: </p>
        <p>合計金額: </p>
        <v-btn></v-btn>
        <v-btn></v-btn>
      </div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
