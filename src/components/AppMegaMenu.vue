<script>
export default {
  name: 'AppMegaMenu',

  setup () {
    const shoesList = {
      title: 'Shoes',
      items: [
        {
          name: 'Boots',
          link: '/boots'
        },
        {
          name: 'Flat shoes',
          link: '/flat_shoes'
        },
        {
          name: 'Heels',
          link: '/heels'
        },
        {
          name: 'Sandals',
          link: '/sandals'
        },
        {
          name: 'Mules',
          link: '/mules'
        },
        {
          name: 'Sliders',
          link: '/sliders'
        },
        {
          name: 'Slippers',
          link: '/slippers'
        },
        {
          name: 'Sneakers',
          link: '/sneakers'
        },
        {
          name: 'Leather',
          link: '/leather'
        }
      ],
    };
    const categories = {
      items: [
        {
          name: 'New collection',
          link: '/new_collection'
        },
        {
          name: 'Best Sellers',
          link: '/best_Sellers'
        },
        {
          name: 'Plus Size',
          link: '/plus_Size'
        },
        {
          name: 'Sale up to 70%',
          link: '/sale_up_to_70%'
        }
      ],
    };
    const clothes = {
      title: 'Clothes',
      items: [
        {
          name: 'Coats',
          link: '/coats'
        },
        {
          name: 'Jackets',
          link: '/jackets'
        },
        {
          name: 'Suits',
          link: '/suits'
        },
        {
          name: 'Dresses',
          link: '/dresses'
        },
        {
          name: 'Cardigans & Sweaters',
          link: '/cardigans_sweaters'
        },
        {
          name: 'Sweatshirts & Hoodies',
          link: '/sweatshirts_hoodies'
        },
        {
          name: 'T-shirts & Tops',
          link: '/t-shirts_tops'
        },
        {
          name: 'Pants',
          link: '/pants'
        },
        {
          name: 'Jeans',
          link: '/jeans'
        },
        {
          name: 'Shorts',
          link: '/shorts'
        },
        {
          name: 'Skirts',
          link: '/skirts'
        },
        {
          name: 'Lingerie & Nightwear',
          link: '/lingerie_nightwear'
        },
        {
          name: 'Sportswear',
          link: '/sportswear'
        },
        {
          name: 'Swimwear',
          link: '/swimwear'
        },
      ],
    };
    const accessories = {
      title: 'Accessories',
      items: [
        {
          name: 'Bags & Backpacks',
          link: '/bags_backpacks'
        },
        {
          name: 'Hats & scarves',
          link: '/hats_scarves'
        },
        {
          name: 'Hair accessories',
          link: '/hair_accessories'
        },
        {
          name: 'Belts',
          link: '/belts'
        },
        {
          name: 'Jewellery',
          link: '/jewellery'
        },
        {
          name: 'Watches',
          link: '/watches'
        },
        {
          name: 'Sunglasses',
          link: '/sunglasses'
        },
        {
          name: 'Purses',
          link: '/purses'
        },
        {
          name: 'Gloves',
          link: '/gloves'
        },
        {
          name: 'Socks & tights',
          link: '/socks_tights'
        },
      ],
    };

    return {
      shoesList,
      categories,
      clothes,
      accessories
    };
  }
};
</script>

<template>
  <div class="menu-wrapper">
    <div class="menu">
      <ul class="menu-nav">
        <li class="menu-nav-goods">
          <ul class="menu-nav-goods-list">
            <li class="menu-nav-goods-list-item" v-for="item in categories.items" :key="item.name">
              <router-link :to="item.link" class="menu-nav-goods-list-item__link">{{ item.name }}</router-link>
            </li>
          </ul>
        </li>
        <li class="menu-nav-goods">
          <h3 class="menu-nav-goods__title">{{ clothes.title }}</h3>
          <ul class="menu-nav-goods-list">
            <li class="menu-nav-goods-list-item" v-for="item in clothes.items" :key="item.name">
              <router-link :to="item.link" class="menu-nav-goods-list-item__link">{{ item.name }}</router-link>
            </li>
          </ul>
        </li>
        <li class="menu-nav-goods">
          <h3 class="menu-nav-goods__title">{{ shoesList.title }}</h3>
          <ul class="menu-nav-goods-list">
            <li class="menu-nav-goods-list-item" v-for="item in shoesList.items" :key="item.name">
              <router-link :to="item.link" class="menu-nav-goods-list-item__link">{{ item.name }}</router-link>
            </li>
          </ul>
        </li>
        <li class="menu-nav-goods">
          <h3 class="menu-nav-goods__title">{{ accessories.title }}</h3>
          <ul class="menu-nav-goods-list">
            <li class="menu-nav-goods-list-item" v-for="item in accessories.items" :key="item.name">
              <router-link :to="item.link" class="menu-nav-goods-list-item__link">{{ item.name }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <img src="../assets/icons/dividerLong.png" alt=""/>
      <div class="menu-banner">
        <img class="menu-banner__image" src="../assets/images/menuImage.png" alt=""/>
        <span class="menu-banner__text">Back to school. Sale up to 50%</span>
        <button class="menu-banner-btn" type="submit">
          See offers
          <img class="menu-banner-btn__arrow" src="../assets/icons/right.png" alt=""/>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1230px;
  padding: 20px 0 0;

  &-wrapper {
    display: none;
    position: absolute;
    top: 145px;
    left: 0;
    right: 0;
    background-color: white;
    border-radius: 0 0 4px 4px;
    border: 1px solid #E5E8ED;
    z-index: 11;
  }

  &-nav {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 68px 0 0;

    &-goods {
      margin-right: 30px;
      width: 180px;

      &:last-child {
        margin-right: 0;
      }

      &__title {
        text-transform: uppercase;
        font-family: $fontLato;
        font-weight: 700;
        font-size: 14px;
        color: $black;
        margin: 0 0 8px;
      }

      &-list {
        list-style: none;
        padding: 0;
        margin: 0;

        &-item {
          margin-bottom: 8px;

          &:last-child {
            margin-bottom: 0;
          }

          //&:last-of-type &__link {
          //  color: red;
          //}

          &__link {
            font-family: $fontLato;
            font-weight: 400;
            font-size: 14px;
            color: $lightBlack;
            text-decoration: none;
          }
        }
      }
    }
  }

  &-banner {
    display: flex;
    flex-flow: column;
    margin-left: 68px;

    &__image {
      margin-bottom: 16px;
    }

    &__text {
      font-family: $fontLato;
      font-weight: 700;
      font-size: 14px;
      color: $black;
      margin-bottom: 16px;
    }

    &-btn {
      display: flex;
      padding: 0 24px;
      align-items: center;
      height: 36px;
      width: 130px;
      border: 1px solid $primary;
      border-radius: 4px;
      background: transparent;
      font-family: $fontLato;
      font-weight: 700;
      font-size: 12px;
      color: $primary;
      outline: none;

      &__arrow {
        margin-left: 8px;
      }
    }
  }
}
</style>
