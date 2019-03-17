<template>
<div class="k-button-group">  
    <slot></slot>
   <!-- slot不能为根节点 -->
 </div>
  
</template>

<script>
    export default {
        mounted () {
            console.log(this.$children);       // 只会找vue实例
            for (let node  of this.$el.children) {
                if (node.nodeName.toLowerCase() !== 'button' ){
                    console.warn(`k-button-group 的子元素应该全为 g-button, 但你写的是 ${node.nodeName.toLowerCase()}`)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.k-button-group {
    display: inline-flex;
    vertical-align: center;
    > .k-button {
      &:not(:first-child) {
      margin-left: -1px;
      }
      border-radius: 0;
      &:first-child {
          border-top-left-radius: var(--border-radius);
          border-bottom-left-radius: var(---border-radius);
      }
      &:last-child {
          border-top-right-radius: var(--border-radius);
          border-bottom-left-radius: var(--border-radius);
      }
      &:hover {
          position: relative;
          z-index: 1;
      }
    }
}
</style>