/**
 * Class for generating class names from style objects
 */
export default class ClassNameBuilder {
  constructor(style, block, extended = false) {
    this.style = style;
    this.block = block;
    this.extended = extended;
  }

  /**
   * Method for returning data from given object
   * @param {string} element - given element, if any
   * @param {string} modifier - given modifier, if any
   * @returns {string} - fetched data
   */
  generateBem(element, modifier) {
    const bem = `${this.block}${element}${modifier}`;

    return bem in this.style ? this.style[bem] : '';
  }

  /**
   * Method for generating proper string to be looked
   * @param {object|undefined} config - configuration
   * @returns {string} - key to be looked up
   */
  get(config = undefined) {
    const element = typeof config !== 'undefined' && typeof config.e !== 'undefined' ? `__${config.e}` : '';
    const modifier = typeof config !== 'undefined' && typeof config.m !== 'undefined' ? `--${config.m}` : '';

    if (element !== '' && modifier !== '' && this.extended === true) {
      return `${this.generateBem(element, '')} ${this.generateBem(element, modifier)}`;
    } else {
      return this.generateBem(element, modifier);
    }
  }
}
