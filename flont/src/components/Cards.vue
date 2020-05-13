<template>
<div class="card">
  <div v-for="item in sectionItems" :key="item.id">
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
          <v-card-text class="text-center">
            {{item.text}}
          </v-card-text>     
          <v-layout justify-center align-center>
            <v-btn
            class="mx-2" fab dark small color="primary"
            @click="addToCart(item.id)">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
            {{amount(item.id)}}
            <v-btn
            class="mx-2" fab dark small color="indigo"
            @click="delFromCart(item.id)">
              <v-icon dark>mdi-minus</v-icon>
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
    addToCart: function (id) {
      var selectedProdct = this.sectionItems.find((item) => {
        return (item.id === id);
      });
      this.cart.push(selectedProdct)
    },
    delFromCart: function (id) {
      var deleteItem = this.cart.indexOf(id);
      this.cart.splice(deleteItem, 1);
    },
    amount : function(productId) {
      var filtered = this.cart.filter(function(p) {
        return (p.id == productId);
      });
      return filtered.length
    },
    orderd() {
      
    }
  },
  computed: {
    
    },
  mounted() {
      this.$emit('totalmethod', this.cart)
  },
}
</script>