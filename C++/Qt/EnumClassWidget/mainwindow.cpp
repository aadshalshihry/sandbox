#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "customdata.h"
#include <QDebug>
#include <QPushButton>
#include <QVBoxLayout>
#include <QPalette>
#include <QColor>
#include <QLabel>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    CustomData *a = new CustomData;
    QPalette p = palette();
    ui->label->setStyleSheet("background:" +  a->getState()+ ";");
    a->setState(offline);
    ui->label->setStyleSheet("background:" +  a->getState()+ ";");


}

MainWindow::~MainWindow()
{
    delete ui;
}

QPalette MainWindow::getState(State state)
{
//    this->myOperational = QPalette(QPalette::Window, Qt::black);
//    this->myDegraded = QPalette(QPalette::Window, Qt::red);
//    this->myOffline = QPalette(QPalette::Window, Qt::green);
//    this->myFaulted = QPalette(QPalette::Window, Qt::blue);
//    this->myDisconnect = QPalette(QPalette::Window, Qt::yellow);
    qDebug() << state << "inside getstate()";
    qDebug() << operational;
    switch (state) {
    case operational:
        return QPalette(QPalette::Foreground, Qt::black);
    case degraded:
        return QPalette(QPalette::Window, Qt::red);
    case offline:
        return QPalette(QPalette::Foreground, Qt::green);
    case faulted:
        return QPalette(QPalette::Window, Qt::blue);
    case disconnected:
        return QPalette(QPalette::Window, Qt::yellow);
    }
}

QString MainWindow::getColor()
{
    return "red";
}

