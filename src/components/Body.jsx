
// import React from "react";
import { PropTypes } from "prop-types";
const Card = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              image="HeroTopImagenes/DCComics/Batman/BatmanNo1.png"
              CardTitle="Batman No 1"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Primera edición individual de Batman e histórica primera aparición del Joker y Catwoman, pieza fundamental de la Era Dorada de los cómics."


              Button="Add to Cart"
            />
            <SingleCard
              image="HeroTopImagenes/DCComics/Superman/SupermanNo1(1939).webp"
              CardTitle="Superman #1" 
              CardDescription=" Primera serie en solitario de Superman, creada por Jerry Siegel y Joe Shuster. Un hito en la historia del cómic y una joya para coleccionistas."
              Button="Add to Cart"
            />
            <SingleCard
              image="HeroTopImagenes/DCComics/Superman/Peluches/superman-figure-1.jpg"
              CardTitle="Superman Figura #1"
              CardDescription="Figura de acción detallada de 7 pulgadas con 22 puntos de articulación. Incluye manos intercambiables y una base para exhibición. Perfecta para coleccionistas y fans de Superman1"
              Button="Add to Cart"
            />
            <SingleCard
              image="HeroTopImagenes/Marvel/Hulk/Peluches/RedHulk.avif"
              CardTitle="Red Hulk"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Figura de acción de 9 pulgadas con 16 puntos de articulación y manos intercambiables. Un diseño completamente nuevo y detallado"
              Button="Add to Cart"
            />
            <SingleCard
              image="HeroTopImagenes/Marvel/Spiderman/Amazing FantasyNo15(1962).jpeg"
              CardTitle="Amazing Fantasy #15"
              CardDescription="Primera aparición de Spider-Man, creado por Stan Lee y Steve Ditko. Un cómic histórico y esencial para cualquier colección."
              Button="Add to Cart"
            />
            <SingleCard
              image="HeroTopImagenes/DCComics/Batman/DetectiveComic38.webp"
              CardTitle="DetectiveComic38"
              CardDescription="Primera aparición de Robin (Dick Grayson), el compañero de Batman. Creado por Bob Kane y Jerry Robinson. Un clásico imprescindible para coleccionistas."
              Button="Add to Cart"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      {/*  */}
      <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};


SingleCard.propTypes = {
    image: PropTypes.node.isRequired,
    Button: PropTypes.node.isRequired,
    CardDescription: PropTypes.string.isRequired,
    CardTitle: PropTypes.string.isRequired,
    titleHref: PropTypes.string.isRequired,
    btnHref: PropTypes.string.isRequired,
};