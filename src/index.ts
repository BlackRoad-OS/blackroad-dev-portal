/**
 * BlackRoad Developer Portal
 * Service catalog, API documentation, SDKs
 */

interface Env {
  ENVIRONMENT: string;
}

// Service catalog
const SERVICES = [
  {
    id: 'graphql-gateway',
    name: 'GraphQL API',
    description: 'Unified GraphQL endpoint for all BlackRoad products',
    category: 'Core API',
    url: 'https://blackroad-graphql-gateway.amundsonalexa.workers.dev',
    docs: '/docs/graphql',
    status: 'stable',
    version: '1.0.0',
  },
  {
    id: 'webhooks',
    name: 'Webhooks',
    description: '106 event types with HMAC signatures and retry logic',
    category: 'Core API',
    url: 'https://blackroad-webhooks.amundsonalexa.workers.dev',
    docs: '/docs/webhooks',
    status: 'stable',
    version: '1.0.0',
  },
  {
    id: 'email',
    name: 'Email Service',
    description: '9 beautiful email templates with SendGrid integration',
    category: 'Core API',
    url: 'https://blackroad-email.amundsonalexa.workers.dev',
    docs: '/docs/email',
    status: 'stable',
    version: '1.0.0',
  },
  {
    id: 'status',
    name: 'Status Page',
    description: 'Real-time service health monitoring',
    category: 'Infrastructure',
    url: 'https://blackroad-status.amundsonalexa.workers.dev',
    docs: '/docs/status',
    status: 'stable',
    version: '1.0.0',
  },
];

// SDKs
const SDKS = [
  { name: 'TypeScript/JavaScript', package: '@blackroad/sdk', repo: 'https://github.com/BlackRoad-OS/blackroad-sdk', install: 'npm install @blackroad/sdk' },
  { name: 'Python', package: 'blackroad', repo: 'https://github.com/BlackRoad-OS/blackroad-sdk/tree/main/python', install: 'pip install blackroad' },
  { name: 'Go', package: 'github.com/blackroad-os/blackroad-sdk-go', repo: 'https://github.com/BlackRoad-OS/blackroad-sdk/tree/main/go', install: 'go get github.com/blackroad-os/blackroad-sdk-go' },
  { name: 'Ruby', package: 'blackroad', repo: 'https://github.com/BlackRoad-OS/blackroad-sdk/tree/main/ruby', install: 'gem install blackroad' },
  { name: 'Rust', package: 'blackroad', repo: 'https://github.com/BlackRoad-OS/blackroad-sdk/tree/main/rust', install: 'cargo add blackroad' },
];

// Quick start guides
const QUICKSTARTS = [
  { title: 'Getting Started', description: 'Install SDK and make your first API call', time: '5 min' },
  { title: 'Deploy Your First Agent', description: 'Create and deploy an AI agent', time: '10 min' },
  { title: 'Set Up Webhooks', description: 'Receive real-time event notifications', time: '5 min' },
  { title: 'Send Emails', description: 'Use beautiful email templates', time: '3 min' },
];

