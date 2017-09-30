function setTemplateToNode(template) {
  const nodeToSet = document.createElement(`template`);
  nodeToSet.innerHTML = template;

  return nodeToSet.content;
}

export default setTemplateToNode;

