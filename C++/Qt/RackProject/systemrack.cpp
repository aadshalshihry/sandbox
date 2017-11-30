#include "systemrack.h"
#include "ui_systemrack.h"
#include <QPushButton>
#include <QLabel>


SystemRack::SystemRack(QWidget *parent) :
    QMainWindow(parent), ui(new Ui::SystemRack)
{
    ui->setupUi(this);

    QVBoxLayout *systemLayout = new QVBoxLayout(ui->scrollAreaWidgetContents);
//    systemLayout->setMargin(0);

//    systemLayout->addWidget(createRack());

//    resize(400, 500);


}

SystemRack::~SystemRack()
{

}

/**
 * @brief SystemRack::createRack
 * @return RackWidget
 *
 * This will create a rack by give it a name
 */
RackWidget *SystemRack::createRack()
{
    QString title = "Title one";
    RackWidget *rw = new RackWidget(this, title);
    return rw;
}
