function StringBuilder(baseValue) {
  this.value = baseValue;
}

StringBuilder.prototype.getValue = function () {
  return this.value;
};

StringBuilder.prototype.padEnd = function (str) {
   this.value = `${this.value}${str}`;
   return this.value;
};

StringBuilder.prototype.padStart = function (str) {
  
  this.value = `${str}${this.value}`;
  return this.value;
};

StringBuilder.prototype.padBoth = function (str) {
  
  this.value = `${str}${this.value}${str}`;
  return this.value;
};

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='