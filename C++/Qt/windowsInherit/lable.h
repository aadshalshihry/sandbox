#ifndef LABLE_H
#define LABLE_H

#include <QWidget>

namespace Ui {
class Lable;
}

class Lable : public QWidget
{
    Q_OBJECT

public:
    explicit Lable(QWidget *parent = 0);
    ~Lable();

private:
    Ui::Lable *ui;
};

#endif // LABLE_H
