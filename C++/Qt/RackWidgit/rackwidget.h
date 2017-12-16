#ifndef RACKWIDGET_H
#define RACKWIDGET_H

#include <QWidget>
#include <QPainter>
#include <vector>
#include "rack.h"

class RackWidget : public QWidget
{
    Q_OBJECT
public:
    explicit RackWidget(QWidget * parent = 0);
//    std::vector<Rack> *racks;
    Rack arr[3];

protected:
    void paintEvent(QPaintEvent *);

signals:


public slots:


};

#endif // RACKWIDGET_H
