/********************************************************************************
** Form generated from reading UI file 'lable.ui'
**
** Created by: Qt User Interface Compiler version 5.9.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_LABLE_H
#define UI_LABLE_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLabel>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_Lable
{
public:
    QLabel *label;

    void setupUi(QWidget *Lable)
    {
        if (Lable->objectName().isEmpty())
            Lable->setObjectName(QStringLiteral("Lable"));
        Lable->resize(165, 40);
        Lable->setStyleSheet(QLatin1String("background: red;\n"
"color: white;"));
        label = new QLabel(Lable);
        label->setObjectName(QStringLiteral("label"));
        label->setGeometry(QRect(40, 10, 101, 16));
        label->setStyleSheet(QStringLiteral("font-size: 20px;"));

        retranslateUi(Lable);

        QMetaObject::connectSlotsByName(Lable);
    } // setupUi

    void retranslateUi(QWidget *Lable)
    {
        Lable->setWindowTitle(QApplication::translate("Lable", "Form", Q_NULLPTR));
        label->setText(QApplication::translate("Lable", "TextLabel", Q_NULLPTR));
    } // retranslateUi

};

namespace Ui {
    class Lable: public Ui_Lable {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_LABLE_H
