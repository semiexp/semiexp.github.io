---
layout: post
title: (Puzsq) Advent Calendar のパズルのソルバー全部書く
group: blog
date: 2024-12-25
categories: [Puzzle]
---

これは [ペンシルパズル Advent Calendar 2024](https://adventar.org/calendars/10609) の 25 日目の記事です。

## はじめに

[Puzzle Square Advent Calendar 2024](https://puzsq.logicpuzzle.app/campaign/advent-calendar/2024) にあるすべてのパズルのソルバーを cspuz-solver2 に実装するという試みをやっていました。本記事はその記録です。

以下のパズルについては Advent Calendar 以前に実装済みなので、省略します。

- 12/1 美術館
- 12/2 数独
- 12/3 ましゅ
- 12/5 スリザーリンク
- 12/8 アイスウォーク
- 12/12 ファイブセルズ
- 12/16 チェンブロ・アクアペラゴ
- 12/22 Statue Park
- 12/23 Lohkous
- 12/24 LITS・Inverse LITSO
- 12/25 Tapa

## 12/1 Akari RGB・Regional Akari

Akari RGB は色による場合分けが多発するのが若干面倒ですが、それを除けば比較的実装は容易でした。

## 12/4 ぬりめいず

さすがに実装してただろうと思ったらまだなかったことに 12/3 の 22:40 に気づき、大慌てで実装しました（日付変わる 40 分前にあってもアウトかもしれない）。

白マスがサイクルをなさないというルールが結構厄介ですが、双対的な条件である「黒マスが 8 近傍で外周と接続する」を使うと割と簡単に書けました。
ところでこの条件には罠があって、2x2 の白マスのかたまりを別途禁止する必要があります。今回はたまたま書いていたので事なきを得ました（より正確に双対的条件を書くと、「マスの角および黒マスが 8 近傍で外周と接続する」となるかと思います）

## 12/6 Litherslink

「線が全体で非連結」という珍しい制約があるパズルです。ちなみに非連結は連結より CSP での表現としては簡単で、同じ連結成分内では同じ値になるような論理変数 (true/false) を用意して、全体で true/false の両方が存在するとすればよいです。

これも「線がサイクルをなさない」という制約がありますが「各セルが線を飛び越えずに外周と接続する」と言い換えられるので割と簡単に書けます。

## 12/7 Milk Tea・コーヒー牛乳

この 2 つのパズルは名前や雰囲気が似ていますが実態はまるで別物で、ソルバーの実装も大きく異なります。

Milk Tea は最初 T の横線と縦線に分けて考えようとしましたがそれだと縦線が複数発生するのを防ぐのが難しいです。T 字の中心から 3 方向に線が伸びると考えると分かりやすくなります。

コーヒー牛乳も最初迷走してとんでもない変数を持ちそうになりましたが、各丸をどの灰色丸に紐づけるかを決めればよいことがわかったのでその方針で書きました。

## 12/9 ファイアウォーク

ループ系ですがループがかなり特殊（同じマスを 2 回通ってもいい上に曲がり方で 2 通りある）なので、そもそも解をどう表現するかから迷いました。最終的にはループの線 + 炎マスの通り方を解答の状態として、炎マスについてはセルの線を普通に描画した後に上から真ん中らへんだけ書き直すという方法で対処しました。炎マスについてはグラフの頂点を仮想的に 2 個（最大 2 回の通過に対応）持つと見通しがよくなります。

## 12/10 星座になれたら

補助変数を導入せずともルールを素直に実装するだけでよいです。ただし「星が線を介してひとつながり」は少し面倒なので、「星からは線が 1 本以上伸びる」と「線がひとつながり」と分解すると実装しやすいです（[line graph](https://en.wikipedia.org/wiki/Line_graph) を考えると「線がひとつながり」を「（線グラフ上の）頂点がひとつながり」として表現できます）。

## 12/11 Spokes

これもルールを素直に実装すればよいです。

## 12/13 Kropki Pairs

これもルールを素直に実装すればよいし、Kropki が実装済みなのでほぼ同じです

## 12/14 NIKOJ

ポリオミノの同型判定は SAT ソルバーが苦手とする処理の一つです（例：以前ダブルチョコのソルバーを純粋に CSP で書いたら遅くてとても使い物にならなかった）。
ゆえに NIKOJI も純粋に SAT に落とせる制約だけで書くと大変なことになるのですが、SAT ソルバーに特殊な制約を追加できるようにしてあったので[事なきを得ました](https://github.com/semiexp/enigma_csp/blob/c35171a7e992c06e0c7669eaae59aa8011dd39c9/cspuz_rs/src/puzzle/nikoji.rs#L209-L345)。

（注：NIKOJI の場合はポリオミノの個数が固定なのでダブルチョコよりはまだ SAT で書いても闇にはならないと思います。とはいえ同型判定で同一視しないといけないのが回転反転 8 通りだけかと思いきや平行移動もあるので、やっぱり結構やばい気がする）

## 12/15 Letter Weights

解くだけなら簡単なんですが、KudamonoEditor の URL をパースして問題の情報を取り出すのが大変でした（しかも KudamonoEditor だと掛け算とか割り算までできるので、未対応のものが来たときにちゃんとエラーが出るようにしないといけない）

## 12/16 アーキペラゴ

黒マスについてのルールを言い換えると

- n+1 マス以上の黒マスのつながりからは n マスの黒マスのつながりに（縦横斜めで）到達可能
  - ただし 1 マスの黒マスのつながりからも 2 マスの黒マスのつながりに到達可能
- n マスの黒マスのつながりから、別の n マスの黒マスのつながりへは縦横斜めで到達不能

となります。1 つ目の条件について、黒マスのつながりの大きさは O(√N) で抑えられるので、これをすべての n について書き下してもそこまでひどいことにはなりません。グラフの連結性の条件を使うと、次のようにして表現できます。

- n マス以上の黒マスのつながりからは、n マスの黒マスのつながりに「到達可能」である必要がある。より小さい黒マスのつながりについては、どちらでも良い
- 「到達可能」な黒マスは、次の条件で連結である
  - 縦横斜めで隣り合う黒マス間は移動可能
  - 盤面と関係ない特殊な頂点が 1 つあり、ここも「到達可能」とする。この頂点と盤面のマスは、そのマスがちょうど n マスの黒マスのつながりに属するときに限り移動可能

問題は 2 つ目の条件で、これも SAT ソルバーが苦手とする処理の一つなのですが、チェンブロと同様の要領で特殊な制約を書くと解決できます。

## 12/17 スナイピングアロー

各マスにはそのマスが含む矢印の方向 (4 通り) がどれかを書いておくことにすると、同じ向きの書かれたマスがその向きでつながっている限りそれらのマスは同じ矢印に属することがわかります（例えば、右向きの矢印を真横に 2 つ並べたりはできないためです）。このようにすると解答を割と分かりやすく表現できます。ただし、方向ごとに実装しないといけない部分が結構あるので少し面倒でした。

## 12/18 時限爆弾

ルールを素直に実装すればだいたい良いのですが、気をつけないと変な状態（複数の爆弾が合流するなど）になるので注意が必要です。

## 12/19 掛け算リンク

ルールを素直に実装すれば良いです。ただし掛け算のところだけは CSP ソルバーに入れる前に候補を列挙してしまったほうが簡単です。

## 12/20 Hidato

これもルールを素直に実装すれば良いです。

## 12/21 短辺消失

制約に落とすのが難しいパズルでした。最初、辺の左右両側についてその辺の長さ / その辺が属するブロックの最長辺の長さを持つという方針を考えていましたが、結果的には最長辺の長さはマスごとに持ったほうがずっと簡単になりました（辺について持とうとすると、頂点での処理も面倒ですし、ブロックに穴が空いているときに周上だけを見ていては内側と外側の情報をうまくつなげられないのです）。

「最長辺の長さ」については、ブロックごとにその長さに一致する辺が存在する必要がありますが、これはアーキペラゴのところで述べた方法と同様にして対処可能です。

## 12/24 SLICY・Double LITS

Double LITS は、LITS と同様にテトロミノの同型判定をすれば良いのでそこまで難しくありません。

問題は SLICY で、SLICY は cspuz-solver2 が対応する**唯一のハニカム盤面**パズルです。言い換えると今までに cspuz-solver2 にはハニカム盤面のための実装は何も存在していませんでした。そのため、盤面を表現するための構造から実装する必要がありました。加えて、盤面上に引かれる境界線の扱い（データの持ち方、URL の処理）や解答の表示など、このために実装しないといけないものがたくさんあり、アルゴリズム的な難しさはないもののかなり実装量が多くなりました。[SLICY ソルバーを追加する commit](https://github.com/semiexp/enigma_csp/commit/c26fb31d96f619b4c1d7341f7c6db3a850184e22) は 1000 行以上あります。

