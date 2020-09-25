<template>
  <div class="bulletins-wrapper">
    <div class="bulletins__title">Bulletins</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Bulletins',

  created () {
    console.log('[Bulletins] created!')
    this.getTime()
  },

  methods: {
    getTime () {
      const currentTime = new Date()
      console.log('currentTime >>', currentTime)
    },
  },
}
</script>

<style lang="scss">
  @import './style';
</style>
