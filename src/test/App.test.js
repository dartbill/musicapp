/**
 * @jest-environment jsdom
 */


import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArtistCard from '../components/TrainerCard';
import LikeBtn from '../components/Like';



describe('ArtistCard', () => {

  beforeEach(() => {
    render(<ArtistCard />);
  });

  test("checks content of title", () => {
    const headlines = screen.getByRole('title');
    expect(headlines.textContent).toContain("Frank Turner");
  });
  
});

describe('likebtn', () => {

    beforeEach(() => {
      render(<LikeBtn />);
    });
  
    test("checks btn goes up by one", async () => {
      const user = userEvent.setup();
      const btn = screen.getByRole('button', { name: 'likebtn' });
      await user.click(btn);
      const newBtnCount = screen.getByRole('button', { name: 'likebtn' });
      expect(newBtnCount.textContent).toBe("like count: 1");
      await user.click(btn);
      expect(newBtnCount.textContent).toBe("like count: 0");
    });
    
  });