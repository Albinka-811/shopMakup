<script>
export default {
  name: "AppBanners"
}
</script>

<template>
  <div class="banners">
    <div class="banners-row">
      <div class="banners-row-content background1">
        <span class="banners-row-content__text">Summer Collections</span>
        <h2 class="banners-row-content__title">Sale Up to 70%</h2>
        <button class="banners-row-content__button">Explore new prices</button>
      </div>
      <div class="banners-row-content background2">
        <span class="banners-row-content__text">Deal of the week</span>
        <h2 class="banners-row-content__title">Stay Warm With Our <br> New Sweaters</h2>
        <button class="banners-row-content__button2">Shop now</button>
        <p class="banners-row-content__text">Limited time offer</p>
      </div>
    </div>
    <div class="banners-row">
      <div class="banners-row-content background3">
        <span class="banners-row-content__text">New collection</span>
        <h2 class="banners-row-content__title">Shoes & Bags <br> autumn / winter 2023</h2>
        <button class="banners-row-content-button3">See offers
          <img class="banners-row-content-button3__arrow" src="../assets/icons/right.png">
        </button>
      </div>
      <div class="banners-row-content background4">
        <span class="banners-row-content__text">For All new Email Subscribers</span>
        <h2 class="banners-row-content__title">Get 5% Off & Free Delivery</h2>
        <form class="banners-row-content-form">
          <label class="banners-row-content-form-label">Email <br>
            <input class="banners-row-content-form-label__input" type="text"
                   placeholder="Your working email">
          </label>
          <button class="banners-row-content-form__sub" type="submit">Subscribe</button>
        </form>
        <span class="banners-row-content__text"> *Sign up to be the first to hear about exclusive deals,
                        special offers and upcoming collections.
                    </span>
        <img class="banners-row-content__img" src="../assets/images/banner-img4.png">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.background1, .background4 {
  width: 735px;
  height: 500px;
}

.background2, .background3 {
  width: 1109px;
  height: 500px;
}

.background1 {
  background-image: url("/src/assets/images/banner-img1.png");
}

.background2 {
  background-image: url("/src/assets/images/banner-img2.png");
}

.background3 {
  background-image: url("/src/assets/images/banner-img3.png");
}

.background4 {
  background-color: #E5E8ED;
}

.banners {
  margin-bottom: 180px;

  &-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    &-content {
      margin-right: 16px;
      padding: 60px 0 0 60px;
      position: relative;

      &:last-child {
        margin-right: 0;
      }

      &__text {
        font-family: $fontLato;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
        color: $black;
        margin-bottom: 12px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      &__title {
        font-family: $fontLato;
        font-weight: 900;
        font-size: $fontSizeXL;
        color: $black;
        margin: 0 0 40px;
      }

      &__button, &__button2 {
        border: 1px solid $primary;
        border-radius: 4px;
        padding: 14px 34px;
        font-family: $fontLato;
        background-color: transparent;
        font-weight: 700;
        font-size: 14px;
        color: $primary;
        outline: none;
      }

      &__button2 {
        margin-bottom: 80px;
      }

      &-button3 {
        display: flex;
        border: 1px solid $primary;
        border-radius: 4px;
        padding: 14px 34px;
        font-family: $fontLato;
        background-color: transparent;
        font-weight: 700;
        font-size: 14px;
        color: $primary;
        outline: none;

        &__arrow {
          margin-left: 8px;
        }
      }

      &-form {
        margin-bottom: 20px;

        &-label {
          margin-bottom: 8px;

          &__input {
            border: 1px solid $lightGray;
            border-radius: 4px;
            border-right: none;
            width: 230px;
            padding: 12px 16px;
            outline: none;

            &::placeholder {
              font-family: $fontLato;
              font-weight: 400;
              font-size: 14px;
              color: $gray;
            }
          }
        }

        &__sub {
          border: none;
          border-radius: 4px;
          padding: 14px 34px;
          font-family: $fontLato;
          background-color: $primary;
          font-weight: 700;
          font-size: 14px;
          color: $white;
          outline: none;
        }
      }

      &__img {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
}

</style>
