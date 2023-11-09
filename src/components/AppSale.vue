<script>
export default {
  name: "AppSale"
}
</script>

<template>
  <div class="sale">
    <div class="sale-wrapper">
      <div class="sale-header">
        <h2 class="sale-header__title">Sale up to 70%</h2>
        <div class="sale-header-arrows">
          <button class="sale-header-arrows-btn" type="button">
            <img class="sale-header-arrows-btn__prev" src="~@assets/icons/prev-btn.png">
          </button>
          <button class="sale-header-arrows-btn" type="button">
            <img class="sale-header-arrows-btn__next" src="~@assets/icons/next-btn.png">
          </button>
        </div>
      </div>
      <ul class="sale-list">
        <li class="sale-list-items">
          <a class="sale-list-items-package">
            <img class="sale-list-items-package__product" src="~@assets/images/product10.png">
            <span class="sale-list-items-package-rating">
                            <span class="sale-list-items-package-rating__rate">-50%</span>
                            <img class="sale-list-items-package-rating__stars" src="~@assets/icons/rating5.png">
                        </span>
          </a>
          <span class="sale-list-items-like">
                        <img class="sale-list-items-like__icons" src="~@assets/icons/likeGr.png">
                    </span>
          <a class="sale-list-items__depiction" href="#">Leather crossbody bag with gold hardware</a>
          <div class="sale-list-items-price">
            <span class="sale-list-items-price__newp">$89.50</span>
            <span class="sale-list-items-price__old">$179.00</span>
          </div>
        </li>
        <li class="sale-list-items">
          <a class="sale-list-items-package">
            <img class="sale-list-items-package__product" src="~@assets/images/product11.png">
            <span class="sale-list-items-package-rating">
                            <span class="sale-list-items-package-rating__rate">-50%</span>
                        </span>
          </a>
          <span class="sale-list-items-like">
                        <img class="sale-list-items-like__icons" src="~@assets/icons/likeGr.png">
                    </span>
          <a class="sale-list-items__depiction" href="#">Skinny push-up jeans</a>
          <div class="sale-list-items-price">
            <span class="sale-list-items-price__newp">$40.00</span>
            <span class="sale-list-items-price__old">$80.00</span>
          </div>
        </li>
        <li class="sale-list-items">
          <a class="sale-list-items-package">
            <img class="sale-list-items-package__product" src="~@assets/images/product12.png">
            <span class="sale-list-items-package-rating">
                            <span class="sale-list-items-package-rating__rate">-20%</span>
                            <img class="sale-list-items-package-rating__stars" src="~@assets/icons/rating5.png">
                        </span>
            <div class="sale-list-items-package-chevron">
              <button class="sale-list-items-package-chevron-btn" type="button">
                <img class="sale-list-items-package-chevron-btn__left"
                     src="~@assets/icons/left-chevron.png">
              </button>
              <button class="sale-list-items-package-chevron-btn" type="button">
                <img class="sale-list-items-package-chevron-btn__right"
                     src="~@assets/icons/right-chevron.png">
              </button>
            </div>
          </a>
          <span class="sale-list-items-like">
                        <img class="sale-list-items-like__icons" src="~@assets/icons/likeGr.png">
                    </span>
          <a class="sale-list-items__depiction" href="#">Wide heel suede ankle boots</a>
          <div class="sale-list-items-price">
            <span class="sale-list-items-price__newp">$119.16</span>
            <span class="sale-list-items-price__old">$148.95</span>
          </div>
          <div class="sale-list-items-option">
            <div class="sale-list-items-option-size">
              <label class="sale-list-items-option-size-checkbox">
                <input type="checkbox" class="sale-list-items-option-size-checkbox__native" name="size">
                <span class="sale-list-items-option-size-checkbox__marker">36</span>
              </label>
              <label class="sale-list-items-option-size-checkbox">
                <input type="checkbox" class="sale-list-items-option-size-checkbox__native" name="size">
                <span class="sale-list-items-option-size-checkbox__marker">37</span>
              </label>
              <label class="sale-list-items-option-size-checkbox">
                <input type="checkbox" class="sale-list-items-option-size-checkbox__native" name="size">
                <span class="sale-list-items-option-size-checkbox__marker">38</span>
              </label>
              <label class="sale-list-items-option-size-checkbox">
                <input type="checkbox" class="sale-list-items-option-size-checkbox__native" name="size">
                <span class="sale-list-items-option-size-checkbox__marker">39</span>
              </label>
              <label class="sale-list-items-option-size-checkbox">
                <input type="checkbox" class="sale-list-items-option-size-checkbox__native" name="size">
                <span class="sale-list-items-option-size-checkbox__marker">40</span>
              </label>
            </div>
            <div class="sale-list-items-option-color">
              <label class="sale-list-items-option-color-radio">
                <input type="radio" class="sale-list-items-option-color-radio__native" name="color">
                <span class="sale-list-items-option-color-radio__marker markerBlack"></span>
              </label>
              <label class="sale-list-items-option-color-radio">
                <input type="radio" class="sale-list-items-option-color-radio__native" name="color">
                <span class="sale-list-items-option-color-radio__marker markerBrown"></span>
              </label>
              <label class="sale-list-items-option-color-radio">
                <input type="radio" class="sale-list-items-option-color-radio__native" name="color">
                <span class="sale-list-items-option-color-radio__marker markerBlue"></span>
              </label>
            </div>
          </div>
          <button class="sale-list-items-button" type="button">
            <img class="sale-list-items-button__cart" src="~@assets/icons/cart_white.png">
            Add to cart
          </button>
        </li>
      </ul>
      <button class="sale-wrapper__open" type="button">See all sale products</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sale {
  margin-bottom: 120px;

  &-header {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1230px;
    margin: 0 auto;

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
    margin: 60px 0 0;

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

        &__product {
          position: relative;
        }

        &-rating {

          &__rate {
            position: absolute;
            left: 16px;
            top: 16px;
            background-color: $red;
            border-radius: 4px;
            padding: 4px 8px;

            font-family: $fontLato;
            font-weight: 700;
            font-size: $fontSizeXS;
            color: $white;
          }

          &__stars {
            position: absolute;
            right: 16px;
            top: 16px;
          }
        }

        &-chevron {
          display: flex;
          position: absolute;
          top: 50%;

          &-btn {
            border: none;
            background-color: transparent;
            outline: none;
          }
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

      &__depiction {
        font-family: $fontLato;
        font-weight: 400;
        font-size: 18px;
        color: $lightBlack;
        text-decoration: none;
        margin: 0 0 8px 16px;
      }

      &-price {
        margin: 0 16px 16px;

        &__newp {
          font-family: $fontLato;
          font-weight: 700;
          font-size: $fontSizeM;
          color: $red;
          margin-right: 12px;
        }

        &__old {
          font-family: $fontLato;
          font-weight: 400;
          font-size: 18px;
          color: #787A80;
          text-decoration: line-through;
        }
      }

      &-option {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 16px 20px;

        &-size {
          display: flex;

          &-checkbox {
            display: flex;
            align-items: center;
            position: relative;
            cursor: pointer;

            &__native {
              width: 0;
              height: 0;
              position: absolute;
              left: -100vw;
            }

            &__marker {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 24px;
              height: 24px;
              border-radius: 4px;
              border: 1px solid $lightGray;
              margin-right: 8px;

              &:hover {
                border: 1px solid $primary;
              }
            }
          }
        }

        &-color {
          display: flex;

          &-radio {
            display: flex;
            align-items: center;
            position: relative;
            cursor: pointer;

            &__native {
              width: 0;
              height: 0;
              position: absolute;
              left: -100vw;
            }

            &__marker {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              border: 1px solid $lightGray;
              margin-right: 8px;

              &:hover {
                border: 1px solid $primary;
              }

              &::before {
                display: block;
                content: '';
                border-radius: 50%;
                width: 80%;
                height: 80%;
                opacity: 1;
              }
            }
          }
        }
      }

      &-button {
        display: flex;
        margin: 0 16px 16px;
        padding: 10px 130px;
        border: none;
        background-color: $primary;
        border-radius: 4px;
        font-family: $fontLato;
        font-weight: 700;
        font-size: 14px;
        color: $white;

        &__cart {
          margin-right: 8px;
        }
      }
    }
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__open {
      border: 1px solid $primary;
      border-radius: 4px;
      padding: 16px 49px;
      background-color: transparent;
      color: $primary;
      outline: none;
    }
  }
}

.markerBlack {
  &::before {
    background-color: black;
  }
}

.markerBrown {
  &::before {
    background-color: $brown;
  }
}

.markerBlue {
  margin-right: 0;

  &::before {
    background-color: $lightBlue;
  }
}
</style>
