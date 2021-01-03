import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'willian',
		lastName: 'rojas alba',
	}
});

export default app;