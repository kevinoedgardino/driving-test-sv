<script>
export default {
    setup() {
        document.title = "Información Adicional"
    }
}
</script>
<template>
    <div class="d-flex justify-content-center">
        <div class="d-block">
            <h1 class="h1 m-4 mt-3 p-2 fs-1 text-center title-t">Información Adicional</h1>  
            <h2 class="h2 fs-5 text-center subtitle-t">Algunos datos que tambien debes saber</h2>
            <router-link class="homelink" to="/driving-test-sv"><i class="material-symbols-outlined">west</i> Volver al inicio</router-link>
        </div>
    </div>
    <div class="d-block m-2 mt-5">
        <div class="d-flex justify-content-center">
            <div>
                <h3>Tipos de placas que existen</h3>
                <div class="table-responsive mt-4 mb-4">
                    <table class="table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">Letra</th>
                                <th scope="col">Significado</th>
                            </tr>
                        </thead>
                        <tbody class="text-light">
                            <tr>
                                <td>O</td>
                                <td>Oficial</td>
                            </tr>
                            <tr>
                                <td>N</td>
                                <td>Nacional</td>
                            </tr>
                            <tr>
                                <td>P</td>
                                <td>Particular</td>
                            </tr>
                            <tr>
                                <td>A</td>
                                <td>Alquiler</td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>Camión</td>
                            </tr>
                            <tr>
                                <td>V</td>
                                <td>Vendedor</td>
                            </tr>
                            <tr>
                                <td>T</td>
                                <td>Tráiler</td>
                            </tr>
                            <tr>
                                <td>F</td>
                                <td>Furgoneta</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>Motos</td>
                            </tr>
                            <tr>
                                <td>D</td>
                                <td>Discapacitados</td>
                            </tr>
                            <tr>
                                <td>E</td>
                                <td>Ejercito</td>
                            </tr>
                            <tr>
                                <td>RE</td>
                                <td>Remolque</td>
                            </tr>
                            <tr>
                                <td>AB</td>
                                <td>Autobús</td>
                            </tr>
                            <tr>
                                <td>MI</td>
                                <td>Misión Internacional</td>
                            </tr>
                            <tr>
                                <td>MB</td>
                                <td>Microbús</td>
                            </tr>
                            <tr>
                                <td>CD</td>
                                <td>Cuerpo Diplomático</td>
                            </tr>
                            <tr>
                                <td>CC</td>
                                <td>Cuerpo Consular</td>
                            </tr>
                            <tr>
                                <td>PR</td>
                                <td>Provisionales</td>
                            </tr>
                            <tr>
                                <td>PNC</td>
                                <td>Policia Nacional Civil</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="mb-5">
                    <h3>Links útiles</h3>
                    <ul class="list-group list-group-flush adas">
                        <li class="list-group-item"><a class="d-block m-3" href="https://www.transparencia.gob.sv/institutions/vmt/documents/7534/download">Señalización Vial</a></li>
                        <li class="list-group-item"><a class="d-block m-3" href="https://www.sertracen.com.sv/index.php/listado-de-infracciones">Listado de infracciones</a></li>
                    </ul>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .title-t {
        text-transform: uppercase;
    }
    .subtitle-t {
        font-family: 'Varela Round', arial;
        font-weight: lighter;
    }
    .homelink {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: #fff;
    }
    .homelink i {
        margin-right: 5px;
    }
    .list-group li {
        background-color: var(--bg-color-secondary);
    }
</style>