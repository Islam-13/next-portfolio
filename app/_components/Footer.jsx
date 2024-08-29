import Icons from "./Icons";

function Footer() {
  return (
    <footer className="py-12 text-center border-t border-[--main-clr]">
      <div className="wrapper flex flex-col gap-4">
        <p>Find me online :</p>
        <Icons center="justify-center" />
        <p>
          © <span>2024</span> - present Islam Mo&apos;men. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
