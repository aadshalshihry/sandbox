#include "car.h"
#include "carlist.h"


#include <QGroupBox>
#include <QVBoxLayout>
#include <QPushButton>
#include <QLabel>
#include <QFrame>


  Car::Car(QGroupBox *parent, QString name)
{
    this->name = name;
    gb = new QGroupBox(this->name, parent);
    layout = new QVBoxLayout(gb);

    gb->setStyleSheet("QGroupBox {background: green; padding: 20px;}");
    gb->resize(400, 500);

//    QPushButton *b = new QPushButton("btn one");
//    QPushButton *b2 = new QPushButton("btn two");

    CarList *c = new CarList(gb, "CarList One");
    CarList *c1 = new CarList(gb, "CarList tow");

    layout->addWidget(c);
    layout->addWidget(c1);

    //    layout->setAlignment(Qt::AlignTop);
  }

  QGroupBox *Car::getGroupBox()
  {
      CarList *c = new CarList(gb, "CarList One");

      layout->addWidget(c);
      return this->gb;
  }





