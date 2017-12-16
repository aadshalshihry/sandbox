#include <iostream>

using namespace std;

int main(int argc, char** argv) {
    
    
    string s = "Hello world";
    
    cout << "The string " << s << endl;
    
    // s length
    cout << "The length " << s.length() << endl;
    
    s.append(", new Str add");
    cout << s << endl;
    
    // == 
    string cmp1 = "Test";
    string cmp2 = "Test";
    
    cout << "cmp1 == cmp2 " << cmp1.compare(cmp2) << endl;
    
    // greater than
    string cmp3 = "Test";
    string cmp4 = "T";
    
    cout << "cmp3 > cmp4 " << cmp3.compare(cmp4) << endl;
    
    // reuse var
    // less than
    cmp3 = "T";
    cmp4 = "Test";
    
    cout << "cmp3 > cmp4 " << cmp3.compare(cmp4) << endl;
    
    
    return 0;
}

