#ifndef CARLIST_H
#define CARLIST_H

#include <QWidget>

namespace Ui {
class CarList;
}

class CarList : public QWidget
{
    Q_OBJECT

public:
    explicit CarList(QWidget *parent = 0);
    ~CarList();

private:
    Ui::CarList *ui;
};

#endif // CARLIST_H
