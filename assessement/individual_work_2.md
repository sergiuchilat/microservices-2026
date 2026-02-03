# Microservice Architecture Task - NestJS

## Objective
Build a microservice-based application demonstrating inter-service communication over HTTP with bidirectional data exchange.

## Task Description

### Architecture
Create 3 microservices:
1. **User Service** (Port 3001) - Manages user data
2. **Product Service** (Port 3002) - Manages products
3. **Order Service** (Port 3003) - Manages orders, communicates with User and Product services

### Requirements

#### User Service
- `GET /users` - List all users
- `POST /users` - Create user
- `GET /users/:id` - Get user by ID

#### Product Service
- `GET /products` - List all products
- `POST /products` - Create product
- `GET /products/:id` - Get product by ID
- `PATCH /products/:id/stock` - Update product stock

#### Order Service
- `POST /orders` - Create order (calls User & Product services to validate and retrieve data)
- `GET /orders/:id` - Get order details with user and product info (aggregates data from other services)
- `PATCH /orders/:id/status` - Update order status

### Inter-Service Communication Requirements

#### Order Service → User Service
- Validate user exists before creating an order
- Retrieve user details when fetching order details
- Return meaningful error if user service is unavailable

#### Order Service → Product Service
- Check product availability and stock before order creation
- Reduce product stock after successful order creation
- Retrieve product details when fetching order details
- Implement rollback mechanism if order creation fails after stock reduction

#### Communication Implementation
- Use `@nestjs/axios` HTTP client for synchronous calls
- Implement error handling with appropriate HTTP status codes
- Set request timeouts (5-10 seconds) to prevent hanging calls
- Store service URLs in `.env` configuration files
- Include service health checks or graceful degradation

#### Response Format Example (Order Details)
```json
{
  "id": "order-uuid",
  "userId": "user-uuid",
  "productId": "product-uuid",
  "quantity": 2,
  "status": "confirmed",
  "user": {
    "id": "user-uuid",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "product": {
    "id": "product-uuid",
    "name": "Laptop",
    "price": 999.99,
    "stockRemaining": 8
  },
  "createdAt": "2026-02-03T10:00:00Z",
  "updatedAt": "2026-02-03T10:00:00Z"
}
```

### Technical Stack
- Framework: NestJS
- HTTP Client: @nestjs/axios
- Database: PostgreSQL + TypeORM (optional: SQLite for simplicity)
- API Testing: Postman/Thunder Client
- Environment Management: dotenv

### Project Structure
```
microservices-2026/
├── user-service/
│   ├── src/
│   │   ├── users/
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   └── users.module.ts
│   │   └── main.ts
│   └── .env
├── product-service/
│   ├── src/
│   │   ├── products/
│   │   │   ├── products.controller.ts
│   │   │   ├── products.service.ts
│   │   │   └── products.module.ts
│   │   └── main.ts
│   └── .env
├── order-service/
│   ├── src/
│   │   ├── orders/
│   │   │   ├── orders.controller.ts
│   │   │   ├── orders.service.ts
│   │   │   ├── orders.module.ts
│   │   │   └── http-clients/
│   │   │       ├── user.client.ts
│   │   │       └── product.client.ts
│   │   └── main.ts
│   └── .env
└── docker-compose.yml
```

### Deliverables
1. Source code (GitHub repo or zipped)
2. Docker Compose file (optional but recommended)
3. API documentation (Postman collection or Swagger)
4. Setup & run instructions (README with curl examples)
5. Environment configuration examples (.env.example files)

## Time Estimation

| Phase | Duration |
|-------|----------|
| Project setup & scaffolding | 1-2 hours |
| Service implementation (CRUD + HTTP clients) | 4-5 hours |
| Inter-service communication logic & error handling | 3-4 hours |
| Testing & debugging | 2-3 hours |
| Documentation & deployment setup | 1-2 hours |
| **Total** | **11-16 hours** |

## Evaluation Criteria
- ✅ All three services running independently
- ✅ Correct HTTP communication between services
- ✅ Proper error handling and validation
- ✅ Data aggregation in Order Service responses
- ✅ Environment-based configuration
- ✅ Clear documentation and setup instructions
