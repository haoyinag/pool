/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-06 16:53:54
 * @LastEditTime: 2021-11-06 18:21:51
 * @FilePath: \micro\src\index.js
 * @Description: 微应用处理逻辑
 */

// 获取loaditon的protocol和host
const __WindowLPH = () => window.location.protocol + '//' + window.location.host // 获取地址：协议+域名/IP

// 处理script-item、style-item
const __handleSSitem = async (item, entryPath, [key, key2]) => {
  if (item && item[key] && item[key2]) {
    const url = __WindowLPH()
    return fetch(`${entryPath}/${item[key2]}`.replace(url, ''))
      .then(res => res?.text())
      .catch(err => console.log('标签请求出错：', err))
  } else {
    return Promise.resolve(item.textContent)
  }
}

const Apps = [] // 应用list

// 注册微应用
export const registryApp = (entry, activeRoute) => {
  Apps.push({ entry, activeRoute })
}

// 加载微应用
export const loadApp = async () => {
  const shoulfMountApp = Apps.filter(shouldBeActive)
  const App = shoulfMountApp.pop() // 删除最后一个元素

  // 异步请求app
  fetch(App.entry)
    .then(res => {
      // 读取到应用，获取text()返回的DOM节点
      return res?.text()
    })
    .then(async text => {
      // 创建一个div，作为获取到的微应用的节点的容器
      const dom = document.createElement('div')
      dom.innerHTML = text // 把获取到的节点注入容器

      const entryPath = App.entry // 入口地址
      const subApp = document.getElementById('subApp-content') // 基座应用的微应用挂载节点
      subApp.appendChild(dom) // 把微应用容器插入基座容器中
      handleScripts(entryPath, subApp, dom) // 处理script标签
      handleStyles(entryPath, subApp, dom) // 处理样式文件
    })
    .catch(err => {
      console.log('微应用加载错误：', err)
    })
}

// 当前应用是否active状态
function shouldBeActive (app) {
  return app.activeRoute(window.location)
}

// 启动
export function start () {
  loadApp()
}

// 处理script标签--异步处理
export async function handleScripts (entryPath, subApp, dom) {
  const scripts = dom.querySelectorAll('script')
  const paromiseArr =
    scripts &&
    Array.from(scripts).map(item => {
      if (item.src) {
        const url = window.location.protocol + '//' + window.location.host
        return fetch(`${entryPath}/${item.src}`.replace(url, '')).then(
          function (response) {
            return response.text()
          }
        )
      } else {
        return Promise.resolve(item.textContent)
      }
    })
  const res = await Promise.all(paromiseArr)
  if (res && res.length > 0) {
    res.forEach(item => {
      const script = document.createElement('script')
      script.innerText = item
      subApp.appendChild(script)
    })
  }
}

// 处理style标签--异步处理
export async function handleStyles (entryPath, subApp, dom) {
  const arr = []
  const styles = dom.querySelectorAll('style')
  const links = Array.from(dom.querySelectorAll('link')).filter(
    item => item.rel === 'stylesheet'
  )
  const realArr = arr.concat(styles, links)
  const paromiseArr =
    arr &&
    Array.from(realArr).map(item => {
      if (item.rel) {
        const url = window.location.protocol + '//' + window.location.host
        return fetch(`${entryPath}/${item.href}`.replace(url, '')).then(
          function (response) {
            return response.text()
          }
        )
      } else {
        return Promise.resolve(item.textContent)
      }
    })
  const res = await Promise.all(paromiseArr)
  if (res && res.length > 0) {
    res.forEach(item => {
      const style = document.createElement('style')
      style.innerHTML = item
      subApp.appendChild(style)
    })
  }
}
