<template>
  <el-form label-width="120px">
    <el-form-item label="用户名：">
      <el-col :span="12">
        <el-input></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="密码：">
      <el-col :span="12">
        <el-input></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="验证码：">
      <el-col :span="12">
        <el-input></el-input>
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
  </el-form>
</template>
