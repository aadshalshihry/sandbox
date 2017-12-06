#ifndef MYMAINWINDOWS_H
#define MYMAINWINDOWS_H

#include <QWidget>
#include <QScrollArea>
#include "car.h"

namespace Ui {
class MyMainWindows;
}

class MyMainWindows : public QWidget
{
    Q_OBJECT

public:
    explicit MyMainWindows(QWidget *parent = 0);
    ~MyMainWindows();

private:
    Ui::MyMainWindows *ui;
    Car c;
};

#endif // MYMAINWINDOWS_H
