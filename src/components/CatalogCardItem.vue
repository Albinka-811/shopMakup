<script>
export default {
  name: 'CardItem',
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    totalPrice () {
      if (this.discount) {
        return this.price * this.discount;
      }

      return this.price;
    },

    formDiscount () {
      return (this.discount * 100);
    }
  },
  methods: {
    getImageUrl (name) {
      return new URL('../' + name, import.meta.url).href;
    },
  }
};
</script>

<template>
    <div class="cards">
      <a class="cards-package">
        <img class="cards-package__product" :src="getImageUrl(img)" alt="">
        <!--    <app-rating-input :modelValue="rating" />    -->
        <span class="cards-package-sale" v-if="discount">-{{ formDiscount }}%</span>
        <span class="cards-package-rating">
          <img :key="index" v-for="(count, index) in rating" class="cards-package-rating__stars"
               src="~@assets/icons/stars1.png" alt="">
        </span>
      </a>
      <span class="cards-like">
      <img class="cards-like__icons" src="~@assets/icons/likeGr.png" alt="">
    </span>
      <a class="cards-depiction" href="#">{{ title }}</a>
      <div class="cards-price">
        <span class="cards-price__discount" v-if="discount">
        ${{ totalPrice }}
        </span>
        <span class="cards-price__constant" :class="{
        'strike': discount
      }">${{ price }}
        </span>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}

.cards {
  display: flex;
  flex-direction: column;
  position: relative;

  &-package {
    position: relative;

    &-sale {
      position: absolute;
      top: 16px;
      left: 16px;
      background-color: $red;
      border-radius: 4px;
      padding: 4px 8px;

      font-family: $fontLato;
      font-weight: 700;
      font-size: $fontSizeXS;
      color: $white;
    }

    &-rating {
      position: absolute;
      right: 16px;
      top: 16px;
    }
  }

  &-like {
    position: relative;
    margin-bottom: 16px;

    &__icons {
      right: 16px;
      position: absolute;
      bottom: 16px;
      background: $white;
      padding: 9px 8px;
      border-radius: 50%;
    }
  }

  &-depiction {
    font-family: $fontLato;
    font-weight: 400;
    font-size: 18px;
    color: $lightBlack;
    text-decoration: none;
    margin: 0 16px 8px 16px;
  }

  &-price {
    margin: 0 0 16px 16px;

    &__constant,
    &__discount {
      font-family: $fontLato;
      font-weight: 700;
      font-size: $fontSizeS;
      color: $black;
    }

    &__discount {
      color: $red;
    }
  }
}

.strike {
  font-family: $fontLato;
  font-weight: 400;
  font-size: $fontSizeXS;
  color: #787A80;
  margin-left: 12px;
  text-decoration: line-through;
}
</style>
