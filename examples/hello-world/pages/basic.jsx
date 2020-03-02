import React from "react";

class Index extends React.Component {
  // getInitialProps can return promise
  static async getInitialProps() {
    // return ({
    //     time: new Date().toISOString()
    // });

    // Browser will be delay 3s
    const promise = new Promise((resolve, reject) => {
      setInterval(() => {
        resolve({
          time: new Date().toISOString()
        });
      }, 3000);
    });
    return promise;
  }

  constructor(props) {
    super(props);
    this.state = {
      //time: new Date().toISOString()
      time: props.time
    };
  }

  tick() {
    this.setState(() => {
      return {
        time: new Date().toISOString()
      };
    });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <p>{this.state.time}</p>;
  }
}

export default Index;
