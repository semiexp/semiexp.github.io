---
layout: post
title: emscripten の bind で JavaScript オブジェクトを返す方法
group: blog
date: 2017-05-13
categories: [Programming]
---

## 概要

[emscripten](https://kripken.github.io/emscripten-site/index.html) を使うと，C++ のコードを JavaScript に変換することができる．
さらに，Embind を使うと，C++ のコード中の関数などを JavaScript のコードから「自然に」呼び出すことができる．
例えば，C++ の関数の引数や戻り値として JavaScript のオブジェクトを使うことができる．
ここでは，C++ から JavaScript オブジェクトを返す方法についてまとめておく．

## int, std::string
`int` や `std::string` を返す C++ 関数は，そのまま bind できる．
JavaScript からは，`int` は数値型に，`std::string` は `String` に見える．

{% highlight c++ %}
#include <emscripten.h>
#include <emscripten/bind.h>
#include <string>

using namespace emscripten;

int hoge() {
	return 42;
}
std::string fuga() {
	return "fuga";
}
EMSCRIPTEN_BINDINGS(mod) {
	function("hoge", &hoge);
	function("fuga", &fuga);
}
{% endhighlight %}

## JavaScript オブジェクトの操作

emscripten では，C++ から JavaScript オブジェクトを操作するために `emscripten::val` 型が用意されている．
使い方は [ここ](https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/embind.html) とか
[ここ](https://kripken.github.io/emscripten-site/docs/api_reference/val.h.html) に書かれている．

例えば，

{% highlight c++ %}
#include <emscripten.h>
#include <emscripten/bind.h>

using namespace emscripten;

val hoge(int i) {
	val ret = val::object();
	ret.set("height", val(i + 1));
	ret.set("width", val(i + 100));
	return ret;
}
EMSCRIPTEN_BINDINGS(mod) {
	function("hoge", &hoge);
}
{% endhighlight %}

このコードを用いて，JavaScript から `Module.hoge(100)` を呼び出すと， `Object { height: 101, width: 200 }` が得られる．

注意点として，プロパティの設定には `set` を用いないといけない．
例えば，`ret.set("height", val(i + 1));` の代わりに `ret["height"] = val(i + 1);` と書いても，`height` は正しく設定されない．

## 配列

配列の要素の設定も，`set` を用いて行うことができる．

{% highlight c++ %}
#include <emscripten.h>
#include <emscripten/bind.h>

using namespace emscripten;

val hoge(int i) {
	val ret = val::object();
	ret.set("height", val(i + 1));
	ret.set("width", val(i + 100));
	ret.set("data", val::array());
	for (int x = 0; x < 10; ++x) {
		ret["data"].set(x, x);
	}
	return ret;
}
EMSCRIPTEN_BINDINGS(mod) {
	function("hoge", &hoge);
}
{% endhighlight %}

`val::call` を使えば，`push` などを使って操作することもできる．

{% highlight c++ %}
#include <emscripten.h>
#include <emscripten/bind.h>

using namespace emscripten;

val hoge(int i) {
	val ret = val::object();
	ret.set("height", val(i + 1));
	ret.set("width", val(i + 100));
	ret.set("data", val::array());
	for (int x = 0; x < 10; ++x) {
		ret["data"].call<val>("push", val(x));
	}
	return ret;
}
EMSCRIPTEN_BINDINGS(mod) {
	function("hoge", &hoge);
}
{% endhighlight %}
