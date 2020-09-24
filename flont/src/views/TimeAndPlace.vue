<template>
  <v-app>
    <v-container fluid>
      <ValidationObserver ref="observer">
        <div class="delivery">
          <h2>ご連絡先</h2>
          <form>
            <ValidationProvider v-slot="{errors, valid}" rules="required|max:11">
              <v-text-field
                    v-model="phoneNumber"
                    :counter="11"
                    :error-messages="errors"
                    :success="valid"
                    hide-details="auto"
                    label="電話番号を入力してください(ハイフンなし)"
                    required
                  />
            </ValidationProvider>
          </form>
        </div>
      <div class="time">
        <h2>受け取り時刻</h2>
        <ValidationProvider v-slot="{errors}" rules="required">
          <v-select
          v-model="hour"
          :items = "hours"
          :error-messages="errors"
          :success="valid"
          data-vv-name="hour"
          label="時"
          outlined
          required>
          </v-select>
          <v-select
          v-model="minute"
          :items = "minutes"
          :error-messages="errors"
          :success="valid"
          data-vv-name="minute"
          label="分"
          outlined
          required>
          </v-select>
        </ValidationProvider>
        <v-text-field
              v-model="note"
              hide-details="auto"
              label="苦手な食べ物やその他ご要望がございましたらご記入ください。"
            ></v-text-field>
      </div>
      <v-footer class="ma-1" color="primary" fixed>
        <v-btn tag="v-btn" to="/">←メニューを選び直す</v-btn>
        <v-spacer></v-spacer>
        <ValidationProvider>
          <v-btn  
          :disabled="invalid"
          @click="check"
          color="success"
          tag="v-btn" to="/Check">Step3: 注文内容確認→</v-btn>
        </ValidationProvider>
      </v-footer>
      </ValidationObserver>
    </v-container>
  </v-app>
</template>

<script>
import { required, max } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '入力してください',
})

extend('max', {
  ...max,
  message: '長すぎます',
})

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
    data() {
      return{
        phoneNumber: String,
        minute: null,
        minutes: [0, 10, 20, 30, 40, 50],
        hour: null,
        hours: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        note: '',
        success: false,
      }
    },
    methods: {
      check() {
        this.$refs.observer.validate().then(
          result => {
            console.log('check'), result
          }
        )
      }
    }
}
</script>

<style scoped>

</style>