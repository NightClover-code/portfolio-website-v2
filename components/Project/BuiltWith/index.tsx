import { v4 } from 'uuid';

const BuiltWith = () => {
  const tech = [
    'Apollo-client & GraphQL',
    'GraphCMS - Headless CMS',
    'React - JS library',
    'Next.js - React framework',
    'Typescript',
    'AOS - animation library',
  ];

  return (
    <section className="built__with__section mt-12">
      <h2 className="font-bold">Built With</h2>

      <div className="ml-10 mt-2">
        {tech.map(el => (
          <li key={v4()} className="mb-2">
            {el}
          </li>
        ))}
      </div>
    </section>
  );
};

export default BuiltWith;
