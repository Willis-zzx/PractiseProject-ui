import axios from 'axios'
// 通用公用方法
const req = (method, url, params) => {
  return axios({
    method: method,
    url: url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      // token: localStorage.getItem('logintoken')
    },
    // data: params,
    data: params,
    traditional: true,
    transformRequest: [
      function (data) {
        let ret = ''
        for (let it in data) {
          ret +=
            encodeURIComponent(it) +
            '=' +
            encodeURIComponent(data[it]) +
            '&'
        }
        return ret
      }
    ]
  }).then(res => res.data)
}

export {
  req
}
