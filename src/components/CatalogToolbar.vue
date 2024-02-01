<script>
import ToolbarSort from '@components/ToolbarSort.vue';
import ToolbarPage from '@components/ToolbarPage.vue';
import ToolbarPagination from '@components/ToolbarPagination.vue';

export default {
  name: 'CatalogToolbar',
  components: {
    ToolbarPagination,
    ToolbarPage,
    ToolbarSort,
  },
  data () {
    return {
      sort: {
        title: 'Sort by',
        items: [
          {
            name: 'popularity'
          },
          {
            name: 'from cheap to expensive'
          },
          {
            name: 'from expensive to cheap'
          },
          {
            name: 'by name'
          },
          {
            name: 'new product'
          },
          {
            name: 'by reviews'
          }
        ]
      },
      page: {
        title: 'Show',
        items: [
          {
            number: 12
          },
          {
            number: 24
          },
          {
            number: 36
          },
          {
            number: 48
          },
        ],
        text: 'products per page'
      },
      pagination: {
        items: [
          {
            link: 1
          },
          {
            link: 2
          },
          {
            link: 3
          },
          {
            link: '...'
          },
          {
            link: 10
          }
        ]
      }
    };
  }
};
</script>

<template>
  <div class="toolbar">
    <ToolbarSort
      :title="sort.title"
      :items="sort.items"
    />
    <ToolbarPage
      :title="page.title"
      :items="page.items"
      :text="page.text"
    />
    <ToolbarPagination
      :items="pagination.items"
    />
  </div>
</template>

<style scoped lang="scss">
.toolbar {
  display: flex;
  height: 44px;
  margin-bottom: 32px;
}
</style>
