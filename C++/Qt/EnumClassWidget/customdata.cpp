#include "customdata.h"
#include <QMetaEnum>
#include <QDebug>

CustomData::CustomData(QObject *parent) : QObject(parent)
{
    this->myOperational = "black";
    this->myDegraded = "red";
    this->myOffline = "green";
    this->myFaulted = "blue";
    this->myDisconnect = "yellow";

    this->state = operational;
}

QString CustomData::getState()
{

    switch (state) {
    case operational:
        return this->myOperational;
    case degraded:
        return this->myDegraded;
    case offline:
        return this->myOffline;
    case faulted:
        return this->myFaulted;
    case disconnected:
        return this->myDisconnect;
    }
}

void CustomData::setState(State a)
{
    switch (a) {
    case operational:
        this->state = operational;
        break;
    case degraded:
        this->state = degraded;
        break;
    case offline:
        this->state = offline;
        break;
    case faulted:
        this->state = faulted;
        break;
    case disconnected:
        this->state = disconnected;
        break;
    }
}
