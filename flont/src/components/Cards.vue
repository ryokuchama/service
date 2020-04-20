<template>
  <div class="text-center">
    <h1><slot></slot></h1>
    <v-container>
      <v-row>
      <v-card width="300"
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
      </v-row>
    </v-container>  
  </div>
</template>

<script>
export default {
  props: {
    sectionItems: {
      type: Array,
      required: true
    }
  },
}
</script>