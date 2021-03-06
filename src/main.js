import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '@/assets/spacing.scss';
import 'github-fork-ribbon-css/gh-fork-ribbon.css';

Vue.use(Buefy);
Vue.config.productionTip = false;

import router from './router';

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
