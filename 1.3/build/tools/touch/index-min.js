/*! kcharts - v1.3 - 2014-01-10 6:20:53 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/tools/touch/index",function(t){function e(t,e){if(!(t.touches.length>1)){var l=t.changedTouches,r=l[0],i=document.createEvent("MouseEvent");i.initMouseEvent(e,!0,!0,window,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(i)}}function l(t){var l=n(t);a||l||(a=!0,e(t,"mouseover"),e(t,"mousemove"),e(t,"mousedown"))}function r(t){a&&(e(t,"mousemove"),s=!0)}function i(t){a&&(e(t,"mouseup"),s&&e(t,"mouseout"),s=!1,a=!1)}function n(t){return"INPUT"==t.target.tagName.toUpperCase()?!0:!1}if(!t.UA.ie){var a,s=!1;document.addEventListener("touchstart",l,!0),document.addEventListener("touchmove",r,!0),document.addEventListener("touchend",i,!0)}});