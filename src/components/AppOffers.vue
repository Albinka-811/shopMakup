<script>
export default {
  name: "AppOffers"
}
</script>

<template>
  <div class="offers">
    <button class="offers-btnL" type="button">
      <img class="offers-btnL__prev" src="../assets/icons/left-chevron.png">
    </button>
    <span class="offers-text"> Up to 70% Off.
                <a class="offers-text__link" href="#">Shop our latest sale styles</a>
            </span>
    <button class="offers-btnR" type="button">
      <img class="offers-btnR__next" src="../assets/icons/right-chevron.png">
    </button>
  </div>
</template>

<style scoped lang="scss">
.offers {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $primary;
  padding: 8px 0;

  &-btnL, &-btnR {
    outline: none;
    border: none;
    background: transparent;
    padding: 0;
    height: 16px;
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
      margin-left: 12px;
    }
  }

  &-text {
    font-family: $fontLato;
    font-weight: 900;
    font-size: 12px;
    color: $white;

    &__link {
      font-family: $fontLato;
      font-weight: 400;
      font-size: 12px;
      color: $white;
    }
  }
}
</style>
