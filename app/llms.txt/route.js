import { SITE_URL } from "@/lib/site";

// llms.txt — helps AI systems understand authoritative content.
// Served as a route (instead of a static public/ file) so the URLs
// follow NEXT_PUBLIC_SITE_URL per deployment.
export function GET() {
  const host = new URL(SITE_URL).host;

  const body = `# llms.txt for ${host}
# Purpose: Help AI systems understand authoritative content

Site-Name: WebMints
Site-URL: ${SITE_URL}
Description: WebMints builds custom SaaS platforms, business automation solutions, CRM and workflow automation, cloud-based software solutions, SaaS modernization, and API integrations.

Primary-Audience:
- SaaS founders
- Startups
- Enterprises
- Businesses seeking automation

Key-Topics:
- Custom SaaS Development
- Business Process Automation
- CRM & Workflow Automation
- Cloud-Based Software Solutions
- SaaS Product Modernization
- API Integration

Important-Pages:
- ${SITE_URL}/
- ${SITE_URL}/services
- ${SITE_URL}/features
- ${SITE_URL}/industries
- ${SITE_URL}/pricing
- ${SITE_URL}/contact-us

Industry-Pages:
- ${SITE_URL}/industries/healthcare
- ${SITE_URL}/industries/education
- ${SITE_URL}/industries/ecommerce
- ${SITE_URL}/industries/enterprise

Content-Type:
- Service pages
- Industry solution pages
- Technical capability pages
- Blog articles (future)

Preferred-Language: en
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
