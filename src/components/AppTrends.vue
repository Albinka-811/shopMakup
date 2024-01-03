<script>
export default {
  name: 'AppTrends'
};
</script>

<template>
  <div class="trends">
    <div class="trends-wrapper">
      <div class="trends-header">
        <h2 class="trends-header__title">Trending now</h2>
        <div class="trends-header-arrows">
          <button class="trends-header-arrows-btn" type="button">
            <img class="trends-header-arrows-btn__prev" src="~@assets/icons/prev-btn.png">
          </button>
          <button class="trends-header-arrows-btn" type="button">
            <img class="trends-header-arrows-btn__next" src="~@assets/icons/next-btn.png">
          </button>
        </div>
      </div>
      <ul class="trends-list">
        <li class="trends-list-items">
          <a class="trends-list-items-package">
            <img class="trends-list-items-package__product" src="~@assets/images/product7.png">
            <span class="trends-list-items-package-rating">
                            <img class="trends-list-items-package-rating__stars" src="~@assets/icons/rating5.png">
                        </span>
          </a>
          <span class="trends-list-items-like">
                        <img class="trends-list-items-like__icons" src="~@assets/icons/likeGr.png">
                    </span>
          <a class="trends-list-items-depiction" href="#">Shirt with insertion lace trims</a>
          <span class="trends-list-items-price">$49.95</span>
        </li>
        <li class="trends-list-items">
          <a class="trends-list-items-package">
            <img class="trends-list-items-package__product" src="~@assets/images/product8.png">
            <span class="trends-list-items-package-rating">
                            <img class="trends-list-items-package-rating__stars" src="~@assets/icons/rating4.png">
                        </span>
          </a>
          <span class="trends-list-items-like">
                        <img class="trends-list-items-like__icons" src="~@assets/icons/likeGr.png">
                    </span>
          <a class="trends-list-items-depiction" href="#">Chrono watch with blue leather belt</a>
          <span class="trends-list-items-price">$120.60</span>
        </li>
        <li class="trends-list-items">
          <a class="trends-list-items-package">
            <img class="ribbon-list-items-package__product" src="~@assets/images/product9.png">
          </a>
          <span class="trends-list-items-like">
                        <img class="trends-list-items-like__icons" src="~@assets/icons/likeGr.png">
                    </span>
          <a class="trends-list-items-depiction" href="#">Check coat with colour contrast</a>
          <span class="trends-list-items-price">$183.45</span>
        </li>
      </ul>
      <button class="trends-wrapper-open" type="button">Explore top sales</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.trends {
  background-color: #E5E8ED;
  padding-top: 80px;
  margin-bottom: 100px;

  &-header {
    display: flex;
    align-items: center;
    max-width: 1230px;
    margin: 0 auto;
    justify-content: center;

    &__title {
      font-family: $fontLato;
      font-weight: 900;
      font-size: $fontSizeXXL;
      color: $black;
      margin: 0 873px 0 0;
    }

    &-arrows {
      &-btn {
        border: none;
        background-color: transparent;
        outline: none;
        border-radius: 50%;
        padding: 0;

        &__prev {
          margin-right: 12px;
        }

        &__next {
        }
      }
    }
  }

  &-list {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    position: relative;
    margin: 60px 0 80px;

    &-items {
      display: flex;
      flex-direction: column;
      width: 390px;
      margin-right: 30px;
      position: relative;

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
        font-size: $fontSizeM;
        color: $black;
        margin: 0 0 16px 11px;
      }
    }
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-open {
      border: 1px solid $primary;
      border-radius: 4px;
      padding: 16px 49px;
      background-color: transparent;
      color: $primary;
      margin-bottom: 80px;
      outline: none;
    }
  }
}
</style>
