#include<iostream>

using namespace std;

/*
 * 
 */
int main(int argc, char** argv) {
    
//  1st way
    enum Col1 { red, green, blue };
    Col1 b = blue;
    Col1 g = green;
    Col1 r = red;
    
    cout << "b: " << b << endl;
    cout << "g: " << g << endl;
    cout << "r: " << r << endl;
//  can't redclare red or green again 
//    enum ColErr { red, green, blue };
    
    
//    snd way 
    enum Col2 { blue1 = 10 } c;
    c = blue1;
    cout << "c: " << c << endl;
    
    return 0;
}

