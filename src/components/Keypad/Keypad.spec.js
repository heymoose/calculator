import React from 'react';
import { shallow } from 'enzyme';
import Keypad from './Keypad';
import keypadStyle from './Keypad.module.css';

describe('Keypad', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Keypad
                callOperator={jest.fn()}
                numbers={[]}
                operators={[]}
                setOperator={jest.fn()}
                updateDisplay={jest.fn()}
            />
        );
    });

    it("should render 3 <div />'s", () => {
        expect(wrapper.find('div').length).toEqual(3);
    });

    it('renders the values of the numbers', () => {
        wrapper.setProps({ numbers: ['0', '1', '2'] });
        expect(wrapper.find('.NumbersContainer').text()).toEqual('012');
    });

    it('renders the values of the operators', () => {
        wrapper.setProps({ operators: ['+', '-', '*', '/'] });
        expect(wrapper.find('.OperatorsContainer').text()).toEqual('+-*/');
    });
});
