<template>
  <button class="flex flex-row relative p-1 border-2 border-transparent text-gray-300 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      class="fill-current"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        d="M17 16a3 3 0 1 1-2.83 2H9.83a3 3 0 1 1-5.62-.1A3 3 0 0 1 5 12V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v1h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H5a1 1 0 0 0 0 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      /></svg>

      <span class="ml-1">{{ count }}</span>
  </button>
</template>

<script>
export default {
  name: 'CartIcon',

  computed: {
    count() {
      let lineItems =  this.$store.getters["checkout/checkout"].lineItems;

      let sum = lineItems.reduce((accumulator, item) => accumulator + item.quantity, 0);
      return sum ? (sum >= 99 ? "99+" : sum) : 0;
    }
  }
}
</script>
