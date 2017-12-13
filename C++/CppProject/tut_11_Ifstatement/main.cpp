#include <iostream>

using namespace std;


int main(int argc, char** argv) {
    int age = 15;
    /*
     *  == equest
     *  != equel
     *  < less
     *  > geater
     *  >= greate or equal
     *  <= less than or equal
     */
    
    // print
    if (age == 15){
        cout << "you're still young" << endl;
    }
    
    // print  
    if (age != 25) {
        cout << "not equal " << 25 << endl;
    }
    
    // not print
    if (age == 25) {
        cout << "you're not young" << endl;
    }
    
    // not print
    if (age != 15){
        cout << "it will not print" << endl;
    }
    
    if(true){
        // print
    }
    
    if (false){
//        not print
    }
    
    
    // {1, 00}
    // {-1, -00}
    // {all char}
    cout << "true = " << true << endl;
    // {0, false}
    cout << "false = " << false << endl;
    
    
    cout << "5 == 5 => " <<  (5 == 5) << endl;
    cout << "5 != 5 => " <<  (5 != 5) << endl;
    cout << endl;
    cout << "5 > 5 => " <<  (5 > 5) << endl;
    cout << "5 > 3 => " <<  (5 > 3) << endl;
    cout << "1 > 3 => " <<  (1 > 3) << endl;
    cout << endl;
    cout << "5 < 5 => " <<  (5 < 5) << endl;
    cout << "5 < 3 => " <<  (5 < 3) << endl;
    cout << "1 < 3 => " <<  (1 < 3) << endl;
    
    
    if(age)
        cout << endl << "if(age) print.. " <<endl;
    
    if(!age)
        cout << endl << "if(!age) print.. " <<endl;
    
    cout << endl << "!age " << (!age) << endl;
    
    
    return 0;
}

