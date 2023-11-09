<script>
export default {
  name: "AppRibbon"
}
</script>

<template>
  <div class="ribbon">
    <h2 class="ribbon__title">New arrivals</h2>
    <span class="ribbon-text">
                Check out our latest arrivals for the upcoming season <br>
                <a class="ribbon-text__link" href="#">See the collection here</a>
            </span>
    <div class="ribbon-wrapper">
      <ul class="ribbon-list">
        <li class="ribbon-list-items">
          <a class="ribbon-list-items-package">
            <img class="ribbon-list-items-package__product" src="../assets/images/product1.png">
            <span class="ribbon-list-items-package-rating">
                                <img class="ribbon-list-items-package-rating__stars" src="../assets/icons/rating5.png">
                            </span>
          </a>
          <span class="ribbon-list-items-like">
                            <img class="ribbon-list-items-like__icons" src="../assets/icons/likeGr.png">
                        </span>
          <a class="ribbon-list-items-depiction" href="#">Black and white sport cap</a>
          <span class="ribbon-list-items-price">$18.15</span>
        </li>
        <li class="ribbon-list-items">
          <a class="ribbon-list-items-package">
            <img class="ribbon-list-items-package__product" src="../assets/images/product2.png">
          </a>
          <span class="ribbon-list-items-like">
                            <img class="ribbon-list-items-like__icons" src="../assets/icons/likeGr.png">
                        </span>
          <a class="ribbon-list-items-depiction" href="#">Metal bridge sunglasses</a>
          <span class="ribbon-list-items-price">$89.95</span>
        </li>
        <li class="ribbon-list-items">
          <a class="ribbon-list-items-package">
            <img class="ribbon-list-items-package__product" src="../assets/images/product3.png">
            <span class="ribbon-list-items-package-rating">
                                <img class="ribbon-list-items-package-rating__stars" src="../assets/icons/rating4.png">
                            </span>
          </a>
          <span class="ribbon-list-items-like">
                            <img class="ribbon-list-items-like__icons" src="../assets/icons/likeGr.png">
                        </span>
          <a class="ribbon-list-items-depiction" href="#">Green baby romper</a>
          <span class="ribbon-list-items-price">$20.40</span>
        </li>
        <li class="ribbon-list-items">
          <a class="ribbon-list-items-package">
            <img class="ribbon-list-items-package__product" src="../assets/images/product4.png">
          </a>
          <span class="ribbon-list-items-like">
                            <img class="ribbon-list-items-like__icons" src="../assets/icons/likeGr.png">
                        </span>
          <a class="ribbon-list-items-depiction" href="#">Mid-rise slim cropped fit jeans</a>
          <span class="ribbon-list-items-price">$40.00</span>
        </li>
        <li class="ribbon-list-items">
          <a class="ribbon-list-items-package">
            <img class="ribbon-list-items-package__product" src="../assets/images/product5.png">
            <span class="ribbon-list-items-package-rating">
                                <img class="ribbon-list-items-package-rating__stars" src="../assets/icons/rating5.png">
                            </span>
          </a>
          <span class="ribbon-list-items-like">
                            <img class="ribbon-list-items-like__icons" src="../assets/icons/likeGr.png">
                        </span>
          <a class="ribbon-list-items-depiction" href="#">Red dangle earrings</a>
          <span class="ribbon-list-items-price">$29.95</span>
        </li>
        <li class="ribbon-list-items">
          <a class="ribbon-list-items-package">
            <img class="ribbon-list-items-package__product" src="../assets/images/product6.png">
          </a>
          <span class="ribbon-list-items-like">
                            <img class="ribbon-list-items-like__icons" src="../assets/icons/likeGr.png">
                        </span>
          <a class="ribbon-list-items-depiction" href="#">Baby shoes with laces</a>
          <span class="ribbon-list-items-price">$30.60</span>
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
