<script>
export default {
  name: 'SideBar'
};
</script>

<template>
  <div class="sidebar">
    <div class="container">
      <div class="container-header">
        <span class="container-header__title">Clothes</span>
        <!--        <svg>-</svg>-->
      </div>
      <div class="container-body">
        <div class="container-body-box">
          <input class="container-body-box__search" type="search" name="" placeholder="Search the clothes type">
          <!--          <svg></svg>-->
        </div>
        <ul class="container-body-list">
          <li class="container-body-list-filters">
            <input class="container-body-list-filters__checkbox" type="checkbox" id="1" name="">
            <label class="container-body-list-filters-name" for="1">
              Coats
              <span class="container-body-list-filters-name__number">(16)</span>
            </label>
          </li>
          <li class="container-body-list-filters">
            <input class="container-body-list-filters__checkbox" type="checkbox" id="2" name="">
            <label class="container-body-list-filters-name" for="2">
              Jackets
              <span class="container-body-list-filters-name__number">(12)</span>
            </label>
          </li>
          <li class="container-body-list-filters">
            <input class="container-body-list-filters__checkbox" type="checkbox" id="3" name="">
            <label class="container-body-list-filters-name" for="3">
              Suits
              <span class="container-body-list-filters-name__number">(5)</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
}

.container {
  &-header {
    display: flex;
    margin-bottom: 16px;

    &__title {
      font-family: $fontLato;
      font-weight: 700;
      font-size: $fontSizeXS;
      color: $black;
    }
  }

  &-body {
    &-box {
      margin-bottom: 16px;

      &__search {
        width: 255px;
        padding: 6px 12px;
        border: 1px solid $lightGray;
        border-radius: 4px;
        outline: none;

        &::placeholder {
          font-family: $fontLato;
          font-weight: 400;
          font-size: 12px;
          color: $gray;
        }
      }
    }

    &-list {
      margin: 0;
      padding: 0;
      list-style: none;

      &-filters {
        &__checkbox {
          display: none;
          margin-right: 10px;
          //width: 16px;
          //height: 16px;
          //border-radius: 3px;
          //border: 1px solid #B3B7BC;
          //
          //&::after {
          //  border: 1px solid $primary;
          //  background-color: $primary;
          //}
        }

        &-name, &__number {
          font-family: $fontLato;
          font-weight: 400;
          font-size: 14px;
          color: $lightBlack;

          &__number {
            color: $gray;
          }

          &:before {
            display: inline-block;
            content: "";
            border: 1px solid #B3B7BC;
            border-radius: 3px;
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
}
</style>
