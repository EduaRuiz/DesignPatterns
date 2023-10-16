export class RemoteControl {
  protected device: Device;
  constructor(device: Device) {
    this.device = device;
  }

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  channelUp(): void {
    this.device.setChannel(this.device.getChannel() + 1);
  }

  channelDown(): void {
    this.device.setChannel(this.device.getChannel() - 1);
  }
}

export interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percent: number): void;
  getChannel(): number;
  setChannel(channel: number): void;
}

export class AdvancedRemoteControl extends RemoteControl {
  mute(): void {
    this.device.setVolume(0);
  }
}

export class Tv implements Device {
  private enabled = false;
  private volume = 0;
  private channel = 0;

  isEnabled(): boolean {
    return this.enabled;
  }

  enable(): void {
    this.enabled = true;
  }

  disable(): void {
    this.enabled = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(percent: number): void {
    if (percent > 100) {
      this.volume = 100;
    } else if (percent < 0) {
      this.volume = 0;
    } else {
      this.volume = percent;
    }
  }

  getChannel(): number {
    return this.channel;
  }

  setChannel(channel: number): void {
    this.channel = channel;
  }
}

export class Radio implements Device {
  private enabled = false;
  private volume = 0;
  private channel = 0;

  isEnabled(): boolean {
    return this.enabled;
  }

  enable(): void {
    this.enabled = true;
  }

  disable(): void {
    this.enabled = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(percent: number): void {
    if (percent > 100) {
      this.volume = 100;
    } else if (percent < 0) {
      this.volume = 0;
    } else {
      this.volume = percent;
    }
  }

  getChannel(): number {
    return this.channel;
  }

  setChannel(channel: number): void {
    this.channel = channel;
  }
}

export function clientCode(abstraction: RemoteControl): void {
  abstraction.togglePower();
  abstraction.volumeUp();
  abstraction.volumeDown();
  abstraction.channelUp();
  abstraction.channelDown();
}

clientCode(new RemoteControl(new Tv()));

clientCode(new AdvancedRemoteControl(new Tv()));

clientCode(new RemoteControl(new Radio()));

clientCode(new AdvancedRemoteControl(new Radio()));
