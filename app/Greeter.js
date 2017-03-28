/**
 * Created by fengyang on 2017/3/27.
 */
module.exports = function() {
    var greet = document.createElement('div');
    //创建一个div,为其赋值
    greet.innerHTML = "第一个webpack例子!!s";
    return greet;
};