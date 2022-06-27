// importing sitemap & next utils
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ProjectItemInterface } from '../../interfaces';
import { client } from '../../lib';
import { projectItemsQuery } from '../../graphql';

const sitemap = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // An array with your links
    const links: any[] = [];

    const {
      data: { projectItems },
    } = await client.query({ query: projectItemsQuery });

    projectItems.map((_project: ProjectItemInterface) => {
      links.push({
        url: `/${_project.slug}`,
        changefreq: 'daily',
        priority: 0.9,
      });
    });

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then(data => data.toString());

    res.end(xmlString);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};

export default sitemap;
