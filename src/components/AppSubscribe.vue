<script>
export default {
  name: "AppSubscribe"
}
</script>

<template>
  <div class="subscribe">
    <div class="subscribe-content">
      <h1 class="subscribe-content__title">Subscribe for updates</h1>
      <h5 class="subscribe-content__text">Subscribe for exclusive early sale access and new arrivals.</h5>
      <div class="subscribe-content-category">
        <label class="subscribe-content-category-checkbox">
          <input type="checkbox" class="subscribe-content-category-checkbox__native" name="category">
          <span class="subscribe-content-category-checkbox__marker">Women</span>
        </label>
        <label class="subscribe-content-category-checkbox">
          <input type="checkbox" class="subscribe-content-category-checkbox__native" name="category">
          <span class="subscribe-content-category-checkbox__marker">Men</span>
        </label>
        <label class="subscribe-content-category-checkbox">
          <input type="checkbox" class="subscribe-content-category-checkbox__native" name="category">
          <span class="subscribe-content-category-checkbox__marker">Girls</span>
        </label>
        <label class="subscribe-content-category-checkbox">
          <input type="checkbox" class="subscribe-content-category-checkbox__native" name="category">
          <span class="subscribe-content-category-checkbox__marker">Boys</span>
        </label>
      </div>
      <form class="subscribe-content-form">
        Email
        <br>
        <input class="subscribe-content-form__input" type="text" placeholder="Your working email">
        <button class="subscribe-content-form__sub" type="submit">Subscribe</button>
      </form>
      <div class="subscribe-content-compact">
        <label class="subscribe-content-compact-checkbox">
          <input class="subscribe-content-compact-checkbox__consent" type="checkbox" name="scales">
          <span class="subscribe-content-compact-checkbox__marker"></span>
          <span class="subscribe-content-compact-checkbox__text">I agree to receive communications from Createx Store.</span>
        </label>
      </div>
    </div>
    <img class="subscribe__photo" src="../assets/images/cub-img13.png">
  </div>
</template>

<style scoped lang="scss">
.subscribe {
  background: #F4F5F6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 65px 0;

  &-content {
    margin-right: 274px;

    &__title {
      font-family: $fontLato;
      font-weight: 900;
      font-size: $fontSizeXXL;
      color: $black;
      margin: 0 0 24px;
    }

    &__text {
      font-family: $fontLato;
      font-weight: 700;
      font-size: $fontSizeS;
      color: $darkGray;
      margin: 0 0 32px;
    }

    &-category {
      display: flex;
      margin-bottom: 32px;

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
          padding: 7px 14.5px;
          border-radius: 4px;
          border: 1px solid $lightGray;
          margin-right: 12px;
          font-family: $fontLato;
          font-weight: 700;
          font-size: 14px;
          color: $darkGray;

          &:hover {
            border: none;
            background: $primary;
            color: $white;
          }
        }
      }
    }

    &-form {
      margin-bottom: 24px;

      &__input {
        border: 1px solid $lightGray;
        border-radius: 4px 0 0 4px;
        border-right: none;
        padding: 13px 0 13px 16px;
        outline: none;
        margin-top: 8px;
        width: 341px;
        height: 52px;
      }

      &__sub {
        border: none;
        border-radius: 0 4px 4px 0;
        padding: 0 40px;
        font-family: $fontLato;
        background-color: $primary;
        font-weight: 700;
        font-size: $fontSizeXS;
        color: #FFFFFF;
        outline: none;
        width: 154px;
        height: 52px;
      }
    }

    &-compact {
      display: flex;
      align-items: center;

      &-checkbox {
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;

        &__consent {
          width: 0;
          height: 0;
          position: absolute;
          left: -100vw;
          opacity: 1;
        }

        &__marker {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          border-radius: 4px;
          border: 1px solid $lightGray;
          background: $primary;

          &::before {
            display: block;
            content: '\2713';
            color: white;
          }
        }

        &__text {
          font-family: $fontLato;
          font-weight: 400;
          font-size: $fontSizeXS;
          color: $lightBlack;
        }
      }
    }
  }
}
</style>
