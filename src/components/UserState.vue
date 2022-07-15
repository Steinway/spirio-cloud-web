<template>
    <!-- User Area  -->
    <div class="h-20 bg-white font-knockout481 shrink-0 flex items-center p-3 cursor-pointer">
      <div class="flex items-center justify-center text-xl bg-blue-400 w-11 h-11 text-white rounded-full">{{username[0]}}</div>
      <div class="ml-4 text-xl tracking-widest">{{username}}</div>
    </div>
</template>

<script>
export default {
  name: 'UserState',
  props: {
    username: String,
    color: String
  },
  computed:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
    