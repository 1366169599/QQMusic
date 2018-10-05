<style lang=less>
.Table {
  border: 1px solid black;
  border-collapse: collapse;
  th {
    border: 1px solid black;
  }
  td {
    width: 100px;
    text-align: center;
    border: 1px solid black;
  }
  .active {
    background: yellow;
  }
}
</style>

<template>
    <div>
        <div class="add">
            <span>添加:</span>
            <input type="text" v-model="name">
            <input type="text" v-model="age">
            <input type="button" value="添加" @click="addRow">
        </div>
        <table class="Table">
            <tr>
                <th>ID</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>操作</th>
            </tr>
            <tr v-for="(message,index) in messages" :class='{"active": message.active===true}'>
                <td>{{message.ID}}</td>
                <td>{{message.name}}</td>
                <td>{{message.age}}</td>
                <td @click="deleteRow(index)">{{message.delete}}</td>
            </tr>
        </table>
        <div>
            <span>搜索:</span>
            <input type="text" v-model="searchName">
            <input type="button" value="搜索" @click="search">
            <span>排序：</span>
            <input type="button" value="年龄从小排序" @click="sort">
        </div>
        <EX1></EX1>
        <roll-img></roll-img>
    </div>
</template>
<script>
import EX1 from './EX1.vue';
import rollImg from './rollImg.vue'
export default {
    components:{
        EX1,rollImg
    },
  data() {
    return {
      messages: [
        { ID: 1, name: "张三", age: 26, delete: "删除" ,active:false},
        { ID: 2, name: "李四", age: 23, delete: "删除" ,active:false},
        { ID: 3, name: "王五", age: 22, delete: "删除" ,active:false}
      ],
      name: "",
      age: "",
      maxID: "",
      searchName: ""
    };
  },
  created() {
    var maxID = 0;
    for (var i = 0; i < this.messages.length; i++) {
      if (this.messages[i].ID > maxID) {
        maxID = this.messages[i].ID;
      }
    }
    this.maxID = maxID;
  },
  methods: {
    deleteRow(index) {
      this.messages.splice(index, 1);
    },
    addRow() {
      this.maxID++;
      this.messages.push({
        ID: this.maxID + 1,
        name: this.name,
        age: this.age,
        delete: "删除"
      });
    },
    search() {
      for (var i = 0; i < this.messages.length; i++) {
          this.messages[i].active =false;
        if (this.messages[i].name == this.searchName) {
          this.messages[i].active =true;
        }
      }
    },
    sort(){
      for (var i = 0; i < this.messages.length; i++) {
          this.messages.sort(function(a,b){return a.age>b.age})
      }
    }
  }
};
</script>

