import { v4 } from 'uuid';
import { portfolio } from '../../utils';
import Content from '../Content';
import Tags from '../Tags';
import PortolioItem from './Item';

const Projects = () => {
  const config = {
    description: `
      I spend most of time building awesome products, either for myself or
      my clients. Here are some of my greatest projects:
    `,
    category: 'Portfolio',
    withLine: true,
  };

  const tags = ['Frontend', 'Backend', 'FullStack', 'UI / UX'];

  return (
    <section className="projects__section global-mt mb-10">
      <div className="center__content">
        <Content {...config}>
          My latest <span>work</span>
        </Content>

        <Tags className="xs:grid xs:grid-cols-2 xs:gap-y-[14px]" tags={tags} />
      </div>

      <div className="grid grid-cols-1 gap-y-12 mid:mt-8 xs:mt-16 xs:gap-y-14">
        {portfolio.map((_item, i) => {
          return <PortolioItem order={i} {..._item} key={v4()} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
