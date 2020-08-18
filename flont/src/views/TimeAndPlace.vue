<template>
<v-app>
    <v-container fluid>
    <div class="delivery">
      <h2>ご連絡先</h2>      
        <v-text-field
              v-model="adress"
              :rules="[rule.required, rule.phone]"
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
      outlined
      :rules="[rule.required]">
      </v-select>
      <v-select
      :items = "minutes"
      label="分"
      outlined
      :rules="[rule.required]">
      </v-select>
      <v-text-field
            v-model="adress"
            hide-details="auto"
            label="苦手な食べ物やその他ご要望がございましたらご記入ください。"
          ></v-text-field>
    </div>
    <v-footer class="ma-1" color="primary" fixed>
      <v-btn tag="v-btn" to="/">←メニューを選び直す</v-btn>
      <v-spacer></v-spacer>
      <v-btn tag="v-btn" to="/Check">Step3: 注文内容確認→</v-btn>
    </v-footer>
  </v-container>
</v-app>
</template>

<script>

export default {
    data() {
      return{
        name: '',
        minutes: [0, 10, 20, 30, 40, 50],
        hours: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        success: false,
        rule: {
          required: value => !!value || "入力してください",
          phone: value => {
            const pattern = "[0-9]"
            return pattern.test(value) || '適切な電話番号を入力してください'
          }
        }
      }
    },
    methods: {
      ToNextStep(){
        if(this.$refs.test_from.validate()){
          this.success = true;
        }
        else{
          this.success = false
        }
      }
    }
}
</script>

<style scoped>

</style>