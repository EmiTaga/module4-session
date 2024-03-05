// Array of names
const names = ["John", "Jane", "Michael", "Jack", "Emily", "Alice", "Robert", "Sophia", "David", "Olivia"];

// Loop over the array
names.forEach(name => {
    // Check if the name starts with 'j' or 'J'
    if (name.charAt(0) === 'j' || name.charAt(0) === 'J') {
        console.log(`Goodbye ${name}`);
    } else {
        console.log(`Hello ${name}`);
    }
});
