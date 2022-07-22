import { defineStore } from 'pinia'

export const useStylesStore = defineStore('styles', {
  state: () => ({
    DetailView: {
      detalViewBreakpointClassesOuter: `
        mr-2 ml-2
        md:ml-3 md:mr-3 
        lg:ml-5 lg:mr-5
      `,
      detalViewBreakpointClassesInner: `
        pr-2 pl-2 
        md:pl-3 md:pr-3 
        lg:pl-5 lg:pr-5
      `,
    }
  }),
  getters: {
    breakpointClasses: state => `${state.DetailView.detalViewBreakpointClassesInner} ${state.DetailView.detalViewBreakpointClassesOuter}`
  },
})