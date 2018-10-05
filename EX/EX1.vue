<style lang=less>
.user {
  display: flex;
  .user-name {
    display: inline-block;
    height: 30px;
    font-size: 20px;
    box-sizing: border-box;
  }
  .user-img {
    img {
      width: 30px;
      height: 30px;
    }
  }
}
.user-input {
  width: 620px;
  .broadcast {
    width: 620px;
    text-align: right;
    input {
      display: inline-block;
      width: 80px;
      height: 20px;
      border: none;
      background: green;
      border-radius: 5px;
      color: white;
    }
  }
}
.comments {
    img{
        vertical-align: middle;
    }
    .comment{
        display: inline-block;
        height: 50px;
        line-height: 25px;
        vertical-align: middle;
    }
}

</style>

<template>
    <div>
        
        <div>
            <select name="" id="">
                <option value="">绝地求生</option>
                <option value="">穿越火线</option>
                <option value="">超级玛丽</option>
                <option value="">魂斗罗</option>
            </select>
        </div>
        <div>
            <p>说点什么</p>
            <div class="user">
                <input type="text" placeholder="name" class="user-name" v-model="name">
                <div class="user-img">
                    <img src="../assets/face1.gif" alt="" @click="chooseImg(1)">
                    <img src="../assets/face2.gif" alt="" @click="chooseImg(2)">
                    <img src="../assets/face3.gif" alt="" @click="chooseImg(3)">
                </div>
            </div>
            <div class="user-input">
                <textarea name="" id="" cols="100" rows="5" v-model="word"></textarea>
                <div class="broadcast">
                    <span>还能输入
                        <span>{{140-word.length}}</span>字</span>
                    <input type="button" value="广播" @click="broadcast">
                </div>
            </div>
            <div class="comments">
                <p>大家都在说</p>
                <ul>
                    <li v-for="comment in comments">
                        <img :src="comment.img" alt="">
                        <div class="comment">
                            <p>{{comment.name}}：{{comment.text}}</p>
                            <p>{{comment.time}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      word: "",
      comments:[{img:'../assets/face1.gif',name:'企鹅',text:'大冒险',time:'9月23日8：00'}],
      url:'../assets/face1.gif',
      name:''
    }
  },
  // computed:{
  //      calcNum(){
  //          return 140-this.word.length
  //      }
  // },
  methods: {
    // calcNum(){
    //     this.Num=140-event.target.value.length
    // }
    broadcast(){
        this.comments.push({
            img:this.url,
            name:this.name,
            text:this.word,
            time:this.getCurrentTime()
            })
    },
    chooseImg(type){
        // if(type==1){
        // this.url='../assets/face1.gif'
        // }else if(type==2){
        // this.url='../assets/face2.gif'
        // }else{
        // this.url='../assets/face3.gif'
        // }
        this.url='../assets/face'+type +'.gif'
    },
    getCurrentTime(){
        var date = new Date();
        var month = date.getMonth()+1;
        var day=date.getDate();
        var hour=date.getHours();
        var minute=date.getMinutes()
        var seconds=date.getSeconds();
        return month+'月'+day+'日 '+hour+':'+minute+':'+seconds
    }
  }
};
</script>

