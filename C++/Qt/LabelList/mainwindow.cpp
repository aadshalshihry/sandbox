#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    ui->label->setStyleSheet("QLabel { background-color : blue; color : black ");

    /*

    QHBoxLayout *layout = new QHBoxLayout;
    QLabel* pLabel = new QLabel(this);
    layout->addWidget(pLabel);

    QLabel *l = new QLabel(pLabel);
    l->setText("Hlksdjflksdjf;lskdjf");

    pLabel->setStyleSheet("QLabel { background-color : red; color : blue; }");
    l->setStyleSheet("QLabel { background-color : blue; color : black; }");

    this->setLayout(layout);



    */
}

MainWindow::~MainWindow()
{
    delete ui;
}
