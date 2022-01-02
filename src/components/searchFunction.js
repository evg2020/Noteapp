
const list ={
  1:{
    task: "Write the letter about ticket",
    comment: "write letter to the customer",
    id: 1
  },
  2:{
    task: "Buy tickets",
    comment: "choose dates and buy tickets",
    id: 2
  }
};



function getReseachList(str, list){
const seachedArr = [];
for(let item of Object.entries(list)) {
  if(JSON.stringify(item).includes(str)){
    seachedArr.push(item);
  }
}

return Object.fromEntries(seachedArr);
}

console.log(getReseachList("tic", list));
console.log(getReseachList("ww", list));
console.log(getReseachList("write", list));






let findArr = [];
for (let {task} of Object.values(list) ){
  findArr.push(task);

}
console.log(findArr);

  let res= findArr.filter(item => {
      return item.includes(str);

  });
  console.log(res);


let str = "Buy";




