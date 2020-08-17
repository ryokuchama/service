<template>
<v-app>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="auto" height="300"
        v-for="item in Items" :key="item.id">
          <v-img
          src="item.photo" height="200">
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
    
    <!--dialog-->
    <v-dialog
      v-model="dialogVisible" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn @click="dialogVisible = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="text-center">注文内容と合計金額</v-toolbar-title>
          <v-spacer></v-spacer>
          合計金額:{{totalPrice}}
        </v-toolbar>
        <v-list three-line subheader>
          <v-list-item v-for="com in computedCart" :key="com">
            <v-list-item-content>
              <v-list-item-title v-text="com.title">
              </v-list-item-title>
              <v-list-item-sub-title v-text="com.count">
              </v-list-item-sub-title>
              <v-list-tile-sub-title v-text="com.price">    
              </v-list-tile-sub-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-btn block tag="v-btn" to="/TimeAndPlace">Step2: 受け取り場所と時間</v-btn>
      </v-card>
    </v-dialog>
    <v-footer fixed color="primary">
      <v-btn @click="checkCart" width="250">注文内容を確認</v-btn>
      <v-spacer></v-spacer>
      合計金額:{{totalPrice}}
      <v-spacer></v-spacer>
      <v-btn tag="v-btn" to="/TimeAndPlace" width="250">Step2: 受け取り場所と時間</v-btn>
    </v-footer>
  </v-container>
</v-app>
</template>

<script>
  export default {
    name: 'Menu',

    data () {
      return {
        cart: [],         //カート
        computedCart: [], //DB書き込み用カート
        dialogVisible: false,
        com: 1,
        // 商品リスト
        Items: [
          { id: 1, title: 'ポキ丼', price: 1000, text: 'マグロとサーモンを特製のタレで和えました' },
          { id: 2, title: 'チーズバーガー', price: 1000, text: '人気メニュー' },
          { id: 3, title: 'フライドポテト', price: 500, text: 'みんな大好き' },
          { id: 4, title: 'ビール', price: 500, text: 'お気に入り' },
          { id: 5, title: 'コーラ', price: 500, text: 'おすすめ' },
          { id: 6, title: 'パフェ', price: 1000, text: '人気' },
          { id: 7, title: 'チーズケーキ', price: 1000, text: '美味しい' }
        ],
        totalprice: Number, // 総額
        // v-stepperの追加
      }
    },
    methods: {
    // カート追加
    addToCart: function (id) {
      var selectedProdct = this.Items.find((item) => {
        return (item.id === id);
      });
      this.cart.push(selectedProdct)
    },
    // カートから削除
    delFromCart: function (id) {
      var deleteItem = this.cart.indexOf(id);
      this.cart.splice(deleteItem, 1);
    },
    //数量
    amount: function(productId) {
      var filtered = this.cart.filter(function(p) {
        return (p.id == productId);
      });
      return filtered.length
    },
    //カート表示 連想配列にCountカラム追加
    checkCart() {
      this.dialogVisible = true

      var countForCheckOut = []
      for (let id in this.productCountById){
        this.Items.find(function(item) {
          if (item.id === id) {
            item["count"] = this.productCountById[id]
            countForCheckOut.push(item)
          }
        });
      }
      this.computedCart = countForCheckOut
      console.log(this.computedCart)
    }
  },
  computed: {
    //IDごとに数量をカウント
    productCountById: function () {
      var count = {}
      this.cart.forEach(function(item) {
        count[item.id] = (count[item.id])? count[item.id] + 1 : 1 ;
      });
      console.log(count);
      return count
    },
    //総額計算処理
    totalPrice: function () {
      var total = this.cart.reduce(
        (sum, x) => sum + x.price, 0
        )
      return total
    }
  },
  mounted() {
    this.axios
      .get('https://get')
      .then(response => (this.Items = response))
      .catch(error => (this.Items = error))
  }
}
</script>

<style scoped>

</style>