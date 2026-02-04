# Individual Work 3 - 10 Simple Assignment Variants for Beginners
## NestJS + RabbitMQ Microservices

**Base Pattern for All Variants:**
- Producer (API) receives data from HTTP request
- Producer sends data to RabbitMQ
- Consumer receives and processes the data
- Consumer sends result back to Producer
- Producer returns the final result to user

**All variants follow the same difficulty level but with different data types and operations**

---

## Variant 1: Temperature Converter
**Data Flow:** 
- Producer receives: `POST /convert-temperature?celsius=25`
- Consumer: Converts Celsius to Fahrenheit: `(C × 9/5) + 32`
- Result returned: `{ celsius: 25, fahrenheit: 77 }`

**What you implement:**
1. Producer endpoint that receives temperature in Celsius
2. Send message to RabbitMQ queue
3. Consumer listens, converts to Fahrenheit
4. Send result back
5. Display result in API response

---

## Variant 2: Price Calculator with Tax
**Data Flow:**
- Producer receives: `POST /calculate-price?price=100&taxRate=10`
- Consumer: Calculates total with tax: `price + (price × taxRate/100)`
- Result returned: `{ originalPrice: 100, tax: 10, totalPrice: 110 }`

**What you implement:**
1. Producer endpoint that receives price and tax rate
2. Send to RabbitMQ
3. Consumer calculates final price
4. Send result back
5. Display in API response

---

## Variant 3: Grade Evaluator
**Data Flow:**
- Producer receives: `POST /evaluate-grade?score=85`
- Consumer: Assigns grade (0-59: F, 60-74: D, 75-89: B, 90-100: A)
- Result returned: `{ score: 85, grade: "B" }`

**What you implement:**
1. Producer endpoint that receives numeric score
2. Send to RabbitMQ
3. Consumer evaluates and assigns letter grade
4. Send result back
5. Display in API response

---

## Variant 4: String Validator
**Data Flow:**
- Producer receives: `POST /validate-string?text=hello123`
- Consumer: Checks if alphanumeric (letters and numbers only), returns true/false
- Result returned: `{ text: "hello123", isAlphanumeric: true, length: 8 }`

**What you implement:**
1. Producer endpoint that receives a string
2. Send to RabbitMQ
3. Consumer validates if it contains only letters and numbers
4. Send result back
5. Display validation result in API response

---

## Variant 5: Distance Converter
**Data Flow:**
- Producer receives: `POST /convert-distance?kilometers=5`
- Consumer: Converts km to miles: `km × 0.621371`
- Result returned: `{ kilometers: 5, miles: 3.11 }`

**What you implement:**
1. Producer endpoint that receives distance in kilometers
2. Send to RabbitMQ
3. Consumer converts to miles
4. Send result back
5. Display in API response

---

## Variant 6: Age Calculator
**Data Flow:**
- Producer receives: `POST /calculate-age?birthYear=2000`
- Consumer: Calculates age: `currentYear - birthYear`
- Result returned: `{ birthYear: 2000, currentYear: 2026, age: 26 }`

**What you implement:**
1. Producer endpoint that receives birth year
2. Send to RabbitMQ
3. Consumer calculates current age (use current year 2026)
4. Send result back
5. Display in API response

---

## Variant 7: BMI Calculator
**Data Flow:**
- Producer receives: `POST /calculate-bmi?weight=70&height=175`
- Consumer: Calculates BMI: `weight / (height/100)²`
- Result returned: `{ weight: 70, height: 175, bmi: 22.86, category: "Normal" }`

**What you implement:**
1. Producer endpoint that receives weight (kg) and height (cm)
2. Send to RabbitMQ
3. Consumer calculates BMI and categorizes it
4. Send result back
5. Display in API response

---

## Variant 8: Discount Calculator
**Data Flow:**
- Producer receives: `POST /apply-discount?originalPrice=200&discountPercent=15`
- Consumer: Calculates: `price - (price × discount/100)`
- Result returned: `{ originalPrice: 200, discount: 30, finalPrice: 170 }`

**What you implement:**
1. Producer endpoint that receives original price and discount percentage
2. Send to RabbitMQ
3. Consumer calculates discounted price
4. Send result back
5. Display in API response

---

## Variant 9: Speed Converter
**Data Flow:**
- Producer receives: `POST /convert-speed?kmh=100`
- Consumer: Converts km/h to m/s: `kmh / 3.6`
- Result returned: `{ kmh: 100, ms: 27.78 }`

**What you implement:**
1. Producer endpoint that receives speed in km/h
2. Send to RabbitMQ
3. Consumer converts to m/s
4. Send result back
5. Display in API response

---

## Variant 10: Percentage Calculator
**Data Flow:**
- Producer receives: `POST /calculate-percentage?part=25&total=100`
- Consumer: Calculates percentage: `(part / total) × 100`
- Result returned: `{ part: 25, total: 100, percentage: 25 }`

**What you implement:**
1. Producer endpoint that receives two numbers (part and total)
2. Send to RabbitMQ
3. Consumer calculates what percentage part is of total
4. Send result back
5. Display in API response

---

## How Each Variant Works (Same Pattern for All):

### Step 1: Create Producer Endpoint
```typescript
@Post('/your-operation')
async yourOperation(@Query() data) {
  // Send data to RabbitMQ
  return await this.client.send('operation_queue', data).toPromise();
}
```

### Step 2: Create Consumer Listener
```typescript
@EventPattern('operation_queue')
handleMessage(data) {
  // Process data
  const result = /* your calculation */;
  return result;
}
```

### Step 3: Test with curl or Postman
```bash
curl http://localhost:3000/your-operation?param1=value1&param2=value2
```

---

## Requirements for EACH Variant:

✅ **Code Implementation:**
- Producer receives input via HTTP GET/POST
- Sends message to RabbitMQ
- Consumer processes and returns result
- Producer returns result to client

✅ **Testing:**
- Test with at least 3 different inputs
- Show console output proving it works
- Save test commands (curl or Postman export)

✅ **Documentation (Simple README):**
- What does your variant do?
- How to run: `docker-compose up`
- Example: `curl http://localhost:3000/...?param=value`
- Show example response

---

## Submission Checklist:
- [ ] Code works with `docker-compose up`
- [ ] HTTP endpoint responds correctly
- [ ] RabbitMQ connection works
- [ ] Result displayed in API response
- [ ] README explains how to test
- [ ] Push to git branch

**Each student picks ONE variant and completes it in 1 week**
