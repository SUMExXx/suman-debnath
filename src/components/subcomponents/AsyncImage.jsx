// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

export default class LazyImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            error: false
        };
    }

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        src: PropTypes.string.isRequired,
        unloadedSrc: PropTypes.string,
        alt: PropTypes.string
    };

    static defaultProps = {
        unloadedSrc: "https://via.placeholder.com/150",
        alt: ""
    };

  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      this.setState({
        loaded: true
      });
    };
    img.onerror = () => {
      this.setState({
        error: true
      });
    };
    img.src = this.props.src;
  }

  render() {
    if (this.state.error) {
      return <img
        className={this.props.className}
        style={this.props.style}
        src={this.props.unloadedSrc}
        alt={this.props.alt} />
    } else if (!this.state.loaded) {
      return <img
        className={this.props.className}
        style={this.props.style}
        src={this.props.unloadedSrc}
        alt={this.props.alt} />
    }
    return <img
      className={this.props.className}
      style={this.props.style}
      src={this.props.src}
      alt={this.props.alt} />
  }
}

