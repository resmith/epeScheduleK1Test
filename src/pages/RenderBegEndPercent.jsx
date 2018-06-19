import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';

class RenderBegEndPercent extends PureComponent {

  render() {
    return (
        <div>
          <Row>
            <Col xs={12} md={2} className="numPrompt">
              {this.props.inputField.prompt}
            </Col>
            <Col xs={12} md={4} className="numInput">
              <TextField
                name={`${this.props.inputField.name}_Beg`}
              />
            </Col>
            <Col xs={12} md={4} className="numInput">
              <TextField
                name={`${this.props.inputField.name}_End`}
              />
            </Col>
          </Row>
        </div>
      )
  }
}

export default RenderBegEndPercent;
