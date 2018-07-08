<template>
    
    <el-form class="login-from"  label-width="80px" :model="formData">
        <h2>用户登录</h2>
        <el-form-item label="用户名">
        </el-form-item>
        <el-input type="text" v-model="formData.username"></el-input>
        <el-form-item label="密码">
        </el-form-item>
        <el-input type="password" v-model="formData.password"></el-input>
        <el-button type="primary" class="loginbtn" @click.prevent="login()">登录</el-button>
    </el-form>
</template>
    
<script>

export default {
    data(){
        return{
            formData:{
                username:"",
                password:""
            }
        }
    },
    methods:{
       async login(){
            const data=await this.$axios.post('/login',this.formData);
            console.log(data);
            if(data.status===200){
                const {data :{data: {token}}}=data;
                const {data :{meta: {msg,status}}}=data;
                if(status===200){
                    console.log(token);
                    this.$message.success(msg);
                    sessionStorage.setItem('token',token);
                }else{
                    this.$message.error(msg);
                }
            }
            
        }
    }
}
</script>

<style>
    .loginbtn{
        width: 100%;
        margin-top:30px;
        margin-bottom:30px;
    }
    .login-wrap .login-from {
        background-color: #fff;
        width: 520px;
        padding: 30px;
        border-radius: 5px;
    }
    .el-form-item__label{
        text-align: left;
        margin-top:20px;
    }
</style>
