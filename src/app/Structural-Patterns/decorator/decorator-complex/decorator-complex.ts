export interface DataSource {
  filename: string;
  data: string;
  writeData(data: string): void;
  readData(): string;
}

export class FileDataSource implements DataSource {
  filename: string;
  data: string = '';

  constructor(filename: string) {
    this.filename = filename;
  }

  writeData(data: string): void {
    this.data = data;
    console.log(`Write data to ${this.filename}`);
  }

  readData(): string {
    console.log(`Read data from ${this.filename}`);
    return this.data;
  }
}

export class DataSourceDecorator implements DataSource {
  filename: string;
  data: string;
  private wrappee: DataSource;

  constructor(source: DataSource) {
    this.wrappee = source;
    this.filename = source.filename;
    this.data = source.data;
  }

  writeData(data: string): void {
    this.wrappee.writeData(data);
  }

  readData(): string {
    return this.wrappee.readData();
  }
}

export class EncryptionDecorator extends DataSourceDecorator {
  override writeData(data: string): void {
    data = data + 'encrypted';
    super.writeData(data);
    console.log(`Encrypt data`);
  }

  override readData(): string {
    const data = super.readData();
    data.replace('encrypted', '');
    console.log(`Decrypt data`);
    return data;
  }
}

export class CompressionDecorator extends DataSourceDecorator {
  override writeData(data: string): void {
    data = data + 'compressed';
    super.writeData(data);
    console.log(`Compress data`);
  }

  override readData(): string {
    const data = super.readData();
    data.replace('compressed', '');
    console.log(`Decompress data`);
    return data;
  }
}

export class Application {
  dumbUsageExample(): void {
    const source = new FileDataSource('file.txt');
    source.writeData('sin decorador');
    const encryptedSource = new EncryptionDecorator(source);
    encryptedSource.writeData('con decorador de encriptar');

    const compressedEncryptedSource = new CompressionDecorator(encryptedSource);
    compressedEncryptedSource.writeData('encriptado y comprimido');
  }
}

export class SalaryManager {
  private source: DataSource;

  constructor(source: DataSource) {
    this.source = source;
  }

  load(): string {
    return this.source.readData();
  }

  save(): void {
    this.source.writeData('salaryRecords');
  }
}

export class ApplicationConfigurator {
  feature: string = 'simple';

  constructor(feature: string) {
    this.feature = feature;
  }
  configurationExample(): void {
    let source = new FileDataSource('salary.txt');
    if (this.feature === 'encrypted') {
      source = new EncryptionDecorator(source);
    }
    if (this.feature === 'compressed') {
      source = new CompressionDecorator(source);
    }

    const manager = new SalaryManager(source);
    manager.save();
    manager.load();
  }
}
