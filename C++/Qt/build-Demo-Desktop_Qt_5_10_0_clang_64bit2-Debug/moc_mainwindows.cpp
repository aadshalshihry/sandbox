/****************************************************************************
** Meta object code from reading C++ file 'mainwindows.h'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.10.0)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../Demo/mainwindows.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'mainwindows.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.10.0. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
QT_WARNING_PUSH
QT_WARNING_DISABLE_DEPRECATED
struct qt_meta_stringdata_MainWindows_t {
    QByteArrayData data[15];
    char stringdata0[238];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_MainWindows_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_MainWindows_t qt_meta_stringdata_MainWindows = {
    {
QT_MOC_LITERAL(0, 0, 11), // "MainWindows"
QT_MOC_LITERAL(1, 12, 23), // "on_pushButton_5_clicked"
QT_MOC_LITERAL(2, 36, 0), // ""
QT_MOC_LITERAL(3, 37, 15), // "on_btn1_clicked"
QT_MOC_LITERAL(4, 53, 15), // "on_btn2_clicked"
QT_MOC_LITERAL(5, 69, 15), // "on_btn3_clicked"
QT_MOC_LITERAL(6, 85, 15), // "on_btn4_clicked"
QT_MOC_LITERAL(7, 101, 17), // "on_btn1_2_clicked"
QT_MOC_LITERAL(8, 119, 17), // "on_btn2_2_clicked"
QT_MOC_LITERAL(9, 137, 17), // "on_btn3_2_clicked"
QT_MOC_LITERAL(10, 155, 17), // "on_btn4_2_clicked"
QT_MOC_LITERAL(11, 173, 17), // "on_btn4_4_clicked"
QT_MOC_LITERAL(12, 191, 17), // "on_btn4_3_clicked"
QT_MOC_LITERAL(13, 209, 23), // "on_spinBox_valueChanged"
QT_MOC_LITERAL(14, 233, 4) // "arg1"

    },
    "MainWindows\0on_pushButton_5_clicked\0"
    "\0on_btn1_clicked\0on_btn2_clicked\0"
    "on_btn3_clicked\0on_btn4_clicked\0"
    "on_btn1_2_clicked\0on_btn2_2_clicked\0"
    "on_btn3_2_clicked\0on_btn4_2_clicked\0"
    "on_btn4_4_clicked\0on_btn4_3_clicked\0"
    "on_spinBox_valueChanged\0arg1"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_MainWindows[] = {

 // content:
       7,       // revision
       0,       // classname
       0,    0, // classinfo
      12,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // slots: name, argc, parameters, tag, flags
       1,    0,   74,    2, 0x08 /* Private */,
       3,    0,   75,    2, 0x08 /* Private */,
       4,    0,   76,    2, 0x08 /* Private */,
       5,    0,   77,    2, 0x08 /* Private */,
       6,    0,   78,    2, 0x08 /* Private */,
       7,    0,   79,    2, 0x08 /* Private */,
       8,    0,   80,    2, 0x08 /* Private */,
       9,    0,   81,    2, 0x08 /* Private */,
      10,    0,   82,    2, 0x08 /* Private */,
      11,    0,   83,    2, 0x08 /* Private */,
      12,    0,   84,    2, 0x08 /* Private */,
      13,    1,   85,    2, 0x08 /* Private */,

 // slots: parameters
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void, QMetaType::Int,   14,

       0        // eod
};

void MainWindows::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        MainWindows *_t = static_cast<MainWindows *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->on_pushButton_5_clicked(); break;
        case 1: _t->on_btn1_clicked(); break;
        case 2: _t->on_btn2_clicked(); break;
        case 3: _t->on_btn3_clicked(); break;
        case 4: _t->on_btn4_clicked(); break;
        case 5: _t->on_btn1_2_clicked(); break;
        case 6: _t->on_btn2_2_clicked(); break;
        case 7: _t->on_btn3_2_clicked(); break;
        case 8: _t->on_btn4_2_clicked(); break;
        case 9: _t->on_btn4_4_clicked(); break;
        case 10: _t->on_btn4_3_clicked(); break;
        case 11: _t->on_spinBox_valueChanged((*reinterpret_cast< int(*)>(_a[1]))); break;
        default: ;
        }
    }
}

const QMetaObject MainWindows::staticMetaObject = {
    { &QWidget::staticMetaObject, qt_meta_stringdata_MainWindows.data,
      qt_meta_data_MainWindows,  qt_static_metacall, nullptr, nullptr}
};


const QMetaObject *MainWindows::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *MainWindows::qt_metacast(const char *_clname)
{
    if (!_clname) return nullptr;
    if (!strcmp(_clname, qt_meta_stringdata_MainWindows.stringdata0))
        return static_cast<void*>(this);
    return QWidget::qt_metacast(_clname);
}

int MainWindows::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QWidget::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 12)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 12;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 12)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 12;
    }
    return _id;
}
QT_WARNING_POP
QT_END_MOC_NAMESPACE
