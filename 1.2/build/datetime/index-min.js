/*! kcharts - v1.2 - 2013-09-02 2:14:02 PM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/datetime/theme",function(){var t="{COLOR}",e={"ks-chart-default":{lineType:"arc",anim:!1,title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},line:{attr:{"stroke-width":1},hoverAttr:{"stroke-width":1}},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:t}},xGrids:{isShow:!1},yGrids:{css:{color:"#eee"}},yAxis:{isShow:!1,css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px",marginLeft:-10}},pointLine:{css:{color:"#ccc"}},tip:{css:{border:"1px solid {COLOR}"},alignX:"right",css:{"border-color":"{COLOR}"},offset:{y:-10,x:-10}}}};return e}),KISSY.add("gallery/kcharts/1.2/datetime/index",function(t,r,i,n,a,s,o,l,c,d,f,h,_){var p,u=t.all,g=t.Event,x="ks-chart-",v=x+"default",y=x+"evtlayout",m="{COLOR}",b=["circle","triangle","rhomb","square"],L=function(t){var e=this;e._cfg=t,e.init()};return t.extend(L,a,{init:function(){var e,r=this;if(a.prototype.init.call(r,r._cfg),r.chartType="linechart",r._$ctnNode[0]){var i={themeCls:v,autoRender:!0,comparable:!1,lineType:"straight",colors:[],title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},points:{attr:{type:"circle",stroke:"#fff",r:4,"stroke-width":1.5,fill:m},hoverAttr:{type:"circle",stroke:"#fff",r:5,fill:m,"stroke-width":0}},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{zIndex:10}},yAxis:{isShow:!0,css:{zIndex:10},num:5},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},areas:{isShow:!0,attr:{fill:"90-#fff-"+m,"stroke-width":0,opacity:.5}},line:{isShow:!0,attr:{"stroke-width":"3px"},hoverAttr:{"stroke-width":"4px"}},pointLine:{isShow:!1,css:{}},legend:{isShow:!1},tip:{isShow:!0,clsName:"",template:"",css:{},offset:{x:0,y:0},boundryDetect:!0}};r._lines={},r._finished=[],v=r._cfg.themeCls||i.themeCls,r._cfg=t.mix(t.mix(i,c[v],d,d,!0),r._cfg,d,d,!0),r.color=p=new s({themeCls:v}),r._cfg.colors.length>0&&p.removeAllColors();for(var n in r._cfg.colors)p.setColor(r._cfg.colors[n]);r.__cfg=r.cloneSeriesConfig(["line","points"]),e=r._points[0],w=Math.round(e&&e[0]&&e[1]&&e[1].x-e[0].x||r.getInnerContainer().width),w&&r.set("area-width",w),r._cfg.autoRender&&r.render(!0)}},cloneSeriesConfig:function(e){var r,i=this,n={},a=t.clone(i._cfg);if(e){for(var s in e)for(var o in i._cfg.series)r=i._cfg.series[o][e[s]]?t.mix(a[e[s]],i._cfg.series[o][e[s]],d,d,!0):i._cfg[e[s]],r&&(n[e[s]]||(n[e[s]]=[]),n[e[s]][o]=r);return n}},drawTitle:function(){var e=this,r=e.htmlPaper,i=v+"-title",n=e._cfg,a=e._innerContainer,s=.6*a.y;n.title.isShow&&""!=n.title.content&&(e._title=r.rect(0,0,e._$ctnNode.width(),s).addClass(i).css(t.mix({"line-height":s+"px"},n.title.css)).html(n.title.content))},drawSubTitle:function(){var e=this,r=e.htmlPaper,i=v+"-subtitle",n=e._cfg,a=e._innerContainer,s=.4*a.y;n.subTitle.isShow&&""!=n.subTitle.content&&(e._subTitle=r.rect(0,.6*a.y,e._$ctnNode.width(),s).addClass(i).css(t.mix({"line-height":s+"px"},n.subTitle.css)).html(n.subTitle.content))},getRealPointsNum:function(t){var e=0;for(var r in t)t[r].x&&t[r].y&&e++;return e},getVisableLineNum:function(){for(var t=this,e=t._cfg,r=e.series.length,i=r,n=0;r>n;n++)0==e.series[n].isShow&&i--;return i},drawLine:function(t,e){var r=this,i=r._points[t];if(i&&i.length){var n=r.getLinePath(i),a=r.paper,s=r.color.getColor(t).DEFAULT,o=r.__cfg.line[t].attr,l=a.path(n).attr(o).attr({stroke:s}),c=r.getVisableLineNum();return r._finished.push(!0),r._finished.length==c&&e&&e(),l}},drawArea:function(t){var e=this,r=e._points[t];if(r&&r.length){var i=e.getAreaPath(r),n=e.paper,a=e.color.getColor(t).DEFAULT,s=e._cfg.areas.attr,o=n.path(i).attr(e.processAttr(s,a));return o}},getFirstUnEmptyPointIndex:function(t){var e=this,r=e._points[t];for(var i in r)if(!e.isEmptyPoint(r[i]))return i},animateLine:function(e,r){var i,a,s,o,l,c=this,d=0,f=0,_=c._cfg,u=c.paper,g=c._points[e],x=(c._stocks[e].type,c.getLinePath(g)),v=n.getTotalLength(x),y=(g.length||0,c.getRealPointsNum(g),_.anim?_.anim.duration||500:500),m="easeNone",b=c.get("area-width"),w=(t.mix({stroke:p.getColor(e).DEFAULT},_.line.attr),c.__cfg.line[e].attr),L=u.path(i).attr(w).attr({stroke:p.getColor(e).DEFAULT});return l=c.getFirstUnEmptyPointIndex(e),o=c.getVisableLineNum(),new h({},{},{duration:y,easing:m,step:function(){a=arguments[1]*v,i=n.getSubpath(x,f,a),s=n.pathBBox(i),d=Math.floor(1.01*s.width/b)- -l,L&&L.attr({path:i})},end:function(){c._finished.push(!0),c._finished.length==o&&r&&r()}}),L},getLinePath:function(t){var e=this,r="",i=(e._innerContainer.bl.y,e.getRealPointsNum(t)),n=0;if(!t)return"";if(n=function(){for(var r in t)if(!e.isEmptyPoint(t[r]))return Math.round(r)}(),r+="M"+t[n].x+","+t[n].y,"arc"==e._cfg.lineType&&i>2){r+=" R";for(var a=n+1,i=t.length;i>a;a++)t[a].x&&t[a].y&&(r+=t[a].x+","+t[a].y+" ")}else for(var a=n+1,i=t.length;i>a;a++)t[a].x&&t[a].y&&(r+=" L"+t[a].x+","+t[a].y);return r},getAreaPath:function(t){var e=this,r=e.getLinePath(t),i=e.getInnerContainer(),n=[r," L",i.br.x,",",i.br.y," ",i.bl.x,",",i.bl.y," z"].join("");return n},drawLines:function(e){var r=this,i=r._cfg,n=b.length;r._lines={},r._stocks={};for(var a in r._points){var s,o,l=r.getLinePath(r._points[a]),c=p.getColor(a),d=r.processAttr(r._cfg.points.attr,c.DEFAULT),f=r.processAttr(r._cfg.points.hoverAttr,c.HOVER);r._stocks[a]={points:r._points[a],color:c,attr:d,hoverAttr:f,type:"auto"==d.type?b[a%n]:d.type},i.series[a].isShow!==!1&&(s=r._areas[a]=r.drawArea(a),o=r.drawLine(a,e)),r._lines[a]={line:o,path:l,points:r._points[a],color:c,attr:t.mix({stroke:c.DEFAULT},r._cfg.line.attr),isShow:i.series[a].isShow===!1?!1:!0}}return r._lines},processAttr:function(e,r){var i=t.clone(e);for(var n in i)i[n]&&"string"==typeof i[n]&&(i[n]=i[n].replace(m,r));return i},drawStocks:function(){var t=this;for(var e in t._stocks)t._stocks[e].stock=t.drawStock(0,0,t._stocks[e].attr).hide()},drawStock:function(t,e,r,i){var n,a=this,s=a.paper,o=a._cfg.points.attr;if(t!==d&&e!==d){switch(i){case"triangle":n=_.triangle(s,t,e,1.4*o.r);break;case"rhomb":n=_.rhomb(s,t,e,2.4*o.r,2.4*o.r);break;case"square":n=_.rhomb(s,t,e,2.4*o.r,2.4*o.r,45);break;default:n=s.circle(t,e,o.r,r)}return n.attr(o).attr(r),n}return""},drawGridsX:function(){for(var t=this,e=t._points[0],r=function(){var t=e.length,r=[];if(t>1){var i=(e[1].x-e[0].x)/2;r.push({x:e[0].x-i});for(var n in e)r.push({x:e[n].x- -i})}return r}(),i=0,n=r.length;n>i;i++){var a=t.drawGridX(r[i]);t._gridsX.push(a)}return t._gridsX},drawGridX:function(t,e){var r=this,i=r._innerContainer.tl.y,n=r._innerContainer.height,e=e||r._cfg.xGrids.css,a=r.htmlPaper,s=r._cfg.themeCls+"-gridsx";return a.lineY(t.x,i,n).addClass(s).css(r._cfg.xGrids.css)},drawGridY:function(t,e){var r=this,i=r._innerContainer.width,e=e||r._cfg.yGrids.css,n=r.htmlPaper,a=r._cfg.themeCls+"-gridsy";return n.lineX(t.x,t.y,i).addClass(a).css(e)},drawGridsY:function(){for(var t=this,e=t._innerContainer.tl.x,r=t._pointsY,i=0,n=r.length;n>i;i++)t._gridsY[i]={0:t.drawGridY({x:e,y:r[i].y}),num:t.coordNum[i]}},drawAxisX:function(){var t=this,e=t._innerContainer,r=e.bl,i=e.width,n=t.htmlPaper,a=t._cfg.themeCls+"-axisx";return t._axisX=n.lineX(r.x,r.y,i).addClass(a).css(t._cfg.xAxis.css||{}),t._axisX},drawAxisY:function(){var t=this,e=t._innerContainer,r=e.tl,i=e.height,n=t.htmlPaper,a=t._cfg.themeCls+"-axisy";return t._axisY=n.lineY(r.x,r.y,i).addClass(a).css(t._cfg.yAxis.css||{}),t._axisY},drawLabelsX:function(){var t=this,e=t._cfg.xAxis.text;for(var r in e)t._labelX[r]=t.drawLabelX(r,e[r])},drawLabelsY:function(){var t=this;for(var e in t._pointsY)t._labelY[e]={0:t.drawLabelY(e,t._pointsY[e].number),num:t._pointsY[e].number};return t._labelY},drawLabelX:function(e,r){var n,a=this,s=a.htmlPaper,o=a._pointsX,l=o.length||0,c=a._cfg.themeCls+"-xlabels",f="{{data}}",h="";return l>e?(f=a._cfg.xLabels.template||f,h=t.isFunction(f)?f(e,r):i(f).render({data:r}),n=o[e],n[0]=h&&s.text(n.x,n.y,"<span class="+c+">"+h+"</span>","center").children().css(a._cfg.xLabels.css),n[0]):d},drawLabelY:function(e,r){var n=this,a=n.htmlPaper,s=n._cfg.themeCls+"-ylabels",o="{{data}}",l="";return o=n._cfg.yLabels.template||o,l=t.isFunction(o)?o(e,r):i(o).render({data:r}),l&&a.text(n._pointsY[e].x,n._pointsY[e].y,"<span class="+s+">"+l+"</span>","right","middle").children().css(n._cfg.yLabels.css)},drawPointLine:function(){var t=this,e=t.htmlPaper,r=t._cfg.themeCls+"-pointline",i=t._innerContainer;return t._pointline=e.lineY(0,i.tl.y,i.height).addClass(r).css(t._cfg.pointLine.css).css({display:"none"}),t._pointline},renderTip:function(){var e=this,r=e._cfg,i=e._innerContainer,n=r.tip.boundryDetect?{x:i.tl.x,y:i.tl.y,width:i.width,height:i.height}:{},a=t.mix(r.tip,{rootNode:e._$ctnNode,clsName:r.themeCls,boundry:n},d,d,!0);return e.tip=new f(a),e.tip},renderEvtLayout:function(){var t,e=this,r=e._innerContainer,i=(r.tl.y,e._points[0]),n=i&&i[0]&&i[1]&&i[1].x-i[0].x||r.width,a=r.height,s=e._multiple,l=e._evtEls._areas=[],c=e._evtEls._rects=[];t=e._evtEls.paper?e._evtEls.paper:e._evtEls.paper=new o(e._$ctnNode,{clsName:y,prependTo:!1,width:r.width,height:a,left:r.tl.x,top:r.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":.01,"-khtml-opacity":.01,opacity:.01}});for(var d=0,f=i.length;f>d;d++)l[d]={x:i[d].x-n/2,y:r.tl.y,width:n,height:a};if(s)for(var d in e._points){var c=[],i=e._points[d];for(var h in i)c[h]={x:i[h].x-n/2,y:i[h].y-5,width:n,height:10};e._evtEls._rects[d]=c}},clearEvtLayout:function(){var t=this;t._evtEls._areas&&t._evtEls._areas.length&&(t._evtEls._areas=[]),t._evtEls._rects&&t._evtEls._rects.length&&(t._evtEls._rects=[])},renderLegend:function(){var e=this,r=e._cfg.legend,i=r.container&&u(r.container)[0]?u(r.container):e._$ctnNode,n=e._innerContainer,a=e.color._colors,s=a.length,o=e._cfg,c=e._cfg.series,d=t.map(c,function(t,e){e%=s;var r={},i=a[e];return r.text=t.text,r.DEFAULT=i.DEFAULT,r.HOVER=i.HOVER,r}),f=t.merge({interval:20,iconright:5,showicon:!0},o.legend.globalConfig);return e.legend=new l({container:i,bbox:{width:n.width,height:n.height,left:n.x,top:n.y},align:o.legend.align||"bc",offset:o.legend.offset||[0,30],globalConfig:f,config:d}),e.legend.on("click",function(t){var e=t.index,r=(t.text,t.icon,t.el);1!=r.hide?(this.hideLine(e),r.hide=1,r.disable()):(this.showLine(e),r.hide=0,r.enable())},this),e.legend},render:function(e){var r=this,i=r._cfg,a=i.themeCls;r.beforeRender(),e&&r._$ctnNode.html(""),r.paper=n(r._$ctnNode[0],i.width,i.height),r.htmlPaper=new o(r._$ctnNode,{clsName:a}),r.drawTitle(),r.drawSubTitle(),i.tip.isShow&&r.renderTip(),i.xGrids.isShow&&r.drawGridsX(),i.yGrids.isShow&&r.drawGridsY(),r.drawPointLine(),i.xAxis.isShow&&r.drawAxisX(),i.yAxis.isShow&&r.drawAxisY(),i.xLabels.isShow&&r.drawLabelsX(),i.yLabels.isShow&&r.drawLabelsY(),r.drawLines(),r.drawStocks(),r.renderEvtLayout(),r.bindEvt(),i.legend.isShow&&r.renderLegend(),r.afterRender(),t.log(r)},bindEvt:function(){var t=this,e=(t._cfg,t._evtEls);t.curStockIndex=function(){for(var e in t._stocks)if(t._stocks[e].stocks)return e}(),t.curLineIndex=t.getFirstVisibleLineIndex(),g.detach(e.paper.$paper,"mouseleave"),g.on(e.paper.$paper,"mouseleave",function(){t._lines[0].line.attr(t._lines[0].attr),t.tip&&t.tip.hide(),t._pointline&&t._pointline.hide();for(var e in t._stocks)t._stocks[e].stock&&t._stocks[e].stock.hide();t.curStockIndex=d,t.paperLeave()}),g.detach(e.paper.$paper,"mousemove"),g.on(e.paper.$paper,"mousemove",function(e){e=t.getOffset(e),t.delegateMouseMove(e)})},delegateMouseMove:function(t){var e=this,r=e.getInnerContainer(),i=e.curStockIndex;for(var n in e._evtEls._areas){var a=e._evtEls._areas[n];if(e.isInSide(t.offsetX+r.x,t.offsetY+r.y,a.x,a.y,a.width,a.height)&&(i===d||i!=n))return e.curStockIndex=n,e.stockHandler(e.curLineIndex,e.curStockIndex),e.tipHandler(e.curLineIndex,e.curStockIndex),d}for(var n in e._evtEls._rects)for(var s in e._evtEls._rects[n]){var o=e._evtEls._rects[n][s];if(e.isInSide(t.offsetX+r.x,t.offsetY+r.y,o.x,o.y,o.width,o.height)){if(e.curLineIndex===n)return;return e.lineChangeTo(n),e.stockHandler(e.curLineIndex,e.curStockIndex),e.tipHandler(e.curLineIndex,e.curStockIndex),d}}},stockHandler:function(t,e){var r=this;for(var i in r._stocks)r._stocks[i].stock&&r._stocks[i].stock.show().attr({cx:r._points[i][e].x,cy:r._points[i][e].y});r.stockChange(t,e)},tipHandler:function(e,r){var i=this;if(e!==d&&r!==d){var n,s=i.tip,o=i._cfg,l=o.series,c=o.tip.template,f=(s.getInstance(),i._points[e][r]),h=i._lines[e].color.DEFAULT;if(i.curStockIndex!==d&&(currentPoints=i._points[e],c&&o.tip.isShow)){if(currentPoints&&!i.isEmptyPoint(currentPoints[r])&&i._lines[e].isShow)i._pointline&&i._pointline.css({"margin-left":i._pointsX[r].x}).show();else{var _=i.getFirstNotEmptyPointsLineIndex(r);_&&i.lineChangeTo(_)}if(i._cfg.comparable){var p={datas:{}},u=[];for(var g in i._points)if(i._stocks[g].stock&&i._points[g][r].dataInfo){i._points[g][r].dataInfo.color=i._stocks[g].color.DEFAULT;var x=t.merge(i._points[g][r].dataInfo,l[g]);delete x.data,p.datas[g]=x}for(var g in p.datas)u.push(p.datas[g]);p.datas=a.prototype.arraySort(u,!0,"y"),n=p}else{var n=t.merge(i._points[e][r].dataInfo,l[e]);delete n.data}i.areaChange(r),i.isEmptyPoint(currentPoints[r])||(t.mix(n,{lineindex:e,pointindex:r}),s.fire("setcontent",{data:n}),s.fire("move",{x:f.x,y:f.y,style:i.processAttr(o.tip.css,h)}))}}},getFirstNotEmptyPointsLineIndex:function(t){var e=this;for(var r in e._points)if(!e.isEmptyPoint(e._points[r][t])&&e._lines[r].isShow)return r+"";return""},getFirstVisibleLineIndex:function(){var t=this;for(var e in t._lines)if(t._lines[e].isShow)return e},isEmptyPoint:function(t){return t&&t.dataInfo?!1:!0},deleteArea:function(t){var e=this;e._areas[t]&&e._areas[t].remove&&e._areas[t].remove()},hideLine:function(e){var r=this,i=500;if(r._lines[e].isShow){r._lines[e].isShow=!1,e==r.curLineIndex&&(r.curLineIndex=r.getFirstVisibleLineIndex()),a.prototype.removeData.call(r,e),r.animateGridsAndLabels(),r._lines[e].line.remove(),r.deleteArea(e);for(var n in r._stocks)e==n&&(r._stocks[e].stock&&r._stocks[e].stock.remove(),delete r._stocks[e].stock),r._stocks[n].points=r._points[n];for(var n in r._lines)if(n!=e){var s=r.getLinePath(r._points[n]),o=r._lines[n].path,l=r.getAreaPath(r._points[n]);o!=s&&""!=s&&(r._isAnimating=!0,r._areas[n]&&r._areas[n].stop&&r._areas[n].stop()&&r._areas[n].animate({path:l},i),r._lines[n].line&&r._lines[n].line.stop()&&r._lines[n].line.animate({path:s},i,function(){r._isAnimating=!1}),r._lines[n].path=s)}r.clearEvtLayout(),r.renderEvtLayout(),r.bindEvt(),t.log(r)}},showLine:function(t){var e=this,r=500;if(!e._lines[t].isShow){e._lines[t].isShow=!0,e._cfg.series[t].isShow=!0,a.prototype.recoveryData.call(e,t),e.animateGridsAndLabels(),e._areas[t]=e.drawArea(t),e._lines[t].line=e.drawLine(t),e._stocks[t].stock=e.drawStock(0,0,e._stocks[t].attr).hide();for(var i in e._stocks)e._stocks[i].points=e._points[i];for(var i in e._lines){var n=e.getLinePath(e._points[i]),s=e._lines[i].path,o=e.getAreaPath(e._points[i]);s!=n&&e._lines[i].line&&(e._isAnimating=!0,e._areas[i]&&e._areas[i].stop&&e._areas[i].stop()&&e._areas[i].animate({path:o},r),e._lines[i].line&&e._lines[i].line.stop().animate({path:n},r,function(){e._isAnimating=!1}),e._lines[i].path=n)}e.clearEvtLayout(),e.renderEvtLayout(),e.bindEvt()}},animateGridsAndLabels:function(){var t,e,r,i=this,n=(Math.max(i._pointsY.length,i._gridsY.length),i.coordNum);if(n){t=Math.max.apply(null,n),e=Math.min.apply(null,n),r=t/2+e/2;for(var a in i._labelY)i._labelY[a]&&i._labelY[a][0]&&i._labelY[a][0].remove(),i._gridsY[a]&&i._gridsY[a][0]&&i._gridsY[a][0].remove();i.drawGridsY(),i.drawLabelsY()}},lineChangeTo:function(t){var e=this,r=e._cfg,i=e.__cfg.line[t].hoverAttr;if(!e._isAnimating&&e._lines[t].isShow){for(var n in e._stocks)e._stocks[n].points=e._points[n];for(var n in e._lines)n!=t&&e._lines[n].line&&e._lines[n].line.attr(e.__cfg.line[n].attr);r.areas.isShow&&(e.deleteArea(t),e._areas[t]=e.drawArea(t)),e._lines[t].line.remove(),e._stocks[t].stock.remove&&e._stocks[t].stock.remove(),e._lines[t].line=e.drawLine(t).attr(i),e._stocks[t].stock=e.drawStock(0,0,e._stocks[t].attr).hide(),e.curLineIndex=t}},areaChange:function(t){var e=this;e.fire("areaChange",{index:t})},paperLeave:function(){var t=this;t.fire("paperLeave",t)},stockChange:function(r,i){var n=this,a=n._stocks[r],s=a&&a.stock;e=t.mix({target:s,currentTarget:s,lineIndex:Math.round(r),stockIndex:Math.round(i)},a&&a.points[i]),n.fire("stockChange",e)},beforeRender:function(){var t=this;t.fire("beforeRender",t)},afterRender:function(){var t=this;t.fire("afterRender",t)},getPaper:function(){return this.htmlPaper},getRaphaelPaper:function(){return this.paper},clear:function(){this._$ctnNode.html("")}}),L},{requires:["base","gallery/template/1.0/index","gallery/kcharts/1.2/raphael/index","gallery/kcharts/1.2/basechart/index","gallery/kcharts/1.2/tools/color/index","gallery/kcharts/1.2/tools/htmlpaper/index","gallery/kcharts/1.2/legend/index","./theme","gallery/kcharts/1.2/tools/touch/index","gallery/kcharts/1.2/tip/index","gallery/kcharts/1.2/animate/index","gallery/kcharts/1.2/tools/graphtool/index"]});