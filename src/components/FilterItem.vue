<script>
export default {
  name: 'FilterItem',
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
  data () {
    return {
      search: '',
    };
  },
  // computed: {
  //   filterItems () {
  //     return this.items.map((item) => ({
  //       active: false,
  //       ...item,
  //     }));
  //   },
  //   selectedItems () {
  //     return this.filterItems.filter((item) => item.active);
  //   }
  // },
  // methods: {
  //   handleUpdate () {
  //     this.emits('update:modelValue', this.selectedItems);
  //   }
  // }
};
</script>

<template>
  <div class="filter">
    <div class="filter-header">
      <span class="filter-header__title">{{ title }}</span>
    </div>
    <div class="filter-body">
      <div class="filter-body-box">
        <input class="filter-body-box__search" v-model="search" name="" type="search"
               placeholder="Search the clothes type">
        <img src="" alt="">
      </div>
      <ul class="filter-body-categories">
        <li class="filter-body-categories-item" :key="item.name" v-for="(item) in items">
          <span class="filter-body-categories-item__checkout" :id="item.name"></span>
          <!--            //v-model="item.active"-->
          <label class="filter-body-categories-item-name" :for="item.name">
            {{ item.name }}
            <span class="filter-body-categories-item-name__count">
                ({{ item.count }})
              </span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

    &-box {
      margin-bottom: 16px;

      &__search {
        width: 255px;
        padding: 6px 12px;
        border: 1px solid $lightGray;
        border-radius: 4px;
        outline: none;

        &::placeholder {
          font-family: $fontLato;
          font-weight: 400;
          font-size: 12px;
          color: $gray;
        }
      }
    }

    &-categories {
      margin: 0;
      padding: 0;
      list-style: none;
      margin-bottom: 20px;

      &-item {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        &:last-child {
          margin-bottom: 0;
        }

        &__checkout {
          display: inline-flex;
          position: relative;
          width: 16px;
          height: 16px;
          border: 1px solid #B3B7BC;
          border-radius: 3px;
          cursor: pointer;
          justify-content: center;
          align-items: center;
          background: $primary;
          padding: 4px 3px;

          &::before {
            content: "";
            width: 10px;
            height: 8px;
            display: block;
            position: relative;
            border-right: 2px solid #fff;
            border-bottom: 2px solid #fff;
            transform: rotate(40deg);
            bottom: 1px;
            border-radius: 1px;
          }
        }

        &-name, &__count {
          font-family: $fontLato;
          font-weight: 400;
          font-size: 14px;
          color: $lightBlack;
          margin-left: 8px;

          &__count {
            color: $gray;
          }
        }
      }
    }
  }
}
</style>
