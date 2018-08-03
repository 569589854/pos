<template>
    <div class="pos">
        <div>
            <el-row>
                <el-col :span="7" class="order-list" id="order-list">
                    <template>
                        <el-tabs type="border-card">
                            <el-tab-pane label="点单">
                                <template>
                                    <el-table :data="tableData" max-height="500" border style="width:100%">
                                        <el-table-column prop="goodsName" label="商品名称" align="center" width="100"></el-table-column>
                                        <el-table-column prop="count" align="center" label="数量" width="50"></el-table-column>
                                        <el-table-column prop="price" label="单价" align="center"s width="50"></el-table-column>
                                        <el-table-column prop="operation" label="操作" width="140" align="center" fixed="right">
                                            <template slot-scope="scope">
                                                <el-button type="text" @click="delSingleColumn(scope.row)">删除</el-button>
                                                <el-button type="text" @click="addOrderList(scope.row)">增加</el-button>
                                                <el-button type="text" @click="reduce(scope.row)">减少</el-button>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                    <div class="sum">
                                        <span><small>数量：</small>{{totalCount}}</span>&nbsp;&nbsp;&nbsp;
                                        <span><small>总金额：</small>{{totalPrice}}</span>
                                    </div>
                                </template>
                                <div class="div-btn">
                                    <el-button type="warning">挂单</el-button>
                                    <el-button type="danger" @click="delAll">清空</el-button>
                                    <el-button type="success" @click="checkout">结账</el-button>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="挂单">
                                挂单
                            </el-tab-pane>
                            <el-tab-pane label="外卖">
                                外卖
                            </el-tab-pane>
                        </el-tabs>
                    </template>

                </el-col>
                <el-col :span="17">
                    <div class="title">热门商品</div>
                    <div class="oftenGoods">
                        <ul>
                            <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                                <span>{{goods.goodsName}}</span>
                                <span>￥{{goods.price}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="typeGoods">
                        <template>
                          <el-tabs>
                            <el-tab-pane label="美味汉堡" >
                                <div class="type0Goods-list" >
                                    <ul>
                                        <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                                            <span class="foodImg"><img :src="goods.goodsImg" width="100%" alt=""></span>
                                            <span class="foodName">{{goods.goodsName}}</span>
                                            <span class="foodPrice">￥{{goods.price}}元</span>
                                        </li>
                                    </ul>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="小食" >
                                <div class="type0Goods-list">
                                    <ul>
                                        <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                                            <span class="foodImg"><img :src="goods.goodsImg" width="100%" alt=""></span>
                                            <span class="foodName">{{goods.goodsName}}</span>
                                            <span class="foodPrice">￥{{goods.price}}元</span>
                                        </li>
                                    </ul>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="饮料类" >
                                <div class="type0Goods-list">
                                    <ul>
                                        <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                                            <span class="foodImg"><img :src="goods.goodsImg" width="100%" alt=""></span>
                                            <span class="foodName">{{goods.goodsName}}</span>
                                            <span class="foodPrice">￥{{goods.price}}元</span>
                                        </li>
                                    </ul>
                                </div></el-tab-pane>
                            <el-tab-pane label="超值套餐" >
                                <div class="type0Goods-list">
                                    <ul>
                                        <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                                            <span class="foodImg"><img :src="goods.goodsImg" width="100%" alt=""></span>
                                            <span class="foodName">{{goods.goodsName}}</span>
                                            <span class="foodPrice">￥{{goods.price}}元</span>
                                        </li>
                                    </ul>
                                </div>
                            </el-tab-pane>
                          </el-tabs>
                        </template>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        data(){
            return{
                name:'pos',
                totalCount:0,
                totalPrice:0,
                tableData:[],
                oftenGoods:[],
                type0Goods:[],
                type1Goods:[],
                type2Goods:[],
                type3Goods:[],
            }
        },
        created:function(){
            axios.get('http://jspang.com/DemoApi/typeGoods.php')
            .then(response=>{
                this.type0Goods = response.data[0];
                this.type1Goods = response.data[1];
                this.type2Goods = response.data[2];
                this.type3Goods = response.data[3];
            })
            .catch(error=>{
                alert("网络错误，访问失败！")
            }),
            
            axios.get('http://jspang.com/DemoApi/oftenGoods.php')
            .then(response=>{
                this.oftenGoods = response.data;
            })
            .catch(error=>{
                alert("网络错误，访问失败！")
            })
        },
        mounted:function(){
            var orderHeight = document.body.clientHeight;
            document.getElementById("order-list").style.height = orderHeight + "px";
        },
        methods:{
            addOrderList(goods){
                let isHave = false;
                for(let i=0;i<this.tableData.length;i++){
                    if(this.tableData[i].goodsId == goods.goodsId){
                        isHave = true;
                    }        
                }
                if(isHave){
                    let arr = this.tableData.filter(o=>o.goodsId == goods.goodsId);
                    // console.log(arr);
                    arr[0].count++;
                }else{
                    let newGoods = {
                        goodsName:goods.goodsName,
                        goodsId:goods.goodsId,
                        count:1,
                        price:goods.price
                    }
                    this.tableData.push(newGoods);
                }
                this.sum();
            },
            reduce(goods){
                if(goods.count>1){
                    let arr = this.tableData.filter(o=>o.goodsId == goods.goodsId);
                    arr[0].count--;
                }else{
                    this.tableData = this.tableData.filter(o=>o.goodsId != goods.goodsId);
                }
                this.sum();
            },
            sum(){
                this.totalCount = 0;
                this.totalPrice = 0;
                this.tableData.forEach((element)=>{
                    this.totalCount+=element.count;
                    this.totalPrice+=element.count*element.price;
                })
            },
            delSingleColumn(goods){
                this.tableData = this.tableData.filter(o=>o.goodsId != goods.goodsId);
                this.sum();
            },
            delAll(){
                this.tableData = [];
                this.totalCount = 0;
                this.totalPrice = 0;
            },
            checkout(){
                if(this.totalCount!=0){
                    this.delAll();
                    this.$message({
                        'message':'结账成功，欢迎再次光临！',
                        'type':'success'
                    })
                }else{
                    this.$message.error("对不起，您还未购买商品，无法结账- -");
                }
            }
        },
    }
</script>
<style scope> 
.order-list{
    background-color: #ffd;
    height: 80%;
}
.div-btn{
    margin-top: 10px;
}
.title{
    background-color: #a4d3e2;
    text-align: left;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #e5d4c3;
    padding: 10px;
}
.oftenGoods ul li{
    cursor: pointer;
    list-style: none;
    padding: 10px;
    float: left;
    margin: 10px;
    background-color: #ddd;
}
.typeGoods{
    clear: both;
}
.type0Goods-list ul li{
    cursor: pointer;
    width: 23%;
    list-style: none;
    padding: 10px;
    float: left;
    margin: 10px;
    background-color: #fff;
}
.type0Goods-list ul li span{
    display: block;
    float: left;
}
.foodImg{
    width: 40%;
}
.foodName{
   font-size: 18px;
   padding-left: 10px;
   color:brown;
}
.foodPrice{
   font-size: 16px;
   padding-left: 10px;
   padding-top:10px;
}
.sum{
    margin-top: 10px;
}
</style>