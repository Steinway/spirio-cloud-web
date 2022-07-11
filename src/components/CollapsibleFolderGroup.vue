<template>
  <div class="mb-8 font-minion tracking-wider">
    <!-- Folder Group Header -->
    <div class="flex justify-between cursor-pointer" @mouseover="setHeaderRowHasHover(true)" @mouseleave="setHeaderRowHasHover(false)" @click="toggleIsExpanded">
      <div class="flex mb-2">
        <slot name="headerIcon"></slot>

        <!-- title -->
        <h3 class=" text-xs tracking-widest">
          <slot name="headerTitle"></slot>
        </h3>
      </div>

      <!-- collapse icon -->
      <div 
        class="border flex h-5 w-5 rounded border-gray-400 cursor-pointer" 
        :class="{'border-gray-800' : headerRowHasHover}">

        <svg v-if="isExpanded" xmlns="http://www.w3.org/2000/svg" 
          class="h-4 w-4 text-gray-400" 
          :class="{'text-gray-800' : headerRowHasHover}"
          viewBox="0 0 18 19" 
          fill="currentColor">

          <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 23 27" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
    </div>

    <!-- Folder Group List -->
    <div v-if="isExpanded">
      <folder-list-item 
        v-for="folder in folderList"
        :title="folder"
        :userName="userName"
        :key="folder"
      />

      <!-- + new folder button -->
      <svg xmlns="http://www.w3.org/2000/svg" class="mt-2 h-5 w-5 cursor-pointer text-gray-500 hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  </div>
</template>

<script>
import FolderListItem from "./FolderListItem.vue"

export default {
  name: 'CollapsibleFolderGroup',
  components: { FolderListItem },
  props: {
    folderList: Array,
    userName: String
  },
  data: function(){
    return {
      isExpanded: true,
      headerRowHasHover: false
    }
  },
  computed:{
    
  },
  methods: {
    toggleIsExpanded(){
      this.isExpanded = !this.isExpanded
    },
    setHeaderRowHasHover(bool){
      console.log("HI"), 
      this.headerRowHasHover = bool
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
