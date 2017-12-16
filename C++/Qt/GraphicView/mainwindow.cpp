#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QLabel>
#include <QHBoxLayout>
//#include <QPixmap>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    scene = new QGraphicsScene(this);
    QGraphicsView *graphicsView = new QGraphicsView(this);
    graphicsView->adjustSize();
     graphicsView->setScene(scene);


        QBrush greenBrush(Qt::green);
        QBrush blueBrush(Qt::blue);
        QPen outlinePen(Qt::black);
        outlinePen.setWidth(2);

        rectangle = scene->addRect(100, 0, 80, 100, outlinePen, blueBrush);


        text = scene->addText("bogotobogo.com", QFont("Arial", 20) );

        graphicsView->adjustSize();
        // movable text
        text->setFlag(QGraphicsItem::ItemIsMovable);



}

MainWindow::~MainWindow()
{
    delete ui;
}
