import { createApp, defineAsyncComponent } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('AppSvgIcon', defineAsyncComponent(() => import( /* @vite-ignore */ './components/AppSvgIcon.vue')));

app.mount('#app');
