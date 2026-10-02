import {siteUrl} from '../../lib/site-url';

export function GET() {
  const baseUrl = siteUrl?.origin ?? '';
  const content = `# Ovichem Consult Limited

> Nigerian chemical, environmental services, and engineering company based in Effurun-Warri, Delta State.

## Company
- Location: Suite 1.03 Alfa Plaza, Opposite Coca Cola Depot, Enerhen Road, Enerhen, Effurun, Warri, Delta State, Nigeria
- Email: ovichemconsultltd@yahoo.com
- Phone and WhatsApp: +234 816 802 7338
- Service area: Warri, Delta State, and projects across Nigeria

## Services
- Industrial and laboratory chemical supply
- Environmental audit reporting, air quality monitoring, and noise measurement
- Decontamination, disinfection, disinfestation, fumigation, and pest control
- Water treatment and water treatment plant installation, operation, and maintenance
- Engineering commissioning, rehabilitation, technical consultancy, and support

## Website
- Homepage: ${baseUrl}/
- Services: ${baseUrl}/#services
- Products: ${baseUrl}/#products
- Contact: ${baseUrl}/#contact
- Privacy policy: ${baseUrl}/privacy-policy
`;

  return new Response(content, {
    headers: {'Content-Type': 'text/plain; charset=utf-8'},
  });
}