function generateHTML(): string {
  return '<!DOCTYPE html>' +
'<html lang="en">' +
'<head>' +
'  <meta charset="UTF-8">' +
'  <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
'  <title>BlackRoad Developer Portal</title>' +
'  <style>' +
'    * { margin: 0; padding: 0; box-sizing: border-box; }' +
'    body {' +
'      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;' +
'      background: #000;' +
'      color: #fff;' +
'      min-height: 100vh;' +
'    }' +
'    .header {' +
'      background: linear-gradient(135deg, #111 0%, #000 100%);' +
'      border-bottom: 1px solid #333;' +
'      padding: 21px 34px;' +
'      display: flex;' +
'      justify-content: space-between;' +
'      align-items: center;' +
'    }' +
'    .logo {' +
'      font-size: 21px;' +
'      font-weight: bold;' +
'      background: linear-gradient(135deg, #F5A623 0%, #FF1D6C 100%);' +
'      -webkit-background-clip: text;' +
'      -webkit-text-fill-color: transparent;' +
'    }' +
'    .nav { display: flex; gap: 21px; }' +
'    .nav a { color: #888; text-decoration: none; font-size: 14px; }' +
'    .nav a:hover { color: #fff; }' +
'    .hero {' +
'      text-align: center;' +
'      padding: 89px 34px;' +
'      background: linear-gradient(180deg, #111 0%, #000 100%);' +
'    }' +
'    .hero h1 {' +
'      font-size: 55px;' +
'      background: linear-gradient(135deg, #F5A623 0%, #FF1D6C 38.2%, #9C27B0 61.8%, #2979FF 100%);' +
'      -webkit-background-clip: text;' +
'      -webkit-text-fill-color: transparent;' +
'      margin-bottom: 21px;' +
'    }' +
'    .hero p { color: #888; font-size: 21px; max-width: 600px; margin: 0 auto 34px; }' +
'    .cta-group { display: flex; gap: 13px; justify-content: center; }' +
'    .cta {' +
'      display: inline-block;' +
'      padding: 13px 34px;' +
'      border-radius: 8px;' +
'      text-decoration: none;' +
'      font-weight: 600;' +
'      transition: transform 0.2s;' +
'    }' +
'    .cta:hover { transform: scale(1.05); }' +
'    .cta-primary { background: linear-gradient(135deg, #FF1D6C 0%, #9C27B0 100%); color: #fff; }' +
'    .cta-secondary { background: #222; color: #fff; border: 1px solid #444; }' +
'    .container { max-width: 1200px; margin: 0 auto; padding: 55px 34px; }' +
'    .section-title {' +
'      font-size: 34px;' +
'      margin-bottom: 34px;' +
'      display: flex;' +
'      align-items: center;' +
'      gap: 13px;' +
'    }' +
'    .section-title span { color: #FF1D6C; }' +
'    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 21px; }' +
'    .card {' +
'      background: #111;' +
'      border: 1px solid #333;' +
'      border-radius: 13px;' +
'      padding: 21px;' +
'      transition: border-color 0.2s, transform 0.2s;' +
'    }' +
'    .card:hover { border-color: #FF1D6C; transform: translateY(-2px); }' +
'    .card-header { display: flex; justify-content: space-between; align-items: start; margin-bottom: 13px; }' +
'    .card-title { font-size: 18px; font-weight: 600; }' +
'    .card-badge {' +
'      font-size: 11px;' +
'      padding: 2px 8px;' +
'      border-radius: 4px;' +
'      background: #10B98133;' +
'      color: #10B981;' +
'    }' +
'    .card-desc { color: #888; font-size: 14px; line-height: 1.5; margin-bottom: 13px; }' +
'    .card-meta { font-size: 12px; color: #666; }' +
'    .card-link { color: #FF1D6C; text-decoration: none; font-size: 13px; }' +
'    .card-link:hover { text-decoration: underline; }' +
'    .sdk-card { display: flex; flex-direction: column; }' +
'    .sdk-install {' +
'      background: #000;' +
'      border-radius: 6px;' +
'      padding: 8px 13px;' +
'      font-family: monospace;' +
'      font-size: 12px;' +
'      color: #F5A623;' +
'      margin-top: auto;' +
'    }' +
'    .quickstart-card { cursor: pointer; }' +
'    .quickstart-time { color: #2979FF; font-size: 12px; }' +
'    .code-block {' +
'      background: #0a0a0a;' +
'      border: 1px solid #333;' +
'      border-radius: 8px;' +
'      padding: 21px;' +
'      font-family: monospace;' +
'      font-size: 13px;' +
'      overflow-x: auto;' +
'      margin: 21px 0;' +
'    }' +
'    .code-block .comment { color: #666; }' +
'    .code-block .keyword { color: #FF1D6C; }' +
'    .code-block .string { color: #10B981; }' +
'    .code-block .function { color: #2979FF; }' +
'    .footer {' +
'      border-top: 1px solid #333;' +
'      padding: 34px;' +
'      text-align: center;' +
'      color: #666;' +
'    }' +
'    .footer a { color: #FF1D6C; text-decoration: none; }' +
'    .stats { display: flex; justify-content: center; gap: 55px; margin-bottom: 55px; }' +
'    .stat { text-align: center; }' +
'    .stat-value { font-size: 34px; font-weight: bold; color: #FF1D6C; }' +
'    .stat-label { font-size: 13px; color: #888; margin-top: 8px; }' +
'  </style>' +
'</head>' +
'<body>' +
'  <header class="header">' +
'    <div class="logo">BlackRoad Developers</div>' +
'    <nav class="nav">' +
'      <a href="#services">Services</a>' +
'      <a href="#sdks">SDKs</a>' +
'      <a href="#quickstart">Quick Start</a>' +
'      <a href="https://github.com/BlackRoad-OS">GitHub</a>' +
'    </nav>' +
'  </header>' +
'  <section class="hero">' +
'    <h1>Build with BlackRoad</h1>' +
'    <p>Everything you need to integrate with BlackRoad infrastructure. APIs, SDKs, and documentation.</p>' +
'    <div class="cta-group">' +
'      <a href="#quickstart" class="cta cta-primary">Get Started</a>' +
'      <a href="https://blackroad-graphql-gateway.amundsonalexa.workers.dev/graphql" class="cta cta-secondary">Try GraphQL</a>' +
'    </div>' +
'  </section>' +
'  <div class="container">' +
'    <div class="stats">' +
'      <div class="stat"><div class="stat-value">4</div><div class="stat-label">Core APIs</div></div>' +
'      <div class="stat"><div class="stat-value">5</div><div class="stat-label">SDKs</div></div>' +
'      <div class="stat"><div class="stat-value">106</div><div class="stat-label">Webhook Events</div></div>' +
'      <div class="stat"><div class="stat-value">9</div><div class="stat-label">Email Templates</div></div>' +
'    </div>' +
'    <section id="services">' +
'      <h2 class="section-title"><span>//</span> Service Catalog</h2>' +
'      <div class="grid">' +
        SERVICES.map(function(s) {
          return '<div class="card">' +
            '<div class="card-header">' +
              '<span class="card-title">' + s.name + '</span>' +
              '<span class="card-badge">' + s.status + '</span>' +
            '</div>' +
            '<p class="card-desc">' + s.description + '</p>' +
            '<div class="card-meta">' + s.category + ' &bull; v' + s.version + '</div>' +
            '<a href="' + s.url + '" class="card-link" target="_blank">Open API &rarr;</a>' +
          '</div>';
        }).join('') +
'      </div>' +
'    </section>' +
'    <section id="sdks" style="margin-top: 55px;">' +
'      <h2 class="section-title"><span>//</span> Official SDKs</h2>' +
'      <div class="grid">' +
        SDKS.map(function(sdk) {
          return '<div class="card sdk-card">' +
            '<div class="card-title" style="margin-bottom: 8px;">' + sdk.name + '</div>' +
            '<p class="card-desc">' + sdk.package + '</p>' +
            '<a href="' + sdk.repo + '" class="card-link" target="_blank">View on GitHub &rarr;</a>' +
            '<div class="sdk-install">' + sdk.install + '</div>' +
          '</div>';
        }).join('') +
'      </div>' +
'    </section>' +
'    <section id="quickstart" style="margin-top: 55px;">' +
'      <h2 class="section-title"><span>//</span> Quick Start</h2>' +
'      <div class="code-block">' +
'<span class="comment">// Install the SDK</span>\n' +
'npm install @blackroad/sdk\n\n' +
'<span class="comment">// Initialize client</span>\n' +
'<span class="keyword">import</span> { BlackRoad } <span class="keyword">from</span> <span class="string">"@blackroad/sdk"</span>;\n\n' +
'<span class="keyword">const</span> client = <span class="keyword">new</span> <span class="function">BlackRoad</span>({ apiKey: <span class="string">"your-api-key"</span> });\n\n' +
'<span class="comment">// Get infrastructure stats</span>\n' +
'<span class="keyword">const</span> stats = <span class="keyword">await</span> client.<span class="function">getStats</span>();\n' +
'console.<span class="function">log</span>(stats.repositories); <span class="comment">// 1085</span>\n\n' +
'<span class="comment">// Create a webhook</span>\n' +
'<span class="keyword">const</span> webhook = <span class="keyword">await</span> client.webhooks.<span class="function">create</span>({\n' +
'  url: <span class="string">"https://example.com/webhook"</span>,\n' +
'  events: [<span class="string">"deployment.succeeded"</span>, <span class="string">"agent.error"</span>]\n' +
'});\n\n' +
'<span class="comment">// Send an email</span>\n' +
'<span class="keyword">await</span> client.email.<span class="function">sendWelcome</span>(<span class="string">"user@example.com"</span>, {\n' +
'  name: <span class="string">"John Doe"</span>\n' +
'});\n' +
'      </div>' +
'      <div class="grid">' +
        QUICKSTARTS.map(function(qs) {
          return '<div class="card quickstart-card">' +
            '<div class="card-title">' + qs.title + '</div>' +
            '<p class="card-desc">' + qs.description + '</p>' +
            '<span class="quickstart-time">' + qs.time + '</span>' +
          '</div>';
        }).join('') +
'      </div>' +
'    </section>' +
'  </div>' +
'  <footer class="footer">' +
'    <p>Built by <a href="https://blackroad.io">BlackRoad OS, Inc.</a></p>' +
'    <p style="margin-top: 8px;"><a href="https://blackroad-status.amundsonalexa.workers.dev">Status</a> &bull; <a href="https://github.com/BlackRoad-OS">GitHub</a> &bull; <a href="https://twitter.com/blackroados">Twitter</a></p>' +
'  </footer>' +
'</body>' +
'</html>';
}

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/services') {
      return jsonResponse({ services: SERVICES });
    }

    if (url.pathname === '/api/sdks') {
      return jsonResponse({ sdks: SDKS });
    }

    if (url.pathname === '/health') {
      return jsonResponse({ status: 'healthy', service: 'blackroad-dev-portal' });
    }

    return new Response(generateHTML(), {
      headers: { 'Content-Type': 'text/html' },
    });
  },
};
