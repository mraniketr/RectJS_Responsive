import React from "react";
import { Carousel, Card, Button, Image } from "react-bootstrap";
export default function Slider(props) {
  const MobStyleDiv = { display: "flex", flexDirection: "column" };
  const MobImgDiv = { maxWidth: "100vw" };
  const PCStyleDiv = { display: "flex", flexDirection: "row" };
  const PCImgDiv = { maxWidth: "60vw", minHeight: "10rem" };
  //   const PC

  return (
    <div style={props.device ? PCStyleDiv : MobStyleDiv}>
      <Image
        src="https://picsum.photos/1920/1080"
        fluid
        style={props.device ? PCImgDiv : MobImgDiv}
      />
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
