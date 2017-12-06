#ifndef RACK_H
#define RACK_H

#include <QScrollArea>

namespace Ui {
class Rack;
}

class Rack : public QScrollArea
{
    Q_OBJECT

public:
    explicit Rack(QWidget *parent = 0);
    ~Rack();

private:
    Ui::Rack *ui;
};

#endif // RACK_H
