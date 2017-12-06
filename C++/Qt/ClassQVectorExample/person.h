#ifndef PERSON_H
#define PERSON_H

#include <QString>
#include <QDebug>

class Person
{
public:
    Person();
    Person(QString name = "", int age = 20);

    QString getName() const;
    void setName(const QString &value);

    int getAge() const;
    void setAge(int value);

private:
    QString name;
    int age;
};

#endif // PERSON_H
