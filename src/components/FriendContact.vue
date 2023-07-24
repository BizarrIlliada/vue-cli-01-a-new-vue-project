<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="showFriendsDetails">
      {{ areDetailsVisible ? 'Hide' : 'Show' }} details
    </button>
    <button @click="changeFavoriteStatus">
      Make {{ isFavorite ? 'not' : '' }} favorite
    </button>
    <ul v-if="areDetailsVisible">
      <li>
        Phone: {{ phone }}
      </li>
      <li>
        Email: {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'FriendContact',
    props: {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
        validator(value) {
          return value.trim().split(' ').length >= 2;
        },
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      isFavorite: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    emits: {
      toggleFavorite(id) {
        if (id) {
          return true;
        } else {
          console.warn('ID is missing!');
          return false;
        }
      }
    },

    data() {
      return {
        areDetailsVisible: false,
      }
    },

    methods: {
      showFriendsDetails() {
        this.areDetailsVisible = !this.areDetailsVisible;
      },

      changeFavoriteStatus() {
        this.$emit('toggleFavorite', this.id)
      },
    }
  }
</script>
