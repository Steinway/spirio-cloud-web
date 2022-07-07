<template>
  <div class="h-screen flex flex-nowrap ">
    <master-view class="flex-none w-72 p-3 m-1 shadow-lg overflow-y-auto" />
    <detail-view class="flex-auto" />
  </div>  
</template>

<script>
import MasterView from './MasterView.vue'
import DetailView from './DetailView.vue'

export default {
  name: 'LayoutView',
  components: {
    MasterView,
    DetailView
  }
}
</script>

<style>

</style>
