<template>
<v-app>
    <v-container fluid>
    <div class="delivery">
      <h2>ご連絡先</h2>
      <ValidationObserver
      ref="observer" v-slot="{validate, reset}">
        <form>
          <ValidationProvider
          v-slot="{errors}" name="Name" rules="required|Number">
            <v-text-field
                  v-model="adress"
                  :rules="rules"
                  counter="11"
                  hide-details="auto"
                  label="電話番号を入力してください(ハイフンなし)"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
          </ValidationProvider>
        </form>
      </ValidationObserver>
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
      <v-text-field
            v-model="adress"
            :rules="rules"
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
import {required} from 'vee-validate/dist/rules'
import {extend, ValidationObserver, ValidationProvider, setInteractionMode} from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
    data() {
      return{
        name: '',

        minutes: [0, 10, 20, 30, 40, 50],
        hours: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
      }
    },
    methods: {
      put () {
        this.$refs.observer.validate()
      },
      
    }
}
</script>

<style scoped>

</style>