<template>
    <v-app>
        <v-container>
            <div>
                <h2>注文内容</h2>
                <h2>受け取り時間/場所</h2>
                <h2>料金</h2>
            </div>
            <div>
                <v-btn tag="v-btn" to="/Confimation">注文を確定する</v-btn>
            </div>
            <div>
                <v-btn tag="v-btn" to="/">←メニューを選び直す</v-btn>
                <v-btn tag="v-btn" to="/TimeAndPlace">←受け取り場所と時間を修正</v-btn>
            </div>
        </v-container>
    </v-app>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>