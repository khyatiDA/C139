img = ""
Status = ""
temp_array = ""

function preload(){
    loadImage("phone.jpg")
}

function setup(){
    canvas = createCanvas(640,420)
    canvas.center()

    objectDetector = ml5.objectDetector("cocossd"  , modelLoaded)
    document.getElementById("status").innerHTML = "Status : Object Detected"
}

function modelLoaded(){
    console.log("model loaded")
    Status = true
    objectDetector.detect(img , gotResult)
}

function gotResult(results){
   if (results) {
    console.log(results)

    temp_array=results
   }
   
     
    
    }

    function draw(){
        image(img,0,0,640,420)
        
        if (Status != "") {
            for (i = 0; i < temp_array.length; i++) {
                
                document.getElementById("status").innerHTML="OBJECT DETECTED"
        
                stroke("red")
                noFill()
               rect(temp_array[i].x,temp_array[i].y,temp_array[i].width,temp_array[i].height)
               accuracy = (temp_array[i].confidence *  100).toFixed(2);
               fill("red")
               text(temp_array[i].label + " " +  accuracy + "%" , temp_array[i].x , temp_array[i].y)
            }
            
        }
        
        
        
    }