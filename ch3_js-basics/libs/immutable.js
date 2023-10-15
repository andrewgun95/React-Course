export function addObjectToArray(array, object) {
  return [...array, object];
}

export function deleteObjectFromArray(array, id) {
  return array.filter((e) => e.id !== id);
}

export function updateObjectInArray(array, id, props) {
  return array.map((e) => (e.id === id ? { ...e, ...props } : e));
}
