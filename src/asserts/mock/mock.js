import Mock from 'mockjs'
const bullet = {
  content: '@cword(3, 20)',
  'runTime|1-360': 240,
  'speed |1-5': 5,
  color: '@rgba()',
}

var bulletData = []
for (let i = 0; i < 200; i++) {
  bulletData.push(Mock.mock(bullet))
}

export { bulletData }

