#ifndef VM_H
#define VM_H

#include <QWidget>
#include <QString>
#include <QGroupBox>

namespace Ui {
class VM;
}

class VM : public QWidget
{
    Q_OBJECT

public:
    explicit VM(QWidget *parent = 0);
    explicit VM(QWidget *parent = 0, QString name = "");
    int size;
    ~VM();

private:
    Ui::VM *ui;
    QString name;
};

#endif // VM_H
