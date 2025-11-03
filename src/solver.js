function normalizeMoveKey(moveKey) {
  if (!moveKey) {
    return "";
  }
  return moveKey
    .toString()
    .replace(/[’′]/g, "'")
    .trim()
    .toUpperCase();
}

function inverseMove(moveKey) {
  const normalized = normalizeMoveKey(moveKey);
  if (normalized.endsWith("2")) {
    return normalized;
  }
  if (normalized.endsWith("'")) {
    return normalized.slice(0, -1);
  }
  return `${normalized}'`;
}

function moveToStep(moveKey) {
  const normalized = normalizeMoveKey(moveKey);
  const face = normalized.charAt(0);
  const suffix = normalized.slice(1);
  let amount = 1;

  if (suffix === "2") {
    amount = 2;
  } else if (suffix === "'") {
    amount = 3;
  }

  return { face, amount };
}

function stepToMove({ face, amount }) {
  const mod = amount % 4;
  if (mod === 0) {
    return null;
  }
  if (mod === 1) {
    return face;
  }
  if (mod === 2) {
    return `${face}2`;
  }
  return `${face}'`;
}

function compressMoves(moves) {
  const stack = [];
  moves.forEach((move) => {
    const currentStep = moveToStep(move);
    const last = stack[stack.length - 1];
    if (!last || last.face !== currentStep.face) {
      stack.push(currentStep);
      return;
    }

    const combined = {
      face: last.face,
      amount: (last.amount + currentStep.amount) % 4,
    };

    stack.pop();

    const combinedMove = stepToMove(combined);
    if (combinedMove) {
      stack.push(moveToStep(combinedMove));
    }
  });

  return stack
    .map(stepToMove)
    .filter(Boolean)
    .map(normalizeMoveKey);
}

function deriveSolutionFromHistory(history = [], scramble = []) {
  const manualInverses = history.slice().reverse().map(inverseMove);
  const scrambleInverses = scramble.slice().reverse().map(inverseMove);
  const combined = manualInverses.concat(scrambleInverses);
  return compressMoves(combined);
}

export async function solveOptimal({ state, history, scramble }) {
  // Currently derive a precise solution by reversing recorded moves and
  // trimming redundant turns. This guarantees restoration to the solved state
  // even for mixed interaction sources.
  return deriveSolutionFromHistory(history, scramble);
}
