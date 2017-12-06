#include "devicewidget.h"

#include "vmwidget.h"



DeviceWidget::DeviceWidget(QWidget *parent, QString name, State dState, QVector<VMWidget> *vMs) :
    QWidget(parent)
{
    this->state = dState;
    this->dName = name;
    this->vMs = vMs;

    QVBoxLayout *l = new QVBoxLayout(parent);
    parent->layout()->addWidget(createDevice());

//    l->addWidget(createDevice());


}

/** Todo:
 *
 *  1. Create mvs inside this class
 *
 * **/

/**
 * @brief DeviceWidget::createDevice
 * @return QGroupBox
 *
 * Create device and create title & vms inside it
 */
QGroupBox *DeviceWidget::createDevice()
{
    QGroupBox *gp = new QGroupBox(tr("Title one"), this);
    gp->setStyleSheet("background-color: gray; color: white");

    machineLayout = new QHBoxLayout(gp);


    // Create vm here
    VMWidget *vm = new VMWidget(gp, tr("Title"));
    machineLayout->addWidget(vm->createVM());

    VMWidget *vm1 = new VMWidget(gp, tr("Title"));
    machineLayout->addWidget(vm1->createVM());

    VMWidget *vm2 = new VMWidget(gp, tr("Title"));
    machineLayout->addWidget(vm2->createVM());


    return gp;
}

