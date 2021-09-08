import React from "react";
import { Carousel, Card, Button, Image } from "react-bootstrap";
export default function Slider(props) {
  const MobStyleDiv = { display: "flex", flexDirection: "column" };
  const MobImgDiv = {};
  const PCStyleDiv = {
    display: "flex",
    flexDirection: "row",
    maxHeight: "60vh",
    flex: 2,
  };
  const PCImgDiv = { maxWidth: "50vw", minHeight: "10rem" };
  //   const PC

  return (
    <div style={props.device ? PCStyleDiv : MobStyleDiv}>
      <Image
        src="https://picsum.photos/1920/1080"
        fluid
        style={props.device ? PCImgDiv : MobImgDiv}
      />
      <Card className="text-center" style={{ flex: 1 }}>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>With supporting text</Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
