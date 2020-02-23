<template>
  <div class="py-2">
    <label :for="name">{{ name }}</label>
    <select
      v-model="selectedOption"
      :id="name"
      @change="changeOption"
      class="form-select w-full"
    >
      <option
        v-for="option in options"
        :key="option"
        :value="option"
      >{{ option }}</option>
    </select>
  </div>
</template>

<script>
import productOptions from '~/mixins/productOptions';

export default {
  name: "ProductOptionSelect",

  mixins: [productOptions],
}
</script>
