<script>
import { ref, computed } from 'vue'

// reactive state
// const count = ref(0)

export default function useDetailViewSharedStyles(){
  const breakpointClassesOuter = ref(`
    mr-2 ml-2
    md:ml-3 md:mr-3 
    lg:ml-5 lg:mr-5
  `)
  const breakpointClassesInner =  ref(`
    pr-2 pl-2 
    md:pl-3 md:pr-3 
    lg:pl-5 lg:pr-5
  `)
  const checkbox = ref('w-5 h-5 text-black ring-inset hover:ring-1 hover:ring-gray-300 focus:ring-white focus:ring-0')
  
  const containerBreakpointClasses = computed(()=>{
    // return `${breakpointClassesOuter.value} ${breakpointClassesInner.value}`.replace(/\n/g, " ");
    return `${breakpointClassesOuter.value} ${breakpointClassesInner.value}`
  })

  return { breakpointClassesOuter, breakpointClassesInner, containerBreakpointClasses, checkbox }

}

</script>
