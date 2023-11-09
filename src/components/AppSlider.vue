<script>
export default {
  name: "AppSlider"
}
</script>

<template>
  <div class="slider-wrapper">
    <div class="slider">
      <h3 class="slider__text">New collection</h3>
      <h1 class="slider__title">Menswear 2023</h1>
      <div class="slider-buttons">
        <button class="slider-buttons__left" type="button" name="text">Shop sale</button>
        <button class="slider-buttons__right" type="button" name="text">Shop the menswear</button>
      </div>
    </div>
    <div class="slider-controls">
      <div class="slider-controls-rowG">
        <button class="slider-controls-rowG-btn" type="button" name="button">
          <img class="slider-controls-rowG-btn__prev" src="~@assets/icons/prev-btn.png">
        </button>
        <button class="slider-controls-rowG-btn" type="button" name="button">
          <img class="slider-controls-rowG-btn__next" src="~@assets/icons/next-btn.png">
        </button>
      </div>
      <div class="slider-controls-rowB">
        <button class="slider-controls-rowB__date">01</button>
        <button class="slider-controls-rowB__date">02</button>
        <button class="slider-controls-rowB__date">03</button>
        <button class="slider-controls-rowB__date">04</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider {
  max-width: 1230px;
  margin: 0 auto;

  &-wrapper {
    background-image: url("/src/assets/images/backound-slider.png");
    padding-top: 140px;
    height: 800px;
  }

  &__text, &__title {
    font-family: $fontLato;
  }

  &__text {
    text-transform: uppercase;
    font-family: $fontLato;
    font-weight: 700;
    font-size: 18px;
    margin: 0 0 12px 0;
  }

  &__title {
    font-weight: 900;
    font-size: 72px;
    margin: 0 0 60px 0;
  }

  &-buttons {
    &__left, &__right {
      font-family: $fontLato;
      font-size: $fontSizeXS;
      font-weight: 700;
      color: $primary;
      padding: 15px 40px;
      border: 1px solid $primary;
      border-radius: 4px;
      background: transparent;
      outline: none;

      &:hover {
        color: $white;
        background: $primary;
      }
    }

    &__right {
      margin-left: 24px;
    }
  }

  &-controls {
    display: flex;
    flex-direction: column;

    &-rowG {
      display: flex;
      justify-content: space-between;
      margin-bottom: 142px;

      &-btn {
        margin-left: 32px;
        margin-right: 32px;
        border-radius: 50%;
        border: none;
        width: 48px;
        height: 48px;
        outline: none;

        &:first-child {
          margin-right: 0;
        }

        &:last-child {
          margin-left: 0;
        }
      }
    }

    &-rowB {
      padding-left: 345px;

      &__date {
        font-family: $fonUbuntu;
        font-size: $fontSizeL;
        font-weight: 700;
        color: $gray;
        border: none;
        border-bottom: 2px solid $gray;
        background: transparent;
        width: 178px;
        text-align: left;
        padding: 0 0 12px;

        &:hover {
          border-bottom: 2px solid $darkGray;
          color: $darkGray;
        }
      }
    }
  }
}
</style>
