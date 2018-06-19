import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class RenderBegEndHeading extends PureComponent {

  render() {
    return (
        <div>
          <Row>
            <Col xs={12} md={2}>
            </Col>
            <Col xs={12} md={4} className="begEndHeading">
              {this.props.inputField.prompt[0] ? this.props.inputField.prompt[0]  : ''}
            </Col>
            <Col xs={12} md={4} className="begEndHeading">
              {this.props.inputField.prompt[1] ? this.props.inputField.prompt[1]  : ''}
            </Col>
          </Row>
        </div>
      )
  }
}

export default RenderBegEndHeading;
