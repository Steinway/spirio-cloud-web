<template>
  <div 
    class="font-minion w-full"
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
            <h2 class="text-xl tracking-widest">Spirio Cloud</h2>
          </div>
          <!-- Title Header -->
          <h1 class=" text-5xl tracking-wider">Sing-Along Review</h1>
        </div>

        <!-- Dots Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>

    </header>


    <div
      class="grid grid-cols-6 uppercase tracking-widest text-sm mt-6"
      :class="breakpointClasses"
    >
      <!-- Table Header -->
      <div class="col-span-3 mb-1">
        <input type="checkbox" />
        Work / Song
      </div>
      <div class="col-span-2">Modified</div>
      <!-- Icon Controls -->
      <div class="col-span-1"></div>
    </div>
      <div 
        class=" col-span-6 border-b-8 border-black"
        :class="breakpointClasses"
      ></div>

    <div class=" overflow-y-scroll h-full">
      <!-- data row -->
      <div 
        v-for="item in folderItems" 
        :key="`${item.songTitle}-${item.modified}`"
        class="grid grid-cols-6 pt-4 pb-4  border-b "
        :class="breakpointClasses"
      >
        <div class="col-span-3">
          <input type="checkbox" />
          {{item.songTitle}} 
          <span class="text-gray-400 font-minionIT">
            &nbsp;|&nbsp;{{item.duration}}
          </span>
        </div>
        <div class="col-span-2">
          {{item.modified}} 
          <span class="text-gray-400 font-minionIT">
            by&nbsp;{{item.modifiedBy}}
          </span>
          
        </div>
        <div class="flex justify-between text-gray-400 col-span-1">
          <!-- Cloud Download Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>  

          <!-- File Send Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>

          <!-- Dots Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>

        </div>
      </div>
    </div>



    <div></div>
  </div>
</template>

<script>
export default {
  name: 'DetailView',
  props: {
  },
  data: function(){
    return {
      breakpointClassesOuter: `
        mr-2 ml-2
        md:ml-3 md:mr-3 
        lg:ml-5 lg:mr-5
      `,
      breakpointClassesInner: `
        pr-2 pl-2 
        md:pl-3 md:pr-3 
        lg:pl-5 lg:pr-5
      `,
      folderItems: [
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
                {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
                {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
                {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
                {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
        {
          songTitle: 'Radiohead_01_ Creep_ed2',
          duration: '3:14',
          modified: '03/28/2018 5:13 pm',
          modifiedBy: 'Kazumil123'
        },
      ]
    }
  },
  computed: {
    breakpointClasses: function(){
      return `${this.breakpointClassesInner} ${this.breakpointClassesOuter}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
