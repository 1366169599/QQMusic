<style lang="less" scoped>
.recommendDj{
    .title{
        height: 50px;
        line-height: 50px;
    }
    .djRadios{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .djRadio-item{
            width: 30%;
            margin-bottom: 10px; 
            .name{
                font-size: 12px;
            }
            .img-cont{
                 padding-top: 100%;
                width: 100%;
                position: relative;
                img{
                position: absolute;
                top: 0;
                left: 0;
                    width: 100%;
                    height: 100%;
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
            <p class='name'>{{djRadio.name}}</p>
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
            url:'/personalized/djprogram'
        }).then(res=>{
            this.djRadios=res.data.result
        })
    }
}
</script>

