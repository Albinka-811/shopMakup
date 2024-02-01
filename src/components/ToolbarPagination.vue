<script>
import AppSvgIcon from '@components/AppSvgIcon.vue';

export default {
  name: 'ToolbarPage',
  components: {
    AppSvgIcon
  },
  props: {
    items: {
      type: Array,
      required: true,
    }
  },
};

</script>

<template>
  <div class="pagination">
    <ul class="pagination-list">
      <li class="pagination-list-item" :key="item.name" v-for="(item) in items">
        <a class="pagination-list-item__link" href="#">{{ item.link }}</a>
      </li>
      <li>
        <a class="pagination-list-item__link" href="#">
          <AppSvgIcon class="lineAdd" name="line(Stroke)"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;

  &-list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    &-item {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      &__link {
        font-family: $fontLato;
        font-weight: 700;
        font-size: $fontSizeXS;
        color: $lightBlack;
        text-decoration: none;
      }
    }
  }
}
</style>
