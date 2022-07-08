<template>
    <!-- User Area  -->
    <div class="h-20 shrink-0 flex items-center p-3">
      <div class="flex items-center justify-center bg-blue-400 w-8 h-8 text-white rounded-full">{{username[0]}}</div>
      <div class="ml-2">{{username}}</div>
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
    