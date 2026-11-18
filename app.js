/** CLASSROOM ACTIVITIES **/

// 1.
let a = 10,
  b = 3;
console.log(a + b, a - b, a * b, a / b, a % b, a ** b); // 13 7 30 3.33.. 1 1000

// 2.
console.log(a > b, a < b, a >= b, a <= b); // true false true false
console.log(a == "10", a === "10", a != b, a !== b); // true false true true

// 3.
const age = 22;
const hasID = true;
const isEligible = age >= 18 && hasID;
console.log(isEligible); // true
console.log(age < 18 || !hasID); // false

// 4.
console.log(0 || 10); // 10  (0 is falsy)
console.log(0 ?? 10); // 0   (only null/undefined trigger ??)
console.log("" || "default"); // "default"
console.log("" ?? "default"); // ""
console.log(null ?? "fallback"); // "fallback"

const user = { profile: { name: "Grace" } };
console.log(user.profile?.name); // "Grace"
console.log(user.address?.city); // undefined (no error)

// 5.
console.log(5 + "5"); // "55"
console.log(5 - "2"); // 3
console.log(null ?? undefined ?? "x"); // "x"

/** MINI PROJECT **/

const employeeName = "Aneesah";
const basicSalary = 250000;
const bonus = 30000;
const tax = 25000;

const grossSalary = basicSalary + bonus;
const netSalary = grossSalary - tax;

const threshold = 200000;
const qualifiesForBonus = netSalary >= threshold;

console.log("Employee:", employeeName);
console.log("Gross Salary:", grossSalary); // 280000
console.log("Net Salary:", netSalary); // 255000
console.log("Qualifies for bonus:", qualifiesForBonus); // true

/* ASSIGNMENT ANSWERS */

/* 1. Operator and expression
   - Operator: a symbol that performs an operation on values (operands), e.g. +, >=, &&.
   - Expression: any code that evaluates to a value, e.g. 5 + 3, netSalary >= 200000, or just x.
*/

/* 2. Arithmetic operators
   +   Addition (also joins strings)   5 + 2   -> 7
   -   Subtraction                     5 - 2   -> 3
   *   Multiplication                  5 * 2   -> 10
   /   Division                        5 / 2   -> 2.5
   %   Remainder (modulus)             5 % 2   -> 1
   **  Exponentiation                  5 ** 2  -> 25
   ++  Increment by 1                  x++
   --  Decrement by 1                  x--
*/

/* 3. == vs ===
   - == (loose equality) converts types before comparing.
   - === (strict equality) compares value AND type, with no conversion.
   Prefer === to avoid surprising bugs.
*/
console.log(5 == "5"); // true  (string converted to number)
console.log(5 === "5"); // false (number vs string)
console.log(0 == false); // true
console.log(0 === false); // false

/* 4. Operator precedence
   Precedence decides which operator runs first. Higher runs before lower,
   and parentheses override everything.
   Rough order (high to low): ()  ->  **  ->  * / %  ->  + -  ->
   < > <= >=  ->  == ===  ->  &&  ->  ||  ->  =
*/
console.log(2 + 3 * 4); // 14  (* before +)
console.log((2 + 3) * 4); // 20  (parentheses first)
console.log(2 ** (3 ** 2)); // 512 (** is right-to-left: 3**2 = 9, then 2**9)
console.log(true || (false && false)); // true (&& before ||)
console.log(10 - 4 - 3); // 3   (same precedence, left-to-right)

/* 5. Program: total price, discount, limit check, display */

// Prices of three products
const price1 = 1200;
const price2 = 850;
const price3 = 450;

// Total price
const total = price1 + price2 + price3;

// 10% discount
const discountRate = 0.1;
const discountAmount = total * discountRate;
const finalAmount = total - discountAmount;

// Check against a specified value
const limit = 2000;
const exceedsLimit = finalAmount > limit;

// Display results
console.log("Total price:", total);
console.log("Discount amount:", discountAmount);
console.log("Final amount:", finalAmount);
console.log("Exceeds " + limit + "?", exceedsLimit);
