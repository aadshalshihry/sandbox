#include "rack.h"
#include "ui_rack.h"

#include "device.h"

Rack::Rack(QWidget *parent) :
    QScrollArea(parent),
    ui(new Ui::Rack)
{
    ui->setupUi(this);

    Device *d1 = new Device(this);
    ui->scrollAreaWidgetContents->layout()->addWidget(d1);

    ui->scrollAreaWidgetContents->layout()->setAlignment(Qt::AlignTop);
}

Rack::~Rack()
{
    delete ui;
}
