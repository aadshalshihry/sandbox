#include "mainwindow.h"
#include <QApplication>
#include <QFile>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
//    QFile File('mystyle.qss');
//    if (!File.open(QIODevice::ReadOnly | QIODevice::Text))
//            return;
//    File.open(QFile::ReadOnly);
//    QString StyleSheet = QLatin1String(File.readAll());
    MainWindow w;
//    w.setStyleSheet();
    w.show();

    return a.exec();
}
