<template>
  <v-container>
    <v-layout>
      <v-flex>
      <div>
        Food
        <Cards :section-items="foodItems">
          Skill
      </Cards>
      </div>
      <div>
        Drink
        <Cards :section-items="drinkItems">
          Skill
      </Cards>
      </div>
      <div>
        Desert
        <Cards :section-items="desertItems">
          Skill
      </Cards>
      </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Cards from '@/components/Cards.vue'

  export default {
    components: {
      Cards
    },

    name: 'Menu',

    data: () => ({
      
    }),
  }
</script>
