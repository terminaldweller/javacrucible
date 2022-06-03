import React, { useState } from "react";
import Editor from "./components/Editor.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.genNewRandId = this.genNewRandId.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.docId = localStorage.getItem("docId");
    if (this.docId === null) {
      this.docId = this.genNewRandId();
      localStorage.setItem("docId", this.docId);
    }
  }

  genNewRandId() {
    return Math.floor(Math.random() * (0x1 << 16));
  }

  handleLoad() {
    fetch(`https://localhost:9080/api/v1/doc/${this.docId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`request failed with status ${response.status}`);
        }
        let res = response.json();
        this.docId = data.Id;
      })
      .then((data) => {
        console.log(data);
        this.docId = data.Id;
      });
  }
  handleDelete() {
    fetch(`https://localhost:9080/api/v1/doc/${this.docId}`);
  }
  handleSave() {
    let obj = {
      Id = this.docId,
      Doc = props.markdownText
    }
    let response = await fetch(`https://localhost:9080/api/v1/doc/${this.docId}`,{
      method: "POST",
      body: JSON.stringify(obj),
      header: {
        "Content-Type": "application/json"
      }
     });

    if (!response.ok){
      throw new Error(`request failed with status code ${response.status}`)
    }
  }

  render() {
    return (
      <div>
        <Editor />
        {/* <a href="https://localhost:9080/api/v1/doc/{this.docId}"> */}
        <img
          className="icon"
          src="load.jpg"
          width="20"
          height="20"
          onClick={this.handleLoad.bind(this)}
        />
        {/* </a> */}
        {/* <a href="https://localhost:9080/api/v1/doc/{this.docId}"> */}
        <img
          className="icon"
          src="trash3.png"
          width="20"
          height="20"
          onClick={this.handleDelete.bind(this)}
        />
        {/* </a> */}
        {/* <a href="https://localhost:9080/api/v1/doc/{this.docId}"> */}
        <img
          className="icon"
          src="save.png"
          width="20"
          height="20"
          onClick={this.handleSave.bind(this)}
        />
        {/* </a> */}
      </div>
    );
  }
}
