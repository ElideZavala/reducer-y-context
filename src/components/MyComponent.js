import { useStore, useDispatch } from "../store/StoreProvider";
import { types } from "../store/storeReducer";

const MyComponent = () => {
  const { user, product } = useStore();
  const dispatch = useDispatch();

  return (
    <div>
      <h1>My Component</h1>
      <h2>User: {user?.name}</h2>
      <button onClick={() => dispatch({ type: types.AUTH_LOGOUT })}>
        Logout
      </button>
      <button
        onClick={() =>
          dispatch({ type: types.AUTH_LOGIN, payload: { id: 1, name: "Luis" } })
        }
      >
        Login
      </button>

      <h2>Products</h2>
      <ul>
        {product.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: types.PRODUCT_DELETE_ALL })}>
        Delete All
      </button>
      <button onClick={() => dispatch({ type: types.PRODUCT_CHANGE })}>
        Change
      </button>
    </div>
  );
};

export default MyComponent;
