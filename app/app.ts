import { createApp } from 'nativescript-vue';
import Menu from './components/Menu.vue';

import { installPlugin } from '@nativescript-community/template-snippet/vue3/install';

const app = createApp(Menu);
installPlugin(app);
app.start();
