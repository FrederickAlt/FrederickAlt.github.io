import axios from 'axios';
import * as cheerio from 'cheerio';
import type { PrintableMetadata } from '../types/printable';

/**
 * Fetches Open Graph metadata from a URL (same protocol messengers use)
 */
export async function fetchMetadata(url: string): Promise<PrintableMetadata> {
  try {
    console.log(`Fetching metadata from: ${url}`);

    // Use axios which handles large headers better than native fetch
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      },
      timeout: 10000,
      maxRedirects: 5,
    });

    const html = response.data;
    const $ = cheerio.load(html);

    // Extract Open Graph metadata (what messengers use)
    const ogTitle = $('meta[property="og:title"]').attr('content') ||
                    $('meta[name="og:title"]').attr('content') ||
                    $('title').text();

    const ogDescription = $('meta[property="og:description"]').attr('content') ||
                          $('meta[name="og:description"]').attr('content') ||
                          $('meta[name="description"]').attr('content');

    const ogImage = $('meta[property="og:image"]').attr('content') ||
                    $('meta[name="og:image"]').attr('content');

    const title = ogTitle?.trim() || 'Untitled';
    const description = ogDescription?.trim() || 'No description available';
    const image = ogImage?.trim() || '';

    console.log(`✓ Fetched: ${title}`);

    return {
      url,
      title,
      description,
      image,
    };
  } catch (error: any) {
    console.error(`✗ Failed to fetch metadata for ${url}: ${error.message}`);

    // Fallback with URL-based title
    const urlTitle = url.split('/').pop()?.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ') || 'Printable Model';

    return {
      url,
      title: urlTitle,
      description: 'Could not fetch preview. Click to view on Printables.com',
      image: '',
    };
  }
}

/**
 * Fetches metadata for all printable URLs
 */
export async function fetchAllPrintables(urls: readonly string[]): Promise<PrintableMetadata[]> {
  const results = await Promise.all(urls.map(url => fetchMetadata(url)));
  return results;
}
