<template>
  <div class="mb-8 font-minion tracking-wider">

    <!-- Folder Group Header -->
    <div
      class="flex justify-between cursor-pointer items-center" 
      :class="headerClasses"
      @mouseover="setRowHasHover(true)"
      @mouseout="setRowHasHover(false)"
    >
      <router-link
        :to="`/folder/${userName}`" 
        class="flex pt-2 pb-2 w-full"
        :class="masterViewBreakpointClassesOuter"
      >
        <slot name="headerIcon"></slot>

        <!-- title -->
        <h3 class="tracking-widest uppercase text-sm">
          <slot name="headerTitle"></slot>
        </h3>
      </router-link>

      <!-- collapse icon -->
      <div 
        class="border border-gray-400 cursor-pointer flex h-6 w-6 rounded" 
        :class="{'border-gray-800' : headerRowHasHover}"
        @click="toggleIsExpanded"
        @mouseover="setHeaderRowHasHover(true)" 
        @mouseleave="setHeaderRowHasHover(false)" 
      >

        <svg v-if="isExpanded" xmlns="http://www.w3.org/2000/svg" 
          class="h-4 w-4 text-gray-400" 
          :class="{'text-gray-800' : headerRowHasHover}"
          viewBox="0 0 14 15" 
          fill="currentColor">

          <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 21 22" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
    </div>

    <!-- Folder Group List -->
    <div 
      v-if="isExpanded"
      :class="masterViewContainerBreakpointClasses"
    >
      <folder-list-item 
        v-for="folder in folderList"
        :title="folder"
        :userName="userName"
        :key="folder"
      />

      <!-- + new folder button -->
      <svg v-if="!isSharedFolder" xmlns="http://www.w3.org/2000/svg" class="mt-2 h-7 w-7 cursor-pointer text-gray-500 hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  </div>
</template>

<script>
import FolderListItem from "./FolderListItem.vue"
import useSharedStyles from "@/use/SharedStyles.vue"

export default {
  name: 'CollapsibleFolderGroup',
  components: { FolderListItem },
  props: {
    folderList: Array,
    userName: String,
    isSharedFolder: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    return useSharedStyles()
  },
  data: function(){
    return {
      isExpanded: true,
      headerRowHasHover: false
    }
  },
  computed:{
    headerClasses: function(){
      let classes = `
        ${this.masterViewBreakpointClassesInner}
      `
      if(this.isActive){
        classes += ' bg-gray-200'
      }

      if(this.rowHasHover && this.isActive){
        classes += ' text-gray-500'
      }
      return classes
    },
    isActive: function(){
      // TODO: replace with better matching key to avoid duplicate active folder highlights
      return this.$route.name === 'root' && this.$route.params.userName === this.$props.userName
      // this.$route.params.userName === this.$props.userName
      
    }
  },
  methods: {
    toggleIsExpanded(){
      this.isExpanded = !this.isExpanded
    },
    setHeaderRowHasHover(bool){
      this.headerRowHasHover = bool
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
