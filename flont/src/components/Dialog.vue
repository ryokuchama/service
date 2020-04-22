<template>
    <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                <label>数量:</label>
                <select name="yaku" v-model="yaku">
                    <option v-for="amount in amounts" :key="amount" name="amount" :value="amount">{{ amount }}</option>
                </select>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    props: {
    amounts: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>

</style>