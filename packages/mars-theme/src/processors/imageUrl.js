
const imageUrl = {
  // We can add a name to identify it later.
  name: "imageUrl",

  // We can add a priority so it executes before or after other processors.
  priority: 8,

  // Only process the node it if it's an image.
  test: ({ node }) => node.component === 'img',
  ignore: true,
  processor: ({ node }) => {
   
    const myContent = node.content.replace(/\[GREEN\]/g, '<span>').replace(/\[\/GREEN\]/g, '</span>');
    
    if (process.env.NODE_ENV === 'production') {
      node.props.src = node.props.src.replace(/admin.sirinsoftware.com/g, "frontity.sirinsoftware.com");
      node.props.srcSet = node.props.srcSet.replace(/admin.sirinsoftware.com/g, "frontity.sirinsoftware.com");
    }

    node.content = (Parser(myContent));
    
    return node;
  }
};

export default imageUrl;