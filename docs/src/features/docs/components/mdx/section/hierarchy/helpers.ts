export const makeSectionHierarchyCode = (
  components: Array<string>,
  render: string,
) => {
  return `import { ${components.join(', ')} } from '@eduplexmkt/mkt-design-system';

  const Demo = () => {
    return (
      <>
      ${render}
      </>
    );
  };

  export default Demo;`;
};
