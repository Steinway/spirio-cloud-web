<template>
  <div
    class="grid grid-cols-6 uppercase tracking-widest"
    :class="detailViewContainerBreakpointClasses"
  >
    <!-- Table Header -->
    <div class="col-span-3">
      <input type="checkbox" :class="checkbox" />
      <span class="ml-4">
        Work / Song
      </span>
    </div>
    <div class="col-span-2">Modified</div>
    <!-- Icon Controls -->
    <div class="col-span-1"></div>
  </div>
  <div 
    class=" col-span-6 border-b-4 border-black mt-2 mb-1"
    :class="detailViewContainerBreakpointClasses"
  ></div>

  <div class="overflow-y-auto snap-y relative ">
    <!-- data row -->
    <file-list-table-row 
      v-for="item in fileList" 
      :key="`${item.songTitle}-${item.modified}`"
      :title="item.songTitle"
      :duration="item.duration"
      :modified="item.modified"
      :modifiedBy="item.modifiedBy"
    />
    <!-- bottom spacer -->
  </div>
</template>
<script>
import useDetailViewSharedStyles from '@/use/SharedStyles.vue'
import FileListTableRow from '@/components/FileListTableRow.vue'
export default {
  name: 'FileListTable',
  components: {
    FileListTableRow
  },
  props: {
    fileList: Array,
  },
  data: function(){
    return {
      rowHasHover: false
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
</style>
