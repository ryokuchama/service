<template>
<v-app>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="auto"
        v-for="item in Items" :key="item.id">
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
          <span></span>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="total">
        注文内容: 
        <dir v-for="c in cart" :key="c">
          <p>
            {{c.title}}
          </p>
        </dir>
        <dir>
          <p>
            合計金額:{{totalPrice}}
          </p>
            <v-btn tag="v-btn" to="/TimeAndPlace">Step2: 受け取り場所と時間</v-btn>
        </dir>
      </v-col>
    </v-row>
  </v-container>
</v-app>
</template>

<script>

  export default {
    name: 'Menu',

    data () {
      return {
        cart: [],
        Items: [
          {
            id: 1,
            title: 'ポキ丼',
            price: 1000,
            text: 'マグロとサーモンを特製のタレで和えました'
          },
          {
            id: 2,
            title: 'チーズバーガー',
            price: 1000,
            text: '人気メニュー'
          },
          {
            id: 3,
            title: 'フライドポテト',
            price: 500,
            text: 'みんな大好き'
          },
          {
            id: 4,
            title: 'ビール',
            price: 500,
            text: 'お気に入り'
          },
          {
            'id': 5,
            'title': 'コーラ',
            'price':500,
            'text': 'おすすめ'
          },
          {
            id: 6,
            title: 'パフェ',
            price: 1000,
            text: '人気'
          },
          {
            id: 7,
            title: 'チーズケーキ',
            price: 1000,
            text: '美味しい'
          }
        ],
        products: "",
        totalprice: Number,

        

        // v-stepperの追加
        // Card.vueの廃止とこちら側で全ての実装
      }
    },
    methods: {
    addToCart: function (id) {
      var selectedProdct = this.Items.find((item) => {
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
    checkCart() {
      var countForCheck = []
      for (let id in this.productCountById) {
        this.Items.find(function(item) {
          if(item.id == id) {
            item["count"] = this.productCountById[id]
            countForCheck.push(item)
          }
        })
      }
    }
  },
  computed: {
    productCountById: function () {
      var count = {}
      this.cart.forEach(function(item) {
        count[item.id] = (count[item.id])? count[item.id] + 1 : 1 ;
      });
      console.log(count);
      return count
    },
    totalPrice: function () {
      var total = this.cart.reduce(
        (sum, x) => sum + x.price, 0
        )
      return total
    }
  },
}
</script>

<style scoped>

</style>