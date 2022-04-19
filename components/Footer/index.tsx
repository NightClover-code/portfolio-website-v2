const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-between">
        <div>
          <h1>Let’s start working on your project</h1>
          <p>I am currently available for work.</p>
          <p>
            Feel free to reach out if you&apos;re looking for a web designer or
            developer, or simply want to connect.
          </p>
        </div>

        <div className="rounded-full flex w-40 h-40 flex-col items-center justify-center border-dotted border-2 border-black">
          <h4 className="text-[14px] uppercase tracking-[3px] font-medium">
            Project
          </h4>
          <h2 className="max-w-[85px] leading-[35px]">Contact Achraf</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
