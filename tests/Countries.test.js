import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../src/redux/configureStore';
import { getCountries } from '../src/redux/countries';
import CountriesHome from '../src/components/HomePage';

describe('display all countries fetched', () => {
  it('displays all countries', () => {
    const { container } = render(
      <Provider store={store}>
        <CountriesHome />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});

describe('check countries reducers', () => {
  jest.setTimeout(30000);
  it('should fetch items', async () => {
    await store.dispatch(getCountries());
    expect(store.getState().countriesData.countries.length).toEqual(250);
  });
});
