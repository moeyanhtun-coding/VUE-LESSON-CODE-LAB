<template>
    <div>
        <label for="">User Name</label>
        <input v-model="auth.name" type="text" class="form-control">
        <small class="text-danger" v-if="validation.userNameStatus">Username Required!</small> <br>
        <label for="">Password</label>
        <input v-model="auth.password" type="Password" class="form-control">
        <small class="text-danger" v-if="validation.passwordStatus">Password Required!</small> <br>
        <button class="btn btn-primary me-2" @click="loginPage">Login</button>
        <button class="btn btn-danger" @click="logoutPage">Logout</button>

        <h3>{{ $store.getters.getUserInfo }}</h3>
    </div>
</template>

<script>
    export default {
        name: 'LoginPage',
        data() {
            return {
                auth : {
                    name : "",
                    password : ""
                },
                validation:{
                    userNameStatus : false,
                    passwordStatus : false
                }
            }
        },
        methods: {
            loginPage() {
                this.validationCheck()
                if( this.auth.name != '' && this.auth.password != ''){
                    localStorage.setItem('VueAuth','true');
                }
            },
            logoutPage(){
                localStorage.setItem('VueAuth','false')  
            },
            validationCheck(){
                this.validation.userNameStatus = this.auth.name == '' ? true : false;
                this.validation.passwordStatus = this.auth.password == '' ? true : false;
            }
        },
    }
</script>