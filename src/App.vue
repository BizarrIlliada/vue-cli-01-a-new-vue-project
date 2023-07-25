<template>
  <section>
    <header>
      <h1>Add new friend</h1>
    </header>
    <NewFriend
      @addNewFriend="addFriend"
    />
  </section>
  <h2 v-if="friends.length">My friends:</h2>
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
      @deleteFriend="deleteFriendFromArray"
    />
  </ul>
</template>

<script>
  import FriendContact from './components/FriendContact.vue';
  import NewFriend from './components/NewFriend.vue';

  export default {
    name: 'App',
    components: {
    FriendContact,
    NewFriend,
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

      addFriend(obj) {
        const { name, phone, email } = obj;
        obj.isFavorite = false;
        obj.id = new Date().getTime();

        if (name.trim().split(' ').length < 2) {
          console.warn('Enter correct name!');
          return;
        }

        if (isNaN(phone.trim().split(' ').join(''))
        || phone.trim().length < 8) {
          console.warn('Enter correct phone number!');
          return;
        }
        
        if (!email.includes('@') || email.length < 8) {
          console.warn('Enter correct email!');
          return;
        }
        console.log(obj);

        this.friends.unshift(obj)
      },

      deleteFriendFromArray(friendId) {
        const currentFriendIndex = this.friends.findIndex(friend => friend.id === friendId)

        this.friends.splice(currentFriendIndex, 1)
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
    margin-bottom: 1rem;
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

  #app form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-bottom: 3rem;
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

  .input-container {
    display: flex;
    justify-content: space-between;
    width: 220px;
  }
</style>
