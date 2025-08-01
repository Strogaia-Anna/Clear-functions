import { healthBar } from '../health_bar';

test('should be equal critical', () => {
  const result = healthBar({name: 'Маг', health: 10});

  expect(result).toBe("critical");
});

test('should be equal wounded', () => {
  const result = healthBar({name: 'Маг', health: 30});

  expect(result).toBe("wounded");
});

test('should be equal healthy', () => {
  const result = healthBar({name: 'Маг', health: 70});

  expect(result).toBe("healthy");
});