#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QVector>
#include <QDebug>
MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    QVector<int> v;
    for(int i = 0; i < 10; i++){
        v.push_back(i);
    }

    for(int i = 0; i < v.size(); i++){
        qDebug() << v[i];
    }
    qDebug() << "Adding num";

    v.remove(6);

    v.push_back(16);
    v.push_back(77);

    for(int i = 0; i < v.size(); i++){
        qDebug() << v[i];
    }
}

MainWindow::~MainWindow()
{
    delete ui;
}
