#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "rackwidget.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    ui->statusBar->hide();
    ui->menuBar->hide();
    ui->mainToolBar->hide();

    fullLayout = new QHBoxLayout;

    QGroupBox *g1 = new QGroupBox;
    QString * t1 = new QString("Lasdfasdf");
    rack[0] = new RackWidget(g1, t1);

    QGroupBox *g2 = new QGroupBox;
    QString * t2 = new QString("Dsadfasdf");
    rack[1] = new RackWidget(g2, t2);

    fullLayout->addWidget(g1);
    fullLayout->addWidget(g2);


}

MainWindow::~MainWindow()
{
    delete ui;
}
