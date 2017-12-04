#-------------------------------------------------
#
# Project created by QtCreator 2017-12-02T19:58:58
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = CarClassInherit
TEMPLATE = app


SOURCES += main.cpp\
        mainwindow.cpp \
    car.cpp \
    carlist.cpp \
    colorlist.cpp

HEADERS  += mainwindow.h \
    car.h \
    carlist.h \
    colorlist.h

FORMS    += mainwindow.ui
