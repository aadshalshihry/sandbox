#ifndef SYSTEMRACK_H
#define SYSTEMRACK_H

#include <QMainWindow>
#include <QVBoxLayout>
#include <QGroupBox>
#include <QScrollArea>
#include <QPalette>

#include "rackwidget.h"

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
    RackWidget *createRack();


};

#endif // SYSTEMRACK_H
