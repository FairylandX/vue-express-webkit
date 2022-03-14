<template>
  <div id="backcont">
    <div class="meituan-content">
      <div class="login-cont">
        <div class="meituan-title">后台管理程序</div>
        <div class="meituan-user">
          <p>账号</p>
          <el-input clearable v-model="account" class="inptflex" placeholder="请输入账号" />
        </div>
        <div class="meituan-user">
          <p>密码</p>
          <el-input v-model="password" show-password class="inptflex" placeholder="请输入密码" />
        </div>
        <!--登录注册按钮切换-->
        <div class="reg-view" @click="regi = regi == '登录' ? '注册' : '登录'"><p>{{ regi }}</p></div>
        <!--登录注册按钮提交-->
        <el-button v-if="regi == '注册'" @click="signin" type="success" class="meituan-btn">登录</el-button>
        <el-button v-else type="success" @click="register" class="meituan-btn">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive,toRefs,getCurrentInstance} from 'vue'
export default {
  setup(){
    const {proxy} = getCurrentInstance()

    const user = reactive({
      account:'',
      password:'',
      regi:'注册'
    })
    // 登录
    const signin = ()=>{
      console.log(user.account,user.password)
    }
    // 注册
    const register = async()=>{
      // console.log(proxy.$urls.m().register)
      const obj = {account:user.account,password:user.password}
      const res = await new proxy.$request(proxy.$urls.m().register,obj).modepost()
      console.log(res)
      if(res.status != 200) {
        new proxy.$tips(res.data.msg, 'warning').mess_age()
      }else{
        user.regi = '注册'
      }
    }
    return{...toRefs(user),signin,register}
  }
}
</script>

<style scoped>

</style>