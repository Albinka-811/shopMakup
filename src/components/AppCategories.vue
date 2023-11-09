<script>
export default {
  name: "AppCategories"
}
</script>

<template>
  <div class="categories-wrapper">
    <div class="categories">
      <h1 class="categories__title">Popular categories</h1>
      <div class="categories-line">
        <button class="categories-line-content" type="button">
          <img class="categories-line-content__photo" src="~@assets/images/category1.png">
          <span class="categories-line-content__name">Tops</span>
        </button>
        <button class="categories-line-content" type="button">
          <img class="categories-line-content__photo" src="~@assets/images/category2.png">
          <span class="categories-line-content__name">T-shirts</span>
        </button>
        <button class="categories-line-content" type="button">
          <img class="categories-line-content__photo" src="~@assets/images/category3.png">
          <span class="categories-line-content__name">Caps</span>
        </button>
        <button class="categories-line-content" type="button">
          <img class="categories-line-content__photo" src="~@assets/images/category4.png">
          <span class="categories-line-content__name">Sandals</span>
        </button>
        <button class="categories-line-content" type="button">
          <img class="categories-line-content__photo" src="~@assets/images/category5.png">
          <span class="categories-line-content__name">Jackets</span>
        </button>
        <button class="categories-line-content" type="button">
          <img class="categories-line-content__photo" src="~@assets/images/category6.png">
          <span class="categories-line-content__name">Coats</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.categories {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1230px;
  margin: 0 auto;

  &-wrapper {
    margin-bottom: 180px;
  }

  &__title {
    font-family: $fontLato;
    font-weight: 900;
    font-size: $fontSizeXXL;
    text-align: center;
    color: $black;
    margin: 0 0 60px;
  }

  &-line {
    display: flex;

    &-content {
      display: flex;
      flex-direction: column;
      border: none;
      align-items: center;
      background: transparent;
      margin-right: 30px;
      padding: 0;

      &:last-child {
        margin-right: 0;
      }

      &__photo {
        margin-bottom: 24px;
      }

      &__name {
        font-family: $fontLato;
        font-weight: 700;
        font-size: $fontSizeS;
        color: $black;
      }
    }
  }
}
</style>
