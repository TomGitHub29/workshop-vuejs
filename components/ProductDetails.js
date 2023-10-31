app.component("product-details", {
    props: {
      details: {
        type: Array,
        required: true,
        default: [],
      }
    },
    template:
    /*html*/
    `
    <ul>
      <li
        v-for="detail in details"
        :key="detail.id"
        :style="{ color: detail.color }"
      >
        {{ detail.text }}
      </li>
    </ul>
    `,
    data() {
        return {
        }
    },
});
