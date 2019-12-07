import React from 'react';
import { Typography } from 'antd';
import { def } from '@/utils/commonUtils';
import { getValue } from 'gmsoft-tools/lib';

const { Paragraph } = Typography;

export interface Prop {
  data?: any;
  keyName?: string;
  rows?: number;
  expandable?: boolean;
  copyable?: boolean;
  content?: string | null;
  children?: React.ReactNode;
}

function AutoText(props: Prop) {
  const { data, keyName, rows, expandable, copyable, content, children } = props;
  return (
    <Paragraph ellipsis={{ rows, expandable }} copyable={copyable}>
      {content || children || def(getValue(data, keyName))}
    </Paragraph>
  );
}

AutoText.defaultProps = {
  rows: 2,
  expandable: true,
  copyable: false,
};

export { AutoText };
