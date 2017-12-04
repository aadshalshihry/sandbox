#ifndef CARLIST_H
#define CARLIST_H

#include <QWidget>
#include <QString>
#include <QVector>
#include <QGroupBox>
#include <QVBoxLayout>

#include "colorlist.h"

class CarList : public QWidget
{
    Q_OBJECT
public:
    explicit CarList(QWidget *parent = 0, QString name = "");


private:
    int colorList_id;
    QString name;
    QVector<ColorList*> *colors;

    QGroupBox *gb;
    QVBoxLayout *layout;

signals:

public slots:
};

#endif // CARLIST_H
