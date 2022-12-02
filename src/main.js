import { createApp } from 'vue';
import router from "./router.js";
import store from "./store.js";

import App from './App.vue';
import BaseBox from './components/UI/BaseBox.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseForm from './components/UI/BaseForm.vue';
import BaseTitle from './components/UI/BaseTitle.vue';
import SideBlock from './components/UI/SideBlock.vue'; 

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-box", BaseBox);
app.component("base-button", BaseButton);
app.component("base-form", BaseForm);
app.component("base-title", BaseTitle);
app.component("side-block", SideBlock);

app.mount("#app");