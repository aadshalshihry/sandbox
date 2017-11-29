#ifndef SYSTEMRACK_H
#define SYSTEMRACK_H

#include <QMainWindow>

namespace Ui {
class SystemRack;
}

class SystemRack : public QMainWindow
{
    Q_OBJECT

public:
    explicit SystemRack(QWidget *parent = 0);
    ~SystemRack();

private:
    Ui::SystemRack *ui;
};

#endif // SYSTEMRACK_H
