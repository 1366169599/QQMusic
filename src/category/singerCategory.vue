<style lang='less' scope>
    .cate-cont {
        background: #f1f1f1;
        li {
            line-height: 38px;
            display: inline-block;
            color: black;
            padding: 0 10px;
        }
        .choosed{
            color: green;
        }
    }
</style>

<template>
    <div>
        <ul class='cate-cont'>
            <li>全部</li>
            <li :class="{'choosed':cate.active==true}" v-for="cate in cates" @click="search(cate)">{{cate.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:false,
        }
    },
    props:{
        cates: {
            type:Array,
        },

    },
    methods: {
        search(cate) {
            this.$emit('search',cate)
            this.cates.forEach(cate => {
                 this.$set(cate,'active',false);                
            });
            this.$set(cate,'active',true);
        }
    }
}
</script>


