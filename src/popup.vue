<template>
    <div>
        <div class="pop" v-if='show'>
            <header>
                {{title}}
            </header>
            <slot name='content'></slot>
            <!-- <div>sladjflasj</div> -->
            <div class="close" @click="close">x</div>
        </div>
        <div class="mask"></div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            show: true
        }
    },
    methods: {
        close() {
            this.show = false
        }
    }
}   
</script>
<style lang='less'>
header {
    height: 50px;
    background: #d1d1d1;
}
.pop {
    width: 800px;
    height: 500px;
    background: #fff;
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .close {
        cursor: pointer;
        width: 50px;
        height: 50px;
        position: absolute;
        right: 5px;
        top: 5px;
        text-align: center;
        line-height: 50px;
    }
}
    .mask {
        background: #000;
        opacity: 0.3;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

    }

</style>


