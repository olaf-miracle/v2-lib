<template>
  <div class="bulletins-wrapper">
    <div class="bulletins__title">Bulletins</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bulletins',

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
    position: fixed;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    border: 1px solid grey;
    border-radius: 12px;
    background-color: rgba(#363636, 1);
    box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, .5);
    transform: translate3d(-50%, -50%, 0);
  }

  .bulletins__title {
    padding: 16px 0;
    color: rgba(#ebebeb, 1);
    font-size: 32px;
    font-weight: bold;
    text-align: center;
  }
</style>
