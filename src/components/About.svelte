<!--logica de nuestra app -->
<script>
    // las importaciones van primero
	import Button from './Button.svelte';
    let count= 0;
    let profesion=`DESARROLLADOR WEB`;
    let desarrolloWeb=`MIS HABILIDADES`;
    let styles={
        dartMode: false,
    }
    let habilidades={
        web:false,
        backEnd:false,
        mobile:false,
        projects:false,
        resume:false,
    }
    // funcion suma
    function suma(){
        count+=2;
    }
    function web(){
        habilidades.web=!habilidades.web;
        habilidades.backEnd=false;
        habilidades.mobile=false;
        habilidades.projects=false;
        habilidades.resume=false;
    }
    function backEnd(){
        habilidades.web=false;
        habilidades.mobile=false;
        habilidades.projects=false;
        habilidades.resume=false;
        habilidades.backEnd=!habilidades.backEnd;
    }
    function mobile(){
        habilidades.web=false;
        habilidades.backEnd=false;
        habilidades.projects=false;
        habilidades.resume=false;
        habilidades.mobile=!habilidades.mobile;
    }
    function projects(){
        habilidades.web=false;
        habilidades.backEnd=false;
        habilidades.mobile=false;
        habilidades.resume=false;
        habilidades.projects=!habilidades.projects;
    }
    function resume(){
        habilidades.web=false;
        habilidades.backEnd=false;
        habilidades.mobile=false;
        habilidades.projects=false;
        habilidades.resume=!habilidades.resume;
    }
    function toggle(){
        habilidades.web=false;
        styles.dartMode=!styles.dartMode;
        window.document.body.classList.toggle("dark-mode");
    }
</script>
<!-- stylos -->
<style>
p{
    color:var(--theme-color);
    font-size: 30px;
}
</style>

<div class="About">
    <p>
    </p>
    <!-- svelte-ignore empty-block -->
    
    <h1> {desarrolloWeb}</h1>
    <!-- svelte-ignore empty-block -->
    {#if !styles.dartMode}
    {:else}
    {/if}
    {#if habilidades.web}
    <h1>diseño/creacion de paginas web con:</h1>
    <li> html</li>
    <li> css</li>
    <li> bootstrap</li>
    <li> javascript</li>
    <li> wordpres</li>
    <li> Elementor free/pro</li>
    <li> woocomerce</li>     
    <li> landing page</li>     
    <li> Eslider</li>     
    {/if}
    {#if habilidades.backEnd}
    <h1>creacion de aplicacione web:</h1>
    <li> Php (avanzando)</li>
    <li> RoR intermedio</li>
    <li> MYSQL</li>
    <li> Reportes fpdf (avanzado)</li>
    <li> Reportes de tikets mikePos (Avanzado)</li>
    <li> modelado de base de datos</li>
    <li> servidor apache con cpanel</li>
    <li> administracion de correos corporativos</li>
    <li> instalacion de certificados ssl</li>
    {/if}
    {#if habilidades.mobile}
    <h1>creacion de aplicaciones android (intermedio):</h1>
    <li> Flutter (intermedio)</li>
    <li> implementacion de consumo de apis</li>
    {/if}
    {#if habilidades.projects}
    <h1> Trabajos Realizados:</h1>
    <li> pagina web www.caincoyacuiba.com</li>
    <li> pagina web www.carrazanaimportaciones.com</li>
    <li> ecommerce www.ja-company.com</li>
    <li> ecommerce www.pedidopet.com</li>
    <li> ecommerce www.divaracreaciones.com</li>
    <li> ecommerce www.americanbol.com.bo</li>
    <li> pagina web www.acontri.com</li>
    <li> software  administrativo para pitza hits</li>
    <li> software  administrativo para parrillada el arca</li>
    <li> software  administrativo para tienda bety</li>
    <li> software  administrativo para cotillones melissa</li>
    <li> software  administrativo para megabites</li>
    <li> software  contable para linea de transporte 56,82 </li>
    {/if}
    {#if habilidades.resume}
    <h1> Acerca de mi:</h1>
    <li> hola soy un desarrollador web frelancer </li>
    <li> fundador de boliviansoftware.org </li>
    <li> 3 años de experiencia en el area de desarrollo web</li>
    <li> ingles intermedio(escrito/conversacional)</li>
 
    {/if}
    <Button text="click" {count} on:click={suma}></Button>
    <Button text="modo oscuro" on:click={toggle}></Button>
    <Button text="Front End" on:click={web}></Button>
    <Button text="Back End" on:click={backEnd}></Button>
    <Button text="Mobile" on:click={mobile}></Button>
    <Button text="Trabajos Realizados" on:click={projects}></Button>
    <Button text="resume" on:click={resume}></Button>
     
     
    <!-- <button on:click ={web} >  Front End  </button> -->
    <!-- <button on:click ={backEnd} >  Back End  </button> -->
    <!-- <button on:click ={mobile} >  movile  </button> -->
    <!-- <button on:click ={projects} >  Trabajos Realizados</button>
    <button on:click ={resume} > acerca de mi</button> -->

</div>