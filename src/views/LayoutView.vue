<template>
  <div class="flex flex-nowrap h-screen">
    <master-view class="" />
    <!-- <detail-view class="flex-auto" /> -->
    <router-view />
  </div>  
</template>

<script>
import MasterView from './MasterView.vue'
// import DetailView from './DetailView.vue'

export default {
  name: 'LayoutView',
  components: {
    MasterView,
    // DetailView
  }
}
</script>

<style>

</style>
