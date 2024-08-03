// https://docs.astro.build/en/guides/endpoints/#request
// https://docs.astro.build/en/guides/rss/

import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params, request, site }) => {

  const blogPosts = await getCollection("blog")


  return rss({
    // estilos para que las personas vean m ejor mi rss feed, pero como yo no quiero que lo consuman de aca lo comento
    // stylesheet: '/styles/rss.xsl',

    // `<title>` field in output xml
    title: 'Lautaro’s Blog',
    // `<description>` field in output xml
    description: 'Un simple blog sobre mis aventuras con Astro',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: site ?? "",
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blogPosts.map(({ data, slug }) => ({
      title: data.title,
      pubDate: data.date,
      description: data.description,
      link: `/posts/${slug}`,

    })),
    // (optional) inject custom xml
    customData: `<language>es-es</language>`,
  });
}

