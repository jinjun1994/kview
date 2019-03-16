import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
Vue.component('k-button', Button)
Vue.component('k-icon', Icon)
Vue.component('k-button-group', ButtonGroup)
new Vue({
    el: '#app',
    data: {
        message: 'hi',
        loading1: false,
        loading2: false,
        loading3: false,
    },
})