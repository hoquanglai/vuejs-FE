import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/global.css";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css"; //icons
import "primevue/resources/primevue.min.css"; //core css
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import InputText from "primevue/InputText";
import Button from "primevue/Button";
import "../node_modules/@fontsource/roboto/index.css";
import Carousel from "primevue/carousel";

// import "./assets/main.css";

const app = createApp(App);

// app.use(BootstrapVue);
app.use(PrimeVue);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("Carousel", Carousel);
app.use(createPinia());
app.use(router);
app.mount("#app");
