/********************************************************************************
** Form generated from reading UI file 'mymainwindows.ui'
**
** Created by: Qt User Interface Compiler version 4.8.7
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_MYMAINWINDOWS_H
#define UI_MYMAINWINDOWS_H

#include <QtCore/QVariant>
#include <QtGui/QAction>
#include <QtGui/QApplication>
#include <QtGui/QButtonGroup>
#include <QtGui/QHeaderView>
#include <QtGui/QVBoxLayout>
#include <QtGui/QWidget>

QT_BEGIN_NAMESPACE

class Ui_MyMainWindows
{
public:
    QVBoxLayout *verticalLayout;

    void setupUi(QWidget *MyMainWindows)
    {
        if (MyMainWindows->objectName().isEmpty())
            MyMainWindows->setObjectName(QString::fromUtf8("MyMainWindows"));
        MyMainWindows->resize(400, 300);
        QSizePolicy sizePolicy(QSizePolicy::Maximum, QSizePolicy::Maximum);
        sizePolicy.setHorizontalStretch(0);
        sizePolicy.setVerticalStretch(0);
        sizePolicy.setHeightForWidth(MyMainWindows->sizePolicy().hasHeightForWidth());
        MyMainWindows->setSizePolicy(sizePolicy);
        verticalLayout = new QVBoxLayout(MyMainWindows);
        verticalLayout->setObjectName(QString::fromUtf8("verticalLayout"));

        retranslateUi(MyMainWindows);

        QMetaObject::connectSlotsByName(MyMainWindows);
    } // setupUi

    void retranslateUi(QWidget *MyMainWindows)
    {
        MyMainWindows->setWindowTitle(QApplication::translate("MyMainWindows", "Form", 0, QApplication::UnicodeUTF8));
    } // retranslateUi

};

namespace Ui {
    class MyMainWindows: public Ui_MyMainWindows {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MYMAINWINDOWS_H
