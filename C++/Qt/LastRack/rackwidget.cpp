#include "rackwidget.h"

RackWidget::RackWidget(QWidget *parent, QString *title) :
    QWidget(parent)
//    ui(new Ui::RackWidget)
{
    rack = new QGroupBox(*title, this);
    rackLayout = new QVBoxLayout;

    rack->setLayout(rackLayout);
}

RackWidget::~RackWidget()
{
    delete ui;
}

