var currentPage=1;
var clientheight=document.body.clientHeight;
var clientwidth=document.body.clientWidth;
var a=document.getElementById("pages");
var c=document.getElementById("nav").children;
var teacherList=document.querySelectorAll(".singleTeacherList");
var teacherInfobase=document.querySelector(".teacherInfoBaseFrame");
var teacherNames=["王双辉","郁春娟","郑立伏","张吉栋","朱肖娟","任春艳"];
var teacherIntros=[
    "",
    " ",
    "",
    " ",
    " ",
    " ",
];//介绍语





let timer=setInterval(IsOnSecondPage,300);
let timer2;
function IsOnSecondPage(){
    if(currentPage==2){
        teacherInfobase.classList.add("fadeInUp");
        clearInterval(timer);
        var i=0;
        timer2=setInterval(() => {
            teacherList[i].classList.add("fadeInRight");
            i++;
            if(i==6){ clearInterval(timer2);}
        }, 100);
       
    }
}

let timer3=setInterval(IsOnThirdPage,300);
function IsOnThirdPage(){
    if(currentPage==3){
        stuname.classList.add("fadeInUp");
        discrption.classList.add("fadeInUp");
        university.classList.add("fadeInUp");
        LB.classList.add("fadeInRight");
        RB.classList.add("fadeInLeft");
        
        picSource.classList.add("fadeInDown");
        document.querySelector(".numSelected").classList.add("fadeInUp");
        document.querySelector(".nameBar").classList.add("fadeInUp");
        clearInterval(timer3);
      
        
       
    }
}

let timer4=setInterval(IsOnForthPage,300);
function IsOnForthPage(){
    if(currentPage==4){
        document.querySelector("._1st_Page").classList.add("fadeInUp");
        clearInterval(timer4);
    }
}





window.onresize=function(){
    clientheight=document.body.clientHeight;
    clientwidth=document.body.clientWidth;
     deltaheight=0.14*clientheight;
     firstChildPosY=0.22*clientheight;
     firstChildPosX=clientwidth-100;
     detectWidth=25;
     detectheight=15;
     _2_deltaHeight=0.15*clientheight;
    _2_detectWidth=0.27*clientwidth;
}

function InitialFixedScroll(){

    
    a.addEventListener("wheel",function(e){
        e=e||window.WheelEvent;
        if(e.deltaY<0){
            if(currentPage!=1){
                currentPage--;
                
                a.classList.replace("nav"+(currentPage+1).toString(),"nav"+currentPage.toString());
                c[currentPage].children[0].children[0].classList.remove("navActive");
                c[currentPage-1].children[0].children[0].classList.add("navActive");
                c[currentPage].children[0].children[1].classList.remove("navRect");
                c[currentPage-1].children[0].children[1].classList.add("navRect");
            }
        }else{
            if(currentPage!=5){
                currentPage++;
                
                a.classList.replace("nav"+(currentPage-1).toString(),"nav"+currentPage.toString());
                c[currentPage-2].children[0].children[0].classList.remove("navActive");
                c[currentPage-1].children[0].children[0].classList.add("navActive");
                c[currentPage-2].children[0].children[1].classList.remove("navRect");
                c[currentPage-1].children[0].children[1].classList.add("navRect");
            }
        } 

        
        
    })
}





