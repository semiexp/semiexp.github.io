---
layout: default
title: pzprRT
---

pzprRT は、[pzprjs](https://github.com/robx/pzprjs/) を基に開発された、自動解答機能付きパズルエディタです。
現在、以下のパズルに対応しています。

- [ヤジリン](p.html?yajilin)
- [スリザーリンク](p.html?slither)
- [ましゅ](p.html?mashu)
- [へやわけ](p.html?heyawake)
- [Tapa](p.html?tapa)
- [シンプルループ](p.html?simpleloop)
- [Aqre](p.html?aqre)
- [ぬりみさき](p.html?nurimisaki)
- [ぬりかべ](p.html?nurikabe)
- [LITS](p.html?lits)
- [シャカシャカ](p.html?shakashaka)
- [美術館](p.html?akari)

内部で使用しているソルバーは [cspuz-solver](../games/cspuz-solver/index.html) とほとんど同様のものです。

- あなたのマシンの CPU を使って自動解答を行います。
- ソルバーによる解答は、決定可能な箇所をすべて決定したものです。
- 解が存在しない場合は、明らかに異常な解答（線を引きうるすべての箇所にバツ印を引くなど）を表示することにより報告します。

一方、cspuz-solver とは異なり、バックグラウンドでの解答などには対応していません。
そのため、大きい問題などではレスポンスが悪くなる可能性もありますが、ご了承ください。
また、特に「へやわけ」「Aqre」では、大きなヒント数字を含む部屋が存在すると解答に極めて長い時間を要する場合があるので、注意してください。

## 免責事項

このソルバーを使用することによって生じたいかなる問題についても、作者は責任を負わないものとします。
