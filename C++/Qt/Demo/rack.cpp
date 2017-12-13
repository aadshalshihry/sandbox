#include "rack.h"
#include "ui_rack.h"
#include "newdevice.h"


Rack::Rack(QWidget *parent) :
    QScrollArea(parent),
    ui(new Ui::Rack)
{
    ui->setupUi(this);
    this->devices = {};
    this->deviceSize = 0;




    ui->scrollAreaWidgetContents->layout()->setAlignment(Qt::AlignTop);
}

void Rack::addDumyRecord()
{

    NewDevice*d = new NewDevice(this, "SER-2 SW-1");

    this->devices.append(d);
    this->deviceSize++;
    this->devices[0]->addVm("Vim");
    ui->scrollAreaWidgetContents->layout()->addWidget(d);

    NewDevice*d1 = new NewDevice(this, "SER-2 SW-2");
    this->devices.append(d1);
    this->deviceSize++;
    ui->scrollAreaWidgetContents->layout()->addWidget(d1);

    NewDevice*d2 = new NewDevice(this, "TC-MTX-1");
    this->devices.append(d2);
    ui->scrollAreaWidgetContents->layout()->addWidget(d2);

    NewDevice*d3 = new NewDevice(this, "TC-MTX-2");
    this->devices.append(d3);
    this->deviceSize++;
    this->devices[3]->addVm("HTx");
    this->devices[3]->addVm("KDe");
    ui->scrollAreaWidgetContents->layout()->addWidget(d3);

    NewDevice*d4= new NewDevice(this, "VMH1");
    this->devices.append(d4);
    this->deviceSize++;
    ui->scrollAreaWidgetContents->layout()->addWidget(d4);

    NewDevice*d5 = new NewDevice(this, "VMH-2");
    this->devices.append(d5);
    this->deviceSize++;
    ui->scrollAreaWidgetContents->layout()->addWidget(d5);

    NewDevice*d6 = new NewDevice(this, "VMH-3");
    this->devices.append(d6);
    this->deviceSize++;
    ui->scrollAreaWidgetContents->layout()->addWidget(d6);

    NewDevice*d7 = new NewDevice(this, "VMH-4");
    this->devices.append(d7);
    this->deviceSize++;
    ui->scrollAreaWidgetContents->layout()->addWidget(d7);

    NewDevice*d8 = new NewDevice(this, "VMH-5");
    this->devices.append(d8);
    this->deviceSize++;
    ui->scrollAreaWidgetContents->layout()->addWidget(d8);

    NewDevice*d9 = new NewDevice(this, "VMH-6");
    this->devices.append(d9);
    this->deviceSize++;
    ui->scrollAreaWidgetContents->layout()->addWidget(d9);

    NewDevice*d11 = new NewDevice(this, "VMH-7");
    this->devices.append(d11);
    this->deviceSize++;
    ui->scrollAreaWidgetContents->layout()->addWidget(d11);

    NewDevice*d22 = new NewDevice(this, "VMH-8");
    this->devices.append(d22);
    this->deviceSize++;
    ui->scrollAreaWidgetContents->layout()->addWidget(d22);

    NewDevice*d23 = new NewDevice(this, "VMHost-1");
    this->devices.append(d23);
    this->deviceSize++;
    ui->scrollAreaWidgetContents->layout()->addWidget(d23);

    NewDevice*d24 = new NewDevice(this, "VMHost-2");
    this->devices.append(d24);
    this->deviceSize++;
    ui->scrollAreaWidgetContents->layout()->addWidget(d24);

    NewDevice*d25 = new NewDevice(this, "VMHost-2");
    this->devices.append(d25);
    this->deviceSize++;
    ui->scrollAreaWidgetContents->layout()->addWidget(d25);
}

Rack::~Rack()
{
    delete ui;
}
