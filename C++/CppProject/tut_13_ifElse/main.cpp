#include <iostream>

using namespace std;

int main(int argc, char** argv) {
    int age;
    cout << "What is your age: ";
    cin >> age;
    
    if(age < 10){
        cout << age << ", you are young" << endl;
    } else if(age < 30) {
        cout << age << ", you are grown man" << endl;
    } else {
        cout << age << ", you are old" << endl;
    }
    
    return 0;
}

