#ifndef CARLIST_H
#define CARLIST_H

#include <QGroupBox>
#include "lable.h"

namespace Ui {
class CarList;
}

class CarList : public QGroupBox
{
    Q_OBJECT

public:
    explicit CarList(QWidget *parent = 0);
    ~CarList();

private:
    Ui::CarList *ui;
};

#endif // CARLIST_H
