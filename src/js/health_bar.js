 export function healthBar(data) {
    let result = "healthy";
    if (15 <= data.health && data.health <= 50) {
        result = "wounded";
    }
    if (data.health < 15) {
        result = "critical";
    }

    return result;
}