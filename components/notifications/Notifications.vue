<template>
  <transition name="notify-slide">
    <section
      v-show="show"
      class="fixed bottom-0 right-0"
    >
      <div
        v-for="(notification, index) in notifications"
        :key="index"
        class="rounded m-4 bg-blue-500"
      >
        <p class="text-white font-bold py-2 px-4">
          {{ notification.message }}
        </p>
      </div>
    </section>
  </transition>
</template>

<script>
export default {

  data() {
    return {
      show: false,
      notification: {},
    }
  },

  computed: {
    notifications() {
      return this.$store.getters["notification/items"];
    },

    notificationTypes() {
      return notificationTypes;
    }
  },

  watch: {
    notifications() {
      this.displayNotification();
    }
  },

  mounted() {
    this.displayNotification();
  },

  methods: {
    displayNotification() {
      if (this.notifications && this.notifications.length > 0) {
        let notification = this.notifications[0];

        this.show = true;
        this.notification = notification;

        setTimeout(() => {
          this.show = false;
          this.notification = {};

          this.$store.dispatch("notification/remove", notification);
        }, 3000);
      }
    },

    mapNotificationType(type) {
      return notificationTypes[type];
    }
  },
}
</script>
<style lang="scss">
.notify-slide-leave-active,
.notify-slide-enter-active {
  transition: 0.5s;
}
.notify-slide-enter {
  transform: translate(100%, 0);
}
.notify-slide-leave-to {
  transform: translate(100%, 0);
}
</style>
