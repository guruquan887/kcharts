/*! kcharts - v1.3 - 2014-01-14 2:01:27 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/linechart/theme",function(){var t="{COLOR}",e={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:t},hoverAttr:{stroke:"#fff",r:5,fill:t,"stroke-width":0}},xGrids:{css:{color:"#aaa"}},yGrids:{css:{color:"#aaa"}},yAxis:{css:{color:"#000"}},xAxis:{css:{color:"#000"}},xLabels:{css:{color:"#000","font-size":"12px"}},yLabels:{css:{color:"#000","font-size":"12px"}},pointLine:{css:{color:"#aaa"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{type:"circle",stroke:"{COLOR}",fill:"#fff",r:4,"stroke-width":2},hoverAttr:{type:"circle",stroke:"{COLOR}",fill:"#fff",r:5,"stroke-width":2}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLine:{css:{color:"#ccc"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{type:"circle",stroke:"#fff",r:4,"stroke-width":1.5,fill:t},hoverAttr:{type:"circle",stroke:"#fff",r:5,fill:t,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLine:{css:{color:"#ccc"}}}};return e}),KISSY.add("gallery/kcharts/1.3/linechart/cfg",function(){var t="ks-chart-",e=t+"default",i="{COLOR}";return{themeCls:e,autoRender:!0,comparable:!1,lineType:"straight",colors:[],title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},points:{isShow:!0,attr:{type:"circle",stroke:"#fff",r:4,"stroke-width":1.5,fill:i},hoverAttr:{type:"circle",stroke:"#fff",r:5,fill:i,"stroke-width":0}},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{zIndex:10}},yAxis:{isShow:!0,css:{zIndex:10},num:5},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},areas:{isShow:!1,attr:{fill:"90-#fff-"+i,"stroke-width":0,opacity:.5}},line:{isShow:!0,attr:{"stroke-width":"3px"},hoverAttr:{"stroke-width":"4px"}},pointLine:{isShow:!1,css:{}},legend:{isShow:!1},tip:{isShow:!0,clsName:"",template:"",css:{},offset:{x:0,y:0},boundryDetect:!0}}}),KISSY.add("gallery/kcharts/1.3/linechart/index",function(t,e,i,n,r,o,a,s,c,l,h,f,d,p,g,u,x){var _,v=t.all,m="ks-chart-",y=m+"evtlayout",b="{COLOR}",w=["circle","triangle","rhomb","square"],k={initializer:function(){this.init()},init:function(){var e=this;e.chartType="linechart";var i=t.clone(x);e._cfg=t.mix(i,e.userConfig,void 0,void 0,!0),s.prototype.init.call(e,e._cfg),e._cfg.autoRender&&e.render()},render:function(){var e,i,n=this,r=n._cfg,o=r.themeCls;if(n._$ctnNode[0]){s.prototype.dataFormat.call(n,n._cfg),n._lines={},n._evtEls={},n._finished=[],n._hoverstocks={},o=n._cfg.themeCls||x.themeCls,n._cfg=t.mix(t.clone(t.mix(x,f[o],void 0,void 0,!0)),n._cfg,void 0,void 0,!0),i=n.color=new c({themeCls:o}),n._cfg.colors.length>0&&i.removeAllColors();for(var h in n._cfg.colors)i.setColor(n._cfg.colors[h]);n.__cfg=n.cloneSeriesConfig(["line","points"]),points=n._points[0],e=Math.round(points&&points[0]&&points[1]&&points[1].x-points[0].x||n.getInnerContainer().width),e&&n.set("area-width",e),n.beforeRender(),n._$ctnNode.html(""),n.paper=a(n._$ctnNode[0],r.width,r.height),n.htmlPaper=new l(n._$ctnNode,{clsName:o}),s.Common.drawTitle.call(null,this,o),s.Common.drawSubTitle.call(null,this,o),n.renderTip(),s.Common.drawGridsX.call(null,this),s.Common.drawGridsY.call(null,this),n.drawPointLine(),s.Common.drawAxisX.call(null,this),s.Common.drawAxisY.call(null,this),s.Common.drawLabelsX.call(null,this),s.Common.drawLabelsY.call(null,this),n.drawLines(function(){n.__drawHoverStocks(),n.renderEvtLayout(),n.bindEvt(),n.renderLegend(),n.afterRender(),n.fix2Resize()}),t.log(n)}},cloneSeriesConfig:function(e){var i,n=this,r={},o=t.clone(n._cfg);if(e){for(var a in e)for(var s in n._cfg.series)i=n._cfg.series[s][e[a]]?t.mix(o[e[a]],n._cfg.series[s][e[a]],void 0,void 0,!0):n._cfg[e[a]],i&&(r[e[a]]||(r[e[a]]=[]),r[e[a]][s]=i);return r}},drawLine:function(t){var e=this,i=e._points[t];if(i&&i.length){e.drawArea(t);var n=s.Common.getLinePath.call(null,e,i),r=e.paper,o=e.color.getColor(t).DEFAULT,a=e.__cfg.line[t].attr,c=r.path(n).attr(a).attr({stroke:o});return e._stocks[t].stocks=e.drawStocks(t,e.processAttr(e._cfg.points.attr,o)),e._finished.push(!0),c}},drawArea:function(t){if(this._cfg.areas.isShow){var e=this,i=e._points[t];if(i&&i.length){var n=e.getAreaPath(i),r=e.paper,o=e.color.getColor(t).DEFAULT,a=e._cfg.areas.attr;e._areas[t]={0:r.path(n).attr(e.processAttr(a,o)),attr:a,path:n}}}},getAreaPath:function(t){var e=this,i=s.Common.getLinePath.call(null,e,t),n=e.getInnerContainer(),r=a.pathBBox(i),o=[i," L",r.x2,",",n.br.y," ",r.x,",",n.bl.y," z"].join("");return o},getFirstUnEmptyPointIndex:function(t){var e=this,i=e._points[t];for(var n in i)if(!e.isEmptyPoint(i[n]))return n},animateLine:function(t,e){var i,n,r,o,c=this,l=0,h=0,f=[],d=c._cfg,p=c.color,u=c.paper,x=c._points[t],_=s.Common.getLinePath.call(null,c,x),v=a.getTotalLength(_),m=d.anim?d.anim.duration||500:500,y="easeNone",b=c.get("area-width"),w=c.__cfg.line[t].attr,k=u.path(i).attr(w).attr({stroke:p.getColor(t).DEFAULT});for(var C in c._points[t])f[C]="";return o=c.getFirstUnEmptyPointIndex(t),f[o]=c.drawStock(t,o),new g({},{},{duration:m,easing:y,frame:function(){n=arguments[1]*v,i=a.getSubpath(_,h,n),r=a.pathBBox(i),l=Math.floor(1.01*r.width/b)- -o,!f[l]&&x[l]&&(f[l]=c.drawStock(t,l));for(var e in x)l>e&&!f[e]&&(f[e]=c.drawStock(t,e));k&&k.attr({path:i})},endframe:function(){c._stocks[t].stocks=f,c._finished.push(!0),c._finished.length==d.series.length&&e&&e(),c.__drawHoverStocks(t)}}),k},__drawHoverStocks:function(){var t=this;for(var e in t._stocks)t.removeHoverStock(e),t._hoverstocks[e]=t.drawStock(e,t.getFirstUnEmptyPointIndex(e),{x:0,y:0}).attr(t._stocks[e].hoverAttr).hide()},removeHoverStock:function(t){var e=this;e._hoverstocks[t]&&e._hoverstocks[t].remove&&e._hoverstocks[t].remove(),delete e._hoverstocks[t]},drawLines:function(e){var i=this,n=i._cfg,r=w.length;i._lines={},i._stocks={};for(var o in i._points){var a,c=s.Common.getLinePath.call(null,i,i._points[o]),l=i.color.getColor(o),h=i.processAttr(i._cfg.points.attr,l.DEFAULT),f=i.processAttr(i._cfg.points.hoverAttr,l.HOVER);i._stocks[o]={points:i._points[o],color:l,attr:h,hoverAttr:f,type:"auto"==h.type?w[o%r]:h.type},a=n.anim?i.animateLine(o,e):i.drawLine(o),i._lines[o]={line:a,path:c,points:i._points[o],color:l,attr:t.mix({stroke:l.DEFAULT},i._cfg.line.attr),isShow:!0},i._finished.length==n.series.length&&e&&e()}return i._lines},processAttr:function(e,i){var n=t.clone(e);for(var r in n)n[r]&&"string"==typeof n[r]&&(n[r]=n[r].replace(b,i));return n},drawStocks:function(t){if(this._cfg.points.isShow){var e=this,i=[];for(var n in e._points[t])i.push(e.drawStock(t,n));return i}},drawStock:function(e,i,n){if(this._cfg.points.isShow||void 0!==n){var r,o=this,a=o._cfg,s=o.paper,c=o.color,l=c.getColor(e).DEFAULT,h=o.processAttr(a.points.attr,l),f=o._stocks[e].type,d=o._points[e][i],p=a.points.template,n=n||{},g=void 0!==n.x?n.x:d.x,x=void 0!==n.y?n.y:d.y;if(void 0!==g&&void 0!==x){if(t.isFunction(p))return p({paper:s,lineIndex:e,stockIndex:i,attr:h,color:l,graphTool:u,x:g,y:x});switch(f){case"triangle":r=u.triangle(s,g,x,1.4*h.r);break;case"rhomb":r=u.rhomb(s,g,x,2.4*h.r,2.4*h.r);break;case"square":r=u.rhomb(s,g,x,2.4*h.r,2.4*h.r,45);break;default:r=s.circle(g,x,h.r,h)}return r.attr(h).attr({cx:g,cy:x}),r}}},drawPointLine:function(){if(this._cfg.comparable){var t=this,e=t.htmlPaper,i=t._cfg.themeCls+"-pointline",n=t._innerContainer;return t._pointline=e.lineY(0,n.tl.y,n.height).addClass(i).css(t._cfg.pointLine.css).css({display:"none"}),t._pointline}},renderTip:function(){if(this._cfg.tip.isShow){var e=this,i=e._cfg,n=e._innerContainer,r=i.tip.boundryDetect?{x:n.tl.x,y:n.tl.y,width:n.width,height:n.height}:{},o=t.mix(i.tip,{rootNode:e._$ctnNode,clsName:i.themeCls,boundry:r},void 0,void 0,!0);return e.tip=new p(o),e.tip}},renderEvtLayout:function(){var t,e=this,i=e._innerContainer,n=(i.tl.y,e._points[0]),r=n&&n[0]&&n[1]&&n[1].x-n[0].x||i.width,o=i.height,a=e._evtEls._areas=[],s=e._evtEls._rects=[];t=e._evtEls.paper?e._evtEls.paper:e._evtEls.paper=new l(e._$ctnNode,{clsName:y,prependTo:!1,width:i.width,height:o,left:i.tl.x,top:i.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":.01,"-khtml-opacity":.01,opacity:.01}});for(var c=0,h=n.length;h>c;c++)a[c]={x:n[c].x-r/2,y:i.tl.y,width:r,height:o};for(var c in e._stocks){var f=e._stocks[c],d=[],n=f.points;for(var p in n)d[p]={x:n[p].x-r/2,y:n[p].y-5,width:r,height:10};s[c]=d}},clearEvtLayout:function(){var t=this;t._evtEls._areas&&t._evtEls._areas.length&&(t._evtEls._areas=[]),t._evtEls._rects&&t._evtEls._rects.length&&(t._evtEls._rects=[])},renderLegend:function(){if(this._cfg.legend.isShow){var e=this,i=e._cfg.legend,n=i.container&&v(i.container)[0]?v(i.container):e._$ctnNode,r=e._stocks,o=e._innerContainer,a=e.color._colors,s=a.length,c=e._cfg,l=e._cfg.series,f=t.map(l,function(t,e){e%=s;var i={},n=a[e];i.text=t.text,i.DEFAULT=n.DEFAULT,i.HOVER=n.HOVER;var o=r[e].type;return i.icontype="line"+o,i.iconsize=[1,1],i}),d=t.merge({interval:20,iconright:5,showicon:!0},c.legend.globalConfig);return e.legend=new h({container:n,paper:e.paper,bbox:{width:o.width,height:o.height,left:o.x,top:o.y},align:c.legend.align||"bc",offset:c.legend.offset||[0,30],globalConfig:d,config:f}),e.legend.on("click",function(t){var e=t.index,i=(t.text,t.icon,t.el);1!=i.hide?(this.hideLine(e),i.hide=1,i.disable()):(this.showLine(e),i.hide=0,i.enable())},this),e.legend}},bindEvt:function(){var t=this,e=(t._cfg,t._evtEls);t.curStockIndex=function(){for(var e in t._stocks)if(t._stocks[e].stocks)return e}(),t.curLineIndex=t.getFirstVisibleLineIndex(),r.detach(e.paper.$paper,"mouseleave"),r.on(e.paper.$paper,"mouseleave",function(){t._lines[0].line.attr(t._lines[0].attr),t.tip&&t.tip.hide(),t._pointline&&t._pointline.hide();for(var e in t._hoverstocks)t._hoverstocks[e].hide();t.curStockIndex=void 0,t.paperLeave()}),r.detach(e.paper.$paper,"mousemove"),r.on(e.paper.$paper,"mousemove",function(e){e=t.getOffset(e),t.delegateMouseMove(e)}),r.detach(e.paper.$paper,"click"),r.on(e.paper.$paper,"click",function(e){e=t.getOffset(e),t.delegateClick(e)})},delegateClick:function(t){var e=this,i=e.getInnerContainer();for(var n in e._evtEls._rects)for(var r in e._evtEls._rects[n]){var o=e._evtEls._rects[n][r];if(e.isInSide(t.offsetX+i.x,t.offsetY+i.y,o.x,o.y,o.width,o.height))return e.stockClick(n,r),void 0}},delegateMouseMove:function(t){var e=this,i=e.getInnerContainer(),n=e.curStockIndex;for(var r in e._evtEls._areas){var o=e._evtEls._areas[r];if(e.isInSide(t.offsetX+i.x,t.offsetY+i.y,o.x,o.y,o.width,o.height)&&(void 0===n||n!=r))return e.curStockIndex=r,e.tipHandler(e.curLineIndex,e.curStockIndex),void 0}for(var r in e._evtEls._rects)for(var a in e._evtEls._rects[r]){var s=e._evtEls._rects[r][a];if(e.isInSide(t.offsetX+i.x,t.offsetY+i.y,s.x,s.y,s.width,s.height)){if(e.curLineIndex===r)return;return e.lineChangeTo(r),e.tipHandler(e.curLineIndex,e.curStockIndex),void 0}}},lineChangeTo:function(t){var e=this,i=(e._cfg,e.__cfg.line[t].hoverAttr);if(!e._isAnimating&&e._lines[t].isShow){for(var n in e._stocks)e._stocks[n].points=e._points[n];for(var n in e._lines)n!=t&&e._lines[n].line&&e._lines[n].line.attr(e.__cfg.line[n].attr);e.removeLine(t),e._lines[t].line=e.drawLine(t).attr(i),e.__drawHoverStocks(),e.curLineIndex=t}},tipHandler:function(e,i){var n=this;if(void 0!==e&&void 0!==i){var r,o=n.tip,a=n._cfg,c=a.series,l=a.tip.template,h=(o.getInstance(),n._points[e]),f=(n._stocks[e],h[i]),d=n._lines[e].color.DEFAULT;if(l&&a.tip.isShow&&void 0!==n.curStockIndex){if(n._cfg.comparable){var p={datas:{}},g=[];for(var u in n._points)if(n._stocks[u].stocks&&n._points[u][i].dataInfo){n._points[u][i].dataInfo.color=n._stocks[u].color.DEFAULT;var x=t.merge(n._points[u][i].dataInfo,c[u]);delete x.data,p.datas[u]=x}for(var u in p.datas)g.push(p.datas[u]);p.datas=s.prototype.arraySort(g,!0,"y"),r=p}else r=t.merge(n._points[e][i].dataInfo,c[e]),delete r.data;n.stockChange(e,i),n.isEmptyPoint(h[i])||(r.lineindex=e,r.pointindex=i,o.fire("setcontent",{data:r}),o.fire("move",{x:f.x,y:f.y,style:n.processAttr(a.tip.css,d)}))}}},stockChange:function(e,i){var n=this,r=n._points[e],o=n._stocks[e],a=o.stocks&&o.stocks[i];if(r&&!n.isEmptyPoint(r[i])&&n._lines[e].isShow)if(n._pointline&&n._pointline.css({left:n._pointsX[i].x}).show(),n._cfg.comparable)for(var s in n._hoverstocks){var c=n._points[s][i];n._lines[s].isShow&&n._hoverstocks[s].transform(["T",c.x,",",c.y].join("")).show()}else{var c=r[i];n._lines[e].isShow&&n._hoverstocks[e].transform(["T",c.x,",",c.y].join("")).show()}else{var l=n.getFirstNotEmptyPointsLineIndex(i);l&&n.lineChangeTo(l)}if(n._points[e][i].dataInfo&&n._lines[e].isShow){var h=t.mix({target:a,currentTarget:a,lineIndex:Math.round(e),stockIndex:Math.round(i)},o.points[i]);n.fire("stockChange",h)}},getFirstNotEmptyPointsLineIndex:function(t){var e=this;for(var i in e._points)if(!e.isEmptyPoint(e._points[i][t])&&e._lines[i].isShow)return i+"";return""},getFirstVisibleLineIndex:function(){var t=this;for(var e in t._lines)if(t._lines[e].isShow)return e},isEmptyPoint:function(t){return t&&t.dataInfo?!1:!0},removeArea:function(t){this._areas&&this._areas[t]&&(this._areas[t].remove&&this._areas[t].remove(),delete this._areas[t])},removeStock:function(t){var e=this;for(var i in e._stocks[t].stocks)e._stocks[t].stocks[i]&&e._stocks[t].stocks[i].remove();delete e._stocks[t].stocks},transformLine:function(t){var e=this,i=500,n=s.Common.getLinePath.call(null,e,e._points[t]),r=e._lines[t].path;r!=n&&""!=n&&(e._isAnimating=!0,e.__transformArea(t,i),e.__transformStock(t,i),e.__transformLine(t,{path:n},i,function(){e._isAnimating=!1}))},__transformArea:function(t,e,i){var n=this,r=n._areas[t],o=n.getAreaPath(n._points[t]);r&&(r[0]&&r[0].stop()&&r[0].animate({path:o},e,i),r.path=o)},__transformLine:function(t,e,i,n){var r=this,o=r._lines[t];o.line&&o.line.stop()&&o.line.animate(e,i,n),o.path=e.path},__transformStock:function(t,e){var i,n=this,r=n._stocks[t];for(var o in r.stocks)r.stocks[o]&&(i=r.stocks[o],i.stop().animate({transform:"T"+(r.points[o].x-r.stocks[o].attr("cx"))+","+(r.points[o].y-r.stocks[o].attr("cy"))},e))},removeLine:function(t){var e=this;e._lines[t].line.remove(),e._areas[t]&&e._areas[t][0]&&e._areas[t][0].remove&&e._areas[t][0].remove();for(var i in e._stocks)t==i&&(e.removeStock(t),e.removeArea(t),e.removeHoverStock(t)),e._stocks[i].points=e._points[i]},hideLine:function(e){var i=this;if(i._lines[e].isShow){i._lines[e].isShow=!1,e==i.curLineIndex&&(i.curLineIndex=i.getFirstVisibleLineIndex()),s.prototype.removeData.call(i,e),s.Common.animateGridsAndLabels.call(null,i),i.removeLine(e);for(var n in i._lines)n!=e&&i.transformLine(n);i.clearEvtLayout(),i.renderEvtLayout(),i.bindEvt(),t.log(i)}},showLine:function(t){var e=this;if(!e._lines[t].isShow){e._lines[t].isShow=!0,e._cfg.series[t].isShow=!0,s.prototype.recoveryData.call(e,t),s.Common.animateGridsAndLabels.call(null,e),e._lines[t].line=e.drawLine(t),e.__drawHoverStocks();for(var i in e._stocks)e._stocks[i].points=e._points[i];for(var i in e._lines)e.transformLine(i);e.clearEvtLayout(),e.renderEvtLayout(),e.bindEvt()}},fix2Resize:function(){var e=this;e._$ctnNode,e._cfg.anim="";var i=t.buffer(function(){e.render()},200);!e.__isFix2Resize&&e.on("resize",function(){e.__isFix2Resize=1,i()})},paperLeave:function(){var t=this;t.fire("paperLeave",t)},stockClick:function(e,i){var n=this,r=n._stocks[e],o=r.stocks&&r.stocks[i],a=t.mix({target:o,currentTarget:o,lineIndex:Math.round(e),stockIndex:Math.round(i)},r.points[i]);n.fire("stockClick",a)},beforeRender:function(){var t=this;t.fire("beforeRender",t)},afterRender:function(){var t=this;t.fire("afterRender",t)},getHtmlPaper:function(){return this.htmlPaper},getRaphaelPaper:function(){return this.paper},clear:function(){this._$ctnNode.html("")}};return e.extend?_=s.extend(k):(_=function(t){var e=this;e.userConfig=t,e.init()},t.extend(_,s,k)),_},{requires:["base","node","dom","event","gallery/template/1.0/index","gallery/kcharts/1.3/raphael/index","gallery/kcharts/1.3/basechart/index","gallery/kcharts/1.3/tools/color/index","gallery/kcharts/1.3/tools/htmlpaper/index","gallery/kcharts/1.3/legend/index","./theme","gallery/kcharts/1.3/tools/touch/index","gallery/kcharts/1.3/tip/index","gallery/kcharts/1.3/animate/index","gallery/kcharts/1.3/tools/graphtool/index","./cfg"]});