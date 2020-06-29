<template>
<v-app>
  <v-container fluid>
    <v-row v-for="item in Items" :key="item.id">
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
    </v-row>
    <v-row>
      <Cards @totalmethod = "total"></Cards>
      <v-col class="total">
        <dir :section-items="products">
          <p>
            注文内容:{{products}}
          </p>
          <p>
            合計金額:{{totalprice}}
          </p>
            <v-btn tag="v-btn" to="/TimeAndPlace">Step2: 受け取り場所と時間</v-btn>
        </dir>
      </v-col>
    </v-row>
  </v-container>
</v-app>
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
        Items: [
          {
            'id': 1,
            'title': 'ポキ丼',
            'price':1000,
            'text': 'マグロとサーモンを特製のタレで和えました'
          },
          {
            'id': 2,
            'title': 'チーズバーガー',
            'price':1000,
            'text': '人気メニュー'
          },
          {
            'id': 3,
            'title': 'フライドポテト',
            'price':500,
            'text': 'みんな大好き'
          },
          {
            'id': 4,
            'title': 'ビール',
            'price':500,
            'text': 'お気に入り'
          },
          {
            'id': 5,
            'title': 'コーラ',
            'price':500,
            'text': 'おすすめ'
          },
          {
            'id': 6,
            'title': 'パフェ',
            'price':'1000',
            'text': '人気'
          },
          {
            'id': 7,
            'title': 'チーズケーキ',
            'price':'1000',
            'text': '美味しい'
          }
        ],
        products: "",
        totalprice: Number,

        

        // v-stepperの追加
        // Card.vueの廃止とこちら側で全ての実装
      }
    },
    
    methods: {
      total(totalprice) {
        this.totalprice = totalprice
      }
    },
}
</script>

<style scoped>

</style>