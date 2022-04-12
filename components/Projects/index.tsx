const Projects = () => {
  return (
    <section className="projects__section mt-44">
      <div className="text-center m-auto flex flex-col items-center">
        <h4 className="text-[14px] uppercase tracking-[3px]">Portfolio</h4>
        <h1 className="mt-1">
          My latest <span>work</span>
        </h1>
        <p className="max-w-[400px] m-auto mt-2 text-offBlack">
          I spend most of time building awesome products, either for myself or
          my clients. Here are some of my greatest projects:
        </p>

        <div className="w-[56px] h-[2px] block bg-black mt-7"></div>
      </div>
    </section>
  );
};

export default Projects;
