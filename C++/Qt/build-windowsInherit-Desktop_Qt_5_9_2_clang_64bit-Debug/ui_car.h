/********************************************************************************
** Form generated from reading UI file 'car.ui'
**
** Created by: Qt User Interface Compiler version 5.9.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_CAR_H
#define UI_CAR_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QScrollArea>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_car
{
public:
    QWidget *scrollAreaWidgetContents;
    QVBoxLayout *verticalLayout;

    void setupUi(QScrollArea *car)
    {
        if (car->objectName().isEmpty())
            car->setObjectName(QStringLiteral("car"));
        car->resize(400, 300);
        car->setWidgetResizable(true);
        scrollAreaWidgetContents = new QWidget();
        scrollAreaWidgetContents->setObjectName(QStringLiteral("scrollAreaWidgetContents"));
        scrollAreaWidgetContents->setGeometry(QRect(0, 0, 398, 298));
        verticalLayout = new QVBoxLayout(scrollAreaWidgetContents);
        verticalLayout->setObjectName(QStringLiteral("verticalLayout"));
        car->setWidget(scrollAreaWidgetContents);

        retranslateUi(car);

        QMetaObject::connectSlotsByName(car);
    } // setupUi

    void retranslateUi(QScrollArea *car)
    {
        car->setWindowTitle(QApplication::translate("car", "ScrollArea", Q_NULLPTR));
    } // retranslateUi

};

namespace Ui {
    class car: public Ui_car {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_CAR_H
