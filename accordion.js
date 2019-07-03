export default {
    definition: {
      /* classical property panel definition */
      type: "items",
      component: "accordion",
      items:{
        dimensions: {
          uses: "dimensions",
          min: 1,
          max: 2
        },
        measures: {
          uses: "measures",
          min: 1,
          max: 2
        },
        sorting: {
          uses: "sorting"
        },
        settings: {
          uses: "settings"
        }
      }
    },
    support: {
      snapshot: true,
    }
  };
