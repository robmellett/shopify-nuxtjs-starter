<template>
  <div class="py-2">
    <label :for="name">{{ name }}</label>
    <select
      v-model="selectedOption"
      :id="name"
      @change="changeOption"
      class="form-select block appearance-none w-full md:w-1/2 lg:w-full bg-gray-200 border border-gray-200
      text-gray-700 py-3 px-4 pr-8 rounded leading-tight
      focus:outline-none focus:bg-white focus:border-gray-500"
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
