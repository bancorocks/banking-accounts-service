# Banking Accounts Service

Accounts Service provides account management features for Banco Rocks, including account creation, balance inquiry, and customer data integration.

## Features

- OpenAPI 3.0.3 specification with Swagger UI at `/docs`
- Request/response validation via express-openapi-validator
- In-memory persistence at db.json

## Getting Started

```bash
# Install dependencies
yarn

# Start dev server
yarn dev
```

The server will be running at http://localhost:3003.

## API Endpoints

### GET /v1/accounts/{accountId}

Retrieves account details.

```bash
curl http://localhost:3003/v1/accounts/7b9e6432-8c13-4b8e-9c45-1d2a3f456b78
```

## Documentation

- API docs: http://localhost:3003/docs

## Development

- `yarn dev` - Start dev server with hot reload
- `yarn build` - Build for production
- `yarn start` - Start production server
 