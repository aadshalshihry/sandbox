#include "rackwidget.h"
#include "devicewidget.h"
#include <QFrame>

RackWidget::RackWidget(QWidget *parent, int machineNum, QString name, State state) :
    QWidget(parent)
{
    this->machineNum = machineNum;
    this->rackName = name;
    this->machineState = state;

    operational = palette();
    degraded = palette();
    offline = palette();
    faulted = palette();
    disconnect = palette();

    QVBoxLayout *rackLayout = new QVBoxLayout(parent);

    // create a rack
    rackLayout->addWidget(createRack());
    setLayout(rackLayout);
}

/** Todo:
 *  1. QGroupbox to QFram
 *  2. style rack so it does not have any margin
 *  3.
 * **/

/**
 * @brief RackWidget::createRack
 * @return QGroupBox
 *
 * Create rack and make inside as many device as needed
 *
 */
QGroupBox *RackWidget::createRack()
{
    QGroupBox *groupBox = new QGroupBox;
    groupBox->setStyleSheet("padding-top: 0px;");
//    groupBox->setMinimumWidth(400);
    groupBox->setStyleSheet("background-color: yellow;");
//    QVBoxLayout *layout = new QVBoxLayout;


    DeviceWidget *d = new DeviceWidget(groupBox, tr("D1"));
    DeviceWidget *d2 = new DeviceWidget(groupBox, tr("D2"));
    DeviceWidget *d3 = new DeviceWidget(groupBox, tr("D2"));
    DeviceWidget *d4 = new DeviceWidget(groupBox, tr("D2"));
    DeviceWidget *d5 = new DeviceWidget(groupBox, tr("D2"));
    DeviceWidget *d6 = new DeviceWidget(groupBox, tr("D2"));
    DeviceWidget *d7 = new DeviceWidget(groupBox, tr("D2"));
    DeviceWidget *d8 = new DeviceWidget(groupBox, tr("D2"));

//    layout->addWidget(d);

//    groupBox->setLayout(layout);

    return groupBox;
}