function InitialClickEventHandler(){
    window.onclick=
    function(e){
        e=e||window.MouseEvent;
        
        if(clientwidth-100-detectWidth<e.clientX&&e.clientX<clientwidth-100+detectWidth){
                
            if(  firstChildPosY-detectheight+deltaheight*0<e.clientY&&e.clientY<  firstChildPosY+detectheight+deltaheight*0){
                FirstPageAnimeSetter(1);
               
                
            }
            else if(  firstChildPosY-detectheight+deltaheight*1<e.clientY&&e.clientY<  firstChildPosY+detectheight+deltaheight*1){
                FirstPageAnimeSetter(2);
            }
            else if(  firstChildPosY-detectheight+deltaheight*2<e.clientY&&e.clientY<  firstChildPosY+detectheight+deltaheight*2){
                FirstPageAnimeSetter(3);
            }
            else if(  firstChildPosY-detectheight+deltaheight*3<e.clientY&&e.clientY<  firstChildPosY+detectheight+deltaheight*3){
                FirstPageAnimeSetter(4);
            }
            else if(  firstChildPosY-detectheight+deltaheight*4<e.clientY&&e.clientY<  firstChildPosY+detectheight+deltaheight*4){
                FirstPageAnimeSetter(5);
            }

        }else if(currentPage==2&&e.clientX<=_2_detectWidth){
            var pos=e.clientY-0.04*clientheight;
            var index=Math.floor(pos/(_2_deltaHeight)) ;
            SecondPageAnimeSetter(index);
            if(_2_activeIndex==-1){teacherInfobase.children[0].classList.replace("originalImg","tImage"+index.toString());}
            
            teacherInfobase.children[0].classList.replace("tImage"+_2_activeIndex.toString(),"tImage"+index.toString());
            _2_activeIndex=index;
            teacherInfobase.children[1].textContent=teacherNames[index];
            teacherInfobase.children[2].textContent=teacherIntros[index];


        }
    }

}



var deltaheight=0.14*clientheight;
var firstChildPosY=0.22*clientheight;
var firstChildPosX=clientwidth-100;
var detectWidth=25;
var detectheight=15;


var _2_deltaHeight=0.15*clientheight;
var _2_detectWidth=0.27*clientwidth;
var _2_activeIndex=-1;
function InitialMouseOverEventHandler(){
    window.onmousemove=
    function(e){
            e=e||window.MouseEvent;
           
            if(clientwidth-100-detectWidth<e.clientX&&e.clientX<clientwidth-100+detectWidth){
                
                if(  firstChildPosY-detectheight+deltaheight*0<e.clientY&&e.clientY<  firstChildPosY+detectheight+deltaheight*0){
                   if(currentPage!=1)
                        c[0].children[0].classList.replace("navAnime1back","navAnime1");
                    
                }
                else if(  firstChildPosY-detectheight+deltaheight*1<e.clientY&&e.clientY<  firstChildPosY+detectheight+deltaheight*1){
                    if(currentPage!=2)
                        c[1].children[0].classList.replace("navAnime1back","navAnime1");
                }
                else if(  firstChildPosY-detectheight+deltaheight*2<e.clientY&&e.clientY<  firstChildPosY+detectheight+deltaheight*2){
                    if(currentPage!=3)
                        c[2].children[0].classList.replace("navAnime1back","navAnime1");
                }
                else if(  firstChildPosY-detectheight+deltaheight*3<e.clientY&&e.clientY<  firstChildPosY+detectheight+deltaheight*3){
                    if(currentPage!=4)
                        c[3].children[0].classList.replace("navAnime1back","navAnime1");
                }
                else if(  firstChildPosY-detectheight+deltaheight*4<e.clientY&&e.clientY<  firstChildPosY+detectheight+deltaheight*4){
                    if(currentPage!=5)
                        c[4].children[0].classList.replace("navAnime1back","navAnime1");
                }
                else{

                     FirstPageResetAnime();
                        
                }
            }else if(currentPage==2&&e.clientX<=_2_detectWidth){
                var pos=e.clientY-0.04*clientheight;
                var index=Math.floor(pos/(_2_deltaHeight)) ;
                
                SecondPageResetAnime();
                teacherList[index].children[0].classList.replace("hide","show");
                teacherList[index].children[1].classList.replace("teacherName_Show","_2_Active");
                FirstPageResetAnime();

            }else{
                SecondPageResetAnime();
            }

        };

}



