#include <iostream>

using namespace std;

int main(int argc, char** argv) {
    int i = 0;
    
    while(i < 10){
        cout << i << endl;
        i++; // important
    }
    
    i = 100;
    while(i >= 0){
        cout << i << endl;
        i-=10;
    }
    
    // infinite loop
    
    while(true){
        
    }
    i = 9;
    while(i == 9){
        // not change for i
    }
    
    
    
    return 0;
}

