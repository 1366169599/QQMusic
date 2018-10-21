
<template>
    <div>
     <router-view></router-view>
        <audio id='myAudio' type="audio/mpeg"></audio>
     <!-- <div>
         <div class="img cont">
             <img src="" alt="">
         </div>
         <div>
             <p>{{}}</p>
             <p>换歌</p>
         </div>
         <div class="on-off">
             <span>
                 <img src="" alt="">
             </span>
             <span>
                 <img src="" alt="">
             </span>
         </div>
     </div> -->
     </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
     mounted() {
         this.$store.commit('setAudioElement', document.getElementById("myAudio"))
  }
}
</script>


