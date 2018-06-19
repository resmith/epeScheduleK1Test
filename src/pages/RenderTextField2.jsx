import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';

class RenderTextField extends PureComponent {

  render() {
    return (
        <div>
          <Row>
            <Col xs={0} md={12} className="textcolIndicator">{this.props.inputField.colIndicator ? this.props.inputField.colIndicator : ''}</Col>
            <Col xs={0} md={10} className="textPrompt">{this.props.inputField.prompt}</Col>
            <input
              type='text'
              name={this.props.inputField.name}
              placeholder={this.props.inputField.placeholder ? this.props.inputField.placeholder : ''}
              
            />
          </Row>
        </div>
      )
    }
}

export default RenderTextField;
