export class SimpleObservable<T> {
    private listeners: ((payload: T) => void)[];

    constructor() {
        this.listeners = [];
    }

    subscribe(listener: (payload: T) => void) {
        this.listeners.push(listener);
    }

    unsubscribe(listener: (payload: T) => void) {
        this.listeners = this.listeners.filter(listener_ => {
            return listener != listener_
        });
    }

    next(payload: T) {
        this.listeners.forEach(listener => {
            listener(payload);
        });
    }
}
