document.getElementById('generate').addEventListener("click",function(){
    document.getElementById('random').value=Math.round(Math.random()*10000)
})

document.getElementById('7').addEventListener("click",function(){
    document.getElementById('input').value=(document.getElementById('input').value*10)+7
})

document.getElementById('8').addEventListener("click",function(){
    document.getElementById('input').value=(document.getElementById('input').value*10)+8
})

document.getElementById('9').addEventListener("click",function(){
    document.getElementById('input').value=(document.getElementById('input').value*10)+9
})

document.getElementById('1').addEventListener("click",function(){
    document.getElementById('input').value=(document.getElementById('input').value*10)+1
})

document.getElementById('2').addEventListener("click",function(){
    document.getElementById('input').value=(document.getElementById('input').value*10)+2
})

document.getElementById('3').addEventListener("click",function(){
    document.getElementById('input').value=(document.getElementById('input').value*10)+3
})

document.getElementById('4').addEventListener("click",function(){
    document.getElementById('input').value=(document.getElementById('input').value*10)+4
})

document.getElementById('5').addEventListener("click",function(){
    document.getElementById('input').value=(document.getElementById('input').value*10)+5
})

document.getElementById('6').addEventListener("click",function(){
    document.getElementById('input').value=(document.getElementById('input').value*10)+6
})
document.getElementById('0').addEventListener("click",function(){
    document.getElementById('input').value=(document.getElementById('input').value*10)
})

document.getElementById('C').addEventListener("click",function(){
    document.getElementById('input').value=0
})

document.getElementById('backspace').addEventListener("click",function(){
    document.getElementById('input').value=parseInt(document.getElementById('input').value/10)
})



document.getElementById('submit').addEventListener("click",function(){
    if(parseInt(document.getElementById('random').value)==document.getElementById('input').value){
        document.getElementById('not-match').style.display="none"
        document.getElementById('match').style.display="block"
        document.getElementById('try').innerHTML="3 try left"
        document.getElementById('input').value=0
        document.getElementById('random').value=" ";

    }
    else{
        document.getElementById('match').style.display="none"
        document.getElementById('not-match').style.display="block"
        document.getElementById('try').innerHTML=String(parseInt(document.getElementById('try').innerHTML[0])-1)+" try left"
        if(document.getElementById('try').innerHTML[0]=="0")
        {
            document.getElementById('submit').style.pointerEvents = 'none';
        }
        
    }
})

