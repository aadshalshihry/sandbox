#include "mainwindow.h"
#include "ui_mainwindow.h"

#include "rack.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    Rack *r = new Rack;
    this->layout()->addWidget(r);
}

MainWindow::~MainWindow()
{
    delete ui;
}
