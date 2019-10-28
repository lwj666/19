/*
 * @Description: 事件流的捕获和冒泡
 * @Author: Do not edit
 * @Date: 2019-10-28 14:41:45
 * @LastEditTime: 2019-10-28 14:58:22
 * @LastEditors: winki
 */

//  1.js中的事件流分为捕获、冒泡
//  2.捕获:事件从该节点向下传递的过程叫做捕获
//  3.冒泡：事件从该节点向上传递的过程叫做冒泡，与捕获相反(stopPropagation方法可以阻止冒泡)

//  4.example（addEventListener）
    <div id="app" style="width:100vw;background:red;">
        <span id="btn">点我</span>
    </div>
    <script>
        var useCapture = true;
        var btn = document.getElementById("btn");
        btn.addEventListener(click,function() {
            console.log('内层click事件触发')
        },useCapture
        );

        var app = document.getElementById("app");
        app.onclick = function() {
            console.log('外层click事件触发')
        }
    </script>