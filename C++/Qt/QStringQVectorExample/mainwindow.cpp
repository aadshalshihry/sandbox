#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QVector>
#include <QString>
#include <QDebug>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    QVector<QString> str;

    for(int i = 0; i < 10; i++) {
        str.append(QString::number(i));
    }

    for(int i = 0; i < str.size(); i++) {
        qDebug() << str[i];
    }
}

MainWindow::~MainWindow()
{
    delete ui;
}
