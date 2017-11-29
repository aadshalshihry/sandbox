#ifndef RACKWIDGET_H
#define RACKWIDGET_H

#include <QWidget>
#include <QHBoxLayout>
#include <QGroupBox>
#include <QString>
#include <QPalette>
#include <QLabel> // Remove in future

class RackWidget : public QWidget
{
    Q_OBJECT
public:
    explicit RackWidget(QWidget *parent = 0, QString name = "");

    QGroupBox *createRack();
private:
    int machineNum;
    QString rackName;
//    State machineState;
signals:

public slots:

};

#endif // RACKWIDGET_H
