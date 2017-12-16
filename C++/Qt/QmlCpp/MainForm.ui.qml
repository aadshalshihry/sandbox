import QtQuick 2.6

Rectangle {

    width: 360
    height: 360

    ListView {
        id: listView
        x: 8
        y: 0
        width: 264
        height: 223
        model: ListModel {
            ListElement {
                name: "Grey"
                colorCode: "grey"
            }
        }
        delegate: Item {
            x: 5
            width: 80
            height: 40
            Row {
                id: row1
                spacing: 10
                Rectangle {
                    width: 200
                    height: 40
                    color: colorCode
                }

                Text {
                    text: name
                    anchors.verticalCenter: parent.verticalCenter
                    font.bold: true
                }
            }
        }
    }
}
