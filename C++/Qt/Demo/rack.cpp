#include "rack.h"
#include "ui_rack.h"

#include "device.h"

Rack::Rack(QWidget *parent) :
    QScrollArea(parent),
    ui(new Ui::Rack)
{
    ui->setupUi(this);

    Device *d = new Device(this, "SER-2 SW-1");
    ui->scrollAreaWidgetContents->layout()->addWidget(d);

    Device *d1 = new Device(this, "SER-2 SW-2");
    ui->scrollAreaWidgetContents->layout()->addWidget(d1);

    Device *d2 = new Device(this, "TC-MTX-1");
    ui->scrollAreaWidgetContents->layout()->addWidget(d2);

    Device *d3 = new Device(this, "TC-MTX-2");
    ui->scrollAreaWidgetContents->layout()->addWidget(d3);

    Device *d4= new Device(this, "VMH1");
    ui->scrollAreaWidgetContents->layout()->addWidget(d4);

    Device *d5 = new Device(this, "VMH-2");
    ui->scrollAreaWidgetContents->layout()->addWidget(d5);

    Device *d6 = new Device(this, "VMH-3");
    ui->scrollAreaWidgetContents->layout()->addWidget(d6);

    Device *d7 = new Device(this, "VMH-4");
    ui->scrollAreaWidgetContents->layout()->addWidget(d7);

    Device *d8 = new Device(this, "VMH-5");
    ui->scrollAreaWidgetContents->layout()->addWidget(d8);

    Device *d9 = new Device(this, "VMH-6");
    ui->scrollAreaWidgetContents->layout()->addWidget(d9);

    Device *d11 = new Device(this, "VMH-7");
    ui->scrollAreaWidgetContents->layout()->addWidget(d11);

    Device *d22 = new Device(this, "VMH-8");
    ui->scrollAreaWidgetContents->layout()->addWidget(d22);

    Device *d23 = new Device(this, "VMHost-1");
    ui->scrollAreaWidgetContents->layout()->addWidget(d23);

    Device *d24 = new Device(this, "VMHost-2");
    ui->scrollAreaWidgetContents->layout()->addWidget(d24);


    ui->scrollAreaWidgetContents->layout()->setAlignment(Qt::AlignTop);
}

Rack::~Rack()
{
    delete ui;
}
