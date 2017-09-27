window.onload=function(){
	let table = document.querySelector('tbody');
	let addBtn = document.querySelector('button.addBtn');
	let dataobj = new storage();
    // 增加
    addBtn.ondblclick=function(){
    	let obj = {name:'自定义',sex:'自定义',phone:'自定义',jiguan:'自定义',birthday:"自定义"};
        createTr(obj,table.childElementCount);
        dataobj.add(obj);
    };
    load();  // 调用函数load
    function load() {
        let students = dataobj.getData();
        // 查询
        students.forEach((element,index)=>{
            createTr(element,index)
        })
    }
	// 增、删
    function createTr(obj,i){
    	let trs = document.createElement('tr');
    	trs.id = i;
    	// 对其的属性写死
    	// trs.innerHTML =`
    	//         <td type="name">${obj.name}</td>
			// 	<td type="sex">${obj.sex}</td>
			// 	<td type="phone">${obj.phone}</td>
			// 	<td type="jiguan">${obj.jiguan}</td>
			// 	<td type="birthday">${obj.birthday}</td>
			// 	<td class="del"><button>删除</button></td>
    	// `
        for(let j in obj){
            trs.innerHTML +=`
                <td type="${j}">${obj[j]}</td>
            `
        }
        trs.innerHTML +=`
               <td class="del"><button>删除</button></td>
            `
    	table.appendChild(trs);
    }
    // updata
	table.ondblclick=function(e){
		let element = e.target;
		if(element.nodeName == 'TD' && element.className!='del'){
			let oldv = element.innerText;
			element.innerText = '';
			let inputs = document.createElement('input');
			inputs.value = oldv;
			element.appendChild(inputs);
			inputs.onblur = function(){
				let newv = this.value.trim();
				element.removeChild(inputs);
				// inputs = null;
				if(!newv){
					newv = oldv;
				}
				element.innerText = newv;
				// if(newv){
				//    element.innerText = newv;
				// }else{
				//    element.innerText = oldv;
				// }
				/* row 第几行  type 哪个信息  newv 最终修改的值*/
				let row = element.parentNode.id;
				let type = element.getAttribute('type');
				dataobj.updata(row,type,newv)
			}
		}else if(element.nodeName == 'BUTTON'){
			let trs = element.parentNode.parentNode;
			table.removeChild(trs);
			let index = element.parentNode.parentNode.id;  // 在tbody中
			dataobj.cancel(index);
			table.innerHTML = '';
			load();
		}
	}
}