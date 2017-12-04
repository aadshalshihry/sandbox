#ifndef CAR_H
#define CAR_H

#include <QWidget>
#include <QString>
#include <QVector>
#include <QGroupBox>
#include <QVBoxLayout>
#include "carlist.h"

class Car : public QWidget
{
    Q_OBJECT
public:
//    explicit Car(QGroupBox *parent = 0);
    explicit Car(QGroupBox *parent = 0, QString name = "");
    QGroupBox *getGroupBox();

private:
    int carlist_id;
    QString name;
    QVector<CarList*> carLists;

    QGroupBox *gb;
    QVBoxLayout *layout;


signals:

public slots:
};

#endif // CAR_H
