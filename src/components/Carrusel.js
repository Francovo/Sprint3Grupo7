import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import "./Cards.scss";

class Carrusel extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Spiderman No Way Home",
        imagen:
          "https://www.cinemascomics.com/wp-content/uploads/2021/08/Spiderman-far-from-home-spiderman-no-way-home-e1629790850966.jpg",
        trailer: "https://www.youtube.com/embed/SkmRT3M4Vx4",
      },
      {
        id: 2,
        title: "Encanto",
        imagen:
          "https://www.cinemascomics.com/wp-content/uploads/2021/08/Spiderman-far-from-home-spiderman-no-way-home-e1629790850966.jpg",
        trailer: "https://www.youtube.com/embed/E4dCY_DvT-4",
      },
      {
        id: 3,
        title: "Matrix Resurrection",
        imagen:
          "https://www.cinemascomics.com/wp-content/uploads/2021/08/Spiderman-far-from-home-spiderman-no-way-home-e1629790850966.jpg",
        trailer: "https://www.youtube.com/embed/qjnvX44LoQw",
      },
      {
        id: 4,
        title: "Venom 2",
        imagen:
          "https://www.cinemascomics.com/wp-content/uploads/2021/08/Spiderman-far-from-home-spiderman-no-way-home-e1629790850966.jpg",
        trailer: "https://www.youtube.com/embed/wfjlNisONJY",
      },
      {
        id: 5,
        title: "Kimetsu No Yaiba El Tren Infinito",
        imagen:
          "https://www.cinemascomics.com/wp-content/uploads/2021/08/Spiderman-far-from-home-spiderman-no-way-home-e1629790850966.jpg",
        trailer: "https://www.youtube.com/embed/-AwLMRgcEoA",
      },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <Carousel className="Carrusel">
        {items.map((item) => (
          <div key={item.id} className="Container-Carrusel">
            <div>
              <iframe
                width="1510"
                height="400"
                src={item.trailer}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default Carrusel;
