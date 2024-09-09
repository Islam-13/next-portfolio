function Button({ activeTab, onclick, style, children }) {
  return (
    <button
      className={`${
        activeTab == children ? style : ""
      } border rounded-2xl px-4 capitalize tracking-wider`}
      onClick={() => onclick(children)}
    >
      {children}
    </button>
  );
}

export default Button;
