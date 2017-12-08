#include "mainwindows.h"
#include "ui_mainwindows.h"
#include "rack.h"
#include <QDebug>

MainWindows::MainWindows(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::MainWindows)
{
    ui->setupUi(this);


    rack = new Rack(this);
    rack->addDumyRecord();
    ui->spinBox->setRange(0, this->rack->deviceSize );


}

MainWindows::~MainWindows()
{
    delete ui;
}


void MainWindows::on_pushButton_5_clicked()
{
    int vmId = ui->spinBox->text().toInt();
    QString str = ui->lineEdit->text();
    if(str != ""){
        this->rack->devices[vmId]->addVm(str);
    }
    ui->spinBox->setRange(0, this->rack->deviceSize + 1);



}

void MainWindows::on_btn1_clicked()
{
    int deviceId = ui->spinBox->text().toInt();
    this->rack->devices[deviceId]->setStyleSheet("background: #8BAD5C; margin: 5px; border-radius: 3px; ");
    ui->spinBox->setRange(0, this->rack->deviceSize);
}

void MainWindows::on_btn2_clicked()
{
    int deviceId = ui->spinBox->text().toInt();
    this->rack->devices[deviceId]->setStyleSheet("background: #FF4500; margin: 5px; border-radius: 3px;");
}

void MainWindows::on_btn3_clicked()
{
    int deviceId = ui->spinBox->text().toInt();
    this->rack->devices[deviceId]->setStyleSheet("background: #ffff00; margin: 5px; border-radius: 3px;");
}

void MainWindows::on_btn4_clicked()
{
    int deviceId = ui->spinBox->text().toInt();
    this->rack->devices[deviceId]->setStyleSheet("background: red; margin: 5px; border-radius: 3px;");
}

// offline
void MainWindows::on_btn4_4_clicked()
{
    int deviceId = ui->spinBox->text().toInt();
    this->rack->devices[deviceId]->setStyleSheet("background: black; margin: 5px; border-radius: 3px;");
}


// Vm ----------
void MainWindows::on_btn1_2_clicked()
{
    int deviceId = ui->spinBox->text().toInt();
    int vmId = ui->spinBox_2->text().toInt();
    if(vmId < this->rack->devices[deviceId]->vmsSize && this->rack->devices[deviceId]->vmsSize != 0){
        QString style = "background: #00e64d; border-radius: 5px; padding: 3px; margin-left: 5px;";
        this->rack->devices[deviceId]->vms[vmId]->setStyleSheet(style);
    }

}

void MainWindows::on_btn2_2_clicked()
{
    int deviceId = ui->spinBox->text().toInt();
    int vmId = ui->spinBox_2->text().toInt();
    if(vmId < this->rack->devices[deviceId]->vmsSize && this->rack->devices[deviceId]->vmsSize != 0){
        QString style = "background: #FF4500; border-radius: 5px; padding: 3px;margin-left: 5px;";
        this->rack->devices[deviceId]->vms[vmId]->setStyleSheet(style);
    }
}

void MainWindows::on_btn3_2_clicked()
{
    int deviceId = ui->spinBox->text().toInt();
    int vmId = ui->spinBox_2->text().toInt();
    if(vmId < this->rack->devices[deviceId]->vmsSize && this->rack->devices[deviceId]->vmsSize != 0){
        QString style = "background: #ffff00; border-radius: 5px;padding: 3px;margin-left: 5px;";
        this->rack->devices[deviceId]->vms[vmId]->setStyleSheet(style);
    }
}

void MainWindows::on_btn4_2_clicked()
{
    int deviceId = ui->spinBox->text().toInt();
    int vmId = ui->spinBox_2->text().toInt();
    if(vmId < this->rack->devices[deviceId]->vmsSize && this->rack->devices[deviceId]->vmsSize != 0){
        QString style = "background: red; border-radius: 5px;padding: 3px;margin-left: 5px;";
        this->rack->devices[deviceId]->vms[vmId]->setStyleSheet(style);
    }
}


// offline
void MainWindows::on_btn4_3_clicked()
{
    int deviceId = ui->spinBox->text().toInt();
    int vmId = ui->spinBox_2->text().toInt();
    if(vmId < this->rack->devices[deviceId]->vmsSize && this->rack->devices[deviceId]->vmsSize != 0){
        QString style = "background: black; border-radius: 5px;padding: 3px;margin-left: 5px;";
        this->rack->devices[deviceId]->vms[vmId]->setStyleSheet(style);
    }
}

void MainWindows::on_spinBox_valueChanged(int arg1)
{
    int len = this->rack->devices[arg1]->vmsSize;

    if(len == 0) {
        ui->spinBox_2->setValue(-1);
    }

}
