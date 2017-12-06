#include "mymainwindows.h"
#include "ui_mymainwindows.h"

MyMainWindows::MyMainWindows(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::MyMainWindows)
{
    ui->setupUi(this);
//    this->setContentsMargins(0,0,0,-10);
    Car *c = new Car(this);
    ui->verticalLayout->addWidget(c);


}

MyMainWindows::~MyMainWindows()
{
    delete ui;
}
