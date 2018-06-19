import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class RenderRButtonField extends Component {

  render() {
    const styles = {
      block: {
        marginTop: '2em',
        marginBottom: '2em',
      },
      radioButton: {
        marginBottom: 14
      }
    };

    return (
          <Row>
            <Col xs={12} md={12} className="rBtnPrompt">
              <RadioButtonGroup
                name={this.props.inputField.name}
                defaultSelected="not_light"
                style={styles.block}
              >
                {this.props.inputField.prompt.map(rBtn =>
                  <RadioButton
                    key={rBtn}
                    value={rBtn}
                    label={rBtn}
                    style={styles.radioButton}
                  />
                )}
              </RadioButtonGroup>

            </Col>
          </Row>
      )
  }
}

export default RenderRButtonField;
