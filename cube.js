function getCubeSvg(u, r, f, d, l, b) {
  const container = document.getElementById("cubeDisplay");
  container.innerHTML = `
    <div class="cube-net">
      <div class="face face-u">${drawFace(u)}</div>
      <div class="row">
        <div class="face face-l">${drawFace(l)}</div>
        <div class="face face-f">${drawFace(f)}</div>
        <div class="face face-r">${drawFace(r)}</div>
        <div class="face face-b">${drawFace(b)}</div>
      </div>
      <div class="face face-d">${drawFace(d)}</div>
    </div>
  `;
}

function drawFace(face) {
  return face.split('').map(c => `<div class="cell ${colorClass(c)}"></div>`).join('');
}

function colorClass(char) {
  switch (char) {
    case 'w': return 'white';
    case 'y': return 'yellow';
    case 'r': return 'red';
    case 'o': return 'orange';
    case 'g': return 'green';
    case 'b': return 'blue';
    default: return '';
  }
}



class Cube {
  constructor() {
    this.reset();
    this.solutionSteps = [];
  }
  

  reset() {
    this.faces = {
      U: Array(9).fill('w'),
      D: Array(9).fill('y'),
      L: Array(9).fill('o'),
      R: Array(9).fill('r'),
      F: Array(9).fill('g'),
      B: Array(9).fill('b')
    };
    this.moves = [];
    this.solutionSteps = [];
    this.display();
  }
  

  rotate(face, silent = false) {
    if (face.includes("'")) {
      this.rotateFaceCounterClockwise(face[0]);
    } else {
      this.rotateFaceClockwise(face);
    }
    if (!silent) this.moves.push(face);
    this.display();
  }
  

  rotateFaceClockwise(face) {
    const [a, b, c, d, e, f, g, h, i] = this.faces[face];
    this.faces[face] = [g, d, a, h, e, b, i, f, c];

    const { F, R, B, L, U, D } = this.faces;

    if (face === 'U') {
      const temp = [L[0], L[1], L[2]];
      [L[0], L[1], L[2]] = [B[0], B[1], B[2]];
      [B[0], B[1], B[2]] = [R[0], R[1], R[2]];
      [R[0], R[1], R[2]] = [F[0], F[1], F[2]];
      [F[0], F[1], F[2]] = temp;
    }

    if (face === 'D') {
      const temp = [L[6], L[7], L[8]];
      [L[6], L[7], L[8]] = [B[6], B[7], B[8]];
      [B[6], B[7], B[8]] = [R[6], R[7], R[8]];
      [R[6], R[7], R[8]] = [F[6], F[7], F[8]];
      [F[6], F[7], F[8]] = temp;
    }

    if (face === 'F') {
      const temp = [U[6], U[7], U[8]];
      [U[6], U[7], U[8]] = [L[8], L[5], L[2]];
      [L[8], L[5], L[2]] = [D[2], D[1], D[0]];
      [D[2], D[1], D[0]] = [R[0], R[3], R[6]];
      [R[0], R[3], R[6]] = temp;
    }

    if (face === 'B') {
      const temp = [U[0], U[1], U[2]];
      [U[0], U[1], U[2]] = [R[2], R[5], R[8]];
      [R[2], R[5], R[8]] = [D[8], D[7], D[6]];
      [D[8], D[7], D[6]] = [L[6], L[3], L[0]];
      [L[6], L[3], L[0]] = temp;
    }

    if (face === 'L') {
      const temp = [U[0], U[3], U[6]];
      [U[0], U[3], U[6]] = [B[8], B[5], B[2]];
      [B[8], B[5], B[2]] = [D[0], D[3], D[6]];
      [D[0], D[3], D[6]] = [F[0], F[3], F[6]];
      [F[0], F[3], F[6]] = temp;
    }

    if (face === 'R') {
      const temp = [U[8], U[5], U[2]];
      [U[8], U[5], U[2]] = [F[8], F[5], F[2]];
      [F[8], F[5], F[2]] = [D[8], D[5], D[2]];
      [D[8], D[5], D[2]] = [B[0], B[3], B[6]];
      [B[0], B[3], B[6]] = temp;
    }
  }

  rotateFaceCounterClockwise(face) {
    this.rotateFaceClockwise(face);
    this.rotateFaceClockwise(face);
    this.rotateFaceClockwise(face);
  }

  scramble(count = 20) {
    const faces = ['U', 'D', 'L', 'R', 'F', 'B'];
    this.moves = [];
    this.solutionSteps = [];
  
    for (let i = 0; i < count; i++) {
      const face = faces[Math.floor(Math.random() * faces.length)];
      this.rotate(face, true);      // Rotate silently
      this.moves.push(face);        // Track scramble moves manually
    }
  
    this.display();
  }

  scramble(count = 20) {
    const faces = ['U', 'D', 'L', 'R', 'F', 'B'];
  
    this.reset();
    this.moves = [];
    this.solutionSteps = [];
  
    for (let i = 0; i < count; i++) {
      const face = faces[Math.floor(Math.random() * faces.length)];
      this.rotate(face, true);        // silent rotation
      this.moves.push(face);          // store only scramble moves
    }
  
    this.display();
  }
  
  

  solve() {
    const reversed = [...this.moves].reverse().map(m => m.includes("'") ? m[0] : m + "'");
    this.solutionSteps = reversed;
    for (let move of reversed) {
      this.rotate(move, true); // silent rotation
    }
    this.moves = []; // Clear scramble moves
    this.display();  // Show updated cube + solution steps
  }

  reverseStep() {
    if (this.moves.length === 0) return;
  
    const lastMove = this.moves.pop();
  
    const inverse = lastMove.includes("'") ? lastMove[0] : lastMove + "'";
  
    this.rotate(inverse, true); // silent = true (don't push it back to moves)
  
    this.solutionSteps = []; // Clear any old solution display
  
    this.display();
  }
  
  

  display() {
    getCubeSvg(
      this.faces.U.join(''),
      this.faces.R.join(''),
      this.faces.F.join(''),
      this.faces.D.join(''),
      this.faces.L.join(''),
      this.faces.B.join('')
    );
  
    const moveDisplay = document.getElementById("moveHistory");
    if (moveDisplay) {
      if (this.solutionSteps.length > 0) {
        moveDisplay.innerText = `Solution: ${this.solutionSteps.join(" ")}`;
      } else if (this.moves.length > 0) {
        moveDisplay.innerText = `Scramble: ${this.moves.join(" ")}`;
      } else {
        moveDisplay.innerText = '';
      }
    }
  }
  
}
