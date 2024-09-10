import Image from "next/image";
import { RiWhatsappLine } from "react-icons/ri";

function Contact() {
  return (
    <section className="py-20" id="contact">
      <div className="wrapper">
        <h3 className="heading">contact</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="relative flex justify-center items-center w-[calc(40%-2rem)] min-h-[200px]">
            <Image
              fill
              src="/images/send.png"
              alt="send me a message image"
              className="max-w-[200px] aspect-square"
              sizes="(max-width: 1200px) 200px"
            />
          </div>

          <div className="w-full md:w-[calc(50%-2rem)]">
            <h4 className="text-3xl font-medium">Send me a message</h4>
            <p className="mt-6 text-2xl font-light">
              I appreciate direct contact, so you can send me an{" "}
              <strong>
                <a
                  className="link font-medium"
                  href="mailto:islam-hussein@outlook.com"
                >
                  email
                </a>
              </strong>{" "}
              or send me a message directly on{" "}
              <strong>
                <a
                  href="https://wa.me/+201033239019"
                  target="_blank"
                  aria-label="send me a message through whatsapp"
                >
                  <RiWhatsappLine
                    color="#25d366"
                    size={32}
                    style={{ display: "inline-block" }}
                  />
                </a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
