<template>
    <div>
      <div class="container">
        <p style="margin:50px; font-size:2rem">Insertar nuevo favorito</p>
        <p>Favor de insertar el enlace completo con https (ej. https://www.youtube.com/)</p>
            <div style="display:flex; margin:20px">
                <a>titulo</a>
                <input type="text" v-model="fav.titulo">
                <a>Categorias</a>
                <input type="text" v-model="fav.categorias">
                <a>Descripcion</a>
                <input type="text" v-model="fav.descripcion">
                <a>Enlace</a>
                <input type="text" v-model="fav.enlace">
                <button @click="createList()">
                  Crear Favorito
                </button>
            </div>
         </div>
        <div class="container">
            <!-- Aqui van las lista numero: {{$route.params.id}} -->
            <h3 class="titulo">{{info.titulo}}</h3>

            <div class="card">
  <div v-for="l in lista" :key="l.id">
    <div class="cheader"></div>
    <div class="card-header">
    {{l.titulo}}
  </div>
  <div class="card-body">
    <h5 class="card-title">{{l.categorias}}</h5>
    <p class="card-text">{{l.descripcion}}</p>
    <a :href= l.enlace target=blank class="btn btn-primary">IR</a>
  </div>
  </div>
</div>

        </div>


    </div>
</template>

<script>
//import AddSite from '@/components/AddSite.vue'
import axios from 'axios'

export default {
  components:{
    //AddSite
  },
  name: 'Lista',
    data: () => ({
    info:"",
    lista: [{id:'1',titulo:'titulo1',categoria:'video',descripcion:'una breve descripción',link:'https://www.youtube.com/'},
    {id:'2',titulo:'titulo2',categoria:'documentación',descripcion:'una breve descripción2',link:'https://www.google.com/'},
    {id:'2',titulo:'titulo2',categoria:'documentación',descripcion:'una breve descripción2',link:'https://www.google.com/'}],
    fav:
    {
      titulo:"1",
      categorias:"2",
      descripcion:"",
      enlace:""
    } ,
  }),
  
  created() {
    this.getList()
  },
  methods:{
    addtoList(p){
      var arreglo = []
      for (let i = 0; i < this.lista.length ; i++) {
      arreglo.push(this.lista[i].id);}

      arreglo.push(p)
      

      let formUpdate = {
        titulo : this.info.titulo,
        descripcion : this.info.descripcion,
        favoritos : arreglo
      }

      const dire = 'http://localhost:8000/Dashboard/listas/' + this.$route.params.id + '/'
      const hdrs = {headers: {Authorization: "Bearer " + localStorage.token}}
      axios
        .put(dire, formUpdate, hdrs)
        .then((response) => {
          console.log(response.data)
          location.reload();
        })
        .catch(() => {
          alert('error2')
        })


        },
        createList() {
      const dire = 'http://localhost:8000/Dashboard/favs/'
      const data = this.fav
      const hdrs = {headers: {Authorization: "Bearer " + localStorage.token}}
      axios
        .post(dire, data, hdrs)
        .then((response) => {
          this.addtoList(response.data.id)
          //location.reload();
        })
        .catch(() => {
          alert('error')
        })
    },
        getList() {
      const dire = 'http://localhost:8000/Dashboard/listas/' + this.$route.params.id + '/'
      const hdrs = {headers: {Authorization: "Bearer " + localStorage.token}}
      axios
        .get(dire,hdrs)
        .then((response) => {
          
          


          this.info = response.data
          this.lista = response.data.favoritos
          
          

        
          console.log(response.data.favoritos)
        })
        .catch(() => {
          console.log('error3')
          window.location.href = '/listas/';
        })
    }
  
  },
  props: {
    msg: String
  }
}
</script>


<style>
.titulo{
  padding-top: 50px;
  font-size: 3rem;
  font-style:italic;
}

.catCont{
  padding:15px
  
}

</style>