<template>
  <!-- folder list item -->
  <router-link 
    :to="`/folder/${userName}/${title}`" 
    class="flex pt-2 pb-2 pl-1 pr-1 rounded-sm cursor-pointer" 
    :class="{ 
      'bg-gray-200' : isActive,
      'text-gray-600': rowHasHover &&! isActive
    }"
    
    @mouseover="setRowHasHover(true)"
    @mouseout="setRowHasHover(false)"
    >
    <!-- folder icon -->
    <svg xmlns="http://www.w3.org/2000/svg" 
      class="h-5 w-5 text-gray-800 mr-2" 
      :class="{ 
        'bg-gray-200' : isActive,
        'text-gray-600': rowHasHover &&! isActive
      }"
    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
    <p class=" text-sm">{{title}}</p>
  </router-link>
</template>

<script>
export default {
  name: 'FolderListeItem',
  props: {
    title: String,
    userName: String

  },
  data: function(){
    return {
      rowHasHover: false
    }
  },
  methods: {
    // TODO: Element hover should be a composible?
    setRowHasHover(bool){
      this.rowHasHover = bool
    }
  },
  computed:{
    isActive: function(){
      // TODO: replace with better matching key to avoid duplicate active folder highlights
      return this.$route.params.folderName === this.$props.title && 
      this.$route.params.userName === this.$props.userName
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
