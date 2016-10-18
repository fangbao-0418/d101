//页面顶部客服
$(function() {
$("#header_kefu01>ul>li").hover(function() {
$(this).addClass("this_01");
$("#header_kefu01 ul ul").slideUp("fast");
if (!$(this).find("ul").is(":animated")) $(this).find("ul").slideDown("fast")
},
function() {
$(this).removeClass("this_01");
if (!$(this).find("ul").is(":animated")) $(this).find("ul").slideUp("fast");
$("#header_kefu01 ul ul").slideUp("fast")
})
});
/*切换菜单*/
function tab_hanshu(bqxx,nrxx,ssxx_id,idgsxx)
{
for (zs_id=0;zs_id<idgsxx;zs_id++)
{
document.getElementById(bqxx+zs_id).className = "moren";
document.getElementById(nrxx+zs_id).style.display = "none";
}
document.getElementById(bqxx+ssxx_id).className = "this";
document.getElementById(nrxx+ssxx_id).style.display = "";
}
//切换标签用
function tab_biaoqian(bqxx,ssxx_id,idgsxx)
{
for (ss_id=0;ss_id<idgsxx;ss_id++)
{
document.getElementById(bqxx+ss_id).className = "moren";
}
document.getElementById(bqxx+ssxx_id).className = "this";}
//返回顶部
$(function(){
$("#totop").hide();
$(function () {
$(window).scroll(function(){
if ($(window).scrollTop()>100){
$("#totop").fadeIn();
}
else
{
$("#totop").fadeOut();
}
});
$("#totop").click(function(){
$('body,html').animate({scrollTop:0},500);
return false;
});
});
});
$(document).ready(function(){
$("#fanhui_top").mouseleave(function(){
$("#fanhui_top_02").hide();
});
});
//公用滑出隐藏和显示
function gong_show(id){
$("#"+id).show();
};
function gong_hide(id){
$("#"+id).hide();
};
//回复下点击下拉用
function gong_show2(id){
$("#"+id).show(200);
};
function gong_hide2(id){
$("#"+id).hide(200);
};
//点击获取到值
function sahngpin_dianpu(zhi,id){
document.getElementById(zhi).value=id;
}
//锚点链接特效
$(document).ready(function() {
$('a[href*=#]').click(function() {
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
var $target = $(this.hash);
$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
if ($target.length) {
var targetOffset = $target.offset().top;
$('html,body').animate({
scrollTop: targetOffset
},
1000);
return false;
}
}
});
});
//弹出选择城市注册登录等框
function guanbi_div(div_id,zz_id){
$("#"+div_id).fadeOut(function(){ $("#"+zz_id).hide();});
return false;
}
function tanchu_div(zz_id,div_id){
var h = $(document).height();
$("#"+zz_id).css({ 'height': h });	
$("#"+zz_id).show();
$("#"+div_id).center();
$("#"+div_id).fadeIn();
return false;
}
jQuery.fn.center=function(loaded) {
var obj_01 = this;
body_width01 = parseInt($(window).width());
body_height01 = parseInt($(window).height());
block_width01 = parseInt(obj_01.width());
block_height02 = parseInt(obj_01.height());
left_position01 = parseInt((body_width01/2) - (block_width01/2)  + $(window).scrollLeft());
if (body_width01<block_width01) { left_position01 = 0 + $(window).scrollLeft(); };
top_position = parseInt((body_height01/2) - (block_height02/2) + $(window).scrollTop());
if (body_height01<block_height02) { top_position = 0 + $(window).scrollTop(); };
if(!loaded) {
obj_01.css({'position': 'absolute'});
obj_01.css({ 'top': top_position, 'left': left_position01 });
$(window).bind('resize', function() { 
obj_01.center(!loaded);
});
$(window).bind('scroll', function() { 
obj_01.center(!loaded);
});
} else {
obj_01.stop();
obj_01.css({'position':'absolute'});
obj_01.animate({ 'top':top_position },200,'linear');
}
}
//法拍房产幻灯片
var t_02 = n_02 =0, count_03;
$(document).ready(function(){ 
count_03=$("#fapai_06 a").length;
$("#fapai_06 a:not(:first-child)").hide();
$("#fapai_04").html($("#fapai_06 a:first-child").find("img").attr('alt'));
$("#fapai_04").click(function(){window.open($("#fapai_06 a:first-child").attr('href'), "_blank")});
$("#fapai_02 li").click(function() {
var i_02 = $(this).text() -1;//获取Li元素内的值，即1，2，3，4
n_02 = i_02;
if (i_02 >= count_03) return;
$("#fapai_04").html($("#fapai_06 a").eq(i_02).find("img").attr('alt'));
$("#fapai_04").unbind().click(function(){window.open($("#fapai_06 a").eq(i_02).attr('href'), "_blank")})
$("#fapai_06 a").filter(":visible").fadeOut(500).parent().children().eq(i_02).fadeIn(1000);
document.getElementById("fapai_02").style.background="";
$(this).toggleClass("fapai_05");
$(this).siblings().removeAttr("class");
});
t_02 = setInterval("showAuto_01()", 4000);
$("#fapai_02").hover(function(){clearInterval(t_02)}, function(){t_02 = setInterval("showAuto_01()", 4000);});
})
function showAuto_01()
{
n_02 = n_02 >=(count_03 -1) ?0 : ++n_02;
$("#fapai_02 li").eq(n_02).trigger('click');
}
//帮助中心左边菜单
$(document).ready(function(){
jQuery.jq51menu_01 = function(help_leftid,submenu_02){
var left_boxli = $(help_leftid+" li");
left_boxli.eq(0).find(submenu_02).show();
left_boxli.click( function () { 
$(this).addClass("bszn_xx09").find(submenu_02).show().end().siblings("li").removeClass("bszn_xx09").find(submenu_02).hide();
});
};
$.jq51menu_01(".bszn_xx06","div.bszn_xx08");
});
//绝淘当等文字滚动
(function(gundng_hs){
gundng_hs.fn.extend({
wenzi_gundong:function(opt,callback){
//参数初始化
if(!opt) var opt={};
var _btnUp_01 = $("#"+ opt.up);//Shawphy:向上按钮
var _btnDown_01 = $("#"+ opt.down);//Shawphy:向下按钮
var timerID_01;
var _this_01=this.eq(0).find("ul:first");
var lineH_01=_this_01.find("li:first").height(), //获取行高
line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH_01,10),
//每次滚动的行数，默认为一屏，即父容器高度
speed=opt.speed?parseInt(opt.speed,10):500; //卷动速度，数值越大，速度越慢（毫秒）
timer=opt.timer //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
if(line==0) line=1;
var upHeight_01=0-line*lineH_01;
//滚动函数
var scrollUp_01=function(){
_btnUp_01.unbind("click",scrollUp_01); //Shawphy:取消向上按钮的函数绑定
_this_01.animate({
marginTop:upHeight_01
},speed,function(){
for(i=1;i<=line;i++){
_this_01.find("li:first").appendTo(_this_01);
}
_this_01.css({marginTop:0});
_btnUp_01.bind("click",scrollUp_01); //Shawphy:绑定向上按钮的点击事件
});
}
//Shawphy:向下翻页函数
var scrollDown_01=function(){
_btnDown_01.unbind("click",scrollDown_01);
for(i=1;i<=line;i++){
_this_01.find("li:last").show().prependTo(_this_01);
}
_this_01.css({marginTop:upHeight_01});
_this_01.animate({
marginTop:0
},speed,function(){
_btnDown_01.bind("click",scrollDown_01);
});
}
//Shawphy:自动播放
var autoPlay_01 = function(){
if(timer)timerID_01 = window.setInterval(scrollUp_01,timer);
};
var autoStop_01 = function(){
if(timer)window.clearInterval(timerID_01);
};
//鼠标事件绑定
_this_01.hover(autoStop_01,autoPlay_01).mouseout();
_btnUp_01.css("cursor","pointer").click( scrollUp_01 ).hover(autoStop_01,autoPlay_01);//Shawphy:向上向下鼠标事件绑定
_btnDown_01.css("cursor","pointer").click( scrollDown_01 ).hover(autoStop_01,autoPlay_01);
}       
})
})(jQuery);
//绝淘当滚动定位
$(document).ready(function(){						   
dingwei_01('jtd_gongju');
});
function dingwei_01(id, s) {
var obj = document.getElementById(id);
if (obj == null) {
return false;
}
if (typeof s != 'undefined') {
var gaodu_sudu = s;
} else {
var gaodu_sudu = obj.offsetTop;
}
window.onscroll = function(){
dingwei_02(id, gaodu_sudu);
}
}
function dingwei_02(id, height) {
var obj = document.getElementById(id);
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
if (scrollTop < height) {
if (typeof document.body.style.maxHeight === "undefined") {
//alert('IE6 Detected');
obj.style.position = 'relative';
obj.style.top = "0px";
obj.style.marginTop ="15px";
} else {
obj.style.position='relative';
obj.style.marginTop ="15px";
}
} else {
if (typeof document.body.style.maxHeight === "undefined") {
//alert('IE6 Detected');
obj.style.position='absolute';
obj.style.top = scrollTop + "px";
} else {
obj.style.position ='fixed';obj.style.marginTop ="0px";
}
}
}
//在线客服
$(document).ready(function(){
$("#kefu_shousuo").bind("click",function(){
$("#kefu_qq03").animate({width:"show", opacity:"show"}, "normal" ,function(){
$("#kefu_qq03").show();
});
$("#kefu_shousuo").attr("style","display:none");
$("#kefu_zhankai").attr("style","display:block");
return false;
});
$("#kefu_zhankai").bind("click",function(){
$("#kefu_qq03").animate({width:"hide", opacity:"hide"}, "normal" ,function(){
$("#kefu_qq03").hide();
});
$("#kefu_shousuo").attr("style","display:block");
$("#kefu_zhankai").attr("style","display:none");
return false;
});
});
//向上向左连续滚动函数
function rolling_top(ids,id1,id2) {
var top_speed = 30;
var top_slide = $("#" + ids);
var top_slideli1 = $("#" + id1);
var top_slideli2 = $("#" + id2);
top_slideli2.html(top_slideli1.html());
function top_Marquee() {
if (top_slide.scrollTop() >= top_slideli1.height())
top_slide.scrollTop(0);
else {
top_slide.scrollTop(top_slide.scrollTop() + 1);
}
}
$(function () {
//两秒后调用
var top_sliding = setInterval(top_Marquee, top_speed)
top_slide.hover(function () {
//鼠标移动DIV上停止
clearInterval(top_sliding);
}, function () {
//离开继续调用
top_sliding = setInterval(top_Marquee, top_speed);
});
});
}
function rolling_bottom(ids,id1,id2) {
var top_speed = 30;
var top_slide = $("#" + ids);
var top_slideli1 = $("#" + id1);
var top_slideli2 = $("#" + id2);
top_slideli2.html(top_slideli1.html());
top_slide.scrollTop(top_slideli1.height() * 2);
function top_Marquee() {
if (top_slide.scrollTop() == 0)
top_slide.scrollTop(top_slideli1.height());
else {
top_slide.scrollTop(top_slide.scrollTop() - 1);
}
}
$(function () {
//两秒后调用
var top_sliding = setInterval(top_Marquee, top_speed)
top_slide.hover(function () {
//鼠标移动DIV上停止
clearInterval(top_sliding);
}, function () {
//离开继续调用
top_sliding = setInterval(top_Marquee, top_speed);
});
});
}
function rolling_left(ids,id1,id2) {
//使用div时，请保证colee_left2与colee_left1是在同一行上.
var speed =20; //速度数值越大速度越慢
var colee_left2 = document.getElementById(id2);
var colee_left1 = document.getElementById(id1);
var colee_left = document.getElementById(ids);
colee_left2.innerHTML = colee_left1.innerHTML
function Marquee3() {
if (colee_left2.offsetWidth - colee_left.scrollLeft <= 0)//offsetWidth 是对象的可见宽度
colee_left.scrollLeft -= colee_left1.offsetWidth//scrollWidth 是对象的实际内容的宽，不包边线宽度
else {
colee_left.scrollLeft++
}
}
var MyMar3 = setInterval(Marquee3, speed)
colee_left.onmouseover = function () { clearInterval(MyMar3) }
colee_left.onmouseout = function () { MyMar3 = setInterval(Marquee3, speed) }
}
function rolling_right(ids,id1,id2) {
var speed = 20; //速度数值越大速度越慢
var colee_right2 = document.getElementById(id2);
var colee_right1 = document.getElementById(id1);
var colee_right = document.getElementById(ids);
colee_right2.innerHTML = colee_right1.innerHTML
function Marquee4() {
if (colee_right.scrollLeft <= 0)
colee_right.scrollLeft += colee_right2.offsetWidth
else {
colee_right.scrollLeft--
}
}
var MyMar4 = setInterval(Marquee4, speed)
colee_right.onmouseover = function () { clearInterval(MyMar4) }
colee_right.onmouseout = function () { MyMar4 = setInterval(Marquee4, speed) }
}