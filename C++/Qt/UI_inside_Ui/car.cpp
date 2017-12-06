#include "car.h"

Car::Car(QWidget *parent) : QWidget(parent), c(new Ui::Car)
{
    c->setupUi(this);
    this->setSizePolicy(QSizePolicy::Expanding, QSizePolicy::Expanding);
//    this->resize(400, 1200);

    CarList *cl = new CarList(c->groupBox);

    CarList *cl2 = new CarList(c->groupBox);



}

