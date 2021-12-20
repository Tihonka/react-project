import { render, screen } from '@testing-library/react';
import { Message } from '../Message';

describe ('Messages test', () =>{
  it('renders author and text', () =>{
    render( <Message message={ {text: 'messagetext', author: 'author'}} />);

    const msgText = screen.getByText('messagetext');
    const msgAuthor = screen.getByText('author :');
    expect(msgText).toBeInTheDocument();
    expect(msgAuthor).toBeInTheDocument();
  });
});