#ifndef RACKSYSTEM_H
#define RACKSYSTEM_H

#include <QMainWindow>

namespace Ui {
class RackSystem;
}

class RackSystem : public QMainWindow
{
    Q_OBJECT

public:
    explicit RackSystem(QWidget *parent = 0);
    ~RackSystem();

private:
    Ui::RackSystem *ui;
};

#endif // RACKSYSTEM_H
