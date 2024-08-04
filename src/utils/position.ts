function isOverlapping(newBox) {
  for (let pos of positions) {
    if (
      newBox.x < pos.x + boxSize + padding &&
      newBox.x + boxSize + padding > pos.x &&
      newBox.y < pos.y + boxSize + padding &&
      newBox.y + boxSize + padding > pos.y
    ) {
      return true;
    }
  }
  return false;
}
