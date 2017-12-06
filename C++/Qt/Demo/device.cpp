#include "device.h"
#include "ui_device.h"
#include <QHBoxLayout>

#include "vm.h"

Device::Device(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::Device)
{
    ui->setupUi(this);

}

Device::Device(QWidget *parent, QString name):
    QWidget(parent),
    ui(new Ui::Device)
{
    ui->setupUi(this);
//    this->setSizePolicy(QSizePolicy::Expanding, QSizePolicy::Expanding);
    this->name = name;

    VM *vm = new VM(ui->widget);
    ui->widget->setMinimumHeight(48);
    ui->horizontalLayout_2->addWidget(vm);






    ui->label->setText(this->name);

    ui->horizontalLayout_2->setAlignment(Qt::AlignLeft);

}

Device::~Device()
{
    delete ui;
}
