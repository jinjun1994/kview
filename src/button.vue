<template>
  <button class="k-button" :class="[`icon-${iconPosition}`]"
  @click="$emit('click')">
  <!--等价于 @click="this.$emit(click)"> -->
  <!--  当前组件触发点击事件 -->
    <k-icon class="icon" v-if="icon && !loading" :name="icon"></k-icon>
    <k-icon class="loading icon" name="loading" v-if="loading"></k-icon>
    <div class="content">
      <slot></slot>   
       <!-- slot can't add class  -->
    </div>
  </button>
</template>

<script>

import Icon from './icon'

// Vue.component('k-icon', Icon)
export default {
  components: {
    'k-icon': Icon 
  },
  // props: ["icon","iconPosition"]
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return value === 'left' || value === 'right'
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    name() {
      
    }
  },
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }

}
.k-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  // 上下不对齐 统一加 这句，所有inline都有这个bug
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
  .icon {
    order: 1;
    margin-right: .2em;
  }
  .content {
    order: 2;
  }
  &.icon-right{
    .icon{
      order: 2;
      margin-left: .2em;
    }
    .content{
      order: 1;
    }
  }
  .loading{
    animation: spin 1s infinite linear
  }
}
</style>