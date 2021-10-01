import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  export default class Login extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className="col-md-12">
                <Form onSubmit={} ref={r => this.form = c}/>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={TransitionEvent.onChangeEmail}
                    validations={[required]}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={TransitionEvent.onChangePassword}
                    validations={[required]}
                    />
                </div>
            </div>

        );
  }
}