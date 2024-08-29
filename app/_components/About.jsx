function About() {
  return (
    <section
      id="about"
      className={`py-20 relative after:content-[""] after:absolute after:inset-0 z-[-1] after:z-[-2] after:from-red-400 after:to-blue-400 after:-skew-y-3 after:bg-gradient-to-r`}
    >
      <div className="wrapper">
        <h3 className="heading">About</h3>
        <p className="mb-3">
          I am a passionate <strong>Junior Software Engineer</strong> with a
          strong foundation in web development technologies. My expertise lies
          in crafting user-friendly and interactive interfaces using
          <strong>React JS</strong>, while leveraging my knowledge of vanilla
          <strong>JavaScript</strong> for core functionalities. Additionally, I
          am proficient in styling frameworks like
          <strong>Bootstrap and Tailwind CSS</strong> to ensure consistent and
          <strong>responsive designs</strong> across diverse platforms.
        </p>

        <p>
          I am a quick learner and a team player, always eager to learn from
          experienced developers and contribute to collaborative projects. I am
          constantly striving to expand my knowledge and stay updated with the
          latest advancements in the web development landscape.
        </p>
      </div>
    </section>
  );
}

export default About;
