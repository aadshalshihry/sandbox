/********************************************************************************
** Form generated from reading UI file 'mainwindows.ui'
**
** Created by: Qt User Interface Compiler version 5.10.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_MAINWINDOWS_H
#define UI_MAINWINDOWS_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QSpinBox>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_MainWindows
{
public:
    QPushButton *btn1;
    QPushButton *btn2;
    QPushButton *btn3;
    QPushButton *btn4;
    QPushButton *pushButton_5;
    QSpinBox *spinBox;
    QLineEdit *lineEdit;
    QLabel *label;
    QSpinBox *spinBox_2;
    QPushButton *btn3_2;
    QLabel *label_2;
    QPushButton *btn1_2;
    QPushButton *btn2_2;
    QPushButton *btn4_2;
    QPushButton *btn4_3;
    QPushButton *btn4_4;

    void setupUi(QWidget *MainWindows)
    {
        if (MainWindows->objectName().isEmpty())
            MainWindows->setObjectName(QStringLiteral("MainWindows"));
        MainWindows->resize(667, 500);
        MainWindows->setMinimumSize(QSize(400, 0));
        MainWindows->setMaximumSize(QSize(16777215, 16777215));
        btn1 = new QPushButton(MainWindows);
        btn1->setObjectName(QStringLiteral("btn1"));
        btn1->setGeometry(QRect(540, 110, 113, 32));
        btn2 = new QPushButton(MainWindows);
        btn2->setObjectName(QStringLiteral("btn2"));
        btn2->setGeometry(QRect(540, 140, 113, 32));
        btn3 = new QPushButton(MainWindows);
        btn3->setObjectName(QStringLiteral("btn3"));
        btn3->setGeometry(QRect(540, 170, 113, 32));
        btn4 = new QPushButton(MainWindows);
        btn4->setObjectName(QStringLiteral("btn4"));
        btn4->setGeometry(QRect(540, 200, 113, 32));
        pushButton_5 = new QPushButton(MainWindows);
        pushButton_5->setObjectName(QStringLiteral("pushButton_5"));
        pushButton_5->setGeometry(QRect(540, 40, 51, 32));
        spinBox = new QSpinBox(MainWindows);
        spinBox->setObjectName(QStringLiteral("spinBox"));
        spinBox->setGeometry(QRect(600, 40, 41, 31));
        lineEdit = new QLineEdit(MainWindows);
        lineEdit->setObjectName(QStringLiteral("lineEdit"));
        lineEdit->setGeometry(QRect(540, 10, 113, 21));
        label = new QLabel(MainWindows);
        label->setObjectName(QStringLiteral("label"));
        label->setGeometry(QRect(570, 80, 60, 16));
        spinBox_2 = new QSpinBox(MainWindows);
        spinBox_2->setObjectName(QStringLiteral("spinBox_2"));
        spinBox_2->setGeometry(QRect(600, 270, 41, 31));
        btn3_2 = new QPushButton(MainWindows);
        btn3_2->setObjectName(QStringLiteral("btn3_2"));
        btn3_2->setGeometry(QRect(540, 400, 113, 32));
        label_2 = new QLabel(MainWindows);
        label_2->setObjectName(QStringLiteral("label_2"));
        label_2->setGeometry(QRect(570, 310, 60, 16));
        btn1_2 = new QPushButton(MainWindows);
        btn1_2->setObjectName(QStringLiteral("btn1_2"));
        btn1_2->setGeometry(QRect(540, 340, 113, 32));
        btn2_2 = new QPushButton(MainWindows);
        btn2_2->setObjectName(QStringLiteral("btn2_2"));
        btn2_2->setGeometry(QRect(540, 370, 113, 32));
        btn4_2 = new QPushButton(MainWindows);
        btn4_2->setObjectName(QStringLiteral("btn4_2"));
        btn4_2->setGeometry(QRect(540, 430, 113, 32));
        btn4_3 = new QPushButton(MainWindows);
        btn4_3->setObjectName(QStringLiteral("btn4_3"));
        btn4_3->setGeometry(QRect(540, 460, 113, 32));
        btn4_4 = new QPushButton(MainWindows);
        btn4_4->setObjectName(QStringLiteral("btn4_4"));
        btn4_4->setGeometry(QRect(540, 230, 113, 32));

        retranslateUi(MainWindows);

        QMetaObject::connectSlotsByName(MainWindows);
    } // setupUi

    void retranslateUi(QWidget *MainWindows)
    {
        MainWindows->setWindowTitle(QApplication::translate("MainWindows", "MainWindows", nullptr));
        btn1->setText(QApplication::translate("MainWindows", "operational", nullptr));
        btn2->setText(QApplication::translate("MainWindows", "faulted", nullptr));
        btn3->setText(QApplication::translate("MainWindows", "offline", nullptr));
        btn4->setText(QApplication::translate("MainWindows", "degraded", nullptr));
        pushButton_5->setText(QApplication::translate("MainWindows", "+", nullptr));
        lineEdit->setPlaceholderText(QApplication::translate("MainWindows", "VM Name", nullptr));
        label->setText(QApplication::translate("MainWindows", "Device", nullptr));
        btn3_2->setText(QApplication::translate("MainWindows", "offline", nullptr));
        label_2->setText(QApplication::translate("MainWindows", "Vm", nullptr));
        btn1_2->setText(QApplication::translate("MainWindows", "operational", nullptr));
        btn2_2->setText(QApplication::translate("MainWindows", "faulted", nullptr));
        btn4_2->setText(QApplication::translate("MainWindows", "degraded", nullptr));
        btn4_3->setText(QApplication::translate("MainWindows", "not connected", nullptr));
        btn4_4->setText(QApplication::translate("MainWindows", "not connected", nullptr));
    } // retranslateUi

};

namespace Ui {
    class MainWindows: public Ui_MainWindows {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MAINWINDOWS_H
