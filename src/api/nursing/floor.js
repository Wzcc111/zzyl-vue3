import request from '@/utils/request'

// 查询可入住的楼层、房间和床位树
export function getFloorBed(status) {
  return request({
    url: '/elder/floor/getRoomAndBedByBedStatus/' + status,
    method: 'get'
  })
}

// 查询房间及其楼层、价格信息
export function getRootById(id) {
  return request({
    url: '/elder/room/one/' + id,
    method: 'get'
  })
}
