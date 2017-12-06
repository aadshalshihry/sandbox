#ifndef CAR_H
#define CAR_H

#include <QWidget>
#include <ui_car.h>
#include "carlist.h"


namespace Ui {
class Car;
}

class Car : public QWidget
{
    Q_OBJECT
public:
    explicit Car(QWidget *parent = 0);

private:

    Ui::Car *c;
signals:

public slots:
};

#endif // CAR_H
