$(function(){
var numpic = $('#index_hdp01 li').size()-1;
var nownow = 0;
var inout = 0;
var TT = 0;
var SPEED = 5000;
$('#index_hdp01 li').eq(0).siblings('li').css({'display':'none'});
var ulstart = '<div id="index_hdp02"><ul>',
ulcontent = '',
ulend = '</ul></div>';
ADDLI();
var index_hdp02 = $('#index_hdp02 li');
var index_hdp02width = $('#index_hdp02').width();
index_hdp02.eq(0).addClass('current')
function ADDLI(){
//var lilicount = numpic + 1;
for(var i = 0; i <= numpic; i++){
ulcontent += '<li>' + '<span class="index_hdp03">' + (i+1) + '</span>' + '</li>';
}
$('#index_hdp01').after(ulstart + ulcontent + ulend);	
}
index_hdp02.on('click',DOTCHANGE)
function DOTCHANGE(){
var changenow = $(this).index();
$('#index_hdp01 li').eq(nownow).css('z-index','900');
$('#index_hdp01 li').eq(changenow).css({'z-index':'800'}).show();
index_hdp02.eq(changenow).addClass('current').siblings('li').removeClass('current');
$('#index_hdp01 li').eq(nownow).fadeOut(400,function(){$('#index_hdp01 li').eq(changenow).fadeIn(500);});
nownow = changenow;
}
index_hdp02.mouseenter(function(){
inout = 1;
})
index_hdp02.mouseleave(function(){
inout = 0;
})
function GOGO(){
var NN = nownow+1;
if( inout == 1 ){
} else {
if(nownow < numpic){
$('#index_hdp01 li').eq(nownow).css('z-index','900');
$('#index_hdp01 li').eq(NN).css({'z-index':'800'}).show();
index_hdp02.eq(NN).addClass('current').siblings('li').removeClass('current');
$('#index_hdp01 li').eq(nownow).fadeOut(400,function(){$('#index_hdp01 li').eq(NN).fadeIn(500);});
nownow += 1;
}
else{
NN = 0;
$('#index_hdp01 li').eq(nownow).css('z-index','900');
$('#index_hdp01 li').eq(NN).stop(true,true).css({'z-index':'800'}).show();
$('#index_hdp01 li').eq(nownow).fadeOut(400,function(){$('#index_hdp01 li').eq(0).fadeIn(500);});
index_hdp02.eq(NN).addClass('current').siblings('li').removeClass('current');
nownow=0;
}
}
TT = setTimeout(GOGO, SPEED);
}
TT = setTimeout(GOGO, SPEED);
//绝淘当幻灯片
var numpic_jtd = $('#juedaodang_hdp01 li').size()-1;
var nownow_jtd = 0;
var inout_jtd = 0;
var TT_jtd = 0;
var speed_jdt = 5000;
$('#juedaodang_hdp01 li').eq(0).siblings('li').css({'display':'none'});
var ulstart_jtd = '<div id="juedaodang_hdp02"><ul>',
ulcontent = '',
ulend = '</ul></div>';
ADDLI_jtd();
var juedaodang_hdp02 = $('#juedaodang_hdp02 li');
var juedaodang_hdp02width = $('#juedaodang_hdp02').width();
juedaodang_hdp02.eq(0).addClass('current')
function ADDLI_jtd(){
for(var i = 0; i <= numpic_jtd; i++){
ulcontent += '<li>' + '<span class="juedaodang_hdp03">' + (i+1) + '</span>' + '</li>';
}
$('#juedaodang_hdp01').after(ulstart_jtd + ulcontent + ulend);	
}
juedaodang_hdp02.on('click',DOTCHANGE_jtd)
function DOTCHANGE_jtd(){
var changenow_jtd = $(this).index();
$('#juedaodang_hdp01 li').eq(nownow_jtd).css('z-index','900');
$('#juedaodang_hdp01 li').eq(changenow_jtd).css({'z-index':'800'}).show();
juedaodang_hdp02.eq(changenow_jtd).addClass('current').siblings('li').removeClass('current');
$('#juedaodang_hdp01 li').eq(nownow_jtd).fadeOut(400,function(){$('#juedaodang_hdp01 li').eq(changenow_jtd).fadeIn(500);});
nownow_jtd = changenow_jtd;
}
juedaodang_hdp02.mouseenter(function(){
inout_jtd = 1;
})
juedaodang_hdp02.mouseleave(function(){
inout_jtd = 0;
})
function GOGO_jtd(){
var NN_jtd = nownow_jtd+1;
if( inout_jtd == 1 ){
} else {
if(nownow_jtd < numpic_jtd){
$('#juedaodang_hdp01 li').eq(nownow_jtd).css('z-index','900');
$('#juedaodang_hdp01 li').eq(NN_jtd).css({'z-index':'800'}).show();
juedaodang_hdp02.eq(NN_jtd).addClass('current').siblings('li').removeClass('current');
$('#juedaodang_hdp01 li').eq(nownow_jtd).fadeOut(400,function(){$('#juedaodang_hdp01 li').eq(NN_jtd).fadeIn(500);});
nownow_jtd += 1;
}
else{
NN_jtd = 0;
$('#juedaodang_hdp01 li').eq(nownow_jtd).css('z-index','900');
$('#juedaodang_hdp01 li').eq(NN_jtd).stop(true,true).css({'z-index':'800'}).show();
$('#juedaodang_hdp01 li').eq(nownow_jtd).fadeOut(400,function(){$('#juedaodang_hdp01 li').eq(0).fadeIn(500);});
juedaodang_hdp02.eq(NN_jtd).addClass('current').siblings('li').removeClass('current');
nownow_jtd=0;
}
}
TT_jtd = setTimeout(GOGO_jtd, speed_jdt);
}
TT_jtd = setTimeout(GOGO_jtd, speed_jdt);
})