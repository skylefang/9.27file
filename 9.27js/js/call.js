window.addEventListener('load',function () {
    let dl = document.querySelector('dl');
    let info =[
        {name:'曹瑞芳',tel:'18435114184',py:'caoruifang'},
        {name:'李垚',tel:'18434374739',py:'liyao'},
        {name:'姐姐',tel:'15235191315',py:'jiejie'},
        {name:'姐夫',tel:'13754855116',py:'jiefu'},
        {name:'爸爸',tel:'13546608542',py:'baba'},
        {name:'老妈',tel:'15835663664',py:'laoma'},
        {name:'关志敏',tel:'18435112393',py:'guanzhimin'},
        {name:'胡梅',tel:'15513256927',py:'humei'},
        {name:'刘慧',tel:'18435111885',py:'liuhui'},
        {name:'任阿慧',tel:'18235922475',py:'renahui'},
        {name:'张丹颖',tel:'18425108518',py:'zhangdanying'},
        {name:'弟弟',tel:'17735367539',py:'didi'},
        {name:'曲彪',tel:'13111101216',py:'qubiao'},
    ];
    render(info);
   function render(data){
       dl.innerHTML = '';
       let obj = {};
       data.forEach(function(element){
           let first =element.py.charAt(0).toUpperCase();
           if(!obj[first]){
               obj[first] = [];
           }
           obj[first].push(element);
       })
       let char = Object.keys(obj).sort();
       char.forEach(element=>{
           dl.innerHTML += `
                 <dt>${element}</dt>
           `
           obj[element].forEach(value=>{
               dl.innerHTML += `
                <dd><a href="tel:${value.tel}">${value.name}</a></dd>
           `

           })
       })



   }



})