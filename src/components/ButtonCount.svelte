<script>
import {count} from "../store/store.js";
function handleClick(){
    count.update(n => n+1);
}

</script>
<style>
    button{
        background-color: orange;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>
<button on:click={handleClick}>
    like {$count===0 ?"":$count}
</button>