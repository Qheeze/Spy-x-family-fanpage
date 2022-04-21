var protection = 2;
var bot = 0;
var Life = 4;
var indestractible = 0;
var page = 0;
var zegar = 1;
var zegar2 = 1;


function OdswiezenieWygranych() {

  for (var xy = 0; xy < 6; xy++) {
      
    
      if (localStorage.getItem("przekazPunktow"+xy) == 0) {
        document.getElementById("g"+xy).style.backgroundColor = "black";
        
      } else if (localStorage.getItem("przekazPunktow"+xy) == 1) {
        document.getElementById("g" + xy).style.backgroundColor = "rgb(100, 60, 0)";
        
      } else if (localStorage.getItem("przekazPunktow"+xy) == 2) {
        document.getElementById("g" + xy).style.backgroundColor = "rgb(190, 190, 190)";
        
      } else if (localStorage.getItem("przekazPunktow"+xy) == 3) {
        document.getElementById("g" + xy).style.backgroundColor = "rgb(255, 245, 30)";
        
      }
    }
  
  setTimeout(function(){OdswiezenieWygranych();},1000);
}

//localStorage.setItem("przekazPunktow", tryb);
//var PrzeP = localStorage.getItem("przekazPunktow");

setTimeout(function(){
  if (page == 0) {

  OdswiezenieWygranych();

  }
},10);

//localStorage.setItem("przekazPunktow", 1);
//localStorage.setItem("przekazTypuPunktow", 3);


/*function myKeyPress(v){
  var keynum;

  if(window.event) {                  
    keynum = v.keyCode;
  } else if(v.which){                
    keynum = v.which;
  }
  if ("w"==String.fromCharCode(keynum)) {
    protection=1;
    
    document.getElementById("tarcza").style.clipPath = "polygon(50% 0, 0 15%, 100% 15%)";

  }
  if("a"==String.fromCharCode(keynum)) {
    protection=4;

    document.getElementById("tarcza").style.clipPath = "polygon(0 50%, 15% 100%, 15% 0)";
    
    
  }
  if("s"==String.fromCharCode(keynum)) {
    protection=3;

    document.getElementById("tarcza").style.clipPath = "polygon(50% 100%, 100% 85%, 0 85%)";
    

  }
  if("d"==String.fromCharCode(keynum)) {
    protection=2;
    
    document.getElementById("tarcza").style.clipPath = "polygon(100% 50%, 85% 0, 85% 100%)";
    
  }
  if(32==keynum) {
    
    if (bot == 0) {
      
      bot = 1;

    } else {
      
      bot = 0;

    }

  }
  
  
}*/


if (!(localStorage.getItem("CzasWGrze")>= 0)) {
  localStorage.setItem("CzasWGrze", 0);
}



function timer() {
  zegar = parseInt(localStorage.getItem("CzasWGrze"));
  localStorage.setItem("CzasWGrze", zegar + 1);
  
  //console.log(localStorage.getItem("CzasWGrze"));
  zegar2 = (Math.floor(localStorage.getItem("CzasWGrze") / 3600)) + " : " + ((Math.floor(localStorage.getItem("CzasWGrze")/60)) % 60) + " : " + (localStorage.getItem("CzasWGrze") % 60);
  if (opcja == 21) {
    document.getElementById("option3").innerHTML = zegar2;
    
  }
  
  setTimeout(function(){timer();},1000);
}

timer();


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (page == 1) {
      

      if (e.keyCode == '38' || e.keyCode == '87') {

        protection=1;
    
        document.getElementById("tarcza").style.clipPath = "polygon(50% 0, 0 15%, 100% 15%)";

      }
      else if (e.keyCode == '39' || e.keyCode == '68') {

        protection=2;
      
        document.getElementById("tarcza").style.clipPath = "polygon(100% 50%, 85% 0, 85% 100%)";

      }
      else if (e.keyCode == '40' || e.keyCode == '83') {

        protection=3;
  
        document.getElementById("tarcza").style.clipPath = "polygon(50% 100%, 100% 85%, 0 85%)";

      }
      else if (e.keyCode == '37' || e.keyCode == '65') {

        protection=4;
  
        document.getElementById("tarcza").style.clipPath = "polygon(0 50%, 15% 100%, 15% 0)";

      }else if(e.keyCode == '16') {
    
        if (bot == 0) {
        
          bot = 1;
  
        } else {
        
          bot = 0;
  
        }
  
      }
    
    }else if (page == 0) {

      if (e.keyCode == '80') {
        
        localStorage.setItem("przekazPunktow0", 0);
        localStorage.setItem("przekazPunktow1", 0);
        localStorage.setItem("przekazPunktow2", 0);
        localStorage.setItem("przekazPunktow3", 0);
        localStorage.setItem("przekazPunktow4", 0);
        localStorage.setItem("przekazPunktow5", 0);
        localStorage.setItem("CzasWGrze", 0);
        
      }

		


  if (e.keyCode == '38' || e.keyCode == '87') {

    if (opcja>1 && opcja<5) {
      opcja--;
    }
    
    if (opcja>5 && opcja<9) {
      opcja--;
    }

    if (opcja>9 && opcja<13) {
      opcja--;
    }
    
    if (opcja>13 && opcja<17) {
      opcja--;
    }
    
    if (opcja>17 && opcja<21) {
      opcja--;
    }

  }
  if(e.keyCode == '40' || e.keyCode == '83') {


    if (opcja>0 && opcja<4) {
      opcja++;
    }

    if (opcja>4 && opcja<8) {
      opcja++;
    }
    
    if (opcja>8 && opcja<12) {
      opcja++;
    }

    if (opcja>12 && opcja<16) {
      opcja++;
    }

    if (opcja>16 && opcja<20) {
      opcja++;
    }
    
  }
  if(e.keyCode =='13') {
    
    if (opcja==1) {

      localStorage.setItem("przekazTrybu", tryb);
      localStorage.setItem("przekazZyc", LifeNumber);
      
      window.open("GamePage.html", '_blank').focus();

    }else if (opcja==2) {

      document.getElementById("option1").innerHTML = "Scripted";
      document.getElementById("option2").innerHTML = "Random";
      document.getElementById("option3").innerHTML = "Lives";
      document.getElementById("tytul").innerHTML = "Ustawienia";
      document.getElementById("serduszko").style.left = "calc(50% - 200px)";
      

      opcja = 5;


    }else if (opcja==3) {
      
      document.getElementById("option1").innerHTML = "Staty";
      document.getElementById("option2").innerHTML = "Czas w grze";
      document.getElementById("option3").innerHTML = zegar2;
      document.getElementById("tytul").innerHTML = "Prosta Gierka";
      document.getElementById("serduszko").style.left = "calc(50% - 120px)";
      

      opcja = 21;

    }else if (opcja==4) {

      return quitBox('quit');

    }else if (opcja==5) {
      
      document.getElementById("option1").innerHTML = "Easy";
      document.getElementById("option2").innerHTML = "Normal";
      document.getElementById("option3").innerHTML = "Hard";
      document.getElementById("tytul").innerHTML = "Scripted";
      document.getElementById("serduszko").style.left = "calc(50% - 150px)";
      

      opcja = 13;

    }else if (opcja==6) {
      
      document.getElementById("option1").innerHTML = "Easy";
      document.getElementById("option2").innerHTML = "Normal";
      document.getElementById("option3").innerHTML = "Hard";
      document.getElementById("tytul").innerHTML = "Random";
      document.getElementById("serduszko").style.left = "calc(50% - 150px)";
      

      opcja = 9;
      


    }else if (opcja==7) {
      
      document.getElementById("option1").innerHTML = "4 HP";
      document.getElementById("option2").innerHTML = "2 HP";
      document.getElementById("option3").innerHTML = "1 HP";
      document.getElementById("tytul").innerHTML = "Lives";
      document.getElementById("serduszko").style.left = "calc(50% - 150px)";
      
      opcja = 17;

    }else if (opcja==8) {
      document.getElementById("option1").innerHTML = "Walka";
      document.getElementById("option2").innerHTML = "Tryby";
      document.getElementById("option3").innerHTML = "Staty";
      document.getElementById("tytul").innerHTML = "Prosta Gierka";
      document.getElementById("serduszko").style.left = "calc(50% - 150px)";
      

      opcja = 1;
    }else if (opcja==9) {
      
      document.getElementById("serduszko").style.backgroundColor = "rgb(255, 60, 60)";
      document.getElementById("serduszko").style.clipPath = "polygon(100% 12.5%, 93.75% 12.5%, 93.75% 6.25%, 87.5% 6.25%, 87.5% 0%, 75% 0%, 75% 6.25%, 62.5% 6.25%, 62.5% 12.5%, 56.25% 12.5%, 56.25% 25%, 43.75% 25%, 43.75% 12.5%, 37.5% 12.5%, 37.5% 6.25%, 25% 6.25%, 25% 0%, 12.5% 0%, 12.5% 6.25%, 6.25% 6.25%, 6.25% 12.5%, 0% 12.5%, 0% 62.5%, 12.5% 62.5%, 12.5% 75%, 25% 75%, 25% 87.5%, 37.5% 87.5%, 37.5% 100%, 62.5% 100%, 62.5% 87.5%, 75% 87.5%, 75% 75%, 87.5% 75%, 87.5% 62.5%, 100% 62.5%)";
      tryb = 1;


    }else if (opcja==10) {
      
      document.getElementById("serduszko").style.backgroundColor = "rgb(130, 255, 255)";
      document.getElementById("serduszko").style.clipPath = "polygon(100% 12.5%, 93.75% 12.5%, 93.75% 6.25%, 87.5% 6.25%, 87.5% 0%, 75% 0%, 75% 6.25%, 62.5% 6.25%, 62.5% 12.5%, 56.25% 12.5%, 56.25% 25%, 43.75% 25%, 43.75% 12.5%, 37.5% 12.5%, 37.5% 6.25%, 25% 6.25%, 25% 0%, 12.5% 0%, 12.5% 6.25%, 6.25% 6.25%, 6.25% 12.5%, 0% 12.5%, 0% 62.5%, 12.5% 62.5%, 12.5% 75%, 25% 75%, 25% 87.5%, 37.5% 87.5%, 37.5% 100%, 62.5% 100%, 62.5% 87.5%, 75% 87.5%, 75% 75%, 87.5% 75%, 87.5% 62.5%, 100% 62.5%)";
      tryb = 2;


    }else if (opcja==11) {

      document.getElementById("serduszko").style.backgroundColor = "yellow";
      document.getElementById("serduszko").style.clipPath = "polygon(100% 12.5%, 93.75% 12.5%, 93.75% 6.25%, 87.5% 6.25%, 87.5% 0%, 75% 0%, 75% 6.25%, 62.5% 6.25%, 62.5% 12.5%, 56.25% 12.5%, 56.25% 25%, 43.75% 25%, 43.75% 12.5%, 37.5% 12.5%, 37.5% 6.25%, 25% 6.25%, 25% 0%, 12.5% 0%, 12.5% 6.25%, 6.25% 6.25%, 6.25% 12.5%, 0% 12.5%, 0% 62.5%, 12.5% 62.5%, 12.5% 75%, 25% 75%, 25% 87.5%, 37.5% 87.5%, 37.5% 100%, 62.5% 100%, 62.5% 87.5%, 75% 87.5%, 75% 75%, 87.5% 75%, 87.5% 62.5%, 100% 62.5%)";
      tryb = 3;
      


    }else if (opcja==12) {

      document.getElementById("option1").innerHTML = "Scripted";
      document.getElementById("option2").innerHTML = "Random";
      document.getElementById("option3").innerHTML = "Lives";
      document.getElementById("tytul").innerHTML = "Ustawienia";
      document.getElementById("serduszko").style.left = "calc(50% - 200px)";
      

      opcja = 5;
    }else if (opcja==13) {
      
      document.getElementById("serduszko").style.backgroundColor = "rgb(0, 130, 0)";
      document.getElementById("serduszko").style.clipPath = "polygon(100% 12.5%, 93.75% 12.5%, 93.75% 6.25%, 87.5% 6.25%, 87.5% 0%, 75% 0%, 75% 6.25%, 62.5% 6.25%, 62.5% 12.5%, 56.25% 12.5%, 56.25% 25%, 43.75% 25%, 43.75% 12.5%, 37.5% 12.5%, 37.5% 6.25%, 25% 6.25%, 25% 0%, 12.5% 0%, 12.5% 6.25%, 6.25% 6.25%, 6.25% 12.5%, 0% 12.5%, 0% 62.5%, 12.5% 62.5%, 12.5% 75%, 25% 75%, 25% 87.5%, 37.5% 87.5%, 37.5% 100%, 62.5% 100%, 62.5% 87.5%, 75% 87.5%, 75% 75%, 87.5% 75%, 87.5% 62.5%, 100% 62.5%)";
      tryb = 4;


    }else if (opcja==14) {
      
      document.getElementById("serduszko").style.backgroundColor = "rgb(20, 20, 150)";
      document.getElementById("serduszko").style.clipPath = "polygon(100% 12.5%, 93.75% 12.5%, 93.75% 6.25%, 87.5% 6.25%, 87.5% 0%, 75% 0%, 75% 6.25%, 62.5% 6.25%, 62.5% 12.5%, 56.25% 12.5%, 56.25% 25%, 43.75% 25%, 43.75% 12.5%, 37.5% 12.5%, 37.5% 6.25%, 25% 6.25%, 25% 0%, 12.5% 0%, 12.5% 6.25%, 6.25% 6.25%, 6.25% 12.5%, 0% 12.5%, 0% 62.5%, 12.5% 62.5%, 12.5% 75%, 25% 75%, 25% 87.5%, 37.5% 87.5%, 37.5% 100%, 62.5% 100%, 62.5% 87.5%, 75% 87.5%, 75% 75%, 87.5% 75%, 87.5% 62.5%, 100% 62.5%)";
      tryb = 5;


    }else if (opcja==15) {

      document.getElementById("serduszko").style.backgroundColor = "darkmagenta";
      document.getElementById("serduszko").style.clipPath = "polygon(75% 12.5%, 62.5% 12.5%, 62.5% 50%, 75% 50%, 75% 62.5%, 87.5% 62.5%, 87.5% 75%, 81.25% 75%, 81.25% 81.25%, 68.75% 81.25%, 68.75% 87.5%, 31.25% 87.5%, 31.25% 81.25%, 18.75% 81.25%, 18.75% 75%, 12.5% 75%, 12.5% 62.5%, 25% 62.5%, 25% 50%, 25% 12.5%, 37.5% 12.5%, 37.5% 50%, 25% 50%, 25% 62.5%, 25% 68.75%, 37.5% 68.75%, 37.5% 75%, 62.5% 75%, 62.5% 68.75%, 75% 68.75%, 75% 62.5%, 75% 50%, 75% 12.5%, 75% 12.5%, 75% 12.5%, 75% 12.5%)";
      tryb = 6;
      


    }else if (opcja==16) {

      document.getElementById("option1").innerHTML = "Scripted";
      document.getElementById("option2").innerHTML = "Random";
      document.getElementById("option3").innerHTML = "Lives";
      document.getElementById("tytul").innerHTML = "Ustawienia";
      document.getElementById("serduszko").style.left = "calc(50% - 200px)";
      

      opcja = 5;
    }else if (opcja==17) {

      
      LifeNumber = 4;
    }else if (opcja==18) {

      
      LifeNumber = 2;
    }else if (opcja==19) {

      
      LifeNumber = 1;
    }else if (opcja==20) {

      document.getElementById("option1").innerHTML = "Scripted";
      document.getElementById("option2").innerHTML = "Random";
      document.getElementById("option3").innerHTML = "Lives";
      document.getElementById("tytul").innerHTML = "Ustawienia";
      document.getElementById("serduszko").style.left = "calc(50% - 200px)";
      

      opcja = 5;
    }else if (opcja==21) {
      document.getElementById("option1").innerHTML = "Walka";
      document.getElementById("option2").innerHTML = "Tryby";
      document.getElementById("option3").innerHTML = "Staty";
      document.getElementById("tytul").innerHTML = "Prosta Gierka";
      document.getElementById("serduszko").style.left = "calc(50% - 150px)";
        
  
      opcja = 1;
      
    }

  }
  if (opcja==1 || opcja==5 || opcja==9 || opcja==13 || opcja==17) {
    if (LifeNumber == 4) {
    document.getElementById("option1").style.color = "rgb(190, 190, 190)";
      
    } else if (LifeNumber == 2) {
      document.getElementById("option1").style.color = "rgb(230, 230, 20)";
      
    } else if (LifeNumber == 1) {
      document.getElementById("option1").style.color = "rgb(190, 20, 20)";
      
    }
    document.getElementById("option2").style.color = "white";
    document.getElementById("option3").style.color = "white";
    document.getElementById("option4").style.color = "white";

    document.getElementById("serduszko").style.top = "222px";

  } else if (opcja==2 || opcja==6 || opcja==10 || opcja==14 || opcja==18) {

    document.getElementById("option1").style.color = "white";
    if (LifeNumber == 4) {
      document.getElementById("option2").style.color = "rgb(190, 190, 190)";
        
      } else if (LifeNumber == 2) {
        document.getElementById("option2").style.color = "rgb(230, 230, 20)";
        
      } else if (LifeNumber == 1) {
        document.getElementById("option2").style.color = "rgb(190, 20, 20)";
        
      }
    document.getElementById("option3").style.color = "white";
    document.getElementById("option4").style.color = "white";
    
    document.getElementById("serduszko").style.top = "302px";

  } else if (opcja==3 || opcja==7 || opcja==11 || opcja==15 || opcja==19) {

    document.getElementById("option1").style.color = "white";
    document.getElementById("option2").style.color = "white";
    if (LifeNumber == 4) {
      document.getElementById("option3").style.color = "rgb(190, 190, 190)";
        
      } else if (LifeNumber == 2) {
        document.getElementById("option3").style.color = "rgb(230, 230, 20)";
        
      } else if (LifeNumber == 1) {
        document.getElementById("option3").style.color = "rgb(190, 20, 20)";
        
      }
    document.getElementById("option4").style.color = "white";
    
    document.getElementById("serduszko").style.top = "382px";

  } else if (opcja==4 || opcja==8 || opcja==12 || opcja==16 || opcja==20 || opcja == 21) {

    document.getElementById("option1").style.color = "white";
    document.getElementById("option2").style.color = "white";
    document.getElementById("option3").style.color = "white";
    if (LifeNumber == 4) {
      document.getElementById("option4").style.color = "rgb(190, 190, 190)";
        
      } else if (LifeNumber == 2) {
        document.getElementById("option4").style.color = "rgb(230, 230, 20)";
        
      } else if (LifeNumber == 1) {
        document.getElementById("option4").style.color = "rgb(190, 20, 20)";
        
      }
    
    document.getElementById("serduszko").style.top = "462px";

  }
  





	}
    
}










