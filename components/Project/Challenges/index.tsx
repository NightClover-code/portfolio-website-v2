import { v4 } from 'uuid';

const Challenges: React.FC = () => {
  const challenges = [
    "View the optimal layout for each page depending on the device's screen size",
    'Providing all the content from GraphCMS (images, titles, descriptions, etc.)',
    'Reading the detailed blog when clicking on it',
    'Implementing a responsive testimonials slider',
    'Ability to comment using disqus provider',
    'Beautiful scroll, javascript & css animations',
  ];

  return (
    <section className="challenges__section mt-16 max-w-[726px]">
      <h2 className="font-bold">The Challenge</h2>

      <p className="mt-2">
        I wanted to build a <span>JAMStack</span> website using some modern
        technologies for the blog content. So I went with <span>GraphCMS</span>{' '}
        to fetch content, and I built some reusable components along the way.
      </p>

      <p className="mt-3 font-bold">Here were some challenges: </p>

      <div className="ml-10 mt-4">
        {challenges.map(el => (
          <li key={v4()} className="mb-2">
            {el}
          </li>
        ))}
      </div>
    </section>
  );
};

export default Challenges;
