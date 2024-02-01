<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'BreadCrumb',
  setup () {
    const route = useRoute();
    const crumbs = computed(() => {
      return route.matched
        .map((item) => {
          return item.meta.breadcrumb;
        })
        .filter(Boolean);
    });

    console.log(route);

    return {
      crumbs,
    };
  }
};
</script>

<template>
  <ul class="breadcrumb-navigation">
    <li class="breadcrumb-navigation-item">
      <a class="breadcrumb-navigation-item__link">Home</a>
    </li>
    <li
      v-for="item in crumbs"
      :key="item"
      class="breadcrumb-navigation-item"
    >
      <a class="breadcrumb-navigation-item__link">{{ item }}</a>
    </li>
  </ul>
  <div class="breadcrumb-filter">
    <label class="breadcrumb-filter-active">
      <span class="breadcrumb-filter-active__name">Dresses</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
.breadcrumb {
  &-navigation {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 16px 0;
    list-style: none;

    &::before {
      content: ' ';
      margin: 0;
    }

    &-item {
      &::after {
        content: ' ❯ ';
        display: inline;
        color: $gray;
        font-size: 16px;
        margin: 0 8px;
      }

      &__link {
        font-family: $fontLato;
        font-weight: 400;
        font-size: 14px;
        color: $lightBlack;

        &:last-child {
          color: $gray;
        }
      }
    }
  }

  &-filter {
    display: flex;

    &-active {
      display: flex;
      align-items: center;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      &__name {
        font-family: $fontLato;
        font-weight: 400;
        font-size: 14px;
        color: $gray;

        &:last-child, &:last-child:before {
          color: $lightBlack;
        }

        &::before {
          content: ' ✕ ';
          display: inline;
          color: $gray;
          font-size: 16px;
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
