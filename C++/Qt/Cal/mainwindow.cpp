#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QDebug>

bool isPointUsed = false;

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    connect(ui->zeroBtn, SIGNAL(released()), this, SLOT(digit_pressed()));
    connect(ui->oneBtn, SIGNAL(released()), this, SLOT(digit_pressed()));
    connect(ui->twoBtn, SIGNAL(released()), this, SLOT(digit_pressed()));
    connect(ui->threeBtn, SIGNAL(released()), this, SLOT(digit_pressed()));
    connect(ui->fourBtn, SIGNAL(released()), this, SLOT(digit_pressed()));
    connect(ui->fiveBtn, SIGNAL(released()), this, SLOT(digit_pressed()));
    connect(ui->sixBtn, SIGNAL(released()), this, SLOT(digit_pressed()));
    connect(ui->sevenBtn, SIGNAL(released()), this, SLOT(digit_pressed()));
    connect(ui->eightBtn, SIGNAL(released()), this, SLOT(digit_pressed()));
    connect(ui->nineBtn, SIGNAL(released()), this, SLOT(digit_pressed()));

}

void MainWindow::digit_pressed(){
    QPushButton * btn = (QPushButton*) sender();

//    qDebug() << "Test" << btn->text();
    double labelNumber;
    QString labelNumberStr;

   labelNumber = (ui->viewer->text() + btn->text()).toDouble();
   labelNumberStr = QString::number(labelNumber, 'g', 15);

    ui->viewer->setText(labelNumberStr);
}


MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_pointBtn_released()
{
    if(!isPointUsed){
        ui->viewer->setText(ui->viewer->text() + ".");
        isPointUsed = true;
    }

}

void MainWindow::on_plus_minBtn_released()
{
//    QPushButton * btn = (QPushButton*) sender();
//    double labelNumber;
//    QString labelNumberStr;

//    if(btn->text() == "+/-"){
//        labelNumber = ui->viewer->text().toDouble() * -1;
//        labelNumberStr = QString::number(labelNumber, 'g', 15);

//        ui->viewer->setText(labelNumberStr);
//    }
}
