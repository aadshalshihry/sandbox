#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QScrollArea>

mainWindow::mainWindow(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::mainWindow)
{
    ui->setupUi(this);

    car *c = new car(this);

}

mainWindow::~mainWindow()
{
    delete ui;
}
