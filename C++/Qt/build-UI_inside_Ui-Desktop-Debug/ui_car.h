/********************************************************************************
** Form generated from reading UI file 'car.ui'
**
** Created by: Qt User Interface Compiler version 4.8.7
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_CAR_H
#define UI_CAR_H

#include <QtCore/QVariant>
#include <QtGui/QAction>
#include <QtGui/QApplication>
#include <QtGui/QButtonGroup>
#include <QtGui/QGroupBox>
#include <QtGui/QHeaderView>
#include <QtGui/QVBoxLayout>
#include <QtGui/QWidget>

QT_BEGIN_NAMESPACE

class Ui_Car
{
public:
    QGroupBox *groupBox;
    QVBoxLayout *verticalLayout;

    void setupUi(QWidget *Car)
    {
        if (Car->objectName().isEmpty())
            Car->setObjectName(QString::fromUtf8("Car"));
        Car->setWindowModality(Qt::NonModal);
        Car->resize(400, 400);
        QSizePolicy sizePolicy(QSizePolicy::Maximum, QSizePolicy::Maximum);
        sizePolicy.setHorizontalStretch(100);
        sizePolicy.setVerticalStretch(100);
        sizePolicy.setHeightForWidth(Car->sizePolicy().hasHeightForWidth());
        Car->setSizePolicy(sizePolicy);
        Car->setMinimumSize(QSize(0, 100));
        Car->setSizeIncrement(QSize(2, 2));
        Car->setStyleSheet(QString::fromUtf8("background: gray;\n"
"width: 400px;\n"
"height: 500px;"));
        groupBox = new QGroupBox(Car);
        groupBox->setObjectName(QString::fromUtf8("groupBox"));
        groupBox->setGeometry(QRect(10, 5, 381, 400));
        QSizePolicy sizePolicy1(QSizePolicy::Maximum, QSizePolicy::Maximum);
        sizePolicy1.setHorizontalStretch(0);
        sizePolicy1.setVerticalStretch(250);
        sizePolicy1.setHeightForWidth(groupBox->sizePolicy().hasHeightForWidth());
        groupBox->setSizePolicy(sizePolicy1);
        groupBox->setMinimumSize(QSize(0, 100));
        groupBox->setSizeIncrement(QSize(0, 300));
        verticalLayout = new QVBoxLayout(groupBox);
        verticalLayout->setObjectName(QString::fromUtf8("verticalLayout"));

        retranslateUi(Car);

        QMetaObject::connectSlotsByName(Car);
    } // setupUi

    void retranslateUi(QWidget *Car)
    {
        Car->setWindowTitle(QApplication::translate("Car", "Form", 0, QApplication::UnicodeUTF8));
    } // retranslateUi

};

namespace Ui {
    class Car: public Ui_Car {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_CAR_H
