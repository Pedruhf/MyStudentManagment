import React from "react";
import './styles.css';

import { Card } from 'react-bootstrap';

export default function Header() {
  return (
    <Card>
      <Card.Header>
        <span>MyStudentManagment</span>
      </Card.Header>
    </Card>
  )
}