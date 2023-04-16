const getMetadataName = (metadata) => {
  if (metadata && metadata.name) {
    return metadata.name;
  }
  return "";
};

export default getMetadataName;
