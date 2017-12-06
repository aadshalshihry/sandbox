#ifndef VM_H
#define VM_H

#include <QWidget>

namespace Ui {
class VM;
}

class VM : public QWidget
{
    Q_OBJECT

public:
    explicit VM(QWidget *parent = 0);
    ~VM();

private:
    Ui::VM *ui;
};

#endif // VM_H
