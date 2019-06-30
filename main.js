/*
working using CFOP
im not an expert, I cant even solve a cube without a tutorial
im currently working on the white corners
*/
var orr = "#ff9000"
var nums = 0
class face {
    //set up of the faces as objects
    colour;
    constructor(num){
        //creates each face
        this.reset_face(num)
    }
    reset_face(num){
        //sets entire face to a single colour 
        this.colour = [0,0,0,0,0,0,0,0,0]
        for(let i = 0; i < 9; i++){
            this.colour[i] = num;
        }
    }
    get_colour(ptr){
        //get the colour of 3 peices on a face
        var value = [0,0,0]
        value[0] = this.colour[ptr[0]]
        value[1] = this.colour[ptr[1]]
        value[2] = this.colour[ptr[2]]
        return value; 
    }
    get_single(ptr){
        //get a single colour of a single cell
        var value = 0
        value = this.colour[ptr]
        return value;
    }
    set_colour(new_colour, pattern){
        //sets the colour of 3 peices on a face
        this.colour[pattern[0]] = new_colour[0];
        this.colour[pattern[1]] = new_colour[1];
        this.colour[pattern[2]] = new_colour[2];
        return 0;
    }
    get_face(){
        //displays a face
        var j = 0
        var i = faces_displayed
        faces_displayed =  faces_displayed + 9
        /*console.log(this.colour[0] + "  " + this.colour[1] + "  " + this.colour[2] + "  ")
        console.log(this.colour[3] + "  " + this.colour[4] + "  " + this.colour[5] + "  ")
        console.log(this.colour[6] + "  " + this.colour[7] + "  " + this.colour[8] + "  ")
        */
        for(i; i < faces_displayed; i++ ){
            document.getElementsByClassName("square")[i].style.backgroundColor = this.get_single(j);
            j++
        }
    }
    rotate_face(){
        //rotats the colours on only its own face
        var temp = this.colour[0]
        this.colour[0] = this.colour[6]
        this.colour[6] = this.colour[8]
        this.colour[8] = this.colour[2]
        this.colour[2] = temp
        temp = this.colour[1]
        this.colour[1] = this.colour[3]
        this.colour[3] = this.colour[7]
        this.colour[7] = this.colour[5]
        this.colour[5] = temp
    }
    //#region score
    //#region  score peice
    score_TL(){
        if (this.colour[0] == this.colour[4]) {
            return 1
        } else {
            return 0
        }
    }
    score_TM(){
        if (this.colour[1] == this.colour[4]) {
            return 1
        } else {
            return 0
        }
    }
    score_TR(){
        if (this.colour[2] == this.colour[4]) {
            return 1
        } else {
            return 0
        }
    }
    score_ML(){
        if (this.colour[3] == this.colour[4]) {
            return 1
        } else {
            return 0
        }
    }
    score_MR(){
        if (this.colour[5] == this.colour[4]) {
            return 1
        } else {
            return 0
        }
    }
    score_BL(){
        if (this.colour[6] == this.colour[4]) {
            return 1
        } else {
            return 0
        }
    }
    score_BM(){
        if (this.colour[0] == this.colour[4]) {
            return 1
        } else {
            return 0
        }
    }
    score_BR(){
        if (this.colour[0] == this.colour[4]) {
            return 1
        } else {
            return 0
        }
    }
    //#endregion
    //#region score areas
    score_top(){
        var score = 0
        score += this.score_TL() + this.score_TM() + this.score_TR()
        if (score == 3) {
            return 1
        } else {
            return 0
        }
    }
    score_bottom(){
        var score = 0
        score += this.score_BL() + this.score_BM() + this.score_BR()
        if (score == 3) {
            return 1
        } else {
            return 0
        }
    }
    score_left(){
        var score = 0
        score += this.score_TL() + this.score_ML() + this.score_BL()
        if (score == 3) {
            return 1
        } else {
            return 0
        }
    }
    score_right(){
        var score = 0
        score += this.score_TR() + this.score_MR() + this.score_BR()
        if (score == 3) {
            return 1
        } else {
            return 0
        }
    }
    score_middle_down(){
        var score = 0
        score += this.score_TM() + this.score_BM()
        if (score == 2) {
            return 1
        } else {
            return 0
        }
    }
    score_middle_across(){
        var score = 0
        score += this.score_ML() + this.score_MR()
        if (score == 2) {
            return 1
        } else {
            return 0
        }
    }
    score_cross(){
        var score = 0
        score += this.score_ML() + this.score_middle_across() + this.score_middle_down() + this.score_TM()
        if (score == 2) {
            return 1
        } else {
            return 0
        }
    }
    score_any_cross(){
        var score = 0
        score += this.score_ML() + this.score_middle_across() + this.score_middle_down() + this.score_TM()
        if (score !== 0) {
            return 1
        } else {
            return 0
        }
    }
    score_face(){
        var score = 0
        score = this.score_bottom() + this.score_top() + this.score_middle_across()
        //console.log("middle- "+ this.score_middle_across() + " " + score)
        if (score == 3){
            return 1
        } else {
            return 0
        }
    }
    //#endregion 
    //#endregion 
}
class cube{
    constructor(){
    //set up golbal variables and initialization of cube
    window.faces_displayed = 0
    window.red = new face("red");
    window.orange = new face("#ff9000");
    window.blue = new face("blue");
    window.green = new face("green");
    window.yellow = new face("yellow");
    window.white = new face("white");
    window.temp = new face(99999);
    this.get_cube() 
    }
    reset(){
    //resest to solved state
    red.reset_face("red")
    white.reset_face("white")
    blue.reset_face("blue")
    yellow.reset_face("yellow")
    orange.reset_face(orr)
    green.reset_face("green")
    this.get_cube()
    console.clear()
    }
    mode  = "display"
    get_cube(){  
        if (this.mode == "debug"){
            red.get_face()
            blue.get_face()
            white.get_face()
            green.get_face()
        } else {
            this.rotate_red()
            this.rotate_red()
            red.get_face()
            this.rotate_red()
            this.rotate_red()
            this.rotate_blue()
            blue.get_face()
            this.rotate_blue()
            this.rotate_blue()
            this.rotate_blue()
            white.get_face()
            this.rotate_green()
            this.rotate_green()
            this.rotate_green()
            green.get_face()
            this.rotate_green()
        }
        orange.get_face()
        yellow.get_face()
        faces_displayed = 0
    }
    //#region   rotation functions
    //set up rotations
    //#region base rotate
        rotate_white(){
            temp.set_colour(red.get_colour([0,1,2]         ),      [0,1,2])
            red.set_colour(blue.get_colour([0,1,2]         ),      [0,1,2])
            blue.set_colour(orange.get_colour([0,1,2]      ),      [0,1,2])
            orange.set_colour(green.get_colour([0,1,2]     ),      [0,1,2])
            green.set_colour(temp.get_colour([0,1,2]       ),      [0,1,2])
            white.rotate_face()
            console.log("%cWHITE", "color: white; background-color: #404040; font-weight: bold;")
        }
        rotate_yellow(){
            temp.set_colour(red.get_colour([6,7,8]         ),      [6,7,8])
            red.set_colour(green.get_colour([6,7,8]        ),      [6,7,8])
            green.set_colour(orange.get_colour([6,7,8]     ),      [6,7,8])
            orange.set_colour(blue.get_colour([6,7,8]      ),      [6,7,8])
            blue.set_colour(temp.get_colour([6,7,8]        ),      [6,7,8])
            yellow.rotate_face()
            console.log("%cYELLOW", "color: yellow; background-color: #a6a232; font-weight: bold;")
        }
        rotate_red(){
            temp.set_colour(white.get_colour([2,1,0]),[0,1,2]      )
            white.set_colour(green.get_colour([8,5,2]  ),   [2,1,0]);
            green.set_colour(yellow.get_colour([2,1,0]  ),   [8,5,2]);
            yellow.set_colour(blue.get_colour([0,3,6]),   [2,1,0]);
            blue.set_colour(temp.get_colour([0,1,2]     ),   [0,3,6]);
            red.rotate_face()
            console.log("%cRED", "color: red; background-color: #ffaaaa; font-weight: bold;")
            temp.set_colour(white.get_colour([2,1,0]    ),   [0,1,2]);
        }
        rotate_orange(){
            temp.set_colour(white.get_colour([6,7,8]),[0,1,2]      )
            white.set_colour(blue.get_colour([8,5,2]  ), [6,7,8]);
            blue.set_colour(yellow.get_colour([6,7,8] ), [8,5,2]);
            yellow.set_colour(green.get_colour([0,3,6]), [6,7,8]);
            green.set_colour(temp.get_colour([0,1,2]     ), [0,3,6]);
            orange.rotate_face()
            console.log("%cORANGE", "color: #ff9000; background-color: #aa5000; font-weight: bold;")
            temp.set_colour(white.get_colour([6,7,8]  ), [0,1,2]);
        }
        rotate_green(){
            temp.set_colour(white.get_colour([8,5,2]),[0,1,2]      )
            white.set_colour(orange.get_colour([8,5,2]),[8,5,2]);
            orange.set_colour(yellow.get_colour([0,3,6]  ),[8,5,2]);
            yellow.set_colour(red.get_colour([0,3,6]  ),[0,3,6]);
            red.set_colour(temp.get_colour([0,1,2]       ),[0,3,6]);
            green.rotate_face()
            console.log("%cGREEN", "color: green; background-color: #aaffaa; font-weight: bold;")
            temp.set_colour(white.get_colour([8,5,2]  ),[0,1,2]);
        }
        rotate_blue(){
            temp.set_colour(white.get_colour([0,3,6]),[0,1,2]      )
            white.set_colour(red.get_colour([8,5,2]    ),[0,3,6]);
            red.set_colour(yellow.get_colour([8,5,2]   ),[8,5,2]);
            yellow.set_colour(orange.get_colour([0,3,6]),[8,5,2]);
            orange.set_colour(temp.get_colour([0,1,2]  ),[0,3,6]);
            blue.rotate_face()
            console.log("%cBLUE", "color: blue; background-color: #aaaaff; font-weight: bold;")
            temp.set_colour(white.get_colour([0,3,6]   ),[0,1,2]);
        }
    //#endregion
    //#region backwards
        rotate_white_backwards(){
            this.rotate_white()
            for(var i = 0; i<3; i++){
                this.rotate_white()
            }
            this.get_cube() 
            }
        rotate_yellow_backwards(){
            for(var i = 0; i<3; i++){
            this.rotate_yellow()
            }
            this.get_cube() 
        }
        rotate_red_backwards(){
            for(var i = 0; i<3; i++){
                this.rotate_red()
            }
            this.get_cube() 
        }
        rotate_orange_backwards(){
            for(var i = 0; i<3; i++){
                this.rotate_orange()
            }
            this.get_cube() 
        }
        rotate_green_backwards(){
    for(var i = 0; i<3; i++){
        this.rotate_green()
    }
    this.get_cube() 
        }
        rotate_blue_backwards(){
    for(var i = 0; i<3; i++){
        this.rotate_blue()
    }
    this.get_cube() 
        }
    //#endregion
    //#region forwards
        rotate_white_forwards(){
    this.rotate_white()
    this.get_cube() 
        }
        rotate_yellow_forwards(){
    this.rotate_yellow()
    this.get_cube() 
        }
        rotate_red_forwards(){
    this.rotate_red()
    this.get_cube() 
        }
        rotate_orange_forwards(){
    this.rotate_orange()
    this.get_cube() 
        }
        rotate_green_forwards(){
    this.rotate_green()
    this.get_cube() 
        }
        rotate_blue_forwards(){
    this.rotate_blue()
    this.get_cube() 
        }
//#endregion
//#endregion
    shuffle(){
        for(var i =0; i<25; i++){
                var number = Math.round(Math.random()*13)
                if (number == 1){
                    this.rotate_blue_forwards()
                } else if(number == 2) {
                    this.rotate_green_forwards()
                } else if(number == 3) {
                    this.rotate_orange_forwards()
                } else if(number == 4) {
                    this.rotate_red_forwards()
                } else if(number == 5) {
                    this.rotate_white_forwards()
                } else if(number == 6) {
                    this.rotate_yellow()
                } else if(number == 7) {
                    this.rotate_blue_backwards()
                } else if(number == 8) {
                    this.rotate_green_backwards()
                } else if(number == 9) {
                    this.rotate_red_backwards()
                }else if(number == 10) {
                    this.rotate_white_backwards()
                }else if(number == 11) {
                    this.rotate_orange_backwards()
                }else if(number == 12) {
                    this.rotate_yellow_backwards()
                }
                else {
                    i--
                } 
        }
    }
}
var cubeA = new cube()
main()
function score_cube(){
    var score = 0
    score += white.score_face()
    score += red.score_face()
    score += blue.score_face()
    score += green.score_face()
    score += yellow.score_face()
    score += orange.score_face()
    //score += red.score_corners()
    console.log(score)
}
function solve(){
    var nex
/*
bad method but im not a cuber
method
1. find white edge rotate so its on the yellow face
2. repeate step 1 for all white edges
3. rotate yellow face so that the white sides match up with their other colour
4. rotate side
5. repeate 3 and 4 for all white edges
*/
    for(var i =0; i < 20; i++){
        //console.log(i) 
        yellow_rose()
        if(yellow_rose() == "1"){
            console.log("BREAK")
            break
        } else{
            //i--
        }
    }
    for(var i = 0; i < 20; i++){
        //console.log(i) 
        white_cross()
        if(white_cross() == "1"){
            console.log("BREAK")
            break}
    }
    for(var i = 0; i < 50; i++){
        //console.log(i) 
        white_corners()
        if(white_corners() == "1"){
            console.log("BREAK")
            break
        }
        if(i == 49){
            solve()
        }
    }
    for(var i = 0; i < 20; i++){
        console.log("NNN" + i) 
        middle_layer()
        if(middle_layer() == "1"){
            console.log("BREAK")
            break
        } 
    }//*/
    console.log("YELLOW FACE!!!")
    for(var i = 0; i < 50; i++){
        //console.log(i) 
        yellow_face()
        if(yellow_face() == "1"){
            console.log("BREAK")
            break
        } 
    }//*/
    /*
    for(var i = 0; i < 50; i++){
        console.log(i) 
        last_corners()
        if(last_corners() == "1"){
            console.log("BREAK")
            break
        } 
    }//*/
    /*for(var i = 0; i < 50; i++){
        console.log(i) 
        last_middles()
        if(last_middles() == "1"){
            console.log("BREAK")
            break
        } 
    }*/
} 
//#region  subs
function yellow_rose(){
    //red
    if (red.get_single(3) == "white"){
        if (yellow.get_single(3) == "white"){
            cubeA.rotate_yellow_forwards()
        }else{
            cubeA.rotate_green_forwards()
        }
    }
    if (red.get_single(5) == "white"){
        if (yellow.get_single(5) == "white"){
            cubeA.rotate_yellow_forwards()
        }else{
            cubeA.rotate_blue_backwards()
        }
    }
    if (red.get_single(1) == "white"){
        if (yellow.get_single(1) == "white"){
            cubeA.rotate_white_forwards()
        }else{
            cubeA.rotate_red_backwards()
        }
    }
    if (red.get_single(7) == "white"){
        if (yellow.get_single(1) == "white"){
            cubeA.rotate_yellow_forwards()
        }else{
            cubeA.rotate_red_backwards()
        }
    }
    //orange
    if (orange.get_single(5) == "white"){
        if (yellow.get_single(3) == "white"){
            cubeA.rotate_yellow_forwards()
        }else{
            cubeA.rotate_green_backwards()
        }
    }
    if (orange.get_single(3) == "white"){
        if (yellow.get_single(5) == "white"){
            cubeA.rotate_yellow_forwards()
        }else{
            cubeA.rotate_blue_forwards()
        }
    }
    if (orange.get_single(1) == "white"){
        if (yellow.get_single(7) == "white"){
            cubeA.rotate_white_forwards()
        }else{
            cubeA.rotate_orange_backwards()
        }
    }
    if (orange.get_single(7) == "white"){
        if (yellow.get_single(7) == "white"){
            cubeA.rotate_yellow_forwards()
        }else{
            cubeA.rotate_orange_backwards()
        }
    }
    //blue
    if (blue.get_single(5) == "white"){
        if (yellow.get_single(7) == "white"){
            cubeA.rotate_yellow_forwards()
        }else{
            cubeA.rotate_orange_backwards()
        }
    }
    if (blue.get_single(3) == "white"){
        if (yellow.get_single(1) == "white"){
            cubeA.rotate_yellow_forwards()
        }else{
            cubeA.rotate_red_forwards()
        }
    }
    if (blue.get_single(1) == "white"){
        if (yellow.get_single(5) == "white"){
            cubeA.rotate_white_forwards()
        }else{
            cubeA.rotate_blue_backwards()
        }
    }
    if (blue.get_single(7) == "white"){
        if (yellow.get_single(5) == "white"){
            cubeA.rotate_yellow_forwards()
        }else{
            cubeA.rotate_blue_backwards()
        }
    }
    //green
    if (green.get_single(5) == "white"){
        if (yellow.get_single(1) == "white"){
            cubeA.rotate_yellow_forwards()
        }else{
            cubeA.rotate_red_backwards()
        }
    }
    if (green.get_single(3) == "white"){
        if (yellow.get_single(7) == "white"){
            cubeA.rotate_yellow_forwards()
        }else{
            cubeA.rotate_orange_forwards()
        }
    }
    if (green.get_single(1) == "white"){
        if (yellow.get_single(3) == "white"){
            cubeA.rotate_white_forwards()
        }else{
            cubeA.rotate_green_backwards()
        }
    }
    if (green.get_single(7) == "white"){
        if (yellow.get_single(3) == "white"){
            cubeA.rotate_yellow_forwards()
        }else{
            cubeA.rotate_green_backwards()
        }
    }
    //white
    if (white.get_single(1) == "white"){
        if (yellow.get_single(1) == "white"){
            cubeA.rotate_white_forwards()
        }else{
            cubeA.rotate_red()
            cubeA.rotate_red_forwards()
        }
    }
    if (white.get_single(3) == "white"){
        if (yellow.get_single(5) == "white"){
            cubeA.rotate_white_forwards()
        }else{
            cubeA.rotate_blue()
            cubeA.rotate_blue_forwards()
        }
    }
    if (white.get_single(5) == "white"){
        if (yellow.get_single(3) == "white"){
            cubeA.rotate_white_forwards()
        }else{
            cubeA.rotate_green()
            cubeA.rotate_green_forwards()
        }
    }
    if (white.get_single(7) == "white"){
        if (yellow.get_single(7) == "white"){
            cubeA.rotate_white_forwards()
        }else{
            cubeA.rotate_orange_forwards()
            cubeA.rotate_orange()
        }
    }
    //done?
    if (yellow.get_single(1) == "white" && yellow.get_single(3) == "white" && yellow.get_single(5) == "white" && yellow.get_single(7) == "white"){
        return "1"
    } else{
        return "0"
    }
    
}
function white_cross(){
    if (blue.get_single(7) == "blue" && yellow.get_single(5) == "white"){
        cubeA.rotate_blue()
        cubeA.rotate_blue()
    }
    if (red.get_single(7) == "red" && yellow.get_single(1) == "white"){
        cubeA.rotate_red()
        cubeA.rotate_red()
    }
    if (green.get_single(7) == "green" && yellow.get_single(3) == "white"){
        cubeA.rotate_green()
        cubeA.rotate_green()
    }
    if (orange.get_single(7) == orr && yellow.get_single(7) == "white"){
        cubeA.rotate_orange()
        cubeA.rotate_orange()
    }
    cubeA.rotate_yellow_forwards()
    if (white.get_single(1) == "white" && white.get_single(3) == "white" && white.get_single(5) == "white" && white.get_single(7) == "white"){
        return "1"
    } else{
        return "0"
    }
}
function white_corners(){
    var moved = false
    //console.log("CORNERS!!!")
    //#region best cases
    //blue
    if (red.get_single(8) == "white" && blue.get_single(6) == "blue"){
        moved = true
        cubeA.rotate_yellow_backwards()
        cubeA.rotate_blue_backwards()
        cubeA.rotate_yellow()
        cubeA.rotate_blue_forwards()
    }
    if (orange.get_single(6) == "white" && blue.get_single(8) == "blue"){
        moved = true
        cubeA.rotate_yellow()
        cubeA.rotate_blue()
        cubeA.rotate_yellow_backwards()
        cubeA.rotate_blue_backwards()
    }
    //orange
    if (blue.get_single(8) == "white" && orange.get_single(6) == orr){
        moved = true
        cubeA.rotate_yellow_backwards()
        cubeA.rotate_orange_backwards()
        cubeA.rotate_yellow()
        cubeA.rotate_orange_forwards()
    }
    if (green.get_single(6) == "white" && orange.get_single(8) == orr){
        moved = true
        cubeA.rotate_yellow()
        cubeA.rotate_orange()
        cubeA.rotate_yellow_backwards()
        cubeA.rotate_orange_backwards()
    }
    //green
    if (orange.get_single(8) == "white" && green.get_single(6) == "green"){
        moved = true
        cubeA.rotate_yellow_backwards()
        cubeA.rotate_green_backwards()
        cubeA.rotate_yellow()
        cubeA.rotate_green_forwards()
    }
    if (red.get_single(6) == "white" && green.get_single(8) == "green"){
        moved = true
        cubeA.rotate_yellow()
        cubeA.rotate_green()
        cubeA.rotate_yellow_backwards()
        cubeA.rotate_green_backwards()
    }
    //red
    if (green.get_single(8) == "white" && red.get_single(6) == "red"){
        moved = true
        cubeA.rotate_yellow_backwards()
        cubeA.rotate_red_backwards()
        cubeA.rotate_yellow()
        cubeA.rotate_red_forwards()
    }
    if (blue.get_single(6) == "white" && red.get_single(8) == "red"){
        moved = true
        cubeA.rotate_yellow()
        cubeA.rotate_red()
        cubeA.rotate_yellow_backwards()
        cubeA.rotate_red_backwards()
    }
    //#endregion
    //#region top layer/wrong white/yellow
    //yellow
    if(yellow.get_single(0) == "white"){
        if(white.get_single(2) == "white"){
            cubeA.rotate_yellow_forwards()
        } else{
            cubeA.rotate_green()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_green_backwards()
        }
    }
    if(yellow.get_single(2) == "white"){
        if(white.get_single(0) == "white"){
            cubeA.rotate_yellow_forwards()
        } else{
            cubeA.rotate_blue_backwards()
            cubeA.rotate_yellow()
            cubeA.rotate_blue_forwards()
        }
    }
    if(yellow.get_single(6) == "white"){
        if(white.get_single(8) == "white"){
            cubeA.rotate_yellow_forwards()
        } else{
            cubeA.rotate_green_backwards()
            cubeA.rotate_yellow()
            cubeA.rotate_green_forwards()
        }
    }
    if(yellow.get_single(8) == "white"){
        if(white.get_single(6) == "white"){
            cubeA.rotate_yellow_forwards()
        } else{
            cubeA.rotate_blue()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_blue_backwards()
        }
    }
    //white and top
    if (moved == false && nums == 0){
        //console.log("am i right?")
        if ((white.get_single(0) !== "white") || (red.get_single(2) !== "red" || blue.get_single(0) !== "blue")){
            //console.log("AAA")
            cubeA.rotate_red()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_red_backwards()
        }
        if ((white.get_single(2) !== "white") || (red.get_single(0) !== "red" || green.get_single(2) !== "green")){
            //console.log("BBB")
            cubeA.rotate_green()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_green_backwards()
        }
        if ((white.get_single(6) !== "white") || (orange.get_single(0) !== orr || blue.get_single(2) !== "blue")){
            //console.log("CCC")
        cubeA.rotate_blue()
        cubeA.rotate_yellow_backwards()
        cubeA.rotate_blue_backwards()
        }
        if ((white.get_single(8) !== "white") || (orange.get_single(2) !== orr || green.get_single(0) !== "green")){
            //console.log("DDD")
            cubeA.rotate_orange()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_orange_backwards()
        }
        //console.log("END@@@@@@@@@@@@@@")
    } else {
    cubeA.rotate_yellow_forwards()
    }

    //this is terrible and i need to fix it
    if(nums == 0){
        nums = 1
    } else {
        nums =0
    }
    //console.log(moved)
    //#endregion
    /* SERIOUSLY javascript no easy way of array1 == array2? 
    console.log(blue.get_colour([0,1,2]))
    if (blue.get_colour([0,1,2]) == ["blue", "blue", "blue"]){
        console.log("BLUE!!!!!!")
    }
    */
    if(red.score_top() == 1 && blue.score_top() == 1 && green.score_top() == 1 && orange.score_top() == 1){
        if(white.score_face() == 1){
            //console.log("GOOOOOOD")
            return "1"
        } else{
            //console.log("NOT GOOOD")
            return "0"
        }
    } else{
        //console.log("HERERE???")
        return "0"
    }

}
function middle_layer(){
    if(red.get_single(7) == "red"){
        console.log(1)
        trig = true
        if(yellow.get_single(1) == "blue"){
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_blue_backwards()
            cubeA.rotate_yellow()
            cubeA.rotate_blue()
            cubeA.rotate_yellow()
            cubeA.rotate_red()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_red_backwards()
        } else if (yellow.get_single(1) == "green"){
            cubeA.rotate_yellow()
            cubeA.rotate_green()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_green_backwards()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_red_backwards()
            cubeA.rotate_yellow()
            cubeA.rotate_red_forwards()
        }
    }
    if(blue.get_single(7) == "blue"){
        console.log(2)
        trig = true
        if (yellow.get_single(5) == "red") {
            cubeA.rotate_yellow()
            cubeA.rotate_red()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_red_backwards()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_blue_backwards()
            cubeA.rotate_yellow()
            cubeA.rotate_blue_forwards()
        } else if (yellow.get_single(5) == orr){
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_orange_backwards()
            cubeA.rotate_yellow()
            cubeA.rotate_orange()
            cubeA.rotate_yellow()
            cubeA.rotate_blue()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_blue_backwards()
        }
    }
    if(green.get_single(7) == "green"){
        console.log(3)
        trig = true
        if (yellow.get_single(3) == "red") {
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_red_backwards()
            cubeA.rotate_yellow()
            cubeA.rotate_red()
            cubeA.rotate_yellow()
            cubeA.rotate_green()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_green_backwards()
        } else if (yellow.get_single(3) == orr){
            cubeA.rotate_yellow()
            cubeA.rotate_orange()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_orange_backwards()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_green_backwards()
            cubeA.rotate_yellow()
            cubeA.rotate_green_forwards()
        }
    }
    if(orange.get_single(7) == orr){
        console.log(4)
        trig = true
        if (yellow.get_single(7) == "blue") {
            cubeA.rotate_yellow()
            cubeA.rotate_blue()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_blue_backwards()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_orange_backwards()
            cubeA.rotate_yellow()
            cubeA.rotate_orange_forwards()
        } else if (yellow.get_single(7) == "green"){
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_green_backwards()
            cubeA.rotate_yellow()
            cubeA.rotate_green()
            cubeA.rotate_yellow()
            cubeA.rotate_orange()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_orange_backwards()
        }
    
    
    }
    var jaun = false
    if((yellow.get_single(1) == "yellow" || red.get_single(7) == "yellow")&&
       (yellow.get_single(3) == "yellow" || green.get_single(7) == "yellow")&&
       (yellow.get_single(5) == "yellow" || blue.get_single(7) == "yellow")&&
       (yellow.get_single(7) == "yellow" || orange.get_single(7) == "yellow")&& trig == false){
        console.log(5)
        if((green.get_single(3) !== "green" || orange.get_single(5) !== orr) && jaun == false){
            console.log("?????")
            jaun = true
            cubeA.rotate_yellow()
            cubeA.rotate_orange()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_orange_backwards()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_green_backwards()
            cubeA.rotate_yellow()
            cubeA.rotate_green()
        }
        if((green.get_single(5) !== "green" || red.get_single(3) !== "red") && jaun == false){
            jaun = true
            console.log("NOT HERE?")
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_red_backwards()
            cubeA.rotate_yellow()
            cubeA.rotate_red()
            cubeA.rotate_yellow()
            cubeA.rotate_green()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_green_backwards()
        }
        if((green.get_single(3) !== "blue" || red.get_single(5) !== "red") && jaun == false){
            jaun = true
            cubeA.rotate_yellow()
            cubeA.rotate_red()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_red_backwards()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_blue_backwards()
            cubeA.rotate_yellow()
            cubeA.rotate_blue()
        }
        if((green.get_single(5) !== "blue" || orange.get_single(3) !== orr ) && jaun == false){
            jaun = true
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_orange_backwards()
            cubeA.rotate_yellow()
            cubeA.rotate_orange()
            cubeA.rotate_yellow()
            cubeA.rotate_blue()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_blue_backwards()
        }
    }
    trig = false
    cubeA.rotate_yellow_forwards()
    if(red.score_middle_across() == 1 && green.score_middle_across() == 1 && orange.score_middle_across() == 1 && blue.score_middle_across() == 1){
        return 1
    } else{
        return 0
    }

}
//#endregion
function yellow_face(){
    /*
    1. line
    2. lightning
    3. fish/ 2 corners/ t/ CROSS
    */
    if(yellow.score_cross() == 1){  
        console.log("cross")
        if(yellow.score_TL() == 1 || yellow.score_TR() == 1 || yellow.score_BL() == 1|| yellow.score_BR()  ==1 ){
            console.log("+1")
            //while (yellow.score_BL() == 0 && yellow.score_BR() == 0){
            //    cubeA.rotate_yellow()
            //}
        }
            cubeA.rotate_blue()
            cubeA.rotate_yellow()
            cubeA.rotate_blue_backwards()
            cubeA.rotate_yellow()
            cubeA.rotate_blue()
            cubeA.rotate_yellow()
            cubeA.rotate_yellow()
            cubeA.rotate_blue_backwards()        
    } else{
        console.log("NO cross")
        if (yellow.score_middle_down() + yellow.score_middle_across() == 1){
            console.log("line")
            if(yellow.score_middle_down() == 1){
                cubeA.rotate_yellow()
            }
            if(yellow.score_middle_across() == 1){
                console.log("middle line")
                cubeA.rotate_red()
                cubeA.rotate_green()
                cubeA.rotate_yellow()
                cubeA.rotate_green_backwards()
                cubeA.rotate_yellow_backwards()
                cubeA.rotate_red_backwards()
            }
        } else{
            console.log("other")
            cubeA.rotate_red()
            cubeA.rotate_yellow()
            cubeA.rotate_green()
            cubeA.rotate_yellow_backwards()
            cubeA.rotate_green_backwards()
            cubeA.rotate_red_backwards()

        }     
    }
    if (yellow.score_face() == 1){
        return 1
    }
    return 0

}
function last_corners(){

}
function last_middles(){

}
function main(){
   
}