<template>
    <div class="notfound">
        <img src="../assets/images/confused_car.svg" alt="Confused car">
        <p>Alto ahí motorista <i class="material-symbols-outlined">pan_tool</i></p>
        <p>404 | La ruta que estas bucando no existe</p>
        <router-link to="/">Ir al inicio</router-link>
    </div>    
</template>
<style scoped>
    .notfound {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .notfound img {
        width: 30rem;
        height: 30rem;
    }
    .notfound p {
        font-size: 3em;
        text-align: center;
    }

    @media (max-width: 550px) {
        .notfound img {
            width: 20rem;
            height: 21rem;
        }
        .notfound p {
            font-size: 1em;
            text-align: center;
        }
    }
</style>