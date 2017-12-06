#include "lable.h"
#include "ui_lable.h"

Lable::Lable(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::Lable)
{
    ui->setupUi(this);
}

Lable::~Lable()
{
    delete ui;
}
