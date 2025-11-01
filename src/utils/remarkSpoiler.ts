import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';
import type { Plugin } from 'unified';

interface DirectiveNode {
  type: 'containerDirective' | 'leafDirective' | 'textDirective';
  name: string;
  attributes?: Record<string, string>;
  children?: any[];
  data?: {
    hName?: string;
    hProperties?: Record<string, any>;
  };
}

/**
 * Remark plugin to transform :::spoiler directives into <details> elements
 *
 * Usage in MDX:
 * :::spoiler[Title here]
 * Content goes here
 * :::
 */
export const remarkSpoiler: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, (node: DirectiveNode | any) => {
      if (
        node.type === 'containerDirective' &&
        node.name === 'spoiler'
      ) {
        const data = node.data || (node.data = {});
        const attributes = node.attributes || {};

        // Get title from label (text in brackets) or fallback
        const title = (node.children?.[0]?.children?.[0]?.value) || attributes.title || 'Click to expand';

        // Remove the label from children if it exists
        if (node.children?.[0]?.type === 'paragraph' && node.children[0].children?.[0]?.type === 'text') {
          // Keep content after the label
          node.children = node.children.slice(1);
        }

        // Transform to details element
        data.hName = 'details';
        data.hProperties = {
          className: attributes.class || 'my-4',
        };

        // Add summary as first child
        node.children.unshift({
          type: 'paragraph',
          data: {
            hName: 'summary',
            hProperties: {
              className: 'cursor-pointer text-cyan-500 hover:text-cyan-400',
            },
          },
          children: [{ type: 'text', value: title }],
        });
      }
    });
  };
};
