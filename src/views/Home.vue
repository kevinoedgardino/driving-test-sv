<script>
export default {
    setup() {
        document.title = "Examen de Manejo SV"
    }
}
</script>

<template>
    <div class="d-flex justify-content-center">
        <div class="d-block">
            <h1 class="h1 m-4 mt-3 p-2 fs-1 text-center title">Práctica para Examenes del VMT <span>El Salvador</span></h1>  
            <h2 class="h2 fs-5 text-center subtitle">Elige el examen que quieres practicar</h2>
        </div>
    </div>
    <div class="d-flex flex-column justify-content-center selector">
        <div class="select-container">
            <router-link class="theoric select m-3" to="/driving-test-sv/teorico">
                <img src="../assets/images/theoretical-select-image.webp" alt="Teorico">
                <h4>Teórico #1<i class="material-symbols-outlined">keyboard_double_arrow_right</i></h4>
            </router-link>
            <router-link class="theoric select m-3" to="/driving-test-sv/teorico-2">
                <img src="../assets/images/theoretical-select-image-2.webp" alt="Teorico 2">
                <h4>Teórico #2<i class="material-symbols-outlined">keyboard_double_arrow_right</i></h4>
            </router-link>
            <router-link class="psycho select m-3" to="/driving-test-sv/psicologico">
                <img src="../assets/images/psychological-select-image.webp" alt="Psicologico">
                <h4>Psicológico<i class="material-symbols-outlined">keyboard_double_arrow_right</i></h4>
            </router-link>
            <router-link class="more-info select m-3" to="/driving-test-sv/informacion-adicional">
                <img src="../assets/images/more-info.webp" alt="Mas informacion">
                <h4>Más Información<i class="material-symbols-outlined">keyboard_double_arrow_right</i></h4>
            </router-link>
            <br>
            <br>
        </div>
        <p class="text-center mt-4"><span>&#9432;</span> Las preguntas aún no están adaptadas a la nueva reforma de la Ley de Transporte Terrestre, Tránsito y Seguridad Vial aprobada por la Asamble Legislativa el 25 de enero de 2023.</p>
    </div>
</template>