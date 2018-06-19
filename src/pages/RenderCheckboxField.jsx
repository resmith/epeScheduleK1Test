import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Checkbox from 'material-ui/Checkbox';

class RenderCheckboxField extends Component {

  render() {
    const styles = {
      block: {
        maxWidth: 250,
      },
      checkbox: {
        marginBottom: 16,
      },
    };

    return (
          <Row>
            <Col xs={12} md={12} className="rBtnPrompt">
              <Checkbox
                label={this.props.inputField.prompt}
                name={this.props.inputField.name}
                labelPosition={this.props.inputField.labelPosition}
                style={styles.checkbox}
              />
            </Col>
          </Row>
      )
  }
}

export default RenderCheckboxField;
