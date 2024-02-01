<script>
export default {
  name: 'AppRibbon',

  setup () {
    const ribbon = {
      items: [
        {
          id: 1,
          isLaked: false,
          name: 'Black and white sport cap',
          img: 'assets/images/product1.png',
          rating: 5,
          price: 18.15,
        },
        {
          id: 2,
          isLaked: false,
          name: 'Metal bridge sunglasses',
          img: 'assets/images/product2.png',
          rating: 0,
          price: 89.95,
        },
        {
          id: 3,
          isLaked: false,
          name: 'Green baby romper',
          img: 'assets/images/product3.png',
          rating: 4,
          price: 20.40,
        },
        {
          id: 4,
          isLaked: false,
          name: 'Mid-rise slim cropped fit jeans',
          img: 'assets/images/product4.png',
          rating: 0,
          price: 40.00,
        },
        {
          id: 5,
          isLaked: false,
          name: 'Red dangle earrings',
          img: 'assets/images/product5.png',
          rating: 5,
          price: 29.95,
        },
        {
          id: 6,
          isLaked: false,
          name: 'Baby shoes with laces',
          img: 'assets/images/product6.png',
          rating: 0,
          price: 30.60,
        }
      ],
    };

    return {
      ribbon
    };
  },
  methods: {
    getImageUrl (name) {
      return new URL('../' + name, import.meta.url).href;
    }
  }
};
</script>

<template>
  <div class="ribbon">
    <h2 class="ribbon__title">New arrivals</h2>
    <span class="ribbon-text">
      Check out our latest arrivals for the upcoming season
      <br>
      <a class="ribbon-text__link" href="#">See the collection here</a>
    </span>
    <div class="ribbon-wrapper">
      <ul class="ribbon-list">
        <li class="ribbon-list-items" v-for="item in ribbon.items" :key="item.name">
          <a class="ribbon-list-items-package">
            <img class="ribbon-list-items-package__product" :src="getImageUrl(item.img)" alt="">
            <span class="ribbon-list-items-package-rating">
              <img class="ribbon-list-items-package-rating__stars" src="../assets/icons/rating5.png" alt="">
            </span>
          </a>
          <span class="ribbon-list-items-like">
            <img class="ribbon-list-items-like__icons" src="../assets/icons/likeGr.png" alt="">
          </span>
          <a class="ribbon-list-items-depiction" href="#">{{ item.name }}</a>
          <span class="ribbon-list-items-price">${{ item.price }}</span>
        </li>
      </ul>
    </div>
    <div class="ribbon-line">
      <span class="ribbon-line__btn"></span>
      <span class="ribbon-line__btn"></span>
      <span class="ribbon-line__btn"></span>
      <span class="ribbon-line__btn"></span>
      <span class="ribbon-line__btn"></span>
      <span class="ribbon-line__btn"></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ribbon {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 180px;
  overflow: hidden;

  &__title {
    margin: 0 0 24px 0;
    font-family: $fontLato;
    font-weight: 900;
    font-size: $fontSizeXXL;
    color: $black;
  }

  &-text {
    font-family: $fontLato;
    font-weight: 400;
    font-size: 18px;
    color: $darkGray;
    text-align: center;
    margin-bottom: 60px;

    &__link {
      font-family: $fontLato;
      font-weight: 400;
      font-size: 18px;
      color: $primary;
    }
  }

  &-list {
    padding: 0;
    list-style: none;
    margin: 0 0 80px 0;
    display: flex;
    justify-content: space-around;
    position: relative;

    &-items {
      display: flex;
      flex-direction: column;
      width: 285px;
      margin-right: 30px;
      position: relative;

      @media (max-width: 1708px) {
        &:first-child,
        &:nth-child(2) {
          display: none;
        }
      }

      &:last-child {
        margin-right: 0;
      }

      &-package {
        position: relative;

        &-rating {
          position: absolute;
          right: 16px;
          top: 16px;
        }
      }

      &-like {
        position: relative;
        margin-bottom: 16px;

        &__icons {
          right: 16px;
          position: absolute;
          bottom: 16px;
          background: $white;
          padding: 9px 8px;
          border-radius: 50%;
        }
      }

      &-depiction {
        font-family: $fontLato;
        font-weight: 400;
        font-size: 18px;
        color: $lightBlack;
        text-decoration: none;
        margin: 0 0 8px 16px;
      }

      &-price {
        font-family: $fontLato;
        font-weight: 700;
        font-size: $fontSizeS;
        color: $black;
        margin: 0 0 16px 16px;
      }
    }
  }

  &-line {
    display: flex;
    flex-direction: row;
    justify-content: center;

    &__btn {
      border-bottom: 3px solid $lightBlack;
      width: 30px;
      margin-right: 12px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
