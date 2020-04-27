<template>
<v-app>
  <v-col>
      <h1><slot></slot></h1>
        <v-card class="mx-auto" @click.stop="dialog=true"
        v-for="(item, index) in sectionItems" :key="index"
        max-width="500">
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
  </v-col>
    <v-dialog v-model="dialog" scrollable max-width="80%">
      <v-card>
        <v-card-title>{{ title }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text height="200px">{{ content }}</v-card-text>

        <v-select :items="amounts" label="数量" outlined>
        </v-select>
      </v-card>
    </v-dialog>  
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
      amounts: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  }

}
</script>