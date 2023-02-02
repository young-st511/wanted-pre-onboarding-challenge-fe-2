/** Class representing a List of Todos */
class TodoList {
  /**
   * Create a Todo List
   * @param {Todo[]} [todos] - Todo's List
   */
  constructor(todos = []) {}

  /**
   * Get all of Todos from Todo list
   * @returns {Todo[]} Array of returned Todo List
   */
  getTodoList = () => {};

  /**
   * Get a Todo by ID
   * @param {number} id - ID of Todo to get
   * @returns {Todo} Returned Todo
   */
  getTodoById = (id) => {};

  /**
   * Delete a Todo by ID
   * @param {number} id - ID of Todo to delete
   */
  deleteTodoById = (id) => {};

  /**
   * Delete all Todos from Todo list
   */
  deleteTodos = (id) => {};
}

/** Class representing a Todo */
class Todo {
  /**
   * Create a Todo
   * @param {string} todoId - Todo's ID
   * @param {string} todoContent - Todo's Content
   * @param {string} todoCategory - Todo's Category
   * @param {boolean} [isTodoComplete = true] - Completion of Todo
   * @param {string[]} [todoTags] - Todo's Tags(Optional)
   */
  constructor(todoId, todoContent, todoCategory, isTodoComplete, todoTags) {}

  /**
   * Update Todo's title
   * @param {string} title - Title to change
   * @returns {Todo} return this Todo
   */
  updateTitle = (title) => {};

  /**
   * Update Todo's Content
   * @param {string} content - Content to change
   * @returns {Todo} return this Todo
   */
  updateContent = (content) => {};

  /**
   * Update Todo's completion
   * @param {string} title - Completion to change
   * @returns {Todo} return this Todo
   */
  updateCompletion = (completion) => {};

  /**
   * Update Todo's category
   * @param {string} title - Category to change
   * @returns {Todo} return this Todo
   */
  updateTitle = (category) => {};

  /**
   * Add a tag to Todo
   * @param {string} tag - Tag name to add
   * @returns {Todo} return this Todo
   */
  addTag = (tagName) => {};

  /**
   * Delete a tag from Todo
   * @param {string} tag - Tag name to delete
   * @returns {Todo} return this Todo
   */
  deleteTag = (tagName) => {};

  /**
   * Delete all tags from Todo
   * @returns {Todo} return this Todo
   */
  deleteAllTags = () => {};
}
