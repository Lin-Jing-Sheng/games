
import { downLoadFile } from "@/api/cgs-exam/common/file";

export  function downLoadFileByID(id) {
    downLoadFile(id)
    .then(res => {
      var status = res.status;
      if (status == 200) {
        var filename = res.headers.filename;
        var len = res.data.size;
        const url = window.URL.createObjectURL(new Blob([res.data])); //创建指向Blob对象的Url
        const link = document.createElement("a"); //创建a标签
        link.style.display = "none"; //设置a标签的样式
        link.href = url; //设置a标签链接地址
        link.setAttribute("download", decodeURIComponent(filename)); //此处fileName也可以从后端返回的响应头里拿到
        document.body.appendChild(link); //把新建的a标签追加到body
        link.click(); //触发单机事件
        URL.revokeObjectURL(link.href); // 释放URL对象
        document.body.removeChild(link); //移除a标签
      } else {
        this.$message.error("系统异常,文件下载失败！");
      }
    })
    .catch(err => {
      this.$message.error(err.message);
    });
}


