#include "systemrack.h"
#include "ui_systemrack.h"

SystemRack::SystemRack(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::SystemRack)
{
    ui->setupUi(this);
}

SystemRack::~SystemRack()
{
    delete ui;
}
