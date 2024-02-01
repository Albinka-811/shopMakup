<script>
import AppSvgIcon from '@components/AppSvgIcon.vue';

export default {
  name: 'ToolbarSort',
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
    }
  },
};
</script>

<template>
  <div class="sort">
    <span class="sort__title">{{ title }}</span>
    <button class="sort-button">
      popularity
      <AppSvgIcon class="sort-button__expandMore" name="expand_more"/>
    </button>
    <div class="sort-select">
      <a class="sort-select__item" :key="item.name" v-for="(item) in items">{{ item.name }}</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sort {
  display: flex;
  align-items: baseline;
  margin-right: 60px;
  position: relative;

  &__title {
    font-family: $fontLato;
    font-weight: 700;
    font-size: $fontSizeXS;
    color: $lightBlack;
    margin-right: 12px;
  }

  &-button {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid $lightGray;
    width: 170px;
    height: 44px;
    border-radius: 4px;
    padding: 12px 16px;
    outline: none;
    background: none;

    font-family: $fontLato;
    font-size: 14px;
    font-weight: 400;
    color: $lightBlack;

    &__expandMore {
      margin: 0 0 0 56px;
      fill: $lightBlack;
    }
  }

  &-select {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 27%;
    top: 44px;
    z-index: 1;
    width: 170px;

    //border: 1px solid $lightGray;
    border-radius: 0 0 4px 4px;
    padding: 0 16px;
    background: $white;
    box-shadow: 0 3px 6px 3px rgba(0,0,0,.05);

    &__item {
      font-family: $fontLato;
      font-size: 14px;
      font-weight: 400;
      color: $lightBlack;
      margin-top: 4px;

      &:hover {
        color: $primary;
      }
    }
  }
}
</style>
