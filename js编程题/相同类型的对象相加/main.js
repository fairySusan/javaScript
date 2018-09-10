var userList = [
    {name:'zhang',money:10, level:1},
    {name:'wang', money:20, level:2},
    {name:'li',   money:10, level:3},
    {name:'zhao', money:30, level:3},
    {name:'wu',   money:20, level:5},
    {name:'wu',   money:10, level:5}
]
function addMoney(data) {
    var arr =[];
    data.forEach(el => {
        let index = arr.findIndex(i => {return i.level == el.level});
        if(index>-1){
        arr[index].money += el.money;
        }else{
            arr.push({
                money: el.money,
                level: el.level
            })
        }
    })
    console.log("cccc",arr);
}
addMoney(userList);