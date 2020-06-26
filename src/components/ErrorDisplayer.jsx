import React from "react";

export default function ErrorDisplayer(props) {
  const msg = props.err
    ? props.err
    : "Ooops we can't find the page you're looking for!";
  return (
    <section>
      <h4>{msg}</h4>
    </section>
  );
}
