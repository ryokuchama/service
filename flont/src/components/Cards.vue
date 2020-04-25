<template>
<v-app>
  <div class="text-center">
    <h1><slot></slot></h1>
    <v-container>
      <v-row>
        <v-card width="300" @click.stop="dialog=true"
        v-for="(item, index) in sectionItems" :key="index" class="ma-2">
          <v-img
          src="item.photo">
            <v-card-title class="justify-center">
            {{ item.title }}
          </v-card-title>
          </v-img>
          
        <v-card-text>
          {{ item.text }}
        </v-card-text>
       </v-card>

        <v-dialog v-model="dialog" scrollable max-width="80%">
          <v-card>
            <v-card-title>{{ title }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text height="200px">{{ content }}</v-card-text>

            <label>数量: </label>
            <select name="amount" v-model="amount">
              <option v-for="amount in amounts" :key="amount" name="amount" :value="amount">{{ amount }}</option>
            </select>
          </v-card>
        </v-dialog>

      </v-row>
    </v-container>  
  </div>
</v-app>
</template>

<script>

export default {
  props: {
    sectionItems: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      dialog: false,
      amount: 0,
      amounts: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }

}
</script>