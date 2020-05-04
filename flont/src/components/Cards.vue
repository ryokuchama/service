<template>
<div class="card">
  <div v-for="(item, index) in sectionItems" :key="index">
    <v-col>
      <h1><slot></slot></h1>
        <v-card class="mx-auto" max-width="auto">
          <v-img
          src="item.photo">
            <v-card-title class="justify-center">
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle class="text-center">
              {{ item.price }}
            </v-card-subtitle>
          </v-img>
          <v-divider></v-divider>          
          <v-layout justify-center align-center >
            <v-btn
            class="mx-2" fab dark small color="primary"
            @click="addCart(p.id)">
              <v-icon dark>mdi-minus</v-icon>
            </v-btn>
            {{amount}}
            <v-btn
            class="mx-2" fab dark small color="indigo"
            @click="delCart(p.id)">
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
    delCart: function (id) {
      this.products.some (function(p, i) {
        if (p.id === id) {
          this.products.splice(i, 1)
          return true
        } 
      });
    },
    amount : function(productId) {
      filtered = this.cart.filter(function(p) {
        return (p.id == productId);
      });
      return filtered.length
    },
  },
  computed: {
    total: function () {
      count = {}
      this.cart.forEach(function(item) {
        count[item.id] = (count[item.id])? count[item.id] + 1 : 1 ;
      });
      return count
    }
  }
}
</script>