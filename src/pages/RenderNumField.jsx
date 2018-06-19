import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';

class RenderNumField extends PureComponent {

  render() {
    return (
        <div>
          <Row>
            <Col xs={12} md={5} className="numPrompt">
              {this.props.inputField.prompt}
            </Col>
            <Col xs={12} md={7} className="numInput">
              $<TextField
                name={this.props.inputField.name}
              />
            </Col>
          </Row>
        </div>
      )
  }
}

export default RenderNumField;
