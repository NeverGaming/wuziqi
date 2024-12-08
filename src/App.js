import { useState } from 'react';

// 棋格
function Square({ value, onSquareClick }) {
  //const [value, setValue] = useState(null);
  

  return (
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}


//  棋盘
function Board({ xIsNext, squares, onPlay }) {

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "胜者: " + winner;
  } else {
    status = "接下来的出棋人: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
  <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
  <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
  <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
  <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
  <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
  <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
  <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
  <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
  </div>
  <div className="board-row">
  <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
  <Square value={squares[9]} onSquareClick={() => handleClick(9)}/>
  <Square value={squares[10]} onSquareClick={() => handleClick(10)}/>
  <Square value={squares[11]} onSquareClick={() => handleClick(11)}/>
  <Square value={squares[12]} onSquareClick={() => handleClick(12)}/>
  <Square value={squares[13]} onSquareClick={() => handleClick(13)}/>
  <Square value={squares[14]} onSquareClick={() => handleClick(14)}/>
  <Square value={squares[15]} onSquareClick={() => handleClick(15)}/>
  </div>
  <div className="board-row">
  <Square value={squares[16]} onSquareClick={() => handleClick(16)}/>
  <Square value={squares[17]} onSquareClick={() => handleClick(17)}/>
  <Square value={squares[18]} onSquareClick={() => handleClick(18)}/>
  <Square value={squares[19]} onSquareClick={() => handleClick(19)}/>
  <Square value={squares[20]} onSquareClick={() => handleClick(20)}/>
  <Square value={squares[21]} onSquareClick={() => handleClick(21)}/>
  <Square value={squares[22]} onSquareClick={() => handleClick(22)}/>
  <Square value={squares[23]} onSquareClick={() => handleClick(23)}/>
  </div>
  <div className="board-row">
  <Square value={squares[24]} onSquareClick={() => handleClick(24)}/>
  <Square value={squares[25]} onSquareClick={() => handleClick(25)}/>
  <Square value={squares[26]} onSquareClick={() => handleClick(26)}/>
  <Square value={squares[27]} onSquareClick={() => handleClick(27)}/>
  <Square value={squares[28]} onSquareClick={() => handleClick(28)}/>
  <Square value={squares[29]} onSquareClick={() => handleClick(29)}/>
  <Square value={squares[30]} onSquareClick={() => handleClick(30)}/>
  <Square value={squares[31]} onSquareClick={() => handleClick(31)}/>
  </div>
  <div className="board-row">
  <Square value={squares[32]} onSquareClick={() => handleClick(32)}/>
  <Square value={squares[33]} onSquareClick={() => handleClick(33)}/>
  <Square value={squares[34]} onSquareClick={() => handleClick(34)}/>
  <Square value={squares[35]} onSquareClick={() => handleClick(35)}/>
  <Square value={squares[36]} onSquareClick={() => handleClick(36)}/>
  <Square value={squares[37]} onSquareClick={() => handleClick(37)}/>
  <Square value={squares[38]} onSquareClick={() => handleClick(38)}/>
  <Square value={squares[39]} onSquareClick={() => handleClick(39)}/>
  </div>
  <div className="board-row">
  <Square value={squares[40]} onSquareClick={() => handleClick(40)}/>
  <Square value={squares[41]} onSquareClick={() => handleClick(41)}/>
  <Square value={squares[42]} onSquareClick={() => handleClick(42)}/>
  <Square value={squares[43]} onSquareClick={() => handleClick(43)}/>
  <Square value={squares[44]} onSquareClick={() => handleClick(44)}/>
  <Square value={squares[45]} onSquareClick={() => handleClick(45)}/>
  <Square value={squares[46]} onSquareClick={() => handleClick(46)}/>
  <Square value={squares[47]} onSquareClick={() => handleClick(47)}/>
  </div>
  <div className="board-row">
  <Square value={squares[48]} onSquareClick={() => handleClick(48)}/>
  <Square value={squares[49]} onSquareClick={() => handleClick(49)}/>
  <Square value={squares[50]} onSquareClick={() => handleClick(50)}/>
  <Square value={squares[51]} onSquareClick={() => handleClick(51)}/>
  <Square value={squares[52]} onSquareClick={() => handleClick(52)}/>
  <Square value={squares[53]} onSquareClick={() => handleClick(53)}/>
  <Square value={squares[54]} onSquareClick={() => handleClick(54)}/>
  <Square value={squares[55]} onSquareClick={() => handleClick(55)}/>
  </div>
  <div className="board-row">
  <Square value={squares[56]} onSquareClick={() => handleClick(56)}/>
  <Square value={squares[57]} onSquareClick={() => handleClick(57)}/>
  <Square value={squares[58]} onSquareClick={() => handleClick(58)}/>
  <Square value={squares[59]} onSquareClick={() => handleClick(59)}/>
  <Square value={squares[60]} onSquareClick={() => handleClick(60)}/>
  <Square value={squares[61]} onSquareClick={() => handleClick(61)}/>
  <Square value={squares[62]} onSquareClick={() => handleClick(62)}/>
  <Square value={squares[63]} onSquareClick={() => handleClick(63)}/>
  </div>
    </>
  );
}


export default function Game() {
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(64).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0; // currentMove与xIsNext对应，xIsNext的state就不必要了
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    //setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    //setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = '落子 #' + move;
    } else {
      description = '最开始';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}


// 获胜判断
function calculateWinner(squares) {
  const lines = [
    // 横向
    ...createLines(8, 1, 0), // 横向连珠
    // 纵向
    ...createLines(8, 8, 0), // 纵向连珠
    // 斜向（从左上到右下）
    ...createLines(8, 9, 0), // 斜向连珠（包括主对角线）
    // 反斜向（从右上到左下）
    ...createLines(8, 7, 0), // 反斜向连珠（包括副对角线）
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
      return squares[a];
    }
  }
  return null;
}

// 生成连珠线的辅助函数
//size棋盘的大小，
//step连珠线中相邻元素的索引差（1表示横向，8表示纵向，7和9分别表示两个方向的斜线），
//start连珠线开始的位置。
function createLines(size, step, start) {
  const lines = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= size - 5; j++) {
      lines.push([start + i * size + j * step, start + i * size + (j + 1) * step, start + i * size + (j + 2) * step, start + i * size + (j + 3) * step, start + i * size + (j + 4) * step]);
    }
  }
  return lines;
}
