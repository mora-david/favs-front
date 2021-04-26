<template>
  <div class="container" style="display:flex; justify-content:space-around">
    
      <div>
        <div class="container" style="width:720px">
          <div class="card bg-light">
            <article class="card-body mx-auto" style="max-width: 400px">
              <h4 class="card-title mt-3 text-center">Create Account</h4>
              <form @submit.prevent="register1()">
                <div class="form-group input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    name=""
                    class="form-control"
                    placeholder="Full name"
                    type="text"
                    v-model="form2.username"
                  />
                </div>
                <!-- form-group// -->
                <div class="form-group input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    name=""
                    class="form-control"
                    placeholder="Email address"
                    type="email"
                    v-model="form2.email"
                  />
                </div>
                <!-- form-group// -->
                <!-- form-group// -->
                <!-- form-group end.// -->
                <div class="form-group input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                  <input
                    class="form-control"
                    placeholder="Create password"
                    type="password"
                    v-model="form2.password"
                  />
                </div>
                <!-- form-group// -->
                <div class="form-group input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                  <input
                    class="form-control"
                    placeholder="Repeat password"
                    type="password"
                  />
                </div>
                <!-- form-group// -->
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block">
                    Create Account
                  </button>
                </div>
                <!-- form-group// -->
                <p class="text-center">
                  Have an account? <a href="">Log In</a>
                </p>
              </form>
            </article>
          </div>
          <!-- card.// -->
        </div>

        
      </div>
      <div>
          <div>
        <div id="login" style="background-color:#AEA33F63; height:400px">
          <div class="container">
            <div
              id="login-row"
              class="row justify-content-center align-items-center"
            >
              <div id="login-column" class="col-md-12">
                <div id="login-box" class="col-md-12">
                  <form id="login-form" class="form" action="" @submit.prevent="login()">
                    <h3 class="text-center text-info" style="padding-top:30px">Login</h3>
                    <div class="form-group">
                      <label for="username" class="text-info">Username:</label
                      ><br />
                      <input
                        v-model="form.username"
                        type="text"
                        name="username"
                        id="username"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label for="password" class="text-info">Password:</label
                      ><br />
                      <input
                        v-model="form.password"
                        type="password"
                        name="password"
                        id="password"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label for="remember-me" class="text-info"
                        ><span>Remember me</span><span
                          ><input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox" /></span></label
                      ><br />
                      <input
                        type="submit"
                        name="submit"
                        class="btn btn-info btn-md"
                        value="submit"
                      />
                    </div>
                    <div id="register-link" class="text-right">
                      <a href="#" class="text-info">Register here</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
    <!--container end.//-->

    <br /><br />
  </div>
</template>

<script>
import axios from 'axios'
export default {

  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      form2: {
        username: '',
        password: '',
        email:''
      },
    }
  },
  methods:{
        login() {
      const dire = 'http://localhost:8000/api/token/'
      const data = this.form
      axios
        .post(dire, data)
        .then((response) => {
          localStorage.token = response.data.access
          console.log(localStorage.token)
          window.location.href = '/listas';

        })
        .catch(() => {
          alert('error')
        })
    },
    register1() {
      const dire = 'http://localhost:8000/register/'
      const data = this.form2
      axios
        .post(dire, data)
        .then((response) => {
          alert('registro exitoso, por favor haz login')
          console.log(response.data)
        })
        .catch(() => {
          alert('error')
        })
    }
  
  },

  name: "LoginReg",
  props: {
    msg: String,
  },
};
</script>