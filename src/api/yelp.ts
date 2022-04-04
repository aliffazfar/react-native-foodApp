import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer vdnIiVX-C6pQvZZlWTsKx_JY1ASU4ogEEFamH4UwwdZzecy1Wkrsm4qhTLpik8099ofH4gam09GXBP0uusnT7ZmNPbwjnqEJVE8AcVY3SE9grQvNVtFT_AJkL3lKYnYx',
  },
})
