#ifndef DEVICEWIDGET_H
#define DEVICEWIDGET_H

#include <QWidget>
#include <QGroupBox>
#include <QHBoxLayout>
#include <QPushButton>
#include <QVBoxLayout>
#include <QLabel>


#include "customdatatype.h"
#include "vmwidget.h"

class DeviceWidget : public QWidget
{
    Q_OBJECT
public:
    explicit DeviceWidget(QWidget *parent = 0, QString name = "", State dState = Default, QVector<VMWidget> *vMs = {});

    QGroupBox *createDevice();

private:
    State state;
    QString dName;
    int vMNum;

    QPalette operational;
    QPalette degraded;
    QPalette offline;
    QPalette faulted;
    QPalette disconnect;

    QVector<VMWidget> *vMs;
    QGroupBox *gBD;
    QHBoxLayout *machineLayout;
signals:

public slots:
};

#endif // DEVICEWIDGET_H
