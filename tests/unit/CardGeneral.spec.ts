import { mount } from "@vue/test-utils";

import CardGeneral from "../../src/components/card-general/CardGeneral.vue";
jest.mock("../../src/assets/images/Link.svg", () => ({ el: "<svg />" }));

describe("Card General component", () => {
  const paper = {
    type: "Original research",
    title:
      "Black Hole Mass Estimation in Type 1 AGN: HB vs. Mg II Lines and the Role of Balmer Continuum",
    journal: "Frontiers in Astronomy and Space Sciences",
    section: "Extragalactic Astronomy",
    editor: {
      id: 6005,
      fullName: "Mccullough Morrow",
      role: "Specialty Chief Editor",
      publications: 88,
      views: 60449,
      followers: 2447,
      pictureUrl: "https://loop.frontiersin.org/images/profile/6005/74",
      profileUrl: "https://loop.frontiersin.org/people/6005",
      affiliations: [
        {
          id: 2037,
          name: "Insectus",
          city: "Faywood",
          country: "Faroe Islands",
        },
        {
          id: 2620,
          name: "Buzzness",
          city: "Islandia",
          country: "Liechtenstein",
        },
        {
          id: 2528,
          name: "Gadtron",
          city: "Adamstown",
          country: "New Zealand",
        },
      ],
    },
    yourself: {
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
    },
    authors: [
      {
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
      },
    ],
  };
  const wrapper = mount(CardGeneral, { props: { data: paper } });

  it("should render the template correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
