#ifndef RACKWIDGET_H
#define RACKWIDGET_H

#include <QWidget>
#include <QHBoxLayout>
#include <QGroupBox>
#include <QString>
#include <QPalette>

#include "customdatatype.h"


class RackWidget : public QWidget
{
    Q_OBJECT
public:
    RackWidget(QWidget *parent = 0, int machineNum = 0, QString rackName = NULL, State machineState = Default);

    QGroupBox *createRack();
signals:

public slots:

private:
    int machineNum;
    QString rackName;
    State machineState;

#endif // RACKWIDGET_H
