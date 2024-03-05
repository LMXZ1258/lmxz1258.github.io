// swal("欢迎来到本站","现更新形策章节测试答案，需要从资料分享查找");
rt = document.documentElement.style;
hd = document.querySelector(".caption");
hm = document.querySelector(".head_m");
hbtn = document.querySelector(".head_btn");
words1 = document.querySelector("#words_l");
words2 = document.querySelector("#words_r");
words_btn = document.querySelector(".words_btn");

let c = 0;

const change_bg =()=>{
    c = c+1;
    if (c%2 == 1){
        rt.setProperty("--body_bg","linear-gradient(rgb(81,151,205),rgb(15,59,97))");
        rt.setProperty("--header_bg","linear-gradient(rgb(37,82,124),rgb(49,96,142))");
        rt.setProperty("--font_color","rgb(208,208,208)");
        rt.setProperty("--header_color","invert(0.85)");
        rt.setProperty("--border_color","rgb(128,128,128)");
        rt.setProperty("--icon_color","invert(1)");
        rt.setProperty("--head_bg","linear-gradient(rgb(37,82,124),rgb(49,96,142))");
    }
    else{
        rt.setProperty("--body_bg","linear-gradient(rgb(213,226,226),rgb(187,227,227))");
        rt.setProperty("--header_bg","#fbfbfb");
        rt.setProperty("--font_color","#38a7ff");
        rt.setProperty("--header_color","invert(0%)");
        rt.setProperty("--border_color","#ccc");
        rt.setProperty("--head_bg","#ebf6f6");
    }
};
hd.addEventListener('click',change_bg);
// :root{
//     --body_bg:url(picture/backgrand.png);
//     --header_bg:#fbfbfb;
//     --font_color:#38a7ff;
//     --header_color:invert(0%);
//     --border_color:#ccc:
// }

let text_n = 23;

const change_h = () => {
    let h_c = Math.floor(Math.random() * (text_n + 1));
    switch (h_c) {
        case 1:hm.innerHTML="<p>生活多美好</p>";
            break;
        case 2:hm.innerHTML="<p>坚定信念，排除万难</p>";
            break;
        case 3:hm.innerHTML="<p>我相信你</p>";
            break;
        case 4:hm.innerHTML="<p>常笑，多行，尽兴，心安</p>";
            break;
        case 5:hm.innerHTML="<p><<ever17>></p>";
            break;
        case 6:hm.innerHTML="<p>世界是美丽的，就算充满悲伤和泪水。也请睁开你的双眼，去做你想要做的事情，成为你想要成为的人，去找到你的朋友。不必焦躁，慢慢地去长大</p>";
            break;
        case 7:hm.innerHTML="<p>感恩是人类最美好的品德</p>";
            break;
        case 8:hm.innerHTML="<p>不要等着世界顺应你，你要学会适应世界、改变世界</p>";
            break;
        case 9:hm.innerHTML="<p>逃避永远不是解决问题的方法</p>";
            break;
        case 10:hm.innerHTML="<p><<海上钢琴师>></p>";
            break;
        case 11: hm.innerHTML="<p>stay cool</p>";
            break;
        case 12:hm.innerHTML="<p>临渊羡鱼，不如退而结网</p>";
            break;
        case 13:hm.innerHTML="<p><<从零开始的异世界生活>></p>";
            break;
        case 14:hm.innerHTML="<p><<悲惨世界>></p>";
            break;
        case 15:hm.innerHTML="<p><<请回答1988>></p>";
            break;
        case 16:hm.innerHTML="<p>将绝境转为机遇，是很有可能的</p>";
            break;
        case 17:hm.innerHTML="<p>竹杖芒鞋轻胜马，谁怕，一蓑烟雨任平生</p>";
            break;
        case 18:hm.innerHTML="<p>星星之火，可以燎原</p>";
            break;
        case 19:hm.innerHTML="<p>长风破浪会有时，直挂云帆济沧海</p>"; 
            break;
        case 20:hm.innerHTML="<p>专业的事情就交给专业的人去做</p>";
            break;
        case 21:hm.innerHTML="<p>我喜欢早上起来时一切都是未知的，不知会遇见什么人，会有什么样的结局</p>";
            break;
        case 22:hm.innerHTML="<p>休对故人思故国，且将新火试新茶，诗酒趁年华</p>";
            break;
        case 23:hm.innerHTML="<p>如果你不知道自己最依赖谁，想一想当你处于无法摆脱的困境时，最想呼喊的名字，他就是你的依靠</p>";
            break;
    }
}

hbtn.addEventListener("click",change_h);
