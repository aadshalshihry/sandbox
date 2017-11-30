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

QGroupBox *DeviceWidget::createDevice()
{
    QGroupBox *gp = new QGroupBox(tr("Title one"), this);
    gp->setStyleSheet("background-color: gray;");
    gp->setMinimumWidth(400);

    machineLayout = new QHBoxLayout(gp);

    QPushButton *p2 = new QPushButton(tr("p2"));
    machineLayout->addWidget(p2);

    QPushButton *p3 = new QPushButton(tr("p3"));
    machineLayout->addWidget(p3);
    p2->setStyleSheet("QPushButton {background: green; color: white;}");

    return gp;
}

