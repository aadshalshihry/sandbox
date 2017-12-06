/********************************************************************************
** Form generated from reading UI file 'rack.ui'
**
** Created by: Qt User Interface Compiler version 5.10.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_RACK_H
#define UI_RACK_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QScrollArea>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_Rack
{
public:
    QWidget *scrollAreaWidgetContents;
    QVBoxLayout *verticalLayout;

    void setupUi(QScrollArea *Rack)
    {
        if (Rack->objectName().isEmpty())
            Rack->setObjectName(QStringLiteral("Rack"));
        Rack->resize(400, 500);
        Rack->setWidgetResizable(true);
        scrollAreaWidgetContents = new QWidget();
        scrollAreaWidgetContents->setObjectName(QStringLiteral("scrollAreaWidgetContents"));
        scrollAreaWidgetContents->setGeometry(QRect(0, 0, 398, 498));
        scrollAreaWidgetContents->setStyleSheet(QStringLiteral("background: gray;"));
        verticalLayout = new QVBoxLayout(scrollAreaWidgetContents);
        verticalLayout->setSpacing(0);
        verticalLayout->setObjectName(QStringLiteral("verticalLayout"));
        verticalLayout->setContentsMargins(0, 0, 0, 0);
        Rack->setWidget(scrollAreaWidgetContents);

        retranslateUi(Rack);

        QMetaObject::connectSlotsByName(Rack);
    } // setupUi

    void retranslateUi(QScrollArea *Rack)
    {
        Rack->setWindowTitle(QApplication::translate("Rack", "ScrollArea", nullptr));
    } // retranslateUi

};

namespace Ui {
    class Rack: public Ui_Rack {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_RACK_H
