<template>
  <div 
    class="font-minion w-full flex flex-col h-screen"
  >

    <div
      class="flex justify-end mt-10 mb-10"
      :class="breakpointClassesOuter"
    >
      <button 
        class="
          bg-black 
          text-white 
          uppercase 
          pl-6  pr-6 
          pt-3 pb-3 
          rounded-lg 
          font-knockout481 
          text-lg 
          tracking-widest
        "
      >
        Upload Files/Folders
      </button>
    </div>

    <!-- Header -->
    <header 
      class="flex justify-end text-right align-middle uppercase font-knockout481"
      :class="breakpointClassesOuter"
    >

      <!-- Header Text -->
      <div class="border-r border-black pr-4 mr-4">
        <!-- Super Header -->
        <div class="flex justify-end">
          <!-- cloud icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1 text-slate-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          <h2 class="text-xl tracking-widest">{{$route.params.userName}}</h2>
        </div>
        <!-- Title Header -->
        <h1 class=" text-5xl tracking-wider">{{$route.params.folderName}}</h1>
      </div>

      <!-- Dots Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>

    </header>

    <file-list-table :fileList="folderItems" />

    <footer 
      class="h-32 mt-auto flex-shrink-0 text-gray-500"
      :class="containerBreakpointClasses"
    >
      <div class="">
        <a 
          v-for="(link, index) in footerLinks" 
          class="pl-3 pr-3"  
          :class="{ 'border-r' : !isLastItem(index, footerLinks.length-1) }"
          :key="link.title" 
          :href="link.url">
            {{link.title}}
        </a>

      </div>

    </footer>




  </div>
</template>

<script>
import useDetailViewSharedStyles from '@/use/DetailViewSharedStyles.vue'
import FileListTable from '../components/FileListTable.vue'

export default {
  name: 'DetailView',
  components: {
    FileListTable
  },
  props: {
  },
  setup(){
    console.log("hi")
    return useDetailViewSharedStyles()

  },
  methods:{
    isLastItem(index, compare){
      return index === compare
    }
  },

  data: function(){
    return {
      footerLinks: [
        {
          title: "About",
          url: ""
        },
        {
          title: "Contact Us",
          url: ""
        },
        {
          title: "Privacy Policy",
          url: ""
        },
        {
          title: "Terms & Conditions",
          url: ""
        },
      ]
    }
  },
  computed: {
    folderName: function(){
      return this.$route.params.folderName
    },
    folderItems: function(){
      const items = [
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_Motion Picture Soundtrack _ed3',
          duration: '6:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'BSantos'
        },
        {
          songTitle: 'Radiohead_01_Anyone Can Play Guitar_ed2',
          duration: '3:19',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'DWhalen'
        },
        {
          songTitle: 'Radiohead_01_Karma_Police_ed2_extended_mix_4',
          duration: '3:19',
          modified: '03/28/2018 12:13 pm',
          modifiedBy: 'DWhalen'
        }
      ]

      let folderItems = []
      for (let index = 0; index < Math.floor(Math.random()*100); index++) {
        folderItems.push(items[Math.floor(Math.random()*items.length)])
      }

      return folderItems
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
