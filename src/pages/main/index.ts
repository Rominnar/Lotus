import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '../../assets/scss/_global.scss';

// elementui
import elementCreator from '../../plugins/element';

const app = createApp(App);
app.use(store).use(router).mount('#app');

// elementui use
elementCreator(app);
