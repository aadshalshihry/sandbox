/********************************************************************************
** Form generated from reading UI file 'vm.ui'
**
** Created by: Qt User Interface Compiler version 5.10.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_VM_H
#define UI_VM_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLabel>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_VM
{
public:
    QVBoxLayout *verticalLayout;
    QLabel *label;

    void setupUi(QWidget *VM)
    {
        if (VM->objectName().isEmpty())
            VM->setObjectName(QStringLiteral("VM"));
        VM->resize(124, 32);
        VM->setStyleSheet(QLatin1String("background: #00e64d;\n"
"border-radius: 5px;\n"
"padding: 3px;\n"
"margin-left: 5px;"));
        verticalLayout = new QVBoxLayout(VM);
        verticalLayout->setObjectName(QStringLiteral("verticalLayout"));
        verticalLayout->setContentsMargins(0, 0, 0, 0);
        label = new QLabel(VM);
        label->setObjectName(QStringLiteral("label"));
        label->setMaximumSize(QSize(124, 25));
        label->setStyleSheet(QStringLiteral(""));

        verticalLayout->addWidget(label);


        retranslateUi(VM);

        QMetaObject::connectSlotsByName(VM);
    } // setupUi

    void retranslateUi(QWidget *VM)
    {
        VM->setWindowTitle(QApplication::translate("VM", "Form", nullptr));
        label->setText(QApplication::translate("VM", "SomethinToo too", nullptr));
    } // retranslateUi

};

namespace Ui {
    class VM: public Ui_VM {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_VM_H
