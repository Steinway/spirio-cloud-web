<script>
import { ref, computed } from 'vue'

// reactive state
// const count = ref(0)

export default function useSharedStyles(){
  const checkbox = ref('w-5 h-5 text-black ring-inset hover:ring-1 hover:ring-gray-300 focus:ring-white focus:ring-0 cursor-pointer')
 
  const detalViewBreakpointClassesOuter = ref(`
    mr-2 ml-2
    md:ml-3 md:mr-3 
    lg:ml-5 lg:mr-5
  `)
  const detalViewBreakpointClassesInner =  ref(`
    pr-2 pl-2 
    md:pl-3 md:pr-3 
    lg:pl-5 lg:pr-5
  `)

  const masterViewBreakpointClassesOuter = ref(`
    mr-2 ml-2
  `)
  const masterViewBreakpointClassesInner =  ref(`
    pr-2 pl-2
  `)
  
  const detailViewContainerBreakpointClasses = computed(()=>{
    // return `${detalViewBreakpointClassesOuter.value} ${detalViewBreakpointClassesInner.value}`.replace(/\n/g, " ");
    return `${detalViewBreakpointClassesOuter.value} ${detalViewBreakpointClassesInner.value}`
  })

  const masterViewContainerBreakpointClasses = computed(()=>{
    // return `${masterViewBreakpointClassesOuter.value} ${masterViewBreakpointClassesInner.value}`.replace(/\n/g, " ");
    return `${masterViewBreakpointClassesOuter.value} ${masterViewBreakpointClassesInner.value}`
  })

  return { 
    detalViewBreakpointClassesOuter, 
    detalViewBreakpointClassesInner, 
    detailViewContainerBreakpointClasses, 
    masterViewBreakpointClassesOuter,
    masterViewBreakpointClassesInner,
    masterViewContainerBreakpointClasses,
    checkbox 
  }

}

</script>
