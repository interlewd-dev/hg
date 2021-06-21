import React, { useState } from 'react';
import styles from './MenuWidget.module.css';

const MenuWidget = ({
  title,
  children,
}) => (
  <div className={styles.menu}>
    {title}
    <div className={styles.menuPane}>
      {children}
    </div>
  </div>
);

export default MenuWidget;

