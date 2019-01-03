<template>
    <div>
        <p>保费: <input type="text" v-model="mony"></p>
        <p>年限: <input type="text" v-model="year"></p>
        <p>存放时间: <input type="text" v-model="time"></p>
        <p>赎回金额: <input type="text" v-model="all"></p>
        <p>利率: <input type="text" v-model="interest"> <button @click="count">计算</button></p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            mony:'',
            year:'',
            time:'',
            all:'',
            interest:'',
        }
    },
    methods:{
        count(){
            let sum=0
            let tem=0
            for(var i=0;i<=this.year;i++){
                sum+=i
            }
            tem=(sum*this.mony)+(this.time-this.year)*(this.mony*this.year)
            this.interest=(this.all-this.mony*this.year)/tem
            console.log(sum)
            console.log(tem)
            console.log(this.interest)
        }
    }
}
</script>
