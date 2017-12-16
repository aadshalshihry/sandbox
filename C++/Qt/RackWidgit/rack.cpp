#include "rack.h"

Rack::Rack(QObject *parent) : QObject(parent)
{
    this->id = 0;
    this->numMachines = 0;
}

Rack::Rack(int id, int numMachines, std::string title)
{
    this->id = id;
    this->numMachines = numMachines;
    this->title = title;
}

Rack::~Rack()
{

}

int Rack::getId(){
    return id;
}

int Rack::getNumMachines(){
    return numMachines;
}

void Rack::setId(int id)
{
    this->id = id;
    emit idChanged(id);
}

void Rack::setNumMachines(int num)
{
    this->numMachines = num;
    emit numMachinesChanged(numMachines);
}


