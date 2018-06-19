import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';

class RenderTextField extends PureComponent {

  render() {
    return (
        <div>
          <Row className="textcol">
            {this.props.inputField.colIndicator &&
              <Col xs={0} md={1} >
                <div className="textcolIndicator">
                  {this.props.inputField.colIndicator ? this.props.inputField.colIndicator : ''}
                </div>
              </Col>
            }
            <Col xs={0} md={11} className="textPrompt">
              <TextField
                hintText={this.props.inputField.placeholder ? this.props.inputField.placeholder : ''}
                floatingLabelText={this.props.inputField.prompt}
                floatingLabelFixed={true}
                fullWidth={true}
                multiLine={this.props.inputField.rows ? true : false}
                rows={this.props.inputField.rows ? this.props.inputField.rows : 1}
              />
            </Col>
          </Row>
        </div>
      )
  }
}

export default RenderTextField;
