#ifndef COLORLIST_H
#define COLORLIST_H

#include <QWidget>
#include <QString>
#include <QVector>
#include <QLabel>

class ColorList : public QWidget
{
    Q_OBJECT
public:
    explicit ColorList(QWidget *parent = 0);
    explicit ColorList(QWidget *parent = 0, QString name = "");
    QLabel *createColorList();
    QVector<ColorList*> *colorLists;
private:
    int colorList_id;
    QString name;

signals:

public slots:
};

#endif // COLORLIST_H
