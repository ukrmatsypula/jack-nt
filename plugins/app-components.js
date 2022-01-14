import Vue from 'vue';
// UI
import Intro from '@/components/UI/Intro.vue';
import Message from "@/components/UI/Message.vue";
import PostsList from "@/components/blog/PostsList";

// Controls
import AppButton from "@/components/UI/controls/Button.vue";
import AppInput from "@/components/UI/controls/Input.vue";
import AppTextArea from "@/components/UI/controls/TextArea.vue";

// UI
Vue.component('Message', Message);
Vue.component('Intro', Intro);
Vue.component('PostsList', PostsList);

// Controls
Vue.component('AppButton', AppButton);
Vue.component('AppInput', AppInput);
Vue.component('AppTextArea', AppTextArea);
