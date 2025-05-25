const Story = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        {/* <h5 className="trm-mb-40 trm-title-with-divider"> */}
        {/*   My story <span data-number={1} /> */}
        {/* </h5> */}
        {/* quote */}
        <section>
          <blockquote
            className="trm-scroll-animation text-justify"
            data-scroll=""
            data-scroll-offset={40}
          >
            Hi! I’m a fresh graduate in Informatics Engineering who found passion in building web and mobile apps. I started coding during college, mostly working on personal and academic projects that helped me understand how software works from the inside.

  Over time, I realized I really enjoy working on backend systems — creating APIs, handling data, and making sure everything runs smoothly behind the scenes. Now I’m ready to take the next step: joining a real-world development team, learning even more, and contributing to meaningful products.
            
          </blockquote>
        </section>
        {/* quote end */}
      </div>
    </div>
  );
};
export default Story;
