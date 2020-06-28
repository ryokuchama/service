<template>
<v-app>
  <v-container fluid>
    <v-row>
      <v-col class="card">
        <v-expansion-panels>
          <v-expansion-panel>
          <v-expansion-panel-header>Recommends</v-expansion-panel-header>
            <v-expansion-panel-content>
              <Cards :section-items="RecommendItems">
              </Cards>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="card">
        <v-expansion-panels>
          <v-expansion-panel>
          <v-expansion-panel-header>Food Menu</v-expansion-panel-header>
            <v-expansion-panel-content>
              <Cards :section-items="foodItems">
              </Cards>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel>
          <v-expansion-panel-header>Drink Menu</v-expansion-panel-header>
          <v-expansion-panel-content>
          <Cards :section-items="drinkItems">
          </Cards>
          </v-expansion-panel-content>
          </v-expansion-panel>
      </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
        <v-col>
          <v-expansion-panels>
          <v-expansion-panel>
          <v-expansion-panel-header>Desert Menu</v-expansion-panel-header>
          <v-expansion-panel-content>
          <Cards :section-items="desertItems">
          </Cards>
          </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
        RecommendItems: [
          {
            'id': 1,
            'title': 'ポキ丼',
            'price':1000,
            'text': 'マグロとサーモンを特製のタレで和えました'
          }
        ],
        foodItems: [
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
          }
        ],
        drinkItems: [
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
          }
        ],
        desertItems: [
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