/********************************************************************************
** Form generated from reading UI file 'carlist.ui'
**
** Created by: Qt User Interface Compiler version 4.8.7
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_CARLIST_H
#define UI_CARLIST_H

#include <QtCore/QVariant>
#include <QtGui/QAction>
#include <QtGui/QApplication>
#include <QtGui/QButtonGroup>
#include <QtGui/QGroupBox>
#include <QtGui/QHBoxLayout>
#include <QtGui/QHeaderView>
#include <QtGui/QLabel>
#include <QtGui/QWidget>

QT_BEGIN_NAMESPACE

class Ui_CarList
{
public:
    QLabel *label;
    QGroupBox *groupBox;
    QWidget *horizontalLayoutWidget;
    QHBoxLayout *horizontalLayout;

    void setupUi(QWidget *CarList)
    {
        if (CarList->objectName().isEmpty())
            CarList->setObjectName(QString::fromUtf8("CarList"));
        CarList->resize(405, 148);
        CarList->setStyleSheet(QString::fromUtf8("background: yellow;"));
        label = new QLabel(CarList);
        label->setObjectName(QString::fromUtf8("label"));
        label->setGeometry(QRect(160, 10, 54, 17));
        label->setStyleSheet(QString::fromUtf8("color: white; background: green;"));
        groupBox = new QGroupBox(CarList);
        groupBox->setObjectName(QString::fromUtf8("groupBox"));
        groupBox->setGeometry(QRect(10, 50, 381, 80));
        horizontalLayoutWidget = new QWidget(groupBox);
        horizontalLayoutWidget->setObjectName(QString::fromUtf8("horizontalLayoutWidget"));
        horizontalLayoutWidget->setGeometry(QRect(9, 30, 361, 31));
        horizontalLayout = new QHBoxLayout(horizontalLayoutWidget);
        horizontalLayout->setObjectName(QString::fromUtf8("horizontalLayout"));
        horizontalLayout->setContentsMargins(0, 0, 0, 0);

        retranslateUi(CarList);

        QMetaObject::connectSlotsByName(CarList);
    } // setupUi

    void retranslateUi(QWidget *CarList)
    {
        CarList->setWindowTitle(QApplication::translate("CarList", "Form", 0, QApplication::UnicodeUTF8));
        label->setText(QApplication::translate("CarList", "TextLabel", 0, QApplication::UnicodeUTF8));
        groupBox->setTitle(QApplication::translate("CarList", "GroupBox", 0, QApplication::UnicodeUTF8));
    } // retranslateUi

};

namespace Ui {
    class CarList: public Ui_CarList {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_CARLIST_H
