<template>
    <div>
        <commentWeb :url="url"></commentWeb>
    </div>
</template>
<script>
import commentWeb from '../component/comment.vue'
export default {
    data(){
        return{
            url:"/comment/music?id="
        }
    },

    components:{
        commentWeb
    }
}
</script>
