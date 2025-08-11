import Image from "next/image";
import { logos } from "../../constants/constants";

const settings = {
  "--numItems": logos.length,
  "--width": "130px",
  "--height": "50px",
  "--speed": "20s",
  "--gap": "20px",
  "--single-slide-speed": "calc(var(--speed) / var(--numItems))",
  "--track-width": "calc((var(--width) + var(--gap)) * (var(--numItems) - 1))",
};

function Tech() {
  return (
    <section className="py-20" id="tech">
      <div className="wrapper">
        <h3 className="heading">Tech Stack</h3>

        <div
          style={{ ...settings }}
          className={`max-w-[90%] m-auto overflow-hidden py-7 [mask-image:linear-gradient(to_right,transparent,#fff_20%,#fff_80%,transparent)]`}
        >
          <div className="w-max grid [container-type:inline-size] grid-cols-[var(--track-width)_[track]_0px_[resting]]">
            {logos.map((logo, i) => (
              <div
                key={logo.alt}
                style={{ "--position": `${i + 1}` }}
                className="marquee-item relative w-[var(--width)] h-[var(--height)] [grid-area:resting]"
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
