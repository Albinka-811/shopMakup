<script>
import FilterItem from '@/components/FilterItem.vue';
import FilterSize from '@components/FilterSize.vue';

export default {
  name: 'SideBar',
  components: {
    FilterItem,
    FilterSize
  },
  data () {
    return {
      clothesFilter: {
        title: 'Clothes',
        items: [
          {
            active: true,
            name: 'Coats',
            count: 16,
          },
          {
            active: false,
            name: 'Suits',
            count: 5,
          },
          {
            active: false,
            name: 'Dresses',
            count: 11,
          },
          {
            active: false,
            name: 'Cardigans & sweaters',
            count: 18,
          },
          {
            active: false,
            name: 'Sweatshirts & hoodies',
            count: 21,
          },
          {
            active: false,
            name: 'Jeans',
            count: 17,
          },
          {
            active: false,
            name: 'Skirts',
            count: 9,
          },
          {
            active: false,
            name: 'Pants',
            count: 15,
          },
          {
            active: false,
            name: 'Shorts',
            count: 7,
          },
          {
            active: false,
            name: 'T-shirts & tops',
            count: 13,
          },
          {
            active: false,
            name: 'Lingerie & nightwear',
            count: 5,
          },
          {
            active: false,
            name: 'Sportswear',
            count: 9,
          },
          {
            active: false,
            name: 'Swimwear',
            count: 8,
          }
        ]
      },

      sizeFilter: {
        title: 'Size',
        items: [
          {
            active: true,
            name: 'XS',
            count: 16,
          },
          {
            active: false,
            name: 'S',
            count: 12,
          },
          {
            active: false,
            name: 'M',
            count: 5,
          },
          {
            active: false,
            name: 'L',
            count: 11,
          },
          {
            active: false,
            name: 'XL',
            count: 18,
          },
          {
            active: false,
            name: 'Plus Size',
            count: 4,
          }
        ]
      },
    };
  }
};
</script>

<template>
  <FilterItem
    :title="clothesFilter.title"
    :items="clothesFilter.items"
  />
  <FilterSize
    :title="sizeFilter.title"
    :items="sizeFilter.items"
  />
</template>

<style lang="scss" scoped>

</style>
