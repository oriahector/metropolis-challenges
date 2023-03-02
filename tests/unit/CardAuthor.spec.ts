import { mount } from "@vue/test-utils";

import CardAuthor from "../../src/components/card-author/CardAuthor.vue";
jest.mock("../../src/assets/images/Link.svg", () => ({ el: "<svg />" }));
import Link from "../../src/assets/images/Link.svg";

describe("CardAuthor component", () => {
  const authordata = {
    id: 28744,
    fullName: "Ramsey Whitehead",
    role: "Assistant Field Chief Editor",
    publications: 99,
    views: 73503,
    followers: 2242,
    pictureUrl: "https://loop.frontiersin.org/images/profile/28744/74",
    profileUrl: "https://loop.frontiersin.org/people/28744",
    affiliations: [
      {
        id: 2620,
        name: "Buzzness",
        city: "Islandia",
        country: "Liechtenstein",
      },
    ],
  };
  const wrapper = mount(CardAuthor, { props: { authordata } });

  it("should render the template correctly", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.findComponent(Link).exists()).toBeTruthy();
  });
});
