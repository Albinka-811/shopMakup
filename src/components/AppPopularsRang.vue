<script>
export default {
  name: "AppPopularsRank"
}
</script>

<template>
  <div class="populars-wrapper">
    <div class="populars">
      <button class="populars-position" type="button" name="button">
        <img class="populars-position__img" src="~@assets/images/women.png">
        <span class="populars-position__name">Women`s</span>
      </button>
      <button class="populars-position" type="button" name="button">
        <img class="populars-position__img" src="~@assets/images/men.png">
        <span class="populars-position__name">Men`s</span>
      </button>
      <button class="populars-position" type="button" name="button">
        <img class="populars-position__img" src="~@assets/images/kids.png">
        <span class="populars-position__name">Kids`</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.populars {
  display: flex;
  justify-content: center;
  max-width: 1230px;
  margin: 0 auto;

  &-wrapper {
    margin: -60px 0 180px 0;
  }

  &-position {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    padding: 0;
    border: none;
    outline: none;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }

    &__name {
      font-family: $fontLato;
      font-weight: 700;
      font-size: $fontSizeS;
      padding-top: 16px;
    }
  }
}
</style>
