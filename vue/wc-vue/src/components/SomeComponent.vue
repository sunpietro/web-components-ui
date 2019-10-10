<template>
    <div class="SomeComponent" @close="onClose">
        <button v-if="!showNotification" type="button" v-on:click="showNotification = true">Show</button>
        <sunpietro-notification v-if="showNotification">
            <h3 slot="title">Hello 4Developers from inside Vue component</h3>
            <p>It is great to be here!</p>
        </sunpietro-notification>
    </div>
</template>

<script>
export default {
    name: 'SomeComponent',
    data: function() {
        return { showNotification: false };
    },
    methods: {
        onClose: function() {
            this.showNotification = false;
        }
    }
};
</script>

<style scoped>
.SomeComponent {
    width: 50vw;
    margin: auto;
}
</style>
