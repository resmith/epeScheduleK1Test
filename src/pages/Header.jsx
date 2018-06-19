import React, { PureComponent } from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends PureComponent {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={0} md={4} />
          <Col xs={12} md={4}>
            <Stepper activeStep={this.props.step}>
              <Step>
                <StepLabel>Part I</StepLabel>
              </Step>
              <Step>
                <StepLabel>Part II</StepLabel>
              </Step>
              <Step>
                <StepLabel>Part III</StepLabel>
              </Step>
            </Stepper>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Header
