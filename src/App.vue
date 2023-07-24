<template>
  <section>
    <header>
      <h1>My friends:</h1>
    </header>
    <form action="">
      <input type="text">
    </form>
    <ul>
      <FriendContact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone="friend.phone"
        :email="friend.email"
        :isFavorite="friend.isFavorite"
        @toggleFavorite="changeIsFriendFavorite"
      />
    </ul>
  </section>
</template>

<script>
  import FriendContact from './components/FriendContact.vue';

  export default {
    name: 'App',
    components: {
      FriendContact,
    },

    data() {
      return {
        friends: [
          {
            id: 1,
            name: 'Illiada Boiko',
            phone: '093 889 1488',
            email: 'kazkoviy@icloud.com',
            isFavorite: true,
          },
          {
            id: 2,
            name: 'Joseph Joestar',
            phone: '090 090 9090',
            email: 'jojo@bizarre.com',
            isFavorite: true,
          },
          {
            id: 3,
            name: 'Giorno Giovanna',
            phone: '044 000 1312',
            email: 'sonof@dio.com',
            isFavorite: false,
          },
        ],
      }
    },

    methods: {
      changeIsFriendFavorite(friendId) {
        const currentFriend = this.friends.find(friend => friend.id === friendId);

        currentFriend.isFavorite = !currentFriend.isFavorite;
      },
    },
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Jost', sans-serif;
  }

  body {
    margin: 0;
  }

  header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    border-radius: 10px;
    padding: 1rem;
    background-color: #1b995e;
    color: white;
    text-align: center;
  }

  #app {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
  }

  #app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #1b995e;
    margin: 0 0 1rem 0;
  }

  #app ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
  }

  #app li {
    margin: 1rem 0;
    font-size: 1.25rem;
    font-weight: bold;
    background-color: #8ddba4;
    padding: 0.5rem;
    color: #1f1f1f;
    border-radius: 25px;
  }

  #app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  }

  #app button:hover,
  #app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
  }
</style>
