#-------------------------------------------------
#
# Project created by QtCreator 2017-11-29T13:16:23
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = NewRackProject
TEMPLATE = app


SOURCES += main.cpp\
        racksystem.cpp \
    rackwidget.cpp \
    vmwidget.cpp \
    devicewidget.cpp

HEADERS  += racksystem.h \
    rackwidget.h \
    vmwidget.h \
    devicewidget.h \
    customdatatype.h

FORMS    += racksystem.ui
