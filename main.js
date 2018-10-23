prompt("tell me your name");
alert("let me ask you simple maths");
let varable=prompt("alright 12+23=");
if (varable==35){
  alert("you get it")
}
else {
  alert("try it again");
  let choice=prompt("do you want to try again?");
  if(choice==1){
    let varable=prompt("alright 11+22=");
    if (varable==33){
      alert("you get it");
    }
    else{
      alert("you don't get it")
    }
  }
  else{
    alert("thanks for your interst");
  }
}