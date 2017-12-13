#include <iostream>

using namespace std;

int main(int argc, char** argv) {
    int aliAge = 20;
    int noorhAge = 17;
    
    string aliGender = "Male";
    string noorhGender = "Female";
    
//    and &&     or || 
    cout << "(aliAge == 20) && (aliGender == \"Male\") = " << ( (aliAge == 20) && (aliGender == "Male") ) << endl;
    cout << "(aliAge == 20) && (aliGender == \"Male\") = " << ( (aliAge == 20) && (aliGender == "male") ) << endl;
    cout << "(aliAge == 20) && (aliGender == \"Male\") = " << ( (aliAge == 20) && (aliGender == "Female") ) << endl;
    
    cout << endl;
    
    cout << "(aliAge == 20) || (aliGender == \"Male\") = " << ( (aliAge == 20) || (aliGender == "Female") ) << endl;
    cout << "(aliAge == 20) || (aliGender == \"Male\") = " << ( (aliAge == 50) || (aliGender == "Female") ) << endl;
    
    // look up for the truth table
    
    cout << endl;
    if((aliAge == 20) && (aliGender == "Male")){
        cout << "(aliAge == 20) && (aliGender == \"Male\")" << endl;
    }
    
    if (noorhAge == 20 || noorhGender == "Female"){
        cout << "\"or\" noorh is femail" << endl;
    }
    
    
    return 0;
}

