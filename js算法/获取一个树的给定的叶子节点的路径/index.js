/**递归遍历菜单数据，获取面包屑路径数组 */
function findBreadCrumb (menus, targetKey) {
  let resultMenu  = []
  for (let item of menus) {
      if (item.url === targetKey) {
          resultMenu.push(item.name)
          break
      } else if (item.url !== targetKey && item.children.length > 0) {
         const res = findBreadCrumb(item.children, targetKey)
         if (res.length > 0) {
          resultMenu.push(item.name);
          resultMenu = resultMenu.concat(res)
         }
      }
  }
  return resultMenu
}