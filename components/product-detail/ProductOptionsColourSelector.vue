<template>
  <div class="pt-2">
    <span>{{ name }}</span>

    <div class="flex flex-wrap">
      <label
        v-for="option in options"
        :for="option"
        :key="option"
        :name="option"
        :class="option | lowercase"
      >
        <input
          v-model="selectedOption"
          :id="option"
          :value="option"
          type="radio"
          name="option"
          @change="changeOption"
          class="hidden"
        >
        <div
          class="layer"
          :class="tailwindColor(option, 700)"
        ></div>
        <div class="button inline-block relative h-8 w-8 m-4 cursor-pointer">
          <span
            class="block absolute h-10 w-10 p-0 hover:px-16 rounded-full"
            :class="tailwindColor(option, 500)"
          ></span>
        </div>
        <p
          :class="{ 'text-gray-700': isSelected(option) }"
          class="text-center"
        >{{ option }}</p>
      </label>
    </div>
  </div>
</template>

<script>
import productOptions from '~/mixins/productOptions';

export default {
  name: "ProductOptionColourSelector",

  mixins: [productOptions],

  methods: {
    isSelected(value) {
      return this.selectedOption === value;
    },

    tailwindColor(value, lightness) {
      value = value.toLowerCase();

      if (['black', 'white'].includes(value)) {
        return `bg-${value}`;
      }

      return `bg-${value}-${lightness}`;
    }
  },

  filters: {
    lowercase(value) {
      return value.toLowerCase();
    }
  }
}
</script>

<style lang="scss">
  /**
  *	Append Product Colours Here to stop PurgeCSS from removing them on production build
  * bg-black
  * bg-blue-500, bg-blue-700,
  * bg-indigo-500, bg-indigo-700
  **/

/**
  *	Example From https://codepen.io/tobiasdev/pen/YWpBxX/
  **/
.button {
  span {
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    transition: ease 0.3s;
  }
}

.button {
  span:hover {
    padding: 25px;
  }
}
</style>
