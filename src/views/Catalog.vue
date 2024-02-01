<script>
import CardItem from '@/components/CatalogCardItem.vue';
import SideBar from '@/components/CatalogSideBar.vue';
import BreadCrumbs from '@/components/CatalogBreadcrumb.vue';
import AppSvgIcon from '@/components/AppSvgIcon.vue';
import CatalogToolbar from '@/components/CatalogToolbar.vue';


export default {
  name: 'AppCatalog',
  components: {
    SideBar,
    CardItem,
    BreadCrumbs,
    AppSvgIcon,
    CatalogToolbar
  },
  data () {
    return {
      cards: [
        {
          rating: 5, // 0 -> 5
          id: '1',
          img: 'assets/images/catalogProduct1.png',
          isLiked: false,
          price: 49.95,
          title: 'Shirt with insertion lace trims',
          discount: 0 // null | number
        },
        {
          rating: 0, // 0 -> 5
          id: '2',
          img: 'assets/images/catalogProduct2.png',
          isLiked: false,
          price: 40.00,
          title: 'Mid-rise slim cropped fit jeans',
          discount: 0 // null | number
        },
        {
          rating: 5, // 0 -> 5
          id: '3',
          img: 'assets/images/catalogProduct3.png',
          isLiked: false,
          price: 18.15,
          title: 'Black and white sport cap',
          discount: 0 // null | number
        },
        {
          rating: 4, // 0 -> 5
          id: '4',
          img: 'assets/images/catalogProduct4.png',
          isLiked: false,
          price: 20.40,
          title: 'Green baby romper',
          discount: 0 // null | number
        },
        {
          rating: 0, // 0 -> 5
          id: '5',
          img: 'assets/images/catalogProduct5.png',
          isLiked: false,
          price: 183.45,
          title: 'Check coat with colour contrast',
          discount: 0 // null | number
        },
        {
          rating: 5, // 0 -> 5
          id: '6',
          img: 'assets/images/catalogProduct6.png',
          isLiked: false,
          price: 29.95,
          title: 'Red dangle earrings',
          discount: 0 // null | number
        },
        {
          rating: 4, // 0 -> 5
          id: '7',
          img: 'assets/images/catalogProduct7.png',
          isLiked: false,
          price: 120.60,
          title: 'Chrono watch with blue...',
          discount: 0 // null | number
        },
        {
          rating: 0, // 0 -> 5
          id: '8',
          img: 'assets/images/catalogProduct8.png',
          isLiked: false,
          price: 30.40,
          title: 'Baby shoes with laces',
          discount: 0 // null | number
        },
        {
          rating: 4, // 0 -> 5
          id: '9',
          img: 'assets/images/catalogProduct9.png',
          isLiked: false,
          price: 15.50,
          title: 'Basic hooded sweatshirt in pink',
          discount: 0.5 // null | number
        },
        {
          rating: 0, // 0 -> 5
          id: '10',
          img: 'assets/images/catalogProduct10.png',
          isLiked: false,
          price: 40.00,
          title: 'Skinny push-up jeans',
          discount: 0.5 // null | number
        },
        {
          rating: 5, // 0 -> 5
          id: '11',
          img: 'assets/images/catalogProduct11.png',
          isLiked: false,
          price: 89.50,
          title: 'Leather crossbody bag with...',
          discount: 0.5 // null | number
        },
        {
          rating: 0, // 0 -> 5
          id: '12',
          img: 'assets/images/catalogProduct12.png',
          isLiked: false,
          price: 85.50,
          title: 'Men fashion gray shoes',
          discount: 0 // null | number
        }
      ],
    };
  }
};
</script>

<template>
  <main class="main">
    <div class="breadcrumb-wrapper">
      <div class="breadcrumb">
        <BreadCrumbs/>
      </div>
    </div>
    <div class="general">
      <div class="general-sidebar">
        <button class="general-sidebar-filterClick">
          <AppSvgIcon name="filter"/>
          Hide filters
        </button>
        <SideBar/>
      </div>
      <div class="general-container">
        <CatalogToolbar/>
        <div class="general-container-products">
          <CardItem
            v-for="card in cards"
            :key="card.id"
            :img="card.img"
            :rating="card.rating"
            :discount="card.discount"
            :price="card.price"
            :title="card.title"
          />
        </div>
        <CatalogToolbar/>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.breadcrumb {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1230px;

  &-wrapper {
    background-color: #F4F5F6;
  }
}

.general {
  display: flex;
  justify-content: space-between;
  margin: 32px auto 80px;
  width: 1230px;

  &-sidebar {
    width: 255px;

    &-filterClick {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 44px;
      background-color: $primary;
      border: none;
      border-radius: 4px;
      padding: 0 32px;
      margin-bottom: 32px;

      font-family: $fontLato;
      font-weight: 700;
      font-size: 14px;
      color: $white;
    }
  }

  &-container {
    &-products {
      display: grid;
      grid: repeat(auto-fit, 413px) / repeat(3, 285px);
      grid-column-gap: 30px;
      grid-row-gap: 60px;
      margin-bottom: 80px;
    }
  }
}
</style>



