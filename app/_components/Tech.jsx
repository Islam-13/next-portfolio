import Image from "next/image";

const logos = [
  { src: "/images/tech/nestjs-logo.svg", alt: "Nest logo" },
  { src: "/images/tech/mongodb-logo.svg", alt: "MongoDB logo" },
  { src: "/images/tech/nodejs-logo.svg", alt: "Node logo" },
  { src: "/images/tech/nextjs-logo.svg", alt: "Next logo" },
  { src: "/images/tech/reactjs-logo.svg", alt: "React logo" },
  { src: "/images/tech/jQuery-logo.svg", alt: "jQuery logo" },
  { src: "/images/tech/javaScript-logo.svg", alt: "javaScript logo" },
  { src: "/images/tech/bootstrap-logo.svg", alt: "Bootstrap logo" },
  { src: "/images/tech/tailwind-logo.svg", alt: "Tailwind logo" },
  { src: "/images/tech/css-logo.svg", alt: "Css logo" },
  { src: "/images/tech/html-logo.svg", alt: "Html logo" },
  { src: "/images/tech/typeScript-logo.svg", alt: "Typescript logo" },
];

function Tech() {
  return (
    <section className="py-20" id="tech">
      <div className="wrapper">
        <h3 className="heading">Tech Stack</h3>

        <div className="marquee" style={{ "--numItems": `${logos.length}` }}>
          <div className="marquee-track">
            {logos.map((logo, i) => (
              <div
                key={logo.alt}
                style={{ "--position": `${i + 1}` }}
                className="marquee-item"
              >
                <Image fill src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;
