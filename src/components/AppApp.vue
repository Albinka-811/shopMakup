<script>
export default {
  name: "AppApp"
}
</script>

<template>
  <div class="app">
    <img class="app__cta" src="../assets/images/cta-img5.png">
    <div class="app-info">
      <h2 class="app-info__title">Enjoy mobile shopping with our Createx <br> Store App!</h2>
      <div class="app-info-case">
        <a class="app-info-case-link" href="https://www.apple.com/">
          <img class="app-info-case-link__apple" src="../assets/icons/app-store.png">
        </a>
        <a class="app-info-case-link" href="https://play.google.com/">
          <img class="app-info-case-link__google" src="../assets/icons/google-play.png">
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  background-color: $black;
  display: flex;
  margin-bottom: 120px;
  position: relative;
  height: 300px;

  &__cta {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 317px;
  }

  &-info {
    position: absolute;
    right: 0;
    margin-right: 345px;
    padding-top: 60px;

    &__title {
      font-family: $fontLato;
      font-weight: 900;
      font-size: $fontSizeXL;
      color: $white;
      margin: 0 0 48px;
    }

    &-case {
      &-link {
        border: none;
        background-color: transparent;
        margin-right: 24px;
        outline: none;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
