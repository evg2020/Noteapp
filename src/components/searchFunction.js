
const list =[
  {
    task: "Write the letter",
    comment: "write letter to the customer",
    id: 1
  },
  {
    task: "Buy tickets",
    comment: "choose dates and buy tickets",
    id: 2
  }
];


function getReseachList(str, list){
const seachedArr = [];
for(let item of list) {
  if(JSON.stringify(item).includes(str)){
    seachedArr.push(item);
  }
}
return seachedArr;
}

console.log(getReseachList("wr", list));






if(JSON.stringify(list).includes("rr"))
{
console.log(true)
} else {
console.log(false)
}


console.log( JSON.stringify(list))

function checkSpam(str, list) {



let findArr = [];
for (let {task} of Object.values(list) ){
  findArr.push(task);

}
console.log(findArr);

  let res= findArr.filter(item => {
      return item.includes(str);

  });
  console.log(res);

}
let str = "Buy";
checkSpam(str, list) ;



