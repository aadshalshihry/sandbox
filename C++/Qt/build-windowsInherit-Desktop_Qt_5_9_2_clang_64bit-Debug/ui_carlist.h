/********************************************************************************
** Form generated from reading UI file 'carlist.ui'
**
** Created by: Qt User Interface Compiler version 5.9.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_CARLIST_H
#define UI_CARLIST_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QGroupBox>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_CarList
{
public:
    QWidget *horizontalLayoutWidget;
    QHBoxLayout *horizontalLayout;

    void setupUi(QGroupBox *CarList)
    {
        if (CarList->objectName().isEmpty())
            CarList->setObjectName(QStringLiteral("CarList"));
        CarList->resize(400, 184);
        QSizePolicy sizePolicy(QSizePolicy::Expanding, QSizePolicy::MinimumExpanding);
        sizePolicy.setHorizontalStretch(0);
        sizePolicy.setVerticalStretch(0);
        sizePolicy.setHeightForWidth(CarList->sizePolicy().hasHeightForWidth());
        CarList->setSizePolicy(sizePolicy);
        CarList->setStyleSheet(QLatin1String("background: yellow;\n"
"margin-top: 10px;\n"
""));
        horizontalLayoutWidget = new QWidget(CarList);
        horizontalLayoutWidget->setObjectName(QStringLiteral("horizontalLayoutWidget"));
        horizontalLayoutWidget->setGeometry(QRect(10, 30, 381, 41));
        horizontalLayout = new QHBoxLayout(horizontalLayoutWidget);
        horizontalLayout->setObjectName(QStringLiteral("horizontalLayout"));
        horizontalLayout->setContentsMargins(0, 0, 0, 0);

        retranslateUi(CarList);

        QMetaObject::connectSlotsByName(CarList);
    } // setupUi

    void retranslateUi(QGroupBox *CarList)
    {
        CarList->setWindowTitle(QApplication::translate("CarList", "GroupBox", Q_NULLPTR));
        CarList->setTitle(QApplication::translate("CarList", "CarList", Q_NULLPTR));
    } // retranslateUi

};

namespace Ui {
    class CarList: public Ui_CarList {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_CARLIST_H
