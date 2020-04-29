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
    <v-col class="total">
      <p>
        <span>注文内容:{{product}}</span>
        <span>合計金額:{{price}}</span>
      </p>
        <v-btn tag="v-btn" to="/TimeAndPlace">Step2: 受け取り場所と時間</v-btn>
      </v-col>
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
            'title': 'チーズハンバーガー',
            'text': '1000円'
          }
        ],
        foodItems: [
          {
            'title': 'チーズハンバーガー',
            'text': '1000円'
          },
          {
            'title': 'フライドポテト',
            'text': '200円'
          },
          {
            'title': 'フライドポテト',
            'text': '200円'
          }
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

<style scoped>

</style>