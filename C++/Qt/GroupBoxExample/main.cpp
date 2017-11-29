/*****************************************************
 *
 * Author: Roman Alshehri
 * Data: Dec 28, 2017
 *
 * This program show how to use the following widget in Qt:
 *      1. QGridLayout
 *      2. QGroupBox
 *      3. QRadioButton
 *      4. QVBoxLayout
 *      5. QMenu
 *
 *
 * **/

#include <QApplication>

#include "windows.h"

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

    windows w;
    w.show();

    return a.exec();
}
