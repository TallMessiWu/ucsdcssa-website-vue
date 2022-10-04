<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model.trim="email"
          name="email"
          label="邮箱"
          placeholder="邮箱"
          :rules="[{ required: true, message: '请填写UCSD邮箱', validator: emailValidator}]"
      />
      <van-field
          v-model.trim="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名'}]"
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
      <van-field
          v-model="captcha"
          center
          clearable
          name="captcha"
          label="邮箱验证码"
          placeholder="邮箱验证码"
          :rules="[{ required: true, message: '请填写6位数字邮箱验证码', validator: captchaValidator }]"
      >
        <template #button>
          <van-button size="small" type="primary" color="#C22A1E" @click="sendCaptcha"
                      :disabled="captchaState.getCodeDisabled">
            <span v-if="!captchaState.countDownIng">发送验证码</span>
            <span v-else>{{ captchaState.countDownTime }}秒后重新发送</span>
          </van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div class="button">
      <van-button round block type="primary" native-type="submit" color="#C22A1E">
        注册
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import {inject} from "vue";
import {useRouter} from "vue-router";
import {Toast} from "vant";
import 'vant/es/toast/style';

const props = defineProps(
    {
      destination: String
    }
)

const username = $ref('');

const email = $ref('');
const emailValidator = (val) => /^([A-Za-z0-9_\-\.])+\@ucsd\.edu$/.test(val.toLowerCase())

const password = $ref('');
const passwordValidator = (val) => /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*()_.]+)$)^[\w~!@#$%^&*()_.]{8,16}$/.test(val)

const password2 = $ref('');
const password2Validator = (val) => password === val

const router = useRouter()
const axios = inject("axios")
// 验证码功能
const captcha = $ref('')
const captchaValidator = (val) => /^\d{6}$/.test(val)
let captchaState = $ref({
  countDownTime: 60,
  timer: null,
  countDownIng: false,
  getCodeDisabled: false
})

function checkCountDown() {
  let startTime = localStorage.getItem('startTimeCaptcha');
  let nowTime = new Date().getTime();
  if (startTime) {
    let surplus = 60 - parseInt((nowTime - startTime) / 1000, 10);

    if (surplus < 0) {
      localStorage.removeItem('startTimeCaptcha');
      return false
    }

    captchaState.countDownTime = surplus
    captchaState.countDownIng = true
    captchaState.getCodeDisabled = true
    captchaState.timer = setInterval(() => {
      captchaState.countDownTime--;
      captchaState.getCodeDisabled = true;
      captchaState.countDownIng = true;
      if (captchaState.countDownTime <= 0) {
        localStorage.removeItem('startTimeCaptcha');
        clearInterval(captchaState.timer);
        captchaState.countDownTime = 60;
        captchaState.countDownIng = false;
      }
    }, 1000)
    return true
  }
  return false
}

checkCountDown()

async function sendCaptcha() {
  // 检查邮箱地址
  if (!emailValidator(email)) {
    Toast.fail("请填写UCSD邮箱")
    return
  }

  // 发送邮件
  captchaState.getCodeDisabled = true
  const formData = new FormData()
  formData.append("email", email.toLowerCase())
  formData.append("purpose", "注册")
  try {
    await axios.put("/captcha", formData)
  } catch (err) {
    console.log(err)
    captchaState.getCodeDisabled = false
    const {response: {data, status}} = err
    if (status === 403) {
      Toast(data);
    } else {
      Toast.fail(data)
    }
    return
  }

  // 设置倒计时
  let nowTime = new Date().getTime();
  localStorage.setItem('startTimeCaptcha', nowTime);
  captchaState.timer = setInterval(() => {
    captchaState.countDownTime--;
    captchaState.countDownIng = true;
    if (captchaState.countDownTime <= 0) {
      localStorage.removeItem('startTimeCaptcha');
      clearInterval(captchaState.timer);
      captchaState.countDownTime = 60;
      captchaState.countDownIng = false;
      captchaState.getCodeDisabled = false
    }
  }, 1000)
}

const onSubmit = async (values) => {

  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner',
    duration: 0
  });

  const formData = new FormData();
  formData.append("username", values.username);
  formData.append("email", values.email);
  formData.append("password", values.password);
  formData.append("captcha", values.captcha);

  try {
    const {data: {token, id}} = await axios.post("/register", formData)
    localStorage.setItem("token", token)
    localStorage.setItem("id", id)
    Toast.clear()
    Toast.success({
      message: '注册成功',
      forbidClick: true
    })
    router.replace(props.destination)
  } catch (err) {
    const {response: {data}} = err
    Toast.clear()
    Toast.fail(data);
  }
}


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