import React,{Component} from 'react';
// import classNames from 'classnames';

export class AppProfile extends Component {

  constructor() {
    super();
    this.state={
      expanded: false
    };
  }

  onClick=(event) => {
    this.setState({expanded: !this.state.expanded});
    event.preventDefault();
  }

  render() {
    return (
      <div className="layout-profile">
        <div>
          <img src="/public/assets/layout/images/profile.png" alt="" />
        </div>
        <button className="p-link layout-profile-link" onClick={this.onClick}>
          <span className="username">Nombre del Usuario</span>
        </button>
      </div>
    );
  }
}