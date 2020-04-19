<template>
  <v-container>
    <v-layout>
      <v-flex>
        <div>
          Food
          <Cards :section-items="foodItems">
        </Cards>
        </div>
        <div>
          Drink
          <Cards :section-items="drinkItems">
        </Cards>
        </div>
        <div>
          Desert
          <Cards :section-items="desertItems">
        </Cards>
        </div>
      </v-flex>
      <v-col>
      <p>注文内容:</p>
      <p>合計金額:</P>
        <v-btn align-center>
          <router-link to="/TimeAndPlace">Step2: 受け取り場所と時間</router-link>
        </v-btn>
    </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import Cards from '@/components/Cards.vue'

  export default {
    components: {
      Cards
    },

    name: 'Menu',

    data () {
      return {
        foodItems: [
          {
            'title': '',
            'text': ''
          },
          {
            'title': '',
            'text': ''
          },
        ],
        drinkItems: [
          {
            'title': '',
            'text': ''
          },
          {
            'title': '',
            'text': ''
          }
        ],
        desertItems: [
          {
            'title': '',
            'text': ''
          },
          {
            'title': '',
            'text': ''
          }
        ]
      }
      
    },
  }
</script>
