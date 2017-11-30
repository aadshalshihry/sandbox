/********************************************************************************
** Form generated from reading UI file 'systemrack.ui'
**
** Created by: Qt User Interface Compiler version 4.8.7
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_SYSTEMRACK_H
#define UI_SYSTEMRACK_H

#include <QtCore/QVariant>
#include <QtGui/QAction>
#include <QtGui/QApplication>
#include <QtGui/QButtonGroup>
#include <QtGui/QHeaderView>
#include <QtGui/QMainWindow>
#include <QtGui/QScrollArea>
#include <QtGui/QWidget>

QT_BEGIN_NAMESPACE

class Ui_SystemRack
{
public:
    QWidget *centralWidget;
    QScrollArea *scrollArea;
    QWidget *scrollAreaWidgetContents;

    void setupUi(QMainWindow *SystemRack)
    {
        if (SystemRack->objectName().isEmpty())
            SystemRack->setObjectName(QString::fromUtf8("SystemRack"));
        SystemRack->resize(400, 500);
        centralWidget = new QWidget(SystemRack);
        centralWidget->setObjectName(QString::fromUtf8("centralWidget"));
        scrollArea = new QScrollArea(centralWidget);
        scrollArea->setObjectName(QString::fromUtf8("scrollArea"));
        scrollArea->setGeometry(QRect(0, 0, 400, 500));
        scrollArea->setWidgetResizable(true);
        scrollAreaWidgetContents = new QWidget();
        scrollAreaWidgetContents->setObjectName(QString::fromUtf8("scrollAreaWidgetContents"));
        scrollAreaWidgetContents->setGeometry(QRect(0, 0, 398, 498));
        scrollArea->setWidget(scrollAreaWidgetContents);
        SystemRack->setCentralWidget(centralWidget);

        retranslateUi(SystemRack);

        QMetaObject::connectSlotsByName(SystemRack);
    } // setupUi

    void retranslateUi(QMainWindow *SystemRack)
    {
        SystemRack->setWindowTitle(QApplication::translate("SystemRack", "SystemRack", 0, QApplication::UnicodeUTF8));
    } // retranslateUi

};

namespace Ui {
    class SystemRack: public Ui_SystemRack {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_SYSTEMRACK_H
