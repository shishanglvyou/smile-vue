import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Button, Row, Col,Search , Swipe , SwipeItem, Lazyload,Grid, GridItem ,Image,List,Field,NavBar,Cell, CellGroup,Loading,Tab,Tabs,PullRefresh,Stepper,Tabbar, TabbarItem} from 'vant'
Vue.use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(Image).use(List).use(Field).use(NavBar).use(Cell).use(CellGroup).use(Loading).use(Tab).use(Tabs).use(PullRefresh).use(Stepper).use(Tabbar).use(TabbarItem)

Vue.config.productionTip = false

Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
