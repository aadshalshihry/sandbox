#include "racksystem.h"
#include "ui_racksystem.h"

RackSystem::RackSystem(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::RackSystem)
{
    ui->setupUi(this);

    QVBoxLayout *systemLayout = new QVBoxLayout(ui->scrollAreaWidgetContents);
    systemLayout->addWidget(createRack());
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
