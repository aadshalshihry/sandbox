#include "rackwidget.h"

RackWidget::RackWidget(QWidget *parent, QString name) :
    QWidget(parent)
{
    this->rackName = name;

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
    l->setText(this->rackName);


    QVBoxLayout *layout = new QVBoxLayout;
    layout->addWidget(l);

    groupBox->setLayout(layout);

    return groupBox;
}

