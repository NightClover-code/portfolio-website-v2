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
    <div>
      <h2>The Challenge</h2>

      <p>
        I wanted to build a <span>JAMStack</span> website using some modern
        technologies for the blog content. So I went with <span>GraphCMS</span>{' '}
        to fetch content, and I built some reusable components along the way.
      </p>

      <p>Here were some challenges: </p>

      <div>
        {challenges.map(el => (
          <li key={v4()}>{el}</li>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
