# Simply Observable
This is a really simplified version of the RXJS observable class. It does not do anything more than notifying the subscribed functions when an event occurs somewhere.
# API
**Importing**
```typescript
import {SimpleObservable} from "simply-observable";
```
**Constructor**
```typescript
let myObservable = new SimpleObservable<T>();
```
**Subscribing to the observable**
```typescript
myObservable.subscribe((payload: T) => {
  console.log(payload);
});
```

**Unsubscribing**
```typescript
myObservable.unsubscribe(subscriberFunction);
```

**Notifying the subscribed functions with a payload value**
```typescript
myObservable.next("Hello world!");
```
