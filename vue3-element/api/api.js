// 放置左右的请求接口地址

const url = 'http://element.thexxdd.cn/api/'

const urls = class{
    static m(){
        // 注册接口
        const register = `${url}register`
        // 登录接口
        const login = `${url}   login`

        return{
            register,
            login
        }
    }
}

export default urls