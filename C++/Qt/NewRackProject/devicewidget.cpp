#include "devicewidget.h"
#include <QPushButton>
#include <QVBoxLayout>

DeviceWidget::DeviceWidget(QWidget *parent, QString name, State dState, QVector<VMWidget> *vMs) :
    QWidget(parent)
{
    this->state = dState;
    this->dName = name;
    this->vMs = vMs;

    QVBoxLayout *l = new QVBoxLayout(parent);

//    l->addWidget(createDevice());
    parent->layout()->addWidget(createDevice());


}

/** Todo:
 *
 *  1. Create mvs inside this class
 *  2. get the size of mvs from the rackwidget
 *  3. use qfram with vms
 *  4.
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
//    gp->setMinimumWidth(400);

    machineLayout = new QHBoxLayout(gp);

    // Create vm here
    QPushButton *p2 = new QPushButton(tr("p2"));
    machineLayout->addWidget(p2);

    QPushButton *p3 = new QPushButton(tr("p3"));
    machineLayout->addWidget(p3);
    p2->setStyleSheet("QPushButton {background: green; color: white;}");

    return gp;
}

