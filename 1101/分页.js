/*
 * @Description: 原生js手撸分页组件
 * @Author: Do not edit
 * @Date: 2019-11-01 15:08:26
 * @LastEditTime: 2019-11-01 17:54:14
 * @LastEditors: winki
 */
var obj,j;
var page = 0;
var nowPage = 0;//当前页数
var listNum = 5;//每页显示页数
var pageLen;//总页数
var pageNum = 4;//分页连接的个数

function onload() {
    obj = document.getElementById('onegood');
    j = obj.length;
    pageLen = Math.ceil(j/listNum);
    upPage(0);
}

function upPage(p) {
    nowPage = p;
    for (let i = 0; i < j; i++) {
        obj[i].style.display = 'none';
    };
    for (let i = p*listNum; i < (p+1)*listNum; i++) {
        if(obj[i]){
            obj[i].style.display = 'block'
        }        
    };
    strS = '<a href="" onclick="upPage(0)">首页</a>';
    var pageNum_2 = pageNum%2==0?d:0;
};

