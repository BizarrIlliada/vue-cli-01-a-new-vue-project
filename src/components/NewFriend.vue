<template>
  <form
    @submit.prevent="submitForm"
  >
    <div class="input-container">
      <label>Name:</label>
      <input
        type="text"
        placeholder="Enter a full name"
        v-model="name"
      >
    </div>
    <div class="input-container">
      <label>Phone:</label>
      <input
        type="tel"
        placeholder="Don't use brackets"
        v-model="phone"
      >
    </div>
    <div class="input-container">
      <label>Email:</label>
      <input
        type="email"
        placeholder="Enter a valid address"
        v-model="email"
      >
    </div>
    <div>
      <button type="submit">
        Add friend
      </button>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'NewFriend',
    emits: ['addNewFriend'],

    data() {
      return {
        name: '',
        phone: '',
        email: '',
      };
    },

    methods: {
      submitForm() {
        this.$emit('addNewFriend', {
          name: this.name,
          phone: this.phone,
          email: this.email,
          id: this.id,
        });

        this.name = '';
        this.phone = '';
        this.email = '';
      }
    },
  }
</script>