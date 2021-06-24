//button selectors
var ok =document.getElementById("ok")
var left_=document.getElementById("left")
var right_=document.getElementById("right")
var top_=document.getElementById("top")
var bottom_=document.getElementById("bottom")


///window screnn event

var myWindow;





ok.addEventListener("click",function (){
    
    if(!myWindow){
        myWindow=window.open("../test.html","1","width=200, height=200")
        ok.style.background="green"
    }else{
      myWindow.close()
      myWindow=false
    }
   

}
)


right_.addEventListener("click",function(){
    myWindow.moveBy(50,0)
    myWindow.focus()
})


left_.addEventListener("click",function(){
   myWindow.moveBy(-50,0)
   myWindow.focus()
})

top_.addEventListener("click",function(){
    myWindow.moveBy(0,-50)
    myWindow.focus()
})

bottom_.addEventListener("click",function(){
    myWindow.moveBy(0,50)
    myWindow.focus()
})
