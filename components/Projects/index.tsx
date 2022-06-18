import { useContext } from 'react';
import { v4 } from 'uuid';
import { TagsContext } from '../../context';
import { portfolio } from '../../utils';
import Content from '../Content';
import Tags from '../Tags';
import PortolioItem from './Item';

const Projects = () => {
  const category = 'Portfolio';

  const config = {
    description: `
      I spend most of time building awesome products, either for myself or
      my clients. Here are some of my greatest projects:
    `,
    category: 'Portfolio',
    withLine: true,
  };

  const tags = ['Frontend', 'Backend', 'FullStack'];

  const { activeTags } = useContext(TagsContext);

  const [activeTag] = activeTags.filter(_tag => _tag.category === category);

  return (
    <section className="projects__section global-mt mb-10">
      <div className="center__content">
        <Content {...config}>
          My latest <span>work</span>
        </Content>

        <Tags category={category} tags={tags} />
      </div>

      <div className="grid grid-cols-1 gap-y-12 mid:mt-8 xs:mt-16 xs:gap-y-14">
        {portfolio.map(_item => {
          return _item.category === activeTag.tag
            ? _item.items.map((__item, i) => (
                <PortolioItem
                  order={i}
                  {...__item}
                  key={v4()}
                  activeTag={activeTag}
                />
              ))
            : '';
        })}
      </div>
    </section>
  );
};

export default Projects;
