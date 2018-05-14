---
layout: post
title: Canvas と SVG の性能について
group: blog
date: 2018-05-14
categories: [Programming]
---

ブラウザ上で図形を表示する代表的な方法に Canvas と SVG があるが，この 2 つの性能を簡単に比較してみた．

Canvas と SVG で，ランダムに 10 万本の直線を 1000 * 1000 の描画領域に描画し，かかった時間を比較した．

## 結果

### Firefox
```
canvas: 308ms
svg: 414ms
```
ただし，SVG 部分までスクロールするとかなり重くなり，なかなか表示されない．
特に，タブを切り替えてまた戻ってくるときにもしばらく待たされる．
さらに，関係ないタブまで表示が遅くなったりする．

### Chrome
```
canvas: 235.3251953125ms
svg: 1091.056884765625ms
```
一度描画されれば，SVG 部分も Firefox の場合ほどは重くない．

### Microsoft Edge
複数回再読込したあげく，表示に失敗した．
なお，SVG 描画を無効にして読み込むと，canvas 部分は正しく描画される．

## 結論

canvas はビットマップベース，SVG はベクターベースという違いはあるため，単純には比較はできないものの（SVG のほうが，見た目は高精細になる）
10 万本もの直線を描画する必要がある場合は，SVG を用いると処理が重くなりすぎるため，canvas を使ったほうがよさそうである．

## コード

以下のコードを実行すると，

{% highlight html %}
<!DOCTYPE html>
<html>
    <head>
        <title>How canvas/svg is scalable?</title>
        <script type="text/javascript">
// Wikipedia の [xorshift](https://ja.wikipedia.org/wiki/Xorshift) を参考にした
let rng = (() => {
    let x = 123456789;
    let y = 362436069;
    let z = 521288629;
    let w = 88675123;

    return () => {
        let t = x ^ (x << 11);
        x = y; y = z; z = w;
        return w = (w ^ (w >> 19)) ^ (t ^ (t >> 8));
    };
})();
const urand = (lo, hi) => {
    return lo + rng() % (hi - lo);
};
const canvasTest = () => {
    let c = document.getElementById("c");
    let ctx = c.getContext("2d");
    let height = c.height - 0;
    let width = c.width - 0;
    console.time('canvas');
    for (let i = 0; i < 100000; ++i) {
        ctx.strokeStyle = "rgb(" + urand(0, 256) + "," + urand(0, 256) + "," + urand(0, 256) + ")";
        ctx.beginPath();
        let x1 = urand(0, width);
        let y1 = urand(0, height);
        let x2 = urand(0, width);
        let y2 = urand(0, height);
        
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
    console.timeEnd('canvas');
};
const svgTest = () => {
    let s = document.getElementById("s");
    let height = s.height.baseVal.value - 0;
    let width = s.width.baseVal.value - 0;
    console.time('svg');
    for (let i = 0; i < 100000; ++i) {
        let elem = document.createElementNS("http://www.w3.org/2000/svg", "line");
        elem.setAttribute("stroke", "rgb(" + urand(0, 256) + "," + urand(0, 256) + "," + urand(0, 256) + ")");
        elem.setAttribute("stroke-width", "1");
        elem.setAttribute("x1", urand(0, width));
        elem.setAttribute("y1", urand(0, height));
        elem.setAttribute("x2", urand(0, width));
        elem.setAttribute("y2", urand(0, height));
        s.appendChild(elem);
    }
    console.timeEnd('svg');
};
window.onload = () => {
    canvasTest();
    svgTest();
}
        </script>
    </head>
    <body>
        <canvas height="1000" width="1000" id="c"></canvas>
        <svg height="1000" width="1000" id="s"></svg>
    </body>
</html>
{% endhighlight %}
