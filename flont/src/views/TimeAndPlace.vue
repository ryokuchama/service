<template>
    <v-container fluid>
    <p>{{ radios || 'null' }}</p>
    <v-radio-group v-model="radios" :mandatory=true>
      <v-radio label="テイクアウト" value=0></v-radio>
      <v-radio label="デリバリー" value=1></v-radio>
    </v-radio-group>
    <div class="takeout" v-show="this.radios == 0">
      <select name="yaku" v-model="yaku">
          <option v-for="yaku in yakus" :key="yaku" name="yaku" :value="yaku">{{ yaku }}</option>
        </select>
    </div>
    <div class="delivery" v-show="this.radios == 1">
      <select name="yaku" v-model="yaku">
        <option v-for="yaku in yakus" :key="yaku" name="yaku" :value="yaku">{{ yaku }}</option>
      </select>
    </div>
    <v-btn tag="v-btn" to="/">←メニューを選び直す</v-btn>
    <v-btn tag="v-btn" to="/Check">Step3: 注文内容確認→</v-btn>
  </v-container>
</template>

<script>
export default {
    data() {
      return{
        minutes: [15, 20, 25, 30, 45, 60],
        hour: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
      }
    }
}
</script>

<style scoped>

</style>