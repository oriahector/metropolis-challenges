import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App);
app.directive("click-outside", {
  beforeMount(el, binding) {
    el.clickOutsideEvent = (evt: MouseEvent) => {
      evt.stopPropagation();
      if (!(el === evt.target || el.contains(evt.target))) {
        binding.value(evt, el);
      }
    };
    // Wait 1 frame otherwise a potential click that mounted the element will immediately trigger a click-outside event:
    window.requestAnimationFrame(() => {
      document.addEventListener("click", el.clickOutsideEvent);
    });
  },
  unmounted(el) {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
});

app.use(router).use(createPinia()).mount("#app");
