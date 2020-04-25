<template>
<v-app>
    <v-container fluid>
    <h2>受取方法</h2>
    <v-radio-group v-model="radios" :mandatory=true>
      <v-radio label="テイクアウト" value=0></v-radio>
      <v-radio label="デリバリー" value=1></v-radio>
      <small>※デリバリーは大須、上前津、伏見に限ります。</small>
    </v-radio-group>
    <div class="delivery" v-show="this.radios == 1">
      <h2>受け取り場所</h2>
      <v-text-field
            v-model="adress"
            :rules="nameRules"
            label="受け取り場所を記入してください"
            required
          ></v-text-field>
    </div>
    <div class="time">
      <h2>受け取り/宅配時刻</h2>
      <v-select
      :items = "hours"
      label="時"
      outlined>
      </v-select>
      <v-select
      :items = "minutes"
      label="分"
      outlined>
      </v-select>
    </div>
    <div class="ma-1">
      <v-btn tag="v-btn" to="/">←メニューを選び直す</v-btn>
      <v-btn tag="v-btn" to="/Check">Step3: 注文内容確認→</v-btn>
    </div>
  </v-container>
</v-app>
</template>

<script>
export default {
    data() {
      return{
        radios: 0,
        minutes: [0, 10, 20, 30, 40, 50],
        hours: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
      }
    }
}
</script>

<style scoped>

</style>