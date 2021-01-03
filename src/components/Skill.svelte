<script>
	import Skill from './Skill.svelte';
    let skills=[
        {
            id:1,
            name:"Html"
        },
        {
            id:2,
            name:"Css"
        },
        {
            id:3,
            name:"JavaScript"
        },
        {
            id:4,
            name:"Svelte"
        },
    ]
</script>
<style>
    .Skill{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ul{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    li{
        display: inline;
        margin: 0 0 0 0.4em;
    }
</style>
<div class="Skills">
    <ul>
    {#each skills as skill,i}
    <li>{skill.name}</li>
    {/each}
    </ul>
</div>