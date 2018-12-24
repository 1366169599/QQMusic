<style lang="less">
.lyric{
    text-align: center;
    font-size: 16px;
    overflow: auto;
    height: 70vh;
}
</style>

<template>
    <div>
        <div class="lyric">
            <pre v-html='text'></pre>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            text:''
        }
    },
    created(){
        this.$axios({
            method:'get',
            url:'/lyric?id='+this.$store.state.song.id
        }).then(res=>{
            console.log(res.data)
            this.text=res.data.lrc.lyric.replace(/\[.*\]/g,'')

        })
    }
}
</script>

