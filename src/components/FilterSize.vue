<script>
export default {
  name: 'FilterSize',
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
  <div class="sidebar">
    <div class="sidebar-filter">
      <div class="sidebar-filter-header">
        <span class="sidebar-filter-header__title">{{ title }}</span>
      </div>
      <div class="sidebar-filter-body">
        <ul class="sidebar-filter-body-categories">
          <li class="sidebar-filter-body-categories-items" :key="item.name" v-for="(item) in items">
            <input
              class="sidebar-filter-body-categories-items__checkout"
              v-model="item.active"
              name=""
              type="checkbox"
              :id="item.name">
            <label class="sidebar-filter-body-categories-items-name" :for="item.name">
              {{ item.name }}
              <span class="sidebar-filter-body-categories-items-name__count">
                ({{ item.count }})
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  &-filter {
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

        &-items {
          display: flex;
          align-items: center;
          margin-bottom: 8px;

          &:last-child {
            margin-bottom: 0;
          }

          &__checkout {
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
}

</style>
