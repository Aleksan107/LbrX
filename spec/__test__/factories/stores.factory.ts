import { Actions, ListStore, ListStoreConfig, ListStoreConfigOptions, Store, StoreConfig, StoreConfigOptions } from 'lbrx'
import { AllStoreHooks } from '__test__/types'

export class StoresFactory {

  public static createStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T | null
  ): Store<T, E> & AllStoreHooks<T, E>
  public static createStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T | null,
    storeName: string
  ): Store<T, E> & AllStoreHooks<T, E>
  public static createStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T | null,
    options: StoreConfigOptions
  ): Store<T, E> & AllStoreHooks<T, E>
  public static createStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T | null,
    withHooks: true
  ): Store<T, E> & AllStoreHooks<T, E>
  public static createStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T | null,
    withHooks: false
  ): Store<T, E>
  public static createStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T | null,
    storeName: string,
    withHooks: true
  ): Store<T, E> & AllStoreHooks<T, E>
  public static createStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T | null,
    storeName: string,
    withHooks: false
  ): Store<T, E>
  public static createStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T | null,
    options: StoreConfigOptions,
    withHooks: true
  ): Store<T, E> & AllStoreHooks<T, E>
  public static createStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T | null,
    options: StoreConfigOptions,
    withHooks: false
  ): Store<T, E>
  public static createStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T | null,
    storeNameOrWithHooksOrOptions?: string | boolean | StoreConfigOptions,
    withHooks?: boolean,
  ): Store<T, E> | Store<T, E> & AllStoreHooks<T, E> {
    const storeName = typeof storeNameOrWithHooksOrOptions == `string` ? storeNameOrWithHooksOrOptions : `TEST-STORE`
    const options: StoreConfigOptions = typeof storeNameOrWithHooksOrOptions == `object` && storeNameOrWithHooksOrOptions ?
      storeNameOrWithHooksOrOptions : { name: storeName }
    withHooks = typeof withHooks == `boolean` ?
      withHooks : typeof storeNameOrWithHooksOrOptions == `boolean` ?
        storeNameOrWithHooksOrOptions : false
    if (withHooks) {
      @StoreConfig(options)
      class TestStore extends Store<T, E> {
        constructor() {
          super(initialValue)
        }
        onBeforeInit(nextState: T): void | T { }
        onAfterInit(currState: T): void | T { }
        onAsyncInitSuccess(result: T): void | T { }
        onAsyncInitError(error: E): void | E { }
        osStateChange(action: Actions | string, nextState: T | null, currState: Readonly<T> | null): void | T { }
        onReset(nextState: T, currState: Readonly<T>): void | T { }
      }
      return new TestStore()
    } else {
      @StoreConfig(options)
      class TestStore extends Store<T, E> {
        constructor() {
          super(initialValue)
        }
      }
      return new TestStore()
    }
  }

  public static createListStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T[] | null
  ): ListStore<T, Id, E> & AllStoreHooks<T, E>
  public static createListStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T[] | null,
    storeName: string
  ): ListStore<T, Id, E> & AllStoreHooks<T, E>
  public static createListStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T[] | null,
    options: ListStoreConfigOptions<T>
  ): ListStore<T, Id, E> & AllStoreHooks<T, E>
  public static createListStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T[] | null,
    withHooks: true
  ): ListStore<T, Id, E> & AllStoreHooks<T, E>
  public static createListStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T[] | null,
    withHooks: false
  ): ListStore<T, Id, E>
  public static createListStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T[] | null,
    storeName: string,
    withHooks: true
  ): ListStore<T, Id, E> & AllStoreHooks<T, E>
  public static createListStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T[] | null,
    storeName: string,
    withHooks: false
  ): ListStore<T, Id, E>
  public static createListStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T[] | null,
    options: ListStoreConfigOptions<T>,
    withHooks: true
  ): ListStore<T, Id, E> & AllStoreHooks<T, E>
  public static createListStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T[] | null,
    options: ListStoreConfigOptions<T>,
    withHooks: false
  ): ListStore<T, Id, E>
  public static createListStore<T extends object, Id extends string | number | symbol = string, E = any>(
    initialValue: T[] | null,
    storeNameOrWithHooksOrOptions?: string | boolean | ListStoreConfigOptions<T>,
    withHooks?: boolean,
  ): ListStore<T, Id, E> | ListStore<T, Id, E> & AllStoreHooks<T, E> {
    const storeName = typeof storeNameOrWithHooksOrOptions == `string` ? storeNameOrWithHooksOrOptions : `TEST-STORE`
    const options: ListStoreConfigOptions<T> = typeof storeNameOrWithHooksOrOptions == `object` && storeNameOrWithHooksOrOptions ?
      storeNameOrWithHooksOrOptions : { name: storeName }
    withHooks = typeof withHooks == `boolean` ?
      withHooks : typeof storeNameOrWithHooksOrOptions == `boolean` ?
        storeNameOrWithHooksOrOptions : false
    if (withHooks) {
      @ListStoreConfig(options)
      class TestStore extends ListStore<T, Id, E> {
        constructor() {
          super(initialValue)
        }
        onBeforeInit(nextState: T[]): void | T[] { }
        onAfterInit(currState: T[]): void | T[] { }
        onAsyncInitSuccess(result: T[]): void | T[] { }
        onAsyncInitError(error: E): void | E { }
        osStateChange(action: Actions | string, nextState: T | null, currState: Readonly<T> | null): void | T { }
        onReset(nextState: T[], currState: Readonly<T[]>): void | T[] { }
      }
      return new TestStore()
    } else {
      @ListStoreConfig(options)
      class TestStore extends ListStore<T, Id, E> {
        constructor() {
          super(initialValue)
        }
      }
      return new TestStore()
    }
  }

  public static createStoreWithNoConfig<T extends object, E = any>(initialValue: T | null): Store<T, E> {
    class TestStore extends Store<T, E> {
      constructor() {
        super(initialValue)
      }
    }
    return new TestStore()
  }
}
