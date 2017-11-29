#include "racksystem.h"
#include "ui_racksystem.h"

RackSystem::RackSystem(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::RackSystem)
{
    ui->setupUi(this);
}

RackSystem::~RackSystem()
{
    delete ui;
}
