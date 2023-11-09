<script>
export default {
  name: "AppBrands"
}
</script>

<template>
  <div class="brands">
    <button class="brands-logo" type="button">
      <img class="brands-logo__name" src="../assets/icons/brand-logo1.png">
    </button>
    <button class="brands-logo" type="button">
      <img class="brands-logo__name" src="../assets/icons/brand-logo2.png">
    </button>
    <button class="brands-logo" type="button">
      <img class="brands-logo__name" src="../assets/icons/brand-logo3.png">
    </button>
    <button class="brands-logo" type="button">
      <img class="brands-logo__name" src="../assets/icons/brand-logo4.png">
    </button>
    <button class="brands-logo" type="button">
      <img class="brands-logo__name" src="../assets/icons/brand-logo5.png">
    </button>
    <button class="brands-logo" type="button">
      <img class="brands-logo__name" src="../assets/icons/brand-logo6.png">
    </button>
  </div>
</template>

<style scoped lang="scss">
.brands {
  display: flex;
  justify-content: center;
  margin-bottom: 120px;

  &-logo {
    background-color: transparent;
    border: none;
    padding: 0;
    margin-right: 102px;
    outline: none;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
