let gridone=document.querySelector(".grid1");
let gridtwo=document.querySelector(".grid2");
let gridthree=document.querySelector(".grid3");
let gridfour=document.querySelector(".grid4");
let gridfive=document.querySelector(".grid5");
let gridsix=document.querySelector(".grid6");

let arrayOne= [
    {
        "src" : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9883/1109883-v-fd70e26332d7"
    } ,
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6716/1106716-v-a0a306c60795"
    }  ,
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1841/1101841-v-72cc4409eaed"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7519/1097519-v-7235f9a4b235"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7603/1097603-v-1a8b951608cf"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5883/1095883-v-c0fa911c0098"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5715/1095715-v-a28c601aa433"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/3863/1093863-v-0bcaa3a2beb5"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8723/1078723-v-a1a04c7474f9"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4938/1094938-v-a193263ee6a6"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4294/1074294-v-ef854a9ae0dc"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8864/1068864-v-d8c87396967f"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/3207/1063207-v-1b046084c692"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/473/1080473-v-d97e637cb29d"
    }

];

function LatestandTrending(){
    arrayOne.forEach((img)=>{
        let NewImgElement =document.createElement("img");
        NewImgElement.src =img.src;
        let imgDiv =document.createElement("div");
        imgDiv.appendChild(NewImgElement);
        gridone.appendChild(imgDiv);
    })
}
LatestandTrending()
let arrayTwo= [
    {
         "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6536/846536-v"
    } ,
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7676/647676-v"
    }  ,
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/2038/1102038-v-1bac28aa23cb"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8285/388285-v"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/896/580896-v"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/3669/593669-v"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8537/568537-v"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/6247/1770016247/1770016247-v"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/9726/439726-v"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/3510/133510-v"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/9617/439617-v"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6479/1106479-v-7d01fca6ee88"
    }

];
function MoviesRecommendedForYou(){
    arrayTwo.forEach((img)=>{
        let NewImgElement =document.createElement("img");
        NewImgElement.src =img.src;
        let imgDiv =document.createElement("div");
        imgDiv.appendChild(NewImgElement);
        gridtwo.appendChild(imgDiv);
    })
}
MoviesRecommendedForYou()
let arrayThree= [
    {
         "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4208/1104208-h-bc6403969183"
    } ,
    {
        "src": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1341/1091341-h-0c4699c4630e"
    }  ,
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/4469/674469-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/8687/1078687-h-029e9d313239"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/4600/674600-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6103/686103-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/4425/674425-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/4385/674385-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/7490/1067490-h-501e2ffb6d17"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/4290/754290-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/4661/674661-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/4601/674601-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/old_images/MOVIE/1166/1770001166/1770001166-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/old_images/MOVIE/3257/1770003257/1770003257-h"
    }
];
function PopularInEnglish(){
    arrayThree.forEach((img)=>{
        let NewImgElement=document.createElement("img");
        NewImgElement.src= img.src;
        let imgDiv=document.createElement("div");
        imgDiv.appendChild(NewImgElement);
        gridthree.appendChild(imgDiv);

    })
    

}
PopularInEnglish()

let arrayFour=[
    {
    "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/8366/928366-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2607/1062607-h-fa693eabb41d"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/5813/1085813-h-e0f54a881658"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/9725/439725-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6666/826666-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/3442/1013442-h-46e497f13e8b"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6747/146747-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/4361/584361-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/old_images/MOVIE/5950/1000035950/1000035950-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/old_images/MOVIE/5948/1000035948/1000035948-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/old_images/MOVIE/8059/1000058059/1000058059-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/old_images/MOVIE/1063/1000071063/1000071063-h"
    }

];
function PopularInTamil(){
    arrayFour.forEach((img)=>{
        let NewImgElement=document.createElement("img");
        NewImgElement.src=img.src;
        let imgDiv=document.createElement("div");
        imgDiv.appendChild(NewImgElement);
        gridfour.appendChild(imgDiv);

    })
}
PopularInTamil()
let arrayFive =[
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/old_images/MOVIE/4190/1000074190/1000074190-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5955/525955-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7508/827508-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8130/928130-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/1354/1000001354/1000001354-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/811/1000190811/1000190811-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4919/1044919-h-3d883cd637a6"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1527/571527-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7414/957414-h "
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7436/747436-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1322/441322-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/3421/1000093421/1000093421-h"
    }
];
function PopularInHindi (){
    arrayFive.forEach((img)=>{
        let NewImgElement=document.createElement("img");
        NewImgElement.src=img.src;
        let imgDiv=document.createElement("div");
        imgDiv.appendChild(NewImgElement);
        gridfive.appendChild(imgDiv);
    })
}
PopularInHindi()
arraysix=[
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/1602/1770001602/1770001602-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5335/885335-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/435/1000160435/1000160435-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/3870/1000173870/1000173870-h"
    },
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3144/813144-h"
    },
    
    {
        "src":"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1564/1051564-h-8c3dd9bada7f"
    }
];
function favorites(){
    arraysix.forEach((img)=>{
        let NewImgElement=document.createElement("img");
        NewImgElement.src=img.src;
        let imgDiv=document.createElement("div");
        imgDiv.appendChild(NewImgElement);
        gridsix.appendChild(imgDiv);
    })
}
favorites()
//slides//
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}