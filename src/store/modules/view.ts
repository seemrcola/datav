import { defineStore } from 'pinia'
import { markRaw, ref } from 'vue'

export interface IComponent {
  id: string
  type: string
  name: string
  clientX: number
  clientY: number
  height: number
  width: number
  component: {
    component: any
    name: string
  }
}

export const useViewStore = defineStore('view', () => {
  const components = ref<IComponent[]>([])

  function addComponent(component: IComponent) {
    components.value.push(markRaw(component))
  }

  function removeComponent(component: IComponent) {
    const index = components.value.findIndex(comp => comp.id === component.id)
    components.value.splice(index, 1)
  }

  function setComponentStyle(component: IComponent) {
    console.log('setComponentStyle')
    return {
      position: 'absolute',
      left: component.clientX,
      top: component.clientY,
    }
  }

  return {
    components,
    removeComponent,
    addComponent,
    setComponentStyle,
  }
})
