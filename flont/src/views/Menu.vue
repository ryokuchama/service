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
      <v-col class="total">
        <dir :section-items="products">
          <p>
            <span>注文内容:{{products}}</span>
            <span>合計金額:{{price}}</span>
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
            'id': 1,
            'title': 'チーズバーガー',
            'price':1000,
            'text': '人気メニュー'
          },
          {
            'id': 2,
            'title': 'フライドポテト',
            'price':500,
            'text': 'みんな大好き'
          }
        ],
        drinkItems: [
          {
            'id': 1,
            'title': 'ビール',
            'price':500,
            'text': 'お気に入り'
          },
          {
            'id': 2,
            'title': 'コーラ',
            'price':500,
            'text': 'おすすめ'
          }
        ],
        desertItems: [
          {
            'id': 1,
            'title': 'パフェ',
            'price':'1000',
            'text': '500円'
          },
          {
            'id': 2,
            'title': 'チーズケーキ',
            'price':'1000',
            'text': '300円'
          }
        ],
        products: [],
        totalprice: []
      }
    }
}
</script>

<style scoped>

</style>