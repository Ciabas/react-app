import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';


export default class Home extends React.Component {
  render () {
    return (
      <div>
        <Grid>
          <Row/>
          <Row>
            <Col xsOffset={4} xs={4} mdOffset={5} md= {1}>
              Hello word!
            </Col>
          </Row>
        </Grid>
      </div>
    );
  };
};
