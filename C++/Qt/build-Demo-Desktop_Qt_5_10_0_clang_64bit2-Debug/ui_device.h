/********************************************************************************
** Form generated from reading UI file 'device.ui'
**
** Created by: Qt User Interface Compiler version 5.10.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_DEVICE_H
#define UI_DEVICE_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLabel>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_Device
{
public:
    QLabel *label;
    QWidget *widget;
    QWidget *horizontalLayoutWidget_2;
    QHBoxLayout *horizontalLayout_2;

    void setupUi(QWidget *Device)
    {
        if (Device->objectName().isEmpty())
            Device->setObjectName(QStringLiteral("Device"));
        Device->resize(400, 69);
        QSizePolicy sizePolicy(QSizePolicy::Preferred, QSizePolicy::Expanding);
        sizePolicy.setHorizontalStretch(0);
        sizePolicy.setVerticalStretch(105);
        sizePolicy.setHeightForWidth(Device->sizePolicy().hasHeightForWidth());
        Device->setSizePolicy(sizePolicy);
        Device->setMinimumSize(QSize(0, 30));
        Device->setMaximumSize(QSize(400, 69));
        Device->setStyleSheet(QLatin1String("background: #8dae4e; \n"
"margin-top: 2px;\n"
"border-radius: 3px;\n"
"border: 1px solid gray;"));
        label = new QLabel(Device);
        label->setObjectName(QStringLiteral("label"));
        label->setEnabled(true);
        label->setGeometry(QRect(0, 0, 401, 31));
        QSizePolicy sizePolicy1(QSizePolicy::Preferred, QSizePolicy::Preferred);
        sizePolicy1.setHorizontalStretch(0);
        sizePolicy1.setVerticalStretch(0);
        sizePolicy1.setHeightForWidth(label->sizePolicy().hasHeightForWidth());
        label->setSizePolicy(sizePolicy1);
        label->setMaximumSize(QSize(16777215, 57));
        QFont font;
        font.setPointSize(15);
        label->setFont(font);
        label->setStyleSheet(QLatin1String("padding: 0px;\n"
"border: 0px;\n"
"border-radius: 0px;"));
        label->setAlignment(Qt::AlignCenter);
        widget = new QWidget(Device);
        widget->setObjectName(QStringLiteral("widget"));
        widget->setGeometry(QRect(0, 30, 400, 31));
        QSizePolicy sizePolicy2(QSizePolicy::Expanding, QSizePolicy::Expanding);
        sizePolicy2.setHorizontalStretch(0);
        sizePolicy2.setVerticalStretch(0);
        sizePolicy2.setHeightForWidth(widget->sizePolicy().hasHeightForWidth());
        widget->setSizePolicy(sizePolicy2);
        widget->setMaximumSize(QSize(400, 32));
        widget->setStyleSheet(QLatin1String("margin: 0px;\n"
"border-radius: 0px;\n"
"border: 0px;\n"
"/*border-top: 1px solid black;\n"
"/*background: blue;"));
        horizontalLayoutWidget_2 = new QWidget(widget);
        horizontalLayoutWidget_2->setObjectName(QStringLiteral("horizontalLayoutWidget_2"));
        horizontalLayoutWidget_2->setGeometry(QRect(0, 0, 401, 31));
        horizontalLayout_2 = new QHBoxLayout(horizontalLayoutWidget_2);
        horizontalLayout_2->setObjectName(QStringLiteral("horizontalLayout_2"));
        horizontalLayout_2->setContentsMargins(0, 0, 0, 0);

        retranslateUi(Device);

        QMetaObject::connectSlotsByName(Device);
    } // setupUi

    void retranslateUi(QWidget *Device)
    {
        Device->setWindowTitle(QApplication::translate("Device", "Form", nullptr));
        label->setText(QApplication::translate("Device", "Device", nullptr));
    } // retranslateUi

};

namespace Ui {
    class Device: public Ui_Device {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_DEVICE_H
