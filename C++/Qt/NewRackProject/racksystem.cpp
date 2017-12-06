#include "racksystem.h"
#include "ui_racksystem.h"
#include <QScrollArea>

RackSystem::RackSystem(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::RackSystem)
{
    ui->setupUi(this);

    QVBoxLayout* layout = new QVBoxLayout();

    layout->addWidget(createRack());

    QWidget* contentWidget = new QWidget();
    contentWidget->setStyleSheet("width: 300px;");
    contentWidget->setLayout(layout);

    QScrollArea* scrollArea = new QScrollArea();

    scrollArea->setWidget(contentWidget);

    setCentralWidget(scrollArea);
}

RackSystem::~RackSystem()
{
    delete ui;
}

/**
 * @brief SystemRack::createRack
 * @return RackWidget
 *
 * This will create a rack by give it a name
 */
RackWidget *RackSystem::createRack()
{
    QString title = "Title one";
    RackWidget *rw = new RackWidget(this, 10, title);

    return rw;
}
