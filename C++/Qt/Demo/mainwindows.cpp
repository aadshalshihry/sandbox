#include "mainwindows.h"
#include "ui_mainwindows.h"

#include "rack.h"

MainWindows::MainWindows(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::MainWindows)
{
    ui->setupUi(this);

    Rack *rack = new Rack(this);

}

MainWindows::~MainWindows()
{
    delete ui;
}
