<template>
  <div>
    <nuxt />
    <notifications />
  </div>
</template>

<script>
const Notifications = () => import('~/components/notifications/Notifications');

export default {
  components:  {
    Notifications
  },
}
</script>
