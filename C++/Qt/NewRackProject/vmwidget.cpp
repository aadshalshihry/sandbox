#include "vmwidget.h"


VMWidget::VMWidget(QWidget *parent, QString name, State state) :
    QWidget(parent)
{
    this->name = name;
    this->state = state;



}

QLabel *VMWidget::createVM()
{
    QLabel *label = new QLabel();
    label->setStyleSheet("QWidget {background: #222222; }");
    label->setText("H");
    label->setFixedWidth(label->text().length() * 13);
    label->setAlignment(Qt::AlignCenter);
//    machineLayout->addWidget(label);

    return label;
}
