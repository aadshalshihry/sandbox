#include <iostream>
#include <string>

using namespace std;

int addNumsInt(int num1, int num2);
float addNumsFloat(float num1, float num2);
char getCharA();
string getName(string name);


int main(int argc, char** argv) {
    
    cout << "addNumsInt(5, 7) = " << addNumsInt(5, 7) << endl;
    cout << "addNumsFloat(2.4, 2.1) = " << addNumsFloat(2.4, 2.1) << endl;
    
    cout << "getCharA() = " << getCharA() << endl;
    cout << "getName(string name) = " << getName("Mike") << endl;
    
    return 0;
}

int addNumsInt(int num1, int num2)
{
    return num1 + num2;
}

float addNumsFloat(float num1, float num2)
{
    return num1 + num2;
}

char getCharA()
{
    char ch = 'A';
    return ch;
}

string getName(string name)
{
    return name;
}


