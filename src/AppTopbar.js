import React,{Component} from 'react';
import PropTypes from 'prop-types';

export class AppTopbar extends Component {

  static defaultProps={
    onToggleMenu: null
  }

  static propTypes={
    onToggleMenu: PropTypes.func.isRequired
  }

  Exits=async (object) => {

    document.cookie="_userLog=; max-age=0";
    document.location.reload();

  };

  render() {
    return (
      <div className="layout-topbar clearfix">
        <button className="p-link layout-menu-button" onClick={this.props.onToggleMenu}>
          <span className="pi pi-bars" />
        </button>
        <div className="layout-topbar-icons">

          <button
            className="p-link"
            herf="/"
            onClick={() => {
              this.Exits();
            }}
          >
            <span className="layout-topbar-item-text">User</span>

            <span className="pi pi-fw pi-power-off" />

          </button>
        </div>
      </div>
    );
  }
}