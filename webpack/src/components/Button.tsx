/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-06 20:46:40
 * @LastEditTime: 2021-11-06 20:55:15
 * @FilePath: \webpack\src\components\Button.tsx
 * @Description: Button组件
 */
import React, { ReactElement } from 'react';

export default (props: any): ReactElement => {
    const { children } = props;

    return <button>{children}</button>;
};
