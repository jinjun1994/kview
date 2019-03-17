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


// 单元测试
import chai from 'chai'
import  spies  from 'chai-spies';
chai.use(spies)
const expect = chai.expect;
try{
{
    // 测试按钮含有icon
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let herf = useElement.getAttribute('xlink:href')
    expect(herf).to.eq('#i-setting')

}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let herf = useElement.getAttribute('xlink:href')
    expect(herf).to.eq('#i-loading')
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let useElement = vm.$el.querySelector('svg')
    let herf = window.getComputedStyle(useElement).order
    expect(herf).to.eq('2') 
    vm.$el.remove()
    vm.$destroy()
}
{
// mock 函数 
const Constructor = Vue.extend(Button)
const vm = new Constructor({
    propsData: {
        icon: 'setting',
    }
})
vm.$mount()
let spy = chai.spy(() => {})
vm.$on('click', spy)
// 使用间谍函数做回调函数
let button = vm.$el
button.click()
expect(spy).to.have.been.called()
// 期待这个函数被执行
}}
catch (error){
window.errors = [error]
} finally {
    console.log(window.errors);
}