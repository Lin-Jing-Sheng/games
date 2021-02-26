import FileSaver from "file-saver";
import XLSX from 'xlsx';


export function exportExcel(tableId,fileName) {

    var xlsxParam = {raw: true};
    var wb = XLSX.utils.table_to_book(document.querySelector("#"+tableId),xlsxParam);

    var wbout = XLSX.write(wb,{bookType:"xlsx",bookSST:true,type:"array"});
    try {
        FileSaver.saveAs(new Blob([wbout],{type:'application/octet-stream'}),fileName+".xlsx");
    }catch (e) {

    }
}
