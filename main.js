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
}
//set up of each face
const red = new face(2);
const orange = new face(3);
const blue = new face(1);
const green = new face(4);
const yellow = new face(5);
const white = new face(0);
const temp = new face(99999);
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
    var sets = [0,1,2]
    temp.set_colour(red.get_colour(sets),sets)
    red.set_colour(blue.get_colour(sets),sets)
    blue.set_colour(orange.get_colour(sets),sets)
    orange.set_colour(green.get_colour(sets),sets)
    green.set_colour(temp.get_colour(sets),sets)
}
function rotate_yellow(){
    var sets = [6,7,8]
    temp.set_colour(red.get_colour(sets),sets)
    red.set_colour(blue.get_colour(sets),sets)
    blue.set_colour(orange.get_colour(sets),sets)
    orange.set_colour(green.get_colour(sets),sets)
    green.set_colour(temp.get_colour(sets),sets)
}
function rotate_red(){
    var sets = [6,7,8]
    temp.set_colour(white.get_colour(sets),sets)
    red.set_colour(blue.get_colour(sets),sets)
    blue.set_colour(orange.get_colour(sets),sets)
    orange.set_colour(green.get_colour(sets),sets)
    green.set_colour(temp.get_colour(sets),sets)
}




function main(){
    rotate_yellow()
    get_cube()
}