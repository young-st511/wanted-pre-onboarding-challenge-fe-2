/**
 * Class representing a Todo
 */
class Todo {
  /**
   * Create a Todo
   * @param {string} todoId - Todo's ID
   * @param {string} todoContent - Todo's Content
   * @param {string} todoCategory - Todo's Category
   * @param {boolean} [isTodoComplete == true] - Completion of Todo
   * @param {string[]} [todoTags] - Todo's Tags(Optional)
   */
  constructor(todoId, todoContent, todoCategory, isTodoComplete, todoTags) {}
}

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {}

/**
 * Both of these will link to the bar function.
 * @see {@link bar}
 * @see bar
 */
function foo() {}

// Use the inline {@link} tag to include a link within a free-form description.
/**
 * @see {@link foo} for further information.
 * @see {@link http://github.com|GitHub}
 */
function bar() {}

/**
 * Generic dairy product.
 * @constructor
 */
function DairyProduct() {}

/**
 * Check whether the dairy product is solid at room temperature.
 * @abstract
 * @return {boolean}
 */
DairyProduct.prototype.isSolid = function () {
  throw new Error("must be implemented by subclass!");
};

/**
 * Cool, refreshing milk.
 * @constructor
 * @augments DairyProduct
 */
function Milk() {}

/**
 * Check whether milk is solid at room temperature.
 * @return {boolean} Always returns false.
 */
Milk.prototype.isSolid = function () {
  return false;
};
