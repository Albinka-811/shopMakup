<script>
export default {
  name: 'FilterPrice'
};
</script>

<template>
  <div class="filter">
    <div class="filter-header">
      <span class="filter-header__title">Price</span>
    </div>
    <div class="filter-body">
      <div class="filter-body-cost">
        <span class="filter-body-cost__min" id="min-value">
          $50
        </span>
        <span class="filter-body-cost__max" id="max-value">
          $500
        </span>
      </div>
      <div class="filter-body-slider">
        <div class="filter-body-slider__fill"></div>
        <input type="range" class="filter-body-slider__input filter-body-slider__priceMin" value="1000" min="10" max="10000" step="10"/>
        <input type="range" class="filter-body-slider__input filter-body-slider__priceMax" value="7000" min="10" max="10000" step="10"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter {
  width: 255px;

  &-header {
    &__title {
    }
  }

  &-body {
    &-cost {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 10px;

      &__min, &__max {
        font-size: 16px;
        font-weight: 600;
      }

      &__max {
      }
    }

    &-slider {
      width: 100%;
      position: relative;
      margin: 15px 0 30px 0;

      &__input {
        appearance: none;
        background: transparent;
        position: absolute;
        width: 100%;
        left: 0;

       &::-webkit-slider-thumb {
         appearance: none;
         background-color: black;
         height: 15px;
         width: 15px;
         border-radius: 50%;
         z-index: 1;
         margin-top: -5x;
         position: relative;
         cursor: pointer;
       }

        &::-webkit-slider-runnable-track {
          width: 100%;
          height: 5px;
          background: #e8e8e8;
          border-radius: 3px;
          border: none;
        }
      }

      &__fill {
        height: 6px;
        background-color: #36b37e;
        position: absolute;
        z-index: 1;
      }

    }
  }
}
</style>
