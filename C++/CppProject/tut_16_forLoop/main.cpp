#include <iostream>

using namespace std;

int main(int argc, char** argv) {
//    for(start, condition, inc))
    
    for(int i = 0; i < 10; i++){
        cout << i << endl;
    }
    
    cout << endl;
    
    for(int i = 10; i < 101; i+=10){
        cout << i << endl;
    }
    
    cout << endl;
    
    for(int i = 100; i >= 0; i-=10){
        cout << i << endl;
    }
    
    for(int i = 1; true; i++)
        cout << i << endl;
    
    for(int i = 1; false; i++)
        cout << i << endl;
    
    for(;;){
        cout << "infinite Loop" << endl;
    }
    
    
    return 0;
}

