import React, { Component } from "react";
import axios from "axios";
import { Accordion, Badge, Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export default class showNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [],
    };
  }

  componentDidMount() {
    this.retrieveNotes();
  }

  retrieveNotes() {
    axios.get("/notesDetails").then((res) => {
      if (res.data.success) {
        this.setState({
          details: res.data.existingDetails,
        });

        console.log(this.state.details);
      }
    });
  }
  render() {
    return (
      <>
        {this.state.details.map((details) => (
          <Accordion>
            <Card style={{ margin: 10 }} key={details._id}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  // onClick={() => ModelShow(note)}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                    {details.title}
                  </Accordion.Toggle>
                </span>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>
                    <span className="badge bg-success">
                      <Badge variant="success">
                        Category - {details.category}
                      </Badge>
                    </span>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <ReactMarkdown>{details.content}</ReactMarkdown>
                    <footer className="blockquote-footer">
                      Created on{" "}
                      <cite title="Source Title">
                        {details.createdAt.substring(0, 10)}
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </>
    );
  }
}
