<template>
  <button class="g-button" :class="[`icon-${iconPosition}`]">
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  // props: ["icon","iconPosition"]
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        console.log(value);
        return value === 'left' || value === 'right'
       
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.g-button {
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
}
</style>