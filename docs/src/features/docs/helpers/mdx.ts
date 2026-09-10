import { existsSync, globSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';

import { remarkPropsTable, remarkStyle, remarkTable } from './remark';

import type { Frontmatter } from '@/features/docs/types';

const ROOT_PATH = process.cwd();
const DATA_PATH = join(ROOT_PATH, 'data');

const makeSlug = (filePath: string) => {
  const relativePath = relative(DATA_PATH, filePath).replace(/\\/g, '/');

  return {
    slug: relativePath
      .replace(/\.mdx|\.md$/, '')
      .replace(/\/index$/, '')
      .split('/'),
    originSlug: relativePath.replace(/\.mdx|\.md$/, '').split('/'),
  };
};

const getFilePaths = (slug: Array<string>) => [
  join(DATA_PATH, `${slug.join('/')}.mdx`),
  join(DATA_PATH, `${slug.join('/')}.md`),
  join(DATA_PATH, `${slug.join('/')}/index.md`),
  join(DATA_PATH, `${slug.join('/')}/index.mdx`),
];

export const getFrontmatterBySlug = async (slug: Array<string>) => {
  const filePaths = getFilePaths(slug);

  const filePath = filePaths.find((path) => existsSync(path));

  if (!filePath) {
    throw new Error(`File not found for slug: ${slug.join('/')}`);
  }

  const { data } = matter(readFileSync(filePath, 'utf8'));

  return {
    ...data,
    ...makeSlug(filePath),
  } as Frontmatter;
};

export const getAllFrontmatter = async () => {
  const paths = globSync(`${DATA_PATH}/**/*.{mdx,md}`);

  return paths.map((filePath) => {
    const source = readFileSync(join(filePath), 'utf8');
    const { data } = matter(source);

    return {
      ...(data as Frontmatter),
      ...makeSlug(filePath),
    } as Frontmatter;
  });
};

/**
 * https://github.com/mdx-js/mdx/issues/2574
 */
const preprocessDemoCode = (source: string): string => {
  return source.replace(
    /<Demo\s+code=\{`([^`]*)`\}/g,
    (match, codeContent: string) => {
      const lines = codeContent.split('\n');
      const processedLines = lines.map((line) => {
        // 以꾩쓽 ?쒖옉 怨듬갚??2媛??댁긽?대㈃ 2媛?異붽?
        const spaceMatch = line.match(/^( {2,})/);
        if (spaceMatch) {
          return '  ' + line;
        }
        return line;
      });
      return `<Demo code={\`${processedLines.join('\n')}\`}`;
    },
  );
};

/**
 * ?뚯씠釉?? ?댁쓽 ?쒕꽕由?????쒗쁽???댁뒪耳?댄봽 泥섎━
 */
const preprocessGenericTypes = (source: string): string => {
  return source.replace(/(\|[^|\n]*?)(<|>)([^|\n]*?)(?=\|)/g, (match) => {
    return match.replace(/</g, '\\<').replace(/>/g, '\\>');
  });
};

export const getSourceBySlug = async (slug: Array<string>) => {
  const filePaths = getFilePaths(slug);

  const filePath = filePaths.find((path) => existsSync(path));

  if (!filePath) {
    throw new Error(`File not found for slug: ${slug.join('/')}`);
  }

  const source = preprocessDemoCode(
    preprocessGenericTypes(readFileSync(filePath, 'utf8')),
  );

  return serialize<unknown, Frontmatter>(source, {
    parseFrontmatter: true,
    blockJS: false,
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
      remarkPlugins: [remarkGfm, remarkStyle, remarkTable, remarkPropsTable],
    },
  });
};
