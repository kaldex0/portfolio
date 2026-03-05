import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const redirectParam = new URLSearchParams(window.location.search).get('redirect')
if (redirectParam) {
	const cleaned = redirectParam.startsWith('/') ? redirectParam : `/${redirectParam}`
	const target = cleaned.replace(/\/$/, '') || '/'
	router.replace(target)
}

createApp(App).use(router).mount('#app')
