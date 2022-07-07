<template>
  <!-- folder list item -->
  <div class="flex pt-2 pb-2 pl-1 pr-1 rounded-sm" :class="{ 'bg-gray-200' : isActive }">
    <!-- folder icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
    <p class="text-sm">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'FolderListeItem',
  props: {
    title: String
  },
  computed:{
    isActive: function(){
      return true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