function quitBox(cmd)
{   
    if (cmd=='quit')
    {
        open(location, '_self').close(); //Komenda zamykająca strone (związana z powyżej wspomnianą symulacją)
    }   
    return false;   
}


    /*var original = document.getElementById('pocisk');
    var clone = original.cloneNode(true);
    i++; 
   clone.id = "pocisk" + i; 
    clone.onclick = duplicate; 
    original.parentNode.appendChild(clone);
    document.getElementById("pocisk"+i).style.backgroundColor = "rgb(130, 255, 255)";
    document.getElementById("pocisk"+i).style.position = "absolute";
    document.getElementById("pocisk"+i).style.width = "48px";
    document.getElementById("pocisk"+i).style.height = "48px";
    document.getElementById("pocisk"+i).style.transitionDuration = "3s";
    document.getElementById("pocisk"+i).style.clipPath = "polygon(20% 75%, 40% 75%, 40% 0, 60% 0, 60% 75%, 80% 75%, 50% 100%)";
    document.getElementById("pocisk"+i).style.top = "10px";
    document.getElementById("pocisk"+i).style.right = "calc(50% - 24px)";
    setTimeout(function(){document.getElementById("pocisk"+i).style.top = "calc(50% - 48px";},1);*/
    








  
    var trybV2 = localStorage.getItem("przekazTrybu");
    var MaxHP = localStorage.getItem("przekazZyc");
    Life = MaxHP;
    //trybV2=7;
    function JustStart() {
    
      page = 1;

       var wait = 1000;
      if (trybV2==1) {
        wait=5000;
      } else if (trybV2==2) {
        wait = 1000;
      } else if (trybV2==3){
        wait = 200;
      }else{

      }
      if (trybV2==1 || trybV2==2 || trybV2==3) {
        document.getElementById("Score").style.opacity = "100%";
        
        document.getElementById("postep1").style.opacity = "0%";
        document.getElementById("postep2").style.opacity = "0%";

        setTimeout(function(){ START();},wait);

        
      } else {
        document.getElementById("Score").style.opacity = "0%";

        document.getElementById("postep1").style.opacity = "100%";
        document.getElementById("postep2").style.opacity = "100%";

        setTimeout(function(){ START2();},wait);
        
      }

    }







var i = 0;


var KolorS = 0;

function START() {

  

    StronA = Math.floor(Math.random() * 4) + 1;


    var original = document.getElementById('pocisk');
    var clone = original.cloneNode(true);
    i++; 
    clone.id = "pocisk" + i; 
    original.parentNode.appendChild(clone);

    document.getElementById("pocisk"+i).style.backgroundColor = "rgb(130, 255, 255)";
    document.getElementById("pocisk"+i).style.position = "absolute";
    document.getElementById("pocisk"+i).style.width = "48px";
    document.getElementById("pocisk"+i).style.height = "48px";
    document.getElementById("pocisk"+i).style.transitionTimingFunction = "linear";
    
      
    KolorS = Math.floor(Math.random() * 100) + 1;
    if (SpecialChance >= KolorS) {
      document.getElementById("pocisk"+i).style.backgroundColor = "yellow";
      
    }
    
    if (SpecialChance < KolorS) {
    document.getElementById("pocisk1").style.backgroundColor = "rgb(255, 60, 60)";
      
    }

if (document.getElementById("pocisk"+i).style.backgroundColor != "yellow") {
  

    if (StronA == 1) {
      

      document.getElementById("pocisk"+i).style.transitionDuration = speed+"s";
      document.getElementById("pocisk"+i).style.clipPath = "polygon(20% 75%, 40% 75%, 40% 0, 60% 0, 60% 75%, 80% 75%, 50% 100%)";
      document.getElementById("pocisk"+i).style.top = "10px";
      document.getElementById("pocisk"+i).style.right = "calc(50% - 24px)";
      setTimeout(function(){DrogaStrzalki(i,1);},10);
      

    } else if (StronA == 2) {

      document.getElementById("pocisk"+i).style.transitionDuration = speed+"s";
      document.getElementById("pocisk"+i).style.clipPath = "polygon(25% 20%, 25% 40%, 100% 40%, 100% 60%, 25% 60%, 25% 80%, 0% 50%)";
      document.getElementById("pocisk"+i).style.right = "10px";
      document.getElementById("pocisk"+i).style.top = "calc(50% - 24px)";
      setTimeout(function(){DrogaStrzalki(i,2);},10);
      
    } else if (StronA == 3) {

      document.getElementById("pocisk"+i).style.transitionDuration = speed+"s";
      document.getElementById("pocisk"+i).style.clipPath = "polygon(80% 25%, 60% 25%, 60% 100%, 40% 100%, 40% 25%, 20% 25%, 50% 0%)";
      document.getElementById("pocisk"+i).style.bottom = "10px";
      document.getElementById("pocisk"+i).style.left = "calc(50% - 24px)";
      setTimeout(function(){DrogaStrzalki(i,3);},10);
      
    } else if (StronA == 4) {

      document.getElementById("pocisk"+i).style.transitionDuration = speed+"s";
      document.getElementById("pocisk"+i).style.clipPath = "polygon(75% 80%, 75% 60%, 0% 60%, 0% 40%, 75% 40%, 75% 20%, 100% 50%)";
      document.getElementById("pocisk"+i).style.left = "10px";
      document.getElementById("pocisk"+i).style.bottom = "calc(50% - 24px)";
      setTimeout(function(){DrogaStrzalki(i,4);},10);



      
    }
} else {
    if (StronA == 1) {
      

      document.getElementById("pocisk"+i).style.transitionDuration = (speed*4/8)+"s";
      document.getElementById("pocisk"+i).style.clipPath = "polygon(20% 75%, 40% 75%, 40% 0, 60% 0, 60% 75%, 80% 75%, 50% 100%)";
      document.getElementById("pocisk"+i).style.bottom = "10px";
      document.getElementById("pocisk"+i).style.left = "calc(50% - 24px)";
      setTimeout(function(){DrogaStrzalki(i,1);},10);
      

    } else if (StronA == 2) {

      document.getElementById("pocisk"+i).style.transitionDuration = (speed*4/8)+"s";
      document.getElementById("pocisk"+i).style.clipPath = "polygon(25% 20%, 25% 40%, 100% 40%, 100% 60%, 25% 60%, 25% 80%, 0% 50%)";
      document.getElementById("pocisk"+i).style.left = "10px";
      document.getElementById("pocisk"+i).style.bottom = "calc(50% - 24px)";
      setTimeout(function(){DrogaStrzalki(i,2);},10);
      
    } else if (StronA == 3) {

      document.getElementById("pocisk"+i).style.transitionDuration = (speed*4/8)+"s";
      document.getElementById("pocisk"+i).style.clipPath = "polygon(80% 25%, 60% 25%, 60% 100%, 40% 100%, 40% 25%, 20% 25%, 50% 0%)";
      document.getElementById("pocisk"+i).style.top = "10px";
      document.getElementById("pocisk"+i).style.right = "calc(50% - 24px)";
      setTimeout(function(){DrogaStrzalki(i,3);},10);
      
    } else if (StronA == 4) {

      document.getElementById("pocisk"+i).style.transitionDuration = (speed*4/8)+"s";
      document.getElementById("pocisk"+i).style.clipPath = "polygon(75% 80%, 75% 60%, 0% 60%, 0% 40%, 75% 40%, 75% 20%, 100% 50%)";
      document.getElementById("pocisk"+i).style.right = "10px";
      document.getElementById("pocisk"+i).style.top = "calc(50% - 24px)";
      setTimeout(function(){DrogaStrzalki(i,4);},10);



      
    }
  
  }
      setTimeout(function(){ START();},czas);
      
  

}




  score = 0; 

  speed = 1000; //3 -> 1.5
  czas = 1000; //500
  SpecialChance = 0; 


  if (trybV2==1) {
    
  speed = 5; //1.5 <- 3
  czas = 2000; //500
  SpecialChance = 0; 


  } else if (trybV2==2) {

    speed = 1.5;
    czas = 500;
    SpecialChance = 10; 
    
  } else if (trybV2==3) {

    speed = 1;
    czas = 350;
    SpecialChance = 50; 
    
  } else {
    
  }

function Oblot(SId,Typ) {
  
  document.getElementById("pocisk"+SId).style.transitionDuration = (speed*1/16)+"s";
  setTimeout(function(){
  if (Typ==1) {
    document.getElementById("pocisk"+SId).style.bottom = "376px";
    document.getElementById("pocisk"+SId).style.left = "230px";
  } else if (Typ==2) {
    document.getElementById("pocisk"+SId).style.left = "376px";
    document.getElementById("pocisk"+SId).style.bottom = "230px";
  } else if (Typ==3) {
    document.getElementById("pocisk"+SId).style.top = "376px";
    document.getElementById("pocisk"+SId).style.right = "230px";
  } else if (Typ==4) {
    document.getElementById("pocisk"+SId).style.right = "376px";
    document.getElementById("pocisk"+SId).style.top = "230px";
  }
},1);
setTimeout(function(){
  if (Typ==1) {
    document.getElementById("pocisk"+SId).style.bottom = "522px";
    document.getElementById("pocisk"+SId).style.left = "calc(50% - 24px)";
  } else if (Typ==2) {
    document.getElementById("pocisk"+SId).style.left = "522px";
    document.getElementById("pocisk"+SId).style.bottom = "calc(50% - 24px)";
  } else if (Typ==3) {
    document.getElementById("pocisk"+SId).style.top = "522px";
    document.getElementById("pocisk"+SId).style.right = "calc(50% - 24px)";
  } else if (Typ==4) {
    document.getElementById("pocisk"+SId).style.right = "522px";
    document.getElementById("pocisk"+SId).style.top = "calc(50% - 24px)";
  }
},(speed*1000/16)+2);
setTimeout(function(){

  document.getElementById("pocisk"+SId).style.transitionDuration = (speed*3/8)+"s";

  setTimeout(function(){
    if (Typ==1) {
      document.getElementById("pocisk"+SId).style.bottom = "400px";
    } else if (Typ==2) {
      document.getElementById("pocisk"+SId).style.left = "400px";
    } else if (Typ==3) {
      document.getElementById("pocisk"+SId).style.top = "400px";
    } else if (Typ==4) {
      document.getElementById("pocisk"+SId).style.right = "400px";
    }
  },1);
},(speed*2000/16)+3);

}

