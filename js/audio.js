function MySound (src){
    
        this.sound = document.createElement('audio');
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function () {
            this.sound.play();
        }
        this.pause = function () {
            this.sound.pause();
        }
    }

    var song = new MySound("audio/losChichos.m4a") 
    var win = new MySound("audio/claro.m4a")
    var lost = new MySound("audio/paco.m4a")
    
    


