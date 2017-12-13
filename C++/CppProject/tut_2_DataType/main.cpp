#include <iostream>

using namespace std;

int main(int argc, char** argv) {
    bool isBool = true;
    char ch = 'A';
    int i = 19;
    float f = 1.23432;
    double d = 0.23423423;
    
    cout << "isBool " << isBool << endl;
    cout << "ch " << ch << endl;
    cout << "i " << i << endl;
    cout << "f " << f << endl;
    cout << "d " << d << endl;
    
    // the size of each data type
    cout << "Size of char : " << sizeof(char) << endl;
    cout << "Size of int : " << sizeof(int) << endl;
    cout << "Size of short int : " << sizeof(short int) << endl;
    cout << "Size of long int : " << sizeof(long int) << endl;
    cout << "Size of float : " << sizeof(float) << endl;
    cout << "Size of double : " << sizeof(double) << endl;
    
    
    return 0;
}

