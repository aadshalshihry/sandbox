#include "carlist.h"
#include "ui_carlist.h"

CarList::CarList(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::CarList)
{
    ui->setupUi(this);
}

CarList::~CarList()
{
    delete ui;
}
