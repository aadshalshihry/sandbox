#include "mymainwindows.h"
#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
//    QWidget *w = new QWidget();

    MyMainWindows w;
    w.show();

    return a.exec();
}
