import QtQuick 2.6
import QtQuick.Window 2.2

Window {
    id: screen
    visible: true
    width: 450
    height: 480

    ListModel {
        id: myModel
        ListElement {
            text: "Hello World"
        }
    }

    ListView {
        width: screen.width
        height: screen.height



        model: 20

        delegate: Image {
            id: id1
            fillMode: Image.PreserveAspectFit
            source: "./pics/img1.png"
        }
    }


}
