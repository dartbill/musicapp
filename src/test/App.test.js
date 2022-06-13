/**
 * @jest-environment jsdom
 */


import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArtistCard from '../components/TrainerCard';

describe('App', () => {

  beforeEach(() => {
    render(<ArtistCard />);
  });

  test("renders story headlines", () => {
    const headlines = screen.getByRole('title');
    expect(headlines.textContent).toContain("Frank Turner");
  });

  
});