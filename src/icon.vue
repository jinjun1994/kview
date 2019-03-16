<template>
    <svg v-if="iconName" class="k-icon" >
      <use :xlink:href="`#i-${iconName}`"></use>
    </svg>
</template>

<script>
    export default {
        props:['name'],
        data() {
            return {
                iconName: this.name
            }
        },
    }
</script>

<style scoped>
.k-icon {
    width: 1em;
    height: 1em;
}
</style>


