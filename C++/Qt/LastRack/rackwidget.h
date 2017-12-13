#ifndef RACKWIDGET_H
#define RACKWIDGET_H

#include <QWidget>
#include <QGroupBox>
#include <QPushButton>
#include <QVBoxLayout>
#include <QString>

namespace Ui {
class RackWidget;
}


class RackWidget : public QWidget
{
    Q_OBJECT
public:
    explicit RackWidget(QWidget *parent = 0, QString *title = NULL);
    ~RackWidget();

signals:

public slots:

private:
    Ui::RackWidget *ui;
    QGroupBox *rack;
    QVBoxLayout *rackLayout;
    QString *title;


};

#endif // RACKWIDGET_H
