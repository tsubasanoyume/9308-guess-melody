function setTemplateToNode(template) {
  const nodeToSet = document.createElement(`div`);
  nodeToSet.innerHTML = template;

  return nodeToSet.querySelector(`section.main`);
}

export default setTemplateToNode;

