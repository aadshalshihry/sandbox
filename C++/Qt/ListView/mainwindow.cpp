#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QtCore>
#include <QtGui>
#include <QPushButton>
#include <QStringListModel>
#include <QDebug>
#include <QListView>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    QStringListModel *model = new QStringListModel(this);

    QStringList list;

    list << "One" << "Tow" << "Three";

    model->setStringList(list);

    ui->listView->setModel(model);


}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_AddBtn_clicked()
{

}

void MainWindow::on_removeBtn_clicked()
{

}
