import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Project from '../components/Project';
import SEO from '../components/SEO';
import { projectItemsQuery, projectQuery } from '../graphql';
import { ProjectItemInterface } from '../interfaces';
import { client } from '../lib';

interface ProjectPageProps {
  project: ProjectItemInterface;
}

const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  const seoConfigProject = {
    title: `${project.content.richTitleText} Project | Achraf Elmouhib`,
    description: project.content.description!,
    keywords: `${project.content.richTitleText} project, Web Design, Web Development, Achraf Elmouhib, Design, Development, SEO, Portfolio Website, Frontend, Backend, Fullstack, Portfolio`,
  };

  return (
    <>
      <SEO {...seoConfigProject} />
      <>
        <Project project={project} />
      </>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  const {
    data: { project },
  } = await client.query({
    query: projectQuery,
    variables: {
      slug,
    },
  });

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: projectItemsQuery,
  });

  const paths = data.projectItems.map((project: ProjectItemInterface) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ProjectPage;
