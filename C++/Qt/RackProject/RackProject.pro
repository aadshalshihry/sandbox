#-------------------------------------------------
#
# Project created by QtCreator 2017-11-29T04:59:39
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = RackProject
TEMPLATE = app


SOURCES += main.cpp\
        systemrack.cpp \
    rackwidget.cpp

HEADERS  += systemrack.h \
    rackwidget.h \
    customdatatype.h

FORMS    += systemrack.ui
