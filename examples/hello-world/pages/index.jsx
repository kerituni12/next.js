import React from "react";
import axios from "axios";

const Index = ({ speakers }) => {
  return (
    <ul>
      {speakers.map(speaker => (
        <li key={speaker.id}>
          {speaker.firstName} {speaker.lastName}
        </li>
      ))}
    </ul>
  );
};

Index.getInitialProps = async () => {
  // get data from json-server
  const results = axios
    .get("https://gk624-3001.sse.codesandbox.io/speakers")
    .then(res => {
      return {
        speakers: res.data
      };
    })
    .catch(err => {
      return {
        hasError: true,
        message: err.message
      };
    });
  return results;
};

export default Index;
