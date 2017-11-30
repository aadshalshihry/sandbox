#include "devicewidget.h"



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

    machineLayout = new QHBoxLayout(gp);


    // Create vm here

    QLabel *q = new QLabel();
    q->setStyleSheet("QWidget {background: #222222; }");
    q->setText("H");
    q->setFixedWidth(q->text().length() * 13);
    q->setAlignment(Qt::AlignCenter);
    machineLayout->addWidget(q);


    return gp;
}

