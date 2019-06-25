var faces_displayed = 0
//set up of the faces as objects
class face {
    center;
    colour;
    constructor(num){
        this.colour = [0,0,0,0,0,0,0,0,0]
        this.center = num;
        for(let i = 0; i < 9; i++){
            this.colour[i] = num;
        }
        return 0;
    }
    reset_face(num){
        this.colour = [0,0,0,0,0,0,0,0,0]
        this.center = num;
        for(let i = 0; i < 9; i++){
            this.colour[i] = num;
        }
        return 0;
    }
    get_colour(ptr){
        var value = [0,0,0]
        value[0] = this.colour[ptr[0]]
        value[1] = this.colour[ptr[1]]
        value[2] = this.colour[ptr[2]]
        return value; 
    }
    get_single(ptr){
        var value = 0
        value = this.colour[ptr]
        return value;
    }
    set_colour(new_colour, pattern){
        this.colour[pattern[0]] = new_colour[0];
        this.colour[pattern[1]] = new_colour[1];
        this.colour[pattern[2]] = new_colour[2];
        return 0;
    }
    get_face(){
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
}
//set up of each face
const red = new face("red");
const orange = new face("orange");
const blue = new face("blue");
const green = new face("green");
const yellow = new face("yellow");
const white = new face("white");
const temp = new face(99999);
//red.set_face([0,1,2,3,4,5,6,7,8,9])
let set1 = [0,1,2]
var set2 = [2,5,8]
var set3 = [6,7,8]
var set4 = [0,3,6]
function reset(){
    red.reset_face("red")
    white.reset_face("white")
    blue.reset_face("blue")
    yellow.reset_face("yellow")
    orange.reset_face("orange")
    green.reset_face("green")
    get_cube()

}
main()
//cube display
function get_cube(){  
       //console.log("WHITE:")
       white.get_face()
       //console.log("BLUE:")
       blue.get_face()
       //console.log("RED:")
       red.get_face()
       //console.log("ORANGE:")
       orange.get_face()
       //console.log("GREEN:")
       green.get_face()
       //console.log("YELLOW:")
       yellow.get_face()
       faces_displayed = 0
}
//set up rotations
function rotate_white(){
    temp.set_colour(red.get_colour(set1         ),      set1)
    red.set_colour(blue.get_colour(set1         ),      set1)
    blue.set_colour(orange.get_colour(set1      ),      set1)
    orange.set_colour(green.get_colour(set1     ),      set1)
    green.set_colour(temp.get_colour(set1       ),      set1)
    white.rotate_face()
    get_cube()
}
function rotate_yellow(){
    temp.set_colour(red.get_colour(set3         ),      set3)
    red.set_colour(green.get_colour(set3        ),      set3)
    green.set_colour(orange.get_colour(set3     ),      set3)
    orange.set_colour(blue.get_colour(set3      ),      set3)
    blue.set_colour(temp.get_colour(set3        ),      set3)
    yellow.rotate_face()
    get_cube()
}
function rotate_red(){
    temp.set_colour(white.get_colour(set1       ),      set1);
    white.set_colour(green.get_colour(set2      ),      set1);
    green.set_colour(yellow.get_colour(set1     ),      set2);
    yellow.set_colour(blue.get_colour([6,3,0]      ),      set1);
    blue.set_colour(temp.get_colour(set1        ),      [6,3,0]);
    red.rotate_face()
    get_cube()
}
function rotate_orange(){
    temp.set_colour(white.get_colour(set3       ),      set1);
    white.set_colour(blue.get_colour(set2       ),      [8,7,6]);
    blue.set_colour(yellow.get_colour(set3      ),      set2);
    yellow.set_colour(green.get_colour([6,3,0]     ),      set3);
    green.set_colour(temp.get_colour(set1       ),      [0,3,6]);
    orange.rotate_face()
    get_cube()
}
//green and blue rotations need to be fixed.
function rotate_green(){
    temp.set_colour(white.get_colour([8,5,2]     ),      set1);
    white.set_colour(orange.get_colour(set2    ),      [8,5,2]);
    orange.set_colour(yellow.get_colour(set2   ),      set2);
    yellow.set_colour(red.get_colour(set4      ),      set2);
    red.set_colour(temp.get_colour(set1        ),      set4);
    green.rotate_face()
    get_cube()
}
function rotate_blue(){
    temp.set_colour(white.get_colour(set4       ),      set1);
    white.set_colour(red.get_colour(set2        ),      set4);
    red.set_colour(yellow.get_colour(set4       ),      set2);
    yellow.set_colour(orange.get_colour(set4    ),      set4);
    orange.set_colour(temp.get_colour(set1      ),      set4);
    blue.rotate_face()
    get_cube()
}
function main(){
    //just testing at the moment
    //rotate_white()
    
    /*rotate_green()
       // /*
    rotate_white()
    rotate_green()

    rotate_white()
    rotate_green()//*/
    get_cube()
}