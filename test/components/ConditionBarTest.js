/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import { mount } from 'enzyme';
import ConditionBar from 'components/ConditionBar';

describe('ConditionBarComponent', () => {
  let ConditionBarComponent;

  beforeEach(() => {
    ConditionBarComponent = mount(<ConditionBar />);
  });

  describe('render', () => {
    it('should has name state for saving query condition.', () => {
      assert.equal(ConditionBarComponent.state().name, '');
    });
    it('should has min age for saving query condition.', () => {
      assert.equal(ConditionBarComponent.state().minAge, '');
    });
    it('should has max age for saving query condition.', () => {
      assert.equal(ConditionBarComponent.state().maxAge, '');
    });
    it('should has gender for saving query condition.', () => {
      assert.equal(ConditionBarComponent.state().gender, '');
    });
    it('should render a text input for saving name query condition', () => {
      assert.equal(ConditionBarComponent.find('.name-input').length, 1);
    });
    it('should change state name when name input changed', () => {
      const nameInput = ConditionBarComponent.find('.name-input');

      assert.equal(ConditionBarComponent.state().name, '');

      nameInput.prop('onChange')({
        target: {
          value: 'name'
        }
      });

      assert.equal(ConditionBarComponent.state().name, 'name');
    });
    it('should has max age input component', () => {
      const maxAgeInput = ConditionBarComponent.find('.maxAge-input');

      assert.equal(maxAgeInput.length, 1);
    });
    it('should has min age input component', () => {
      const minAgeInput = ConditionBarComponent.find('.minAge-input');
      
      assert.equal(minAgeInput.length, 1);
    })
  });
});
