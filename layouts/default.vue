<template>
  <div class="flex min-h-screen flex-col">
    <site-header />
    <nuxt class="flex-1" />
    <notifications />
    <site-footer class="mt-auto" />
  </div>
</template>

<script>
const Notifications = () => import('~/components/notifications/Notifications');
const SiteHeader  = () => import('~/components/global/SiteHeader');
const SiteFooter = () => import('~/components/global/SiteFooter');

export default {
  components:  {
    Notifications,
    SiteHeader,
    SiteFooter
  },
}
</script>
