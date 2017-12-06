#-------------------------------------------------
#
# Project created by QtCreator 2017-12-05T22:18:45
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = DemoRackProject
TEMPLATE = app


SOURCES += main.cpp\
        mainwindow.cpp \
    rack.cpp \
    device.cpp

HEADERS  += mainwindow.h \
    rack.h \
    device.h

FORMS    += mainwindow.ui \
    rack.ui \
    device.ui
