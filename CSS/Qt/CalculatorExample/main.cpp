/* ***********************************************************
 * Author: Roman Alshehri
 * Date: Nov 28, 2017
 * Title: Calculator
 *
 * This program will make a calculator. It's using the following
 * widget:
 *  1. QFont
 *  2. QLineEdit
 *  3. SLOT passing to function
 *  4. Create a class widget for button
 *
 *
 * ************************************************************/

#include "calculator.h"
#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    Calculator w;
    w.show();

    return a.exec();
}
