<template>
    <div>
        <div>
            hahah
        </div>
    </div>
</template>
<script>
let axios=require('axios')
export default {
    data(){
        return{

        }
    },
    created(){
        axios({
            method:'get',
            url:'http://101.236.45.250:4000/playlist/catlist'
        }).then(res=>{
            console.log(res.data)
        })
    }
}
</script>

