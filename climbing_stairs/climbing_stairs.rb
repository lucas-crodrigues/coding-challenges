def climb_stairs(n)
  fib = [1, 1]
  i = 0
  while i < n
      fib << fib[i] + fib[i+1]
      i += 1
  end
  fib[n]
end
