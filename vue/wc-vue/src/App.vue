<template>
    <div id="app">
        <SomeComponent />
    </div>
</template>

<script>
import SomeComponent from './components/SomeComponent.vue';

export default {
    name: 'app',
    components: {
        SomeComponent
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
