import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

const components = [
  FriendContact,
]

const app = createApp(App);

components.forEach(comp => {
  app.component(comp.name, comp)
})

app.mount('#app');
