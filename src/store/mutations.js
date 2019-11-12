export default{
    addcounter( state ,payload){
        payload.count++
    },
    addtocart(state, payload) {
        payload.checked = true
        state.cartlist.push(payload)
    }
}