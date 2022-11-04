function printChildren(t) {
  // ???
}

function printChildrenRecursive(t) {
  if (t.children.length === 0) {
    return;
  }
}

const tree = {
  name: "Johnny",
  children: [
    {
      name: "Jimmy",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};
