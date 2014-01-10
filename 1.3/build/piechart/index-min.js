/*! kcharts - v1.3 - 2014-01-10 6:20:53 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/piechart/util",function(l,e,t,x){function i(l){function e(l){for(var y=0,n=l.length;n>y;y++)x.call(l[y])==i?e(l[y]):t.push(l[y])}var t=[],x=Object.prototype.toString,i=x.call(l);return e(l),t}function y(e,t){function x(e,y){for(var n=0,r=e.length;r>n;n++)l.isArray(e[n])?x(e[n],y++):t(e[n])&&(i[y]||(i[y]=[]),i[y].push(e[n]))}var i=[];return x(e,0),i}function n(e,t){function x(e,i){for(var r=0,a=e.length;a>r;r++)if(l.isArray(e[r].data)){var s=i.push(l.mix({},e[r],!0,["label"]));i[s].data=[],x(e[r].data,i[s].data)}else{var o=e[r].data,c=o/n;t(o,c)?i.push(e[r]):y+=e[r].data}}var i=[],y=0,n=o(e);return x(e,i),i.push({label:"其它",data:y}),i}function r(l){function e(l){for(var t,x=[],i=0,y=l.length;y>i;i++)"object"==typeof l[i].data&&x.push(1+e(l[i].data));return t=x.length?Math.max.apply(null,x):0}var t=e(l);return t+1}function a(l,e){for(var t=0,x=0,i=l.length;i>x;x++){var y=e(l[x]);y&&(t+=y)}return t}function s(e){return a(e,function(e){return e.value&&l.isNumber(e.value)?e.value:0})}function o(e){for(var t=0,x=0,i=e.length;i>x;x++)t+=l.isArray(e[x].data)?o(e[x].data):e[x].data;return t}function c(l){function e(l,y,n){for(var r=0,a=l.length;a>r;r++){var s;if(s=n?n:r+1,w(l[r].data)){var c=o(l[r].data);l[r].value=c,x[y]||(x[y]=[]),x[y].push(l[r]),i[s-1]||(i[s-1]=[]),i[s-1].push(l[r]),e(l[r].data,y+1,s)}else{if(l[r].value=l[r].data,x[y]||(x[y]=[]),x[y].push(l[r]),t-1>y){var h=y+1;for(l[r].crossdepth=y;t>h;)x[h]||(x[h]=[]),x[h].push(l[r]),h++}i[s-1]||(i[s-1]=[]),i[s-1].push(l[r])}}}var t,x=[],i=[],y={};return t=r(l),e(l,0),y.groups=x,y.set=i,y}function h(l,e){var t,x=this.el.get("start"),i=this.prev,y=this.el.get("donutIndex");y&&(x=i.el.get("end")),t=x-e,this.el.set("start",x),this.el.set("end",t)}function v(l,t){var x=t.get("rs"),i=[],y=t.get("interval")||2,n=t.get("paper"),r=t.get("cx"),a=t.get("cy"),o=t.get("pathcfg"),c=!!t.get("donut"),v=t.get("initdeg");void 0==v&&(v=90);for(var f=0,d=l.length;d>f;f++)for(var p=n.set(),u=s(l[f]),g=0,m=0,_=l[f].length;_>m;m++){var b,w,k=l[f],C=k[m],S="number"==typeof C.crossdepth;if(!(S&&d-1>f)){b=f?S?0==C.crossdepth?[x[f]]:[x[C.crossdepth-1]+y,x[f]]:[x[f-1]+y,x[f]]:x[f],c&&1==d&&(b=[x[0],x[1]]),C.el=new e({paper:n,cx:r,cy:a,r:b,start:v,end:v-1,pathcfg:o,framedata:C}),w=C.el.get("$path"),p.push(w),C.el.set("group",p),C.el.set("groupLength",d),C.el.set("framedata",C);var L=[];if(S)for(var A=C.crossdepth;d>A;)L.push(A),A++;else L.push(f);C.el.set("groupIndex",L),C.el.set("donutIndex",m),C.el.set("label",C.label||""),i.push(C.el),function(l){C.el.on("mouseout",function(){t.fire("mouseout",{sector:l})}),C.el.on("mouseover",function(){t.fire("mouseover",{sector:l})}),C.el.on("click",function(){t.fire("click",{sector:l})})}(C.el),C.frame=h,C.from||(C.from={}),C.to||(C.to={}),C.percent=C.value/u,C.from.deg=0,C.to.deg=m==_-1?360-g:360*C.percent,g+=360*C.percent,C.prev=m>0?k[m-1]:k[_-1],C.next=_-1>m?k[m+1]:k[0]}}return i}function f(l,e){for(var t=e.get("paper"),x=0,i=l.length;i>x;x++)for(var y=t.set(),n=0,r=l[x].length;r>n;n++){var a=l[x][n],s=a.el,o=s.get("$path");y.push(o),s.set("set",y)}}function d(l){var e;return(!l||0>l||l>1)&&(e=.1),e}function p(l,e,t){if(t||(t=0),l){this.color=l;var i,y,n,r,a,s=x.getRGB(l);i=x.rgb2hsb(s),y=i.h,n=i.s,r=i.b,a=(n-t)/e,this.step=a,this.h=y,this.s=n,this.b=r}}function u(l,e,i){for(var y=(e.get("paper"),e.get("color")),n=new t,r=y&&y.initial,a=r&&x.getRGB(r),s=y&&d(y.min),o=new p(a,i,s),c=0,h=a,v=e.get("gradient"),f=0,u=l.length;u>f;f++)for(var g=l[f][0].color,m=l[f].length,_=new p(g,m),b=0,w=l[f].length;w>b;b++){var k,C=l[f][b],S=C.el,L=S.get("framedata"),A=S.get("$path");if(C.color)k=C.color;else{var M;if(M=_.getColor())k=M;else{var T=o.getColor();k=T?T:n.getColor(f+b).DEFAULT}}S.set("fill",k),A.attr("fill",k);var I=L.gradientcolor||h;v&&A.attr("gradient",c+L.to.deg/2+"-"+I+"-"+k),c+=L.to.deg,h=k}}function g(e){e=y(e,function(l){var e=l.el.get("$path");return l.hide?(e.hide(),!1):(e.show(),!0)});for(var t=0,x=e.length;x>t;t++)for(var i=e[t],n=a(i,function(e){return e.value&&!e.hide&&l.isNumber(e.value)?e.value:0}),r=0,s=0,o=i.length;o>s;s++){var c=i[s];c.el.get("$path"),c.percent=c.value/n,c.to.deg=s==o-1?360-r:360*c.percent,r+=360*c.percent,c.prev=s>0?i[s-1]:i[o-1],c.next=o-1>s?i[s+1]:i[0]}}function m(l){for(l%=360;0>l;)l+=360;return l>=0&&90>=l||l>270&&360>=l?!0:!1}function _(l){var e=c(l.get("data")),t=v(e.groups,l);l.get("color"),l.get("hsb");var x=i(e.groups);return f(e.set,l),u(e.set,l,x.length),{$sectors:t,groups:e.groups,set:e.set,framedata:x}}function b(l,e,t){return t||(t=5),t>Math.abs(l-e)}var w=l.isArray;p.prototype.getColor=function(){var l;return this.color&&(l="hsb("+[this.h,this.s-=this.step,this.b].join(",")+")"),l};var k={initPath:_,fillColor:u,adjustFrameData:g,isRightAngel:m,filterdata:n,closeto:b};return k},{requires:["gallery/kcharts/1.3/piechart/sector","gallery/kcharts/1.1/tools/color/index","gallery/kcharts/1.1/raphael/index"]}),KISSY.add("gallery/kcharts/1.3/piechart/sector",function(l,e){function t(l,e,t,x,i){Math.abs(x-i)>=360&&(i+=.01),x==i&&(i-=.1);var y,n=Math.PI/180,r=(x+i)/2,a=l+t*Math.cos(-r*n),s=l+.5*t*Math.cos(-r*n),o=l+t*Math.cos(-x*n),c=l+t*Math.cos(-i*n),h=e+t*Math.sin(-r*n),v=e+.5*t*Math.sin(-r*n),f=e+t*Math.sin(-x*n),d=e+t*Math.sin(-i*n),p=+(Math.abs(x-i)>180),u=1;return y=["M",l,e,"L",o,f,"A",t,t,0,p,u,c,d,"z"],y.middleangle=r,y.middlex=a,y.middley=h,y.cx=s,y.cy=v,y.A=[o,f],y.B=[c,d],y}function x(l,e,t,x,i,y){Math.abs(i-y)>=360&&(y+=.01),i==y&&(y-=.1);var n=Math.PI/180,r=(i+y)/2,a=l+x*Math.cos(-r*n),s=l+(t+.5*(x-t))*Math.cos(-r*n),o=(l+t*Math.cos(-r*n),l+t*Math.cos(-i*n)),c=l+t*Math.cos(-y*n),h=l+x*Math.cos(-i*n),v=l+x*Math.cos(-y*n),f=e+x*Math.sin(-r*n),d=e+(t+.5*(x-t))*Math.sin(-r*n),p=(e+t*Math.sin(-r*n),e+t*Math.sin(-i*n)),u=e+t*Math.sin(-y*n),g=e+x*Math.sin(-i*n),m=e+x*Math.sin(-y*n),_=["M",h,g,"L",o,p,"A",t,t,0,+(Math.abs(y-i)>180),1,c,u,"L",v,m,"A",x,x,0,+(Math.abs(y-i)>180),0,h,g];return _.middleangle=r,_.middlex=a,_.middley=f,_.cx=s,_.cy=d,_.A=[o,p],_.B=[h,g],_.C=[c,u],_.D=[v,m],_}var i,y={initializer:function(){return this.draw(),this.bindEvent(),this},bindEvent:function(){this.on("afterCxChange",function(){this.draw()}),this.on("afterCyChange",function(){this.draw()}),this.on("afterStartChange",function(){this.draw()}),this.on("afterEndChange",function(){this.draw()}),this.on("afterRChange",function(){this.draw()});var l=this.get("$path"),e=this;l.click(function(){e.fire("click")}),l.mouseout(function(){e.fire("mouseout")}),l.mouseover(function(){e.fire("mouseover")})},unbindEvent:function(){this.detach();var l=this.get("$path");l.unclick(),l.unmouseover(),l.unmouseout()},_syncAttrFromPath:function(l){this.set({middleangle:l.middleangle,sectorcx:l.cx,sectorcy:l.cy,middlex:l.middlex,middley:l.middley,centerpoint:l.cc,A:l.A,B:l.B})},draw:function(){var e=this.get("r"),t=this.get("paper"),x=this.get("pathcfg"),i=this.get("framedata"),y=i&&i.sectorcfg||{},n=t.path();x=l.merge({stroke:"#fff"},x),y&&(x=l.merge(x,{stroke:y.stroke,"stroke-width":y.strokeWidth})),n.attr(x),this.set("$path",n),l.isArray(e)&&2==e.length?this._drawDonut():this._drawSector()},_drawSector:function(){var l,e=this.get("cx"),x=this.get("cy"),i=this.get("r"),y=this.get("start"),n=this.get("end"),r=t(e,x,i,y,n),a=r.join(",");return this.get("paper"),l=this.get("$path"),l.attr("path",a),this._syncAttrFromPath(r),this.draw=this._drawSector,this},_drawDonut:function(){var l,e=this.get("cx"),t=this.get("cy"),i=this.get("r"),y=this.get("start"),n=this.get("end");i=i.sort(function(l,e){return e>l?-1:l==e?0:1});var r=x(e,t,i[0],i[1],y,n),a=r.join(",");return this.get("paper"),l=this.get("$path"),l.attr("path",a),this._syncAttrFromPath(r),this.draw=this._drawDonut,this},destroy:function(){this.unbindEvent(),this.get("$path").remove()}};return e.extend?i=e.extend(y):(i=function(l){this.set(l),this.userConfig=l,this.initializer()},l.extend(i,l.Base,y)),i},{requires:["base"]}),KISSY.add("gallery/kcharts/1.3/piechart/label",function(l,e,t,x){function i(l,e){var t,x,i,y;return t=l[0],i=l[1],x=e[0],y=e[1],Math.sqrt(Math.pow(t-x,2)+Math.pow(i-y,2))}function y(l,e,t){function x(l,y,n,r){if(t>=l.length)return{min:n,left:r};if(y>i(e,l[0])){var a=l.slice(1);return x(a,i(e,l[0]),l[0],a)}return x(l.slice(1),y,n,r)}return x(l,1/0,l[0],[])}function n(l,e){function t(l,e,x){if(0==l.length)return x;var i=y(e,l[0],l.length-1);return x.push(i.min),t(l.slice(1),i.left,x)}return t(l,e,[])}function r(l){return a||(a=e("<span/>").css({visibility:"hidden",position:"fixed",left:"-9999em",top:0}).appendTo(document.body)),a.html(l),{width:x.width(a),height:x.height(a)}}var a,s,o={initializer:function(){var l=this.get("label"),e=this.get("x"),t=this.get("y"),x=this.get("size"),i=this.get("pie"),y=(this.get("sector"),i.get("container"));l.css({position:"absolute",left:e+"px",top:t+"px",width:x.width+"px",height:x.height+"px"}).appendTo(y),this.set("el",l)},destroy:function(){var l=this.get("el"),e=this.get("$path");l.detach("click"),l.remove(),e.remove()}};t.extend?s=t.extend(o):(s=function(l){this.set(l),this.userConfig=l,this.initializer()},l.extend(s,t,o));var c,h={initializer:function(){var t,x,i,y,a,o,c,h=this.get("pie"),v=this.get("$sectors"),f=this.get("isleft"),d=h.get("paper"),p=(h.get("container"),v.length,[]),u=[],g=[],m=h.get("cx"),_=h.get("cy"),b=h.get("rs"),w=h.get("padding")||20,k=w+10,C=(Math.cos,Math.sin,Math.asin,Math.PI,Math.PI/180);if(this.labels=[],c=v[0],c&&(t=r(c.get("label")).height)){for(y=Math.max.apply(Math,b),a=y+w,o=y+k,x=_-o,i=_+o,x+=t;i-t>x;x+=t){var S=x,L=Math.asin((S-_)/o),A=m+o*Math.cos(L);A=f?2*m-A:A,p.push([A,S])}v.length>p.length&&(v=v.sort(function(l,e){var t=Math.abs(l.get("start")-l.get("end")),x=Math.abs(e.get("start")-e.get("end"));return t>x?-1:x>t?1:0}),v=v.slice(0,p.length)),v=v.sort(function(l,e){var t=l.get("middley"),x=e.get("middley");return x>t?1:t>x?-1:0}),Math.PI/180,l.each(v,function(l){var e,t,x=l.get("middlex"),i=l.get("middley"),y=l.get("middleangle")*C;e=m+a*Math.cos(-y),t=_+a*Math.sin(-y),g.push([e,t]),u.push([x,i])}),u=u.reverse(),g=g.reverse(),v=v.reverse();for(var M=n(u,p),T=0,I=M.length;I>T;T++){var z,E,P,R,Z=u[T],N=M[T];z=Z[0],P=Z[1],E=N[0],R=N[1];var Y,F;Y=g[T][0],F=g[T][1];var G,X=R;G=f?E-10:E+10;var D,O,$,j=d.path(["M",z,P,"Q",Y,F,G,X].join(",")),B=v[T],H=h.get("sizefn"),U=B.get("label"),q=h.get("labelfn"),K=this,V=B.get("$path").attr("fill"),W=h.get("autoLabelPathColor");q&&l.isFunction(q)&&(U=q(U,B,h)),D=r(U),j&&j.toBack&&j.toBack(),"undefined"!=W&&j.attr("stroke",V),H&&l.isFunction(H)&&(D=H(D,B,h)),f?(O=G-D.width,$=X-D.height/2):(O=G,$=X-D.height/2);var Q=e("<span class='kcharts-label'>"+U+"</span>"),J=new s({label:Q,sector:B,$path:j,x:O,y:$,size:D,pie:h}),le=J.get("el"),ee=function(l,e,t){l.on("click",function(l){K.fire("click",{el:l.currentTarget,label:t,sector:e})})};ee(le,B,J),K.labels.push(J)}}},destroy:function(){l.each(this.labels,function(l){l.destroy()})}};return t.extend?c=t.extend(h):(c=function(l){this.set(l),this.userConfig=l,this.initializer()},l.extend(c,t,h)),c.getSizeOf=r,c},{requires:["node","base","dom"]}),KISSY.add("gallery/kcharts/1.3/piechart/index",function(l,e,t,x,i,y,n,r,a,s){function o(){this.destroy();var l=y(this.get("container"),this.get("width"),this.get("height"));this.set("paper",l),this.initPath(),this.fire("beforeRender");var e=this.get("framedata");this.animate(e)}function c(e){var t,x=this.get("width"),i=this.get("height"),y=Math.min(x,i),n=e.rpadding;e.rs||(n||(n=40,this.set("rpadding",n)),t=y>n?y-n:y,e.rs=[t/2]),l.isNumber(e.cx)||(e.cx=x/2),l.isNumber(e.cy)||(e.cy=i/2),l.isNumber(e.repaintRate)||(e.repaintRate=200),e.donut&&2!=e.rs.length&&(e.donutSize||(e.donutSize=30),e.donutSize>e.rs[0]&&(e.donutSize=e.rs[0]/2),e.rs[1]=e.rs[0]-e.donutSize)}var h,v="{COLOR}",f=function(){var e=l.get(this.get("renderTo")),t=s.width(e),x=s.height(e),i=y(e),n="static"==s.css(e,"position")?!0:!1,r=this.get("series")||this.get("data");this.set("series",r),this.set("data",r),this.set({paper:i,width:t,height:x,container:e});var a=this.userConfig;if(this._setupcfg(a),l.isArray(a.rs)||(a.rs=[a.rs]),n&&s.css(e,"position","relative"),this.set(a),this.adjustCfg(),this.adjustData(),this.drawTitle(),0!=a.autoRender){var o=this;setTimeout(function(){o.render()},0)}var c=this.get("tip");c&&0!=c&&this.renderTip()},d={initializer:f,bindEvent:function(){this.on("afterCxChange",function(){this.render()}),this.on("afterCyChange",function(){this.render()}),this.on("afterRsChange",function(){this.render()}),this.on("afterDataChange",function(){this.render()}),a.on(this.get("container"),"mouseleave",function(){this.fire("mouseleave")},this),this.on("afterRender",this.onafterrender,this)},_setupcfg:c,onafterrender:function(){function e(){var e,t=n.get("$sectors");return e=l.map(t,function(l){var e=l.get("$path"),t=e.attr("fill"),x=l.get("framedata"),i=x.label;return{color:t,text:i,$path:e}})}if(!this.legendrendered){this.legendrendered=!0;var t,x,i,n=this,r=this.get("legend");r&&r.isShow===!1||r&&(t=this.get("paper"),x=this.get("container"),i=this.getbbox(),l.use("gallery/kcharts/1.3/legend/index",function(l,a){var s=e(),o={paper:t,container:x,bbox:i,iconAttrHook:function(l){return{fill:s[l].color}},spanAttrHook:function(l){var e=y.getRGB(s[l].color);return{color:e.hex}},config:s};r.globalConfig=l.merge({shape:"square",interval:20,iconright:5},r.globalConfig);var c=new a(l.merge(o,r));n.set("legend",c),n.fire("afterLegendRender")}))}},adjustCfg:function(){var e=this.get("anim"),t=this,x=l.isFunction(e.endframe)&&e.endframe,i=t.get("label");e||(e={duration:0}),e.endframe=function(){0!=i&&t.drawLabel(i),x&&x.call(t),t.fire("afterRender")}},adjustData:function(){var t=this.get("filterfn");if(t&&l.isFunction(t)){var x,i=this.get("data");x=e.filterdata(i,t),this.set("data",x)}},initPath:function(){var l=e.initPath(this);this.set("$sectors",l.$sectors),this.set("groups",l.groups),this.set("set",l.set),this.set("framedata",l.framedata)},render:function(){this.initPath(),this.fire("beforeRender");var e=this.get("framedata");this.animate(e);var t=l.buffer(o,this.get("repaintRate"),this);this.render=t,this.bindEvent()},adjust:function(){var t=this.get("groups").slice(0),x=this.get("framedata");x=l.filter(x,function(l){return!l.hide}),e.adjustFrameData(t,this);var i=this.get("$labels");l.each(i,function(l){l&&l.destroy()}),this.animate(x)},autoResize:function(){var l,t,x,i=this.get("container"),y=s.width(i),n=s.height(i),r=Math.min(y,n),a=this.get("rpadding"),o=this.get("cx"),c=this.get("cy");t=y/2,x=n/2;var h=this.get("titlebbox");h&&(x+=h.height);var v={width:y,height:n};this.set(v),e.closeto(t,o)||this.set("cx",t),e.closeto(x,c)||this.set("cy",x),l=r>a?r-a:r,h&&(l-=h.height);var f,d,p=this.get("donut"),u=this.get("donutSize");if(p)f=l/2,d=u>f?f/2:f-u,this.set("rs",[f,d]);else{var g=this.get("rs");1==g.length&&this.set("rs",[l/2])}},animate:function(l){var e=this,t=this.get("anim");this.isRunning()&&this.stop(),e.fire("beginRender"),this.animateInstance=x.AnimateObject(l,t)},drawTitle:function(){var e,t,x,y=this.get("title");if(y){e=y.content,t=y.offset||[0,10],x=y.align||"center";var n,r,a=i.getSizeOf(e),o=this.get("container"),c=s.width(o);s.height(o),n="left"==x?0:"right"==x?c-a.width:(c-a.width)/2+t[0],r=t[1];var h=l.Node("<div>"+e+"</div>");h.css({top:r+"px",left:n+"px",position:"absolute"}),this.set("title",h),this.set("titlebbox",{left:n,top:r,width:a.width,height:a.height}),h.appendTo(o)}},drawLabel:function(){var t,x,y=[],n=[],r=this.get("$sectors");l.each(r,function(t){var x=t.get("middleangle"),i=t.get("groupLength"),r=t.get("groupIndex"),a=e.isRightAngel(x),s=t.get("framedata");s.hide||(l.indexOf(i-1,r)>-1?a?n.push(t):(t.set("isleft",!0),y.push(t)):a?t.set("isright",!0):t.set("isleft",!0))}),t=new i({pie:this,$sectors:y,isleft:!0}),x=new i({pie:this,$sectors:n,isleft:!1}),t.on("click",this.onLabelClick,this),x.on("click",this.onLabelClick,this),this.set("$labels",[].concat(t,x))},drawSetLabel:function(){},getbbox:function(){var l,e=this.get("rs"),t=e[e.length-1],x=this.get("rpadding")||0,i=this.get("padding")||0,y=this.get("cx"),n=this.get("cy"),r=2*(t+x+i),a=y-r/2,s=n-r/2;return l={width:r,height:r,left:a,top:s}},renderTip:function(e){if(!this.tip&&(e||(e=this.get("tip")),e)){var t=this,x=t.get("container");l.use("gallery/kcharts/1.3/tip/index",function(l,y){var n=t.getbbox();n.x=n.left,n.y=n.top;var r=e.themeCls||"ks-chart-default",a=e.boundryDetect?n:{},s=l.mix(e,{rootNode:x,clsName:r,boundry:a},void 0,void 0,!0),o=new y(s);t.tip=o,t.on("mouseover",function(x){var y=x.sector,n=y.get("middlex"),r=y.get("middley"),a=y.get("framedata"),s=a.label,c=y.get("groupIndex"),h=y.get("donutIndex"),v=a.percent,f=y.get("color");i.getSizeOf(s),v=(100*v).toFixed(2)+"%",l.isFunction(e.template)?o.setContent(e.template.apply(o,[h,c,s,v])):o.renderTemplate(e.template,{donutIndex:h,index:c,label:s,percent:v}),o.fire("move",{x:n,y:r,style:t.processAttr(e.css,f)})},t)})}},processAttr:function(e,t){var x=l.clone(e);for(var i in x)x[i]&&"string"==typeof x[i]&&(x[i]=x[i].replace(v,t));return x},onLabelClick:function(l){this.fire("labelclick",{el:l.el,label:l.label,sector:l.sector})},isRunning:function(){return this.animateInstance&&this.animateInstance.isRunning()},stop:function(){this.animateInstance&&(this.animateInstance.stop(),delete this.animateInstance)},getConfig:function(l){return l&&this.get(l)},setConfig:function(l){l&&(l.series&&(this.set("data",l.series),delete l.series),this.set(l))},destroy:function(){var e=this.get("$sectors"),t=this.get("$labels"),x=[].concat(e,t);l.each(x,function(l){l&&l.destroy()}),this.set("$sectors",null),this.set("$labels",null),this.get("paper").remove()}};return r.extend?h=r.extend(d):(h=function(l){this.set(l),this.userConfig=l,this.initializer()},l.extend(h,r,d)),h.getSizeOf=i.getSizeOf,h},{requires:["./util","./sector","gallery/kcharts/1.3/animate/index","./label","gallery/kcharts/1.3/raphael/index","gallery/kcharts/1.3/tools/color/index","base","event","dom"]});