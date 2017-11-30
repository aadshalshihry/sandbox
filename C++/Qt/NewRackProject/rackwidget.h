#ifndef RACKWIDGET_H
#define RACKWIDGET_H

#include <QWidget>
#include <QHBoxLayout>
#include <QGroupBox>
#include <QString>
#include <QPalette>

#include "customdatatype.h"
#include "vmwidget.h"

class RackWidget : public QWidget
{
    Q_OBJECT
public:
    explicit RackWidget(QWidget *parent = 0, int machineNum = 0, QString name = "", State state = Default);

    QGroupBox *createRack();
private:
    int machineNum;
    QString rackName;
    State machineState;
    QVector<bool> *filled;
    QVector<VMWidget> *machines;

    QPalette operational;
    QPalette degraded;
    QPalette offline;
    QPalette faulted;
    QPalette disconnect;

    QGroupBox *rack;
    QVBoxLayout *rackLayout;


signals:

public slots:

};

#endif // RACKWIDGET_H
