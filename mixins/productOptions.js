export default {
  props: {
    name: { required: true, type: String },
    options: { required: true, type: Array }
  },

  data() {
    return {
      selectedOption: Array.from(this.options)[0]
    };
  },

  mounted() {
    // Force an update on parent
    this.changeOption();
  },

  methods: {
    changeOption() {
      this.$emit("update-product-option", {
        key: this.name,
        value: this.selectedOption
      });
    }
  }
};
