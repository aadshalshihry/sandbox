#ifndef VMWIDGET_H
#define VMWIDGET_H

#include <QWidget>
#include <QString>
#include <QLabel>
#include <QHBoxLayout>
#include "customdatatype.h"

class VMWidget : public QWidget
{
    Q_OBJECT
public:
    explicit VMWidget(QWidget *parent = 0, QString name = NULL, State state = Default);
    QLabel *createVM();

private:
    QString name;
    State state;


signals:

public slots:
};

#endif // VMWIDGET_H
