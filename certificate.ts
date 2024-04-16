// certificate.ts

// Interface representing a certificate
interface Certificate {
    clone(): Certificate;
    customize(content: string, design: string, color: string): void;
    display(): void;
  }
  
  // Concrete certificate class - BasicCertificate
  class BasicCertificate implements Certificate {
    constructor(public content: string, public design: string, public color: string) {}
  
    // Clone the certificate
    clone(): Certificate {
      return new BasicCertificate(this.content, this.design, this.color);
    }
  
    // Customize the content, design, and color of the certificate
    customize(content: string, design: string, color: string): void {
      this.content = content;
      this.design = design;
      this.color = color;
    }
  
    // Display the certificate details
    display(): void {
      console.log(`Certificate Content: ${this.content}, Design: ${this.design}, Color: ${this.color}`);
    }
  }
  
  // CertificateRegistry class to manage prototype certificates
  class CertificateRegistry {
    private prototypes: { [key: string]: Certificate } = {};
    addPrototype(key: string, certificate: Certificate): void {
      this.prototypes[key] = certificate;
    }
    getPrototype(key: string): Certificate | undefined {
      return this.prototypes[key]?.clone();
    }
  }
  
  export { Certificate, BasicCertificate, CertificateRegistry };
  