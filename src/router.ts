import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Tabs from './components/TabsDemo.vue'
import DocDemo from './components/Doc.vue'

import Intro from './views/Intro.vue';
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        {
            path:'/',component:Home,
        },
        {
            path:'/doc',component:Doc,
            children:[
                {path:'',component:DocDemo},
                { path: "intro", component: Intro },
                { path: "get-started", component: GetStarted },
                { path: "install", component: Install },
                {path:'switch',component:Switch},
                {path:'button',component:Button},
                {path:'dialog',component:Dialog},
                {path:'tabs',component:Tabs}
            ]
        }
    ]
})
