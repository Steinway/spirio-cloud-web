<template>
  <!-- data row -->
  <div
    class="grid grid-cols-6 pt-4 pb-4 border-b snap-start items-center"
    :class="detailViewContainerBreakpointClasses"
  >
    <div class="col-span-3">
      
      <label class="flex break-all cursor-pointer">
        <input :checked="checked" id="" class=" mr-2 self-center" :class="checkbox" type="checkbox" />
        <span class="pl-2 pr-2">
          <span class="mr-2">
           {{title}}
          </span>

          <span class="text-gray-400 border-l border-gray-300 font-minionIT pl-2 break-normal">
           <span class="">
              {{duration}}
            </span>
          </span>
        </span> 
      </label>
      
    </div>

    <VMenu
      :distance="-20" 
      :triggers="['hover', 'touch']"
      :delay="{show: 500, hide: 10}"
      class="col-span-2"
    >
      <div class="col-span-2 self-center cursor-pointer">
        <span>
          {{modified}} 
        </span>
        <span class="text-gray-400 font-minionIT">
          by&nbsp;{{modifiedBy}}
        </span>
      </div>

      <template #popper>
        <div class="p-8 font-minion tracking-widest">
          <div class="grid pb-4 grid-cols-3 gap-x-2 gap-y-6">
            <strong>Modified:</strong>
            <time datetime="03-20-2018 5:13pm">03/28/2018 <br> 5:13 pm</time>
            <em class=" font-minionIT">by {{modifiedBy}}</em>

            <strong>Recorded:</strong>
            <date class="">03/28/2018</date>
            <em class="font-minionIT">by 654992</em>

            <strong>Performer:</strong>
            <p class="col-span-2">Spirio Performer</p>

            <!-- <div class="col-span-3">&nbsp;</div> -->

            <strong>File Access:</strong>
            <ul class="col-span-2">
              <li class="font-minionIT">JFiedner</li>
              <li class="font-minionIT">Roackford</li>
              <li class="font-minionIT">kazumi123</li>
              <li class="font-minionIT">mheckler</li>
            </ul>
          </div>
        </div>
      </template>
    </VMenu>
    <!-- <div class="col-span-2 self-center">
        {{modified}} 
      <span class="text-gray-400 font-minionIT">
        by&nbsp;{{modifiedBy}}
      </span>
    </div> -->

    <div class="flex justify-between text-gray-400 col-span-1 ">
        
      <!-- Cloud Download Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 self-center cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>  

      <!-- File Send Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 self-center cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>

      <!-- Dots Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 self-center cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
    </div>
  </div>
</template>
<script>
import useDetailViewSharedStyles from '@/use/SharedStyles.vue'
export default {
  name: 'FileListTableRow',
  props: {
    title: String,
    duration: String,
    modified: String,
    modifiedBy: String,
  },
  data: function(){
    return {
      rowHasHover: false,
      checked: false
    }
  },
  setup(){
    return useDetailViewSharedStyles()
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
  :global(.v-popper__inner){
    border-radius: 12px !important;
  }
</style>
