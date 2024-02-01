<script>
import FilterItem from '@/components/FilterItem.vue';
import FilterSize from '@/components/FilterSize.vue';
import FilterColor from '@/components/FilterColor.vue';
import FilterPrice from '@/components/FilterPrice.vue';

export default {
  name: 'SideBar',
  components: {
    FilterItem,
    FilterSize,
    FilterColor,
    FilterPrice
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

      colorFilter: {
        title: 'Color',
        items: [
          {
            color: '#000000',
            name: 'Black',
          },
          {
            color: '#C0DDED',
            name: 'Blue-grey',
          },
          {
            color: '#FCD164',
            name: 'Yellow',
          },
          {
            color: '#F75151',
            name: 'Red',
          },
          {
            color: '#0C2C7E',
            name: 'Dark blue',
          },
          {
            color: '#D8C1AD',
            name: 'Beige',
          },
          {
            color: '#874E19',
            name: 'Brown',
          },
          {
            color: '#9A9494',
            name: 'Gray',
          },
          {
            color: '#A27AC9',
            name: 'Purple',
          },
          {
            color: '#67BA92',
            name: 'Green',
          },
          {
            color: '#FB9620',
            name: 'Orange',
          },
          {
            color: '#F1F1F1',
            name: 'White',
          },
          {
            color: '#00FF00',
            name: 'Lime',
          },
          {
            color: '#00FFFF',
            name: 'Aqua',
          },
          {
            color: '#800000',
            name: 'Marron',
          },
          {
            color: '#808000',
            name: 'Olive',
          },



        ]
      },

      materialFilter: {
        title: 'Material',
        items: [
          {
            active: true,
            name: 'Cotton',
            count: 162,
          },
          {
            active: false,
            name: 'Synthetics',
            count: 12,
          },
          {
            active: false,
            name: 'Napa leather',
            count: 26,
          },
          {
            active: false,
            name: 'Leather',
            count: 5,
          },
          {
            active: false,
            name: 'Cashmere',
            count: 41,
          },
          {
            active: false,
            name: 'Denim',
            count: 48,
          },
          {
            active: false,
            name: 'Silk',
            count: 15,
          },
          {
            active: false,
            name: 'Chiffon',
            count: 17,
          },
          {
            active: false,
            name: 'Suede',
            count: 11,
          },
          {
            active: false,
            name: 'Satin',
            count: 7,
          },
          {
            active: false,
            name: 'Jersey',
            count: 23,
          },
          {
            active: false,
            name: 'Lace',
            count: 13,
          },
          {
            active: false,
            name: 'Woollen',
            count: 19,
          },
          {
            active: false,
            name: 'Linen',
            count: 25,
          }
        ]
      },

      brandFilter: {
        title: 'Brand',
        items: [
          {
            active: true,
            name: 'Adidas',
            count: 162,
          },
          {
            active: false,
            name: 'Ann Taylor',
            count: 12,
          },
          {
            active: false,
            name: 'Armani',
            count: 26,
          },
          {
            active: false,
            name: 'Banana Republic',
            count: 5,
          },
          {
            active: false,
            name: 'Calvin Klein',
            count: 41,
          },
          {
            active: false,
            name: 'Columbia',
            count: 48,
          },
          {
            active: false,
            name: 'H&M',
            count: 68,
          },
          {
            active: false,
            name: 'Tommy Hilfiger',
            count: 37,
          },
          {
            active: false,
            name: 'Nike',
            count: 74,
          },
          {
            active: false,
            name: 'Zara',
            count: 19,
          },
          {
            active: false,
            name: 'Lacoste',
            count: 17,
          },
          {
            active: false,
            name: 'Puma',
            count: 15,
          }
        ]
      }
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
  <FilterColor
    :title="colorFilter.title"
    :items="colorFilter.items"
  />
  <FilterItem
    :title="materialFilter.title"
    :items="materialFilter.items"
  />
  <FilterItem
    :title="brandFilter.title"
    :items="brandFilter.items"
  />
  <FilterPrice/>
</template>

<style lang="scss" scoped>

</style>
