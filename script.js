class  Audio_player{
    constructor(){
        this.button = document.getElementById("button")
        this.audio = document.getElementById("audio")
        this.chanelLogo = document.getElementById("chanelLogo");
        this.title = document.getElementById("title");
        this.back = document.getElementById("back");
        this.naxt = document.getElementById("next");

     this.value;
  
     
     
     this.valueA = 0;

     this.audioLogo = [];
     this.audioLogo[0] = "image/474.png"
     this.audioLogo[1] = "image/one-piase.jpg"
     this.audioLogo[2] = "image/darck.jpg"

 
     this.audioTitle = [];
     this.audioTitle[0] = "believer"
     this.audioTitle[1] = "Adele"
     this.audioTitle[2] = "Adele"
     
     this.audioName = [];
     this.audioName[0] = "Believer.mp3"
     this.audioName[1] = "one-piase.mp3"
     this.audioName[2] = "darck.mp3"

     
     
     this.naxt.addEventListener("click", ()=>{
        if(this.valueA < this.audioName.length - 1){
       ++this.valueA;
        }
     this.value = true;
     this.test()
     this.action()
       });

       this.back.addEventListener("click", ()=>{
          if(this.valueA>0){
         --this.valueA;
          }
     this.value = true;
     this.test()
     this.action()
         });
         this.button.addEventListener("click", ()=>{
            this.test()
         });

    this.action()
   
    
    
    
    }
    
    action(){
        this.chanelLogo.src = this.audioLogo[this.valueA]
        this.title.innerHTML = this.audioTitle[this.valueA]
        this.audio.src = this.audioName[this.valueA]
    }

    test(){
        if(this.value == false){
            this.audio.play()
            this.button.src = "image/play.png"
            this.value = true;
        }else{
            this.audio.pause()
            this.button.src = "image/pause.png"
            this.value = false;
        }
    }
}

onload = new Audio_player;






