import { createApp } from 'vue';
import App from './App.vue';
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(VueRouter).mount("#app");
