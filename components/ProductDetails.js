app.component("product-details", {
  template:
    /*html*/
    `
    <ul>
        <li v-for="detail in details" :key="detail.id" :style="{color:detail.color}">
            {{detail.text}}
        </li>
    </ul>
    `,
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      
    };
  },
});