function DrogaStrzalki(SId,Typ) {

  

  setTimeout(function(){document.getElementById("pocisk"+SId).style.display = "none";},(speed*1000));
  setTimeout(function(){detekcja(SId,Typ,0);},(speed*790)); //4/5 = 16/20 = 3/4 około
  if (bot == 1) {
  setTimeout(function(){AutoMode(Typ);},((speed*790)-1));//210
    
  }
  
  if (document.getElementById("pocisk"+SId).style.backgroundColor != "yellow") {
    if (Typ==1) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.top = "368px";},10);
    } else if (Typ==2) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.right = "368px";},10);
    } else if (Typ==3) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.bottom = "368px";},10);
    } else if (Typ==4) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.left = "368px";},10);
    }
  }else{
    if (Typ==1) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.bottom = "230px";},10);
    } else if (Typ==2) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.left = "230px";},10);
    } else if (Typ==3) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.top = "230px";},10);
    } else if (Typ==4) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.right = "230px";},10);
    }
  }
  
  if (document.getElementById("pocisk"+SId).style.backgroundColor == "yellow") {


    setTimeout(function(){Oblot(SId,Typ);},(speed*500)+1);

    
  }


}
function detekcja(SId,Typ,Pentla) {
  if ((Life > 0)&&((Typ == 1 && protection==1)||(Typ == 2 && protection==2)||(Typ == 3 && protection==3)||(Typ == 4 && protection==4))) {
    document.getElementById("pocisk"+SId).style.display = "none";
if (document.getElementById("pocisk"+(SId+1)).style.backgroundColor != "yellow") {
  
    document.getElementById("pocisk"+(SId+1)).style.transitionDuration = "0s";
    document.getElementById("pocisk"+(SId+1)).style.backgroundColor = "rgb(255, 60, 60)";

}
    score++;
    if (trybV2==1) {
    
      if (score<20) {
        speed -= 0.1;
        czas -= 50;
      
      } else if(score<100){
        czas -= 10;
      
      }else{
        setTimeout(function(){
          document.getElementById("serce").style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"; 
          
          if (MaxHP== 4 && localStorage.getItem("przekazPunktow0")<=1) {
          localStorage.setItem("przekazPunktow0", 1);
            
          } else if (MaxHP== 2 && localStorage.getItem("przekazPunktow0")<=2) {
            localStorage.setItem("przekazPunktow0", 2);
            
          } else if (MaxHP== 1 && localStorage.getItem("przekazPunktow0")<=3) {
            localStorage.setItem("przekazPunktow0", 3);
            
          }
    
          setTimeout(function(){
            return quitBox('quit');
          },2000); 
        },(Kolejnosc+2000));
      }

    } else if (trybV2==2) {
    
      if (score<200) {
        czas -= 1;
        speed -= 0.0025; //win at 200
        SpecialChance += 0.1
      }else{
        setTimeout(function(){
          document.getElementById("serce").style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"; 
          
          if (MaxHP== 4 && localStorage.getItem("przekazPunktow1")<=1) {
          localStorage.setItem("przekazPunktow1", 1);
            
          } else if (MaxHP== 2 && localStorage.getItem("przekazPunktow1")<=2) {
            localStorage.setItem("przekazPunktow1", 2);
            
          } else if (MaxHP== 1 && localStorage.getItem("przekazPunktow1")<=3) {
            localStorage.setItem("przekazPunktow1", 3);
            
          }
    
          setTimeout(function(){
            return quitBox('quit');
          },2000); 
        },(Kolejnosc+2000));
      }

        
    } else if (trybV2==3) {
    
      if (score<300) {
        czas -= 0.5;
        speed -= 0.00066; //win at 300
        SpecialChance += 0.2
      }else{
        setTimeout(function(){
          document.getElementById("serce").style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"; 
          
          if (MaxHP== 4 && localStorage.getItem("przekazPunktow2")<=1) {
          localStorage.setItem("przekazPunktow2", 1);
            
          } else if (MaxHP== 2 && localStorage.getItem("przekazPunktow2")<=2) {
            localStorage.setItem("przekazPunktow2", 2);
            
          } else if (MaxHP== 1 && localStorage.getItem("przekazPunktow3")<=3) {
            localStorage.setItem("przekazPunktow2", 3);
            
          }
    
          setTimeout(function(){
            return quitBox('quit');
          },2000); 
        },(Kolejnosc+2000));
      }

        
    }

    

    document.getElementById("Score").innerHTML = "Points: " + score;
    document.getElementById("tarcza").style.backgroundColor = "red";
    setTimeout(function(){document.getElementById("tarcza").style.backgroundColor = "rgb(20, 20, 100)";},80);
  }else{
    Pentla++;

    if (Pentla<25) {// 50 : 20
      setTimeout(function(){detekcja2(SId,Typ,Pentla);},speed*0.05);  //remember 0.2
        
    }
    /*if (Pentla<100) {
    setTimeout(function(){detekcja(SId,Typ,Pentla);},speed*0.1);//remember 0.2
      
    }*/else{
      
      setTimeout(function(){document.getElementById("pocisk"+SId).style.display = "none";},200);

      if(indestractible == 0){
        if (Life>1) {
          Life--;
          indestractible = 1;
          document.getElementById("serce").style.opacity = "0%";
          setTimeout(function(){document.getElementById("serce").style.opacity = "100%";},100);
          setTimeout(function(){document.getElementById("serce").style.opacity = "0%";},200);
          setTimeout(function(){document.getElementById("serce").style.opacity = "100%";},300);
          setTimeout(function(){document.getElementById("serce").style.opacity = "0%";},400);
          setTimeout(function(){document.getElementById("serce").style.opacity = "100%";},500);
          setTimeout(function(){document.getElementById("serce").style.opacity = "0%";},600);
          setTimeout(function(){document.getElementById("serce").style.opacity = "100%";},700);
          setTimeout(function(){document.getElementById("serce").style.opacity = "0%";},800);
          setTimeout(function(){document.getElementById("serce").style.opacity = "100%";},900);
          if (Life == 3) {
            document.getElementById("serce").style.clipPath = "polygon(100% 12.5%, 93.75% 12.5%, 93.75% 6.25%, 87.5% 6.25%, 87.5% 0%, 75% 0%, 75% 6.25%, 62.5% 6.25%, 62.5% 12.5%, 56.25% 12.5%, 56.25% 25%, 50% 25%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 0% 50%, 0% 62.5%, 12.5% 62.5%, 12.5% 75%, 25% 75%, 25% 87.5%, 37.5% 87.5%, 37.5% 100%, 62.5% 100%, 62.5% 87.5%, 75% 87.5%, 75% 75%, 87.5% 75%, 87.5% 62.5%, 100% 62.5%)";
            
          } else if (Life == 2) {
            document.getElementById("serce").style.clipPath = "polygon(100% 12.5%, 93.75% 12.5%, 93.75% 6.25%, 87.5% 6.25%, 87.5% 0%, 75% 0%, 75% 6.25%, 62.5% 6.25%, 62.5% 12.5%, 56.25% 12.5%, 56.25% 25%, 50% 25%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 100%, 62.5% 100%, 62.5% 87.5%, 75% 87.5%, 75% 75%, 87.5% 75%, 87.5% 62.5%, 100% 62.5%)";
            
          } else if (Life == 1) {
            if (MaxHP==2) {
              document.getElementById("serce").style.clipPath = "polygon(100% 12.5%, 93.75% 12.5%, 93.75% 6.25%, 87.5% 6.25%, 87.5% 0%, 75% 0%, 75% 6.25%, 62.5% 6.25%, 62.5% 12.5%, 56.25% 12.5%, 56.25% 25%, 50% 25%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 100%, 62.5% 100%, 62.5% 87.5%, 75% 87.5%, 75% 75%, 87.5% 75%, 87.5% 62.5%, 100% 62.5%)";
            } else {
              document.getElementById("serce").style.clipPath = "polygon(100% 12.5%, 93.75% 12.5%, 93.75% 6.25%, 87.5% 6.25%, 87.5% 0%, 75% 0%, 75% 6.25%, 62.5% 6.25%, 62.5% 12.5%, 56.25% 12.5%, 56.25% 25%, 50% 25%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 100% 50%)";
            }
            
            
          } 
          setTimeout(function(){indestractible = 0;},1000);
        } else {

          document.getElementById("serce").style.opacity = "0%";
          setTimeout(function(){return quitBox('quit');},200);
        
        }
      }
    }
  
  }

}
function AutoMode(Typ){
  if (Typ == 1) {
  protection=1;
  
  document.getElementById("tarcza").style.clipPath = "polygon(50% 0, 0 15%, 100% 15%)";
    
  } else if (Typ == 2) {
  protection=2;
  
  document.getElementById("tarcza").style.clipPath = "polygon(100% 50%, 85% 0, 85% 100%)";
    
  } else if (Typ == 3) {
  protection=3;

  document.getElementById("tarcza").style.clipPath = "polygon(50% 100%, 100% 85%, 0 85%)";
    
  } else if (Typ == 4) {
  protection=4;

  document.getElementById("tarcza").style.clipPath = "polygon(0 50%, 15% 100%, 15% 0)";
    
  }
}

  var opcja = 1;
  var tryb = 4;
  var LifeNumber = 4;
  
  
  

function atack(kierunek, kolorStrzalki, szybkosc, czekanie) {

  
  var original = document.getElementById('pocisk');
  var clone = original.cloneNode(true);
  i++; 
  clone.id = "pocisk" + i; 
  original.parentNode.appendChild(clone);

  document.getElementById("pocisk"+i).style.backgroundColor = "rgb(130, 255, 255)";
  document.getElementById("pocisk"+i).style.position = "absolute";
  document.getElementById("pocisk"+i).style.width = "48px";
  document.getElementById("pocisk"+i).style.height = "48px";
  if (!(kolorStrzalki == 2 || kolorStrzalki == 5)) {
  document.getElementById("pocisk"+i).style.transition = "top "+szybkosc+"s linear, right "+szybkosc+"s linear, bottom "+szybkosc+"s linear, left "+szybkosc+"s linear";
  }else if(kolorStrzalki == 2){
    document.getElementById("pocisk"+i).style.transitionDuration = (szybkosc*4/8)+"s";
    document.getElementById("pocisk"+i).style.transitionTimingFunction = "linear";

  }else{
    document.getElementById("pocisk"+i).style.transitionDuration = (czekanie/2)+"s";
    document.getElementById("pocisk"+i).style.transitionTimingFunction = "linear";
    document.getElementById("pocisk"+i).style.backgroundColor = "darkmagenta";

  }
    
  if (kolorStrzalki == 2) {
    document.getElementById("pocisk"+i).style.backgroundColor = "yellow";
    
  }
  
  if (kolorStrzalki == 3) {
  document.getElementById("pocisk"+i).style.backgroundColor = "rgb(255, 60, 60)";
    
  }
  if (kolorStrzalki == 4) {
    document.getElementById("pocisk"+i).style.backgroundColor = "rgb(131, 255, 255)";
      
    }
  if (kolorStrzalki == 2) {
  
if (kierunek == 1) {
      

      document.getElementById("pocisk"+i).style.clipPath = "polygon(20% 75%, 40% 75%, 40% 0, 60% 0, 60% 75%, 80% 75%, 50% 100%)";
      document.getElementById("pocisk"+i).style.bottom = "10px";
      document.getElementById("pocisk"+i).style.left = "calc(50% - 24px)";
      setTimeout(function(){DrogaStrzalki2(i,1, szybkosc, czekanie);},1);
      

    } else if (kierunek == 2) {

      document.getElementById("pocisk"+i).style.clipPath = "polygon(25% 20%, 25% 40%, 100% 40%, 100% 60%, 25% 60%, 25% 80%, 0% 50%)";
      document.getElementById("pocisk"+i).style.left = "10px";
      document.getElementById("pocisk"+i).style.bottom = "calc(50% - 24px)";
      setTimeout(function(){DrogaStrzalki2(i,2, szybkosc, czekanie);},1);
      
    } else if (kierunek == 3) {

      document.getElementById("pocisk"+i).style.clipPath = "polygon(80% 25%, 60% 25%, 60% 100%, 40% 100%, 40% 25%, 20% 25%, 50% 0%)";
      document.getElementById("pocisk"+i).style.top = "10px";
      document.getElementById("pocisk"+i).style.right = "calc(50% - 24px)";
      setTimeout(function(){DrogaStrzalki2(i,3, szybkosc, czekanie);},1);
      
    } else if (kierunek == 4) {

      document.getElementById("pocisk"+i).style.clipPath = "polygon(75% 80%, 75% 60%, 0% 60%, 0% 40%, 75% 40%, 75% 20%, 100% 50%)";
      document.getElementById("pocisk"+i).style.right = "10px";
      document.getElementById("pocisk"+i).style.top = "calc(50% - 24px)";
      setTimeout(function(){DrogaStrzalki2(i,4, szybkosc, czekanie);},1);



      
    }
    
} else if (kolorStrzalki == 5) {
  


  if (kierunek == 1) {
      

    document.getElementById("pocisk"+i).style.clipPath = "polygon(80% 25%, 60% 25%, 60% 25%, 40% 25%, 40% 25%, 20% 25%, 50% 0%)";
    document.getElementById("pocisk"+i).style.top = "10px";
    document.getElementById("pocisk"+i).style.right = "calc(50% - 24px)";
    setTimeout(function(){Dash(i,1, szybkosc, czekanie);},1);
    

  } else if (kierunek == 2) {

    document.getElementById("pocisk"+i).style.clipPath = "polygon(75% 80%, 75% 60%, 75% 60%, 75% 40%, 75% 40%, 75% 20%, 100% 50%)";
    document.getElementById("pocisk"+i).style.right = "10px";
    document.getElementById("pocisk"+i).style.top = "calc(50% - 24px)";
    setTimeout(function(){Dash(i,2, szybkosc, czekanie);},1);
    
  } else if (kierunek == 3) {

    document.getElementById("pocisk"+i).style.clipPath = "polygon(20% 75%, 40% 75%, 40% 75%, 60% 75%, 60% 75%, 80% 75%, 50% 100%)";
    document.getElementById("pocisk"+i).style.bottom = "10px";
    document.getElementById("pocisk"+i).style.left = "calc(50% - 24px)";
    setTimeout(function(){Dash(i,3, szybkosc, czekanie);},1);
    
  } else if (kierunek == 4) {

    document.getElementById("pocisk"+i).style.clipPath = "polygon(25% 20%, 25% 40%, 25% 40%, 25% 60%, 25% 60%, 25% 80%, 0% 50%)";
    document.getElementById("pocisk"+i).style.left = "10px";
    document.getElementById("pocisk"+i).style.bottom = "calc(50% - 24px)";
    setTimeout(function(){Dash(i,4, szybkosc, czekanie);},1);



    
  }


  
} else{
  if (kierunek == 1) {
      

      
    document.getElementById("pocisk"+i).style.clipPath = "polygon(20% 75%, 40% 75%, 40% 0, 60% 0, 60% 75%, 80% 75%, 50% 100%)";
    document.getElementById("pocisk"+i).style.top = "10px";
    document.getElementById("pocisk"+i).style.right = "calc(50% - 24px)";
    setTimeout(function(){DrogaStrzalki2(i, 1, szybkosc, czekanie);},1);
    

  } else if (kierunek == 2) {

    
    document.getElementById("pocisk"+i).style.clipPath = "polygon(25% 20%, 25% 40%, 100% 40%, 100% 60%, 25% 60%, 25% 80%, 0% 50%)";
    document.getElementById("pocisk"+i).style.right = "10px";
    document.getElementById("pocisk"+i).style.top = "calc(50% - 24px)";
    setTimeout(function(){DrogaStrzalki2(i,2, szybkosc, czekanie);},1);
    
  } else if (kierunek == 3) {

    
    document.getElementById("pocisk"+i).style.clipPath = "polygon(80% 25%, 60% 25%, 60% 100%, 40% 100%, 40% 25%, 20% 25%, 50% 0%)";
    document.getElementById("pocisk"+i).style.bottom = "10px";
    document.getElementById("pocisk"+i).style.left = "calc(50% - 24px)";
    setTimeout(function(){DrogaStrzalki2(i,3, szybkosc, czekanie);},1);
    
  } else if (kierunek == 4) {

    
    document.getElementById("pocisk"+i).style.clipPath = "polygon(75% 80%, 75% 60%, 0% 60%, 0% 40%, 75% 40%, 75% 20%, 100% 50%)";
    document.getElementById("pocisk"+i).style.left = "10px";
    document.getElementById("pocisk"+i).style.bottom = "calc(50% - 24px)";
    setTimeout(function(){DrogaStrzalki2(i,4, szybkosc, czekanie);},1);



    
  }
  
}
  




}




