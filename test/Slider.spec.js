import React from 'react';
import { shallow } from 'enzyme';
import Slider from '../src/Slider';
import mocker from './helper/new-mocker';

describe('<Slider />', () => {
  let wrapper;
  const sliderInitMock = jest.fn();
  const sliderInstanceDestroyMock = jest.fn();
  const sliderMock = {
    init: (el, options) => {
      sliderInitMock(options);
      return {
        destroy: sliderInstanceDestroyMock
      };
    }
  };
  const restore = mocker('Slider', sliderMock);

  const defaultOptions = {
    indicators: true,
    interval: 6000,
    duration: 500,
    height: 400
  };

  beforeEach(() => {
    sliderInitMock.mockClear();
  });

  afterAll(() => {
    restore();
  });

  test('initializes Slider with default options', () => {
    wrapper = shallow(<Slider />);
    expect(sliderInitMock).toHaveBeenCalledWith(defaultOptions);
  });

  test('Destroyed when unmounted', () => {
    wrapper = shallow(<Slider />);
    wrapper.unmount();
    expect(sliderInstanceDestroyMock).toHaveBeenCalled();
  });

  test('should render a Slider', () => {
    wrapper = shallow(<Slider />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render a fullscreen Slider', () => {
    wrapper = shallow(<Slider fullscreen />);
    expect(wrapper.hasClass('fullscreen'));
  });
});
