<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model.trim="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名'}]"
      />
      <van-field
          v-model.trim="email"
          name="email"
          label="邮箱"
          placeholder="邮箱"
          :rules="[{ required: true, message: '请填写UCSD邮箱', validator: emailValidator}]"
      />
      <van-field
          v-model.trim="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{
            required: true,
            message: '密码应为字母，数字，特殊符号(~!@#$%^&*()_.)，两种及以上组合，8-16位字符串，如：xyl37@baa',
            validator: passwordValidator
          }]"
      />
      <van-field
          v-model.trim="password2"
          type="password"
          name="password2"
          label="重复密码"
          placeholder="重复密码"
          :rules="[{ required: true, message: '请重复填写相同的密码', validator: password2Validator }]"
      />
    </van-cell-group>
    <div class="button">
      <van-button round block type="primary" native-type="submit" color="#C22A1E">
        注册
      </van-button>
    </div>
  </van-form>

</template>

<script setup>
const username = $ref('');

const email = $ref('');
const emailValidator = (val) => /^([A-Za-z0-9_\-\.])+\@ucsd\.edu$/.test(val.toLowerCase())


const password = $ref('');
const passwordValidator = (val) => /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*()_.]+)$)^[\w~!@#$%^&*()_.]{8,16}$/.test(val)

const password2 = $ref('');
const password2Validator = (val) => password === val

const onSubmit = (values) => {
  console.log('submit', values);
};


</script>

<script>
export default {
  name: "MobileRegister"
}
</script>

<style scoped lang="less">
  .button {
    margin: 25px 16px 0 16px;
  }
</style>