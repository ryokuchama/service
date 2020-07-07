<template>
    <v-app>
        <v-container>
            <div>
                <h2>注文内容</h2>
                <h2>受け取り時間/場所</h2>
                <h2>料金</h2>
            </div>
            <v-footer fixed color="primary">
                <v-btn tag="v-btn" to="/" width="200">←メニューを選び直す</v-btn>
                <v-spacer></v-spacer>
                <v-btn tag="v-btn" to="/TimeAndPlace" width="200">←受け取り場所と時間を修正</v-btn>
                <v-spacer></v-spacer>
                <v-btn tag="v-btn" to="/Confimation" width="200">注文を確定する</v-btn>
            </v-footer>
        </v-container>
    </v-app>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>