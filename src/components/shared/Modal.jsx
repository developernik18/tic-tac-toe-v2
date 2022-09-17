import './modal.css';

export default function Modal({winner}) {
  return (
    <div className='darkBg'>
      {winner?.Name} won the game.
      <button onClick={() => window.location.reload()}>Restart</button>
    </div>
  )
}
