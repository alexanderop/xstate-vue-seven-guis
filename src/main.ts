import { createApp } from "vue";
import { inspect } from "@xstate/inspect";

inspect();
import App from "./App.vue";

createApp(App).mount("#app");
