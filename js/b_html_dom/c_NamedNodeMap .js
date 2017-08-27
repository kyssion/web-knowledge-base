html属性对象    ---由 attributes属性产生
//---返回的属性节点树
 	 
namednodemap.getNamedItem(string);   	从节点列表中返回的指定attr节点。
namednodemap.item(index);	返回节点列表中处于指定索引号的attr节点。
nodemap.length	返回节点列表的attr节点数目。
namednodemap.removeNamedItem(nodename)	删除指定attr节点
namednodemap.setNamedItem(node)	设置指定attr节点(通过名称)//使用节点编程方法
				var typ=document.createAttribute("class");
					typ.nodeValue="democlass";
						btn.attributes.setNamedItem(typ);

attr.name	返回属性名称
attr.value	设置或者返回属性值







