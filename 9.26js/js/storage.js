/*
属性： 存储
方法：增、删、改、查
*/
class storage{
    constructor(){
        this.data = [];
    }
    _init(){
        this.data = [
            {name:'张三',sex:'女',phone:'123456',jiguan:'山西忻州',birthday:'1997年11月07日'},
            {name:'李四',sex:'女',phone:'123456',jiguan:'山西忻州',birthday:'1997年11月07日'},
            {name:'王五',sex:'女',phone:'123456',jiguan:'山西忻州',birthday:'1997年11月07日'},
            {name:'赵六',sex:'女',phone:'123456',jiguan:'山西忻州',birthday:'1997年11月07日'},
            {name:'郑七',sex:'女',phone:'123456',jiguan:'山西忻州',birthday:'1997年11月07日'},
        ];
        // 将值存到本地存储中
        localStorage.setItem('students',JSON.stringify(this.data));
        JSON.parse(localStorage.getItem('students'));
    }
    getData(){
        // 先判断本地是否有值，没有的话先到初始化中获取，有的话用有的值直接return
        let data = localStorage.getItem('students');  // 有可能获取回来也可能获取不回来
        if(!data){
            this._init();
        }
        return this.data = JSON.parse(localStorage.getItem('students'))  // 此处肯定获取回来了
    }
    updata(index,key,value){
        // 将值进行更新并保存 index 表示修改哪行 key哪列 value修改后的最终值
       // let data = this.getData();
       this.data[index][key] = value;
       this.save();
    }
    cancel(index){
        this.data.splice(index,1)
        this.save();
    }
    add(obj){
        this.data.push(obj);
        this.save();
    }
    save(){
        localStorage.students = JSON.stringify(this.data);
    }
}