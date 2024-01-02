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

let text_n = 42;

const change_h = () => {
  let h_c = Math.floor(Math.random()*(text_n+1));
  switch(h_c){
    case 1:hm.innerHTML="<p>世界上的风景有很多，如果没有天才般的想象力，请亲身体验</p>";
        break;
    case 2:hm.innerHTML="<p>爱是什么？你一定有些迷惑吧，我觉得就是想要改变或者接受对方的一种冲动，你认为呢？</p>";
        break;
    case 3:hm.innerHTML="<p>你真的经历过绝望吗，看看悲惨世界、基督山伯爵、活着和从零开始的异世界生活吧，希望你会有不同想法</p>";
        break; 
    case 4:hm.innerHTML="<p>我很讨厌现在的教育，总是然我们错过真正有价值的知识，在最需要它的时候，但是我们可以自己寻找我们需要的教育</p>";
        break; 
    case 5:hm.innerHTML="<p>或许我们都生活在阴沟里，但是还有星星呀？</p>";
        break;
    case 6:hm.innerHTML="<p>世界是美丽的，就算充满悲伤和泪水。也请睁开你的双眼，去做你想要做的事情，成为你想要成为的人，去找到你的朋友。不必焦躁，慢慢地去长大</p>";
        break; 
    case 7:hm.innerHTML="<p>前天遇到了小鹿，昨天是小兔子，今天是你</p>";
        break;   
    case 8:hm.innerHTML="<p>真正重要的东西，永远都是非常简单的</p>";
        break;
    case 9:hm.innerHTML="<p>我总是向对我说，你值得过更好的生活，但是确实如此</p>";
        break; 
    case 10:hm.innerHTML="<p>不要做出伤害他人的行为，那样只会让自己被烧的更痛苦，为什么不和其他人商量一下呢？</p>";
        break;   
    case 11:hm.innerHTML="<p>stay cool</p>";
        break;
    case 12:hm.innerHTML="<p>临渊羡鱼，不如退而结网</p>";
        break; 
    case 13:hm.innerHTML="<p>我准备好了，我准备好了，我准备好了！派大星，我可以去蟹堡王了</p>";
        break;  
    case 14:hm.innerHTML="<p>每个人的心中都有一个风筝，不管那意味着什么，让我们勇敢地去追</p>";
        break; 
    case 15:hm.innerHTML="<p>上帝总要拿去你什么东西的时候，先给你足够的快乐，不要太骄傲了</p>";
        break;   
    case 16:hm.innerHTML="<p>当罪恶导致善行，那就是最大的救赎</p>";
        break;
    case 17:hm.innerHTML="<p>世界上最宽阔的是海洋，比海洋更宽阔的是天空，比天空更宽阔的是人的胸怀</p>";
        break; 
    case 18:hm.innerHTML="<p>只有苦难和决心能够改变人，所以不要抱怨了</p>";
        break;   
    case 19:hm.innerHTML="<p>竹杖芒鞋轻胜马，谁怕，一蓑烟雨任平生</p>";
        break; 
    case 20:hm.innerHTML="<p>试问岭南应不好，却道：此心安处是吾乡</p>";
        break;   
    case 21:hm.innerHTML="<p>放弃，放弃不适合我，不，放弃不适合我们。所以，请抬起头，让一切从零开始吧。</p>";
        break;
    case 22:hm.innerHTML="<p>休对故人思故国，且将新火试新茶，诗酒趁年华</p>";
        break; 
    case 23:hm.innerHTML="<p>如果你不知道自己最依赖谁，想一想当你处于无法摆脱的困境时，最想呼喊的名字，他就是你的依靠</p>";
        break;      
    case 24:hm.innerHTML="<p>星星之火，可以燎原</p>";
        break; 
    case 25:hm.innerHTML="<p>我这个人很懒，还总是多愁善感，但是我知道我的作用是难以估量的</p>";
        break;   
    case 26:hm.innerHTML="<p>与天奋斗，其乐无穷！与地奋斗，其乐无穷！与人奋斗，其乐无穷！</p>";
        break; 
    case 27:hm.innerHTML="<p>虚心使人进步，骄傲使人落后</p>";
        break;   
    case 28:hm.innerHTML="<p>如果你总是对自己想说的话，说不出口，不用担心，那是你还是不够想说</p>";
        break;
    case 29:hm.innerHTML="<p>不管风吹浪打，胜似闲庭信步</p>";
        break; 
    case 30:hm.innerHTML="<p>世界真是有趣，我怎么早没有发现呢，好可惜</p>";
        break;
    case 31:hm.innerHTML="<p>我们都有责任去引导年轻人，以防他们走上不归路，变得支离破碎，自暴自弃</p>";
        break;
    case 32:hm.innerHTML="<p>记着，希望是个好东西，也许是世间最好的东西，好东西从不会逝去</p>";
        break; 
    case 33:hm.innerHTML="<p>今天你快不快乐我不管，但是不能伤心，因为伤心不好，为什么要不好呢？</p>";
        break;      
    case 34:hm.innerHTML="<p>生命就像一盒巧克力，你永远不知道下一块是什么味道的</p>";
        break; 
    case 35:hm.innerHTML="<p>我以前总是觉得自己喜欢你，但是后来我才明白，自己喜欢的或许不是你，只是像你罢了</p>";
        break;   
    case 36:hm.innerHTML="<p>没有人能让你不快乐，是你自己选择了不快乐。作为成年人，理应为自己的行为和情绪负责，从中体会到自己的力量</p>";
        break; 
    case 37:hm.innerHTML="<p>重要的，珍惜的，一直在身边，一旦成为理所当然，就难以发现</p>";
        break;   
    case 38:hm.innerHTML="<p>陌生人或是我认识的人，恭喜你中奖了，但是没有奖品，但是我觉得也会让人很开心，但是下一次就不一定了吧</p>";
        break;
    case 39:hm.innerHTML="<p>我喜欢早上起来时一切都是未知的，不知会遇见什么人，会有什么样的结局</p>";
        break; 
    case 40:hm.innerHTML="<p>长风破浪会有时，直挂云帆济沧海</p>";
        break; 
    case 41:hm.innerHTML="<p>有时候你装作成功的人，时间长了就很可能成功，当然这不是一定的，只是有可能。</p>";
        break; 
    case 42:hm.innerHTML="<p>你需要寻找一个东西，能给你源源不断的能量，能使你在每次失败的时候都能站起来，在每次迷失的时候都能马上意识到什么才是真正的你。</p>";
        break; 
  }
}
hbtn.addEventListener("click",change_h);
