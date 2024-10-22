export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        { id: crypto.randomUUID(), text: action.text, done: false },
      ];
    case "changed":
      return tasks.map((task) =>
        task.id === action.updatedTask.id ? { ...action.updatedTask } : task
      );
    case "deleted":
      return tasks.filter((task) => task.id !== action.id);

    default:
      throw Error(`you don't have this kinds of action ${action.types}`);
  }
}
