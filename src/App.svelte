<script>
	import ButtonCount from './components/ButtonCount.svelte';
	import Photos from './components/Photos.svelte';
	import Input from './components/Input.svelte';
	import Person from './components/Person.svelte';
	import Text from './components/Text.svelte';
	import About from './components/About.svelte';
	import Skill from './components/Skill.svelte';
	
	export let name;
	export let lastName;
 
	let src = 'https://arepa.s3.amazonaws.com/svelte-logo.png';
	let src_logo = '../public/milogo.png';
	const data = {
		name: "willian rojas alba ",
		lastName: "rojas alba",
		age: 0,
	}
</script>

<main>
<h1>Hola soy <b> {name}! {lastName}</b></h1>
	<p>Visita mi repositorio </p>
	<Text anothertext="experiencia en desarrollador de aplicaciones web"></Text>
	<Text ></Text>
	<About>  </About>
<Person {...data} /> 
<Input/>
<img {src} alt="logo">
 <Skill></Skill>
 <Photos></Photos>
 <ButtonCount></ButtonCount>
</main>

<style>
	:global(body){
		background-color: #dbedf3;
		color:#404b69;
	}
	:global(:root) {
		--theme-color: rgb(228, 228, 240);
	}
	:global(body.dark-mode){
		background-color: #404b69;
		color: #f73859;
	}
	 
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	main img {
		width: 30%;
	}

	h1 {
		color: #f73859;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>