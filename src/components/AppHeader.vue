<script setup>
import AppMegaMenu from '@/components/AppMegaMenu.vue';
</script>

<template>
  <header class="header">
    <div class="header-top-wrapper">
      <div class="header-top">
        <div class="header-top-content">
                <span class="header-top-content-data"> Available 24/7 at
                    <a class="header-top-content-data__number" href="tel:4055550128">(405) 555-0128</a>
                </span>
        </div>
        <div class="header-top-content">
          <ul class="header-top-content-list">
            <li class="header-top-content-list-items">
              <a class="header-top-content-list-items__link" href="#">Delivery & returns</a>
            </li>
            <li class="header-top-content-list-items">
              <a class="header-top-content-list-items__link" href="#">Track order</a>
            </li>
            <li class="header-top-content-list-items">
              <a class="header-top-content-list-items__link" href="#">Blog</a>
            </li>
            <li class="header-top-content-list-items">
              <a class="header-top-content-list-items__link" href="#">Contacts</a>
            </li>
          </ul>
        </div>
        <div class="header-top-content">
          <img class="header-top-content__flag" src="~@assets/icons/flag-usa.png">
          <select class="header-top-content-select">
            <option value="#">Eng/$</option>
            <option value="1">Ukr/</option>
            <option value="2">/</option>
          </select>
        </div>
        <div class="header-top-content">
          <img class="header-top-content__person" src="~@assets/icons/person.png">
          <button class="header-top-content__log" type="button">Log in/</button>
          <button class="header-top-content__register" type="button">Register</button>
        </div>
      </div>
    </div>
    <div class="header-basic-wrapper">
      <div class="header-basic">
        <div class="header-basic-content">
          <img class="header-basic-content__logo" src="~@assets/icons/logoCreatex.png">
        </div>
        <div class="header-basic-content">
          <ul class="header-basic-content-list">
            <li class="header-basic-content-list-items">
              <router-link class="header-basic-content-list-items__link" to="/catalog/women/clothes">Women</router-link>
            </li>
            <li class="header-basic-content-list-items">
              <router-link class="header-basic-content-list-items__link" to="/men/catalog/clothes">Men</router-link>
            </li>
            <li class="header-basic-content-list-items">
              <a class="header-basic-content-list-items__link" href="#">Girls</a>
            </li>
            <li class="header-basic-content-list-items">
              <a class="header-basic-content-list-items__link" href="#">Boys</a>
            </li>
            <li class="header-basic-content-list-items">
              <a class="header-basic-content-list-items__link" href="#">Sale</a>
            </li>
          </ul>
        </div>
        <div class="header-basic-content">
          <input class="header-basic-content-search" name="text"
                 placeholder="Search for products...">
          <img class="header-basic-content__loupe" src="~@assets/icons/loupe.png">
        </div>
        <div class="header-basic-content">
          <div class="header-basic-content-toolbar">
            <img class="header-basic-content-toolbar__like" src="~@assets/icons/like.png">
            <span class="header-basic-content-toolbar__count">2</span>
          </div>
          <img class="header-basic-content__line" src="~@assets/icons/dividerM.png">
          <div class="header-basic-content-toolbar">
            <img class="header-basic-content-toolbar__cart" src="~@assets/icons/cart.png">
            <span class="header-basic-content-toolbar__countC">4</span>
          </div>
        </div>
      </div>
    </div>
    <AppMegaMenu/>
  </header>
</template>

<style scoped lang="scss">
.header {
  &-top {
    display: flex;
    justify-content: center;
    padding: 11px 0;
    max-width: 1230px;
    margin: 0 auto;

    &-wrapper {
      background-color: $black;
    }

    &-content {
      display: flex;
      align-items: center;

      &-data, &-select, {
        font-size: 14px;
      }

      &__number, &__log, &__register {
        font-size: 14px;
      }

      &-data {
        font-family: $fontLato;
        font-weight: 400;
        color: $white;
        opacity: 0.6;

        &__number {
          font-family: $fontLato;
          color: $white;
          text-decoration: none;
        }
      }

      &-list {
        display: flex;
        list-style: none;
        margin: 0 195px 0;
        padding: 0;

        &-items {
          margin-right: 32px;

          &:last-child {
            margin-right: 0;
          }

          &__link {
            font-family: $fontLato;
            color: $white;
            text-decoration: none;
            font-weight: 400;
            font-size: 14px;
            opacity: 0.6;
          }
        }
      }

      &__log, &__register, &-select {
        opacity: 0.6;
        font-family: $fontLato;
        color: $white;
      }
      &-select {
        background: transparent;
        outline: none;
        border: none;
        margin-right: 60px;
      }

      &__flag {
        margin-right: 12px;
      }

      &__person {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }

      &__log, &__register {
        background: transparent;
        outline: none;
        border: none;
        padding: 0;
      }
    }
  }
  &-basic {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 31px 0;
    margin: 0 auto;
    max-width: 1230px;

    &-content {
      display: flex;
      position: relative;

      &__logo {
        height: 22px;
      }

      &-list {
        display: flex;
        position: relative;
        margin: 0 132px 0 60px;
        padding: 0;

        &-items {
          list-style: none;
          margin-right: 40px;

          &:last-child {
            margin-right: 0;
          }

          &:last-of-type &__link {
            color: red;
          }

          &__link {
            font-family: $fontLato;
            font-size: $fontSizeXS;
            font-weight: 700;
            text-decoration: none;
            color: $black;

            &:hover {
              color: $primary;
            }
          }
        }
      }

      &-search {
        position: relative;
        padding: 11px 0 12px 16px;
        width: 380px;
        outline: none;
        border-radius: 4px;
        border: 1px solid $lightGray;

        &::placeholder {
          color: $gray;
          font-size: 14px;
          font-family: $fontLato;
        }
      }

      &__loupe {
        position: absolute;
        top: 30%;
        right: 16px;
      }

      &-toolbar {
        display: flex;
        align-items: center;
        margin-left: 48px;

        &:last-child {
          margin-left: 0;
        }

        &__like, &__cart {
          margin-right: 8px;
        }

        &__like {
          width: 20px;
          height: 20px;
        }

        &__cart {
          width: 22px;
          height: 22px;
        }

        &__count, &__countC {
          font-family: $fontLato;
          font-size: $fontSizeXS;
          font-weight: 400;
        }

        &__countC {
          padding: 1px 8px;
          background-color: $success;
          color: $white;
          text-align: center;
          border-radius: 4px;
        }
      }

      &__line {
        margin: 0 20px 0;
      }
    }
  }
}
</style>
