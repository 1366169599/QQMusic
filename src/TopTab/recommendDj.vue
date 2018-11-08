<style lang="less" scoped>
.recommendDj{
    .title{
        height: 50px;
        line-height: 50px;
    }
    .djRadios{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .djRadio-item{
            width: 32%;
            margin: 10px 0;
            .name{
                font-size: 12px;
            }
            .img-cont{
                width: 100%;
                img{
                    width: 100%;
                }
            }
        }
    }
}
</style>

<template>
    <div class="recommendDj">
        <div class="title">
            <h2>推荐电台</h2>
        </div>
        <div class="djRadios">
        <div class="djRadio-item" v-for='djRadio in djRadios.slice(0,6)'>
            <div class='img-cont'>
                <img :src="djRadio.picUrl" alt="">
            </div>
            <p class='name'>{{djRadio.rcmdtext}}</p>
        </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            djRadios:[]
        }
    },
    created(){
        this.$axios({
            methed:'get',
            url:'/dj/recommend'
        }).then(res=>{
            this.djRadios=res.data.djRadios
        })
    }
}
</script>

