<script>
    import {onMount}from 'svelte';
    let photos=[];
    onMount( async () =>{
        console.log("logggggggg");
         console.log('onMount');
        const response=await fetch('https://coronavirus-19-api.herokuapp.com/countries/bolivia');
        photos=await response.json();
        console.log(photos);
    });
</script>
<div class="Photos">
    <figure>
        <img width="50%" src="https://www.celag.org/wp-content/uploads/2019/04/bolivia-en-la-geopolitica-mundial.jpg">
        <p>pais {photos['country']}</p>

    </figure>
    <figure>
        <img width="50%" src="https://www.celag.org/wp-content/uploads/2019/04/bolivia-en-la-geopolitica-mundial.jpg">
        <p>casos  {photos['cases']}</p>
    </figure>
    <figure>
        <img width="50%" src="https://www.celag.org/wp-content/uploads/2019/04/bolivia-en-la-geopolitica-mundial.jpg">
        <p>casos de hoy  {photos['todayCases']}</p>
    </figure>
    <figure>
        <img width="50%" src="https://www.celag.org/wp-content/uploads/2019/04/bolivia-en-la-geopolitica-mundial.jpg">
        <p>total fallecidos {photos['deaths']}</p>
    </figure>
    <figure>
        <img width="50%" src="https://www.celag.org/wp-content/uploads/2019/04/bolivia-en-la-geopolitica-mundial.jpg">
        <p>fallecidos de hoy {photos['todayDeaths']}</p>
    </figure>
  
    <!-- {#each photos as photo} -->
    <!-- <p>d</p> -->
 
        <!-- svelte-ignore a11y-structure -->
        <!-- <figcaption> {photo.title}</figcaption> -->
<!-- {:else} -->
    <!-- <p>loading...</p> -->
<!-- {/each} -->
</div>  
<style>
    .Photos{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5,1fr);
        grid-gap: 100px;
    }
</style>