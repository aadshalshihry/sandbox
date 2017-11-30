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

    // add the title for rack
    rackLayout->addWidget(createRack());
    rackLayout->addWidget(createRack());
    rackLayout->addWidget(createRack());
    rackLayout->addWidget(createRack());
    rackLayout->addWidget(createRack());
    rackLayout->addWidget(createRack());
    rackLayout->addWidget(createRack());
    rackLayout->addWidget(createRack());
    rackLayout->addWidget(createRack());


    // dispaly all machine here
    setLayout(rackLayout);

}

QGroupBox *RackWidget::createRack()
{
    QGroupBox *groupBox = new QGroupBox;
//    groupBox->setMinimumWidth(400);
    groupBox->setStyleSheet("background-color: yellow;");
//    QVBoxLayout *layout = new QVBoxLayout;


    DeviceWidget *d = new DeviceWidget(groupBox, tr("D1"));
//    layout->addWidget(d);



//    groupBox->setLayout(layout);

    return groupBox;
}