var currentPic=1;
var LB=document.querySelector(".leftbutton");
var RB=document.querySelector(".rightbutton");
LB.addEventListener("click",LeftButtonClickCallBack);
RB.addEventListener("click",RightButtonClickCallBack);
var nameTags=document.querySelector(".singleGroupContainer") ;
var picSource=document.querySelector(".stuPicture");
var stuNums=document.querySelectorAll(".singleGroup");
var discrption=document.querySelector(".stuDiscription");
var stuname=document.querySelector(".stuName");
var university=document.querySelector(".stuUniversity");
var discrptions=["他日卧龙终得雨，今朝放鹤且冲天","光终究会洒在你身上，\n你也会灿烂一场","收敛于无穷","愿你苦尽甘来的那一天，\n星月山河都做贺礼！","少年不惧岁月长，彼方尚有荣光在","佳境期待已久时，旋风扬帆奋追梦","”你知道人类最大的武器是什么吗？“ \n”是豁出去的决心。“","当你在追逐光的时候，\n光已经与你同航。","十年磨剑无人知，一朝出鞘天下惊","大学以后才发现智力巅峰在高三，\n所以趁现在努力吧骚年","我们风雨兼程，绝不空手而归","心若向阳花自开，志如磐石路更坚","如果你知道自己去哪里，\n只需要再坚持一下就会让全世界为你让路的","夏天的惊喜是兜风、晚霞、冰西瓜\n和努力以后的那句我终于可以","加油少年，我们算是栽在疫情上了，\n但你可要努力，一定比我们更加优秀","且视他人之疑目如盏盏鬼火，\n大胆去走你的夜路！","海压竹枝低复举，风吹山角晦还明","我可以一蹶不振 我偏要一鸣惊人","战！战！战！高考未至，奋斗不止！","这将是你滚烫的青春里最沸腾的一章，加油少年！","关关难过关关过，长路漫漫亦灿灿","前途似海，来日方长","我生来就是高山而非溪流，\n我欲于群峰之巅，俯视平庸的沟壑","用信心做笔，雄心做卷，\n用心执笔答称心之卷！","轻装策马青云路，人生从此驭长风","请记住，你是能让阳光撒满世界的人！","管他真理无穷，进一步有进一步的欢喜！","别辜负自己，走到今天真的不容易","付出终有回报，信心绝对重要。\n高考了，别忘记面带微笑","改变命运的不是现在的每一次模拟考成绩，也不是六月的一纸通知，\n而是无论何时都全力以赴的你！","倘若穷途末路，那使势如破竹","没有一朵花，一开始就是一朵花","记忆不会褪色，青春永不散场","I wanna sleep.","在这个改变命运最公平的平台上，\n别无他选，唯有相争","世间一趟，不枉，活一场","尽管跑 跑到灯火通明\n 跑到春暖花开 跑到苦尽甘来","那些看似不起波澜的日复一日，\n会突然在某一天让人看到坚持的意义"];
var names=["杜怡佳","范静蕊","巩立社","关丽娜","侯雨佳","华家璇","李娅婕","刘成儒","刘津含","吕鑫诺","孟祥世","孟心如","牛培哲","孙琪超","田广照","王颢焱","王静怡","王晓宁","魏继硕","温清喆","吴汝瑶","杨艺菲","尹巧焕","张江璇","张凌硕","张瑞佳","张思雨","张小艺","张昕杰","张乙可","张瑜心","张子芳","赵晨晓","赵勐","周鹤洋","周文倩","仝贻云","李博康"];
var universities=["西安交通大学","东北大学秦皇岛分校","哈尔滨工业大学","郑州大学","上海财经大学","北京航空航天大学","河北工业大学","中国矿业大学","北京理工大学","西北工业大学","华东理工大学","中国矿业大学","长安大学","华南理工大学","四川大学","郑州警察学院","哈尔滨工业大学（威海）","吉林大学","国防科技大学","大连理工大学","南京理工大学","华南理工大学","      ","中南大学","西北工业大学","华中农业大学","天津大学","东北大学","河北工业大学","华北电力大学（北京）","北京化工大学","曲阜师范大学","西北工业大学","中国地质大学","华北电力大学（保定）","河北工业大学","中国石油大学（北京）","武汉理工大学"];


