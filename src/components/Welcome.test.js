import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Welcome from "./Welcome"
import App from '../App';
it('should check that Welcome always starts with a "Velkommen', () => {
    render(<Welcome/>)
    const text = document.querySelector('h1')
    expect(text).toHaveTextContent('Velkommen')
  })

it('should check that App always renders Welcome with the name in state', () => {
    render(<App />)
    const text = document.querySelector('h1')
    expect(text).toHaveTextContent('Velkommen Ann-Charlott')
  })
  
  