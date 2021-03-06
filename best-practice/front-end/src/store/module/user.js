import { login, logout, userInfo } from '../../api/user'
import { setToken,getToken} from '../../utils/common';

export default {
    state: {
        token:getToken(),
        userName: '',
        userId: '',
        avatar: '',
        access:null
    },
    mutations: {
        setAvatar (state, avatar) {
            state.avatar = avatar
        },
        setUserId (state, id) {
            state.userId = id
        },
        setUserName (state, name) {
            state.userName = name
        },
        setToken(state, token) {
            state.token = token
        },
        setAccess(state, access) {
            state.access = access
        }
    },
    actions: {
        // 登录
        handleLogin ({ commit }, from) {
            return new Promise((resolve, reject) => {
                login(from).then(res => {
                    const data = res.data;
                    if (data.status == 0){
                        commit('setToken', data.token);
                        setToken(data.token)
                        resolve(data)
                    }else{
                        reject('status is not 0')
                    }
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // 退出登录
        handleLogOut ({ commit }) {
            return new Promise((resolve) => {
                logout().then(() => {
                    commit('setToken', false)
                    commit('setAvatar', null)
                    commit('setUserId', null)
                    commit('setAccess', null)
                    commit('setUserName', null)
                    setToken()
                    resolve()
                }).catch(()=>{
                    
                });
            })
        },

        // // 获取用户相关信息
        getUserInfo ({ state, commit }) {
            return new Promise((resolve, reject) => {
                if(state.access === null){
                    userInfo().then(res => {
                        console.log(res.data)
                        const data = res.data
                        if (data.status == 0){
                            const user = data.data;
                            commit('setAvatar', user.avatar)
                            commit('setUserName', user.name)
                            commit('setUserId', user.id)
                            commit('setAccess', user.access)
                            resolve(data.data.access)
                        }else{
                            reject(data.status)
                        }
                    }).catch(err => {
                        reject(err)
                    })
                }else{
                    resolve(state.access);
                }
            })
        }
    }
}