function DrogaStrzalki2(SId,Typ, szybkosc2,czekanie2) {

  setTimeout(function(){

  setTimeout(function(){document.getElementById("pocisk"+SId).style.display = "none";},(szybkosc2*1000));
  setTimeout(function(){detekcja2(SId,Typ,0, szybkosc2);},(szybkosc2*790)); //4/5 = 16/20 = 3/4 około
  if (bot == 1) {
  setTimeout(function(){AutoMode(Typ);},((szybkosc2*790)-1));//210
    
  }
  
  if (document.getElementById("pocisk"+SId).style.backgroundColor != "yellow") {
    if (Typ==1) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.top = "368px";},1);
    } else if (Typ==2) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.right = "368px";},1);
    } else if (Typ==3) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.bottom = "368px";},1);
    } else if (Typ==4) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.left = "368px";},1);
    }
  }else{
    if (Typ==1) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.bottom = "230px";},1);
    } else if (Typ==2) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.left = "230px";},1);
    } else if (Typ==3) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.top = "230px";},1);
    } else if (Typ==4) {
      setTimeout(function(){document.getElementById("pocisk"+SId).style.right = "230px";},1);
    }
  }
  
  if (document.getElementById("pocisk"+SId).style.backgroundColor == "yellow") {


    setTimeout(function(){Oblot2(SId, Typ, szybkosc2);},(szybkosc2*500)+1);

    
  }

  },czekanie2);

}





function Oblot2(SId,Typ,szybkosc2) {
  
  document.getElementById("pocisk"+SId).style.transitionDuration = (szybkosc2*1/16)+"s";
  setTimeout(function(){
  if (Typ==1) {
    document.getElementById("pocisk"+SId).style.bottom = "376px";
    document.getElementById("pocisk"+SId).style.left = "230px";
  } else if (Typ==2) {
    document.getElementById("pocisk"+SId).style.left = "376px";
    document.getElementById("pocisk"+SId).style.bottom = "230px";
  } else if (Typ==3) {
    document.getElementById("pocisk"+SId).style.top = "376px";
    document.getElementById("pocisk"+SId).style.right = "230px";
  } else if (Typ==4) {
    document.getElementById("pocisk"+SId).style.right = "376px";
    document.getElementById("pocisk"+SId).style.top = "230px";
  }
},1);
setTimeout(function(){
  if (Typ==1) {
    document.getElementById("pocisk"+SId).style.bottom = "522px";
    document.getElementById("pocisk"+SId).style.left = "calc(50% - 24px)";
  } else if (Typ==2) {
    document.getElementById("pocisk"+SId).style.left = "522px";
    document.getElementById("pocisk"+SId).style.bottom = "calc(50% - 24px)";
  } else if (Typ==3) {
    document.getElementById("pocisk"+SId).style.top = "522px";
    document.getElementById("pocisk"+SId).style.right = "calc(50% - 24px)";
  } else if (Typ==4) {
    document.getElementById("pocisk"+SId).style.right = "522px";
    document.getElementById("pocisk"+SId).style.top = "calc(50% - 24px)";
  }
},(szybkosc2*1000/16)+2);
setTimeout(function(){

  document.getElementById("pocisk"+SId).style.transitionDuration = (szybkosc2*3/8)+"s";

  setTimeout(function(){
    if (Typ==1) {
      document.getElementById("pocisk"+SId).style.bottom = "400px";
    } else if (Typ==2) {
      document.getElementById("pocisk"+SId).style.left = "400px";
    } else if (Typ==3) {
      document.getElementById("pocisk"+SId).style.top = "400px";
    } else if (Typ==4) {
      document.getElementById("pocisk"+SId).style.right = "400px";
    }
  },1);
},(szybkosc2*2000/16)+3);

}
function Dash(SId,Typ, szybkosc2,czekanie2) {
  setTimeout(function(){

  setTimeout(function(){document.getElementById("pocisk"+SId).style.display = "none";},((szybkosc2+czekanie2)*1000)+100);
  setTimeout(function(){detekcja2(SId,Typ,0, szybkosc2);},((szybkosc2*790)+(czekanie2*1000)+100)); //4/5 = 16/20 = 3/4 około
  if (bot == 1) {
  setTimeout(function(){AutoMode(Typ);},(((szybkosc2*790)+(czekanie2*1000))+99));//210
  }

  if (Typ==1) {
    document.getElementById("pocisk"+SId).style.clipPath = "polygon(75% 80%, 75% 60%, 75% 60%, 75% 40%, 75% 40%, 75% 20%, 100% 50%)";

    setTimeout(function(){
      document.getElementById("pocisk"+SId).style.clipPath = "polygon(20% 75%, 40% 75%, 40% 75%, 60% 75%, 60% 75%, 80% 75%, 50% 100%)";

      setTimeout(function(){
      document.getElementById("pocisk"+SId).style.transitionDuration = "0.0001s";
      setTimeout(function(){
        document.getElementById("pocisk"+SId).style.backgroundColor = "rgb(220, 80, 220)";
        setTimeout(function(){
          document.getElementById("pocisk"+SId).style.transitionDuration = szybkosc2 + "s";
          setTimeout(function(){
          document.getElementById("pocisk"+SId).style.top = "368px";
        
          document.getElementById("pocisk"+SId).style.clipPath = "polygon(20% 75%, 40% 75%, 40% -300%, 60% -300%, 60% 75%, 80% 75%, 50% 100%)";

        },1);
        },100);
      },1);

        
        
      },czekanie2*1000/2+1);
    },czekanie2*1000/2+1);

  } else if (Typ==2) {
    document.getElementById("pocisk"+SId).style.clipPath = "polygon(20% 75%, 40% 75%, 40% 75%, 60% 75%, 60% 75%, 80% 75%, 50% 100%)";

    setTimeout(function(){
      document.getElementById("pocisk"+SId).style.clipPath = "polygon(25% 20%, 25% 40%, 25% 40%, 25% 60%, 25% 60%, 25% 80%, 0% 50%)";
      setTimeout(function(){
        document.getElementById("pocisk"+SId).style.transitionDuration = "0.0001s";
        setTimeout(function(){
          document.getElementById("pocisk"+SId).style.backgroundColor = "rgb(220, 80, 220)";
        setTimeout(function(){
          document.getElementById("pocisk"+SId).style.transitionDuration = szybkosc2 + "s";
          setTimeout(function(){
          document.getElementById("pocisk"+SId).style.right = "368px";
        
          document.getElementById("pocisk"+SId).style.clipPath = "polygon(25% 20%, 25% 40%, 400% 40%, 400% 60%, 25% 60%, 25% 80%, 0% 50%)";

        },1);
        },100);
        },1);
        
        
  
      },czekanie2*1000/2+1);
    },czekanie2*1000/2+1);

  } else if (Typ==3) {
    document.getElementById("pocisk"+SId).style.clipPath = "polygon(25% 20%, 25% 40%, 25% 40%, 25% 60%, 25% 60%, 25% 80%, 0% 50%)";

    setTimeout(function(){
      document.getElementById("pocisk"+SId).style.clipPath = "polygon(80% 25%, 60% 25%, 60% 25%, 40% 25%, 40% 25%, 20% 25%, 50% 0%)";
      setTimeout(function(){
        document.getElementById("pocisk"+SId).style.transitionDuration = "0.0001s";
        setTimeout(function(){
          document.getElementById("pocisk"+SId).style.backgroundColor = "rgb(220, 80, 220)";
        setTimeout(function(){
          document.getElementById("pocisk"+SId).style.transitionDuration = szybkosc2 + "s";
          setTimeout(function(){
          document.getElementById("pocisk"+SId).style.bottom = "368px";
        
          document.getElementById("pocisk"+SId).style.clipPath = "polygon(80% 25%, 60% 25%, 60% 400%, 40% 400%, 40% 25%, 20% 25%, 50% 0%)";

        },1);
        },100);
        },1);
          
        
        
  
      },czekanie2*1000/2+1);
    },czekanie2*1000/2+1);
  
  } else if (Typ==4) {
    document.getElementById("pocisk"+SId).style.clipPath = "polygon(80% 25%, 60% 25%, 60% 25%, 40% 25%, 40% 25%, 20% 25%, 50% 0%)";

    setTimeout(function(){
      document.getElementById("pocisk"+SId).style.clipPath = "polygon(75% 80%, 75% 60%, 75% 60%, 75% 40%, 75% 40%, 75% 20%, 100% 50%)";
      setTimeout(function(){
        document.getElementById("pocisk"+SId).style.transitionDuration = "0.0001s";
        setTimeout(function(){
          document.getElementById("pocisk"+SId).style.backgroundColor = "rgb(220, 80, 220)";
          setTimeout(function(){
            document.getElementById("pocisk"+SId).style.transitionDuration = szybkosc2 + "s";
            setTimeout(function(){
          document.getElementById("pocisk"+SId).style.left = "368px";
        
          document.getElementById("pocisk"+SId).style.clipPath = "polygon(75% 80%, 75% 60%, -300% 60%, -300% 40%, 75% 40%, 75% 20%, 100% 50%)";

        },1);
        },100);
        },1);

        

      },czekanie2*1000/2+1);
    },czekanie2*1000/2+1);
  
  }
  },15);


}






function detekcja2(SId,Typ,Pentla, szybkosc2) {
  if ((Life > 0)&&((Typ == 1 && protection==1)||(Typ == 2 && protection==2)||(Typ == 3 && protection==3)||(Typ == 4 && protection==4))) {
    document.getElementById("pocisk"+SId).style.display = "none";

    score++;
    
    

    document.getElementById("Score").innerHTML = "Points: " + score;
    document.getElementById("tarcza").style.backgroundColor = "red";
    setTimeout(function(){document.getElementById("tarcza").style.backgroundColor = "rgb(20, 20, 100)";},80);
    if (!(document.getElementById("pocisk"+(SId+1)).style.backgroundColor == "yellow" || document.getElementById("pocisk"+(SId+1)).style.backgroundColor == "rgb(131, 255, 255)" || document.getElementById("pocisk"+(SId+1)).style.backgroundColor == "darkmagenta")) {
  
    document.getElementById("pocisk"+(SId+1)).style.backgroundColor = "rgb(255, 60, 60)";

    }
  }else{
    Pentla++;
    if (Pentla<25) {// 50 : 20
    setTimeout(function(){detekcja2(SId,Typ,Pentla, szybkosc2);},szybkosc2*0.05);  //remember 0.2
      
    }else{
      setTimeout(function(){document.getElementById("pocisk"+SId).style.display = "none";},200);

      if(indestractible == 0){
        if (Life>1) {
          Life--;
          indestractible = 1;
          document.getElementById("serce").style.opacity = "0%";
          setTimeout(function(){document.getElementById("serce").style.opacity = "100%";},100);
          setTimeout(function(){document.getElementById("serce").style.opacity = "0%";},200);
          setTimeout(function(){document.getElementById("serce").style.opacity = "100%";},300);
          setTimeout(function(){document.getElementById("serce").style.opacity = "0%";},400);
          setTimeout(function(){document.getElementById("serce").style.opacity = "100%";},500);
          setTimeout(function(){document.getElementById("serce").style.opacity = "0%";},600);
          setTimeout(function(){document.getElementById("serce").style.opacity = "100%";},700);
          setTimeout(function(){document.getElementById("serce").style.opacity = "0%";},800);
          setTimeout(function(){document.getElementById("serce").style.opacity = "100%";},900);
          if (Life == 3) {
            document.getElementById("serce").style.clipPath = "polygon(100% 12.5%, 93.75% 12.5%, 93.75% 6.25%, 87.5% 6.25%, 87.5% 0%, 75% 0%, 75% 6.25%, 62.5% 6.25%, 62.5% 12.5%, 56.25% 12.5%, 56.25% 25%, 50% 25%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 0% 50%, 0% 62.5%, 12.5% 62.5%, 12.5% 75%, 25% 75%, 25% 87.5%, 37.5% 87.5%, 37.5% 100%, 62.5% 100%, 62.5% 87.5%, 75% 87.5%, 75% 75%, 87.5% 75%, 87.5% 62.5%, 100% 62.5%)";
            
          } else if (Life == 2) {
            document.getElementById("serce").style.clipPath = "polygon(100% 12.5%, 93.75% 12.5%, 93.75% 6.25%, 87.5% 6.25%, 87.5% 0%, 75% 0%, 75% 6.25%, 62.5% 6.25%, 62.5% 12.5%, 56.25% 12.5%, 56.25% 25%, 50% 25%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 100%, 62.5% 100%, 62.5% 87.5%, 75% 87.5%, 75% 75%, 87.5% 75%, 87.5% 62.5%, 100% 62.5%)";
            
          } else if (Life == 1) {
            if (MaxHP==2) {
              document.getElementById("serce").style.clipPath = "polygon(100% 12.5%, 93.75% 12.5%, 93.75% 6.25%, 87.5% 6.25%, 87.5% 0%, 75% 0%, 75% 6.25%, 62.5% 6.25%, 62.5% 12.5%, 56.25% 12.5%, 56.25% 25%, 50% 25%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 100%, 62.5% 100%, 62.5% 87.5%, 75% 87.5%, 75% 75%, 87.5% 75%, 87.5% 62.5%, 100% 62.5%)";
            } else {
              document.getElementById("serce").style.clipPath = "polygon(100% 12.5%, 93.75% 12.5%, 93.75% 6.25%, 87.5% 6.25%, 87.5% 0%, 75% 0%, 75% 6.25%, 62.5% 6.25%, 62.5% 12.5%, 56.25% 12.5%, 56.25% 25%, 50% 25%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 100% 50%)";
            }
            
            
          } 
          setTimeout(function(){indestractible = 0;},1000);
        } else {

          document.getElementById("serce").style.opacity = "0%";
          setTimeout(function(){return quitBox('quit');},200);
        
        }
      }
    }
  
  }

}


