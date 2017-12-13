#include "rackwidget.h"
#include "rack.h"





RackWidget::RackWidget(QWidget *parent) : QWidget(parent)
{
//    racks->push_back(new Rack(1, 5, "Rack one"));
//    racks->push_back(new Rack(1, 5, "Rack one"));
//    racks->push_back(new Rack(1, 5, "Rack one"));
    arr[0] = new Rack(1, 5, "Rack one");
    arr[1] = new Rack(1, 5, "Rack one");
    arr[2] = new Rack(1, 5, "Rack one");

}


void RackWidget::paintEvent(QPaintEvent *)
{


//    QPainter painter(this);
//    QRectF size = QRectF(0, 0, this->width() -1, 40);
//    painter.setBrush(Qt::green);
//    painter.drawRect(size);
    int w = this->width() - 1;
    int h = 30;
    int myX = 0;
    int myY = 0;
    for(int i = 0; i < 3; i++) {
//        QPainter painter(this);
//        QRectF sizeRec = QRectF(myX, myY, w, h);
//        painter.setBrush(Qt::green);
//        painter.drawRect(sizeRec);
//        QPoint pText(myX + 5, myY + 5);
//        QString *str = QString::fromStdString(r.->itle);
//        painter.drawText(pText, str);
    }
}
