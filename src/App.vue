<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppDetailedCard from '../src/components/AppDetailedCard.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppDetailedCard,
  }
}

</script>

<template>
  <div class="wrapper">

    <AppHeader />

    <AppMain class="app-main" />

  </div>
</template>

<style lang="scss">
@use './style/general.scss';
@use './style/partials/_variables' as *;

.wrapper {
  height: 100vh;

  display: flex;
  flex-direction: column;

  .app-main {
    flex-grow: 1;
  }
  
}


</style>
