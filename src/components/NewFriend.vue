<template>
  <form
    @submit.prevent="submitForm"
  >
    <input
      type="text"
      placeholder="Name"
      v-model="name"
    >
    <input
      type="text"
      placeholder="Phone"
      v-model="phone"
    >
    <input
      type="text"
      placeholder="Email"
      v-model="email"
    >
    <button type="submit">
      Ok
    </button>
  </form>
</template>

<script>
  export default {
    name: 'NewFriend',
    props: {
      id: {
        type: Number,
        required: true,
      }
    },
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