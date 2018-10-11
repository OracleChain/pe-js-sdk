var pe = require('./pe');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.pe === 'undefined') {
    window.pe = pe;
}

// module.exports = pe
export default{
    pe
}