(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a(1),l=function(e){var t=e.value,a=e.onClick;return r.a.createElement("button",{className:"square",onClick:a},r.a.createElement("span",{className:t},t))},o=function(e){var t=e.squares,a=e.onClick,n=function(e){return r.a.createElement(l,{value:t[e],onClick:function(){return a(e)}})};return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},n(0),n(1),n(2)),r.a.createElement("div",{className:"board-row"},n(3),n(4),n(5)),r.a.createElement("div",{className:"board-row"},n(6),n(7),n(8)))},u=function(){var e,t=Object(n.useState)({history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0}),a=Object(s.a)(t,2),c=a[0],l=a[1],u=c.history,m=u[c.stepNumber],N=i(m.squares),v=u.map(function(e,t){var a=t?"Go to move # ".concat(t):"Go to game start";return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(){var e;l({history:u,stepNumber:e=t,xIsNext:e%2===0})},className:"history-button"},a))});return e=N?"Winner: ".concat(N):"Next player: ".concat(c.xIsNext?"X":"O"),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Tic Tac Toe"),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(o,{squares:m.squares,onClick:function(e){return function(e){var t=c.history.slice(0,c.stepNumber+1),a=t[t.length-1].squares.slice();i(a)||a[e]||(a[e]=c.xIsNext?"X":"O",l({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!c.xIsNext}))}(e)}})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",{className:"status"},e),r.a.createElement("ol",null,v))))};function i(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(s.a)(t[a],3),r=n[0],c=n[1],l=n[2];if(e[r]&&e[r]===e[c]&&e[r]===e[l])return e[r]}return null}a(13);var m=document.getElementById("root");Object(c.createRoot)(m).render(r.a.createElement(u,null))},4:function(e,t,a){e.exports=a(15)}},[[4,2,1]]]);
//# sourceMappingURL=main.85bee211.chunk.js.map