import axios from "axios";
import showMessage from '@/utils/messageAlert/showMessage'

const ins = axios.create(); // 创建一个axios的实例
ins.interceptors.response.use(function(resp) {
  if (resp.data.code !== 0) {
    showMessage('','error','','')
    return null;
  }
  return resp.data.data;
});

export default ins;
