<script>
import AppHeader from '@/components/AppHeader.vue';
import AppOffers from '@/components/AppOffers.vue';
import AppSlider from '@/components/AppSlider.vue';
import AppPopularsRang from '@/components/AppPopularsRang.vue';
import AppRibbon from '@/components/AppRibbon.vue';
import AppBanners from '@/components/AppBanners.vue';
import AppCategories from '@/components/AppCategories.vue';
import AppTrends from '@/components/AppTrends.vue';
import AppSale from '@/components/AppSale.vue';
import AppApp from '@/components/AppApp.vue';
import AppServices from '@/components/AppServices.vue';
import AppSocial from '@/components/AppSocial.vue';
import AppBlog from '@/components/AppBlog.vue';
import AppBrands from '@/components/AppBrands.vue';
import AppSubscribe from '@/components/AppSubscribe.vue';
import AppFooter from '@/components/AppFooter.vue';
// @ is an alias to /src

export default {
  name: 'Landing',
  components: {
    AppFooter,
    AppSubscribe,
    AppBrands,
    AppBlog,
    AppSocial,
    AppServices,
    AppApp,
    AppSale,
    AppTrends,
    AppCategories,
    AppBanners,
    AppRibbon,
    AppHeader,
    AppOffers,
    AppSlider,
    AppPopularsRang,
  }
};
</script>

<template>
  <main class="main">
    <AppHeader/>
    <AppOffers/>
    <AppSlider/>
    <AppPopularsRang/>
    <AppRibbon/>
    <AppBanners/>
    <AppCategories/>
    <AppTrends/>
    <AppSale/>
    <AppApp/>
    <AppServices/>
    <AppSocial/>
    <AppBlog/>
    <AppBrands/>
    <AppSubscribe/>
    <AppFooter/>
  </main>
</template>