var Kolejnosc = 0;
var KolejnoscT = 0;


/*czas -= 0.5;
speed -= 0.00066;
SpecialChance += 0.2;*/


  //atack(kierunek, kolorStrzalki, szybkosc, czekanie)
  //speed = 5; 
  //czas = 2000; 
  //SpecialChance = 0; 
  //kolorStrzalki: 1 = normal, 2 = yellow, 3 = red, 4 = blue., 5 = purple
function START2() {
  if (trybV2==4) {

    document.getElementById("postep2").style.transitionDuration = "77s"; //73980
    setTimeout(function(){ 
      document.getElementById("postep2").style.clipPath = "polygon(100% 0, 0 0, 0 100%, 100% 100%)"; 
    },1);

    PreAtack(1, 3, 1.5, 10, 500);
    PreAtack(1, 1, 1.5, 10, 500);
    PreAtack(1, 1, 1.5, 10, 500);
    
    PreAtack(1, 3, 1.5, 10, 1500);
    PreAtack(1, 1, 1.5, 10, 500);
    PreAtack(4, 1, 1.5, 10, 500);
    PreAtack(4, 1, 1.5, 10, 500);
    PreAtack(2, 1, 1.5, 10, 500);
    PreAtack(2, 1, 1.5, 10, 500);
    
    PreAtack(4, 3, 1.5, 10, 1500);
    PreAtack(2, 1, 1.5, 10, 500);
    PreAtack(4, 1, 1.5, 10, 500);
    PreAtack(2, 1, 1.5, 10, 500);
    PreAtack(2, 1, 1.5, 10, 500);
    PreAtack(4, 1, 1.5, 10, 500);
    PreAtack(4, 1, 1.5, 10, 500);
    PreAtack(3, 1, 1.5, 10, 500);
    
    PreAtack(1, 3, 1, 10, 2000);
    PreAtack(2, 1, 1, 10, 400);
    PreAtack(3, 1, 1, 10, 400);
    PreAtack(4, 1, 1, 10, 400);
    PreAtack(1, 1, 1, 10, 400);
    PreAtack(2, 1, 1, 10, 400);
    PreAtack(3, 1, 1, 10, 400);
    PreAtack(4, 1, 1, 10, 400);
    PreAtack(1, 1, 1, 10, 300);
    PreAtack(1, 1, 1, 10, 300);
    PreAtack(1, 1, 1, 10, 300);
    PreAtack(1, 1, 1, 10, 300);
    
    PreAtack(4, 3, 1, 10, 1500);
    PreAtack(1, 1, 1, 10, 300);
    PreAtack(2, 1, 1, 10, 300);
    PreAtack(1, 1, 1, 10, 300);
    PreAtack(1, 1, 1, 10, 300);
    PreAtack(4, 1, 1, 10, 300);
    PreAtack(1, 1, 1, 10, 300);
    PreAtack(3, 1, 1, 10, 300);
    
    PreAtack(4, 3, 1, 10, 1500);
    PreAtack(1, 1, 1, 10, 300);
    PreAtack(3, 1, 1, 10, 300);
    PreAtack(2, 1, 1, 10, 300);
    PreAtack(4, 1, 1, 10, 300);
    PreAtack(1, 1, 1, 10, 300);
    PreAtack(3, 1, 1, 10, 300);
    PreAtack(2, 1, 1, 10, 300);
    PreAtack(3, 1, 1, 10, 300);
    PreAtack(1, 1, 1, 10, 300);
    
    PreAtack(1, 3, 0.8, 10, 2500);
    PreAtack(3, 1, 0.8, 10, 300);
    PreAtack(1, 1, 0.8, 10, 300);
    PreAtack(3, 1, 0.8, 10, 300);
    PreAtack(3, 1, 0.8, 10, 300);
    PreAtack(1, 1, 0.8, 10, 300);
    PreAtack(3, 1, 0.8, 10, 300);
    PreAtack(1, 1, 0.8, 10, 300);
    
    PreAtack(4, 3, 3.2, 10, 1500);
    PreAtack(1, 4, 0.7, 10, 300);
    PreAtack(2, 4, 0.7, 10, 300);
    PreAtack(3, 4, 0.7, 10, 300);
    PreAtack(1, 4, 0.7, 10, 300);
    PreAtack(2, 4, 0.7, 10, 300);
    PreAtack(3, 4, 0.7, 10, 300);
    
    PreAtack(4, 3, 1, 10, 1500);
    PreAtack(4, 1, 0.8, 10, 20);
    PreAtack(4, 1, 0.6, 10, 20);
    PreAtack(2, 3, 1, 10, 500);
    PreAtack(2, 1, 0.8, 10, 20);
    PreAtack(2, 1, 0.6, 10, 20);
    PreAtack(3, 1, 0.6, 10, 600);
    PreAtack(1, 1, 0.6, 10, 300);
    PreAtack(3, 1, 0.6, 10, 300);
    PreAtack(1, 1, 0.6, 10, 300);

    PreAtack(1, 3, 0.8, 10, 1500);
    PreAtack(1, 1, 0.8, 10, 300);
    PreAtack(2, 1, 0.8, 10, 300);
    PreAtack(1, 1, 0.8, 10, 300);
    PreAtack(1, 1, 0.8, 10, 300);
    PreAtack(2, 1, 0.8, 10, 300);
    PreAtack(2, 1, 0.8, 10, 300);
    PreAtack(3, 1, 0.8, 10, 300);
    PreAtack(2, 1, 0.8, 10, 300);
    PreAtack(2, 1, 0.8, 10, 300);
    PreAtack(2, 1, 0.8, 10, 300);
    PreAtack(2, 1, 0.8, 10, 300);

    PreAtack(2, 3, 0.8, 10, 2500);
    PreAtack(4, 1, 0.8, 10, 300);
    PreAtack(2, 1, 0.8, 10, 300);
    PreAtack(4, 1, 0.8, 10, 300);
    PreAtack(4, 2, 1, 10, 300);
    
    PreAtack(4, 3, 0.8, 10, 1500);
    PreAtack(2, 1, 0.8, 10, 300);
    PreAtack(1, 2, 1, 10, 300);
    PreAtack(3, 1, 0.8, 10, 300);
    PreAtack(4, 1, 0.8, 10, 300);
    PreAtack(2, 1, 0.8, 10, 300);
    PreAtack(1, 1, 0.8, 10, 300);
    PreAtack(1, 2, 0.8, 10, 300);
    
    PreAtack(4, 3, 0.7, 10, 1500);
    PreAtack(3, 1, 0.7, 10, 300);
    PreAtack(2, 1, 0.7, 10, 300);
    PreAtack(1, 1, 0.7, 10, 200);
    PreAtack(4, 2, 1, 10, 350);
    PreAtack(3, 2, 1, 10, 350);
    PreAtack(2, 2, 1, 10, 350);
    PreAtack(1, 2, 1, 10, 350);
    
    PreAtack(2, 3, 0.7, 10, 1500);
    PreAtack(2, 1, 0.7, 10, 300);
    PreAtack(4, 1, 0.7, 10, 300);
    PreAtack(4, 1, 0.7, 10, 300);
    PreAtack(3, 1, 0.7, 10, 300);
    PreAtack(3, 2, 1, 10, 200);
    PreAtack(1, 1, 0.7, 10, 500);
    PreAtack(1, 2, 1, 10, 200);
    PreAtack(3, 1, 0.8, 10, 500);
    PreAtack(2, 1, 0.7, 10, 400);
    PreAtack(4, 1, 0.7, 10, 300);
    
    PreAtack(1, 3, 0.6, 10, 1500);
    PreAtack(1, 1, 0.6, 10, 300);
    PreAtack(3, 1, 0.6, 10, 200);
    PreAtack(2, 2, 1, 10, 300);
    PreAtack(3, 1, 0.6, 10, 700);
    PreAtack(4, 1, 0.6, 10, 300);
    PreAtack(4, 1, 0.6, 10, 200);
    PreAtack(4, 2, 1, 10, 300);
    
    PreAtack(1, 3, 0.5, 10, 1500);
    PreAtack(1, 1, 0.5, 10, 300);
    PreAtack(3, 1, 0.5, 10, 250);
    PreAtack(4, 1, 0.5, 10, 250);
    PreAtack(1, 1, 0.5, 10, 250);
    PreAtack(1, 1, 0.5, 10, 250);
    PreAtack(3, 1, 0.5, 10, 250);
    PreAtack(2, 1, 0.5, 10, 250);
    PreAtack(1, 1, 0.5, 10, 250);
    PreAtack(3, 1, 0.5, 10, 250);
    
    PreAtack(4, 3, 0.8, 10, 1500);
    PreAtack(4, 1, 0.8, 10, 300);
    PreAtack(4, 1, 0.8, 10, 300);
    PreAtack(4, 1, 0.8, 10, 200);
    PreAtack(4, 1, 0.8, 10, 200);
    PreAtack(4, 1, 0.8, 10, 300);
    PreAtack(4, 2, 1, 10, 300);
    PreAtack(4, 1, 0.8, 10, 300);
    PreAtack(4, 2, 1, 10, 300);
    PreAtack(2, 1, 0.8, 10, 300);
    PreAtack(2, 2, 1, 10, 300);
    PreAtack(2, 1, 0.8, 10, 300);
    PreAtack(2, 2, 1, 10, 300);

    PreAtack(4, 2, 1, 10, 1800);
    PreAtack(3, 2, 1, 10, 300);
    PreAtack(2, 2, 1, 10, 300);
    PreAtack(1, 2, 1, 10, 300);
    PreAtack(4, 2, 1, 10, 300);
    PreAtack(3, 2, 1, 10, 300);
    PreAtack(2, 2, 1, 10, 300);
    PreAtack(1, 2, 1, 10, 300);
    PreAtack(4, 2, 1, 10, 300);
    PreAtack(3, 2, 1, 10, 300);
    PreAtack(2, 2, 1, 10, 300);
    PreAtack(1, 2, 1, 10, 300);


    setTimeout(function(){
      document.getElementById("serce").style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"; 
      
      if (MaxHP== 4 && localStorage.getItem("przekazPunktow3")<=1) {
      localStorage.setItem("przekazPunktow3", 1);
        
      } else if (MaxHP== 2 && localStorage.getItem("przekazPunktow3")<=2) {
        localStorage.setItem("przekazPunktow3", 2);
        
      } else if (MaxHP== 1 && localStorage.getItem("przekazPunktow3")<=3) {
        localStorage.setItem("przekazPunktow3", 3);
        
      }

      setTimeout(function(){
        return quitBox('quit');
      },2000); 
    },(Kolejnosc+2000));
    




  } if (trybV2==5) {

    document.getElementById("postep2").style.transitionDuration = "70s";
    setTimeout(function(){ 
      document.getElementById("postep2").style.clipPath = "polygon(100% 0, 0 0, 0 100%, 100% 100%)"; 
    },1);

    PreAtack(1, 3, 1.5, 10, 500);
    PreAtack(1, 1, 1.5, 10, 500);
    PreAtack(1, 1, 1.5, 10, 500);
    PreAtack(2, 1, 0.6, 10, 850);
    PreAtack(3, 1, 0.6, 10, 300);
    PreAtack(4, 1, 0.6, 10, 300);
    PreAtack(1, 1, 0.6, 10, 300);
    PreAtack(4, 1, 0.6, 10, 300);
    PreAtack(3, 1, 0.6, 10, 300);
    PreAtack(2, 1, 0.6, 10, 300);
    PreAtack(3, 1, 0.6, 10, 300);
    PreAtack(4, 1, 0.6, 10, 300);
    PreAtack(1, 1, 0.6, 10, 300);

    PreAtack(4, 3, 0.5, 10, 1500);
    PreAtack(2, 1, 0.5, 10, 250);
    PreAtack(4, 1, 0.5, 10, 250);
    PreAtack(4, 1, 0.5, 10, 250);
    PreAtack(2, 1, 0.5, 10, 250);
    PreAtack(2, 1, 0.5, 10, 250);
    PreAtack(4, 1, 0.5, 10, 250);
    PreAtack(2, 1, 0.5, 10, 250);
    PreAtack(2, 1, 0.5, 10, 250);
    PreAtack(4, 1, 0.5, 10, 250);
    PreAtack(2, 1, 0.5, 10, 250);
    PreAtack(4, 1, 0.5, 10, 250);
    PreAtack(2, 1, 0.5, 10, 250);
    PreAtack(4, 1, 0.5, 10, 250);

    PreAtack(2, 3, 3.5, 10, 1500);
    PreAtack(1, 1, 3.5, 10, 300);
    PreAtack(4, 1, 3.5, 10, 300);
    PreAtack(2, 1, 3.5, 10, 300);
    PreAtack(2, 1, 3.5, 10, 300);
    PreAtack(2, 1, 3.5, 10, 300);
    PreAtack(2, 1, 3.5, 10, 300);
    PreAtack(2, 1, 3.5, 10, 300);
    PreAtack(1, 1, 3.5, 10, 300);
    PreAtack(4, 1, 3.5, 10, 300);
    PreAtack(2, 1, 3.5, 10, 300);
    PreAtack(4, 1, 3.5, 10, 300);
    PreAtack(2, 1, 3.5, 10, 300);
    PreAtack(4, 1, 3.5, 10, 300);
    PreAtack(1, 1, 3.5, 10, 300);
    PreAtack(1, 1, 3.5, 10, 300);
    PreAtack(4, 1, 3.5, 10, 300);
    PreAtack(2, 1, 3.5, 10, 300);


    PreAtack(4, 4, 1, 10, 5000);
    PreAtack(1, 3, 1.4, 10, 25);
    PreAtack(2, 4, 1, 10, 800);
    PreAtack(3, 3, 1.4, 10, 25);
    PreAtack(4, 4, 1.2, 10, 1000);
    PreAtack(2, 4, 1, 10, 400);
    PreAtack(1, 3, 2, 10, 25);
    PreAtack(4, 4, 1, 10, 600);
    PreAtack(3, 3, 1.4, 10, 25);

    PreAtack(1, 3, 0.35, 10, 2000);
    PreAtack(1, 1, 0.35, 10, 200);
    PreAtack(1, 1, 0.35, 10, 200);
    PreAtack(1, 1, 0.35, 10, 200);
    PreAtack(4, 3, 0.35, 10, 250);
    PreAtack(1, 1, 0.35, 10, 200);
    PreAtack(1, 1, 0.35, 10, 200);
    PreAtack(1, 1, 0.35, 10, 200);
    PreAtack(1, 1, 0.35, 10, 200);
    PreAtack(2, 3, 0.35, 10, 250);
    PreAtack(1, 1, 0.35, 10, 200);
    PreAtack(1, 1, 0.35, 10, 200);
    PreAtack(1, 1, 0.35, 10, 200);
    PreAtack(4, 3, 0.35, 10, 250);
    PreAtack(1, 1, 0.35, 10, 200);
    PreAtack(1, 1, 0.35, 10, 200);
    PreAtack(1, 1, 0.35, 10, 200);
    PreAtack(2, 3, 0.35, 10, 250);
    PreAtack(1, 1, 0.35, 10, 200);
    PreAtack(1, 1, 0.35, 10, 200);
    PreAtack(1, 1, 0.35, 10, 200);
    
    PreAtack(4, 3, 1, 10, 1000);
    PreAtack(1, 1, 1, 10, 400);
    PreAtack(4, 1, 1, 10, 400);
    PreAtack(1, 1, 1, 10, 400);
    PreAtack(4, 1, 1, 10, 400);
    PreAtack(1, 1, 1, 10, 400);
    PreAtack(4, 1, 1, 10, 400);
    PreAtack(1, 1, 1, 10, 400);
    PreAtack(2, 2, 1.7, 10, 50);
    PreAtack(3, 2, 1.7, 10, 400);
    PreAtack(2, 2, 1.7, 10, 400);
    PreAtack(3, 2, 1.7, 10, 400);
    PreAtack(2, 2, 1.7, 10, 400);
    PreAtack(3, 2, 1.7, 10, 400);

    
    PreAtack(4, 2, 1, 10, 3000);
    PreAtack(3, 2, 1, 10, 350);
    PreAtack(2, 2, 1, 10, 350);
    PreAtack(1, 2, 1, 10, 350);
    PreAtack(1, 1, 0.7, 10, 400);
    PreAtack(4, 1, 0.7, 10, 350);
    PreAtack(3, 1, 0.7, 10, 350);
    PreAtack(2, 1, 0.7, 10, 350);
    PreAtack(1, 2, 1, 10, 350);
    PreAtack(2, 2, 1, 10, 350);
    PreAtack(4, 2, 1, 10, 350);
    PreAtack(3, 2, 1, 10, 350);

    PreAtack(4, 3, 1, 10, 2000);
    PreAtack(2, 1, 1, 10, 250);
    PreAtack(1, 1, 1, 10, 250);
    PreAtack(1, 2, 1.2, 10, 150);
    PreAtack(4, 1, 1, 10, 350);
    PreAtack(2, 1, 1, 10, 250);
    PreAtack(3, 1, 1, 10, 250);
    PreAtack(3, 2, 1.2, 10, 150);
    PreAtack(4, 1, 1, 10, 350);
    PreAtack(2, 1, 1, 10, 250);
    PreAtack(1, 1, 1, 10, 250);
    PreAtack(1, 2, 1.2, 10, 150);
    PreAtack(4, 1, 1, 10, 350);
    PreAtack(2, 1, 1, 10, 250);
    PreAtack(3, 1, 1, 10, 250);
    PreAtack(3, 2, 1.2, 10, 150);
    
    PreAtack(4, 3, 1, 10, 2000);
    PreAtack(2, 2, 1.3, 10, 400);
    PreAtack(3, 3, 1, 10, 600);
    PreAtack(1, 2, 1.3, 10, 400);
    PreAtack(2, 3, 1, 10, 600);
    PreAtack(4, 2, 1.3, 10, 400);
    PreAtack(1, 3, 1, 10, 600);
    PreAtack(3, 2, 1.3, 10, 400);
    PreAtack(4, 3, 1, 10, 600);
    PreAtack(2, 2, 1.3, 10, 400);
    PreAtack(3, 3, 1, 10, 600);
    PreAtack(1, 2, 1.3, 10, 400);
    PreAtack(2, 3, 1, 10, 600);
    PreAtack(4, 2, 1.3, 10, 400);
    
    PreAtack(4, 3, 3.5, 10, 2500);
    PreAtack(1, 1, 3.5, 10, 275);
    PreAtack(3, 1, 3.5, 10, 275);
    PreAtack(4, 1, 3.5, 10, 275);
    PreAtack(1, 1, 3.5, 10, 275);
    PreAtack(3, 1, 3.5, 10, 275);
    PreAtack(4, 1, 3.5, 10, 275);
    PreAtack(4, 1, 3.5, 10, 275);
    PreAtack(3, 1, 3.5, 10, 275);
    PreAtack(3, 1, 3.5, 10, 275);
    PreAtack(3, 1, 3.5, 10, 275);
    PreAtack(1, 1, 3.5, 10, 275);
    PreAtack(4, 1, 3.5, 10, 275);
    PreAtack(4, 1, 3.5, 10, 275);
    PreAtack(1, 1, 3.5, 10, 275);
    PreAtack(2, 1, 3.5, 10, 275);
    PreAtack(1, 1, 3.5, 10, 275);
    PreAtack(1, 1, 3.5, 10, 275);
    PreAtack(1, 1, 3.5, 10, 275);
    PreAtack(3, 1, 3.5, 10, 275);
    PreAtack(4, 1, 3.5, 10, 275);
    PreAtack(1, 1, 3.5, 10, 275);
    PreAtack(4, 1, 3.5, 10, 275);
    PreAtack(3, 1, 3.5, 10, 275);

    setTimeout(function(){
      document.getElementById("serce").style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"; 
      
      
      if (MaxHP== 4 && localStorage.getItem("przekazPunktow4")<=1) {
      localStorage.setItem("przekazPunktow4", 1);
        
      } else if (MaxHP== 2 && localStorage.getItem("przekazPunktow4")<=2) {
        localStorage.setItem("przekazPunktow4", 2);
        
      } else if (MaxHP== 1 && localStorage.getItem("przekazPunktow4")<=3) {
        localStorage.setItem("przekazPunktow4", 3);
        
      }

      setTimeout(function(){
        return quitBox('quit');
      },2000); 
    },(Kolejnosc+4000));
  }
  if (trybV2==6) {
    document.getElementById("postep2").style.transitionDuration = "360s";
    setTimeout(function(){ 
      document.getElementById("postep2").style.clipPath = "polygon(100% 0, 0 0, 0 100%, 100% 100%)"; 
    },1);
    

    setTimeout(function(){ 
      indestractible = 1;
      bot = 1;
      document.getElementById("serce").style.backgroundColor = "darkmagenta";
      document.getElementById("serce").style.clipPath = "polygon(75% 12.5%, 62.5% 12.5%, 62.5% 50%, 75% 50%, 75% 62.5%, 87.5% 62.5%, 87.5% 75%, 81.25% 75%, 81.25% 81.25%, 68.75% 81.25%, 68.75% 87.5%, 31.25% 87.5%, 31.25% 81.25%, 18.75% 81.25%, 18.75% 75%, 12.5% 75%, 12.5% 62.5%, 25% 62.5%, 25% 50%, 25% 12.5%, 37.5% 12.5%, 37.5% 50%, 25% 50%, 25% 62.5%, 25% 68.75%, 37.5% 68.75%, 37.5% 75%, 62.5% 75%, 62.5% 68.75%, 75% 68.75%, 75% 62.5%, 75% 50%, 75% 12.5%, 75% 12.5%, 75% 12.5%, 75% 12.5%)"; 
    },290000);
    /*Have fun */PreAtack(1, 3, 1.5, 10, 500);
    PreAtack(1, 4, 1.5, 10, 500);
    PreAtack(2, 4, 0.3, 10, 300);
    PreAtack(1, 4, 1.5, 10, 200);
    
    PreAtack(3, 4, 0.3, 10, 300);
    PreAtack(4, 4, 0.3, 10, 400);

    PreAtack(2, 4, 0.3, 10, 600);
    PreAtack(3, 4, 0.6, 10, 50);
    PreAtack(4, 3, 0.9, 10, 50);
    PreAtack(1, 4, 1.2, 10, 50);
    
    PreAtack(3, 4, 0.3, 10, 1100);
    PreAtack(1, 3, 0.6, 10, 50);
    PreAtack(4, 4, 0.9, 10, 50);
    PreAtack(2, 4, 1.2, 10, 50);

    PreAtack(4, 2, 0.6, 10, 1100);
    PreAtack(1, 2, 1, 10, 50);
    PreAtack(3, 2, 1.4, 10, 50);
    PreAtack(2, 2, 1.8, 10, 50); // 1!


    PreAtack(1, 3, 1.5, 10, 2500);
    PreAtack(1, 5, 0.4, 2, 1000);

    PreAtack(4, 5, 0.2, 2, 3000);
    PreAtack(3, 5, 0.2, 2, 1500);

    PreAtack(4, 5, 0.2, 1, 3000);
    PreAtack(2, 5, 0.2, 2, 50);
    
    PreAtack(1, 5, 0.1, 1, 3000);
    PreAtack(4, 5, 0.1, 2, 50);
    PreAtack(2, 5, 0.1, 3, 50);
    PreAtack(3, 5, 0.1, 4, 50);
    
    PreAtack(1, 3, 0.4, 10, 5000);
    PreAtack(1, 1, 0.4, 10, 200);
    PreAtack(1, 1, 0.4, 10, 200);
    PreAtack(1, 1, 0.4, 10, 200);
    PreAtack(2, 5, 0.1, 0.4, 50);
    PreAtack(1, 1, 0.4, 10, 500);
    PreAtack(1, 1, 0.4, 10, 200);
    PreAtack(1, 1, 0.4, 10, 200);
    PreAtack(1, 1, 0.4, 10, 200);
    PreAtack(4, 5, 0.1, 0.4, 50);
    
    PreAtack(1, 5, 0.1, 0.9, 50);
    PreAtack(1, 5, 0.1, 1.1, 50);
    PreAtack(1, 5, 0.1, 1.3, 50);
    PreAtack(2, 3, 2, 10, 50);
    PreAtack(1, 5, 0.1, 1.9, 50);
    PreAtack(1, 5, 0.1, 2.1, 50);
    PreAtack(1, 5, 0.1, 2.3, 50);
    PreAtack(4, 3, 3.5, 10, 50);
    PreAtack(1, 5, 0.1, 2.9, 50);
    PreAtack(1, 5, 0.1, 3.1, 50);
    PreAtack(1, 5, 0.1, 3.3, 50); // 2!

    
    PreAtack(2, 2, 3.5, 10, 5000);
    PreAtack(4, 2, 3.5, 10, 400);
    PreAtack(2, 2, 3.5, 10, 400);
    PreAtack(2, 2, 3.5, 10, 400);
    PreAtack(4, 2, 3.5, 10, 400);
    PreAtack(2, 2, 3.5, 10, 400);
    PreAtack(4, 2, 3.5, 10, 400);
    PreAtack(4, 2, 3.5, 10, 400);
    PreAtack(4, 2, 3.5, 10, 400);
    PreAtack(2, 2, 3.5, 10, 400);
    PreAtack(2, 2, 3.5, 10, 400);
    PreAtack(1, 2, 3.5, 10, 400);
    PreAtack(3, 2, 3.5, 10, 400);
    PreAtack(3, 2, 3.5, 10, 400);
    PreAtack(1, 2, 3.5, 10, 400);
    PreAtack(2, 2, 3.5, 10, 400);
    PreAtack(2, 2, 3.5, 10, 400);
    PreAtack(4, 2, 3.5, 10, 400);

    PreAtack(1, 3, 3.5, 10, 400);
    PreAtack(3, 1, 3.5, 10, 275);
    PreAtack(3, 1, 3.5, 10, 275);
    PreAtack(2, 1, 3.5, 10, 275);
    PreAtack(4, 1, 3.5, 10, 275);
    PreAtack(3, 1, 3.5, 10, 275);
    PreAtack(3, 1, 3.5, 10, 275);

    PreAtack(2, 1, 3.5, 10, 300);
    PreAtack(4, 1, 3.5, 10, 300);
    PreAtack(4, 1, 3.5, 10, 300);
    PreAtack(3, 1, 3.5, 700, 50);//
    PreAtack(4, 1, 3.5, 10, 500);
    PreAtack(1, 1, 3.5, 10, 950);
    PreAtack(1, 1, 3.5, 10, 300);
    PreAtack(3, 1, 3.5, 700, 50);//
    PreAtack(1, 1, 3.5, 10, 500);
    PreAtack(1, 1, 3.5, 10, 950);
    PreAtack(2, 1, 3.5, 10, 300);
    PreAtack(3, 1, 3.5, 10, 300);
    PreAtack(4, 1, 3.5, 10, 300);
    PreAtack(1, 1, 3.5, 10, 300);
    PreAtack(2, 1, 3.5, 10, 300);
    PreAtack(3, 1, 3.5, 500, 50);//
    PreAtack(4, 1, 3.5, 10, 300);
    PreAtack(4, 1, 3.5, 10, 750);
    PreAtack(4, 1, 3.5, 10, 300);
    PreAtack(4, 1, 3.5, 10, 300);
    PreAtack(4, 1, 3.5, 10, 300);
    
    PreAtack(3, 5, 0.05, 4, 1000);
    PreAtack(1, 5, 0.05, 4, 1000);
    PreAtack(3, 5, 0.05, 4, 1000);
    PreAtack(3, 5, 0.05, 4, 1000);
    PreAtack(4, 5, 0.05, 4, 1000);
    PreAtack(1, 5, 0.05, 4, 1000);
    PreAtack(2, 5, 0.05, 4, 1000);
    PreAtack(2, 5, 0.05, 4, 1000);
    PreAtack(3, 5, 0.05, 4, 1000);
    PreAtack(4, 5, 0.05, 4, 1000);
    PreAtack(4, 5, 0.05, 4, 1000);
    PreAtack(4, 5, 0.05, 4, 1000);
    PreAtack(1, 5, 0.05, 4, 1000);
    PreAtack(1, 5, 0.05, 4, 1000);
    PreAtack(3, 5, 0.05, 4, 1000);
    PreAtack(1, 5, 0.05, 4, 1000);
    PreAtack(3, 5, 0.05, 4, 1000);
    PreAtack(3, 5, 0.05, 4, 1000);
    PreAtack(1, 5, 0.05, 4, 1000);
    PreAtack(2, 5, 0.05, 4, 1000);
    PreAtack(4, 5, 0.05, 4, 1000);
    PreAtack(2, 5, 0.05, 4, 1000);
    PreAtack(2, 5, 0.05, 4, 1000);
    PreAtack(1, 5, 0.05, 4, 1000);
    PreAtack(2, 5, 0.05, 4, 1000);
    PreAtack(3, 5, 0.05, 4, 1000);
    PreAtack(4, 5, 0.05, 4, 1000);
    PreAtack(1, 5, 0.05, 4, 1000);
    PreAtack(2, 5, 0.05, 4, 1000);
    PreAtack(3, 5, 0.05, 4, 1000);
    PreAtack(3, 5, 0.05, 4, 1000);
    PreAtack(4, 5, 0.05, 4, 1000);
    PreAtack(1, 5, 0.05, 4, 1000); // 3!


    PreAtack(1, 3, 2.1, 10, 6000);
    PreAtack(3, 1, 0.3, 10, 20);
    PreAtack(4, 1, 0.25, 10, 300);
    PreAtack(4, 1, 0.25, 10, 250);
    PreAtack(3, 1, 0.25, 10, 250);
    PreAtack(2, 1, 0.25, 10, 250);

    PreAtack(2, 3, 2, 10, 750);
    PreAtack(4, 2, 0.6, 10, 20);
    PreAtack(2, 2, 0.6, 10, 250);
    PreAtack(1, 2, 0.6, 10, 250);
    PreAtack(3, 2, 0.6, 10, 250);

    PreAtack(3, 3, 2, 10, 750);
    PreAtack(4, 5, 0.05, 0.5, 20);
    PreAtack(2, 5, 0.05, 0.7, 20);
    PreAtack(1, 5, 0.05, 1, 20);

    PreAtack(4, 3, 10, 10, 2500);
    PreAtack(2, 1, 0.4, 10, 20);
    PreAtack(1, 1, 0.4, 10, 300);
    PreAtack(1, 2, 0.6, 10, 100);
    PreAtack(3, 1, 0.4, 10, 600);
    PreAtack(4, 5, 0.1, 0.5, 20);
    PreAtack(3, 1, 0.4, 10, 300);
    PreAtack(2, 1, 0.4, 10, 800);
    PreAtack(3, 1, 0.4, 10, 300);
    PreAtack(1, 1, 0.4, 10, 300);
    PreAtack(2, 1, 0.4, 10, 300);
    PreAtack(3, 1, 0.4, 10, 300);
    PreAtack(2, 1, 0.4, 10, 300);
    PreAtack(3, 1, 0.4, 10, 300);
    PreAtack(1, 5, 0.1, 0.7, 100);
    PreAtack(2, 1, 0.4, 10, 300);
    PreAtack(3, 1, 0.4, 10, 800);
    PreAtack(2, 1, 0.4, 10, 300);
    PreAtack(3, 1, 0.4, 10, 300);
    PreAtack(2, 1, 0.3, 10, 1500); // 4!

    
    PreAtack(4, 2, 4, 10, 2000);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(2, 2, 4, 10, 300);

    PreAtack(1, 1, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(4, 2, 4, 10, 300);//3000
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);//3600
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);//
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);//7500 - 4000 + 300 = 3700

    PreAtack(4, 2, 8, 10, 100);// <-
    PreAtack(3, 2, 8, 10, 400);// <-
    PreAtack(4, 2, 8, 10, 400);// <-
    PreAtack(2, 2, 8, 10, 400);// <-
    PreAtack(2, 2, 8, 10, 400);// <-

    PreAtack(1, 2, 8, 10, 400);// <-
    PreAtack(4, 2, 8, 10, 400);// <-
    PreAtack(1, 2, 8, 10, 400);// <-
    PreAtack(1, 2, 8, 10, 400);// <-
    PreAtack(3, 2, 8, 10, 400);// <-

    PreAtack(2, 2, 8, 10, 400);// <-
    PreAtack(1, 2, 8, 10, 400);// <-
    PreAtack(2, 2, 8, 10, 400);// <-
    PreAtack(3, 2, 8, 10, 400);// <-
    PreAtack(4, 2, 8, 10, 400);// <-
    
    PreAtack(1, 2, 8, 10, 400);// <-
    PreAtack(2, 2, 8, 10, 400);// <-
    PreAtack(2, 2, 8, 10, 400);// <-
    PreAtack(3, 2, 8, 10, 400);// <-
    PreAtack(4, 2, 8, 10, 400);// <-
    
    PreAtack(1, 2, 8, 10, 400);// <-
    PreAtack(2, 2, 8, 10, 400);// <-
    PreAtack(3, 2, 8, 10, 400);// <-
    
    PreAtack(1, 2, 8, 10, 400);// <-
    PreAtack(2, 2, 8, 10, 400);// <-
    PreAtack(3, 2, 8, 10, 400);// <-
    PreAtack(4, 2, 8, 10, 400);// <-

    PreAtack(1, 5, 0.1, 8, 1200);
    PreAtack(4, 5, 0.1, 10.2, 1500);
    PreAtack(2, 5, 0.1, 15, 1500);
    PreAtack(4, 1, 4, 10, 300);
    PreAtack(2, 1, 4, 10, 300);
    PreAtack(4, 1, 4, 10, 300);
    PreAtack(4, 1, 4, 10, 300);
    PreAtack(2, 1, 4, 10, 300);

    PreAtack(3, 1, 4, 10, 1000);
    PreAtack(2, 1, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(2, 1, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(2, 1, 4, 10, 300);
    
    PreAtack(2, 2, 4, 10, 900);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(1, 2, 4, 10, 300);
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(1, 2, 4, 10, 300);
    PreAtack(1, 2, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(1, 2, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(1, 2, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(1, 2, 4, 10, 300);

    PreAtack(3, 2, 4, 10, 1200);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(1, 2, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(1, 3, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 450);
    PreAtack(3, 4, 4, 10, 300);
    PreAtack(1, 2, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(1, 4, 4, 10, 300);
    PreAtack(1, 2, 4, 10, 300);
    PreAtack(1, 2, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);

    PreAtack(2, 2, 4, 10, 300);
    PreAtack(4, 1, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(4, 1, 4, 10, 300);
    PreAtack(4, 1, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(4, 1, 4, 10, 300);

    PreAtack(3, 1, 4, 10, 300);
    PreAtack(2, 1, 4, 10, 300);
    PreAtack(1, 5, 1, 2.2, 300);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(4, 5, 1, 2.2, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(4, 1, 4, 10, 300);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(1, 5, 1, 2.2, 300);
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);

    PreAtack(1, 1, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(2, 5, 1, 2.2, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(4, 5, 1, 2.2, 300);
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(1, 2, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(2, 5, 1, 2.2, 300);
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(3, 5, 1, 2.2, 300);
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(4, 1, 4, 10, 300);
    PreAtack(4, 5, 1, 2.2, 300);
    PreAtack(2, 2, 4, 10, 300);

    PreAtack(1, 1, 4, 10, 500);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(3, 1, 4, 10, 500);
    PreAtack(1, 2, 4, 10, 300);
    PreAtack(4, 1, 4, 10, 500);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(2, 1, 4, 10, 500);
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(1, 2, 4, 10, 500);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(4, 2, 4, 10, 500);
    PreAtack(2, 1, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(1, 1, 4, 10, 300);
    PreAtack(1, 5, 1, 2.2, 300);
    PreAtack(3, 2, 4, 10, 300);

    PreAtack(1, 5, 1, 2.2, 300);
    PreAtack(2, 1, 4, 10, 300);
    PreAtack(2, 5, 1, 2.2, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(4, 1, 4, 10, 300);
    PreAtack(3, 5, 1, 2.2, 300);
    PreAtack(2, 1, 4, 10, 300);
    PreAtack(3, 5, 1, 2.2, 300);
    PreAtack(4, 5, 1, 2.2, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(1, 5, 1, 2.2, 300);
    PreAtack(2, 5, 1, 2.2, 300);
    PreAtack(3, 1, 4, 10, 300);
    PreAtack(4, 1, 4, 10, 300);
    PreAtack(2, 5, 1, 2.2, 300);

    PreAtack(2, 2, 4, 10, 300);
    PreAtack(2, 5, 1, 2.2, 300);
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(1, 5, 1, 2.2, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(1, 2, 4, 10, 300);
    PreAtack(3, 5, 1, 2.2, 300);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(4, 5, 1, 2.2, 300);
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(2, 5, 1, 2.2, 300);
    PreAtack(3, 2, 4, 10, 300);
    PreAtack(3, 5, 1, 2.2, 300);
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(2, 5, 1, 2.2, 300);
    PreAtack(2, 2, 4, 10, 300);
    PreAtack(2, 5, 1, 2.2, 300);
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(4, 5, 1, 2.2, 300);
    PreAtack(4, 2, 4, 10, 300);
    PreAtack(1, 5, 1, 2.2, 300);
    PreAtack(2, 2, 4, 10, 300); // 5!

    
    PreAtack(2, 5, 0.05, 3.5, 1800);
    PreAtack(1, 3, 1.5, 10, 50);
    PreAtack(3, 2, 2, 10, 100);
    PreAtack(1, 3, 1.5, 10, 550);
    PreAtack(3, 2, 2, 10, 100);
    PreAtack(1, 3, 1.5, 10, 550);
    PreAtack(3, 2, 2, 10, 100);
    PreAtack(1, 3, 1.5, 10, 550);
    PreAtack(3, 2, 2.3, 10, 100);
    PreAtack(1, 3, 1.5, 10, 800);
    PreAtack(3, 2, 2, 10, 100);

    PreAtack(4, 5, 0.05, 1, 1000);
    PreAtack(1, 5, 0.05, 1, 450);
    PreAtack(3, 5, 0.05, 1, 450);
    PreAtack(3, 5, 0.05, 1, 450);
    PreAtack(2, 5, 0.05, 1, 450);
    PreAtack(1, 5, 0.05, 1, 450);
    PreAtack(4, 5, 0.05, 1, 450);
    PreAtack(3, 5, 0.05, 1, 450);
    PreAtack(1, 5, 0.05, 1, 450);
    PreAtack(4, 5, 0.05, 1, 450);
    PreAtack(4, 5, 0.05, 1, 450);
    PreAtack(2, 5, 0.05, 1, 450);
    PreAtack(3, 5, 0.05, 1, 450);
    
    PreAtack(4, 5, 0.05, 1, 450);
    PreAtack(2, 5, 0.05, 1, 450);
    PreAtack(4, 1, 1.25, 10, 450);
    PreAtack(3, 5, 0.05, 1, 450);
    PreAtack(1, 5, 0.05, 1, 450);
    PreAtack(3, 5, 0.05, 1, 450);
    PreAtack(3, 1, 1.25, 10, 450);
    PreAtack(4, 5, 0.05, 1, 450);
    PreAtack(2, 5, 0.05, 1, 450);
    PreAtack(3, 5, 0.05, 1, 450);
    PreAtack(1, 1, 1.25, 10, 450);
    PreAtack(3, 1, 1.25, 10, 450);
    PreAtack(4, 5, 0.05, 1, 450);
    PreAtack(2, 5, 0.05, 1, 450);
    PreAtack(1, 5, 0.05, 1, 450);
    
    PreAtack(3, 5, 0.05, 1, 450);
    PreAtack(2, 5, 0.05, 1, 450);
    PreAtack(2, 2, 1.25, 10, 50);
    PreAtack(1, 5, 0.05, 1, 450);
    PreAtack(4, 5, 0.05, 1, 450);
    PreAtack(2, 5, 0.05, 1, 450);
    PreAtack(4, 5, 0.05, 1, 450);
    PreAtack(2, 2, 1.25, 10, 450);
    PreAtack(4, 5, 0.05, 1, 450);

    PreAtack(3, 5, 0.05, 0.5, 1100);
    PreAtack(2, 5, 0.05, 1, 20);
    PreAtack(1, 5, 0.05, 1.5, 20);
    PreAtack(4, 5, 0.05, 2, 20);

    PreAtack(2, 5, 0.05, 0.5, 2100);
    PreAtack(4, 5, 0.05, 1, 20);
    PreAtack(2, 5, 0.05, 1.5, 20);
    PreAtack(4, 5, 0.05, 2, 20);

    PreAtack(1, 5, 0.05, 0.5, 2100);
    PreAtack(3, 5, 0.05, 1, 20);
    PreAtack(3, 5, 0.05, 1.5, 20);
    PreAtack(1, 5, 0.05, 2, 20);

    PreAtack(4, 5, 0.05, 0.5, 2100);
    PreAtack(2, 5, 0.05, 1, 20);
    PreAtack(1, 1, 2.3, 10, 20);
    PreAtack(3, 5, 0.05, 2, 20);
    
    PreAtack(1, 3, 0.1, 1000, 2500);

    PreAtack(2, 1, 0.1, 1000, 1000);
    PreAtack(4, 1, 0.1, 1000, 500);

    PreAtack(2, 1, 0.1, 500, 1000);
    PreAtack(4, 1, 0.1, 500, 500);
    PreAtack(2, 1, 0.1, 500, 500);
    PreAtack(2, 1, 0.1, 500, 500);
    PreAtack(4, 1, 0.1, 500, 500);
    PreAtack(2, 1, 0.1, 500, 500);
    PreAtack(4, 1, 0.1, 500, 500);
    PreAtack(2, 1, 0.1, 500, 500);
    PreAtack(2, 1, 0.1, 500, 500);
    PreAtack(4, 1, 0.1, 500, 500);
    PreAtack(2, 1, 0.1, 500, 500);
    PreAtack(4, 1, 0.1, 500, 500);
    PreAtack(4, 1, 0.1, 500, 500);
    PreAtack(4, 1, 0.1, 500, 500); // 6!
    

    PreAtack(1, 3, 37.5, 10, 3000);
    
    PreAtack(1, 5, 0.1, 0.1, 5000);
    PreAtack(1, 5, 0.1, 0.2, 50);
    PreAtack(1, 5, 0.1, 0.3, 50);
    PreAtack(1, 5, 0.1, 0.4, 50);
    PreAtack(1, 5, 0.1, 0.5, 50);
    PreAtack(1, 5, 0.1, 0.6, 50);
    PreAtack(1, 5, 0.1, 0.7, 50);
    PreAtack(1, 5, 0.1, 0.8, 50);
    PreAtack(1, 5, 0.1, 0.9, 50);
    PreAtack(1, 5, 0.1, 1, 50);
    
    PreAtack(2, 3, 0.2, 10, 1100);
    PreAtack(2, 1, 0.3, 10, 50);
    PreAtack(2, 1, 0.4, 10, 50);
    PreAtack(2, 1, 0.5, 10, 50);
    PreAtack(2, 1, 0.6, 10, 50);
    PreAtack(2, 1, 0.7, 10, 50);
    PreAtack(2, 1, 0.8, 10, 50);
    PreAtack(2, 1, 0.9, 10, 50);
    PreAtack(2, 1, 1, 10, 50);
    PreAtack(2, 1, 1.1, 10, 50);
    
    PreAtack(4, 3, 0.2, 10, 1000);
    PreAtack(4, 1, 0.3, 10, 50);
    PreAtack(4, 1, 0.4, 10, 50);
    PreAtack(4, 1, 0.5, 10, 50);
    PreAtack(4, 1, 0.6, 10, 50);
    PreAtack(4, 1, 0.7, 10, 50);
    PreAtack(4, 1, 0.8, 10, 50);
    PreAtack(4, 1, 0.9, 10, 50);
    PreAtack(4, 1, 1, 10, 50);
    PreAtack(4, 1, 1.1, 10, 50);
    
    PreAtack(1, 2, 0.3, 10, 900);
    PreAtack(1, 2, 0.4, 10, 50);
    PreAtack(1, 2, 0.5, 10, 50);
    PreAtack(1, 2, 0.6, 10, 50);
    PreAtack(1, 2, 0.7, 10, 50);
    PreAtack(1, 2, 0.8, 10, 50);
    PreAtack(1, 2, 0.9, 10, 50);
    PreAtack(1, 2, 1, 10, 50);
    PreAtack(1, 2, 1.1, 10, 50);
    PreAtack(1, 2, 1.2, 10, 50);
    PreAtack(3, 1, 1.4, 10, 50);
    
    PreAtack(1, 3, 0.3, 10, 1400);
    PreAtack(2, 1, 0.3, 10, 250);
    PreAtack(3, 1, 0.3, 10, 250);
    PreAtack(4, 1, 0.3, 10, 250);
    PreAtack(1, 3, 0.3, 10, 250);
    PreAtack(2, 1, 0.3, 10, 250);
    PreAtack(3, 1, 0.3, 10, 250);
    PreAtack(4, 1, 0.3, 10, 250);
    PreAtack(2, 3, 0.3, 10, 250);
    PreAtack(2, 1, 0.3, 10, 250);
    PreAtack(3, 1, 0.3, 10, 250);
    PreAtack(4, 1, 0.3, 10, 250);
    PreAtack(1, 3, 0.3, 10, 250);
    PreAtack(2, 1, 0.3, 10, 250);
    PreAtack(3, 1, 0.3, 10, 250);
    PreAtack(4, 1, 0.3, 10, 250);
    PreAtack(1, 3, 0.3, 10, 250);
    PreAtack(2, 1, 0.3, 10, 250);
    PreAtack(3, 1, 0.3, 10, 250);
    PreAtack(4, 1, 0.3, 10, 250);
    PreAtack(1, 3, 0.3, 10, 200);
    PreAtack(2, 1, 0.3, 10, 200);
    PreAtack(3, 1, 0.3, 10, 200);
    PreAtack(4, 1, 0.3, 10, 200);
    PreAtack(1, 3, 0.4, 10, 150);
    PreAtack(2, 1, 0.4, 10, 150);
    PreAtack(3, 1, 0.4, 10, 150);
    PreAtack(4, 1, 0.4, 10, 150);
    
    PreAtack(1, 3, 0.4, 10, 250);
    PreAtack(2, 1, 0.4, 10, 250);
    PreAtack(3, 1, 0.4, 10, 250);
    PreAtack(3, 1, 0.4, 10, 250);
    PreAtack(4, 1, 0.4, 10, 250);
    
    PreAtack(1, 3, 0.4, 10, 250);
    PreAtack(2, 1, 0.4, 10, 250);
    PreAtack(3, 1, 0.4, 10, 250);
    PreAtack(4, 1, 0.4, 10, 250);
    
    PreAtack(1, 3, 0.4, 10, 250);
    PreAtack(3, 1, 0.4, 10, 250);
    PreAtack(4, 1, 0.4, 10, 250);

    PreAtack(3, 2, 0.8, 10, 300);
    PreAtack(4, 2, 0.8, 10, 300);
    PreAtack(1, 2, 0.8, 10, 300);
    PreAtack(2, 2, 0.8, 10, 300);
    PreAtack(3, 2, 0.8, 10, 300);
    PreAtack(4, 2, 0.8, 10, 300);
    PreAtack(1, 2, 0.8, 10, 300);
    PreAtack(2, 2, 0.8, 10, 300);
    
    PreAtack(1, 2, 0.8, 10, 300);
    PreAtack(2, 2, 0.8, 10, 300);
    PreAtack(3, 2, 0.8, 10, 300);
    PreAtack(4, 2, 0.8, 10, 300);

    PreAtack(1, 5, 0.1, 0.8, 250);
    PreAtack(2, 5, 0.1, 0.8, 250);
    PreAtack(3, 5, 0.1, 0.8, 250);
    PreAtack(4, 5, 0.1, 0.8, 250);

    PreAtack(2, 5, 0.1, 0.8, 250);
    PreAtack(1, 5, 0.1, 0.8, 250);
    PreAtack(4, 5, 0.1, 0.8, 250);
    PreAtack(3, 5, 0.1, 0.8, 250);
    
    PreAtack(1, 5, 0.1, 0.8, 250);
    PreAtack(2, 5, 0.1, 0.8, 250);
    PreAtack(3, 5, 0.1, 0.8, 250);
    PreAtack(4, 5, 0.1, 0.8, 250);

    PreAtack(1, 5, 0.1, 0.8, 250);
    PreAtack(2, 5, 0.1, 0.8, 250);
    PreAtack(2, 5, 0.1, 0.8, 250);
    PreAtack(3, 5, 0.1, 0.8, 250);
    PreAtack(4, 5, 0.1, 0.8, 250);
    
    PreAtack(1, 3, 0.1, 1000, 1000);
    PreAtack(4, 1, 0.1, 1000, 400);
    PreAtack(3, 1, 0.1, 1000, 400);
    PreAtack(2, 1, 0.1, 1000, 400);
    PreAtack(1, 1, 0.1, 1000, 400);
    PreAtack(3, 1, 0.1, 1000, 400);
    PreAtack(3, 1, 0.1, 1000, 400);
    PreAtack(2, 1, 0.1, 1000, 400);
    PreAtack(4, 1, 0.1, 1000, 400);
    PreAtack(2, 1, 0.1, 1000, 400);
    PreAtack(2, 1, 0.1, 1000, 400);
    PreAtack(1, 1, 0.1, 1000, 400);
    PreAtack(3, 1, 0.1, 1000, 400);
    PreAtack(4, 1, 0.1, 1000, 400);
    
    PreAtack(1, 2, 0.5, 600, 1000);
    PreAtack(4, 2, 0.5, 600, 400);
    PreAtack(2, 2, 0.5, 600, 400);
    PreAtack(2, 1, 0.5, 600, 400);
    PreAtack(4, 2, 0.5, 600, 400);
    PreAtack(1, 2, 0.5, 600, 400);
    PreAtack(2, 2, 0.5, 600, 400);
    PreAtack(3, 2, 0.5, 600, 400);
    
    PreAtack(3, 3, 0.3, 10, 1200);
    PreAtack(2, 1, 0.3, 10, 300);
    PreAtack(4, 1, 0.3, 10, 300);
    PreAtack(1, 1, 0.3, 10, 300);
    PreAtack(2, 1, 0.3, 10, 300);
    PreAtack(4, 1, 0.3, 10, 300);
    PreAtack(4, 1, 0.3, 10, 300);
    PreAtack(1, 1, 0.3, 10, 300);
    PreAtack(2, 1, 0.3, 10, 300);
    PreAtack(3, 1, 0.3, 10, 300);
    PreAtack(1, 1, 0.3, 10, 300);
    PreAtack(3, 1, 0.3, 10, 300);
    PreAtack(3, 1, 0.3, 10, 300);
    PreAtack(4, 1, 0.3, 10, 300);
    PreAtack(1, 1, 0.3, 10, 300);
    PreAtack(2, 1, 0.3, 10, 300);
    PreAtack(2, 1, 0.3, 10, 300);
    PreAtack(3, 1, 0.3, 10, 300);
    PreAtack(4, 1, 0.3, 10, 300);
    PreAtack(1, 1, 0.3, 10, 300);
    
    PreAtack(2, 4, 0.3, 10, 400);
    PreAtack(4, 3, 0.5, 10, 100);
    PreAtack(3, 4, 0.7, 10, 100);
    PreAtack(1, 4, 0.9, 10, 100);
    
    PreAtack(3, 4, 0.3, 10, 800);
    PreAtack(2, 3, 0.5, 10, 100);
    PreAtack(1, 4, 0.7, 10, 100);
    PreAtack(4, 4, 0.9, 10, 100);
    
    PreAtack(2, 4, 0.3, 10, 800);
    PreAtack(1, 3, 0.5, 10, 100);
    PreAtack(3, 4, 0.7, 10, 100);
    PreAtack(4, 4, 0.9, 10, 100);
    
    PreAtack(1, 4, 0.3, 10, 800);
    PreAtack(3, 3, 0.5, 10, 100);
    PreAtack(4, 4, 0.7, 10, 100);
    PreAtack(2, 4, 0.9, 10, 100);
    
    PreAtack(4, 4, 0.3, 10, 800);
    PreAtack(3, 3, 0.5, 10, 100);
    PreAtack(2, 4, 0.7, 10, 100);
    PreAtack(1, 4, 0.9, 10, 100);
    
    PreAtack(2, 2, 0.6, 10, 800);
    PreAtack(1, 2, 0.8, 10, 100);
    PreAtack(3, 2, 1, 10, 100);
    PreAtack(4, 2, 1.2, 10, 100);
  
    PreAtack(1, 1, 0.5, 10, 1200);
    PreAtack(1, 1, 0.5, 10, 200);
    PreAtack(1, 1, 0.5, 10, 200);
    PreAtack(1, 1, 0.5, 10, 200);
    PreAtack(1, 1, 0.5, 10, 200);
    PreAtack(1, 1, 0.3, 10, 150);
    PreAtack(1, 1, 0.3, 10, 150);
    PreAtack(1, 1, 0.3, 10, 150);
    PreAtack(1, 1, 0.3, 10, 150);
    PreAtack(1, 1, 0.3, 10, 150);
    
    PreAtack(1, 1, 0.2, 10, 100);
    PreAtack(1, 1, 0.2, 10, 100);
    PreAtack(1, 1, 0.2, 10, 100);
    PreAtack(1, 1, 0.2, 10, 100);
    PreAtack(1, 1, 0.2, 10, 100);
    PreAtack(1, 1, 0.2, 10, 100);
    PreAtack(1, 1, 0.2, 10, 100);
    PreAtack(1, 1, 0.2, 10, 100);
    PreAtack(1, 1, 0.2, 10, 100);
    PreAtack(1, 1, 0.2, 10, 100);
    for (let index = 0; index < 50; index++) {
      PreAtack(1, 1, 1, 10, 50);
      
    }
    PreAtack(3, 2, 1, 10, 250);
    for (let index = 0; index < 49; index++) {
      PreAtack(3, 2, 1, 10, 50);
      
    }
    for (let index = 0; index < 50; index++) {
      PreAtack(1, 5, 0.1, 1.1, 50);
      
    }
    for (let index = 0; index < 200; index++) {
    PreAtack(1, 1, 10, 10, 85);
    PreAtack(2, 1, 10, 10, 85);
    PreAtack(3, 1, 10, 10, 85);
    PreAtack(4, 1, 10, 10, 85);
    }



    setTimeout(function(){
      

      if (MaxHP== 4 && localStorage.getItem("przekazPunktow5")<=1) {
      localStorage.setItem("przekazPunktow5", 1);
        
      } else if (MaxHP== 2 && localStorage.getItem("przekazPunktow5")<=2) {
        localStorage.setItem("przekazPunktow5", 2);
        
      } else if (MaxHP== 1 && localStorage.getItem("przekazPunktow5")<=3) {
        localStorage.setItem("przekazPunktow5", 3);
        
      }

      setTimeout(function(){
        return quitBox('quit');
      },2000); 
    },(Kolejnosc+9000));
  }



} //
function PreAtack(a,b,c,d,e) {
    KolejnoscT = e;
    setTimeout(function(){ atack(a, b, c, d); },(Kolejnosc + KolejnoscT));
    Kolejnosc += KolejnoscT;
    
}