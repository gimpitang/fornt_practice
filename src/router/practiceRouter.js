import VuetifyComponent from "@/components/practice/VuetifyComponent.vue"
import ModelingComponent from "@/components/practice/ModelingComponent.vue"
export const practiceRouter = [
    {
        path: '/practice/vuetify',
        name: 'VuetifyComponent',
        component: VuetifyComponent
    },
    {
        path: '/practice/modeling',
        name: 'ModelingComponent',
        component: ModelingComponent
    }
]
