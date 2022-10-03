<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model.trim="email"
          name="email"
          label="邮箱"
          placeholder="邮箱"
          :rules="[{ required: true, message: '请填写UCSD邮箱', validator: emailValidator }]"
      />
      <van-field
          v-model.trim="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true,message: '请填写密码' }]"
      />
    </van-cell-group>
    <router-link :to="{name: 'MobileResetPassword'}" class="reset-password">忘记密码</router-link>
    <div class="button">
      <van-button round block type="primary" native-type="submit" color="#C22A1E">
        登录
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import {inject} from "vue";
import {Toast} from "vant";
import 'vant/es/toast/style';
import {useRouter} from "vue-router";


const props = defineProps(
    {
      destination: String
    }
)

const axios = inject("axios")

const email = $ref('');
const emailValidator = (val) => /^([A-Za-z0-9_\-\.])+\@ucsd\.edu$/.test(val.toLowerCase())


const password = $ref('');

const router = useRouter()
const onSubmit = async (values) => {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner',
    duration: 0
  });
  const formData = new FormData();
  formData.append("email", values.email.toLowerCase());
  formData.append("password", values.password);

  try {
    const {data: {token, id}} = await axios.post("/login", formData)
    localStorage.setItem("token", token)
    localStorage.setItem("id", id)
    Toast.clear()
    Toast.success({
      message: '登陆成功',
      forbidClick: true
    })
    router.replace(props.destination)
  } catch (err) {
    const {response: {data}} = err
    Toast.clear()
    Toast.fail(data);
  }
};


</script>

<script>
export default {
  name: "MobileLogin"
}
</script>

<style scoped lang="less">
  .reset-password {
    position: absolute;
    margin-top: 10px;
    right: 30px;
    text-decoration: underline;
  }

  .button {
    margin: 40px 16px 0 16px;
  }
</style>