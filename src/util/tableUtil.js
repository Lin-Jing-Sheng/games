//根据某列内容合并某列单元格  flag:true 合并单元格  false:拆散单元格

export function margeCell(tableID, tableRef, index, flag, columnName) {
    //  window.removeEventListener("updated", e => tableRef.updated(e));

    var tableDate = tableRef.data;
    var table = document.getElementById(tableID).childNodes[2].childNodes[0].childNodes[1];
    var lengthMap = new Map();
    var indexArray = new Array();
    var lastValue = '';
    var valueList = [];
    var valueflag = false;  //待排列的是否混乱
    for (var i = 0; i < tableDate.length; i++) {
        var row = tableDate[i];
        var subject = row[columnName];
        if (subject != lastValue) {
            indexArray.push(i);
            lastValue = subject;
            if (valueList.includes(subject)) {
                valueflag = true;
            }

            valueList.push(subject);
        }
    }

    if (valueflag) {
        return;
    }

    indexArray.push(tableDate.length);
    for (var i = 0; i < indexArray.length - 1; i++) {
        lengthMap.set(indexArray[i], indexArray[i + 1] - indexArray[i]);
    }
    var trList = table.childNodes;
    if (flag) {
        for (var i = 0; i < trList.length; i++) {
            var length = lengthMap.get(i);
            var tr = trList[i];
            var tdList = tr.childNodes;
            for (var j = 0; j < tdList.length; j++) {
                var td = tdList[j];
                if (j == index) {
                    if (length != null) {
                        td.style.display = '';
                        td.setAttribute("rowspan", length);
                    } else {
                        td.style.display = 'none';
                    }
                }
            }
        }
    } else {
        //将 td还原
        for (var i = 0; i < trList.length; i++) {
            var length = lengthMap.get(i);
            var tr = trList[i];
            var tdList = tr.childNodes;
            for (var j = 0; j < tdList.length; j++) {
                var td = tdList[j];
                td.style.display = '';
                td.setAttribute("rowspan", 1);
            }
        }
    }
    //  window.addEventListener("updated", e => tableRef.updated(e));
}

//把单元格在主体表中的位置进行合并
export function margeCellIndex(tableID, row1, col1, row2, col2) {
    var table = document.getElementById(tableID).childNodes[2].childNodes[0].childNodes[1];
    var trList = table.childNodes;
    for (var i = 0; i < trList.length; i++) {
        var tr = trList[i];
        var tdList = tr.childNodes;
        if (i < row1 || i > row2) {
            continue;
        }
        for (var j = 0; j < tdList.length; j++) {
            var td = tdList[j];
            if (i == row1 && j == col1) {
                td.style.display = '';
                td.setAttribute("rowspan", row2 - row1 + 1);
                td.setAttribute("colspan", col2 - col1 + 1);
            } else if (j > col1 && j <= col2) {
                td.style.display = 'none';
            }
        }
    }
}

//将表的主体合并的单元格取消合并
export function unmargeCellIndex(tableID) {
    var table = document.getElementById(tableID).childNodes[2].childNodes[0].childNodes[1];
    var trList = table.childNodes;
    for (var i = 0; i < trList.length; i++) {
        var tr = trList[i];
        var tdList = tr.childNodes;
        for (var j = 0; j < tdList.length; j++) {
            var td = tdList[j];
            td.style.display = '';
            td.setAttribute("rowspan", 1);
            td.setAttribute("colspan", 1);
        }
    }
}


//将统计栏进行合并
export function margeTotalTable(tableID, col1, col2) {
    var table = document.getElementById(tableID).childNodes[3].childNodes[0].childNodes[1];
    var tr = table.childNodes[0];
    var tdList = tr.childNodes;
    for (var j = 0; j < tdList.length; j++) {
        var td = tdList[j];
        if (j == col1) {
            td.style.display = '';
            td.setAttribute("colspan", col2 - col1 + 1);
        } else if (j > col1 && j <= col2) {
            td.style.display = 'none';
        }
    }
}

//把单元格在主体表中的位置进行合并
export function setCellValue(tableID,row,col,value) {
    debugger;
    var table = document.getElementById(tableID).childNodes[2].childNodes[0].childNodes[1];
    var tr = table.childNodes[row];
    var td = tr.childNodes[col];
    var divBox = td.childNodes[0].childNodes[0];
    divBox.innerText = value;
}