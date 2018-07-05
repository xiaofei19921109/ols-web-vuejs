<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
    <el-form-item label="用户名：" prop="userName">
      <el-col :span="12">
        <el-input v-model="ruleForm.userName"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="密码：" prop="password">
      <el-col :span="12">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="验证码：" prop="capture">
      <el-col :span="12">
        <el-input v-model="ruleForm.capture"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button>刷新</el-button>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-col :span="1">
        <el-button type="primary">登陆</el-button>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-col :span="1">
        <router-link to="/signup">注册</router-link>
        <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
      </el-col>
    </el-form-item>
  </el-form>
</template>

<script>
  import api from '@/api'

  export default {
    data() {
      return {
        ruleForm: {
          userName: '',
          password: '',
          capture: '',
        },
        rules: {
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          capture: [
            {required: true, message: '请输入验证码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        api.login();
      }
    }
  }
</script>
