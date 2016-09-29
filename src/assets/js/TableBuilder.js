
/**
*Table Builder
 */
function TableBuilder(titles) {
    "use strict";

    var rowLength = titles.length;
    // var colLenght = col.length;

    var body = document.getElementById('col');
    var tbl = document.createElement('table');


    var tbdy = document.createElement('tbody');
    var thead = document.createElement('thead');


    var th = document.createElement('tr');
    for (var i = 0; i < rowLength; i++) {
        var td = document.createElement('th');
        td.appendChild(document.createTextNode(titles[i]));
        th.appendChild(td)

    }
    thead.appendChild(th);

/*
    for (var i = 0; i < colLenght; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < col[i].length; j++) {

            var td = document.createElement('td');
            td.appendChild(document.createTextNode(col[i][j] || " "));
            tr.appendChild(td)

        }
        tbdy.appendChild(tr);
    }
*/



    tbl.appendChild(thead);
    tbl.appendChild(tbdy);
    body.appendChild(tbl);

    return {
        setHeaderColor: function (color) {
            for (var j = 0; j < th.children.length; j++) {
                var td = th.children[j];
                td.style.backgroundColor = color;
            }
        },


        setTableData: function (d) {

            while (tbdy.firstChild) {
                tbdy.removeChild(tbdy.firstChild);
            }

            for (var i = 0; i < d.length; i++) {


                var tr = document.createElement('tr');
                for (var j = 0; j < d[i].length; j++) {
                    var td = document.createElement('td');
                    td.appendChild(document.createTextNode(d[i][j] || " "));
                    tr.appendChild(td)
                }
                tbdy.appendChild(tr);
            }
        }
    };





}





