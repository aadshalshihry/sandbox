#include "carlist.h"
#include <QGroupBox>
#include <QPushButton>
#include <QVBoxLayout>

//CarList::CarList(QGroupBox *parent) : QWidget(parent)
//{
////    QGroupBox *g = new QGroupBox("CarList", parent);
//        QVBoxLayout *layout = new QVBoxLayout(parent);
//        QPushButton *b = new QPushButton("btn one");
//        QPushButton *b2 = new QPushButton("btn two");

//        layout->addWidget(b);
//        layout->addWidget(b2);

//}

//CarList::CarList(QWidget *parent, QString name) : QWidget(parent)
//{
//    this->carList_id = 0;
//    this->name = name;
//}

//QGroupBox *CarList::createCarList(QGroupBox *gb)
//{
//    QGroupBox *g = new QGroupBox(this->name, this);
//    QGroupBox *g = new QGroupBox(this->name);
//    childLayout->addWidget(gb);
//    return g;
//}




CarList::CarList(QWidget *parent, QString name)
{
    this->name = name;
    gb = new QGroupBox(this->name, parent);
    layout = new QVBoxLayout(gb);
    QPushButton *b = new QPushButton("btn one");
    QPushButton *b2 = new QPushButton("btn two");
    layout->addWidget(b);
    layout->addWidget(b2);

    gb->setStyleSheet("QGroupBox {background: gray; padding-top: 30px; margin-top: 30px; }");
    gb->resize(400, 200);
}
