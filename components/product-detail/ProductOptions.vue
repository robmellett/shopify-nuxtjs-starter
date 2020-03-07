<template>
  <div v-if="productOptions">
    <div
      v-for="(productOption, index) in productOptions"
      :key="index"
    >
      <product-option-select
        v-if="!isColorSelector(productOption['name'])"
        :key="productOption['name']"
        :name="productOption['name']"
        :options="productOption['values']"
        @update-product-option="onProductOptionUpdate"
      ></product-option-select>

      <product-option-colour-selector
        v-if="isColorSelector(productOption['name'])"
        :key="productOption['name']"
        :name="productOption['name']"
        :options="productOption['values']"
        @update-product-option="onProductOptionUpdate"
      ></product-option-colour-selector>
    </div>
  </div>
</template>

<script>
const ProductOptionColourSelector = () => import('~/components/product-detail/ProductOptionsColourSelector');
const ProductOptionSelect = () => import('~/components/product-detail/ProductOptionsSelect');

export default {
  name: "ProductOptions",

  props: {
    options: { required: true, type: Array },
  },

  components: {
    ProductOptionColourSelector,
    ProductOptionSelect
  },

  computed: {
    productOptions() {
      return this.options.map((option) => {
        return {
          "name": option.name,
          "values": option.values.map(o => {
            return o.value;
          })
        }
      }).sort((a, b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        })
    }
  },

  methods: {
    onProductOptionUpdate({ key, value }) {
      this.$store.dispatch('product/updateSelectedProductionOptions', { key, value });
    },

    isColorSelector(fieldname) {
      return fieldname.toUpperCase() === 'COLOUR' || fieldname.toUpperCase() === 'COLOR';
    }
  }
}
</script>
