<script>
import AppSvgIcon from '@components/AppSvgIcon.vue';

export default {
  name: 'ToolbarPage',
  components: {
    AppSvgIcon
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    text: {
      type: String,
      required: true,
    }
  },
};
</script>

<template>
  <div class="page">
    <span class="page__title">{{ title }}</span>
    <button class="page-button">
      12
      <AppSvgIcon class="page-button__upDown" name="up-down-select"/>
    </button>
    <div class="page-select">
      <a class="page-select__number" :key="item.name" v-for="(item) in items">{{ item.number }}</a>
    </div>
    <span class="page__text">{{ text }}</span>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  align-items: baseline;
  margin-right: 183px;
  position: relative;

  &__title {
    font-family: $fontLato;
    font-weight: 700;
    font-size: $fontSizeXS;
    color: $lightBlack;
  }

  &-button {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid $lightGray;
    width: 80px;
    height: 44px;
    border-radius: 4px;
    padding: 12px 16px;
    outline: none;
    margin: 0 12px;
    background: none;

    font-family: $fontLato;
    font-size: 14px;
    font-weight: 400;
    color: $lightBlack;

    &__upDown {
      margin: 0 0 0 12px;
      fill: $black;
    }
  }

  &-select {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 20%;
    top: 46px;
    z-index: 1;
    width: 80px;

    border-radius: 0 0 4px 4px;
    padding: 0 16px;
    background: $white;
    box-shadow: 0 3px 6px 3px rgba(0, 0, 0, .05);


    &__number {
      font-family: $fontLato;
      font-size: 14px;
      font-weight: 400;
      color: $lightBlack;
      margin-top: 4px;

      &:hover {
        color: $primary;
      }
    }

    &__text {
      font-family: $fontLato;
      font-size: 14px;
      font-weight: 400;
      color: #787A80;
    }
  }
}
</style>
