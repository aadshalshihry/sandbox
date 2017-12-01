#include "person.h"

Person::Person()
{

}

Person::Person(QString name, int age)
{
    this->name = name;
    this->age = age;
}

QString Person::getName() const
{
    return name;
}

void Person::setName(const QString &value)
{
    name = value;
}

int Person::getAge() const
{
    return age;
}

void Person::setAge(int value)
{
    age = value;
}
