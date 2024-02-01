<script>
export default {
  name: 'FilterColor',
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
  <div class="filter">
    <div class="filter-header">
      <span class="filter-header__title">{{ title }}</span>
    </div>
    <div class="filter-body">
      <ul class="filter-body-categories">
        <li class="filter-body-categories-item" :key="item.name" v-for="(item) in items">
          <label class="filter-body-categories-item-palette">
            <input class="filter-body-categories-item-palette__group" name="" type="checkbox"
                   :id="item.name">
            <span class="filter-body-categories-item-palette__swatch"
                  :style="{'background-color':item.color}">
              </span>
            <span class="filter-body-categories-item-palette__name">{{ item.name }}</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter {
  &-header {
    display: flex;
    margin-bottom: 16px;

    &__title {
      font-family: $fontLato;
      font-weight: 700;
      font-size: $fontSizeXS;
      color: $black;
    }
  }

  &-body {
    border-bottom: 1px solid #E5E8ED;
    width: 255px;
    margin-bottom: 20px;

    &-categories {
      margin: 0;
      padding: 0;
      list-style: none;
      margin-bottom: 20px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row-gap: 8px;
      grid-column-gap: 10px;

      &-item {
        display: flex;
        justify-content: center;
        width: 52px;
        height: 52px;

        &-palette {
          display: flex;
          align-items: center;
          flex-flow: column;
          position: relative;
          cursor: pointer;

          &__group {
            width: 0;
            height: 0;
            position: absolute;
            left: -100vw;
          }

          &__swatch {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 1px solid #D7DADD;
            margin-bottom: 2px;
            padding: 2px;
            background-clip: content-box;

            &:hover {
              border: 1px solid $primary;
            }
          }

          &__name {
            font-family: $fontLato;
            font-weight: 400;
            font-size: 12px;
            color: #787A80;
            //margin-left: 8px;
          }
        }
      }
    }
  }
}
</style>
