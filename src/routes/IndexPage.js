import React from "react";
import { connect } from "dva";
import SonPage from "./SonPage";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vals: []
    };
  }
  onChange = vals => {
    this.setState({
      vals
    });
  };
  render() {
    const { vals } = this.state;
    return (
      <div>
        <div>
          {Object.keys(vals).map(m => {
            const val = vals[m];
            return (
              val &&
              val.map(m1 => {
                return (
                  <span key={m1} style={{ color: "red", marginRight: 10 }}>
                    {m1}
                  </span>
                );
              })
            );
          })}
        </div>
        <SonPage onChange={this.onChange} />
      </div>
    );
  }
}

export default connect()(Page);