function LeftButtonClickCallBack(){
    if(currentPic>1){
        currentPic--;
        picSource.setAttribute("style","background-image:url('./resources/images/webps/"+currentPic.toString()+".webp');");
        nameTags.setAttribute("style","translate:calc(-85px * "+(currentPic-7).toString()+");transition:0.5s;");
        stuNums[currentPic].classList.remove("numActive");
        stuNums[currentPic-1].classList.add("numActive");
        stuname.innerHTML=names[currentPic-1];
        university.innerHTML=universities[currentPic-1];
        discrption.innerHTML=discrptions[currentPic-1];

    }
}

function RightButtonClickCallBack(){
    if(currentPic<38){
        currentPic++;
        picSource.setAttribute("style","background-image:url('./resources/images/webps/"+currentPic.toString()+".webp');");
        nameTags.setAttribute("style","translate:calc(-85px * "+(currentPic-7).toString()+");transition:0.5s;");
        stuNums[currentPic-2].classList.remove("numActive");
        stuNums[currentPic-1].classList.add("numActive");
        stuname.innerHTML=names[currentPic-1];
        university.innerHTML=universities[currentPic-1];
        discrption.innerHTML=discrptions[currentPic-1];

    }
}


var postbtn=document.querySelector("#postBtn");
var usernameInput=document.querySelector(".userNameInput");
var passwordInput=document.querySelector(".passwordinput");
var commentContent=document.querySelector(".commentContent");
var delbtn=document.querySelector("#delBtn");
var errMsgPresenter=document.querySelector(".errorMsg");


class Packet{
    constructor(Msg,UserName,UserHash,PwdHash,Method,IsFirstLogin){
        this.Msg=Msg;
        this.UserName=UserName;
        this.UserHash=UserHash;
        this.PwdHash=PwdHash;
        this.Method=Method;
        this.IsFirstLogin=IsFirstLogin;
    }
}

class Message{
    constructor(UserName,Msg){
        this.UserName=UserName;
        this.Msg=Msg;
    }
}

function InitEventListener(){
    postbtn.addEventListener("click",postBtnClickCallBack);
    delbtn.addEventListener("click",deltnClickCallBack);
}

function postBtnClickCallBack(){
    
    
        var passwordHash = CryptoJS.SHA256(passwordInput.value).toString(CryptoJS.enc.Hex);
        var usernameHash = CryptoJS.SHA256(usernameInput.value).toString(CryptoJS.enc.Hex);
        var packet=new Packet("","",usernameHash,passwordHash,"request","");
        var jsonText=JSON.stringify(packet);
       
		
   
    
    
    
}
function deltnClickCallBack(){
    commentContent.value="";
}

function SetErrorMsg(msg){
    errMsgPresenter.innerHTML=msg;
}

function FirstPageResetAnime(){
    c[0].children[0].classList.replace("navAnime1","navAnime1back");
    c[1].children[0].classList.replace("navAnime1","navAnime1back");
    c[2].children[0].classList.replace("navAnime1","navAnime1back");
    c[3].children[0].classList.replace("navAnime1","navAnime1back");
    c[4].children[0].classList.replace("navAnime1","navAnime1back");
}

function FirstPageAnimeSetter(index=0){
    a.classList.replace("nav"+currentPage.toString(),"nav"+index.toString());
                c[currentPage-1].children[0].children[0].classList.remove("navActive");
                c[currentPage-1].children[0].children[1].classList.remove("navRect");
                currentPage=index;
                c[currentPage-1].children[0].children[1].classList.add("navRect");
                c[currentPage-1].children[0].children[0].classList.add("navActive");

}


function SecondPageResetAnime(){
    
    for(var i=0;i<6;i++){
        if(i==_2_activeIndex) continue;
        teacherList[i].children[0].classList.replace("show","hide");
        teacherList[i].children[1].classList.replace("_2_Active","teacherName_Show");
        
    }
    
}

function SecondPageAnimeSetter(index=0){
    for(var i=0;i<6;i++){
        teacherList[i].children[0].classList.replace("show","hide");
        teacherList[i].children[1].classList.replace("_2_Active","teacherName_Show");
    }
    teacherList[index].children[1].classList.replace("teacherName_Show","_2_Active");
    teacherList[index].children[0].classList.replace("hide","show");
}


