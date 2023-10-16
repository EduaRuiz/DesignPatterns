export abstract class Dialog {
  abstract createButton(): Button;

  render(): void {
    const okButton = this.createButton();
    okButton.onClick();
    okButton.render();
  }
}

export interface Button {
  render(): void;
  onClick(): void;
}

export class WindowsButton implements Button {
  render(): void {
    console.log('Windows button rendered');
  }
  onClick(): void {
    console.log('Windows button clicked');
  }
}

export class WindowsDialog extends Dialog {
  createButton(): Button {
    return new WindowsButton();
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

export class WebDialog extends Dialog {
  createButton(): Button {
    return new WebButton();
  }
}

export class Application {
  dialog!: Dialog;

  initialize(): void {
    const config = 'Windows';
    if (config === 'Windows') {
      this.dialog = new WindowsDialog();
    } else if (config === 'Web') {
      this.dialog = new WebDialog();
    } else {
      throw new Error('Error! Unknown operating system.');
    }
  }

  main(): void {
    this.initialize();
    this.dialog.render();
  }
}
