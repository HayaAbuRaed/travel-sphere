import { addToCart, cartSlice, removeFromCart } from "../cartSlice";
import { sampleCartItem, sampleCartState, sampleInitialState } from "./fixures";

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("cartSlice", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("should add an item to the cart correctly", () => {
    const nextState = cartSlice.reducer(
      sampleInitialState,
      addToCart(sampleCartItem)
    );

    expect(nextState.items).toHaveLength(1);
    expect(nextState.totalItems).toBe(1);
    expect(nextState.totalPrice).toBe(100);

    // Check if localStorage was updated
    expect(localStorage.getItem("cartItems")).toEqual(
      JSON.stringify(nextState)
    );
  });

  it("should not add an item if it already exists in the cart", () => {
    const setItemSpy = jest.spyOn(localStorage, "setItem");

    const nextState = cartSlice.reducer(
      sampleCartState,
      addToCart(sampleCartItem)
    );

    expect(nextState.items).toHaveLength(1);
    expect(nextState.totalItems).toBe(1);
    expect(nextState.totalPrice).toBe(100);

    // Check that localStorage.setItem was not called
    expect(setItemSpy).not.toHaveBeenCalled();
  });

  it("should remove an item from the cart", () => {
    const nextState = cartSlice.reducer(sampleCartState, removeFromCart(1));

    expect(nextState.items).toHaveLength(0);
    expect(nextState.totalItems).toBe(0);
    expect(nextState.totalPrice).toBe(0);

    // Check if localStorage was updated
    expect(localStorage.getItem("cartItems")).toEqual(
      JSON.stringify(nextState)
    );
  });

  it("should do nothing if the item to remove does not exist", () => {
    const setItemSpy = jest.spyOn(localStorage, "setItem");

    const nextState = cartSlice.reducer(sampleCartState, removeFromCart(2));

    expect(nextState.items).toHaveLength(1);
    expect(nextState.totalItems).toBe(1);
    expect(nextState.totalPrice).toBe(100);

    // Check that localStorage.setItem was not called
    expect(setItemSpy).not.toHaveBeenCalled();
  });
});
