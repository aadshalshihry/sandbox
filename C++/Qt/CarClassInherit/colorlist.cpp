#include "colorlist.h"

ColorList::ColorList(QWidget *parent) : QWidget(parent)
{

}

ColorList::ColorList(QWidget *parent, QString name) : QWidget(parent)
{
    this->colorList_id = 0;
    this->name = name;
}

QLabel *ColorList::createColorList()
{
    QLabel *l = new QLabel(this->name, this);
    return l;
}
