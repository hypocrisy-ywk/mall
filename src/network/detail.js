import {request} from './request';

export function getDetail(iid){
    return request({
        url: '/detail',
        params: {
            iid
         }
    })
}

export function getRecommend(){
    return request({
        url:'/recommend'
    })
}

export class Goods {
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newprice = itemInfo.price
        this.oldprice = itemInfo.oldPrice
        this.discountdesc = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realprice = itemInfo.lowNowPrice
    }
}