/**
 * 名称：tieba.js
 * 地址：
 *
 ******** 以下为 tamperJS 自动生成的 rewrite 相关信息，可能需要根据情况适当调整 ********

[rewrite]


[mitm]


 ********
 * 工具: tamperJS BY @elecV2
 * 频道: https://t.me/elecV2
 *
**/

let body = $response.body

if (/<\/html>|<\/body>/.test(body)) {
  body = body.replace('</body>', `

<script>const elecJSPack = function(elecV2){

/*
 * @name: 贴吧解除限制
 * @Author: Track13
 * @version: 1.3.1
 * @description: 解除不能看帖的限制，去广告
 * @include: tieba.baidu.com
 * @createTime: 2019-10-18
 * @updateTime: 2019-10-25
 */
(function () {
    var whiteList = ['tieba.baidu.com', 'm.tieba.com', 'jump2.bdimg.com', 'tiebac.baidu.com'];
    if (whiteList.indexOf(window.location.hostname) < 0) {
        return;
    };
    var key = encodeURIComponent('Track13:贴吧去广告:执行判断');
    if (window[key]) {
        return;
    };
    window[key] = true;
    var killAD = document.createElement("style");
    killAD.type = "text/css";
    killAD.innerHTML = ".class_hide_flag{display:block!important;}.father-cut-pager-class-no-page>#list_pager{visibility: visible!important;height: 44px!important;}#glob,body{margin-top: 0px!important;}.father_cut_list_class{padding-bottom: 0px!important;}.father-cut-recommend-normal-box,.footer,.father-cut-daoliu-normal-box,.fixed_bar,.pb,.frs,.no_mean,.addbodybottom,.img_desc,.tl_shadow_for_app,.top-guide-wrap,.open-style,.index-feed-cards .hot-topic,.appPromote_wrapper,.ui_image_header_bottom,.videoFooter,#diversBanner,.tb-footer-wrap,.interest-bar,.footer-wrap,.client-btn,.daoliu{display:none!important;}.tl_shadow:not([data-tid]),#pblist>li:not([data-tid]){display:none!important;}.navbar-view{top:24px!important;}.navbar-box{top:44px!important;}";
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(killAD);
    var oldURL, newURL;
    function comments() {
        oldURL = location.search;
        $("ul#pblist>li").forEach(function (el) {
            var $el = $(el);
            var commLoad = el.innerText;
            if (commLoad.match(/打开APP查看\\d+条评论/) && commLoad.indexOf("查看更多回复") == -1) {
                var tid = $el.attr("tid");
                var content = $el.find(".list_item_top");
                content.append(\`<div style="text-align:center;background-color: #eee;margin: 8px 0 0 42px;"><a style="padding:12px;display:block;" href="https://tieba.baidu.com/t/p/\${tid}">查看更多回复</a></div><br>\`);
            }
        });
        $('.pb_floow_load').hide();
    }
    document.addEventListener("touchstart", function () {
        newURL = location.search;
        if (oldURL != newURL) {
            comments();
        }
    });
})();
}(console)</script></body>`)

  console.log('添加 tamperJS：tieba.js')
}

$done({ body })