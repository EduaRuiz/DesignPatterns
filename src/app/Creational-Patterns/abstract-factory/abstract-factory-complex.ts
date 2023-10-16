export interface GuiFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

export interface Button {
  render(): void;
  onClick(): void;
}

export interface Checkbox {
  render(): void;
  onChange(): void;
}

export class WindowsButton implements Button {
  render(): void {
    console.log('Windows button rendered');
  }
  onClick(): void {
    console.log('Windows button clicked');
  }
}

export class WindowsCheckbox implements Checkbox {
  render(): void {
    console.log('Windows checkbox rendered');
  }
  onChange(): void {
    console.log('Windows checkbox changed');
  }
}

export class WindowsGuiFactory implements GuiFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

export class WebButton implements Button {
  render(): void {
    console.log('Web button rendered');
  }
  onClick(): void {
    console.log('Web button clicked');
  }
}

export class WebCheckbox implements Checkbox {
  render(): void {
    console.log('Web checkbox rendered');
  }
  onChange(): void {
    console.log('Web checkbox changed');
  }
}

export class WebGuiFactory implements GuiFactory {
  createButton(): Button {
    return new WebButton();
  }
  createCheckbox(): Checkbox {
    return new WebCheckbox();
  }
}

export class Application {
  dialog!: GuiFactory;

  initialize(): void {
    const config = 'Windows';
    if (config === 'Windows') {
      this.dialog = new WindowsGuiFactory();
    } else if (config === 'Web') {
      this.dialog = new WebGuiFactory();
    } else {
      throw new Error('Error! Unknown operating system.');
    }
  }

  main(): void {
    this.initialize();
    this.dialog.createButton().render();
    this.dialog.createCheckbox().render();
  }
}
