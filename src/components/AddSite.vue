<template>
    <div>
        <div class="container">
            <div style="display:flex; margin:20px">
                <a>titulo</a>
                <input type="text" v-model="lista.titulo">
                <a>Categorias</a>
                <input type="text" v-model="lista.categorias">
                <a>Descripcion</a>
                <input type="text" v-model="lista.descripcion">
                <a>Enlace</a>
                <input type="text" v-model="lista.enlace">
                <button @click="createList()">
                  Crear Favorito
                </button>


            </div>
         </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
  data: () => ({
    lista:
    {
      titulo:"1",
      categorias:"2",
      descripcion:"",
      enlace:""
    } ,
  }),
  methods:{
        addtoList(){
          const dire = 'http://localhost:8000/Dashboard/favs/'
      const data = this.lista
      const hdrs = {headers: {Authorization: "Bearer " + localStorage.token}}
      axios
        .post(dire, data, hdrs)
        .then((response) => {
          
          location.reload();
        })
        .catch(() => {
          alert('error')
        })


        },
        createList() {
      const dire = 'http://localhost:8000/Dashboard/favs/'
      const data = this.lista
      const hdrs = {headers: {Authorization: "Bearer " + localStorage.token}}
      axios
        .post(dire, data, hdrs)
        .then((response) => {
          
          location.reload();
        })
        .catch(() => {
          alert('error')
        })
    }
  
  },
  name: 'AddSite',
  props: {
    msg: String
  }
}
</script>