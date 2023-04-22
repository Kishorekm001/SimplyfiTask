const graph = {
  Kiev: [
    ["Prague", "Kiev-Prague"],
    ["Berlin", "Berlin-Kiev"],
  ],
  Prague: [
    ["Zurich", "Prague-Zurich"],
    ["Kiev", "Kiev-Prague"],
  ],
  Zurich: [
    ["Amsterdam", "Zurich-Amsterdam"],
    ["Prague", "Prague-Zurich"],
  ],
  Amsterdam: [
    ["Barcelona", "Amsterdam-Barcelona"],
    ["Zurich", "Zurich-Amsterdam"],
  ],
  Barcelona: [
    ["Berlin", "Barcelona-Berlin"],
    ["Amsterdam", "Amsterdam-Barcelona"],
  ],
  Berlin: [
    ["Kiev", "Berlin-Kiev"],
    ["Amsterdam", "Berlin-Amsterdam"],
  ],
};

const visited = new Set();
const route = [];

function traverse(node) {
  visited.add(node);
  route.push(node);
  if (route.length === Object.keys(graph).length) {
    return true;
  }
  for (const [neighbor, ticket] of graph[node]) {
    if (!visited.has(neighbor)) {
      if (traverse(neighbor)) {
        return true;
      }
    }
  }
  visited.delete(node);
  route.pop();
  return false;
}

traverse("Kiev");

console.log(route);
