<script>
export default {
  name: "AppSocial"
}
</script>

<template>
  <div class="instagram">
    <div class="instagram-case">
      <span class="instagram-case__text">Follow us on Instagram</span>
      <h1 class="instagram-case__title">@createx_store</h1>
      <a class="instagram-case-link" href="https://www.instagram.com/">
        <img class="instagram-case-link__inst" src="../assets/icons/Instagram.png">
        Follow instagram
      </a>
    </div>
    <img class="instagram-photo" src="../assets/images/inst-img6.png">
    <img class="instagram-photo" src="../assets/images/inst-img7.png">
    <img class="instagram-photo" src="../assets/images/inst-img8.png">
  </div>
</template>

<style scoped lang="scss">
.instagram {
  display: flex;
  margin-bottom: 180px;
  justify-content: center;

  &-case {
    display: flex;
    flex-direction: column;
    margin-right: 100px;

    &__text {
      font-family: $fontLato;
      font-weight: 700;
      font-size: $fontSizeXS;
      text-transform: uppercase;
      color: $black;
      margin-bottom: 8px;
    }

    &__title {
      font-family: $fontLato;
      font-weight: 900;
      font-size: $fontSizeXXL;
      color: $black;
      margin: 0 0 60px;
    }

    &-link {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid $primary;
      border-radius: 4px;
      padding: 13px 40px;
      background-color: transparent;
      width: 242px;
      outline: none;
      text-decoration: none;
      font-family: $fontLato;
      font-weight: 700;
      font-size: $fontSizeXS;
      color: $primary;

      &__inst {
        margin-right: 8px;
      }
    }
  }

  &-photo {
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
