export default {
    //vuex状态管理工具的应用
    addtocart( context , payload ){
        return new Promise((resolve,reject) => {
            let oldproduct = context.state.cartlist.find(item => item.iid === payload.iid)

            if (oldproduct) {
                context.commit('addcounter', oldproduct)
                resolve('宝贝成功 +1')
            } else {
                payload.count = 1
                context.commit('addtocart', payload)
                resolve('加入购物车成功')
            }
        })
    }
}