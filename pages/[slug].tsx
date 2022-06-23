import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Project from '../components/Project';
import SEO from '../components/SEO';
import { projectItemsQuery, projectQuery } from '../graphql';
import { ProjectItemInterface } from '../interfaces';
import { client } from '../lib';

import { seoConfigHome } from '../utils';

interface ProjectPageProps {
  project: ProjectItemInterface;
}

const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  return (
    <>
      <SEO {...seoConfigHome} />
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

  console.log(data.projectItems);

  const paths = data.projectItems.map((project: ProjectItemInterface) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ProjectPage;
