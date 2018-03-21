import ajax from './ajax'
/*
 * 导航
 */
export const reqHome = () => ajax('/msite')
/*
 * 分类
 */
export const reqfenlei = () => ajax('/class')
/*
 *推荐品牌
 */
export const reqbrand = () => ajax('/brand')
/*
*全部品牌
 */
export const reqwhole = () =>ajax('/whole')
