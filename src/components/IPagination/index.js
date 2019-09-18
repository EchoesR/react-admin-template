import React, { Component } from 'react'
import { Pagination } from 'antd'
import './index.less'

function showTotal(total) {
  return (
    <span className="pagination-meta">共 {total} 条数据</span>
  )
}

export default class IPagination extends Component {
  render() {
    let { total, currentPage, pageSize, onPageChange, ...other } = this.props
    return (
      total > 0 ? <div className="pagination">
        <Pagination
          {...other}
          showTotal={showTotal}
          showSizeChanger
          onChange={onPageChange}
          onShowSizeChange={onPageChange}
          current={currentPage}
          pageSize={pageSize}
          total={total}/>
      </div> : null
    )
  }
}
