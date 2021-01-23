import React from 'react';
import PropTypes from 'prop-types';
import ElementClass from './element-class';
export default class RootClass extends ElementClass {
  constructor() {
    super();
    this.element = document.documentElement;
  }

}
RootClass.propTypes = ElementClass.propTypes;