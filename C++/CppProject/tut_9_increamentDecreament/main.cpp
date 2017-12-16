#include <iostream>

using namespace std;


int main(int argc, char** argv) {
    int inc = 0;
    cout << "inc = " << inc << endl;
    
    cout << "inc = " << ++inc << endl;
    cout << "inc = " << inc++ << endl;
    cout << "inc = " << inc << endl;
    
    inc += 1;
    cout << "inc = " << inc << endl;
    
    inc += 5;
    cout << "inc = " << inc << endl;
    
    int dec = 10;
    cout << "dec = " << dec << endl;
    cout << "dec = " << --dec << endl;
    cout << "dec = " << dec-- << endl;
    cout << "dec = " << dec << endl;
    
    dec -= 1;
    cout << "dec = " << dec << endl;
    
    dec -= 5;
    cout << "dec = " << dec << endl;
    
    int age = 10;
    
    cout << "age *= 2 => " << (age *= 2) << endl;
    cout << "age /= 2 => " << (age /= 2) << endl;
    cout << "age %= 2 => " << (age %= 2) << endl;
            
    
    
    return 0;
}

