#ifndef DEVICE_H
#define DEVICE_H

#include <QWidget>

namespace Ui {
class Device;
}

class Device : public QWidget
{
    Q_OBJECT

public:
    explicit Device(QWidget *parent = 0);
    ~Device();

private:
    Ui::Device *ui;
};

#endif // DEVICE_H
