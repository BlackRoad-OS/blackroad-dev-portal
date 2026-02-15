# BlackRoad Developer Portal

Central hub for BlackRoad APIs, SDKs, and documentation.

## Live

- **Portal**: https://blackroad-dev-portal.amundsonalexa.workers.dev
- **Services API**: https://blackroad-dev-portal.amundsonalexa.workers.dev/api/services
- **SDKs API**: https://blackroad-dev-portal.amundsonalexa.workers.dev/api/sdks

## Features

- **Service Catalog** - Browse all BlackRoad APIs and services
- **Official SDKs** - TypeScript, Python, Go, Ruby, Rust
- **Quick Start Guides** - Get up and running fast
- **Live Status** - Real-time service health

## Services

| Service | Description | Status |
|---------|-------------|--------|
| GraphQL API | Unified GraphQL endpoint | stable |
| Webhooks | 106 event types with HMAC signatures | stable |
| Email Service | 9 beautiful email templates | stable |
| Status Page | Real-time health monitoring | stable |

## SDKs

```bash
# TypeScript/JavaScript
npm install @blackroad/sdk

# Python
pip install blackroad

# Go
go get github.com/blackroad-os/blackroad-sdk-go

# Ruby
gem install blackroad

# Rust
cargo add blackroad
```

## API Endpoints

### GET /api/services
Returns list of all available services.

### GET /api/sdks
Returns list of official SDKs with install commands.

## Development

```bash
npm install
npm run dev      # Local development
npm run deploy   # Deploy to Cloudflare
```

## License

Proprietary - BlackRoad OS, Inc.
