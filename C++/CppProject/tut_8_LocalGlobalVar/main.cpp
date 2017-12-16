#include <iostream>

using namespace std;

void fun();

int age = 30;

int main(int argc, char** argv) {
    
    int age = 10;
    cout << "main age = " << age << endl;
    age = 5;
    cout << "main age = " << age << endl;
    
    fun();
    return 0;
}

void fun(){
    cout << "fun() age = " << age << endl;
    age = 50;
    cout << "fun() age = " << age << endl;
    
}