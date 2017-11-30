#include "rackwidget.h"
#include <QLabel>

RackWidget::RackWidget(QWidget *parent = 0, int machineNum = 0, QString rackName = NULL, State mState = Default) :
    QWidget(parent)
{
    this->machineNum = machineNum;
    this->rackName = rackName;
    this->machineState = mState;

    QVBoxLayout *rackLayout = new QVBoxLayout(parent);


    // add the title for rack
    rackLayout->addWidget(createRack());



    // dispaly all machine here

    setLayout(rackLayout);
}


QGroupBox *RackWidget::createRack()
{
    QGroupBox *groupBox = new QGroupBox;
    QPalette pal = palette();
    pal.setColor(QPalette::Background, Qt::green);
    groupBox->setAutoFillBackground(true);
    groupBox->setPalette(pal);

    QLabel *l = new QLabel;
    l->setText(this->title);


    QVBoxLayout *layout = new QVBoxLayout;
    layout->addWidget(l);

    groupBox->setLayout(layout);

    return groupBox;
}
