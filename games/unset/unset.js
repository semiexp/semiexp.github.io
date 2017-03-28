function Unset(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.shapeHeight = 20;
    this.shapeWidth = 50;
    this.cardWidth = 60;
    this.cardHeight = 90;
    this.marginX = 20;
    this.marginY = 20;

    this.numCardsX = 4;
    this.numCardsY = 3;

    canvas.width = this.cardWidth * this.numCardsX + this.marginX * (this.numCardsX + 1);
    canvas.height = this.cardHeight * this.numCardsY + this.marginY * (this.numCardsY + 1);

    this.cards = [];
    this.unusedCards = [];
    this.selected = [];
}
Unset.prototype.initialize = function () {
    this.canvas.style.backgroundColor = "#ffffff";
    this.unusedCards = [];
    for (var i = 0; i < 81; ++i) this.unusedCards.push(i);

    this.cards = [];
    this.selected = [];
    for (var i = 0; i < this.numCardsX * this.numCardsY; ++i) {
        this.cards.push(this.chooseCard());
        this.selected.push(false);
    }

    for (var i = 0; i < this.numCardsX * this.numCardsY; ++i) {
        var card = this.cards[i];
        this.drawCardByIndex(i);
    }
}
Unset.prototype.chooseCard = function () {
    var idx = Math.floor(Math.random() * this.unusedCards.length);
    var ret = this.unusedCards[idx];
    this.unusedCards[idx] = this.unusedCards[this.unusedCards.length - 1];
    this.unusedCards.pop();
    return ret;
}
Unset.prototype.isSelected = function (x, y) {
    return this.selected[x * this.numCardsY + y];
}
Unset.prototype.drawCardByIndex = function (idx) {
    var card = this.cards[idx];
    this.drawCard(
        Math.floor(idx / this.numCardsY),
        idx % this.numCardsY,
        Math.floor(card / 27) % 3,
        Math.floor(card / 9) % 3,
        Math.floor(card / 3) % 3,
        Math.floor(card / 1) % 3
        );
}
Unset.prototype.drawCard = function (x, y, num, type, color, fill) {
    var ctx = this.ctx;
    var s_height = this.shapeHeight;
    var s_width = this.shapeWidth;
    var c_height = this.cardHeight;
    var c_width = this.cardWidth;

    var top_x = this.marginX * (x + 1) + c_width * x;
    var top_y = this.marginY * (y + 1) + c_height * y;
    ctx.strokeStyle = "#333333";
    ctx.fillStyle = this.isSelected(x, y) ? "#ffeeee" : "#ffffff";
    ctx.lineWidth = 2;

    ctx.fillRect(top_x, top_y, c_width, c_height);
    ctx.strokeRect(top_x, top_y, c_width, c_height);

    if (num == 0) {
        this.drawShape(top_x + c_width / 2, top_y + c_height / 2, type, color, fill);
    } else if (num == 1) {
        this.drawShape(top_x + c_width / 2, top_y + c_height / 2 - s_height * 0.7, type, color, fill);
        this.drawShape(top_x + c_width / 2, top_y + c_height / 2 + s_height * 0.7, type, color, fill);
    } else if (num == 2) {
        this.drawShape(top_x + c_width / 2, top_y + c_height / 2, type, color, fill);
        this.drawShape(top_x + c_width / 2, top_y + c_height / 2 - s_height * 1.4, type, color, fill);
        this.drawShape(top_x + c_width / 2, top_y + c_height / 2 + s_height * 1.4, type, color, fill);
    }
}
Unset.prototype.drawShape = function (cx, cy, type, color, fill) {
    var ctx = this.ctx;
    var height = this.shapeHeight;
    var width = this.shapeWidth;

    var rgb_stroke = [0x99, 0x00, 0x00];
    var rgb_fill;
    if (fill == 0) {
        rgb_fill = [0x99, 0x00, 0x00];
    } else if (fill == 1) {
        rgb_fill = [0xff, 0xff, 0xff];
    } else if (fill == 2) {
        rgb_fill = [0xff, 0xcc, 0xcc];
    }
    for (var i = 0; i < color; ++i) {
        rgb_stroke.push(rgb_stroke.shift());
        rgb_fill.push(rgb_fill.shift());
    }
    ctx.strokeStyle = "rgb(" + rgb_stroke.join(",") + ")";
    ctx.fillStyle = "rgb(" + rgb_fill.join(",") + ")";

    ctx.translate(cx, cy);
    for (var i = 0; i < 2; ++i) {
        if (type == 0) {
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, -height / 2);
            ctx.lineTo(width / 2, 0);
            ctx.lineTo(0, height / 2);
            ctx.lineTo(-width / 2, 0);
            ctx.closePath();
            if (i == 0) ctx.fill();
            else ctx.stroke();
        } else if (type == 1) {
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(-width / 2, -height / 2);
            ctx.lineTo(width / 2, -height / 2);
            ctx.lineTo(width / 2, height / 2);
            ctx.lineTo(-width / 2, height / 2);
            ctx.closePath();
            if (i == 0) ctx.fill();
            else ctx.stroke();
        } else if (type == 2) {
            ctx.lineWidth = 4;
            ctx.scale(1, height / width);
            ctx.beginPath();
            ctx.arc(0, 0, width / 2, 0, Math.PI * 2, true);
            ctx.closePath();
            if (i == 0) ctx.fill();
            else ctx.stroke();
            ctx.scale(1, width / height);
        }
    }
    ctx.translate(-cx, -cy);
}
Unset.prototype.checkSet = function () {
    var sel_idx = [], sel_cards = [];
    for (var i = 0; i < this.numCardsX * this.numCardsY; ++i) {
        if (this.selected[i]) {
            sel_idx.push(i);
            var card = this.cards[i];
            sel_cards.push([
                Math.floor(card / 27) % 3,
                Math.floor(card / 9) % 3,
                Math.floor(card / 3) % 3,
                Math.floor(card / 1) % 3
            ]);
            this.drawCardByIndex(i);
        }
    }

    var isok = true;
    for (var i = 0; i < 4; ++i) {
        var styles = [sel_cards[0][i], sel_cards[1][i], sel_cards[2][i]];
        if (styles[0] == styles[1] && styles[1] == styles[2]) isok = false;
        if (styles[0] != styles[1] && styles[1] != styles[2] && styles[2] != styles[0]) isok = false;
    }

    if (isok) {
        var unused_next = [];
        for (var i = 0; i < 3; ++i) {
            this.selected[sel_idx[i]] = false;
            unused_next.push(this.cards[sel_idx[i]]);
            this.cards[sel_idx[i]] = this.chooseCard();
        }
        this.fade(0xcc, 0xff, 0xcc);
    } else {
        for (var i = 0; i < 3; ++i) {
            this.selected[sel_idx[i]] = false;
        }
        this.fade(0xff, 0xcc, 0xcc);
    }

    for (var i = 0; i < 3; ++i) {
        this.drawCardByIndex(sel_idx[i]);
    }
}
Unset.prototype.mouseDown = function (x, y) {
    x -= this.marginX;
    y -= this.marginY;
    var card_x = Math.floor(x / (this.cardWidth + this.marginX));
    var card_y = Math.floor(y / (this.cardHeight + this.marginY));

    x -= card_x * (this.cardWidth + this.marginX);
    y -= card_y * (this.cardHeight + this.marginY);

    if (!(x < this.cardWidth && y < this.cardHeight)) return;

    var idx = card_x * this.numCardsY + card_y;
    this.selected[idx] = !this.selected[idx];

    var n_selected = 0;
    for (var i = 0; i < this.numCardsX * this.numCardsY; ++i) {
        if (this.selected[i]) ++n_selected;
    }

    if (n_selected == 3) {
        this.checkSet();
    } else {
        this.drawCardByIndex(idx);
    }
}
Unset.prototype.fade = function (r, g, b) {
    var c = $(this.canvas);
    c.css("background-color", "rgb(" + [r, g, b].join(",") + ")");
    var count = 0, count_max = 50;
    var timer = setInterval(function () {
        ++count;
        var ratio = count / count_max;
        c.css("background-color", "rgb(" + [r * (1 - ratio) + 255 * ratio, g * (1 - ratio) + 255 * ratio, b * (1 - ratio) + 255 * ratio].join(",") + ")");
        if (count == count_max) clearInterval(timer);
    }, 500 / count_max);
}
$(document).ready(function () {
    var canvas = document.getElementById("player");
    var application = new Unset(canvas);
    application.initialize();
    canvas.addEventListener("mousedown", function (event) {
        var x = event.clientX, y = event.clientY, button = (event.button == 2);
        var rect = event.target.getBoundingClientRect();
        application.mouseDown(x - rect.left, y - rect.top, button);
    });
});
