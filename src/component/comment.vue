<style lang="less" scoped>
.title {
  padding-left: 5px;
  background: #d1d1d1;
  font-size: 14px;
  line-height: 30px;
  color: gray;
}
.commment-item {
  display: flex;
  .author-img {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
  }
  .comment-cont {
    flex: 1;
    border-bottom: 1px solid #d1d1d1;
    padding-right: 10px;
    .nikename-bar {
      display: flex;
      justify-content: space-between;
      .name-time {
        .name {
          font-size: 14px;
          color: gray;
          padding-top: 10px;
          width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .time {
          font-size: 12px;
          color: #d1d1d1;
          line-height: 20px;
        }
      }
      .like {
        padding-top: 10px;
        color: #d1d1d1;
      }
    }
    .comment {
      padding-bottom: 10px;
    }
  }
}
</style>

<template>
  <div>
    <div v-if="items.length">
    <div class="title">精彩评论</div>
    <div class="commment-item" v-for="item in items">
      <div class="author-img">
        <img :src="item.user.avatarUrl" alt>
      </div>
      <div class="comment-cont">
        <div class="nikename-bar">
          <div class="name-time">
            <p class="name">{{item.user.nickname}}</p>
            <p class="time">{{countTime(item.time)}}</p>
          </div>
          <div
            class="like"
          >{{item.likedCount>=100000 ? (item.likedCount/10000).toFixed(1)+'万':item.likedCount}}</div>
        </div>
        <div class="comment">{{item.content}}</div>
      </div>
    </div>
  </div>

    <div class="title">最新评论({{total}})</div>

    <div class="commment-item" v-for="commment in commments.slice(0,20)">
      <div class="author-img">
        <img :src="commment.user.avatarUrl" alt>
      </div>
      <div class="comment-cont">
        <div class="nikename-bar">
          <div class="name-time">
            <p class="name">{{commment.user.nickname}}</p>
            <p class="time">{{countTime(commment.time)}}</p>
          </div>
          <div
            class="like"
          >{{commment.likedCount>=100000 ? (commment.likedCount/10000).toFixed(1)+'万':commment.likedCount}}</div>
        </div>
        <div class="comment">{{commment.content}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
      url:String
  },
  data() {
    return {
      items: [],
      songId: "",
      commments:[],
      total:''
    };
  },
  created() {
    let has = location.hash.split("?")[1];
    let obj = {};
    has.split("&").forEach(item => {
      obj[item.split("=")[0]] = item.split("=")[1];
    });
    this.songId = obj.id;
    this.$axios({
      method: "get",
      url: this.url + this.songId
    }).then(res => {
      this.items = res.data.hotComments;
      this.commments=res.data.comments
      this.total=res.data.total
    });
  },
  methods: {
    countTime(time) {
      var d = new Date(time);
      var Y = d.getFullYear();
      var M = d.getMonth() + 1;
      var T = d.getDate();
      return Y + "年" + M + "月" + T + "日";
    }
  }
};
</script>
