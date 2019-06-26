//#region set up and cube rotations
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
    score_face(){
        var score = 0
        score = this.score_bottom() + this.score_top() + this.score_middle_across()
        console.log("middle- "+ this.score_middle_across() + " " + score)
        if (score == 3){
            return 1
        } else {
            return 0
        }
    }
    //#endregion 
    //#endregion 
}
function setup(){
    //set up golbal variables and initialization of cube
    window.faces_displayed = 0
    window.red = new face("red");
    window.orange = new face("#ff9000");
    window.blue = new face("blue");
    window.green = new face("green");
    window.yellow = new face("yellow");
    window.white = new face("white");
    window.temp = new face(99999);
    get_cube()
    
}
function reset(){
    //resest to solved state
    red.reset_face("red")
    white.reset_face("white")
    blue.reset_face("blue")
    yellow.reset_face("yellow")
    orange.reset_face("#ff9000")
    green.reset_face("green")
    get_cube()
    console.clear()
}
function get_cube(){  
       //displays the entire
       white.get_face()
       blue.get_face()
       red.get_face()
       orange.get_face()
       green.get_face()
       yellow.get_face()
       faces_displayed = 0
}
//#region   rotation functions
//set up rotations
function rotate_white(){
    temp.set_colour(red.get_colour([0,1,2]         ),      [0,1,2])
    red.set_colour(blue.get_colour([0,1,2]         ),      [0,1,2])
    blue.set_colour(orange.get_colour([0,1,2]      ),      [0,1,2])
    orange.set_colour(green.get_colour([0,1,2]     ),      [0,1,2])
    green.set_colour(temp.get_colour([0,1,2]       ),      [0,1,2])
    white.rotate_face()
    console.log("WHITE")
    get_cube()
}
function rotate_yellow(){
    temp.set_colour(red.get_colour([6,7,8]         ),      [6,7,8])
    red.set_colour(green.get_colour([6,7,8]        ),      [6,7,8])
    green.set_colour(orange.get_colour([6,7,8]     ),      [6,7,8])
    orange.set_colour(blue.get_colour([6,7,8]      ),      [6,7,8])
    blue.set_colour(temp.get_colour([6,7,8]        ),      [6,7,8])
    yellow.rotate_face()
    get_cube()
    console.log("YELLOW")
}
function rotate_red(){
    temp.set_colour(white.get_colour([2,1,0]    ),   [0,1,2]);
    white.set_colour(green.get_colour([8,5,2]  ),   [2,1,0]);
    green.set_colour(yellow.get_colour([0,1,2]  ),   [8,5,2]);
    yellow.set_colour(blue.get_colour([0,3,6]),   [0,1,2]);
    blue.set_colour(temp.get_colour([0,1,2]     ),   [0,3,6]);
    red.rotate_face()
    get_cube()
    console.log("RED")
}
function rotate_orange(){
    temp.set_colour(white.get_colour([6,7,8]  ), [0,1,2]);
    white.set_colour(blue.get_colour([8,5,2]  ), [6,7,8]);
    blue.set_colour(yellow.get_colour([8,7,6] ), [8,5,2]);
    yellow.set_colour(green.get_colour([0,3,6]), [8,7,6]);
    green.set_colour(temp.get_colour([0,1,2]     ), [0,3,6]);
    orange.rotate_face()
    get_cube()
    console.log("ORANGE")
}
function rotate_green(){
    temp.set_colour(white.get_colour([8,5,2]  ),[0,1,2]);
    white.set_colour(orange.get_colour([8,5,2]),[8,5,2]);
    orange.set_colour(yellow.get_colour([2,5,8]  ),[8,5,2]);
    yellow.set_colour(red.get_colour([0,3,6]  ),[2,5,8]);
    red.set_colour(temp.get_colour([0,1,2]       ),[0,3,6]);
    green.rotate_face()
    get_cube()
    console.log("GREEN")
}
function rotate_blue(){
    temp.set_colour(white.get_colour([0,3,6]   ),[0,1,2]);
    white.set_colour(red.get_colour([8,5,2]    ),[0,3,6]);
    red.set_colour(yellow.get_colour([0,3,6]   ),[8,5,2]);
    yellow.set_colour(orange.get_colour([0,3,6]),[0,3,6]);
    orange.set_colour(temp.get_colour([0,1,2]  ),[0,3,6]);
    blue.rotate_face()
    get_cube()
    console.log("BLUE")
}
function rotate_white_backwards(){
    for(var i = 0; i<3; i++){
        rotate_white()
    }
}
function rotate_yellow_backwards(){
    for(var i = 0; i<3; i++){
        rotate_yellow()
    }
}
function rotate_red_backwards(){
    for(var i = 0; i<3; i++){
        rotate_red()
    }
}
function rotate_orange_backwards(){
    for(var i = 0; i<3; i++){
        rotate_orange()
    }
}
function rotate_green_backwards(){
    for(var i = 0; i<3; i++){
        rotate_green()
    }
}
function rotate_blue_backwards(){
    for(var i = 0; i<3; i++){
        rotate_blue()
    }
}
//#endregion
//#endregion
setup()
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
function shuffle(){
    for(var i =0; i<1000; i++){
        var number = Math.round(Math.random()*13)
        if (number == 1){
            rotate_blue()
        } else if(number == 2) {
            rotate_green()
        } else if(number == 3) {
            rotate_orange()
        } else if(number == 4) {
            rotate_red()
        } else if(number == 5) {
            rotate_white()
        } else if(number == 6) {
            rotate_yellow()
        } else if(number == 7) {
            rotate_blue_backwards()
        } else if(number == 8) {
            rotate_green_backwards()
        } else if(number == 9) {
            rotate_red_backwards()
        }else if(number == 10) {
            rotate_white_backwards()
        }else if(number == 11) {
            rotate_orange_backwards()
        }else if(number == 12) {
            rotate_yellow_backwards()
        }
        else {
            i--
        } 
    }
}
function main(){
   /* var count = [0,0,0,0,0,0]
    for(var i = 0; i < 99999999; i++){
    count[Math.round(Math.random()*5)]++
    }
    count[0] = count[0]*2
    count[5] = count[5]*2
    console.log(count) */
}
