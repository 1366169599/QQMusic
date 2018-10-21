<style lang="less" scoped>
.personalized{
    a{
        text-decoration: none;
        color: black;
    }
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
        <router-link class="songlist-item" v-for='songlist in songlists.slice(0,6)'
        :to='"songListCont?id="+songlist.id'>
            <div class='img-cont'>
                <img :src="songlist.picUrl" alt="">
            </div>
            <p class='name'>{{songlist.name}}</p>
        </router-link>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            songlists:[]
        }
    },
    created(){
        this.$axios({
            methed:'get',
            url:'/personalized'
        }).then(res=>{
            console.log(res.data)
            this.songlists=res.data.result
        })
    }
}
</script>

