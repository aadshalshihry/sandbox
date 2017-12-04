#include "mainwindow.h"
#include "ui_mainwindow.h"

#include "car.h"
#include "carlist.h"
#include "colorlist.h"

MainWindow::MainWindow(QWidget *parent) : QWidget(parent)
{
    this->setStyleSheet("background: blue;");
    gb = new QGroupBox(this);
    gb->setStyleSheet("padding-top: 200px");
    gb->resize(400, 500);
    layout = new QHBoxLayout(parent);
    Car *c = new Car(gb, "Car one");
    layout->addWidget(c);

    Car *c1 = new Car(gb, "Car two");
    layout->addWidget(c1->getGroupBox());



}

MainWindow::~MainWindow()
{
    delete parent();
}
