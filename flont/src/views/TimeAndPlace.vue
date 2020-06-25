<template>
<v-app>
    <v-container fluid>
    <h2>ご連絡先</h2>
    <div class="delivery">
      <v-text-field
            v-model="adress"
            :rules="rules"
            counter="11"
            hide-details="auto"
            label="電話番号を入力してください(ハイフンなし)"
          ></v-text-field>
    </div>
    <div class="time">
      <h2>受け取り時刻</h2>
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
        minutes: [0, 10, 20, 30, 40, 50],
        hours: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
      }
    }
}
</script>

<style scoped>

</style>