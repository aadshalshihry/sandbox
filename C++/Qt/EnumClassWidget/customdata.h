#ifndef CUSTOMDATA_H
#define CUSTOMDATA_H

#include <QObject>
#include <QDebug>
#include <QColor>
#include <QPalette>


enum State {
    operational,
    degraded,
    offline,
    faulted,
    disconnected
};


class CustomData : public QObject
{
    Q_OBJECT
public:
    explicit CustomData(QObject *parent = nullptr);

    QString getState();
    void setState(State a);



private:
    State state;
    QString myOperational;
    QString myDegraded;
    QString myOffline;
    QString myFaulted;
    QString myDisconnect;
};

#endif // CUSTOMDATA_H
