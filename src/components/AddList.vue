<template>
    <div>
        <div class="container">
            <div style="display:flex">
                <a>titulo</a>
                <input type="text" v-model="lista.titulo">
                <a>Descripcion</a>
                <input type="text" v-model="lista.descripcion">
                <button @click="createList">Crear Lista</button>


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
      descripcion:"2",
      favoritos:[]
    } ,
  }),
  methods:{
        createList() {
      const dire = 'http://localhost:8000/Dashboard/listas/'
      const data = this.lista
      const hdrs = {headers: {Authorization: "Bearer " + localStorage.token}}
      axios
        .post(dire, data, hdrs)
        .then((response) => {
          console.log(response.data)
          location.reload();
        })
        .catch(() => {
          alert('error')
        })
    }
  
  },
  name: 'Addlist',
  props: {
    msg: String
  }
}
</script>