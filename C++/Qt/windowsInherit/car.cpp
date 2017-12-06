#include "car.h"
#include "ui_car.h"

car::car(QWidget *parent) :
    QScrollArea(parent),
    ui(new Ui::car)
{
    ui->setupUi(this);


}

car::~car()
{
    delete ui;
}
