/*
  r             0 1 2 
b w g           3 4 5 
  o             6 7 8
  y
*/
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
    get_colour(ptr){
        var value = [0,0,0]
        value[0] = this.colour[ptr[0]]
        value[1] = this.colour[ptr[1]]
        value[2] = this.colour[ptr[2]]
        return value; 
    }
    set_colour(new_colour, pattern){
        this.colour[pattern[0]] = new_colour[0];
        this.colour[pattern[1]] = new_colour[1];
        this.colour[pattern[2]] = new_colour[2];
        return 0;
    }
    get_face(){
        console.log(this.colour[0] + "  " + this.colour[1] + "  " + this.colour[2] + "  ")
        console.log(this.colour[3] + "  " + this.colour[4] + "  " + this.colour[5] + "  ")
        console.log(this.colour[6] + "  " + this.colour[7] + "  " + this.colour[8] + "  ")
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
const red = new face("R");
const orange = new face("O");
const blue = new face("B");
const green = new face("G");
const yellow = new face("y");
const white = new face("W");
const temp = new face(99999);
let set1 = [0,1,2]
var set2 = [2,5,8]
var set3 = [6,7,8]
var set4 = [0,3,6]
main()
//cube display
function get_cube(){  
       console.log("WHITE:")
       white.get_face()
       console.log("BLUE:")
       blue.get_face()
       console.log("RED:")
       red.get_face()
       console.log("ORANGE:")
       orange.get_face()
       console.log("GREEN:")
       green.get_face()
       console.log("YELLOW:")
       yellow.get_face()
}
//set up rotations
function rotate_white(){
    temp.set_colour(red.get_colour(set1         ),      set1)
    red.set_colour(blue.get_colour(set1         ),      set1)
    blue.set_colour(orange.get_colour(set1      ),      set1)
    orange.set_colour(green.get_colour(set1     ),      set1)
    green.set_colour(temp.get_colour(set1       ),      set1)
    white.rotate_face()
}
function rotate_yellow(){
    temp.set_colour(red.get_colour(set3         ),      set3)
    red.set_colour(green.get_colour(set3        ),      set3)
    green.set_colour(orange.get_colour(set3     ),      set3)
    orange.set_colour(blue.get_colour(set3      ),      set3)
    blue.set_colour(temp.get_colour(set3        ),      set3)
    yellow.rotate_face()
}
function rotate_red(){
    temp.set_colour(white.get_colour(set1       ),      set1);
    white.set_colour(green.get_colour(set2      ),      set1);
    green.set_colour(yellow.get_colour(set1     ),      set2);
    yellow.set_colour(blue.get_colour([6,3,0]      ),      set1);
    blue.set_colour(temp.get_colour(set1        ),      [6,3,0]);
    red.rotate_face()
}
//orange, green and blue rotations need to be fixed.
function rotate_orange(){
    temp.set_colour(white.get_colour(set3       ),      set1);
    white.set_colour(blue.get_colour([8,5,2]       ),      [8,7,6]);
    blue.set_colour(yellow.get_colour(set3      ),      set2);
    yellow.set_colour(green.get_colour([6,3,0]     ),      set3);
    green.set_colour(temp.get_colour(set1       ),      [6,3,0]);
    orange.rotate_face()
}
function rotate_green(){
    temp.set_colour(white.get_colour(set2      ),      set1);
    white.set_colour(orange.get_colour(set2    ),      set2);
    orange.set_colour(yellow.get_colour(set2   ),      set2);
    yellow.set_colour(red.get_colour(set1      ),      set2);
    red.set_colour(temp.get_colour(set1        ),      set2);
    green.rotate_face()
}
function rotate_blue(){
    temp.set_colour(white.get_colour(set4       ),      set1);
    white.set_colour(red.get_colour(set2        ),      set4);
    red.set_colour(yellow.get_colour(set4       ),      set2);
    yellow.set_colour(orange.get_colour(set4    ),      set4);
    orange.set_colour(temp.get_colour(set1      ),      set4);
    blue.rotate_face()
}


function main(){
    //just testing at the moment
    rotate_white()
    rotate_orange()

    rotate_white()
    rotate_orange()

    rotate_white()
    rotate_orange()
    get_cube()
}