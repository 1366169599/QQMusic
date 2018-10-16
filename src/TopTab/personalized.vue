<style lang="less">
.personalized{
    .title{
        height: 50px;
    }
    .songlists{
        display: flex;
        flex-wrap: wrap;
        .songlist-item{
            width: 33%;
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
    <div class="personalized">
        <div class="title">
            <h2>推荐歌单</h2>
        </div>
        <div class="songlists">
        <div class="songlist-item" v-for='songlist in songlists.slice(0,6)'>
            <div class='img-cont'>
                <img :src="songlist.picUrl" alt="">
            </div>
            <p class='name'>{{songlist.name}}</p>
        </div>
        </div>
    </div>
</template>
<script>
let axios=require('axios')
export default {
    data(){
        return{
            songlists:[]
        }
    },
    created(){
        axios({
            methed:'get',
            url:'http://101.236.45.250:4000/personalized'
        }).then(res=>{
            console.log(res.data)
            this.songlists=res.data.result
        })
    }
}
</script>

