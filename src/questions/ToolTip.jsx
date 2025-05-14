import React from "react";

class ToolTip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      showItem: null,
    };
  }

  handleMouseEnter = (label) => {
    this.setState({ showItem: label, mouseOver: true });
  };

  handleMouseLeave = () => {
    this.setState({ showItem: null, mouseOver: false });
  };
  render() {
    const icons = [
      { emoji: "🏠", label: "Home" },
      { emoji: "📧", label: "Email" },
      { emoji: "⚙️", label: "Settings" },
    ];

    return (
      <>
        <div style={style.container}>
          {icons.map((item) => (
            <>
            <div className="item-container">
                {this.state.showItem === item.label ?  <div className="tooltip-label">{item.label}</div> : null}
              
            <div
              className="tooltip-item"
              key={icons.label}
              onMouseEnter={() => this.handleMouseEnter(item.label)}
              onMouseLeave={this.handleMouseLeave}
            >
              {item.emoji}
              
            </div>
            </div>
           
            </>
          ))}
        </div>
      </>
    );
  }
}

export default ToolTip;

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};
