var book = {
    name: '肖申克的救赎' //数据属性
}
Object.defineProperty(book, 'year' , { //year是访问器属性
    get() {
        return year;
    },
    set(newValue) {
        year = newValue;
    }
})
 book.year = 2016;

 console.log(book.year); //2016
 console.log(Object.getOwnPropertyDescriptor(book, 'year'));