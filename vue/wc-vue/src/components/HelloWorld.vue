<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <button type="button" v-on:click="showNotification = true">Show</button>
        <sunpietro-notification v-if="showNotification">
            <h3 slot="title">WC Vue notification title</h3>
            <p>Some text</p>
        </sunpietro-notification>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data: function() {
        return { showNotification: false };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
