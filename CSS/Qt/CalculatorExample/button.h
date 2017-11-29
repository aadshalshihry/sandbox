#ifndef BUTTON_H
#define BUTTON_H

#include <QToolButton>
#include <QSize>

class Button : public QToolButton
{
    Q_OBJECT

public:
    explicit Button(const QString &text, QWidget *parent = 0);

    QSize sizeHint() const override;
};

#endif

