<template>
<v-app>
    <v-container fluid>
    <p>{{ radios || 'null' }}</p>
    <v-radio-group v-model="radios" :mandatory=true>
      <v-radio label="テイクアウト" value=0></v-radio>
      <v-radio label="デリバリー" value=1></v-radio>
      <small>※デリバリーは大須、上前津、伏見に限ります。</small>
    </v-radio-group>
    <div class="time">
      <h2>受け取り/宅配時刻</h2>
      <select name="hour" v-model="hour">
          <option v-for="hour in hours" :key="hour" name="hour" :value="hour">{{ hour }}</option>
      </select>
      <label>時</label>
      <select name="minute" v-model="minute">
          <option v-for="minute in minutes" :key="minute" name="minute" :value="yaku">{{ minute }}</option>
      </select>
      <label>分</label>
    </div>
    <div class="delivery" v-show="this.radios == 1">
      <v-text-field
            v-model="adress"
            :rules="nameRules"
            label="adress"
            required
          ></v-text-field>
    </div>
    <v-btn tag="v-btn" to="/">←メニューを選び直す</v-btn>
    <v-btn tag="v-btn" to="/Check">Step3: 注文内容確認→</v-btn>
  </v-container>
</v-app>
</template>

<script>
export default {
    data() {
      return{
        minute: 0,
        minutes: [0, 10, 20, 30, 40, 50],
        hour: 10,
        hours: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
      }
    }
}
</script>

<style scoped>

</style>