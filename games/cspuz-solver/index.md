---
layout: default
title: cspuz-solver
---

<div id="root"></div>
<script>!function(e){function r(r){for(var n,l,p=r[0],f=r[1],i=r[2],c=0,s=[];c<p.length;c++)l=p[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&s.push(o[l][0]),o[l]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);for(a&&a(r);s.length;)s.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,p=1;p<t.length;p++){var f=t[p];0!==o[f]&&(n=!1)}n&&(u.splice(r--,1),e=l(l.s=t[0]))}return e}var n={},o={1:0},u=[];function l(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)l.d(t,n,function(r){return e[r]}.bind(null,n));return t},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="/";var p=this["webpackJsonppuzzle-solver"]=this["webpackJsonppuzzle-solver"]||[],f=p.push.bind(p);p.push=r,p=p.slice();for(var i=0;i<p.length;i++)r(p[i]);var a=f;t()}([])</script><script src="static/js/2.c42c0061.chunk.js"></script><script src="static/js/main.7d9c8ddb.chunk.js"></script>


## このソルバーについて

上のフォームにぱずぷれ / puzz.link の URL を入れて Solve ボタンを押すと、解答が下に表示されます。
このソルバーはあなたのマシンの CPU を使って計算を行うため、タイムアウトがなく無制限に時間を使って解答させることもできます。
そのため、理屈上はどんな問題でも解けるはずですが、あまりに盤面が大きい問題などではメモリを大量に消費したり、それに起因するエラーで停止してしまうこともあります。
解答に時間がかかる場合は Stop ボタンを押すと途中で止めることもできます。

目安としては、ヤジリン、スリザーリンクは 17x17 以下、ぬりかべは 10x10 以下であれば数秒以内に解けることが多いようです。（問題に大きく依存します）

このソルバーは、問題を「解ける限り」解きます。
つまり、複数解がある場合でも、すべての解に共通して決定する線、マスなどをすべて決定します。

現在、ぬりかべ / スリザーリンク / ヤジリン に対応しています。
ただし、4 や ? の入ったスリザーリンク、空ヒントの入ったヤジリンなどには未対応です。

## 技術詳細

制約充足問題 (CSP) を用いてペンシルパズルを解くための Python ライブラリ [cspuz](https://github.com/semiexp/cspuz) の [TypeScript 移植版](https://github.com/semiexp/cspuz-js) を用いてパズルを自動解答します。

cspuz 内部では [csugar](https://github.com/semiexp/csugar) を CSP ソルバーとして使用しています。これは [Sugar](http://bach.istc.kobe-u.ac.jp/sugar/) CSP ソルバーを C++ に移植したものですが、パズル自動解答の性能を高めるための改良が含まれています。

## 免責事項

このソルバーを使用することによって生じたいかなる問題についても、作者は責任を負わないものとします。
