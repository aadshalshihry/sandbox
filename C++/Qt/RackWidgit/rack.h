#ifndef RACK_H
#define RACK_H

#include <QObject>
#include <string>


class Rack : public QObject
{
    Q_OBJECT

public:
    Rack(QObject *parent);
    Rack(int id, int numMachines, std::string title);
    ~Rack();
    int getId();
    int getNumMachines();

public slots:
    void setId(int id);
    void setNumMachines(int numMachines);

signals:
    void idChanged(int newId);
    void numMachinesChanged(int num);

private:
    int id;
    int numMachines;
    std::string title;
};
#endif // RACK_H
