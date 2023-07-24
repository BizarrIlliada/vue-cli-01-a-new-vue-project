import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

const components = [
  FriendContact,
  NewFriend,
]

const app = createApp(App);

components.forEach(comp => {
  app.component(comp.name, comp)
})

app.mount('#app');
