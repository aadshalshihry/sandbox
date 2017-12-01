#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "person.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    QVector<Person*> people;

//    Person *p = new Person("Roman", 29);

    for(int i = 0; i < 5; i++) {
        people.append(new Person("Roman", 30));
    }

    for(int i = 0; i < people.size(); i++) {
        qDebug() << people.at(i)->getName();
    }
}

MainWindow::~MainWindow()
{
    delete ui;
}
