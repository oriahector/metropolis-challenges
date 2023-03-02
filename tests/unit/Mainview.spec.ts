import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import Mainview from "../../src/modules/main-view/MainView.vue";

describe("Mainview module", () => {
  const wrapper = mount(Mainview, {
    global: {
      plugins: [createPinia()],
    },
  });

  it("should render the template correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
