/********************************************************************************
** Form generated from reading UI file 'racksystem.ui'
**
** Created by: Qt User Interface Compiler version 5.10.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_RACKSYSTEM_H
#define UI_RACKSYSTEM_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_RackSystem
{
public:
    QWidget *centralWidget;

    void setupUi(QMainWindow *RackSystem)
    {
        if (RackSystem->objectName().isEmpty())
            RackSystem->setObjectName(QStringLiteral("RackSystem"));
        RackSystem->resize(450, 500);
        centralWidget = new QWidget(RackSystem);
        centralWidget->setObjectName(QStringLiteral("centralWidget"));
        centralWidget->setStyleSheet(QStringLiteral(""));
        RackSystem->setCentralWidget(centralWidget);

        retranslateUi(RackSystem);

        QMetaObject::connectSlotsByName(RackSystem);
    } // setupUi

    void retranslateUi(QMainWindow *RackSystem)
    {
        RackSystem->setWindowTitle(QApplication::translate("RackSystem", "RackSystem", nullptr));
    } // retranslateUi

};

namespace Ui {
    class RackSystem: public Ui_RackSystem {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_RACKSYSTEM_H
