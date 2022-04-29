import request from '@/utils/request'

export function userAttribute (params) {
  return request({
    url: '/api/userAttribute.json',
    method: 'get',
    params
  })
}
// uuid: "e8746c9bff3c5cb638698b4e6897e6cf"

export function getList (params) {
  return request({
    url: '/api/commodityHotspot.json',
    method: 'get',
    params
  })
}

// categoryUuid: ""
// name: ""
// pageCount: 1
// pageSize: 40

export function getUser (params) {
  return request({
    url: '/api/author.json',
    method: 'get',
    params
  })
}

export function getBanner (params) {
  return request({
    url: '/api/banner.json',
    method: 'get',
    params
  })
}

export function findNewsList (params) {
  return request({
    url: '/api/findNewsList.json',
    method: 'get',
    params
  })
}

export function listTopic (params) {
  return request({
    url: '/api/listTopic.json',
    method: 'get',
    params
  })
}

export function saleRecord (params) {
  return request({
    url: '/api/saleRecord.json',
    method: 'get',
    params
  })
}

export function goodsList (params) {
  return request({
    url: '/api/goodsList.json',
    method: 'get',
    params
  })
}

export function detail (params) {
  return request({
    url: '/api/detail.json',
    method: 'get',
    params
  })
}
