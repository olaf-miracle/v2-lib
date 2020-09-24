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
    this.getDay()
  },

  methods: {
    getDay () {
      const dayOfToday = new Date().getDay()
      console.log('dayOfToday', dayOfToday)
    },
  },
}
</script>

<style lang="scss" scoped>
  .bulletins-wrapper {
    z-index: 10;
    width: 300px;
    height: 300px;
    border: 1px solid grey;
    border-radius: 12px;
    background-color: rgba(#363636, 1);
    box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, .5);
  }

  .bulletins__title {
    padding: 16px 0;
    color: rgba(#ebebeb, 1);
    font-size: 32px;
    font-weight: bold;
    text-align: center;
  }
</style>
