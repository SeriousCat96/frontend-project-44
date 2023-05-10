export function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

export function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
}
