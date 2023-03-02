import { defineStore } from "pinia";

export const useTreeStore = defineStore("tree", {
  state: () => ({
    tree: {
      label: "Multi Level Menu Component",
      nodes: [
        {
          label: "Item 1",
          nodes: [
            {
              label: "Item 1.1",
            },
            {
              label: "Item 1.2",
              nodes: [
                {
                  label: "Item 1.2.1",
                  nodes: [
                    {
                      label: "Item 1.2.1.1",
                      nodes: [
                        {
                          label: "Item 1.2.1.1.1",
                        },
                      ],
                    },
                    {
                      label: "Item 1.2.1.2",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "item2",
          nodes: [
            {
              label: "Item 2.1",
              nodes: [
                {
                  label: "Item 2.1.1",
                  nodes: [
                    {
                      label: "Item 2.1.1.2",
                    },
                  ],
                },
                {
                  label: "Item 2.1.2",
                  nodes: [
                    {
                      label: "Item 2.1.2.2",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "item 3",
        },
      ],
    },
  }),
});
