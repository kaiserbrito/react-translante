import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a Language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english", "primary")}
        />
        <i className="flag pt" onClick={() => this.context.onLanguageChange("portuguese", "red")} />
      </div>
    );
  }
}

export default LanguageSelector;
