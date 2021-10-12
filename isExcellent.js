function excellentCheck([mark]) {
  let grade = Number(mark);
  if (grade >= 5.5) {
    console.log(`Excellent!`);
  } else {
    console.log();
  }
}

excellentCheck([6]);
excellentCheck([5]);
excellentCheck([5.5]);
excellentCheck([5.49]);
