#include <iostream>

using namespace std;

void printName(string name);

int main(int argc, char** argv) {
    
//    cout << "Hello, Ali" << endl;
    
    printName("Ali");
    
    // the best way about fun
    string name2 = "Mike";
    printName(name2);
    
    return 0;
}


void printName(string name) 
{
    cout << "Hello, " << name << endl;
}




