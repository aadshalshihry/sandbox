/********************************************************************************
** Form generated from reading UI file 'racksystem.ui'
**
** Created by: Qt User Interface Compiler version 4.8.7
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_RACKSYSTEM_H
#define UI_RACKSYSTEM_H

#include <QtCore/QVariant>
#include <QtGui/QAction>
#include <QtGui/QApplication>
#include <QtGui/QButtonGroup>
#include <QtGui/QHeaderView>
#include <QtGui/QMainWindow>
#include <QtGui/QScrollArea>
#include <QtGui/QWidget>

QT_BEGIN_NAMESPACE

class Ui_RackSystem
{
public:
    QWidget *centralWidget;
    QScrollArea *scrollArea;
    QWidget *scrollAreaWidgetContents;

    void setupUi(QMainWindow *RackSystem)
    {
        if (RackSystem->objectName().isEmpty())
            RackSystem->setObjectName(QString::fromUtf8("RackSystem"));
        RackSystem->resize(400, 500);
        centralWidget = new QWidget(RackSystem);
        centralWidget->setObjectName(QString::fromUtf8("centralWidget"));
        centralWidget->setStyleSheet(QString::fromUtf8("margin: 0px;"));
        scrollArea = new QScrollArea(centralWidget);
        scrollArea->setObjectName(QString::fromUtf8("scrollArea"));
        scrollArea->setGeometry(QRect(0, 0, 400, 500));
        scrollArea->setWidgetResizable(true);
        scrollAreaWidgetContents = new QWidget();
        scrollAreaWidgetContents->setObjectName(QString::fromUtf8("scrollAreaWidgetContents"));
        scrollAreaWidgetContents->setGeometry(QRect(0, 0, 398, 498));
        scrollAreaWidgetContents->setStyleSheet(QString::fromUtf8("margin: 0px;"));
        scrollArea->setWidget(scrollAreaWidgetContents);
        RackSystem->setCentralWidget(centralWidget);

        retranslateUi(RackSystem);

        QMetaObject::connectSlotsByName(RackSystem);
    } // setupUi

    void retranslateUi(QMainWindow *RackSystem)
    {
        RackSystem->setWindowTitle(QApplication::translate("RackSystem", "RackSystem", 0, QApplication::UnicodeUTF8));
    } // retranslateUi

};

namespace Ui {
    class RackSystem: public Ui_RackSystem {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_RACKSYSTEM_H
