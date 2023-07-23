<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="showFriendsDetails">
      {{ areDetailsVisible ? 'Hide' : 'Show' }} details
    </button>
    <ul v-if="areDetailsVisible">
      <li>
        Phone: {{ friend.phone }}
      </li>
      <li>
        Email: {{ friend.email }}
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'FriendContact',
    props: ['friend'],

    data() {
      return {
        areDetailsVisible: false,
      }
    },

    methods: {
      showFriendsDetails() {
        this.areDetailsVisible = !this.areDetailsVisible;
      }
    }
  }
</script>
