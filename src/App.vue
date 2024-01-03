<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppOffers from '@/components/AppOffers.vue';
import AppSubscribe from '@/components/AppSubscribe.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
  <AppHeader/>
  <AppOffers/>
    <router-view/>
  <AppSubscribe/>
  <AppFooter/>
</template>

<style>
@import './styles/main.scss';
</style>
