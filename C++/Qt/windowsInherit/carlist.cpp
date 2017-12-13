#include "carlist.h"
#include "ui_carlist.h"

CarList::CarList(QWidget *parent) :
    QGroupBox(parent),
    ui(new Ui::CarList)
{
    ui->setupUi(this);

    this->setSizePolicy(QSizePolicy::Preferred, QSizePolicy::Expanding);

    Lable *l = new Lable(this);
    ui->horizontalLayout->addWidget(l);

    Lable *l2 = new Lable(this);
    ui->horizontalLayout->addWidget(l2);
}

CarList::~CarList()
{
    delete ui;
}
