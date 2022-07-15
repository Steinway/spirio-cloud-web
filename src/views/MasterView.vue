<template>
  <div class="master-shadow shadow-lg w-80 flex flex-col justify-between shrink-0">

    <!-- Logo and Scrollable Container -->
    <div class="flex flex-col min-h-0">

      <!-- Logo -->
      <div class="shrink-0 rounded-md h-20 bg-gray-200 border-gray-300 border-dashed border-2 mb-6"> Logo </div>
      
      <!-- Folder Groups Scrollable Area -->
      <div class="overflow-y-scroll p-4">
        <!-- User Folder Group -->
        <collapsible-folder-group :folderList="userFolderList" userName="user">
          <template #headerIcon>
            <!-- cloud icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1 text-gray-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </template>
          <template #headerTitle>
            <h2 class=" text-2xl font-knockout481 tracking-widest">
              SPIRIOCLOUD
            </h2>
          </template>
        </collapsible-folder-group>
      
        <!-- Shared Folder Group -->
        <collapsible-folder-group :folderList="sharedFolderList1" userName="jfeidner">
          <template #headerTitle>JFEIDNER</template>
        </collapsible-folder-group>
        
        <!-- Shared Folder Group -->
        <collapsible-folder-group :folderList="sharedFolderList2" userName="reneeoak">
          <template #headerTitle>RENEEOAK</template>
        </collapsible-folder-group>
      </div>
    </div>

    <user-state username="KAZUMI123" color="0000ff" />

  </div>
</template>

<script>
import CollapsibleFolderGroup from '../components/CollapsibleFolderGroup.vue'
import UserState from '../components/UserState.vue'

export default {
  name: 'MasterView',
  components: {
    CollapsibleFolderGroup,
    UserState
  },
  data: function(){
    return {
      userFolderList: [
        "My Chopin",
        "Music Theory Term 2 - 2022",
        "Sing-Along Review"
      ],
      sharedFolderList1: [
        "Parrino 10.22.21 Session 1",
        "Parrino 10.23.21 Session 2",
        "Kazumi’s Edits",
        "Renee’s Edits",
        "Lin 01.18.21 Session 1"
      ],
      sharedFolderList2: [
        "Parrino 10.22.21 Session 1",
        "Parrino 10.23.21 Session 2",
        "Kazumi’s Edits",
        "Renee’s Edits",
        "Lin 01.18.21 Session 1"
      ],
    }
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
