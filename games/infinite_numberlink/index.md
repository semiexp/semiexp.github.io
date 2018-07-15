---
layout: default
title: Infinite Numberlink
---

<div id="container" useGenerator="true"> </div>

<form>
    <div>
        Height / 縦:
        <input type="number" min="10" max="15" value="10" size="5" id="height" />
    </div>
    <div>
        Width / 横:
        <input type="number" min="10" max="15" value="10" size="5" id="width" />
    </div>
    <div>
        <input type="checkbox" id="no_adjacent_clue" />
        <label for="no_adjacent_clue">No adjacent clue / ヒント数字の隣接を禁止</label>
    </div>
    <div>
        <input type="checkbox" id="no_clue_circumference" />
        <label for="no_clue_circumference">No clue on circumference / 外周上へのヒント数字の配置を禁止</label>
    </div>
    <div>
        <input type="checkbox" id="clue_near_corners" />
        <label for="clue_near_corners">Clue near corners / 角付近にヒント数字を配置</label>
    </div>
</form>

<script type="text/javascript" src="bundle.js"></script>
<script type="text/javascript" src="bridge.js"></script>

<script type="text/javascript">
    window.bridge = new PuzrsBridge("puzrs.wasm");
    function generateProblem() {
        const height = parseInt(document.getElementById("height").value);
        const width = parseInt(document.getElementById("width").value);
        if (!(10 <= height && height <= 15 && 10 <= width && width <= 15)) {
            alert("Invalid size of problem: " + height + "x" + width);
            return;
        }
        const noAdjacentClue = document.getElementById("no_adjacent_clue").checked;
        const noClueCircumference = document.getElementById("no_clue_circumference").checked;
        const clueNearCorners = document.getElementById("clue_near_corners").checked;
        const problem = window.bridge.generateNumberlink({
            height,
            width,
            minimum_chain_length: (height <= 12 || width <= 12) ? 6 : 8,
            forbid_adjacent_clue: noAdjacentClue,
            empty_width: noClueCircumference ? 1 : 0,
            corner_clue: clueNearCorners ? { low: 1, high: 2 } : null
        });
        return problem;
    }
</script>

## Usage

- Push `+` button to generate a new problem. Note that current problem will be discarded on generating a new problem.
- Generating a problem may take (tens of) seconds depending on the performance of your computer.
- Supported size of problems: 10x10 - 15x15

## 使い方

- `+` ボタンを押すと問題が生成されます．その際現在の問題は消去されるので注意してください．
- コンピュータの性能によっては，問題の生成に数十秒程度かかることもあります．
- 対応盤面サイズ：10x10 - 15x15
