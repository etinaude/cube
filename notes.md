this is a description and notes before I write the code

this is based on the original [rubiks original magic cube puzzle](https://www.rubiks.com/about)

6 faces

side with the ___ center peice will be refered to as ____ and sides will be refered to as ____

White   W     0
Blue    B     1
Red     R     2
orange  O     3
Green   G     4
Yellow  Y     5

oposite centers should add to 5

each side will be reperesented as a 3x3 multi-dementional array eg

0 0 0     1 1 1     2 2 2     3 3 3     4 4 4     5 5 5
0 0 0     1 1 1     2 2 2     3 3 3     4 4 4     5 5 5
0 0 0     1 1 1     2 2 2     3 3 3     4 4 4     5 5 5

(this is the solved state)


White and Yellow are opposite
Blue and Green are opposite
Orange and Red are opposite




Some facts I'm using
0.center squares cannot change their possition (relatively) 
1.turing anti-clockwise == turing clockwise 3 times 
2.turing the middle clockwise ==  turing both sides anti clockwise
(yes this is mega inefficient since turing the center clockwise [normally 1{debatly} move] requires 6 moves) 
