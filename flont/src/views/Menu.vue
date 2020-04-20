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
        <v-btn align-center to="/TimeAndPlace">
          Step2: 受け取り場所と時間
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
            'title': 'チーズハンバーガー',
            'text': '1000円'
          },
          {
            'title': 'フライドポテト',
            'text': '200円'
          },
        ],
        drinkItems: [
          {
            'title': 'ビール',
            'text': '500円'
          },
          {
            'title': 'コーラ',
            'text': '500円'
          }
        ],
        desertItems: [
          {
            'title': 'パフェ',
            'text': '500円'
          },
          {
            'title': 'チーズケーキ',
            'text': '300円'
          }
        ]
      }
      
    },
  }
</script>
