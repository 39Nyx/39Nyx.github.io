import React from "react";
import { ProColumns, ProTable } from "@ant-design/pro-components";

interface AlgorithmComplexityProps {
  dataSource: AlgorithmComplexityDesc[]
}

export const AlgorithmComplexity: React.FC<AlgorithmComplexityProps> = ({ dataSource }) => {
  const columns: ProColumns<AlgorithmComplexityDesc>[] = [
    {
      title: '情况',
      dataIndex: 'condition',
      width: 80
    },
    {
      title: '时间复杂度',
      dataIndex: 'timeComplexity',
      width: 100
    },
    {
      title: '空间复杂度',
      dataIndex: 'spaceComplexity',
      width: 100
    },
    {
      title: '说明',
      dataIndex: 'explain',
      width: 200
    }
  ]
  return (
    <ProTable<AlgorithmComplexityDesc>
      scroll={{ x: 500 }}
      columns={ columns }
      rowKey={ "condition" }
      search={ false }
      dataSource={dataSource}
      pagination={false}
      options={false}
      cardProps={{
        bodyStyle: {
          paddingInline: 0
        }
      }}
    />
  )
}
