#ifndef RACKSYSTEM_H
#define RACKSYSTEM_H

#include <QMainWindow>
#include <QVBoxLayout>
#include <QString>

#include "rackwidget.h"


namespace Ui {
class RackSystem;
}

class RackSystem : public QMainWindow
{
    Q_OBJECT

public:
    explicit RackSystem(QWidget *parent = 0);
    ~RackSystem();
    RackWidget *createRack();

private:
    Ui::RackSystem *ui;
};

#endif // RACKSYSTEM_H
