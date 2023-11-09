<script>
export default {
  name: "AppServices"
}
</script>

<template>
  <div class="services">
    <button class="services-click" type="button">
      <img class="services-click__icon" src="../assets/icons/ic-delivery.png">
      <span class="services-click__title">Fast Worldwide Shipping</span>
      <span class="services-click__text">Get free shipping over $250</span>
    </button>
    <img class="services__divider" src="../assets/icons/lineV.png">
    <button class="services-click" type="button">
      <img class="services-click__icon" src="../assets/icons/ic-call-center.png">
      <span class="services-click__title">24/7 Customer Support</span>
      <span class="services-click__text">Friendly 24/7 customer support</span>
    </button>
    <img class="services__divider" src="../assets/icons/lineV.png">
    <button class="services-click" type="button">
      <img class="services-click__icon" src="../assets/icons/ic-shield.png">
      <span class="services-click__title">Money Back Guarantee</span>
      <span class="services-click__text">We return money within 30 days</span>
    </button>
    <img class="services__divider" src="../assets/icons/lineV.png">
    <button class="services-click" type="button">
      <img class="services-click__icon" src="../assets/icons/ic-credit-card.png">
      <span class="services-click__title">Secure Online Payment</span>
      <span class="services-click__text">Accept all major credit cards</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.services {
  display: flex;
  justify-content: center;
  margin-bottom: 180px;

  &-click {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    background-color: transparent;
    width: 240px;
    padding: 0;
    margin-right: 45px;
    outline: none;

    &:last-child {
      margin-right: 0;
    }

    &__icon {
      margin-bottom: 24px;
    }

    &__title {
      font-family: $fontLato;
      font-weight: 700;
      font-size: $fontSizeS;
      color: $black;
      margin-bottom: 8px;
    }

    &__text {
      font-family: $fontLato;
      font-weight: 400;
      font-size: $fontSizeXS;
      color: #787A80;
    }
  }

  &__divider {
    margin-right: 45px;
  }
}
</style>
