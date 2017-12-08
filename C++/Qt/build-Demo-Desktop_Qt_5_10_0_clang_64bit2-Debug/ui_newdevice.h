/********************************************************************************
** Form generated from reading UI file 'newdevice.ui'
**
** Created by: Qt User Interface Compiler version 5.10.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_NEWDEVICE_H
#define UI_NEWDEVICE_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QGroupBox>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_NewDevice
{
public:
    QWidget *horizontalLayoutWidget;
    QHBoxLayout *horizontalLayout;

    void setupUi(QGroupBox *NewDevice)
    {
        if (NewDevice->objectName().isEmpty())
            NewDevice->setObjectName(QStringLiteral("NewDevice"));
        NewDevice->resize(359, 73);
        NewDevice->setMinimumSize(QSize(0, 73));
        NewDevice->setStyleSheet(QLatin1String("background: green;\n"
"margin: 5px;\n"
"border-radius: 3px;"));
        NewDevice->setAlignment(Qt::AlignCenter);
        horizontalLayoutWidget = new QWidget(NewDevice);
        horizontalLayoutWidget->setObjectName(QStringLiteral("horizontalLayoutWidget"));
        horizontalLayoutWidget->setGeometry(QRect(10, 30, 341, 31));
        horizontalLayout = new QHBoxLayout(horizontalLayoutWidget);
        horizontalLayout->setObjectName(QStringLiteral("horizontalLayout"));
        horizontalLayout->setContentsMargins(0, 0, 0, 0);

        retranslateUi(NewDevice);

        QMetaObject::connectSlotsByName(NewDevice);
    } // setupUi

    void retranslateUi(QGroupBox *NewDevice)
    {
        NewDevice->setWindowTitle(QApplication::translate("NewDevice", "GroupBox", nullptr));
        NewDevice->setTitle(QApplication::translate("NewDevice", "GroupBox", nullptr));
    } // retranslateUi

};

namespace Ui {
    class NewDevice: public Ui_NewDevice {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_NEWDEVICE_H
