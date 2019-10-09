import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [
    // Use a `RegExp` to ignore all elements that start with "ion-"
    // 2.5+ only
    /^sunpietro-/
];

new Vue({
    render: h => h(App)
}).$mount('#app');
