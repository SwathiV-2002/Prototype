import { CertificateRegistry, BasicCertificate } from './certificate';  
const registry = new CertificateRegistry();

// Create and register prototype certificates
const basicCertificatePrototype = new BasicCertificate("This is to certify that Swathi has completed the basic course.", "Simple", "Blue");

registry.addPrototype("basic", basicCertificatePrototype);

// Customize and display certificates
const customizedCertificate = registry.getPrototype("basic");
if (customizedCertificate) {
  customizedCertificate.customize("This is to certify that Swathi has completed the advanced course.", "Elegant", "Gold");
  customizedCertificate.display();
}
