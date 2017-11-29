#include "racksystem.h"
#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    RackSystem w;
    w.show();

    return a.exec();
}
