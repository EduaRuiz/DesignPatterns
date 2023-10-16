export class VideoFile {
  constructor(private name: string) {}
  getName(): string {
    return this.name;
  }
  decode(): string {
    return 'Video decoding';
  }
}

export class OggCompressionCodec {
  compress(): string {
    return 'Ogg compression';
  }
}

export class MPEG4CompressionCodec {
  compress(): string {
    return 'MPEG4 compression';
  }
}

export class CodecFactory {
  static extract(file: VideoFile): string {
    const type = file.getName().split('.')[1];
    switch (type) {
      case 'mp4':
        return new MPEG4CompressionCodec().compress();
      case 'ogg':
        return new OggCompressionCodec().compress();
      default:
        return '';
    }
  }
}

export class BitrateReader {
  static read(file: VideoFile, codec: string): string {
    return `Reading ${file.getName()} file with ${codec}`;
  }

  static convert(buffer: string, codec: string): string {
    return `Converting ${buffer} buffer to ${codec}`;
  }
}

export class AudioMixer {
  static fix(buffer: string): string {
    return `Fixing ${buffer} buffer`;
  }
}

export class VideoConverter {
  convert(file: VideoFile, format: string): string {
    const sourceCodec = CodecFactory.extract(file);
    let destinationCodec = '';
    if (sourceCodec === 'mp4') {
      const destinationCodec = new MPEG4CompressionCodec().compress();
    } else {
      const destinationCodec = new OggCompressionCodec().compress();
    }
    const buffer = BitrateReader.read(file, sourceCodec);
    const result = BitrateReader.convert(buffer, destinationCodec);
    const fixedResult = AudioMixer.fix(result);
    return `Video conversion result: ${fixedResult}`;
  }
}
