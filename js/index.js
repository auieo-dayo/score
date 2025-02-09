//scoreboard系
var red = 0
var blue = 0
var para
window.onload = function(){
    tyuui()
    ref()
}

const ref = function() {
    input_chk();
    const score_div = document.getElementById("score")
    score_div.innerHTML = `<h1 class="now_score"><red>red:${red}</red> | <blue>blue:${blue}</blue></h1>`
}
function tyuui() {
    alert("また、このサイトでは、Microsoft ClarityとGoogle Analytics 4（GA4）を利用して、ウェブサイトのパフォーマンスとユーザー行動の分析を行っています。これらのツールは、ユーザーがどのようにサイトを利用しているかを追跡し、改善点を特定するために役立ちます。ユーザーのプライバシーを尊重するため、Cookieを使用してデータを収集しています。Cookieは、サイトの利用状況を分析し、ユーザーエクスペリエンスの向上に活用されますが、必要に応じてCookie設定の管理が可能です。詳しくは、該当サービスの利用規約をご確認ください")
}
function input_chk() {
    const inp_red = document.getElementById("red")
    const inp_blue = document.getElementById("blue")
    var kekka = false
    if (!inp_red.value&&!inp_blue.value) {
        return;
    } else {
        if (inp_red.value) {
            red = inp_red.value
            inp_red.value = ""
            var kekka = true
        }
        if (inp_blue.value) {
            blue = inp_blue.value
            inp_blue.value = ""
            var kekka = true
        }
    }
    if (kekka == true) {
        red = red-1+1
        blue = blue-1+1
    }
}
function main(a) {
    if (!a) {
        return;
    }
    if (a == "rp") {
        red = red+1
    }
    if (a == "rm") {
        red = red-1
    }
    if (a == "bp") {
        blue = blue+1
    }
    if (a == "bm") {
        blue = blue-1
    }
    ref();
}
function reset() {
blue = 0
red = 0
ref()
}
function set(r,b) {
blue = b
red = r
ref();
}
