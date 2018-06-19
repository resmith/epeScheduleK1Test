import React, {Component} from 'react';
import serializeForm from 'form-serialize'
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import {getInputFields} from '../modules/constants';
import RenderField from './RenderField.jsx';

class ScheduleK1s3 extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, {hash: true})
    if (this.props.onCreateContact)
      this.props.onCreateContact(values)
  }

  render() {
    const inputFields = getInputFields();

    return (
      <div className='create-scheduleK1-S3-form'>
        <form onSubmit={this.handleSubmit} >
          <Grid fluid>
            <Paper zDepth={2}>
              <Row>
                <Col xsOffset={1} xs={12} md={5}>
                  <h2>Schedule K1</h2>
                  <h3>(Form 1065)</h3>
                  {inputFields.filter(inputField => inputField.part === '3').map(inputField => (<RenderField key={inputField.name} inputField={inputField}/>))}
                  <FlatButton label="Prev Part" />
                  <FlatButton label="Next Part" primary={true} href="/step3"/>
                  <br/>
                </Col>
                <Col xs={12} md={6}>
                  <Row>
                    <Col xs={12} md={9}>
                      <h2>Partners Share of Income, Deductions, Credits, etc.</h2>
                      <h3>Part II: Information About the Partner</h3>
                    </Col>
                    <Col xs={12} md={3}>
                      <span className="Yrfirst2">20</span>
                      <span className="Yrlast2">16</span>
                    </Col>
                  </Row>

                  {inputFields.filter(inputField => inputField.part === '2').map(inputField => (<RenderField key={inputField.name} inputField={inputField}/>))}
                </Col>
              </Row>
              <Row>
                <Col xsOffset={9}>
                  <RaisedButton label="Cancel" secondary={true}  />
                  <RaisedButton label="Submit" primary={true}  />
                  <br/><br/>
                </Col>
              </Row>
            </Paper>

            </Grid>
          </form>
        </div>)
  }
}

export default ScheduleK1s3;
