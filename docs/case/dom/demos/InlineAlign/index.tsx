import React, { useRef, useState } from "react";
import { Button, Form, Select, Space } from "antd";

type AlignType = 'start' | 'center' | 'end' | 'nearest'

const InlineAlign: React.FC = () => {
  const [align, setAlign] = useState<AlignType>('start')
  const options: { label: AlignType, value: AlignType }[] = [
    { label: 'start', value: 'start' },
    { label: 'center', value: 'center' },
    { label: 'end', value: 'end' },
    { label: 'nearest', value: 'nearest' },
  ]

  const handleChange = (value: AlignType)=> {
    setAlign(value)
  }

  const firstCatRef = useRef<HTMLImageElement>(null);
  const secondCatRef = useRef<HTMLImageElement>(null);
  const thirdCatRef = useRef<HTMLImageElement>(null);

  function handleScrollToFirstCat() {
    firstCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      inline: align
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      inline: align
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      inline: align
    });
  }

  return (
    <div>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 22 }}
      >
        <Form.Item
          label="对齐方式"
          name="align"
          initialValue={align}
        >
          <Select
            style={{ width: '100%' }}
            options={options}
            onChange={handleChange}
            placeholder="请选择对齐方式"
          />
        </Form.Item>
      </Form>
      <Space>
        <Button type={'primary'} onClick={handleScrollToFirstCat}>第一张图</Button>
        <Button type={'primary'} onClick={handleScrollToSecondCat}>第二张图</Button>
        <Button type={'primary'} onClick={handleScrollToThirdCat}>第三张图</Button>
      </Space>
      <div style={{ overflow: 'auto', display: 'flex', gap: '10px', marginTop: '8px' }}>
        <img
          src="https://placecats.com/neo/1000/400"
          alt="Neo"
          ref={firstCatRef}
        />
        <img
          src="https://placecats.com/millie/1000/400"
          alt="Millie"
          ref={secondCatRef}
        />
        <img
          src="https://placecats.com/bella/1000/400"
          alt="Bella"
          ref={thirdCatRef}
        />
      </div>
    </div>
  )
}

export default InlineAlign;
