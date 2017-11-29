#ifndef WINDOWS_H
#define WINDOWS_H

#include <QWidget>
#include <QGroupBox>
#include <QGridLayout>
#include <QRadioButton>
#include <QCheckBox>
#include <QPushButton>
#include <QMenu>

class windows : public QWidget
{
    Q_OBJECT
public:
    explicit windows(QWidget *parent = 0);

private:
    QGroupBox *createFirstExclusiveGroup();
    QGroupBox *createSecondExclusiveGroup();
    QGroupBox *createNonExclusiveGroup();
    QGroupBox *createPushButtonGroup();
};

#endif // WINDOWS_H
