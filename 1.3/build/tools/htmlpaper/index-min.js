/*! kcharts - v1.3 - 2014-01-10 6:20:53 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/tools/htmlpaper/index",function(t){var e=t.all,l=function(t,l){var r=this;if(t)return r.$tgt=e(t),r._init(l)};return t.augment(l,{_init:function(e){var l=this;l._cfg=t.mix({clsName:"ks-charts-container",prependTo:!0,width:void 0,height:void 0,left:0,top:0,css:{}},e),l.$paper=l._createPaper()},_createPaper:function(){var t=this,l=t.$tgt,r=t._cfg,i=e("<div></div>").addClass(r.clsName).css({width:r.width||l.width(),height:r.height||l.height(),position:"absolute",top:r.top||0,left:r.left||0}).css(r.css);return r.prependTo?i.prependTo(l):i.appendTo(l),i},text:function(t,l,r,i,n){var a,s,o=this,h=0,c=0,t=t-o._cfg.left,l=l-o._cfg.top,x=e("<div></div>").html(r).css({display:"block",position:"absolute"});switch(x.appendTo(o.$paper),a=x.outerWidth(),s=x.outerHeight(),i){case"right":h=-a;break;case"center":h=-a/2}switch(n){case"middle":c=-s/2;break;case"bottom":c=-s}return x.css({left:t,top:l,marginLeft:h,marginTop:c}),x},rect:function(t,l,r,i){var n=this,t=t-n._cfg.left,l=l-n._cfg.top,a=e("<div></div>").css({left:t,top:l,width:r,height:i,"font-size":"1px",display:"block",position:"absolute"});return a.appendTo(n.$paper)},lineX:function(t,l,r){var i=this,t=t-i._cfg.left,l=l-i._cfg.top,n=e("<div></div>").css({left:t,top:l,display:"block",position:"absolute",width:r,height:0,borderTop:"1px solid"});return n.appendTo(i.$paper)},lineY:function(t,l,r){var i=this,t=t-i._cfg.left,l=l-i._cfg.top,n=e("<div></div>").css({left:t,top:l,display:"block",position:"absolute",width:0,height:r,borderLeft:"1px solid"});return n.appendTo(i.$paper)},clear:function(){var t=this;return t.$paper.html(""),t.$paper}}),l});