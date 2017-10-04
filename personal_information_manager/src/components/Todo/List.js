import React from "react";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const List = ({todoValue}) => {
  const styles = {
    textDecoration: 'line-through'
  };

  const isChecked = () => {
    const checkbox = document.getElementsByTagName('input');
    if (checkbox.type === 'checkbox') {
      return checkbox.checked ? true : false;
    }
    return false;
  };

  const changeStorage = () => {

  };

  return (
    <Grid fluid={true}>
      <Row>
        <Col xs={12} lg={12}>
          <label>
            <input onClick={() => changeStorage()} type="checkbox"/> <span style={isChecked() ? styles : null}>{todoValue}</span>
          </label>
        </Col>
      </Row>
    </Grid>
  );
};

export default List;
