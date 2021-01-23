import React from 'react';
import PropTypes from 'prop-types';
import ElementClass from './element-class';
export default class BodyClass extends ElementClass {
  constructor() {
    super();
    this.element = document.body;
  }

}
BodyClass.propTypes = ElementClass.propTypes;