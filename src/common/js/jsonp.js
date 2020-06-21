import originJsonp from 'jsonp'

export default function jsonp (url, opts, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(opts)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, opts) => {
      if (!err) {
        resolve(opts)
      } else {
        reject(err)
      }
    })
  })
}

export function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
