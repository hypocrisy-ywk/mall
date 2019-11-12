<template>
    <div v-if="Object.keys(params).length !== 0" class="params">
        <div class="footer">
            <table v-for="item1 in params.rule.tables" class="table1">
            <tr v-for="item2 in item1">
                <td v-for="item3 in item2">{{item3}}</td>
            </tr>
        </table>
        </div>
        <table v-for="item4 in params.info.set" class="table2">
            <tr class="tr1">
                <td class="td1">{{item4.key}}</td>
                <td class="td2">{{item4.value}}</td>
            </tr>
        </table>
        <div>

        </div>
    </div>
</template>

<script>
    export default {
        name:'detailparmas',
        props:{
            params:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .params{
        margin:20px 0;
        padding:0 8px;
    }
    .table1{
        text-align: center;
        border-collapse: collapse;
    }
    .table1 td{
        border-bottom:2px solid #ddd;
        padding:18px 8px;
        width: 68px;
    }
    .table2{
        margin-left:4px;
        width: 100%;
        border-collapse: collapse;
    }
    .table2 td{
        padding:18px 12px;
        border-bottom:2px solid #ddd;
    }
    .td1{
        width:30%;
    }
    .td2{
        color:crimson;
        width:200px;
    }
    .footer{
        border:2px solid #666
    }
</style>