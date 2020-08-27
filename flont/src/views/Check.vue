<template>
    <v-app>
        <v-container>
            <div>
                <h2>注文内容</h2>
                    {{cart}}
                <h2>受け取り時間/場所</h2>
                    <p>
                        {{hour}}時{{minute}}分
                    </p>
                <h2>料金</h2>
                    {{totalPrice}}
                <h2>電話番号</h2>
                    {{phoneNumber}}
                <h2>オプション</h2>
                    {{note}}
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
    computed: {
        cart() {
            return this.$store.getters.currentCart;
        },
        totalPrice() {
            return this.$store.getters.currentTotalPrice;
        },
        hour() {
            return this.$store.getters.hour;
        },
        minute() {
            return this.$store.getters.minute;
        },
        phoneNumber() {
            return this.$store.getters.phoneNum;
        },
        note() {
            return this.$store.getters.note;
        }
    },
    methods: {
        getTime() {
            const date = new Date();
            const datetimeFormat = 'YYYYMMDD_hhmi';
            let toFileName = datatimeFormat
                .replace(/YYYY/g, String(date.getFullYear()))
                .replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2))
                .replace(/DD/g, ('0' + date.getDate()).slice(-2))
                .replace(/hh/g, ('0' + date.getHours()).slice(-2))
                .replace(/mi/g, ('0' + date.getMinutes()).slice(-2));

            return toFileName
        },
    }
}
</script>

<style scoped>

</style>