import { ReactiveController, ReactiveControllerHost } from 'lit';

export class CounterController implements ReactiveController {
  private host: ReactiveControllerHost;

  private _counter = 0;

  public get counter() {
    return this._counter;
  }

  constructor(host: ReactiveControllerHost, intialCount?: number) {
    if (intialCount) this.setCounter(intialCount);
    this.host = host;
    this.host.addController(this);
  }

  private setCounter(value: number) {
    this._counter = value;
    this.host.requestUpdate();
  }

  public increment() {
    this.setCounter(this._counter + 1);
  }

  public decrement() {
    this.setCounter(this._counter - 1);
  }

  // eslint-disable-next-line class-methods-use-this
  public hostConnected() {}

  // eslint-disable-next-line class-methods-use-this
  public hostDisconnected() {}
}
