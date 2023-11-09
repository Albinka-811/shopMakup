<script>
export default {
  name: "AppMegaMenu"
}
</script>

<template>
  <div class="menu-wrapper">
    <div class="menu">
      <ul class="menu-nav">
        <li class="menu-nav-goods">
          <ul class="menu-nav-goods-list">
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">New collection</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Best Sellers</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Plus Size</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Sale up to 70%</a>
            </li>
          </ul>
        </li>

        <li class="menu-nav-goods">
          <a class="menu-nav-goods__title">Clothes</a>
          <ul class="menu-nav-goods-list">
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Coats</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Jackets</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Suits</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Dresses</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Cardigans & sweaters</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Sweatshirts & hoodies</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">T-shirts & tops</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Pants</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Jeans</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Shorts</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Skirts</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Lingerie & nightwear</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Sportswear</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Swimwear</a>
            </li>
          </ul>
        </li>

        <li class="menu-nav-goods">
          <a class="menu-nav-goods__title">Shoes</a>
          <ul class="menu-nav-goods-list">
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Boots</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Flat shoes</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Heels</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Sandals</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Mules</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Sliders</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Slippers</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Sneakers</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Leather</a>
            </li>
          </ul>
        </li>

        <li class="menu-nav-goods">
          <a class="menu-nav-goods__title">Accessories</a>
          <ul class="menu-nav-goods-list">
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Bags & bagpacks</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Hats & scarves</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Hair accessories</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Belts</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Jewellery</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Watches</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Sunglasses</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Purses</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Gloves</a>
            </li>
            <li class="menu-nav-goods-list-item">
              <a class="menu-nav-goods-list-item__link">Socks & tights</a>
            </li>
          </ul>
        </li>
      </ul>
      <img src="../assets/icons/dividerLong.png" />
      <div class="menu-banner">
        <img class="menu-banner__image" src="../assets/images/menuImage.png" />
        <span class="menu-banner__text">Back to school. Sale up to 50%</span>
        <button class="menu-banner-btn" type="submit">
          See offers
          <img class="menu-banner-btn__arrow" src="../assets/icons/right.png" />
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
    //display: none;
    position: absolute;
    top: 145px;
    left: 0;
    right: 0;
    background-color: white;
    border-radius: 0 0 4px 4px;
    border: 1px solid #E5E8ED;
    z-index: 0;
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

          &:last-of-type &__link {
            color: red;
          }

          &__link {
            font-family: $fontLato;
            font-weight: 400;
            font-size: 14px;
            color: $lightBlack;
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
