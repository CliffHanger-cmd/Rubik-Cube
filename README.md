


# 🧊 Rubik’s Cube Solver 

A simple, interactive **Rubik's Cube Solver** built with **HTML, CSS, and JavaScript**.  
It includes visual cube rendering, manual face rotations, scrambling, solving logic, and undo functionality.

## 🎯 Features

- ✅ **Interactive Cube** – Rotate any face: `U`, `D`, `L`, `R`, `F`, `B`
- 🔁 **Undo Last Move** – Step back one move at a time
- 🔄 **Scramble** – Generate a randomly scrambled cube
- 🧠 **Solve** – Solve the cube using inverse moves (non-optimal solution)
- 🎨 **Visual Display** – Cube displayed in net layout using colored squares
- 🔳 **Responsive UI** – Minimal and functional interface with move history

---

## 🖼️ Cube Visualization



```
      [U]
```

\[L] \[F] \[R] \[B]
\[D]



Each face is displayed as a 3×3 grid with color-coded squares:
- White = `w`
- Yellow = `y`
- Red = `r`
- Orange = `o`
- Green = `g`
- Blue = `b`

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/rubiks-cube-solver.git
cd rubiks-cube-solver
````

### 2. Open in Browser

Just open `index.html` in any modern browser (Chrome, Edge, Firefox).

*No server setup or build tools required.*

---

## 📂 Project Structure

```bash
📁 rubiks-cube-solver/
├── index.html         # Main HTML UI
├── style.css          # Cube and UI styling
├── cube.js            # Cube logic (rotation, scramble, solve, undo)
├── getCubeSvg.js      # Visual rendering of cube using HTML/CSS
```

---

## 🔧 Tech Used

* 💻 JavaScript (ES6)
* 🎨 CSS Grid for cube layout
* 🧱 Basic DOM manipulation (no libraries)
* 🧠 Manual logic (not using any cube-solving library)

---

## 🧠 How It Works

* Each face is stored as a 9-element array (e.g., `['w','w','w',...]`)
* Rotations update the face and adjacent strips
* `Scramble()` applies random moves
* `Solve()` reverses scramble steps using basic inversion logic
* `Undo` reverts last move (manual or scramble)

---

## 📸 Screenshots

![UI Screenshot](./screenshots/cube_ui.png)

---

## 📌 Notes

* This is not a fully optimal cube solver.
* Purpose: Show **logical thinking**, **OOP design**, and **interactive UI coding**.
* Can be extended to support:

  * Optimal solvers (Kociemba, layer-by-layer)
  * Animated step-by-step solver
  * 3D cube rendering (using Three.js)

---

## 🙋‍♂️ Author

👤 **Mohammed Fasiuddin**
📍 Telangana, India
💬 Built as part of an internship assignment to demonstrate programming skill in JavaScript

---


