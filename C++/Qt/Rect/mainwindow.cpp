#include "mainwindow.h"
#include "ui_mainwindow.h"



MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::paintEvent(QPaintEvent *e)
{
    QPainter pt(this);
        int left = 100;
            int top = 50;
            int width = 200;
            int height = 150;

        QRect r1(left, top, width, height);

        pt.setPen(Qt::black);
//        pt.setBackground(Qt::blue);
        pt.setBrush(QBrush(Qt::blue));
        pt.drawRect(r1);

}
