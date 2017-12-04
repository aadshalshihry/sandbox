#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QHBoxLayout>
#include <QScrollArea>
#include <QVector>
#include <QGroupBox>

#include <car.h>


class MainWindow : public QWidget
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

private:
    int car_id;
    QVector<Car*> cars;


    QGroupBox *gb;
    QHBoxLayout *layout;




};

#endif // MAINWINDOW_H
