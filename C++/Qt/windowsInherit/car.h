#ifndef CAR_H
#define CAR_H

#include <QScrollArea>

namespace Ui {
class car;
}

class car : public QScrollArea
{
    Q_OBJECT

public:
    explicit car(QWidget *parent = 0);
    ~car();

private:
    Ui::car *ui;
};

#endif // CAR_H
