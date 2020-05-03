<template>
<div class="card">
  <div v-for="(item, index) in sectionItems" :key="index">
    <v-col>
      <h1><slot></slot></h1>
        <v-card class="mx-auto" @click.stop="dialog=true"
        max-width="auto">
          <v-img
          src="item.photo">
            <v-card-title class="justify-center">
            {{ item.title }}
            </v-card-title>
          </v-img>          
          <v-card-subtitle align-center>
            {{ item.price }}
          </v-card-subtitle>
          <v-layout justify-center>
            <v-btn class="mx-2" fab dark small color="primary">
              <v-icon dark>mdi-minus</v-icon>
            </v-btn>
            {{amount}}
            <v-btn class="mx-2" fab dark small color="indigo">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-layout>
        </v-card>
      </v-col> 
    </div>
  </div>
</template>

<script>

export default {
  props: {
    sectionItems: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      dialog: false,
      amount: 0,
      amounts: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      cart: []
    }
  },
  methods: {
    addCart: function (id) {
      var selected = this.sectionItems.find((item) => {
        (item.id === id);
      });
      this.cart.push(selected)
    },
  }
}
</script>