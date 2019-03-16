import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
Vue.component('k-button', Button)
Vue.component('k-icon', Icon)
new Vue({
    el: '#app',
    data: {
        message: 'hi'
    },
})