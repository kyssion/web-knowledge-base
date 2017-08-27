var mytable= document.createElement("table");
mytable.rows;---
mytable.cells;----单元格中所有对应的元素
mytable.tBodies;----但会单元格中所有tobody的元素
mytable.tFoot;
mytable.tHead;
mytable.rules="none|groups|rows|cols|all";// 设置显示线的位置
mytable.caption;//返回表格的标题
mytable.frame;//返回表格的外边框
mytable.rows[0].cells[0].cellIndex;//返回单元格在所在元素的位置
mytable.rows[0].cells[0].colSpan//返回和设置跨列数
mytable.rows[0].cells[0].rowSpan;//返回相关行的属性
