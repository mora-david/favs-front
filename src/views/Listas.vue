<template>
    <div class="container">
      <Addlist></Addlist>
      <div class="tituloLista">Listas</div>
        <div class="container contenedorListas">
          
          <div class="lista" v-for="l in listas" :key="l.id">
            <a :href="'lista/'+ l.id"><div><b>{{l.titulo}}</b></div></a>
            <div>{{l.descripcion}}</div>
            <div>{{l.fecha}}</div>
          </div>
        </div>


    </div>
</template>

<script>
import Addlist from '@/components/AddList.vue'
import axios from 'axios'



export default {
  components:{
    Addlist
  },
  name: 'Listas',
  data: () => ({
    listas: [

    ],
  }),
    created() {
    this.getLists()
  },
  methods:{
        getLists() {
      const dire = 'http://localhost:8000/Dashboard/listas/'
      const hdrs = {headers: {Authorization: "Bearer " + localStorage.token}}
      axios
        .get(dire,hdrs)
        .then((response) => {
          this.listas = response.data
        })
        .catch(() => {
          alert('error')
        })
    }
  
  },
  props: {
    msg: String
  }
}
</script>


<style>
.contenedorListas{
  display:flex;
  flex-wrap:wrap;
  margin:50px;
  
}

.lista{
  width:19%;
  background-color:#dae1db;
  border:1px solid black;
  margin: 5px;
  padding:5px
}

:hover.lista{
  background-color: bisque;
  color:green;
  cursor: pointer;
  font-size:103%
}

.tituloLista{
  margin:15px;
  font-size:2.5rem;
}

</style>
